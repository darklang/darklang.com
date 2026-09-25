import React from "react";

import { Shell, Terms } from "./parts";

/**
 * The problem, up front, at a glance. Four cards standing in for thirteen,
 * each linking down to the section that answers it, so the page can be scanned
 * before it is read.
 */
const AREAS: {
  href: string;
  h: string;
  p: string;
  terms: string[];
  count: string;
}[] = [
  {
    href: "#parallel",
    h: "They collide",
    p: "Two sessions on one checkout, and the changes come back half overwritten. Worktrees separate the branches and share everything else.",
    terms: ["merge conflict", "git worktree", "cwd drift"],
    count: "5 problems",
  },
  {
    href: "#alone",
    h: "They wander",
    p: "It changes what you did not ask about, cannot see the architecture it is changing, invents the functions it cannot find, and tells you it works.",
    terms: ["scope creep", "hallucinated API", "green tests"],
    count: "3 problems",
  },
  {
    href: "#aftermath",
    h: "They leave a mess",
    p: "Three hundred lines arrive as a thousand, in three different shapes, and the PR goes up for code nobody on the team could explain.",
    terms: ["near-duplicate", "dead code", "comprehension debt"],
    count: "2 problems",
  },
  {
    href: "#blast-radius",
    h: "They reach too far",
    p: "One broad command away from the database, the repository, or a package registry that will happily serve whatever name was invented for it.",
    terms: ["rm -rf", "prompt injection", "slopsquatting"],
    count: "3 problems",
  },
];

const Problem: React.FC = () => (
  <Shell className="bg-gray-50">
    <div className="mb-12 max-w-4xl">
      <p className="mb-4 text-sm 2xl:text-base font-bold tracking-[0.12em] text-rust uppercase">
        What breaks
      </p>
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl 2xl:text-4xl">
        Thirteen Problems, Thirteen Answers
      </h2>
      <p className="text-base md:text-lg 2xl:text-xl leading-relaxed text-gray-700">
        Every one of these is something developers report about working with
        coding agents today. Each is paired below with the thing in Darklang
        that answers it, and where the answer is only partial, it says so.
      </p>
    </div>

    <div className="grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
      {AREAS.map(area => (
        <a
          key={area.h}
          href={area.href}
          className="flex flex-col bg-white p-6 transition-colors hover:bg-[#fbfafc]"
        >
          <div className="mb-3 flex items-baseline justify-between gap-3">
            <h3 className="text-lg font-bold text-gray-900 2xl:text-xl">
              {area.h}
            </h3>
            <span className="shrink-0 font-code text-[0.7rem] 2xl:text-xs text-gray-light">
              {area.count}
            </span>
          </div>
          <p className="mb-5 leading-relaxed text-gray-600 2xl:text-lg">
            {area.p}
          </p>
          <div className="mt-auto">
            <Terms items={area.terms} />
          </div>
        </a>
      ))}
    </div>
  </Shell>
);

export default Problem;
