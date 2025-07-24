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
      
      {/* Package Manager Description */}
      {/* <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4 py-8">
        <div className="bg-[#242628] border border-[#383737] rounded-3xl p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white-custom mb-4">
              A Rather Unique Package Manager
            </h2>
            <p className="text-lg text-gray-light max-w-4xl mx-auto">
              Functions and types are individually versioned and immutable, taking a lot of the hassle out of package management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#1a1a1a] rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-lbg rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white-custom mb-3">Function-Level Packages</h3>
              <p className="text-sm text-gray-light">
                Only download the specific functions you use. Only upgrade what you want to upgrade.
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-lg p-6">
              <div className="w-12 h-12 bg-purple-lbg rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white-custom mb-3">Immutable & Safe</h3>
              <p className="text-sm text-gray-light">
                Automated dependency upgrades. We track deprecation and know which functions are pure and safe to update.
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-lg p-6">
              <div className="w-12 h-12 bg-mint rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white-custom mb-3">Multiple Versions</h3>
              <p className="text-sm text-gray-light">
                Use multiple versions of the same function at once. Test new versions without changing entire packages.
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-lg p-6">
              <div className="w-12 h-12 bg-taupe rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white-custom mb-3">Easy Sharing</h3>
              <p className="text-sm text-gray-light">
                Share pre-release functions trivially. No git repos, no complex setup. Code syncs as you write.
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-lg p-6">
              <div className="w-12 h-12 bg-rose rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white-custom mb-3">Run Directly</h3>
              <p className="text-sm text-gray-light">
                Run any function directly: <code className="text-blue-300">dark run @username.functionName</code>. Like npx but better.
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-lg p-6">
              <div className="w-12 h-12 bg-sand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white-custom mb-3">Source Repository</h3>
              <p className="text-sm text-gray-light">
                The package manager functions as a source repository. No uploads, releases, or synchronization needed.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
            <h3 className="text-lg font-semibold text-white-custom mb-3">Currently Public, Future Private</h3>
            <p className="text-gray-light">
              Our package manager currently focuses on hosting public code. In the future, 
              it will also host and manage private code, traces, and binary data like images.
            </p>
          </div>
        </div>
      </div> */}

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
