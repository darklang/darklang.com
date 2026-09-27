import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";

/** Copy on one side, an example on the other. Alternates down the page. */
const Section: React.FC<{
  eyebrow: string;
  color: string;
  heading: React.ReactNode;
  panel: React.ReactNode;
  flip?: boolean;
  tinted?: boolean;
  children: React.ReactNode;
}> = ({
  eyebrow,
  color,
  heading,
  panel,
  flip = false,
  tinted = false,
  children,
}) => (
  <section
    className={`py-16 md:py-20 ${tinted ? "bg-[#F9F9FB] border-y border-gray-200" : ""}`}
  >
    <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
      <div
        className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
          flip ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="min-w-0">
          <SectionTitle subtitle={eyebrow} subtitleColor={color}>
            {heading}
          </SectionTitle>
          <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-5">
            {children}
          </div>
        </div>
        <div className="min-w-0">{panel}</div>
      </div>
    </div>
  </section>
);

/** A short list of facts under a section's copy. */
export const Facts: React.FC<{ color: string; items: React.ReactNode[] }> = ({
  color,
  items,
}) => (
  <ul className="space-y-2.5 text-base md:text-lg">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3">
        <span
          className={`mt-[0.6em] w-1.5 h-1.5 rounded-full shrink-0 ${color}`}
        ></span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default Section;
