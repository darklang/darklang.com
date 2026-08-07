import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";

const OneProgram: React.FC = () => {
  return (
    <section className="pt-20 pb-0">
      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
        <SectionTitle align="center">
          One Program, from{" "}
          <span className="relative inline-block whitespace-nowrap">
            First Line
            <svg
              aria-hidden="true"
              viewBox="0 0 120 12"
              preserveAspectRatio="none"
              className="absolute left-0 -bottom-1.5 h-2.5 w-full text-blue-lbg"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 7 Q 60 3, 117 6" />
            </svg>
          </span>{" "}
          to{" "}
          <span className="relative inline-block whitespace-nowrap">
            <span
              aria-hidden="true"
              className="absolute inset-x-[-0.12em] bottom-[0.06em] h-[0.5em] -rotate-1 rounded-sm bg-purple-lbg/20"
            ></span>
            <span className="relative text-purple-lbg">Production</span>
          </span>
        </SectionTitle>
      </div>
    </section>
  );
};

export default OneProgram;
