/**
 * SectionTitle Component
 * A reusable component for section titles
 */

import React, { ReactNode } from "react";

interface SectionTitleProps {
  subtitle?: string;
  children: ReactNode;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  maxWidth?: string;
  textColor?: string;
  subtitleColor?: string;
  subtitleStyle?: "text" | "button";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  children,
  description,
  align = "left",
  className = "",
  maxWidth = "max-w-6xl",
  textColor,
  subtitleColor = "text-purple-lbg",
  subtitleStyle = "text",
}) => {
  const textAlignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  return (
    <div className={`${textAlignment} ${className}`}>
      {subtitle &&
        (subtitleStyle === "button" ? (
          <div className="flex justify-center">
            <button className="inline-flex items-center justify-center px-6 py-2 border border-purple-lbg text-sm font-medium rounded-full text-purple-lbg bg-white">
              {subtitle}
            </button>
          </div>
        ) : (
          <div className={`mb-4 ${subtitleColor} text-lg font-medium`}>
            {subtitle}
          </div>
        ))}
      <h2
        className={`text-2xl md:text-4xl 2xl:text-5xl font-bold ${subtitleStyle === "button" ? "mt-6" : ""} mb-8 ${textColor ? textColor : "text-black-custom"}`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`text-lg md:text-xl lg:text-2xl mx-auto text-gray-700 leading-relaxed ${maxWidth}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
