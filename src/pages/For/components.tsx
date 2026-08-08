import React from "react";

/* ------------------------------------------------------------------ */
/* Shared pieces for the /for/* pages                                  */
/* ------------------------------------------------------------------ */

/** Tinted icon tiles, matching the treatment on the feature pages. */
const TONES = {
  purple: "bg-purple-lbg/10 text-purple-dbg",
  blue: "bg-blue-lbg/10 text-blue-lbg",
  teal: "bg-acc-teal/10 text-acc-teal",
  green: "bg-olive/15 text-acc-green",
  amber: "bg-sand/25 text-acc-amber",
  pink: "bg-rose/15 text-acc-pink",
} as const;

export type Tone = keyof typeof TONES;

export const Glyph: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

/** An inline snippet inside prose, legible on a tinted card. */
export const Code: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <code className="rounded bg-white px-1.5 py-0.5 font-code text-sm text-purple-dbg">
    {children}
  </code>
);

/**
 * One capability, as a card: what it is, what it means, and the detail that
 * makes it concrete. Replaces the left-rule blocks, whose coloured bar and
 * detached grey box read as two unrelated elements per item.
 */
export const FeatureCard: React.FC<{
  h: string;
  tone?: Tone;
  icon?: React.ReactNode;
  detail?: React.ReactNode;
  children: React.ReactNode;
}> = ({ h, tone = "purple", icon, detail, children }) => (
  <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none">
    {icon && (
      <span
        className={`mb-4 flex h-9 w-9 items-center justify-center rounded-lg ${TONES[tone]}`}
      >
        {icon}
      </span>
    )}

    <h3 className="mb-2 text-lg font-bold text-gray-900 2xl:text-xl">{h}</h3>
    <p className="leading-relaxed text-gray-600 2xl:text-lg">{children}</p>

    {detail && (
      <div className="mt-5 rounded-xl bg-gray-50 px-4 py-3 text-sm 2xl:text-base leading-relaxed text-gray-600">
        {detail}
      </div>
    )}
  </div>
);

/**
 * The before/after argument as two plain columns. Replaces the animated
 * L-shaped corner brackets, which drew the eye to the frame rather than to
 * what is being compared.
 */
export const Contrast: React.FC<{
  beforeTitle?: string;
  afterTitle?: string;
  before: React.ReactNode[];
  after: React.ReactNode[];
}> = ({
  beforeTitle = "Without Darklang",
  afterTitle = "With Darklang",
  before,
  after,
}) => (
  <div className="grid gap-5 md:grid-cols-2">
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
      <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.12em] text-rust">
        {beforeTitle}
      </h3>

      <ul className="grid gap-3">
        {before.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rust/15 text-[0.6rem] text-rust"
              aria-hidden="true"
            >
              ✕
            </span>
            <span className="leading-relaxed text-gray-600 2xl:text-lg">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>

    <div className="rounded-2xl border border-blue-lbg/30 bg-blue-lbg/5 p-6 md:p-8">
      <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.12em] text-blue-lbg">
        {afterTitle}
      </h3>

      <ul className="grid gap-3">
        {after.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-lbg/15 text-[0.6rem] text-blue-lbg"
              aria-hidden="true"
            >
              ✓
            </span>
            <span className="leading-relaxed text-gray-700 2xl:text-lg">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
