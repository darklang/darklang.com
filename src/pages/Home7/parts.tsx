/**
 * Shared pieces for the Home4 draft.
 *
 * The page is one long argument in two halves: what developers report about
 * working with agents, in their own words, and what Darklang does about it.
 * Every section is built from the same small set of parts so the quotes stay
 * the loudest thing on the page and the chrome around them never competes.
 */

import React from "react";

import { Tone } from "./tones";

export const Shell: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}> = ({ children, className = "", id }) => (
  <section id={id} className={className}>
    <div className="mx-auto max-w-7xl 2xl:max-w-[100rem] px-4 py-16 md:py-20">
      {children}
    </div>
  </section>
);

export const Eyebrow: React.FC<{
  children: React.ReactNode;
  tone: Tone;
}> = ({ children, tone }) => (
  <p
    className={`mb-4 text-sm 2xl:text-base font-bold uppercase tracking-[0.12em] ${tone.text}`}
  >
    {children}
  </p>
);

export const H2: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <h2
    className={`text-2xl font-bold tracking-tight text-gray-900 md:text-3xl 2xl:text-4xl ${className}`}
  >
    {children}
  </h2>
);

export const Body: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <p
    className={`text-base md:text-lg 2xl:text-xl leading-relaxed text-gray-700 ${className}`}
  >
    {children}
  </p>
);

/**
 * The heading of a problem section: our framing, kept short, because the
 * quotes underneath are doing the actual describing.
 */
export const SectionHead: React.FC<{
  eyebrow: string;
  title: React.ReactNode;
  tone: Tone;
  children?: React.ReactNode;
}> = ({ eyebrow, title, tone, children }) => (
  <div className="mb-10 max-w-4xl">
    <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
    <H2 className="mb-4">{title}</H2>
    {children && <Body>{children}</Body>}
  </div>
);

/** A label over a group of quotes, so a long wall still has landmarks. */
export const ClusterLabel: React.FC<{
  children: React.ReactNode;
  tone: Tone;
}> = ({ children, tone }) => (
  <div className="mb-5 flex items-center gap-3">
    <span className={`h-px w-8 shrink-0 ${tone.rule}`} aria-hidden="true" />
    <h3
      className={`text-xs 2xl:text-sm font-bold uppercase tracking-[0.1em] ${tone.text}`}
    >
      {children}
    </h3>
  </div>
);

/**
 * One quote, verbatim. Nothing is trimmed, tidied, or paraphrased: the point
 * of this half of the page is that these are the words people actually used.
 */
export const Quote: React.FC<{
  children: string;
  tone: Tone;
  source?: string;
}> = ({ children, tone, source }) => (
  <figure className="mb-4 break-inside-avoid rounded-xl border border-gray-200 bg-white p-5">
    <div className="flex gap-4">
      <span
        className={`w-[3px] shrink-0 rounded-full ${tone.rule}`}
        aria-hidden="true"
      />
      <div>
        <blockquote className="leading-relaxed text-gray-700 2xl:text-lg">
          “{children}”
        </blockquote>
        {source && (
          <figcaption className="mt-3 font-code text-xs text-gray-light">
            {source}
          </figcaption>
        )}
      </div>
    </div>
  </figure>
);

/**
 * Quotes pack better in columns than in a grid: they are wildly different
 * lengths, and a grid leaves a row of short ones stranded beside a long one.
 */
export const QuoteWall: React.FC<{
  children: React.ReactNode;
  cols?: 2 | 3;
  className?: string;
}> = ({ children, cols = 3, className = "" }) => (
  <div
    className={`gap-4 ${cols === 3 ? "md:columns-2 lg:columns-3" : "md:columns-2"} ${className}`}
  >
    {children}
  </div>
);

/**
 * A reported problem written as a sentence: the first clause names it, the
 * rest describes it. Split, never rewritten.
 */
export const Point: React.FC<{
  h: string;
  tone: Tone;
  children?: React.ReactNode;
}> = ({ h, tone, children }) => (
  <div className="break-inside-avoid">
    <div className="mb-2 flex items-start gap-3">
      <span
        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${tone.rule}`}
        aria-hidden="true"
      />
      <h3 className="font-bold text-gray-900 2xl:text-lg">{h}</h3>
    </div>
    {children && (
      <p className="pl-6 leading-relaxed text-gray-600 2xl:text-lg">
        {children}
      </p>
    )}
  </div>
);

/** A step in one of the attack chains. */
export const ChainStep: React.FC<{
  children: React.ReactNode;
  tone: Tone;
  last?: boolean;
}> = ({ children, tone, last }) => (
  <li className="relative pl-7">
    {!last && (
      <span
        className={`absolute left-[5px] top-5 h-full w-px ${tone.rule}`}
        aria-hidden="true"
      />
    )}
    <span
      className={`absolute left-0 top-[7px] h-[11px] w-[11px] rounded-full border-2 ${tone.soft} ${tone.border}`}
      aria-hidden="true"
    />
    <span className="block pb-5 font-code text-sm 2xl:text-base leading-relaxed text-gray-700">
      {children}
    </span>
  </li>
);

/** Monospace inline, for a command or a flag. */
export const C: React.FC<{ children: React.ReactNode; tone?: Tone }> = ({
  children,
  tone,
}) => (
  <span className={`font-code text-sm ${tone ? tone.text : "text-gray-600"}`}>
    {children}
  </span>
);

export const Icon: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);
