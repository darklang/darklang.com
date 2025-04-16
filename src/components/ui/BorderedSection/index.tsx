/**
 * BorderedSection Component
 * A section with subtle intersecting corner lines and glow effect
 */

import React, { ReactNode } from 'react';

interface BorderedSectionProps {
  children: ReactNode;
  className?: string;
}

const BorderedSection: React.FC<BorderedSectionProps> = ({
  children,
  className = '',
}) => {
  return (
    <section className={`py-54 px-6 max-w-7xl mx-auto ${className}`}>
      {/* Relative container to position the intersecting corner lines and content */}
      <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center py-12">
        {/* Full horizontal lines that cross the entire container */}
        <div className="absolute top-0 -left-5 -right-5 md:-left-20 md:-right-20 h-[1px] bg-gradient-to-r from-transparent via-gray-300/70 to-transparent"></div>
        <div className="absolute top-0 -left-5 -right-5 md:-left-20 md:-right-20 h-[2px] bg-gradient-to-r from-transparent via-gray-300/20 to-transparent blur-[1px] opacity-50"></div>

        <div className="absolute bottom-0 -left-5 -right-5 md:-left-20 md:-right-20 h-[1px] bg-gradient-to-r from-transparent via-gray-300/70 to-transparent"></div>
        <div className="absolute bottom-0 -left-5 -right-5 md:-left-20 md:-right-20 h-[2px] bg-gradient-to-r from-transparent via-gray-300/20 to-transparent blur-[1px] opacity-50"></div>

        {/* Full vertical lines that cross the entire container */}
        <div className="absolute left-0 -top-5 -bottom-5 md:-top-20 md:-bottom-20 w-[1px] bg-gradient-to-b from-transparent via-gray-300/70 to-transparent"></div>
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gray-300/20 to-transparent blur-[1px] opacity-50"></div>

        <div className="absolute right-0 -top-5 -bottom-5 md:-top-20 md:-bottom-20 w-[1px] bg-gradient-to-b from-transparent via-gray-300/70 to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gray-300/20 to-transparent blur-[1px] opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 w-full py-10 px-8">
          {children}
        </div>
      </div>
    </section>
  );
};

export default BorderedSection;