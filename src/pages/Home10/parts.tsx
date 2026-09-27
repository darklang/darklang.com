/**
 * Shared pieces for the Home9 draft.
 *
 * The copy was written whole, so nothing here adds words: these parts only set
 * it, in the house style the real homepage uses. Sections are the site's
 * two-column shell at max-w-7xl, headings go through SectionTitle, body copy
 * runs at the site's large scale, and the "Explore ..." links are DetailLinks.
 */

import React from "react";

export const DOCS = "https://docs.darklang.com";
export const GITHUB = "https://github.com/darklang/dark";

/** The homepage's section shell: full width, generous vertical rhythm. */
export const Shell: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}> = ({ children, className = "", id }) => (
  <section id={id} className={`py-20 ${className}`}>
    <div className="mx-auto max-w-7xl 2xl:max-w-[100rem] px-4">{children}</div>
  </section>
);

/**
 * The two-column arrangement the homepage uses for every feature: copy on one
 * side, the thing itself on the other, alternating down the page.
 */
export const Split: React.FC<{
  children: React.ReactNode;
  visual: React.ReactNode;
  reverse?: boolean;
}> = ({ children, visual, reverse }) => (
  <div
    className={`grid items-center gap-12 lg:grid-cols-2 ${
      reverse ? "lg:[&>*:first-child]:order-2" : ""
    }`}
  >
    <div>{children}</div>
    <div className="min-w-0">{visual}</div>
  </div>
);

/** Body copy, at the scale the homepage sets it. */
export const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="space-y-6 text-lg leading-relaxed text-gray-700 md:text-xl lg:text-2xl">
    {children}
  </div>
);

/** The line a section lands on, in the hand the homepage writes those in. */
export const Landing: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <p className="font-caveat text-2xl leading-snug text-purple-lbg md:text-3xl 2xl:text-4xl">
    {children}
  </p>
);

/** The pencil underline the homepage draws under a word worth keeping. */
export const Underline: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <span className="relative inline-block whitespace-nowrap">
    {children}
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
  </span>
);

/** The highlighter mark the homepage puts behind a word. */
export const Mark: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="relative inline-block whitespace-nowrap">
    <span
      aria-hidden="true"
      className="absolute inset-x-[-0.12em] bottom-[0.06em] h-[0.5em] -rotate-1 rounded-sm bg-purple-lbg/20"
    ></span>
    <span className="relative text-purple-lbg">{children}</span>
  </span>
);
