import React from "react";
import SectionTitle from "../ui/SectionTitle";

type FeaturePoint = {
  text: string;
  year?: string;
};

const GradualStaticTyping: React.FC = () => {
  const featurePoints: FeaturePoint[] = [
    { text: "While prototyping, just run code until you hit a type error" },
    {
      text: "After prototyping, run the full type checker to gain confidence your whole program works",
    },
    {
      text: "! and ? operators allow easy error handling while you prototype",
      year: "2025",
    },
    {
      text: "Automatic refactoring converts ! into proper error handling",
      year: "2025",
    },
    { text: "Full type-checking hints in VSCode or in LSP editors" },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
        <SectionTitle subtitle="Prototype Quickly">
          Gradual Static Typing
        </SectionTitle>

        <p className="md:text-lg md:text-xl text-gray-800 mb-12 max-w-3xl">
          Gradual Static Typing allows running incomplete programs so you don't
          need to ensure everything type checks when you're getting one path
          working
        </p>

        <div className="space-y-8 relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-gray-200"></div>

          {/* Feature points */}
          {featurePoints.map((point, index) => (
            <div key={index} className="flex items-center gap-8">
              {/* Circle marker */}
              <div className="relative flex-shrink-0 z-10 flex justify-center w-6">
                <div className="w-5 h-5 rounded-full bg-white border-2 border-gray-300"></div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <p className="md:text-lg text-gray-800">
                  {point.text}
                  {point.year && (
                    <span className="ml-3 text-xs md:text-sm bg-blue-dbg/10 text-blue-dbg py-1 px-2 rounded-md">
                      {point.year}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GradualStaticTyping;
