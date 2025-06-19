import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ActionButton from './components/ActionButton';
import { SubModule, PackageData } from './types';
import { useDarkPackagesApi, ProcessedSubmodule } from './darkPackagesApi';
import { PackageDetailSidebar } from './PackageDetailSidebar';
import { PackageHeader, SidebarPackage, SelectedItem } from './components';

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
  const [expandedSidebarItems, setExpandedSidebarItems] = useState<Set<string>>(new Set());
  const [sidebarItemsData, setSidebarItemsData] = useState<Record<string, any>>({});
  const [sidebarLoadingStates, setSidebarLoadingStates] = useState<Record<string, boolean>>({});
  const [searchLoading, setSearchLoading] = useState(false);

  // State for selected items (functions, types, constants)
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);
  const [pendingItemSelection, setPendingItemSelection] = useState<{
    type: 'function' | 'type' | 'constant';
    name: string;
    packagePath: string;
  } | null>(null);

  // State for search functionality
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Memoized API functions to prevent unnecessary re-renders
  const fetchSidebarItemData = useCallback(async (moduleName: string) => {
    setSidebarLoadingStates(prev => ({ ...prev, [moduleName]: true }));

    try {
      const processedData = await api.getProcessedModuleData(moduleName);

      setSidebarItemsData(prev => ({
        ...prev,
        [moduleName]: processedData
      }));

      setSidebarPackages(prev => prev.map(pkg => {
        if (pkg.path === moduleName) {
          return {
            ...pkg,
            stats: {
              ...pkg.stats,
              submodules: processedData.submodules.length
            }
          };
        }
        return pkg;
      }));
    } catch (err) {
      console.error(`Error fetching sidebar item data for ${moduleName}:`, err);
    } finally {
      setSidebarLoadingStates(prev => ({ ...prev, [moduleName]: false }));
    }
  }, [api]);

  // Search handler
  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  // Filter main content items based on search
  const getFilteredMainContentItems = useCallback((items: any[], searchTerm: string) => {
    if (selectedItem || !searchTerm.trim() || !items) return items;

    const query = searchTerm.toLowerCase();
    return items.filter(item => {
      const name = item.name?.toLowerCase() || '';
      const description = item.description?.toLowerCase() || '';
      const signature = item.signature?.toLowerCase() || '';

      return name.includes(query) || description.includes(query) || signature.includes(query);
    });
  }, [selectedItem]);

  const fetchSiblingModules = useCallback(async (parentModule: string) => {
    try {
      const processedSiblings = await api.fetchSiblingModules(parentModule);
      setSidebarPackages(processedSiblings);
    } catch (err) {
      console.error('Error fetching sibling modules:', err);
    }
  }, [api]);

  // Main function to fetch package details
  const fetchPackageDetails = useCallback(async (moduleName: string, isInitialLoad = false) => {
    if (isInitialLoad) {
      setInitialLoading(true);
    }
    setError(null);

    try {
      const processedData = await api.fetchPackageDetails(moduleName);

      setPackageData(processedData);

      if (processedData.isRootModule && processedData.subModules && processedData.subModules.length > 0) {
        setActiveTab("Submodules");
      } else {
        setActiveTab("Functions");
      }

      if (processedData.isRootModule && processedData.subModules) {
        const sidebarPackagesWithCounts = await api.processInitialSidebarPackages(processedData.subModules);
        setSidebarPackages(sidebarPackagesWithCounts);
      } else if (!processedData.isRootModule) {
        const parts = moduleName.split('.');
        const parentModule = parts.slice(0, -1).join('.');
        fetchSiblingModules(parentModule);
      }

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch package details');
      console.error('Error fetching package details:', err);
    } finally {
      if (isInitialLoad) {
        setInitialLoading(false);
      }
    }
  }, [fetchSiblingModules, api]);

  // Handler for sidebar clicks - updates both state and URL
  const handleSidebarPackageClick = useCallback((packagePath: string) => {
    if (selectedPackage !== packagePath) {
      setSelectedPackage(packagePath);

      const encodedPackagePath = encodeURIComponent(packagePath);
      navigate(`/packages/${encodedPackagePath}`, { replace: true });

      setSelectedItem(null);
      window.history.replaceState(null, '', window.location.pathname + window.location.search);

      setExpandedSidebarItems(new Set([packagePath]));
      fetchSidebarItemData(packagePath);
    }
  }, [selectedPackage, navigate, fetchSidebarItemData]);

  // Separate handler for expand/collapse
  const handleSidebarItemToggle = useCallback((packagePath: string) => {
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
  }, [fetchSidebarItemData]);

  // Handler for clicking on functions, types, constants in sidebar
  const handleItemClick = useCallback((itemType: 'function' | 'type' | 'constant', itemName: string, packagePath: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (packagePath === selectedPackage) {
      setSelectedItem({ type: itemType, name: itemName });

      const newUrl = `${window.location.pathname}${window.location.search}#${encodeURIComponent(itemName)}`;
      window.history.replaceState(null, '', newUrl);

      const tabMap = {
        function: 'Functions',
        type: 'Types',
        constant: 'Constants'
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
      function: 'Functions',
      type: 'Types',
      constant: 'Constants'
    };
    setActiveTab(tabMap[itemType]);
  }, [navigate, fetchSidebarItemData, selectedPackage]);

  // Handler for clicking on submodules in sidebar
  const handleSubmoduleClick = useCallback((submoduleFullName: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (selectedPackage !== submoduleFullName) {
      setSelectedPackage(submoduleFullName);

      const encodedSubmoduleName = encodeURIComponent(submoduleFullName);
      navigate(`/packages/${encodedSubmoduleName}`, { replace: true });

      setSelectedItem(null);
      window.history.replaceState(null, '', window.location.pathname + window.location.search);

      setExpandedSidebarItems(new Set([submoduleFullName]));
      fetchSidebarItemData(submoduleFullName);
    }
  }, [selectedPackage, navigate, fetchSidebarItemData]);

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
    activeTab
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
      setActiveTab
    }
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
    if (pendingItemSelection && packageData && packageData.fullName === pendingItemSelection.packagePath) {
      setSelectedItem({
        type: pendingItemSelection.type,
        name: pendingItemSelection.name
      });
      setActiveTab({
        function: 'Functions',
        type: 'Types',
        constant: 'Constants'
      }[pendingItemSelection.type]);

      setExpandedSidebarItems(new Set([pendingItemSelection.packagePath]));
      fetchSidebarItemData(pendingItemSelection.packagePath);

      setPendingItemSelection(null);
    }
  }, [packageData, pendingItemSelection, fetchSidebarItemData]);

  // Handle URL fragment after package data loads
  useEffect(() => {
    const fragment = decodeURIComponent(window.location.hash.substring(1));
    if (fragment && packageData && !packageData.isRootModule) {
      const functionMatch = packageData.functionList?.find(fn => fn.name === fragment);
      const typeMatch = packageData.typeList?.find(type => type.name === fragment);
      const constantMatch = packageData.constantList?.find(constant => constant.name === fragment);

      if (functionMatch) {
        setSelectedItem({ type: 'function', name: fragment });
        setActiveTab('Functions');
        setExpandedSidebarItems(new Set([selectedPackage]));
        if (selectedPackage) {
          fetchSidebarItemData(selectedPackage);
        }
      } else if (typeMatch) {
        setSelectedItem({ type: 'type', name: fragment });
        setActiveTab('Types');
        setExpandedSidebarItems(new Set([selectedPackage]));
        if (selectedPackage) {
          fetchSidebarItemData(selectedPackage);
        }
      } else if (constantMatch) {
        setSelectedItem({ type: 'constant', name: fragment });
        setActiveTab('Constants');
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
        const element = document.getElementById(`${selectedItem.type}-${selectedItem.name}`);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        } else {
          setTimeout(() => {
            const retryElement = document.getElementById(`${selectedItem.type}-${selectedItem.name}`);
            if (retryElement) {
              retryElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
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
        const sidebarElement = document.getElementById(`sidebar-${selectedItem.type}-${selectedItem.name}`);
        if (sidebarElement) {
          sidebarElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
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
          <div className="text-white text-lg mb-2">Loading package details...</div>
          <div className="text-gray-400 text-sm">Fetching module information and counts</div>
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
            onClick={() => navigate('/packages')}
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
            onTabChange={(tab) => {
              setActiveTab(tab);
              const tabToTypeMap = {
                Functions: 'function',
                Types: 'type',
                Constants: 'constant'
              };

              if (tab === 'Submodules') {
                setSelectedItem(null);
                window.history.replaceState(null, '', window.location.pathname + window.location.search);
              } else if (selectedItem && selectedItem.type !== tabToTypeMap[tab as keyof typeof tabToTypeMap]) {
                setSelectedItem(null);
                window.history.replaceState(null, '', window.location.pathname + window.location.search);
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
                          <h2 className="text-xl font-semibold text-white mb-2">Available Submodules</h2>
                          <p className="text-gray-400">Click on any submodule to explore its functions, types, and constants.</p>
                        </div>
                        {packageData.subModules.map((subModule: SubModule, index: number) => (
                          <div
                            key={index}
                            className="p-4 bg-[#242323] rounded-lg border border-[#383737] hover:border-purple-400 transition-colors cursor-pointer"
                            onClick={() => handleSidebarPackageClick(subModule.fullName)}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center mb-2">
                                  <span className="mr-2 text-lg">📦</span>
                                  <h3 className="font-semibold text-purple-dbg">{subModule.name}</h3>
                                </div>
                                <p className="text-gray-300 text-sm mb-3">{subModule.description}</p>
                                <div className="flex space-x-4 text-xs mb-2">
                                  <span className="text-blue-dbg">{subModule.functions} Functions</span>
                                  <span className="text-purple-dbg">{subModule.types} Types</span>
                                  <span className="text-sand">{subModule.constants} {subModule.constants === 1 ? 'Constant' : 'Constants'}</span>
                                  {(subModule.submodules && subModule.submodules > 0) ? (
                                    <span className="text-taupe">{subModule.submodules} {subModule.submodules === 1 ? 'Submodule' : 'Submodules'}</span>
                                  ) : null}
                                </div>
                                <div className="text-xs text-gray-400">
                                  <span className="font-medium">Full path:</span> {subModule.fullName}
                                </div>
                              </div>
                              <div className="ml-4">
                                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    );
                  } else {
                    const currentPackageData = sidebarItemsData[selectedPackage];
                    const submodules = currentPackageData?.submodules || [];
                    const filteredSubmodules = getFilteredMainContentItems(submodules.map((sub: ProcessedSubmodule) => ({ ...sub, name: sub.name, description: `${sub.name} submodule utilities and operations` })), searchQuery);

                    const currentSidebarPackage = sidebarPackages.find(pkg => pkg.path === selectedPackage);
                    const hasSubmodulesFromStats = currentSidebarPackage && currentSidebarPackage.stats.submodules > 0;
                    const isLoading = sidebarLoadingStates[selectedPackage] || false;

                    if (hasSubmodulesFromStats && !currentPackageData && !isLoading) {
                      if (selectedPackage) {
                        fetchSidebarItemData(selectedPackage);
                      }
                    }

                    if (isLoading) {
                      return (
                        <div className="text-center py-12">
                          <div className="text-gray-400 mb-2">Loading submodules...</div>
                          <div className="text-gray-500 text-sm">Fetching submodule information</div>
                        </div>
                      );
                    }

                    return filteredSubmodules.length > 0 ? (
                      <>
                        <div className="mb-6">
                          <h2 className="text-xl font-semibold text-white mb-2">Available Submodules</h2>
                          <p className="text-gray-400">Click on any submodule to explore its functions, types, and constants.</p>
                          {searchQuery && (
                            <div className="text-sm text-gray-400 mt-2">
                              Showing {filteredSubmodules.length} of {submodules.length} submodules
                            </div>
                          )}
                        </div>
                        {filteredSubmodules.map((submodule: any, index: number) => (
                          <div
                            key={index}
                            className="p-4 bg-[#242323] rounded-lg border border-[#383737] hover:border-purple-400 transition-colors cursor-pointer"
                            onClick={() => handleSubmoduleClick(submodule.fullName)}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center mb-2">
                                  <span className="mr-2 text-lg">📦</span>
                                  <h3 className="font-semibold text-taupe">{submodule.name}</h3>
                                </div>
                                <p className="text-gray-300 text-sm mb-3">{submodule.description}</p>
                                <div className="text-xs text-gray-400">
                                  <span className="font-medium">Full path:</span> {submodule.fullName}
                                </div>
                              </div>
                              <div className="ml-4">
                                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    ) : (
                      <div className="text-center py-12">
                        {searchQuery ? (
                          <>
                            <p className="text-gray-400 mb-2">No submodules found matching "{searchQuery}"</p>
                            <button
                              onClick={() => setSearchQuery('')}
                              className="text-purple-400 hover:text-purple-300 text-sm"
                            >
                              Clear search to show all submodules
                            </button>
                          </>
                        ) : (
                          <>
                            <p className="text-gray-400 mb-2">No submodules available.</p>
                            <p className="text-gray-500 text-sm">This module doesn't have any submodules.</p>
                          </>
                        )}
                      </div>
                    );
                  }
                })()}
              </div>
            )}

            {activeTab === "Functions" && (
              <div className="space-y-6">
                {(() => {
                  const currentSidebarData = sidebarItemsData[selectedPackage];
                  const fullFunctionData = currentSidebarData?.fullFunctionData || [];
                  const isLoading = sidebarLoadingStates[selectedPackage] || false;

                  if (isLoading) {
                    return (
                      <div className="text-center py-12">
                        <div className="text-gray-400 mb-2">Loading functions...</div>
                        <div className="text-gray-500 text-sm">Fetching function information</div>
                      </div>
                    );
                  }

                  if (!currentSidebarData && selectedPackage) {
                    fetchSidebarItemData(selectedPackage);
                    return (
                      <div className="text-center py-12">
                        <div className="text-gray-400 mb-2">Loading functions...</div>
                        <div className="text-gray-500 text-sm">Fetching function information</div>
                      </div>
                    );
                  }

                  const filteredFunctions = fullFunctionData.filter((func: any) => {
                    if (!searchQuery.trim()) return true;
                    const query = searchQuery.toLowerCase();
                    return func.name.toLowerCase().includes(query) ||
                      func.signature.toLowerCase().includes(query) ||
                      func.description.toLowerCase().includes(query);
                  });

                  return filteredFunctions.length > 0 ? (
                    <>
                      {searchQuery && (
                        <div className="text-sm text-gray-400 mb-4">
                          Showing {filteredFunctions.length} of {fullFunctionData.length} functions
                        </div>
                      )}
                      {filteredFunctions.map((func: any, index: number) => (
                        <div
                          key={index}
                          id={`function-${func.name}`}
                          className={`px-3 py-3 transition-colors border-b border-b-[#3E3E3E] rounded ${selectedItem?.type === 'function' && selectedItem?.name === func.name
                            ? 'bg-[#242323]'
                            : ''
                            }`}
                        >
                          <div className="mb-4">
                            <h3 className={`font-code mb-2 text-sm ${selectedItem?.type === 'function' && selectedItem?.name === func.name
                              ? 'text-purple-dbg'
                              : 'text-blue-dbg'
                              }`}>
                              {func.signature}
                            </h3>
                            <p className="text-gray-light text-sm">
                              {func.description}
                            </p>
                          </div>

                          <div className="flex space-x-2">
                            <ActionButton text="Docs" variant="primary" />
                            <ActionButton text="Usages" />
                            <ActionButton text="Tests" />
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <div className="text-center py-12">
                      {searchQuery ? (
                        <>
                          <p className="text-gray-400 mb-2">No functions found matching "{searchQuery}"</p>
                          <button
                            onClick={() => setSearchQuery('')}
                            className="text-purple-400 hover:text-purple-300 text-sm"
                          >
                            Clear search to show all functions
                          </button>
                        </>
                      ) : (
                        <>
                          <p className="text-gray-400 mb-4">No functions found for this module.</p>
                        </>
                      )}
                    </div>
                  );
                })()}
              </div>
            )}

            {activeTab === "Types" && (
              <div className="space-y-6">
                {(() => {
                  const currentSidebarData = sidebarItemsData[selectedPackage];
                  const fullTypeData = currentSidebarData?.fullTypeData || [];
                  const isLoading = sidebarLoadingStates[selectedPackage] || false;

                  if (isLoading) {
                    return (
                      <div className="text-center py-12">
                        <div className="text-gray-400 mb-2">Loading types...</div>
                        <div className="text-gray-500 text-sm">Fetching type information</div>
                      </div>
                    );
                  }

                  if (!currentSidebarData && selectedPackage) {
                    fetchSidebarItemData(selectedPackage);
                    return (
                      <div className="text-center py-12">
                        <div className="text-gray-400 mb-2">Loading types...</div>
                        <div className="text-gray-500 text-sm">Fetching type information</div>
                      </div>
                    );
                  }

                  const filteredTypes = fullTypeData.filter((type: any) => {
                    if (!searchQuery.trim()) return true;
                    const query = searchQuery.toLowerCase();
                    return type.name.toLowerCase().includes(query) ||
                      type.description.toLowerCase().includes(query);
                  });

                  return filteredTypes.length > 0 ? (
                    <>
                      {searchQuery && (
                        <div className="text-sm text-gray-400 mb-4">
                          Showing {filteredTypes.length} of {fullTypeData.length} types
                        </div>
                      )}
                      {filteredTypes.map((type: any, index: number) => (
                        <div
                          key={index}
                          id={`type-${type.name}`}
                          className={`px-3 py-3 transition-colors border-b border-b-[#3E3E3E] rounded ${selectedItem?.type === 'type' && selectedItem?.name === type.name
                            ? 'bg-[#242323]'
                            : ''
                            }`}
                        >
                          <div className="mb-4">
                            <h3 className={`font-code mb-2 ${selectedItem?.type === 'type' && selectedItem?.name === type.name
                              ? 'text-purple-dbg'
                              : 'text-blue-dbg'
                              }`}>
                              {type.name}
                            </h3>
                            <p className="text-gray-300 text-sm">
                              {type.description}
                            </p>
                          </div>

                          <div className="flex space-x-2">
                            <ActionButton text="Docs" variant="primary" />
                            <ActionButton text="Usages" />
                            <ActionButton text="Tests" />
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <div className="text-center py-12">
                      {searchQuery ? (
                        <>
                          <p className="text-gray-400 mb-2">No types found matching "{searchQuery}"</p>
                          <button
                            onClick={() => setSearchQuery('')}
                            className="text-purple-400 hover:text-purple-300 text-sm"
                          >
                            Clear search to show all types
                          </button>
                        </>
                      ) : (
                        <>
                          <p className="text-gray-400 mb-4">No types found for this module.</p>
                        </>
                      )}
                    </div>
                  );
                })()}
              </div>
            )}

            {activeTab === "Constants" && (
              <div className="space-y-6">
                {(() => {
                  const currentSidebarData = sidebarItemsData[selectedPackage];
                  const fullConstantData = currentSidebarData?.fullConstantData || [];
                  const isLoading = sidebarLoadingStates[selectedPackage] || false;

                  if (isLoading) {
                    return (
                      <div className="text-center py-12">
                        <div className="text-gray-400 mb-2">Loading constants...</div>
                        <div className="text-gray-500 text-sm">Fetching constant information</div>
                      </div>
                    );
                  }

                  if (!currentSidebarData && selectedPackage) {
                    fetchSidebarItemData(selectedPackage);
                    return (
                      <div className="text-center py-12">
                        <div className="text-gray-400 mb-2">Loading constants...</div>
                        <div className="text-gray-500 text-sm">Fetching constant information</div>
                      </div>
                    );
                  }

                  const filteredConstants = fullConstantData.filter((constant: any) => {
                    if (!searchQuery.trim()) return true;
                    const query = searchQuery.toLowerCase();
                    return constant.name.toLowerCase().includes(query) ||
                      constant.description.toLowerCase().includes(query);
                  });

                  return filteredConstants.length > 0 ? (
                    <>
                      {searchQuery && (
                        <div className="text-sm text-gray-400 mb-4">
                          Showing {filteredConstants.length} of {fullConstantData.length} constants
                        </div>
                      )}
                      {filteredConstants.map((constant: any, index: number) => (
                        <div
                          key={index}
                          id={`constant-${constant.name}`}
                          className={`px-3 py-3 transition-colors border-b border-b-[#3E3E3E] rounded ${selectedItem?.type === 'constant' && selectedItem?.name === constant.name
                            ? 'bg-[#242323]'
                            : ''
                            }`}
                        >
                          <div className="mb-4">
                            <h3 className={`font-code mb-2 ${selectedItem?.type === 'constant' && selectedItem?.name === constant.name
                              ? 'text-sand'
                              : 'text-sand'
                              }`}>
                              {constant.name}
                            </h3>
                            <p className="text-gray-300 text-sm">
                              {constant.description}
                            </p>
                          </div>

                          <div className="flex space-x-2">
                            <ActionButton text="Docs" variant="primary" />
                            <ActionButton text="Usages" />
                            <ActionButton text="Tests" />
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <div className="text-center py-12">
                      {searchQuery ? (
                        <>
                          <p className="text-gray-400 mb-2">No constants found matching "{searchQuery}"</p>
                          <button
                            onClick={() => setSearchQuery('')}
                            className="text-purple-400 hover:text-purple-300 text-sm"
                          >
                            Clear search to show all constants
                          </button>
                        </>
                      ) : (
                        <>
                          <p className="text-gray-400 mb-4">No constants found for this module.</p>
                        </>
                      )}
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;