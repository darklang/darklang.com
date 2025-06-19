import React from 'react';
import ActionButton from './ActionButton';
import { SelectedItem } from './types';

interface TabItem {
  name: string;
  signature?: string;
  description: string;
}

interface TabContentProps {
  type: 'functions' | 'types' | 'constants';
  selectedPackage: string;
  sidebarItemsData: Record<string, any>;
  sidebarLoadingStates: Record<string, boolean>;
  searchQuery: string;
  selectedItem: SelectedItem | null;
  onFetchItemData: (packageName: string) => void;
  onSearchClear: () => void;
}

const TabContent: React.FC<TabContentProps> = ({
  type,
  selectedPackage,
  sidebarItemsData,
  sidebarLoadingStates,
  searchQuery,
  selectedItem,
  onFetchItemData,
  onSearchClear
}) => {
  const currentSidebarData = sidebarItemsData[selectedPackage];
  const isLoading = sidebarLoadingStates[selectedPackage] || false;

  // Get the appropriate data based on type
  const getItemData = (): TabItem[] => {
    if (!currentSidebarData) return [];

    switch (type) {
      case 'functions':
        return currentSidebarData.fullFunctionData || [];
      case 'types':
        return currentSidebarData.fullTypeData || [];
      case 'constants':
        return currentSidebarData.fullConstantData || [];
      default:
        return [];
    }
  };

  const rawData = getItemData();

  // Filter items based on search query
  const filteredItems = rawData.filter((item: TabItem) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();

    const name = item.name?.toLowerCase() || '';
    const description = item.description?.toLowerCase() || '';
    const signature = item.signature?.toLowerCase() || '';

    return name.includes(query) || description.includes(query) || signature.includes(query);
  });

  // Get display configuration based on type
  const getDisplayConfig = () => {
    switch (type) {
      case 'functions':
        return {
          singular: 'function',
          plural: 'functions',
          color: 'text-blue-dbg',
          emptyMessage: 'No functions found for this module.'
        };
      case 'types':
        return {
          singular: 'type',
          plural: 'types',
          color: 'text-purple-dbg',
          emptyMessage: 'No types found for this module.'
        };
      case 'constants':
        return {
          singular: 'constant',
          plural: 'constants',
          color: 'text-sand',
          emptyMessage: 'No constants found for this module.'
        };
      default:
        return {
          singular: 'item',
          plural: 'items',
          color: 'text-gray-400',
          emptyMessage: 'No items found.'
        };
    }
  };

  const config = getDisplayConfig();

  // Handle loading state
  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-2">Loading {config.plural}...</div>
        <div className="text-gray-500 text-sm">Fetching {config.singular} information</div>
      </div>
    );
  }

  // Handle case where we need to fetch data
  if (!currentSidebarData && selectedPackage) {
    onFetchItemData(selectedPackage);
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-2">Loading {config.plural}...</div>
        <div className="text-gray-500 text-sm">Fetching {config.singular} information</div>
      </div>
    );
  }

  // Handle empty state
  if (filteredItems.length === 0) {
    return (
      <div className="text-center py-12">
        {searchQuery ? (
          <>
            <p className="text-gray-400 mb-2">No {config.plural} found matching "{searchQuery}"</p>
            <button
              onClick={onSearchClear}
              className="text-purple-400 hover:text-purple-300 text-sm"
            >
              Clear search to show all {config.plural}
            </button>
          </>
        ) : (
          <p className="text-gray-400 mb-4">{config.emptyMessage}</p>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {searchQuery && (
        <div className="text-sm text-gray-400 mb-4">
          Showing {filteredItems.length} of {rawData.length} {config.plural}
        </div>
      )}

      {filteredItems.map((item: TabItem, index: number) => (
        <div
          key={index}
          id={`${config.singular}-${item.name}`}
          className={`px-3 py-3 transition-colors border-b border-b-[#3E3E3E] rounded ${selectedItem?.type === config.singular && selectedItem?.name === item.name
            ? 'bg-[#242323]'
            : ''
            }`}
        >
          <div className="mb-4">
            <h3 className={`font-code mb-2 text-sm ${selectedItem?.type === config.singular && selectedItem?.name === item.name
              ? 'text-purple-dbg'
              : config.color
              }`}>
              {type === 'functions' ? item.signature : item.name}
            </h3>
            <p className="text-gray-light text-sm">
              {item.description}
            </p>
          </div>

          <div className="flex space-x-2">
            <ActionButton text="Docs" variant="primary" />
            <ActionButton text="Usages" />
            <ActionButton text="Tests" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabContent;