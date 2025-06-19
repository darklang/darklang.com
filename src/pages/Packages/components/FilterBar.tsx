import React from "react";

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ activeFilter, onFilterChange }) => {
  const filters = ["All", "Darklang"];

  return (
    <div className="max-w-7xl mx-auto px-8 relative">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-wrap gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 ${activeFilter === filter
                ? "bg-purple-lbg text-white-custom shadow-md transform scale-105"
                : "border border-purple-dbg text-white-custom hover:bg-gray-dark"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;