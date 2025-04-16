/**
 * SectionTitle Component
 * A reusable component for section titles with a consistent style
 */

import React, { ReactNode } from "react";

interface SectionTitleProps {
  subtitle?: string;
  children: ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
  maxWidth?: string;
  textColor?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  children,
  align = "left",
  className = "",
}) => {
  const textAlignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  return (
    <div className={`${textAlignment} ${className}`}>
      {subtitle && (
        <div className="mb-4 text-purple-lbg text-lg font-medium">
          {subtitle}
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl md:text-5xl md:leading-16 font-bold mb-8 text-black-custom`}
      >
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;
