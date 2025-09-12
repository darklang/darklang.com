import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SubModule, PackageData } from "./types";
import { useDarkPackagesApi, ProcessedSubmodule } from "./darkPackagesApi";
import { PackageDetailSidebar } from "./PackageDetailSidebar";
import {
  PackageHeader,
  SidebarPackage,
  SelectedItem,
  TabContent,
} from "./components";

const PackageDetail: React.FC = () => {
  const { packageName } = useParams<{ packageName: string }>();
  const navigate = useNavigate();
  const api = useDarkPackagesApi();

  // State for the currently selected package
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [activeTab, setActiveTab] = useState("Functions");
  const [packageData, setPackageData] = useState<PackageData | null>(null);
  const [initialLoading, setInitialLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sidebarPackages, setSidebarPackages] = useState<SidebarPackage[]>([]);
  const [expandedSidebarItems, setExpandedSidebarItems] = useState<Set<string>>(
    new Set(),
  );
  const [sidebarItemsData, setSidebarItemsData] = useState<Record<string, any>>(
    {},
  );
  const [sidebarLoadingStates, setSidebarLoadingStates] = useState<
    Record<string, boolean>
  >({});
  const [searchLoading, setSearchLoading] = useState(false);

  // State for selected items (functions, types, values)
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);
  const [pendingItemSelection, setPendingItemSelection] = useState<{
    type: "function" | "type" | "value";
    name: string;
    packagePath: string;
  } | null>(null);

  // State for search functionality
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Memoized API functions to prevent unnecessary re-renders
  const fetchSidebarItemData = useCallback(
    async (moduleName: string) => {
      setSidebarLoadingStates(prev => ({ ...prev, [moduleName]: true }));

      try {
        const processedData = await api.getProcessedModuleData(moduleName);

        setSidebarItemsData(prev => ({
          ...prev,
          [moduleName]: processedData,
        }));

        setSidebarPackages(prev =>
          prev.map(pkg => {
            if (pkg.path === moduleName) {
              return {
                ...pkg,
                stats: {
                  ...pkg.stats,
                  submodules: processedData.submodules.length,
                },
              };
            }
            return pkg;
          }),
        );
      } catch (err) {
        console.error(
          `Error fetching sidebar item data for ${moduleName}:`,
          err,
        );
      } finally {
        setSidebarLoadingStates(prev => ({ ...prev, [moduleName]: false }));
      }
    },
    [api],
  );

  // Search handler
  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  const fetchSiblingModules = useCallback(
    async (parentModule: string) => {
      try {
        const processedSiblings = await api.fetchSiblingModules(parentModule);
        setSidebarPackages(processedSiblings);
      } catch (err) {
        console.error("Error fetching sibling modules:", err);
      }
    },
    [api],
  );

  // Main function to fetch package details
  const fetchPackageDetails = useCallback(
    async (moduleName: string, isInitialLoad = false) => {
      if (isInitialLoad) {
        setInitialLoading(true);
      }
      setError(null);

      try {
        const processedData = await api.fetchPackageDetails(moduleName);

        setPackageData(processedData);

        if (
          processedData.isRootModule &&
          processedData.subModules &&
          processedData.subModules.length > 0
        ) {
          setActiveTab("Submodules");
        } else {
          setActiveTab("Functions");
        }

        if (processedData.isRootModule && processedData.subModules) {
          const sidebarPackagesWithCounts =
            await api.processInitialSidebarPackages(processedData.subModules);
          setSidebarPackages(sidebarPackagesWithCounts);
        } else if (!processedData.isRootModule) {
          const parts = moduleName.split(".");
          const parentModule = parts.slice(0, -1).join(".");
          fetchSiblingModules(parentModule);
        }
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to fetch package details",
        );
        console.error("Error fetching package details:", err);
      } finally {
        if (isInitialLoad) {
          setInitialLoading(false);
        }
      }
    },
    [fetchSiblingModules, api],
  );

  // Handler for sidebar clicks - updates both state and URL
  const handleSidebarPackageClick = useCallback(
    (packagePath: string) => {
      if (selectedPackage !== packagePath) {
        setSelectedPackage(packagePath);

        const encodedPackagePath = encodeURIComponent(packagePath);
        navigate(`/packages/${encodedPackagePath}`, { replace: true });

        setSelectedItem(null);
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );

        setExpandedSidebarItems(new Set([packagePath]));
        fetchSidebarItemData(packagePath);
      }
    },
    [selectedPackage, navigate, fetchSidebarItemData],
  );

  // Separate handler for expand/collapse
  const handleSidebarItemToggle = useCallback(
    (packagePath: string) => {
      setExpandedSidebarItems(prev => {
        const wasExpanded = prev.has(packagePath);

        if (wasExpanded) {
          const newExpanded = new Set(prev);
          newExpanded.delete(packagePath);
          return newExpanded;
        } else {
          const newExpanded = new Set([packagePath]);
          fetchSidebarItemData(packagePath);
          return newExpanded;
        }
      });
    },
    [fetchSidebarItemData],
  );

  // Handler for clicking on functions, types, values in sidebar
  const handleItemClick = useCallback(
    (
      itemType: "function" | "type" | "value",
      itemName: string,
      packagePath: string,
      event?: React.MouseEvent,
    ) => {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }

      if (packagePath === selectedPackage) {
        setSelectedItem({ type: itemType, name: itemName });

        const newUrl = `${window.location.pathname}${window.location.search}#${encodeURIComponent(itemName)}`;
        window.history.replaceState(null, "", newUrl);

        const tabMap = {
          function: "Functions",
          type: "Types",
          value: "Values",
        };
        setActiveTab(tabMap[itemType]);

        return;
      }

      setPendingItemSelection({ type: itemType, name: itemName, packagePath });

      const encodedPackageName = encodeURIComponent(packagePath);
      const newUrl = `/packages/${encodedPackageName}#${encodeURIComponent(itemName)}`;
      navigate(newUrl, { replace: true });

      setSelectedPackage(packagePath);
      setSelectedItem({ type: itemType, name: itemName });

      setExpandedSidebarItems(new Set([packagePath]));
      fetchSidebarItemData(packagePath);

      const tabMap = {
        function: "Functions",
        type: "Types",
        value: "Values",
      };
      setActiveTab(tabMap[itemType]);
    },
    [navigate, fetchSidebarItemData, selectedPackage],
  );

  // Handler for clicking on submodules in sidebar
  const handleSubmoduleClick = useCallback(
    (submoduleFullName: string, event?: React.MouseEvent) => {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }

      if (selectedPackage !== submoduleFullName) {
        setSelectedPackage(submoduleFullName);

        const encodedSubmoduleName = encodeURIComponent(submoduleFullName);
        navigate(`/packages/${encodedSubmoduleName}`, { replace: true });

        setSelectedItem(null);
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );

        setExpandedSidebarItems(new Set([submoduleFullName]));
        fetchSidebarItemData(submoduleFullName);
      }
    },
    [selectedPackage, navigate, fetchSidebarItemData],
  );

  // Group sidebar props into organized objects
  const sidebarState = {
    packages: sidebarPackages,
    expandedItems: expandedSidebarItems,
    itemsData: sidebarItemsData,
    loadingStates: sidebarLoadingStates,
    selectedPackage,
    selectedItem,
    searchQuery,
    searchLoading,
    activeTab,
  };

  const sidebarActions = {
    onNavigate: navigate,
    onPackageClick: handleSidebarPackageClick,
    onItemToggle: handleSidebarItemToggle,
    onItemClick: handleItemClick,
    onSubmoduleClick: handleSubmoduleClick,
    onSearchChange: handleSearchChange,
    onFetchItemData: fetchSidebarItemData,
    updateState: {
      setSearchLoading,
      setExpandedItems: setExpandedSidebarItems,
      setItemsData: setSidebarItemsData,
      setPackages: setSidebarPackages,
      setActiveTab,
    },
  };

  // Initial load from URL parameter
  useEffect(() => {
    if (packageName) {
      const decodedPackageName = decodeURIComponent(packageName);
      setSelectedPackage(decodedPackageName);
      fetchPackageDetails(decodedPackageName, true);
    }
  }, [packageName, fetchPackageDetails]);

  // Apply pending item selection after package data loads
  useEffect(() => {
    if (
      pendingItemSelection &&
      packageData &&
      packageData.fullName === pendingItemSelection.packagePath
    ) {
      setSelectedItem({
        type: pendingItemSelection.type,
        name: pendingItemSelection.name,
      });
      setActiveTab(
        {
          function: "Functions",
          type: "Types",
          value: "Values",
        }[pendingItemSelection.type],
      );

      setExpandedSidebarItems(new Set([pendingItemSelection.packagePath]));
      fetchSidebarItemData(pendingItemSelection.packagePath);

      setPendingItemSelection(null);
    }
  }, [packageData, pendingItemSelection, fetchSidebarItemData]);

  // Handle URL fragment after package data loads
  useEffect(() => {
    const fragment = decodeURIComponent(window.location.hash.substring(1));
    if (fragment && packageData && !packageData.isRootModule) {
      const functionMatch = packageData.functionList?.find(
        fn => fn.name === fragment,
      );
      const typeMatch = packageData.typeList?.find(
        type => type.name === fragment,
      );
      const valueMatch = packageData.valueList?.find(
        value => value.name === fragment,
      );

      if (functionMatch) {
        setSelectedItem({ type: "function", name: fragment });
        setActiveTab("Functions");
        setExpandedSidebarItems(new Set([selectedPackage]));
        if (selectedPackage) {
          fetchSidebarItemData(selectedPackage);
        }
      } else if (typeMatch) {
        setSelectedItem({ type: "type", name: fragment });
        setActiveTab("Types");
        setExpandedSidebarItems(new Set([selectedPackage]));
        if (selectedPackage) {
          fetchSidebarItemData(selectedPackage);
        }
      } else if (valueMatch) {
        setSelectedItem({ type: "value", name: fragment });
        setActiveTab("Values");
        setExpandedSidebarItems(new Set([selectedPackage]));
        if (selectedPackage) {
          fetchSidebarItemData(selectedPackage);
        }
      }
    } else if (!fragment) {
      setSelectedItem(null);
      if (selectedPackage) {
        setExpandedSidebarItems(new Set([selectedPackage]));
      }
    }
  }, [packageData, selectedPackage, fetchSidebarItemData]);

  // Fetch data when selected package changes
  useEffect(() => {
    if (selectedPackage) {
      if (!packageData || packageData.fullName !== selectedPackage) {
        fetchPackageDetails(selectedPackage, false);
      }
    }
  }, [selectedPackage, fetchPackageDetails, packageData]);

  // Scroll to selected item when it changes
  useEffect(() => {
    if (selectedItem) {
      const timer = setTimeout(() => {
        const element = document.getElementById(
          `${selectedItem.type}-${selectedItem.name}`,
        );
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        } else {
          setTimeout(() => {
            const retryElement = document.getElementById(
              `${selectedItem.type}-${selectedItem.name}`,
            );
            if (retryElement) {
              retryElement.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }
          }, 500);
        }
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [selectedItem, selectedPackage]);

  // Scroll to selected item in sidebar when sidebar data loads
  useEffect(() => {
    if (selectedItem && selectedPackage && sidebarItemsData[selectedPackage]) {
      const timer = setTimeout(() => {
        const sidebarElement = document.getElementById(
          `sidebar-${selectedItem.type}-${selectedItem.name}`,
        );
        if (sidebarElement) {
          sidebarElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [selectedItem, selectedPackage, sidebarItemsData]);

  if (initialLoading) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <div className="text-center">
          <div className="text-white text-lg mb-2">
            Loading package details...
          </div>
          <div className="text-gray-400 text-sm">
            Fetching module information and counts
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-400 text-lg mb-4">Error: {error}</div>
          <button
            onClick={() => navigate("/packages")}
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
          >
            Back to Packages
          </button>
        </div>
      </div>
    );
  }

  if (!packageData) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <div className="text-white">Package not found</div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#1a1a1a] text-white overflow-hidden">
      <div className="flex h-full">
        <PackageDetailSidebar
          packageData={packageData}
          state={sidebarState}
          actions={sidebarActions}
        />

        <div className="flex-1 bg-[#2D2D2D] h-full flex flex-col">
          <PackageHeader
            packageData={packageData}
            selectedPackage={selectedPackage}
            sidebarItemsData={sidebarItemsData}
            sidebarPackages={sidebarPackages}
            activeTab={activeTab}
            selectedItem={selectedItem}
            onTabChange={tab => {
              setActiveTab(tab);
              const tabToTypeMap = {
                Functions: "function",
                Types: "type",
                Values: "value",
              };

              if (tab === "Submodules") {
                setSelectedItem(null);
                window.history.replaceState(
                  null,
                  "",
                  window.location.pathname + window.location.search,
                );
              } else if (
                selectedItem &&
                selectedItem.type !==
                  tabToTypeMap[tab as keyof typeof tabToTypeMap]
              ) {
                setSelectedItem(null);
                window.history.replaceState(
                  null,
                  "",
                  window.location.pathname + window.location.search,
                );
              }
            }}
            onFetchSidebarItemData={fetchSidebarItemData}
          />

          <div className="flex-1 overflow-y-auto px-6 pb-8">
            {activeTab === "Submodules" && (
              <div className="space-y-4">
                {(() => {
                  if (packageData.isRootModule && packageData.subModules) {
                    return (
                      <>
                        <div className="mb-6">
                          <h2 className="text-xl font-semibold text-white mb-2">
                            Available Submodules
                          </h2>
                          <p className="text-gray-400">
                            Click on any submodule to explore its functions,
                            types, and values.
                          </p>
                        </div>
                        {packageData.subModules.map(
                          (subModule: SubModule, index: number) => (
                            <div
                              key={index}
                              className="p-4 bg-[#242323] rounded-lg border border-[#383737] hover:border-purple-400 transition-colors cursor-pointer"
                              onClick={() =>
                                handleSidebarPackageClick(subModule.fullName)
                              }
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center mb-2">
                                    <span className="mr-2 text-lg">📦</span>
                                    <h3 className="font-semibold text-purple-dbg">
                                      {subModule.name}
                                    </h3>
                                  </div>
                                  <p className="text-gray-300 text-sm mb-3">
                                    {subModule.description}
                                  </p>
                                  <div className="flex space-x-4 text-xs mb-2">
                                    <span className="text-blue-dbg">
                                      {subModule.functions} Functions
                                    </span>
                                    <span className="text-purple-dbg">
                                      {subModule.types} Types
                                    </span>
                                    <span className="text-sand">
                                      {subModule.values}{" "}
                                      {subModule.values === 1
                                        ? "Value"
                                        : "Values"}
                                    </span>
                                    {subModule.submodules &&
                                    subModule.submodules > 0 ? (
                                      <span className="text-taupe">
                                        {subModule.submodules}{" "}
                                        {subModule.submodules === 1
                                          ? "Submodule"
                                          : "Submodules"}
                                      </span>
                                    ) : null}
                                  </div>
                                  <div className="text-xs text-gray-400">
                                    <span className="font-medium">
                                      Full path:
                                    </span>{" "}
                                    {subModule.fullName}
                                  </div>
                                </div>
                                <div className="ml-4">
                                  <svg
                                    className="w-5 h-5 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          ),
                        )}
                      </>
                    );
                  } else {
                    const currentPackageData =
                      sidebarItemsData[selectedPackage];
                    const submodules = currentPackageData?.submodules || [];
                    const filteredSubmodules = searchQuery.trim()
                      ? submodules.filter((sub: ProcessedSubmodule) =>
                          sub.name
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase()),
                        )
                      : submodules;

                    const currentSidebarPackage = sidebarPackages.find(
                      pkg => pkg.path === selectedPackage,
                    );
                    const hasSubmodulesFromStats =
                      currentSidebarPackage &&
                      currentSidebarPackage.stats.submodules > 0;
                    const isLoading =
                      sidebarLoadingStates[selectedPackage] || false;

                    if (
                      hasSubmodulesFromStats &&
                      !currentPackageData &&
                      !isLoading
                    ) {
                      if (selectedPackage) {
                        fetchSidebarItemData(selectedPackage);
                      }
                    }

                    if (isLoading) {
                      return (
                        <div className="text-center py-12">
                          <div className="text-gray-400 mb-2">
                            Loading submodules...
                          </div>
                          <div className="text-gray-500 text-sm">
                            Fetching submodule information
                          </div>
                        </div>
                      );
                    }

                    return filteredSubmodules.length > 0 ? (
                      <>
                        <div className="mb-6">
                          <h2 className="text-xl font-semibold text-white mb-2">
                            Available Submodules
                          </h2>
                          <p className="text-gray-400">
                            Click on any submodule to explore its functions,
                            types, and values.
                          </p>
                          {searchQuery && (
                            <div className="text-sm text-gray-400 mt-2">
                              Showing {filteredSubmodules.length} of{" "}
                              {submodules.length} submodules
                            </div>
                          )}
                        </div>
                        {filteredSubmodules.map(
                          (submodule: any, index: number) => (
                            <div
                              key={index}
                              className="p-4 bg-[#242323] rounded-lg border border-[#383737] hover:border-purple-400 transition-colors cursor-pointer"
                              onClick={() =>
                                handleSubmoduleClick(submodule.fullName)
                              }
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center mb-2">
                                    <span className="mr-2 text-lg">📦</span>
                                    <h3 className="font-semibold text-taupe">
                                      {submodule.name}
                                    </h3>
                                  </div>
                                  <p className="text-gray-300 text-sm mb-3">
                                    {submodule.description}
                                  </p>
                                  <div className="text-xs text-gray-400">
                                    <span className="font-medium">
                                      Full path:
                                    </span>{" "}
                                    {submodule.fullName}
                                  </div>
                                </div>
                                <div className="ml-4">
                                  <svg
                                    className="w-5 h-5 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          ),
                        )}
                      </>
                    ) : (
                      <div className="text-center py-12">
                        {searchQuery ? (
                          <>
                            <p className="text-gray-400 mb-2">
                              No submodules found matching "{searchQuery}"
                            </p>
                            <button
                              onClick={() => setSearchQuery("")}
                              className="text-purple-400 hover:text-purple-300 text-sm"
                            >
                              Clear search to show all submodules
                            </button>
                          </>
                        ) : (
                          <>
                            <p className="text-gray-400 mb-2">
                              No submodules available.
                            </p>
                            <p className="text-gray-500 text-sm">
                              This module doesn't have any submodules.
                            </p>
                          </>
                        )}
                      </div>
                    );
                  }
                })()}
              </div>
            )}

            {activeTab === "Functions" && (
              <TabContent
                type="functions"
                selectedPackage={selectedPackage}
                sidebarItemsData={sidebarItemsData}
                sidebarLoadingStates={sidebarLoadingStates}
                searchQuery={searchQuery}
                selectedItem={selectedItem}
                onFetchItemData={fetchSidebarItemData}
                onSearchClear={() => setSearchQuery("")}
              />
            )}

            {activeTab === "Types" && (
              <TabContent
                type="types"
                selectedPackage={selectedPackage}
                sidebarItemsData={sidebarItemsData}
                sidebarLoadingStates={sidebarLoadingStates}
                searchQuery={searchQuery}
                selectedItem={selectedItem}
                onFetchItemData={fetchSidebarItemData}
                onSearchClear={() => setSearchQuery("")}
              />
            )}

            {activeTab === "Values" && (
              <TabContent
                type="values"
                selectedPackage={selectedPackage}
                sidebarItemsData={sidebarItemsData}
                sidebarLoadingStates={sidebarLoadingStates}
                searchQuery={searchQuery}
                selectedItem={selectedItem}
                onFetchItemData={fetchSidebarItemData}
                onSearchClear={() => setSearchQuery("")}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
