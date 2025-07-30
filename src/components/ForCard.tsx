import React from "react";
import { Link } from "react-router-dom";

interface ForCardProps {
  title: string;
  description: string;
  icon: string;
  path?: string;
  disabled?: boolean;
}

const ForCard: React.FC<ForCardProps> = ({
  title,
  description,
  icon,
  path,
  disabled = false,
}) => {
  const cardContent = (
    <div className="text-center">
      <div className={`text-4xl mb-4 ${disabled ? "grayscale" : ""}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-lbg transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );

  // Common styles for both active and disabled cards
  const commonStyles =
    "bg-white rounded-lg shadow-lg p-6 border border-gray-100";

  if (disabled) {
    return (
      <div className={`${commonStyles} opacity-60 cursor-not-allowed`}>
        {cardContent}
      </div>
    );
  }

  return (
    <Link
      to={`/for/${path}`}
      className={`${commonStyles} group hover:shadow-xl transition-shadow duration-300 hover:border-blue-lbg`}
    >
      {cardContent}
    </Link>
  );
};

export default ForCard;
