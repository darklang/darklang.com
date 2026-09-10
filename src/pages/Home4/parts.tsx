import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";
import { Line } from "./lines";

/**
 * Shared furniture for /home4: a section wrapper, a terminal block for
 * command-and-output captures, and a placeholder for the screenshots the
 * draft calls for. The placeholders are deliberately obvious: the draft asks
 * for captures of the real tool, and a drawn mock would be a lie.
 */

export const Section: React.FC<{
  id: string;
  eyebrow: string;
  /** The section's accent, as a text-* class, the way Home does it. */
  color?: string;
  heading: React.ReactNode;
  /** The evidence: a terminal, a code sample, a capture. Sits beside the copy. */
  panel?: React.ReactNode;
  /** Puts the panel on the left, so the page alternates as you scroll. */
  flip?: boolean;
  tinted?: boolean;
  children: React.ReactNode;
}> = ({
  id,
  eyebrow,
  color = "text-purple-lbg",
  heading,
  panel,
  flip = false,
  tinted = false,
  children,
}) => (
  <section
    id={id}
    className={`py-20 ${tinted ? "border-y border-gray-200 bg-[#F9F9FB]" : ""}`}
  >
    <div className="mx-auto max-w-7xl px-4 2xl:max-w-[100rem]">
      <div
        className={
          panel
            ? `grid items-center gap-12 lg:grid-cols-2 ${
                flip ? "lg:[&>*:first-child]:order-2" : ""
              }`
            : "mx-auto max-w-4xl"
        }
      >
        <div className="min-w-0">
          <SectionTitle subtitle={eyebrow} subtitleColor={color}>
            {heading}
          </SectionTitle>
          <div className="space-y-6 text-lg leading-relaxed text-gray-700 md:text-xl">
            {children}
          </div>
        </div>
        {panel && <div className="min-w-0 space-y-4">{panel}</div>}
      </div>
    </div>
  </section>
);

/** A captured shell session: commands with a gutter, output aligned under. */
export const Term: React.FC<{ title?: string; lines: Line[] }> = ({
  title,
  lines,
}) => (
  <div className="overflow-hidden rounded-2xl border border-[#333336] bg-dark-black shadow-sm">
    {title && (
      <div className="border-b border-[#333336] bg-[#262626] px-4 py-2.5 font-code text-xs text-gray-dark">
        {title}
      </div>
    )}
    <div className="overflow-x-auto px-4 py-3 font-code text-[12.5px] leading-[1.75] md:px-5 md:py-4 md:text-[13.5px]">
      {lines.map((l, i) => {
        if (l.k === "gap") return <div key={i}>&nbsp;</div>;
        return (
          <div key={i} className="flex gap-2 whitespace-pre">
            <span className="w-2 shrink-0 text-gray-dark">
              {l.k === "cmd" ? "$" : " "}
            </span>
            <span
              className={
                l.k === "cmd" || l.k === "cont"
                  ? "text-[#d4d4d4]"
                  : l.k === "note"
                    ? "text-gray-custom"
                    : l.k === "err"
                      ? "text-code-rust"
                      : "text-olive"
              }
            >
              {l.t}
            </span>
          </div>
        );
      })}
    </div>
  </div>
);

/** Where a capture of the real tool goes. */
export const Shot: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <figure className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-10 text-center">
    <div className="mb-2 font-code text-[11px] tracking-[0.14em] text-gray-light uppercase">
      screenshot of the real tool
    </div>
    <figcaption className="mx-auto max-w-xl text-base text-gray-dark">
      {children}
    </figcaption>
  </figure>
);

/** A short callout for the honest caveats the draft asks for. */
export const Caveat: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <p className="rounded-lg border-l-2 border-classic-yellow bg-classic-yellow/10 px-4 py-3 text-base text-gray-custom">
    {children}
  </p>
);
