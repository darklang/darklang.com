/**
 * FeatureCard Component
 * A reusable card component for displaying feature information
 */

import React from "react";

interface FeatureCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  codeSample?: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  icon,
  children,
  codeSample,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-lg p-5 shadow-sm border border-gray-100 ${className}`}
    >
      <div className="flex items-start mb-3">
        {icon && <div className="mr-3">{icon}</div>}
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
      </div>
      <div className="text-sm text-gray-600">{children}</div>

      {codeSample && (
        <div className="bg-blue-50 p-4 mt-4 rounded text-xs font-mono overflow-x-auto text-blue-800">
          <pre>{codeSample}</pre>
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
