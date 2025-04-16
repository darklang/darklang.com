/**
 * CompletionMenu Component
 * A dropdown menu for code completion suggestions
 */

import React from "react";

interface CompletionItem {
  label: string;
  description?: string;
}

interface CompletionMenuProps {
  items: CompletionItem[];
}

const CompletionMenu: React.FC<CompletionMenuProps> = ({ items }) => {
  return (
    <div className="absolute left-20 top-9 w-48 bg-[#252525] border border-gray-700 shadow-lg rounded-md overflow-hidden z-10">
      <ul className="py-1">
        {items.map((item, index) => (
          <li
            key={index}
            className={`px-3 py-1 text-sm text-white hover:bg-blue-600 cursor-pointer ${
              index === 0 ? "bg-blue-600" : ""
            }`}
          >
            <div className="flex items-center">
              <span className="text-white">{item.label}</span>
              {item.description && (
                <span className="ml-2 text-gray-400 text-xs">
                  {item.description}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletionMenu;
