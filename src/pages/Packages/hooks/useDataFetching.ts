import { useState, useCallback, useEffect } from "react";
import { ApiResponse, SearchableItem } from "../types";
import { processApiResponse } from "../utils/dataProcessing";

const API_BASE_URL = "http://dark-packages.dlio.localhost:11001";

interface UseDataFetchingReturn {
  modules: string[][];
  allSearchableData: SearchableItem[];
  dataLoading: boolean;
  dataLoaded: boolean;
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
}

export const useDataFetching = (): UseDataFetchingReturn => {
  const [modules, setModules] = useState<string[][]>([]);
  const [allSearchableData, setAllSearchableData] = useState<SearchableItem[]>(
    [],
  );
  const [dataLoading, setDataLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAllSearchableData = useCallback(async () => {
    setDataLoading(true);
    setDataLoaded(false);

    try {
      // Get all top-level modules
      const topLevelUrl = `${API_BASE_URL}/search?searchDepth=direct&entityTypes=module,function,type,value&text=&modules=&exactMatch=false`;
      const topLevelResponse = await fetch(topLevelUrl);

      if (!topLevelResponse.ok) {
        throw new Error(`HTTP error! status: ${topLevelResponse.status}`);
      }

      const topLevelData: ApiResponse = await topLevelResponse.json();
      const allData: SearchableItem[] = [...processApiResponse(topLevelData)];

      // Fetch data for each submodule
      if (topLevelData.submodules) {
        const modulePromises = topLevelData.submodules.map(async modulePath => {
          try {
            const modulePathStr = Array.isArray(modulePath)
              ? modulePath.join(".")
              : modulePath;
            const moduleUrl = `${API_BASE_URL}/search?searchDepth=direct&entityTypes=module,function,type,value&text=&modules=${encodeURIComponent(modulePathStr)}&exactMatch=true`;

            const moduleResponse = await fetch(moduleUrl);
            if (moduleResponse.ok) {
              const moduleData: ApiResponse = await moduleResponse.json();
              return processApiResponse(moduleData, modulePathStr);
            }
            return [];
          } catch (err) {
            console.warn(`Failed to fetch data for module ${modulePath}:`, err);
            return [];
          }
        });

        const moduleResults = await Promise.all(modulePromises);
        allData.push(...moduleResults.flat());
      }

      setAllSearchableData(allData);
      setDataLoaded(true);
    } catch (err) {
      console.error("Error fetching searchable data:", err);
      setError(
        err instanceof Error ? err.message : "Failed to fetch searchable data",
      );
    } finally {
      setDataLoading(false);
    }
  }, []);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const url = `${API_BASE_URL}/search?searchDepth=direct&entityTypes=module&modules=&exactMatch=false`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ApiResponse = await response.json();

      // Filter to show only Owner.Module pairs
      const ownerModules = (data.submodules || []).filter(
        (modulePath: string[]) =>
          Array.isArray(modulePath) && modulePath.length === 2,
      );

      setModules(ownerModules);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to fetch data";
      console.error("API Error:", errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAllSearchableData();
    fetchData();
  }, [fetchAllSearchableData, fetchData]);

  return {
    modules,
    allSearchableData,
    dataLoading,
    dataLoaded,
    loading,
    error,
    fetchData,
  };
};
