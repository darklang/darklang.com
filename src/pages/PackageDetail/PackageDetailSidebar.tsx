import React, { useCallback, useMemo, useEffect, useRef } from "react";
import { BreadcrumbNavigation } from "../../components";
import { useDarkPackagesApi } from "./darkPackagesApi";
import { PackageData } from "./types";
import { SelectedItem } from "./components/types";

interface PackageStats {
  functions: number;
  types: number;
  constants: number;
  submodules: number;
}

interface SidebarPackage {
  path: string;
  name: string;
  stats: PackageStats;
}

interface SubmoduleData {
  name: string;
  fullName: string;
}

interface ProcessedModuleData {
  functions: string[];
  types: string[];
  constants: string[];
  submodules: SubmoduleData[];
}

interface SidebarState {
  packages: SidebarPackage[];
  expandedItems: Set<string>;
  itemsData: Record<string, ProcessedModuleData>;
  loadingStates: Record<string, boolean>;
  selectedPackage: string;
  selectedItem: SelectedItem | null;
  searchQuery: string;
  searchLoading: boolean;
  activeTab: string;
}

interface SidebarActions {
  onNavigate: (path: string) => void;
  onPackageClick: (packagePath: string) => void;
  onItemToggle: (packagePath: string) => void;
  onItemClick: (
    itemType: "function" | "type" | "constant",
    itemName: string,
    packagePath: string,
    event?: React.MouseEvent,
  ) => void;
  onSubmoduleClick: (
    submoduleFullName: string,
    event?: React.MouseEvent,
  ) => void;
  onSearchChange: (value: string) => void;
  onFetchItemData: (moduleName: string) => void;
  updateState: {
    setSearchLoading: (loading: boolean) => void;
    setExpandedItems: (items: Set<string>) => void;
    setItemsData: (
      data:
        | Record<string, ProcessedModuleData>
        | ((
            prev: Record<string, ProcessedModuleData>,
          ) => Record<string, ProcessedModuleData>),
    ) => void;
    setPackages: (
      packages:
        | SidebarPackage[]
        | ((prev: SidebarPackage[]) => SidebarPackage[]),
    ) => void;
    setActiveTab: (tab: string) => void;
  };
}

interface SidebarProps {
  packageData: PackageData | null;
  state: SidebarState;
  actions: SidebarActions;
}

