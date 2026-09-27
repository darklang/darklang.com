import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";

const AUDIENCES = [
  {
    kicker: "Solo",
    title: "Ship the fix now",
    color: "text-acc-teal",
    points: [
      "Open the trace from a bug report and see exactly what happened.",
      "Let an agent replay it against a fix, then take it live in one step.",
      "No CI to wait on, no deploy to babysit.",
    ],
  },
  {
    kicker: "Teams",
    title: "Move together without breaking things",
    color: "text-acc-pink",
    points: [
      "Everyone, agents included, works on their own branch of one codebase.",
      "Review changes by meaning, and merge without text conflicts.",
      "Sync keeps every machine current, each with its own permissions.",
    ],
  },
];

const Audiences: React.FC = () => (
  <section id="audiences" className="py-20">
    <div className="mx-auto max-w-7xl px-4 2xl:max-w-[100rem]">
      <div className="max-w-3xl">
        <SectionTitle subtitle="Who it's for" subtitleColor="text-purple-lbg">
          Speed for one, <span className="text-purple-lbg">safety for all</span>
        </SectionTitle>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {AUDIENCES.map(a => (
          <div
            key={a.kicker}
            className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8"
          >
            <div
              className={`mb-2 text-xs font-bold tracking-wider uppercase ${a.color}`}
            >
              {a.kicker}
            </div>
            <h3 className="mb-4 text-xl font-bold text-dark md:text-2xl">
              {a.title}
            </h3>
            <ul className="space-y-2.5 text-base text-gray-700 md:text-lg">
              {a.points.map(p => (
                <li key={p} className="flex gap-3">
                  <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-light"></span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Audiences;
