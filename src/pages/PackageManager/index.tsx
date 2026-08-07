import React from "react";
import { Link } from "react-router-dom";

import CodeDisplay from "../../common/ui/CodeDisplay";
import PackageManager from "../Home/PackageManager";

/* ------------------------------------------------------------------ */
/* Reusable pieces                                                     */
/* ------------------------------------------------------------------ */

const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mb-4 text-sm 2xl:text-base font-bold uppercase tracking-[0.12em] text-purple-dbg">
    {children}
  </p>
);

const CodeCard: React.FC<{ file?: string; code: string }> = ({
  file,
  code,
}) => (
  <div className="overflow-hidden rounded-2xl bg-dark-black shadow-2xl">
    {file && (
      <div className="flex items-center gap-1.5 bg-[#28282a] px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#4a4a4e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4a4a4e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4a4a4e]" />
        <span className="ml-2 font-code text-xs text-gray-500">{file}</span>
      </div>
    )}
    <div className="hljs-dark overflow-x-auto px-5 py-4 text-sm text-gray-300">
      <CodeDisplay language="fsharp" showLineNumbers={false} code={code} />
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* 4. How an update works                                              */
/* ------------------------------------------------------------------ */

const STEPS = [
  {
    n: "1",
    p: (
      <>
        A program uses{" "}
        <code className="font-code text-sm text-purple-dbg">
          User.Email.normalize
        </code>
        , which currently resolves to{" "}
        <code className="font-code text-sm text-purple-dbg">7f3a9c</code>.
      </>
    ),
  },
  {
    n: "2",
    p: (
      <>
        A new version is published as{" "}
        <code className="font-code text-sm text-purple-dbg">a64ce1</code>.{" "}
        <code className="font-code text-sm text-purple-dbg">7f3a9c</code> is not
        changed or removed.
      </>
    ),
  },
  {
    n: "3",
    p: (
      <>
        One caller can move to{" "}
        <code className="font-code text-sm text-purple-dbg">a64ce1</code> for
        testing while other callers stay on{" "}
        <code className="font-code text-sm text-purple-dbg">7f3a9c</code>.
      </>
    ),
  },
];

const VersionBranch: React.FC<{
  version: string;
  note: string;
  callers: string[];
  tone: "settled" | "new";
  last?: boolean;
}> = ({ version, note, callers, tone, last = false }) => (
  <div className="relative pl-7">
    {/* connector into the trunk */}
    <span
      className={`absolute left-0 top-0 w-px bg-gray-200 ${
        last ? "h-4" : "h-full"
      }`}
    />
    <span className="absolute left-0 top-4 h-px w-5 bg-gray-200" />

    <div className="flex flex-wrap items-center gap-2 pt-1.5">
      <span
        className={`rounded-md px-2 py-0.5 font-code text-sm font-semibold ${
          tone === "new"
            ? "bg-purple-lbg/10 text-purple-dbg"
            : "bg-gray-100 text-gray-600"
        }`}
      >
        {version}
      </span>
      <span className="text-xs text-gray-500">{note}</span>
    </div>

    <div className="mb-3 mt-2 flex flex-wrap gap-1.5">
      {callers.map(c => (
        <span
          key={c}
          className="rounded-lg border border-gray-200 bg-white px-2 py-1 font-code text-xs text-gray-700"
        >
          {c}
        </span>
      ))}
    </div>
  </div>
);

const VersionTree: React.FC = () => (
  <div className="rounded-2xl border border-gray-200 bg-white p-6">
    <div className="mb-3 font-code text-sm font-semibold text-gray-900">
      User.Email.normalize
    </div>
    <VersionBranch
      version="7f3a9c"
      note="unchanged, still in use"
      callers={["Signup.create", "Onboarding.import", "Billing.receipt"]}
      tone="settled"
    />
    <VersionBranch
      version="a64ce1"
      note="newly published"
      callers={["Signup.preview", "Tests.email"]}
      tone="new"
      last
    />
  </div>
);

/* ------------------------------------------------------------------ */
/* 5. What a package item shows                                        */
/* ------------------------------------------------------------------ */

const ITEM_SOURCE = `let normalize (email: String) : String =
  email
  |> Stdlib.String.trim
  |> Stdlib.String.toLowercase`;

/** A neighbour definition: what this one calls, or what calls it. */
const Neighbour: React.FC<{ tone: "uses" | "usedBy"; children: string }> = ({
  tone,
  children,
}) => (
  <span
    className={`rounded-md px-2.5 py-1 font-code text-xs 2xl:text-sm ${
      tone === "uses"
        ? "bg-blue-lbg/10 text-blue-lbg"
        : "bg-rose/15 text-acc-pink"
    }`}
  >
    {children}
  </span>
);

/**
 * Both rows read outward from the definition in the middle: it uses what is
 * above, and it is used by what is below. So the arrows point away from the
 * card, and each label describes the card's relation to what the arrow reaches.
 */
const ArrowRow: React.FC<{ label: string; dir: "up" | "down" }> = ({
  label,
  dir,
}) => {
  const arrow = dir === "up" ? "↑" : "↓";
  return (
    <div className="flex w-full items-center justify-center gap-4 py-1">
      <span className="text-gray-light" aria-hidden="true">
        {arrow}
      </span>
      <span className="text-[0.7rem] font-bold uppercase tracking-[0.11em] text-gray-light">
        {label}
      </span>
      <span className="text-gray-light" aria-hidden="true">
        {arrow}
      </span>
    </div>
  );
};

/** A hand-drawn arrow curving from a note down into what it points at. */
const CurvedArrow: React.FC<{ dir: "right" | "left" }> = ({ dir }) => (
  <svg
    width="34"
    height="18"
    viewBox="0 0 34 18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 ${dir === "left" ? "-scale-x-100" : ""}`}
    aria-hidden="true"
  >
    {/* arcs out of the note and lands pointing at what it names */}
    <path d="M2 6C10 2 22 4 30 14" />
    <path d="M28.4 7.2 30 14 23.8 10.9" />
  </svg>
);

/**
 * A handwritten note pointing at one part of the card. Deliberately unlike the
 * chips around it: no pill, no border, script face.
 */
const Tag: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <span
    className={`absolute z-10 hidden items-center gap-1 whitespace-nowrap font-caveat text-base 2xl:text-lg text-purple-lbg md:inline-flex ${className}`}
  >
    {children}
  </span>
);

