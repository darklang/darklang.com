import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";

const COLUMNS = [
  {
    h: "Running today",
    color: "text-acc-green",
    dot: "bg-acc-green",
    items: [
      "The language, the type checker and the package tree",
      "The CLI: write, eval, run, serve, search, view, deps",
      "HTTP handlers, crons, workers and the typed datastore",
      "Traces of what a run actually did",
    ],
  },
  {
    h: "In progress",
    color: "text-acc-amber",
    dot: "bg-acc-amber",
    items: [
      "Permissions in the language, with ceilings and inferred requirements",
      "Sync between your own instances, and through a relay to a team",
      "Branch, review and merge at the level of definitions",
    ],
  },
  {
    h: "Next",
    color: "text-purple-lbg",
    dot: "bg-purple-lbg",
    items: [
      "Replaying a recorded run against a proposed change",
      "Agent commands under the same permissions you have",
      "Darklang Cloud, for when you would rather not run the machine",
    ],
  },
];

const WhereItStands: React.FC = () => (
  <section className="py-16 md:py-20 bg-[#F9F9FB] border-y border-gray-200">
    <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
      <div className="max-w-3xl">
        <SectionTitle subtitle="Where it stands" subtitleColor="text-gray-dark">
          Being built <span className="text-purple-lbg">in the open</span>
        </SectionTitle>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed -mt-4 mb-10">
          Darklang is open source under Apache 2.0 and under active development.
          Some of what is on this page you can use today, and some of it is
          still being built. Here is which is which.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {COLUMNS.map(c => (
          <div
            key={c.h}
            className="rounded-2xl border border-gray-200 bg-white p-6"
          >
            <div
              className={`text-xs font-bold uppercase tracking-wider mb-4 ${c.color}`}
            >
              {c.h}
            </div>
            <ul className="space-y-3 text-base text-gray-dark">
              {c.items.map(i => (
                <li key={i} className="flex gap-3">
                  <span
                    className={`mt-[0.6em] w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`}
                  ></span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="https://github.com/darklang/dark"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-purple-lbg text-purple-lbg hover:bg-purple-lbg/5 font-medium px-6 py-2.5 transition-colors"
        >
          Follow on GitHub
          <span aria-hidden="true">→</span>
        </a>
        <a
          href="https://docs.darklang.com/contributing/getting-started"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-gray-300 text-gray-custom hover:border-gray-400 font-medium px-6 py-2.5 transition-colors"
        >
          Contribute
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </section>
);

export default WhereItStands;
