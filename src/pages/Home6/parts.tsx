import React from "react";

/**
 * Drawn panels for /home6, in the shape the live homepage uses: a light card,
 * an inner tile, a row of small facts. A terminal is right when the point is
 * something you type; these are for when the point is a structure.
 */

/** A light panel with a small heading. */
export const Card: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-7">
    <div className="mb-4 text-xs font-bold tracking-[0.12em] text-gray-light uppercase">
      {title}
    </div>
    {children}
  </div>
);

/** One row of a definition list: a name, then what became of it. */
export const Line: React.FC<{
  name: string;
  note?: string;
  tone?: "ok" | "warn" | "bad";
}> = ({ name, note, tone }) => (
  <div className="flex items-baseline gap-3 border-t border-gray-100 py-2 first:border-t-0">
    <span className="font-code text-sm text-dark">{name}</span>
    {note && (
      <span
        className={`ml-auto shrink-0 text-sm ${
          tone === "bad"
            ? "text-rust"
            : tone === "ok"
              ? "text-acc-green"
              : tone === "warn"
                ? "text-acc-amber"
                : "text-gray-dark"
        }`}
      >
        {note}
      </span>
    )}
  </div>
);

/**
 * A command, set on the page rather than in terminal chrome, the way the live
 * homepage shows `darklang deploy`. Use it when one command is the point.
 */
export const Command: React.FC<{ parts: [string, string?][] }> = ({
  parts,
}) => (
  <div className="flex items-center gap-2.5">
    <span className="text-gray-dark">
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
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 9l3 3-3 3" />
        <path d="M13 15h4" />
      </svg>
    </span>
    <span className="font-code text-sm md:text-base">
      <span className="text-olive">$</span>{" "}
      {parts.map(([text, cls], i) => (
        <span key={i} className={cls ?? "text-gray-700"}>
          {text}{" "}
        </span>
      ))}
    </span>
  </div>
);

/** A row in a labelled report: the label, then what it says. */
export const Fact: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 border-b border-gray-100 px-4 py-2.5 text-[15px] last:border-b-0">
    <span className="w-24 shrink-0 font-code text-xs text-gray-dark">
      {label}
    </span>
    <span className="min-w-0 flex-1">{children}</span>
  </div>
);

/** A small tile for one thing that is running. */
export const Tile: React.FC<{
  kind: string;
  color: string;
  name: string;
  stat: string;
}> = ({ kind, color, name, stat }) => (
  <div className="rounded-xl border border-gray-200 bg-[#F9F9FB] px-3.5 py-3">
    <div className="flex items-center gap-2">
      <span
        className={`text-[10px] font-semibold tracking-wide uppercase ${color}`}
      >
        {kind}
      </span>
      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-olive"></span>
    </div>
    <div className="mt-1.5 flex items-baseline justify-between gap-2">
      <span className="truncate font-code text-sm text-dark">{name}</span>
      <span className="shrink-0 text-xs text-gray-dark">{stat}</span>
    </div>
  </div>
);

/** One branch, with who is on it and whether it wants you. */
export const Branch: React.FC<{
  name: string;
  who: string;
  ops: string;
  waiting?: boolean;
}> = ({ name, who, ops, waiting }) => (
  <div className="flex items-center gap-3 border-t border-gray-100 py-2.5 first:border-t-0">
    <span
      className={`h-1.5 w-1.5 shrink-0 rounded-full ${
        waiting ? "bg-acc-amber" : "bg-olive"
      }`}
    ></span>
    <span className="font-code text-sm text-dark">{name}</span>
    <span className="text-sm text-gray-dark">{who}</span>
    <span className="ml-auto shrink-0 text-sm text-gray-light">{ops}</span>
    <span
      className={`w-28 shrink-0 text-right text-sm ${
        waiting ? "text-acc-amber" : "text-gray-dark"
      }`}
    >
      {waiting ? "waiting for you" : "running"}
    </span>
  </div>
);

/** One changed definition: what happened to it, and what it now reaches. */
export const Change: React.FC<{
  mark: "+" | "~";
  kind: string;
  name: string;
  note: string;
  effect?: string;
}> = ({ mark, kind, name, note, effect }) => (
  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-gray-100 py-2.5 first:border-t-0">
    <span
      className={`font-code text-sm ${mark === "+" ? "text-acc-green" : "text-blue-lbg"}`}
    >
      {mark}
    </span>
    <span className="w-9 shrink-0 text-xs text-gray-light">{kind}</span>
    <span className="font-code text-sm text-dark">{name}</span>
    <span className="text-sm text-gray-dark">{note}</span>
    {effect && (
      <span className="ml-auto shrink-0 rounded-full bg-rust/10 px-2.5 py-0.5 font-code text-xs text-rust">
        {effect}
      </span>
    )}
  </div>
);

/** A version, tinted when it's the one in use. */
export const Version: React.FC<{
  hash: string;
  label: string;
  when: string;
  current?: boolean;
}> = ({ hash, label, when, current }) => (
  <div
    className={`flex items-baseline gap-3 rounded-xl border px-3.5 py-2.5 ${
      current
        ? "border-purple-lbg/30 bg-purple-lbg/5"
        : "border-gray-200 bg-[#F9F9FB]"
    }`}
  >
    <span
      className={`font-code text-sm ${current ? "text-purple-lbg" : "text-gray-dark"}`}
    >
      {hash}
    </span>
    <span className={`text-sm ${current ? "text-dark" : "text-gray-dark"}`}>
      {label}
    </span>
    <span className="ml-auto text-sm text-gray-light">{when}</span>
  </div>
);