const Caption: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-[0.7rem] font-bold uppercase tracking-[0.11em] text-gray-light">
    {children}
  </span>
);

/**
 * One package item as a picture: what it calls sits above, what calls it sits
 * below, and the definition itself is the card in the middle.
 */
const ItemPanel: React.FC = () => (
  <div className="mx-auto flex max-w-xl flex-col items-center gap-2.5">
    <div className="flex flex-wrap justify-center gap-2">
      <Neighbour tone="uses">Stdlib.String.trim</Neighbour>
      <Neighbour tone="uses">Stdlib.String.toLowercase</Neighbour>
    </div>
    <ArrowRow label="uses" dir="up" />

    <div className="relative w-full rounded-xl bg-white shadow-[0_18px_40px_-24px_rgba(60,40,70,0.45),0_2px_6px_-3px_rgba(60,40,70,0.12)]">
      <span className="absolute right-4 top-4 rounded-full bg-olive/15 px-2.5 py-0.5 font-code text-xs text-acc-green">
        active
      </span>

      <div className="px-5 py-5 text-center">
        <div className="flex flex-wrap items-baseline justify-center gap-2">
          <span className="font-code text-base 2xl:text-lg font-semibold text-dark">
            User.Email.normalize
          </span>
          <span className="font-code text-xs text-purple-dbg">a64ce1</span>
        </div>
        <div className="mt-2 font-code text-xs 2xl:text-sm text-gray-dark">
          String → String
        </div>

        {/* handwritten notes hang off the card, pointing back at each part */}
        <div className="relative mt-3">
          <Tag className="-left-2 top-0 -translate-x-full">
            documentation
            <CurvedArrow dir="right" />
          </Tag>
          <p className="mx-auto max-w-[28rem] text-sm 2xl:text-base leading-relaxed text-gray-dark">
            Trims surrounding whitespace and lowercases an address, so two
            spellings of the same email compare equal.
          </p>
        </div>
      </div>

      {/* the clipping wrapper is a sibling of the tag, so the tag can overhang */}
      <div className="relative">
        <Tag className="-right-2 top-6 translate-x-full">
          <CurvedArrow dir="left" />
          the definition
        </Tag>
        <div className="overflow-hidden rounded-b-xl">
          <div className="overflow-x-auto bg-[#f7f5f9] px-5 py-4 text-xs 2xl:text-sm">
            <CodeDisplay
              language="fsharp"
              showLineNumbers={false}
              code={ITEM_SOURCE}
            />
          </div>
        </div>
      </div>
    </div>

    <ArrowRow label="used by" dir="down" />
    <div className="flex flex-wrap justify-center gap-2">
      <Neighbour tone="usedBy">Signup.create</Neighbour>
      <Neighbour tone="usedBy">Onboarding.import</Neighbour>
      <Neighbour tone="usedBy">Billing.receipt</Neighbour>
    </div>

    <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
      <Caption>earlier</Caption>
      <span className="rounded bg-purple-lbg/10 px-2 py-0.5 font-code text-xs font-semibold text-purple-dbg">
        a64ce1
      </span>
      <span className="rounded bg-[#f4f1f7] px-2 py-0.5 font-code text-xs text-gray-light">
        7f3a9c
      </span>
      <span className="rounded bg-[#f4f1f7] px-2 py-0.5 font-code text-xs text-gray-light">
        5be201
      </span>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const PackageManagerPage: React.FC = () => {
  const btn = "inline-block rounded-full px-6 py-3 font-semibold transition";
  const primary = `${btn} bg-purple-lbg text-white hover:bg-purple-dbg`;

  return (
    <div className="overflow-x-clip">
      {/* ===================== 1. INTRODUCTION ===================== */}
      <header className="mx-auto max-w-7xl 2xl:max-w-[100rem] px-4 pb-4 pt-16">
        <div className="mx-auto max-w-4xl 2xl:max-w-5xl text-center">
          <p className="mb-4 text-sm 2xl:text-base font-bold uppercase tracking-[0.12em] text-purple-dbg">
            Package manager
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-5xl 2xl:text-6xl">
            Packages, Built into the{" "}
            <span className="text-purple-lbg">Runtime</span>
          </h1>
          <p className="text-lg md:text-xl 2xl:text-2xl leading-relaxed text-gray-700">
            Use any function, type, or value by naming it. There is no
            installation step and no dependency list to maintain.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link className={primary} to="/packages">
              Browse the packages
            </Link>
          </div>
        </div>
      </header>

      {/* ============ 2 + 6. THE EXISTING SECTION, UNCHANGED ============ */}
      <PackageManager />

      {/* ===================== 3. HOW A DEPENDENCY WORKS ===================== */}
      <section className="border-y border-gray-200 bg-[#faf8fb] py-16">
        <div className="mx-auto grid max-w-7xl 2xl:max-w-[100rem] items-center gap-10 px-4 lg:grid-cols-2 lg:gap-14">
          <div>
            <Eyebrow>How a dependency works</Eyebrow>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl 2xl:text-4xl">
              Dependencies Are Part of the Code
            </h2>
            <p className="mb-4 text-base md:text-lg 2xl:text-xl leading-relaxed text-gray-700">
              When your code uses a package function, it refers to a specific,
              immutable version. Together, these references describe the
              program's dependencies, so there is no separate package manifest
              or installation step.
            </p>
            <p className="text-base md:text-lg 2xl:text-xl leading-relaxed text-gray-700">
              Darklang already knows the exact code each reference points to.
              There is no separate dependency-resolution or build phase before
              the program can run.
            </p>
          </div>

          <CodeCard
            file="signup.dark"
            code={`let normalize (email: String) : String =
  email |> User.Email.normalize`}
          />
        </div>
      </section>

      <div className="mx-auto max-w-7xl 2xl:max-w-[100rem] px-4">
        {/* ===================== 4. HOW AN UPDATE WORKS ===================== */}
        <section className="py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <Eyebrow>How an update works</Eyebrow>
              <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl 2xl:text-4xl">
                A New Version Sits Beside the Old One.
              </h2>

              <ol className="flex flex-col gap-5">
                {STEPS.map(s => (
                  <li key={s.n} className="flex gap-4">
                    <span className="flex h-7 w-7 2xl:h-8 2xl:w-8 shrink-0 items-center justify-center rounded-full bg-purple-lbg/10 font-code text-sm 2xl:text-base font-bold text-purple-dbg">
                      {s.n}
                    </span>
                    <p className="text-base md:text-lg 2xl:text-xl leading-relaxed text-gray-600">
                      {s.p}
                    </p>
                  </li>
                ))}
              </ol>

              <p className="mt-7 border-l-2 border-gray-200 pl-4 text-base md:text-lg 2xl:text-xl leading-relaxed text-gray-600">
                To roll back, point the caller at{" "}
                <code className="font-code text-sm text-purple-dbg">
                  7f3a9c
                </code>{" "}
                again. That version was never removed, so it runs straight away.
              </p>
            </div>

            <VersionTree />
          </div>
        </section>

        {/* ===================== 5. PACKAGE DETAILS ===================== */}
        <section className="pb-16">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <Eyebrow>What a package item shows</Eyebrow>
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl 2xl:text-4xl">
                Everything About a Definition, in One Place
              </h2>
              <p className="text-base md:text-lg 2xl:text-xl leading-relaxed text-gray-700">
                Opening a function, type, or value shows what it is, what it
                uses, and what depends on it.
              </p>
            </div>

            <div className="min-w-0">
              <ItemPanel />
            </div>
          </div>
        </section>

        {/* ===================== 8. FINAL LINKS ===================== */}
        <section className="pb-20">
          <div className="rounded-2xl border border-gray-200 bg-[#faf8fb] px-6 py-12 text-center md:px-10">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl 2xl:text-4xl">
              Start Using Packages
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base md:text-lg 2xl:text-xl leading-relaxed text-gray-600">
              Package management is part of the open-source language and
              runtime, not a hosted service. It works the same locally, on your
              own infrastructure, and on Darklang Cloud.
            </p>

            <Link className={primary} to="/packages">
              Browse the packages
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PackageManagerPage;
