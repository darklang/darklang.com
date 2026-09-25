/**
 * Shared pieces for the Home8 draft.
 *
 * The page is problem-first, but it has to read as a homepage rather than as a
 * list of grievances, so the problems come in two weights: a featured one that
 * carries a visual and leads its section, and compact ones that sit under it.
 * Both keep the same move, which is the point of the page: name the thing that
 * breaks, then say what we do about it.
 */

import React from "react";
import { Link } from "react-router-dom";

import { TermLine } from "./term";

export const Shell: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}> = ({ children, className = "", id }) => (
  <section id={id} className={className}>
    <div className="mx-auto max-w-7xl 2xl:max-w-[100rem] px-4 py-16 md:py-24">
      {children}
    </div>
  </section>
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

/** The heading of one section. */
export const ActHead: React.FC<{
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}> = ({ eyebrow, title, children }) => (
  <div className="mb-12 max-w-4xl">
    <p className="mb-4 text-sm 2xl:text-base font-bold tracking-[0.12em] text-rust uppercase">
      {eyebrow}
    </p>
    <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl 2xl:text-4xl">
      {title}
    </h2>
    {children && <Body>{children}</Body>}
  </div>
);

/** The supporting problems under a feature. */
export const Minis: React.FC<{ items: MiniData[]; cols?: 1 | 2 }> = ({
  items,
  cols = 2,
}) => (
  <div
    className={`mt-16 grid gap-6 ${cols === 2 ? "lg:grid-cols-2" : "max-w-4xl"}`}
  >
    {items.map(item => (
      <Mini key={item.n} data={item} />
    ))}
  </div>
);

/** Monospace inline, for a command, a path, or a flag. */
export const C: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-code text-[0.9em] text-purple-dbg">{children}</span>
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

/** The words developers use for a problem, as tags. */
export const Terms: React.FC<{ items: string[] }> = ({ items }) => (
  <div className="flex flex-wrap gap-1.5">
    {items.map(term => (
      <span
        key={term}
        className="rounded border border-gray-200 bg-white px-2 py-0.5 font-code text-[0.7rem] 2xl:text-xs text-gray-500"
      >
        {term}
      </span>
    ))}
  </div>
);

/** The label above a problem, in every weight it appears in. */
const ProblemTag: React.FC<{ n: string }> = ({ n }) => (
  <div className="mb-3 flex items-center gap-2.5">
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-rust/10 font-code text-[0.65rem] font-bold text-rust">
      {n}
    </span>
    <span className="text-xs 2xl:text-sm font-bold tracking-[0.1em] text-rust uppercase">
      The problem
    </span>
  </div>
);

const SolutionTag: React.FC<{ partial?: boolean }> = ({ partial }) => (
  <div className="mb-3 flex items-center gap-2.5">
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-purple-lbg/10 text-purple-lbg">
      <Icon className="h-3.5 w-3.5">
        <path d="M5 12.5l4.5 4.5L19 7.5" />
      </Icon>
    </span>
    <span className="text-xs 2xl:text-sm font-bold tracking-[0.1em] text-purple-lbg uppercase">
      {partial ? "What Darklang can do" : "What Darklang does"}
    </span>
  </div>
);

const Cmds: React.FC<{ items: string[] }> = ({ items }) => (
  <div className="mt-5 space-y-1.5">
    {items.map(line => (
      <div
        key={line}
        className="flex gap-2.5 font-code text-xs 2xl:text-sm text-gray-700"
      >
        <span className="text-purple-lbg" aria-hidden="true">
          $
        </span>
        <span className="min-w-0 break-words">{line}</span>
      </div>
    ))}
  </div>
);

const More: React.FC<{ href: string; label: string }> = ({ href, label }) => (
  <Link
    to={href}
    className="mt-5 inline-flex items-center gap-1.5 text-sm 2xl:text-base font-semibold text-blue-lbg hover:underline"
  >
    {label}
    <span aria-hidden="true">→</span>
  </Link>
);

export interface FeatureData {
  n: string;
  problem: { title: string; paras: React.ReactNode[] };
  solution: {
    title: string;
    paras: React.ReactNode[];
    cmds?: string[];
    link?: { href: string; label: string };
  };
}

/**
 * The lead problem of a section: the hook in small type, the answer as the
 * headline, and a picture of the answer beside it. This is the block that has
 * to carry the section, so it is the only one allowed a visual.
 */
export const Feature: React.FC<{
  data: FeatureData;
  visual: React.ReactNode;
  reverse?: boolean;
}> = ({ data, visual, reverse }) => (
  <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
    <div className={reverse ? "lg:order-2" : ""}>
      {/* the problem, quietly, because the headline below is the answer */}
      <div className="mb-6 rounded-xl border border-gray-200 bg-[#fbfafc] p-5">
        <ProblemTag n={data.n} />
        <p className="mb-2 font-bold text-gray-900 2xl:text-lg">
          {data.problem.title}
        </p>
        <div className="space-y-2">
          {data.problem.paras.map((para, i) => (
            <p key={i} className="leading-relaxed text-gray-600 2xl:text-lg">
              {para}
            </p>
          ))}
        </div>
      </div>

      <SolutionTag />
      <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl 2xl:text-4xl">
        {data.solution.title}
      </h3>
      <div className="space-y-4">
        {data.solution.paras.map((para, i) => (
          <Body key={i}>{para}</Body>
        ))}
      </div>
      {data.solution.cmds && <Cmds items={data.solution.cmds} />}
      {data.solution.link && <More {...data.solution.link} />}
    </div>

    <div className={`min-w-0 ${reverse ? "lg:order-1" : ""}`}>{visual}</div>
  </div>
);

export interface MiniData {
  n: string;
  problem: { title: string; paras: string[]; terms: string[] };
  solution: {
    title: string;
    para: React.ReactNode;
    cmds?: string[];
    link?: { href: string; label: string };
    partial?: boolean;
  };
}

/** A supporting problem: the same move, a third of the height. */
export const Mini: React.FC<{ data: MiniData }> = ({ data }) => (
  <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 md:p-7">
    <ProblemTag n={data.n} />
    <h4 className="mb-2 font-bold text-gray-900 2xl:text-lg">
      {data.problem.title}
    </h4>
    <div className="mb-4 space-y-2">
      {data.problem.paras.map((para, i) => (
        <p
          key={i}
          className="text-sm 2xl:text-base leading-relaxed text-gray-500"
        >
          {para}
        </p>
      ))}
    </div>
    <Terms items={data.problem.terms} />

    <div className="mt-6 border-t border-gray-200 pt-5">
      <SolutionTag partial={data.solution.partial} />
      <h4 className="mb-2 font-bold text-gray-900 2xl:text-lg">
        {data.solution.title}
      </h4>
      <p className="leading-relaxed text-gray-700 2xl:text-lg">
        {data.solution.para}
      </p>
      {data.solution.cmds && <Cmds items={data.solution.cmds} />}
      {data.solution.link && <More {...data.solution.link} />}
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Visuals                                                             */
/* ------------------------------------------------------------------ */

/** Captured CLI output, shown as a transcript. */
export const Term: React.FC<{ lines: TermLine[]; label?: string }> = ({
  lines,
  label = "terminal",
}) => (
  <div className="overflow-hidden rounded-2xl bg-dark-black shadow-[0_28px_60px_-32px_rgba(30,30,40,0.75)]">
    <div className="flex items-center gap-1.5 bg-[#28282a] px-5 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-[#4a4a4e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#4a4a4e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#4a4a4e]" />
      <span className="ml-2 font-code text-xs text-gray-500">{label}</span>
    </div>

    <div className="overflow-x-auto px-5 py-4 font-code text-xs leading-7 sm:text-sm">
      {lines.map((line, i) => {
        if (line.kind === "gap") return <div key={i} className="h-4" />;
        if (line.kind === "cmd") {
          return (
            <div key={i} className="whitespace-pre text-gray-200">
              <span className="text-olive">$</span> {line.text}
            </div>
          );
        }
        return (
          <div
            key={i}
            className={`whitespace-pre ${
              line.kind === "hi" ? "text-mint" : "text-gray-500"
            }`}
          >
            {line.text}
          </div>
        );
      })}
    </div>
  </div>
);
