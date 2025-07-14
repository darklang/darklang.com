import React from "react";
import { PackageData } from "../types";
import TabNavigation from "./TabNavigation";
import { SidebarPackage, SelectedItem } from "./types";

interface PackageHeaderProps {
  packageData: PackageData;
  selectedPackage: string;
  sidebarItemsData: Record<string, any>;
  sidebarPackages: SidebarPackage[];
  activeTab: string;
  selectedItem: SelectedItem | null;
  onTabChange: (tab: string) => void;
  onFetchSidebarItemData: (packageName: string) => void;
}

const PackageHeader: React.FC<PackageHeaderProps> = ({
  packageData,
  selectedPackage,
  sidebarItemsData,
  sidebarPackages,
  activeTab,
  selectedItem,
  onTabChange,
  onFetchSidebarItemData,
}) => {
  const currentSidebarData = sidebarItemsData[selectedPackage];
  const functionsCount =
    currentSidebarData?.functions?.length ||
    packageData?.functions ||
    packageData?.totalFunctions ||
    0;
  const typesCount =
    currentSidebarData?.types?.length ||
    packageData?.types ||
    packageData?.totalTypes ||
    0;
  const constantsCount =
    currentSidebarData?.constants?.length ||
    packageData?.constants ||
    packageData?.totalConstants ||
    0;
  const submodulesCount =
    currentSidebarData?.submodules?.length ||
    packageData?.subModules?.length ||
    0;

  return (
    <div className="flex-shrink-0 bg-[#2D2D2D]">
      {/* Package Header */}
      <div className="py-4">
        <h1 className="px-6 text-4xl font-bold text-purple-dbg mb-2">
          {packageData.name}
        </h1>
        <p className="px-6 text-gray-300 text-lg mb-2">
          {packageData.description}
        </p>

        {/* Stats */}
        <div className="px-6 flex space-x-4 mb-6">
          <div className="flex items-center">
            <span className="text-gray-400 text-xs font-medium">
              <span className="text-blue-dbg">{functionsCount}</span> Functions
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-400 text-xs font-medium">
              <span className="text-purple-dbg">{typesCount}</span> Types
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-400 text-xs font-medium">
              <span className="text-sand">{constantsCount}</span> Constant
              {constantsCount !== 1 ? "s" : ""}
            </span>
          </div>
          {(submodulesCount > 0 || packageData?.isRootModule) && (
            <div className="flex items-center">
              <span className="text-gray-400 text-xs font-medium">
                <span className="text-taupe">{submodulesCount}</span>{" "}
                {packageData?.isRootModule ? "Modules" : "Submodules"}
              </span>
            </div>
          )}
        </div>

        {/* Tabs */}
        <TabNavigation
          packageData={packageData}
          selectedPackage={selectedPackage}
          sidebarItemsData={sidebarItemsData}
          sidebarPackages={sidebarPackages}
          activeTab={activeTab}
          selectedItem={selectedItem}
          onTabChange={onTabChange}
          onFetchSidebarItemData={onFetchSidebarItemData}
        />
      </div>
    </div>
  );
};

export default PackageHeader;
