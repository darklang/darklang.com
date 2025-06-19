import React from 'react';
import { PackageData } from '../types';
import { SidebarPackage, SelectedItem } from './types';

interface TabNavigationProps {
  packageData: PackageData;
  selectedPackage: string;
  sidebarItemsData: Record<string, any>;
  sidebarPackages: SidebarPackage[];
  activeTab: string;
  selectedItem: SelectedItem | null;
  onTabChange: (tab: string) => void;
  onFetchSidebarItemData: (packageName: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  packageData,
  selectedPackage,
  sidebarItemsData,
  sidebarPackages,
  activeTab,
  selectedItem,
  onTabChange,
  onFetchSidebarItemData
}) => {
  const handleTabClick = (tab: string) => {
    onTabChange(tab);

    const tabToTypeMap = {
      Functions: 'function',
      Types: 'type',
      Constants: 'constant'
    };

    if (selectedItem && selectedItem.type !== tabToTypeMap[tab as keyof typeof tabToTypeMap]) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  const handleSubmodulesTabClick = () => {
    onTabChange("Submodules");
    window.history.replaceState(null, '', window.location.pathname + window.location.search);

    const currentPackageData = sidebarItemsData[selectedPackage];
    if (!currentPackageData && selectedPackage) {
      onFetchSidebarItemData(selectedPackage);
    }
  };

  const currentSidebarData = sidebarItemsData[selectedPackage];
  const hasSubmodulesFromSidebar = currentSidebarData && currentSidebarData.submodules && currentSidebarData.submodules.length > 0;
  const currentSidebarPackage = sidebarPackages.find(pkg => pkg.path === selectedPackage);
  const hasSubmodulesFromStats = currentSidebarPackage && currentSidebarPackage.stats.submodules > 0;

  const hasRootModuleSubmodules = packageData.isRootModule && packageData.subModules && packageData.subModules.length > 0;
  const hasSubmodules = hasSubmodulesFromSidebar || hasSubmodulesFromStats || hasRootModuleSubmodules;

  return (
    <div className="border-b border-[#383737] bg-[#242323]">
      <div className="flex space-x-8 px-6 pt-3">
        {hasSubmodules && (
          <button
            onClick={handleSubmodulesTabClick}
            className={`pb-3 text-sm font-medium transition-colors ${activeTab === "Submodules"
              ? 'text-purple-dbg border-b-2 border-purple-400'
              : 'text-gray-400 hover:text-gray-300'
              }`}
          >
            Submodules
          </button>
        )}

        {["Functions", "Types", "Constants"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`pb-3 text-sm font-medium transition-colors ${activeTab === tab
              ? 'text-purple-dbg border-b-2 border-purple-400'
              : 'text-gray-400 hover:text-gray-300'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;