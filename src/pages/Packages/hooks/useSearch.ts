import { useState, useCallback, useEffect } from 'react';
import { SearchableItem } from '../types';

const SEARCH_DEBOUNCE_DELAY = 300;

interface UseSearchReturn {
  searchResults: SearchableItem[];
}

interface UseSearchProps {
  allSearchableData: SearchableItem[];
  dataLoading: boolean;
  dataLoaded: boolean;
  searchQuery: string;
}

export const useSearch = ({
  allSearchableData,
  dataLoading,
  dataLoaded,
  searchQuery
}: UseSearchProps): UseSearchReturn => {
  const [searchResults, setSearchResults] = useState<SearchableItem[]>([]);

  const performSearch = useCallback((query: string) => {
    if (!query.trim() || dataLoading || !dataLoaded) {
      setSearchResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = allSearchableData.filter((item: SearchableItem) => {
      const name = item.name.toLowerCase();
      const description = item.description.toLowerCase();
      const module = (item.module || '').toLowerCase();

      return name.includes(lowerQuery) || 
             description.includes(lowerQuery) || 
             module.includes(lowerQuery);
    });

    setSearchResults(filtered);
  }, [allSearchableData, dataLoading, dataLoaded]);

  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(searchQuery);
    }, SEARCH_DEBOUNCE_DELAY);

    return () => clearTimeout(timer);
  }, [searchQuery, performSearch]);

  return { searchResults };
};