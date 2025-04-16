/**
 * IntersectingBorder Component
 * Creates a border with four intersecting lines at the corners
 */

import React from "react";

interface IntersectingBorderProps {
  children: React.ReactNode;
  className?: string;
}

const IntersectingBorder: React.FC<IntersectingBorderProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Single horizontal line through the top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gray-600"></div>

      {/* Single horizontal line through the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-600"></div>

      {/* Single vertical line through the left */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-600"></div>

      {/* Single vertical line through the right */}
      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gray-600"></div>

      {/* Content inside */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default IntersectingBorder;
