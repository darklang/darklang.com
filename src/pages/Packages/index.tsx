import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import Sidebar from "./components/Sidebar";
import PackageList from "./components/PackageList";
import { useDataFetching, useSearch } from "./hooks";
import { SearchableItem } from "./types";

const Packages: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const isSearchMode = !!searchQuery.trim();

  const {
    modules,
    allSearchableData,
    dataLoading,
    dataLoaded,
    loading,
    error,
    fetchData,
  } = useDataFetching();

  const { searchResults } = useSearch({
    allSearchableData,
    dataLoading,
    dataLoaded,
    searchQuery,
  });

  // Filter modules based on active filter
  const filteredModules = useMemo(() => {
    if (activeFilter === "All") {
      return modules;
    }

    if (activeFilter === "Darklang") {
      return modules.filter(module => {
        const moduleName = Array.isArray(module)
          ? module.join(".")
          : String(module);
        return moduleName.toLowerCase().startsWith("darklang");
      });
    }

    return modules;
  }, [modules, activeFilter]);

  const filteredSearchResults = useMemo(() => {
    if (activeFilter === "All") {
      return searchResults;
    }

    if (activeFilter === "Darklang") {
      return searchResults.filter(result => {
        if (result.module) {
          return result.module.toLowerCase().startsWith("darklang");
        }

        if (result.type === "module") {
          const moduleName = Array.isArray(result.path)
            ? result.path.join(".")
            : result.name;
          return moduleName.toLowerCase().startsWith("darklang");
        }

        // For other types without explicit module info, default to include if no module specified
        return (
          !result.module || result.module.toLowerCase().startsWith("darklang")
        );
      });
    }

    return searchResults;
  }, [searchResults, activeFilter]);

  const handleItemClick = (item: string | string[] | SearchableItem) => {
    if (isSearchMode && typeof item === "object" && "type" in item) {
      if (item.type === "module") {
        const modulePath = Array.isArray(item.path)
          ? item.path
          : item.name.split(".");
        navigate(`/packages/${encodeURIComponent(modulePath.join("."))}`);
      } else {
        if (item.module) {
          navigate(
            `/packages/${encodeURIComponent(item.module)}#${encodeURIComponent(item.name)}`,
          );
        }
      }
    } else {
      const modulePath = Array.isArray(item)
        ? item
        : typeof item === "string"
          ? item.split(".")
          : [];
      navigate(`/packages/${modulePath.join(".")}`);
    }
  };

  const resultCount = isSearchMode
    ? filteredSearchResults.length
    : filteredModules.length;
  const title = isSearchMode
    ? dataLoading && searchQuery
      ? `Searching for "${searchQuery}"...`
      : `${resultCount} search results`
    : loading
      ? "Loading..."
      : `${resultCount} modules`;

  return (
    <div className="min-h-screen bg-dark relative overflow-hidden">
      <Header />
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl text-white-custom font-medium">{title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <PackageList
            isSearchMode={isSearchMode}
            searchQuery={searchQuery}
            searchResults={filteredSearchResults}
            dataLoading={dataLoading}
            dataLoaded={dataLoaded}
            modules={filteredModules}
            loading={loading}
            error={error}
            onItemClick={handleItemClick}
            onRetry={fetchData}
          />
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Packages;
