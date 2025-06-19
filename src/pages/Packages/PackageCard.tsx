import React from "react";
import { useNavigate } from "react-router-dom";

interface PackageCardProps {
  name: string;
  author: string;
  description: string;
  tags: string[];
  // stars: number;
  // downloads: number;
  logo?: string;
  clickable?: boolean;
  onCardClick?: () => void;
}

const PackageCard: React.FC<PackageCardProps> = ({
  name,
  author,
  description,
  tags,
  // stars,
  // downloads,
  logo,
  clickable = false,
  onCardClick
}) => {
  const navigate = useNavigate();

  // const formatNumber = (num: number): string => {
  //   return num >= 1000 ? (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k' : num.toString();
  // };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (clickable) {
      onCardClick ? onCardClick() : navigate(`/packages/${encodeURIComponent(name)}`);
    }
  };

  const cardClasses = `
    bg-[#242628] border border-[#383737] rounded-2xl p-6 
    hover:border-[#4a4a4a] transition-colors
    ${clickable ? 'cursor-pointer hover:bg-[#2a2c2e]' : ''}
  `.trim();

  return (
    <div className={cardClasses} onClick={handleClick}>
      <div className="flex items-start mb-4">
        {logo && (
          <img src={logo} alt={`${name} Logo`} className="w-10 h-10 mr-4 mt-1" />
        )}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white-custom mb-1">{name}</h3>
          <p className="text-gray-light text-sm">{author}</p>
        </div>
      </div>

      <p className="text-gray-light mb-4 leading-relaxed">{description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1 flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-custom text-white-custom px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* 
        <div className="flex items-center space-x-4 text-sm text-gray-light">
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">★</span>
            <span>{formatNumber(stars)}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-1">📦</span>
            <span>{formatNumber(downloads)}</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PackageCard;