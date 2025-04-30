/**
 * TraceCard Component
 * A card component for displaying trace information
 */

import React from "react";

interface TraceCardProps {
  title: string;
  icon?: React.ReactNode;
  description: string;
  codeSample?: string;
  className?: string;
  color?: "blue" | "purple" | "magenta" | "orange" | "gray" | "taupe";
}

const TraceCard: React.FC<TraceCardProps> = ({
  title,
  icon,
  description,
  codeSample,
  className = "",
  color = "blue",
}) => {
  // Map colors to tailwind classes
  const colorMap = {
    blue: {
      title: "text-blue-500",
      icon: "bg-blue-100",
      code: "bg-blue-50",
    },
    purple: {
      title: "text-blue-lbg",
      icon: "bg-indigo-100",
      code: "bg-indigo-50",
    },
    magenta: {
      title: "text-purple-lbg",
      icon: "bg-purple-lbg/10",
      code: "bg-purple-lbg/10",
    },
    orange: {
      title: "text-tan",
      icon: "bg-orange-100",
      code: "bg-orange-50",
    },
    taupe: {
      title: "text-taupe",
      icon: "bg-taupe/30",
      code: "bg-taupe/30",
    },
    gray: {
      title: "text-gray-500",
      icon: "bg-gray-200",
      code: "bg-gray-50",
    },
  };

  const colorClasses = colorMap[color];

  return (
    <div
      className={`bg-white rounded-xl px-5 pt-6 shadow-sm border border-gray-100 ${className}`}
    >
      <div className="flex items-start mb-3">
        {icon && (
          <div
            className={`mr-3 ${colorClasses.icon} rounded-md p-2 flex items-center justify-center w-8 h-8`}
          >
            {icon}
          </div>
        )}
      </div>

      <h3
        className={`text-sm lg:text-base font-semibold mb-2 ${colorClasses.title}`}
      >
        {title}
      </h3>

      <div className="text-[10px] text-gray-600 mb-5">{description}</div>

      {codeSample && (
        <div
          className={`${colorClasses.code} p-2 rounded-t-md text-xs md:text-[8px] font-mono overflow-x-auto h-30 2xl:h-40 overflow-y-scroll`}
        >
          <pre className="whitespace-pre-wrap overflow-hidden text-gray-700">
            {codeSample}
          </pre>
        </div>
      )}
    </div>
  );
};

export default TraceCard;