export const PackageDetailSidebar: React.FC<SidebarProps> = ({
  packageData,
  state,
  actions,
}) => {
  const api = useDarkPackagesApi();
  const lastSearchQuery = useRef<string>("");

  const searchInAllPackages = useCallback(
    async (query: string) => {
      if (!query.trim()) return;

      actions.updateState.setSearchLoading(true);
      const packagesToExpand = new Set<string>();

      try {
        const searchPromises = state.packages.map(
          async (pkg: SidebarPackage) => {
            // Check existing data first
            if (state.itemsData[pkg.path]) {
              const hasMatches = searchInPackageData(
                state.itemsData[pkg.path],
                query,
              );
              if (hasMatches) packagesToExpand.add(pkg.path);
              return { pkg, hasMatches };
            }

            // Fetch data for new packages
            try {
              const processedData: ProcessedModuleData =
                await api.getProcessedModuleData(pkg.path);

              // Update data
              actions.updateState.setItemsData(
                (prev: Record<string, ProcessedModuleData>) => ({
                  ...prev,
                  [pkg.path]: processedData,
                }),
              );

              // Update package stats
              actions.updateState.setPackages(prevPkgs =>
                prevPkgs.map((p: SidebarPackage) =>
                  p.path === pkg.path
                    ? {
                        ...p,
                        stats: {
                          ...p.stats,
                          submodules: processedData.submodules.length,
                        },
                      }
                    : p,
                ),
              );

              const hasMatches = searchInPackageData(processedData, query);
              if (hasMatches) packagesToExpand.add(pkg.path);

              return { pkg, hasMatches };
            } catch (err) {
              console.error(`Error searching in package ${pkg.path}:`, err);
              return { pkg, hasMatches: false };
            }
          },
        );

        await Promise.all(searchPromises);

        // Expand packages with matches
        const newExpandedItems = new Set([
          ...state.expandedItems,
          ...packagesToExpand,
        ]);
        actions.updateState.setExpandedItems(newExpandedItems);
      } finally {
        actions.updateState.setSearchLoading(false);
      }
    },
    [state.packages, state.itemsData, api, actions.updateState],
  );

  // Helper function to search within package data
  const searchInPackageData = useCallback(
    (packageData: ProcessedModuleData, query: string): boolean => {
      const queryLower = query.toLowerCase();
      return (
        packageData.functions?.some((fn: string) =>
          fn.toLowerCase().includes(queryLower),
        ) ||
        packageData.types?.some((type: string) =>
          type.toLowerCase().includes(queryLower),
        ) ||
        packageData.constants?.some((constant: string) =>
          constant.toLowerCase().includes(queryLower),
        ) ||
        packageData.submodules?.some((submod: SubmoduleData) =>
          submod.name.toLowerCase().includes(queryLower),
        )
      );
    },
    [],
  );

  // Debounced search effect
  useEffect(() => {
    if (state.searchQuery !== lastSearchQuery.current) {
      lastSearchQuery.current = state.searchQuery;

      if (state.searchQuery.trim()) {
        const timer = setTimeout(() => {
          searchInAllPackages(state.searchQuery);
        }, 300);
        return () => clearTimeout(timer);
      } else {
        // Clear search - preserve selected package expansion
        if (state.selectedPackage) {
          actions.updateState.setExpandedItems(
            new Set([state.selectedPackage]),
          );
        } else {
          actions.updateState.setExpandedItems(new Set());
        }
        actions.updateState.setSearchLoading(false);
      }
    }
  }, [
    state.searchQuery,
    searchInAllPackages,
    state.selectedPackage,
    actions.updateState,
  ]);

  // Auto-expand packages with matches
  useEffect(() => {
    if (state.searchQuery.trim()) {
      const query = state.searchQuery.toLowerCase();
      const currentExpanded = new Set(state.expandedItems);
      let hasNewMatches = false;

      state.packages.forEach((pkg: SidebarPackage) => {
        const pkgData = state.itemsData[pkg.path];
        if (pkgData && !currentExpanded.has(pkg.path)) {
          const hasMatches = searchInPackageData(pkgData, query);
          if (hasMatches) {
            currentExpanded.add(pkg.path);
            hasNewMatches = true;
          }
        }
      });

      if (hasNewMatches) {
        actions.updateState.setExpandedItems(currentExpanded);
      }
    }
  }, [
    state.itemsData,
    state.searchQuery,
    state.packages,
    state.expandedItems,
    actions.updateState,
    searchInPackageData,
  ]);

  // Auto-switch tabs based on content
  useEffect(() => {
    if (state.selectedPackage && state.itemsData[state.selectedPackage]) {
      const currentPackageData = state.itemsData[state.selectedPackage];

      if (
        state.activeTab === "Functions" &&
        (!currentPackageData.functions ||
          currentPackageData.functions.length === 0) &&
        currentPackageData.submodules &&
        currentPackageData.submodules.length > 0
      ) {
        actions.updateState.setActiveTab("Submodules");
      }
    }
  }, [
    state.itemsData,
    state.selectedPackage,
    state.activeTab,
    actions.updateState,
  ]);

  // Filter items based on search
  const getFilteredItems = useCallback(
    (packagePath: string, items: string[]): string[] => {
      if (!items || !Array.isArray(items) || !state.searchQuery.trim()) {
        return items || [];
      }

      const query = state.searchQuery.toLowerCase();
      const pkgInfo = state.packages.find(
        (pkg: SidebarPackage) => pkg.path === packagePath,
      );
      const packageName = pkgInfo?.name || "";

      // If package name matches, show all items
      if (packageName.toLowerCase().includes(query)) {
        return items;
      }

      // Filter items by name
      return items.filter(
        (item: string) => item && item.toLowerCase().includes(query),
      );
    },
    [state.searchQuery, state.packages],
  );

  // Filter packages based on search
  const filteredPackages = useMemo((): SidebarPackage[] => {
    if (!state.searchQuery.trim()) {
      return state.packages;
    }

    const query = state.searchQuery.toLowerCase();
    return state.packages.filter((pkg: SidebarPackage) => {
      if (pkg.name.toLowerCase().includes(query)) {
        return true;
      }

      const pkgData = state.itemsData[pkg.path];
      return pkgData ? searchInPackageData(pkgData, query) : false;
    });
  }, [state.packages, state.itemsData, state.searchQuery, searchInPackageData]);

  if (!packageData) {
    return (
      <div className="w-[27rem] max-w-4xl bg-[#242323] border-r border-[#383737] h-full flex flex-col">
        <div className="p-6 text-center">
          <div className="text-gray-400">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[27rem] max-w-4xl bg-[#242323] border-r border-[#383737] h-full flex flex-col">
      <div className="p-6 border-b border-[#383737] flex-shrink-0">
        <h2 className="text-xl font-semibold text-white mb-3">
          {packageData.isRootModule
            ? packageData.fullName
            : packageData.fullName.split(".").slice(0, -1).join(".")}
        </h2>

        <BreadcrumbNavigation
          fullName={packageData.fullName}
          onRouteClick={actions.onNavigate}
          onModuleClick={actions.onPackageClick}
          className="mb-4"
        />

        <div className="flex justify-between items-center w-full border border-[#383737] rounded-lg px-3">
          <input
            type="text"
            value={state.searchQuery}
            onChange={e => actions.onSearchChange(e.target.value)}
            placeholder="Search submodules, functions, types, and constants..."
            className="w-full py-5 text-sm text-white placeholder-gray-400 focus:outline-none text-ellipsis bg-transparent"
            disabled={state.searchLoading}
          />
          <div className="flex items-center">
            {state.searchQuery && (
              <button
                onClick={() => actions.onSearchChange("")}
                className="mr-2 text-gray-400 hover:text-white"
                disabled={state.searchLoading}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                </svg>
              </button>
            )}
            {state.searchLoading ? (
              <div className="animate-spin">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#95589F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="15.708 15.708"
                  />
                </svg>
              </div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
              >
                <path
                  d="M13.9805 15.3292L15.3356 13.9746L21.0947 19.7337L19.7396 21.0883L13.9805 15.3292Z"
                  fill="#616161"
                />
                <path
                  d="M9.58464 17.2503C13.8188 17.2503 17.2513 13.8178 17.2513 9.58366C17.2513 5.34948 13.8188 1.91699 9.58464 1.91699C5.35045 1.91699 1.91797 5.34948 1.91797 9.58366C1.91797 13.8178 5.35045 17.2503 9.58464 17.2503Z"
                  fill="#616161"
                />
                <path
                  d="M15.5508 16.9342L16.9054 15.5791L21.0722 19.7459L19.7171 21.101L15.5508 16.9342Z"
                  fill="#37474F"
                />
                <path
                  d="M9.58464 15.8128C13.0249 15.8128 15.8138 13.0239 15.8138 9.58366C15.8138 6.14338 13.0249 3.35449 9.58464 3.35449C6.14436 3.35449 3.35547 6.14338 3.35547 9.58366C3.35547 13.0239 6.14436 15.8128 9.58464 15.8128Z"
                  fill="#95589F"
                />
                <path
                  d="M12.8908 6.80384C12.0762 5.84551 10.8783 5.27051 9.58451 5.27051C8.29076 5.27051 7.09285 5.84551 6.27827 6.80384C6.0866 6.99551 6.13451 7.33092 6.32618 7.47467C6.51785 7.66634 6.85326 7.61842 6.99701 7.42676C7.66785 6.66009 8.57826 6.22884 9.58451 6.22884C10.5908 6.22884 11.5012 6.66009 12.172 7.42676C12.2678 7.52259 12.4116 7.61842 12.5553 7.61842C12.6512 7.61842 12.7949 7.57051 12.8428 7.52259C13.0345 7.33092 13.0345 6.99551 12.8908 6.80384Z"
                  fill="#BBDEFB"
                />
              </svg>
            )}
          </div>
        </div>
        {state.searchLoading && (
          <div className="text-center text-gray-400 text-xs mt-2">
            Searching all packages...
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-4 pt-4 pb-4">
          <div className="flex space-x-2">
            <button className="px-3 py-1.5 bg-[#402F51] text-white rounded-full text-sm">
              All
            </button>
            <button className="px-3 py-1.5 border border-gray-custom text-gray-light rounded-full text-sm">
              Data
            </button>
            <button className="px-3 py-1.5 border border-gray-custom text-gray-light rounded-full text-sm">
              Web
            </button>
          </div>
        </div>

        <div className="px-4">
          {state.searchQuery.trim() && filteredPackages.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-400">
                No results found for "{state.searchQuery}"
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Try different keywords
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              {filteredPackages.map((pkg: SidebarPackage) => (
                <PackageItem
                  key={pkg.path}
                  pkg={pkg}
                  state={state}
                  actions={actions}
                  getFilteredItems={getFilteredItems}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface PackageItemProps {
  pkg: SidebarPackage;
  state: SidebarState;
  actions: SidebarActions;
  getFilteredItems: (packagePath: string, items: string[]) => string[];
}

const PackageItem: React.FC<PackageItemProps> = ({
  pkg,
  state,
  actions,
  getFilteredItems,
}) => {
  const isExpanded = state.expandedItems.has(pkg.path);
  const isSelected = state.selectedPackage === pkg.path;
  const isLoading = state.loadingStates[pkg.path];
  const packageData = state.itemsData[pkg.path];

  return (
    <div
      className={`rounded-lg transition-colors pb-2 group ${
        isSelected
          ? "bg-[#352D3B] text-white"
          : "text-gray-300 hover:bg-[#352D3B]"
      }`}
    >
      <div>
        <div className="flex items-start p-3">
          <div
            className="flex-1 cursor-pointer flex items-start"
            onClick={e => {
              const target = e.target as Element;
              const isInsideDropdown = target.closest(".dropdown-content");
              if (isInsideDropdown) return;
              actions.onPackageClick(pkg.path);
              actions.onItemToggle(pkg.path);
            }}
          >
            <div className="w-6 h-6 mr-2 mt-2 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.4441 14.0729C10.4441 13.7981 10.335 13.5346 10.1408 13.3402C9.94665 13.1458 9.68322 13.0364 9.40845 13.0361H1.11878C0.843819 13.0361 0.580117 13.1454 0.385689 13.3398C0.191261 13.5342 0.0820318 13.7979 0.0820318 14.0729V22.3626C0.0818893 22.4987 0.108608 22.6336 0.160659 22.7595C0.21271 22.8853 0.289071 22.9997 0.385371 23.096C0.48167 23.1923 0.596018 23.2686 0.721866 23.3207C0.847715 23.3727 0.982594 23.3994 1.11878 23.3993H9.40845C9.68322 23.399 9.94665 23.2897 10.1408 23.0953C10.335 22.9009 10.4441 22.6373 10.4441 22.3626V14.0729Z"
                  fill="#FFEF5E"
                />
                <path
                  d="M23.9168 14.0729C23.9168 13.7979 23.8075 13.5342 23.6131 13.3398C23.4187 13.1454 23.155 13.0361 22.88 13.0361H14.5904C14.3156 13.0364 14.0522 13.1458 13.858 13.3402C13.6638 13.5346 13.5547 13.7981 13.5547 14.0729V22.3625C13.5547 22.6373 13.6638 22.9009 13.858 23.0953C14.0522 23.2897 14.3156 23.399 14.5904 23.3993H22.88C23.0162 23.3994 23.1511 23.3727 23.2769 23.3207C23.4028 23.2686 23.5171 23.1923 23.6134 23.096C23.7097 22.9997 23.7861 22.8853 23.8381 22.7595C23.8902 22.6336 23.9169 22.4987 23.9168 22.3625V14.0729Z"
                  fill="#95589F"
                />
                <path
                  d="M17.698 1.63831C17.698 1.36354 17.5889 1.1 17.3947 0.905602C17.2006 0.711205 16.9371 0.60185 16.6624 0.601562H8.37269C8.09773 0.601562 7.83402 0.710791 7.6396 0.905219C7.44517 1.09965 7.33594 1.36335 7.33594 1.63831V9.92798C7.3358 10.0642 7.36251 10.199 7.41457 10.3249C7.46662 10.4507 7.54298 10.5651 7.63928 10.6614C7.73558 10.7577 7.84992 10.8341 7.97577 10.8861C8.10162 10.9382 8.2365 10.9649 8.37269 10.9647H16.6624C16.9373 10.9647 17.201 10.8555 17.3954 10.6611C17.5899 10.4666 17.6991 10.2029 17.6991 9.92798L17.698 1.63831Z"
                  fill="#747AB9"
                />
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-medium">{pkg.name}</div>
              <div className="text-xs text-gray-400">
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {renderStatBadge(
                  pkg.stats.functions,
                  "Functions",
                  undefined,
                  isSelected,
                )}
                {renderStatBadge(
                  pkg.stats.types,
                  "Types",
                  undefined,
                  isSelected,
                )}
                {renderStatBadge(
                  pkg.stats.constants,
                  "Constants",
                  "Constant",
                  isSelected,
                )}
                {renderStatBadge(
                  pkg.stats.submodules,
                  "Submodules",
                  "Submodule",
                  isSelected,
                )}
              </div>
            </div>
          </div>

          <div
            className="ml-2 p-1 cursor-pointer hover:bg-[#483650] rounded transition-colors"
            onClick={e => {
              e.stopPropagation();
              actions.onItemToggle(pkg.path);
            }}
          >
            <svg
              className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="ml-6 mt-2 mb-4 space-y-3 dropdown-content">
          {isLoading ? (
            <div className="text-center py-4">
              <div className="text-gray-400 text-sm">
                Loading functions, types, and constants...
              </div>
            </div>
          ) : packageData ? (
            <PackageDropdownContent
              packageData={packageData}
              packagePath={pkg.path}
              state={state}
              actions={actions}
              getFilteredItems={getFilteredItems}
            />
          ) : (
            <div className="text-center py-4">
              <div className="text-gray-400 text-sm">No data loaded yet</div>
              <button
                onClick={() => actions.onFetchItemData(pkg.path)}
                className="text-purple-400 text-xs mt-1 hover:text-purple-300"
              >
                Click to retry
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Helper function for stat badges
const renderStatBadge = (
  count: number,
  pluralLabel: string,
  singularLabel?: string,
  isSelected?: boolean,
) => {
  const label = count === 1 && singularLabel ? singularLabel : pluralLabel;
  return (
    <div
      className={`py-1 px-2 rounded-full transition-colors whitespace-nowrap flex-shrink-0 flex items-center justify-center ${
        isSelected
          ? "bg-[#483650] text-purple-100"
          : "bg-[#333333] text-[#8B8B8B] group-hover:bg-[#483650] group-hover:text-purple-100"
      }`}
    >
      <span className="text-[10px]">
        {count || 0} {label}
      </span>
    </div>
  );
};

interface PackageDropdownContentProps {
  packageData: ProcessedModuleData;
  packagePath: string;
  state: SidebarState;
  actions: SidebarActions;
  getFilteredItems: (packagePath: string, items: string[]) => string[];
}

const PackageDropdownContent: React.FC<PackageDropdownContentProps> = ({
  packageData,
  packagePath,
  state,
  actions,
  getFilteredItems,
}) => {
  const submodules = packageData.submodules || [];
  const filteredSubmodules = state.searchQuery.trim()
    ? submodules.filter((submod: SubmoduleData) =>
        submod.name.toLowerCase().includes(state.searchQuery.toLowerCase()),
      )
    : submodules;

  const filteredFunctions = getFilteredItems(
    packagePath,
    packageData.functions || [],
  );
  const filteredTypes = getFilteredItems(packagePath, packageData.types || []);
  const filteredConstants = getFilteredItems(
    packagePath,
    packageData.constants || [],
  );

  const hasAnyItems =
    filteredSubmodules.length > 0 ||
    filteredFunctions.length > 0 ||
    filteredTypes.length > 0 ||
    filteredConstants.length > 0;

  if (!hasAnyItems) {
    return (
      <div className="text-center py-4">
        <div className="text-gray-400 text-sm">
          No submodules, functions, types, or constants found
        </div>
        {state.searchQuery && (
          <div className="text-gray-500 text-xs mt-1">
            Try clearing the search filter
          </div>
        )}
      </div>
    );
  }

  const sections = [
    {
      title: "Submodules",
      items: filteredSubmodules,
      icon: "📦",
      color: "",
      onClick: actions.onSubmoduleClick,
      isSubmodule: true,
    },
    {
      title: "Functions",
      items: filteredFunctions.map(name => ({ name })),
      icon: "f",
      color: "text-blue-dbg",
      onClick: (name: string, e?: React.MouseEvent) =>
        actions.onItemClick("function", name, packagePath, e),
    },
    {
      title: "Types",
      items: filteredTypes.map(name => ({ name })),
      icon: "T",
      color: "text-purple-400",
      onClick: (name: string, e?: React.MouseEvent) =>
        actions.onItemClick("type", name, packagePath, e),
    },
    {
      title: "Constants",
      items: filteredConstants.map(name => ({ name })),
      icon: "◊",
      color: "text-yellow-400",
      onClick: (name: string, e?: React.MouseEvent) =>
        actions.onItemClick("constant", name, packagePath, e),
    },
  ];

  return (
    <>
      {sections.map(section => {
        if (section.items.length === 0) return null;

        return (
          <div key={section.title}>
            <h4 className="text-xs font-semibold text-gray-400 mb-2">
              {section.title} ({section.items.length})
            </h4>
            <div className="space-y-1">
              {section.items.map((item: any) => (
                <div
                  key={section.isSubmodule ? item.fullName : item.name}
                  id={`sidebar-${section.title.toLowerCase().slice(0, -1)}-${item.name}`}
                  className="flex items-center p-1 mr-2 rounded cursor-pointer transition-colors text-gray-300 hover:bg-purple-dbg"
                  onClick={e =>
                    section.isSubmodule
                      ? section.onClick(item.fullName, e)
                      : section.onClick(item.name, e)
                  }
                >
                  <span className={`mr-2 text-xs ${section.color}`}>
                    {section.icon}
                  </span>
                  <span className="text-xs">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};
