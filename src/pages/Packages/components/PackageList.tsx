import React from "react";
import PackageCard from "../PackageCard";
import logoTransparent from "../../../assets/logo-dark-transparent.png";

interface PackageListProps {
  isSearchMode: boolean;
  searchQuery: string;
  searchResults: any[];
  dataLoading: boolean;
  dataLoaded: boolean;

  modules: any[];
  loading: boolean;
  error: string | null;

  onItemClick: (item: string | string[] | any) => void;
  onRetry: () => void;
}

const PackageList: React.FC<PackageListProps> = ({
  isSearchMode,
  searchQuery,
  searchResults,
  dataLoading,
  dataLoaded,
  modules,
  loading,
  error,
  onItemClick,
  onRetry
}) => {
  const getTypeTag = (type: string) => {
    switch (type) {
      case 'function': return 'ƒ function';
      case 'type': return '🇹 type';
      case 'constant': return '𝐂 constant';
      case 'module': return '📦 module';
      default: return '🔹 item';
    }
  };

  return (
    <div className="lg:col-span-2 space-y-6">
      {!isSearchMode && loading && (
        <div className="text-center py-12">
          <p className="text-gray-light text-lg">Loading modules...</p>
        </div>
      )}

      {!isSearchMode && error && (
        <div className="text-center py-12">
          <p className="text-red-400 text-lg mb-2">Error: {error}</p>
          <button
            onClick={onRetry}
            className="bg-purple-lbg hover:bg-purple-dbg text-white-custom py-2 px-4 rounded-lg font-medium transition-colors"
          >
            Retry
          </button>
        </div>
      )}

      {isSearchMode && dataLoading && searchQuery && (
        <div className="text-center py-12">
          <div className="animate-spin mx-auto w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full mb-4"></div>
          <p className="text-gray-light text-lg mb-2">
            Searching for "{searchQuery}"...
          </p>
          <p className="text-gray-light text-sm">
            Loading search data in the background. Results will appear shortly.
          </p>
        </div>
      )}

      {isSearchMode && searchResults.length === 0 && searchQuery && dataLoaded && !dataLoading && (
        <div className="text-center py-12">
          <p className="text-gray-light text-lg">
            No results found for "{searchQuery}"
          </p>
        </div>
      )}

      {!isSearchMode && !loading && !error && modules.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-light text-lg">
            No modules found
          </p>
        </div>
      )}

      {/* to display search results*/}
      {isSearchMode && searchResults.length > 0 && (
        searchResults.map((result, index) => (
          <PackageCard
            key={`search-${index}`}
            name={result.name}
            author={result.module ? `${result.module}` : "Darklang"}
            description={result.description}
            tags={[getTypeTag(result.type), result.module || "darklang"]}
            // stars={Math.floor(Math.random() * 1000) + 100}
            // downloads={Math.floor(Math.random() * 5000) + 500}
            logo={logoTransparent}
            clickable={true}
            onCardClick={() => onItemClick(result)}
          />
        ))
      )}

      {/* to display the initial packages*/}
      {!isSearchMode && !loading && !error && modules.length > 0 && (
        modules.map((item, index) => {
          const displayName = Array.isArray(item) ? item.join('.') : String(item);
          const [owner, module] = displayName.split('.');
          const description = `${module} - Core functionality from ${owner} providing essential features and utilities.`;
          const tags = ["module", owner.toLowerCase(), "core"];

          return (
            <PackageCard
              key={`module-${index}`}
              name={displayName}
              author="By Darklang Team"
              description={description}
              tags={tags}
              // stars={Math.floor(Math.random() * 20000) + 5000}
              // downloads={Math.floor(Math.random() * 30000) + 10000}
              logo={logoTransparent}
              clickable={true}
              onCardClick={() => onItemClick(item)}
            />
          );
        })
      )}
    </div>
  );
};

export default PackageList;