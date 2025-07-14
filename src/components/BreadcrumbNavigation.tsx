import React from "react";

interface BreadcrumbItem {
  name: string;
  path: string | null;
  isRoute: boolean;
}

interface BreadcrumbNavigationProps {
  fullName: string;

  onRouteClick: (path: string) => void;
  onModuleClick: (modulePath: string) => void;

  className?: string;
}

const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({
  fullName,
  onRouteClick,
  onModuleClick,
  className = "",
}) => {
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const parts = fullName.split(".");
    return [
      { name: "Packages", path: "/packages", isRoute: true },
      ...parts.map((part: string, index: number) => {
        const isLast = index === parts.length - 1;
        if (isLast) {
          // Current page - not clickable
          return { name: part, path: null, isRoute: false };
        } else {
          // Build the module path up to this point
          const modulePath = parts.slice(0, index + 1).join(".");
          return { name: part, path: modulePath, isRoute: false };
        }
      }),
    ];
  };

  const breadcrumbs = generateBreadcrumbs();

  const handleCrumbClick = (crumb: BreadcrumbItem) => {
    if (!crumb.path) return;

    if (crumb.isRoute) {
      onRouteClick(crumb.path);
    } else {
      onModuleClick(crumb.path);
    }
  };

  return (
    <nav className={`flex flex-wrap text-xs ${className}`}>
      {breadcrumbs.map((crumb, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <span className="mx-1 text-gray-500">&gt;</span>}
          {crumb.path ? (
            <button
              onClick={() => handleCrumbClick(crumb)}
              className="text-[#818181] hover:text-purple-300 font-medium transition-colors"
              type="button"
            >
              {crumb.name}
            </button>
          ) : (
            <span className="text-blue-dbg font-medium">{crumb.name}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default BreadcrumbNavigation;
