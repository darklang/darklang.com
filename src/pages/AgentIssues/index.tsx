// Working page at /agent-issues. Not copy, and not for shipping.
//
// Every issue from the research, grouped into cards, with the solution angles
// we could put next to each group underneath. It exists so we can decide what
// to say and how to group it, so nothing is filtered: duplicates across groups
// are flagged rather than removed, ideas we have not built are tagged as such,
// and the things we have no answer for are listed with the rest.
import React from "react";

import { AVOID, GROUPS, Tag, TAG_LABEL, TAG_STYLE, THESIS } from "./data";

/** Positional, so merging two groups does not mean renumbering the rest. */
const num = (i: number) => String(i + 1).padStart(2, "0");

const Pill: React.FC<{ tag: Tag }> = ({ tag }) => (
  <span
    className={`shrink-0 rounded border px-1.5 py-0.5 font-code text-[0.65rem] leading-tight ${TAG_STYLE[tag]}`}
  >
    {TAG_LABEL[tag]}
  </span>
);

const AgentIssues: React.FC = () => {
  const counts = GROUPS.reduce(
    (acc, group) => {
      acc.issues += group.issues.length;
      group.solutions.forEach(s => {
        acc[s.tag] += 1;
      });
      return acc;
    },
    { issues: 0, built: 0, idea: 0, open: 0, limit: 0 },
  );

  return (
    <div className="mx-auto max-w-7xl 2xl:max-w-[100rem] px-4 py-14">
      <header className="mb-10 max-w-4xl">
        <p className="mb-3 font-code text-xs tracking-[0.12em] text-rust uppercase">
          Working page, not copy
        </p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          Agent issues, grouped
        </h1>
        <div className="mb-6 space-y-3 border-l-2 border-purple-lbg/40 pl-5">
          {THESIS.map(line => (
            <p
              key={line}
              className="text-base leading-relaxed text-gray-800 md:text-lg"
            >
              {line}
            </p>
          ))}
        </div>

        <p className="mb-4 text-base leading-relaxed text-gray-700 md:text-lg">
          Everything from the research, in {GROUPS.length} groups, with the
          solution angles we could put next to each one. Nothing is filtered
          out: issues that appear in two groups are left in both, ideas we have
          not built are tagged, and the ones we have no answer for are listed
          with the rest. Use it to decide what goes on a page and what does not.
        </p>

        <div className="mb-6 flex flex-wrap gap-4 font-code text-xs text-gray-500">
          <span>{counts.issues} issues</span>
          <span className="text-acc-green">{counts.built} built</span>
          <span className="text-blue-lbg">{counts.idea} ideas</span>
          <span className="text-acc-amber">{counts.open} open questions</span>
          <span>{counts.limit} not ours</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {(Object.keys(TAG_LABEL) as Tag[]).map(tag => (
            <Pill key={tag} tag={tag} />
          ))}
        </div>
      </header>

      {/* jump list, because the page is long on purpose */}
      <nav className="mb-10 flex flex-wrap gap-2" aria-label="Groups">
        {GROUPS.map((group, i) => (
          <a
            key={group.id}
            href={`#${group.id}`}
            className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600 transition hover:border-gray-300 hover:text-gray-900"
          >
            <span className="font-code text-gray-400">{num(i)}</span>{" "}
            {group.title}
          </a>
        ))}
      </nav>

      {/* the page-level rule: these are roadmap, and standing them next to
          current guarantees weakens everything beside them */}
      <div className="mb-10 rounded-2xl border border-acc-amber/40 bg-acc-amber/5 p-6">
        <h2 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
          Do not claim these yet
        </h2>
        <p className="mb-4 max-w-3xl text-sm leading-relaxed text-gray-600">
          Excellent roadmap items. Mixing them with current guarantees weakens
          every claim next to them, so they stay tagged as ideas wherever they
          appear below and out of any page that ships.
        </p>
        <ul className="flex flex-wrap gap-2">
          {AVOID.map(item => (
            <li
              key={item}
              className="rounded-full border border-acc-amber/40 bg-white px-3 py-1 text-sm text-gray-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6">
        {GROUPS.map((group, i) => (
          <section
            key={group.id}
            id={group.id}
            className="rounded-2xl border border-gray-200 bg-white p-6"
          >
            <div className="mb-4 flex items-baseline gap-3">
              <span className="font-code text-xs text-gray-400">{num(i)}</span>
              <h2 className="text-lg font-bold tracking-tight text-gray-900">
                {group.title}
              </h2>
            </div>

            {group.onHome && (
              <p className="mb-5 border-l-2 border-gray-200 pl-3 text-xs text-gray-500">
                <span className="font-semibold text-gray-600">On /home8:</span>{" "}
                {group.onHome}
              </p>
            )}

            {group.claim && (
              <blockquote className="mb-5 max-w-4xl border-l-2 border-purple-lbg/40 pl-4 text-sm leading-relaxed text-gray-800 italic">
                {group.claim}
              </blockquote>
            )}

            <p className="mb-3 font-code text-[0.7rem] tracking-[0.1em] text-gray-400 uppercase">
              Issues ({group.issues.length})
            </p>
            <ul className="mb-6 max-w-5xl space-y-2">
              {group.issues.map(issue => (
                <li
                  key={issue}
                  className="flex gap-2.5 text-sm leading-relaxed text-gray-700"
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rust/60"
                    aria-hidden="true"
                  />
                  {issue}
                </li>
              ))}
            </ul>

            <div className="border-t border-gray-200 pt-5">
              <p className="mb-3 font-code text-[0.7rem] tracking-[0.1em] text-gray-400 uppercase">
                What we could mention as the solution
              </p>
              <ul className="max-w-5xl space-y-2.5">
                {group.solutions.map(solution => (
                  <li key={solution.text} className="flex flex-col gap-1">
                    <span className="text-sm leading-relaxed text-gray-800">
                      {solution.text}
                    </span>
                    <span>
                      <Pill tag={solution.tag} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default AgentIssues;
