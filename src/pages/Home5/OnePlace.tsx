import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";

const BUILT_IN = [
  { you: "a web framework and router", have: "HTTP handlers" },
  { you: "a database and a data layer", have: "Typed storage" },
  { you: "a queue and a worker setup", have: "Workers" },
  { you: "a cron service", have: "Crons" },
  { you: "an observability tool", have: "Traces" },
  { you: "a profiler", have: "Hotspots" },
  { you: "git and a branching strategy", have: "Source control" },
  { you: "a deploy pipeline", have: "Instant deploys" },
];

const OnePlace: React.FC = () => (
  <section
    id="one-place"
    className="border-y border-gray-200 bg-[#F9F9FB] py-20"
  >
    <div className="mx-auto max-w-7xl px-4 2xl:max-w-[100rem]">
      <div className="max-w-3xl">
        <SectionTitle
          subtitle="Everything in one place"
          subtitleColor="text-purple-lbg"
        >
          No stack <span className="text-purple-lbg">to assemble</span>
        </SectionTitle>
        <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
          Normally you, or your agent, pick a framework, a database layer, a
          queue, a tracing tool and a deploy target, then spend the context
          window gluing them together. In Darklang they&apos;re one system, so
          an agent sees the whole picture in one place and there&apos;s less to
          go wrong between the pieces.
        </p>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {BUILT_IN.map(b => (
          <div
            key={b.have}
            className="rounded-2xl border border-gray-200 bg-white p-5"
          >
            <div className="text-lg font-bold text-dark">{b.have}</div>
            <div className="text-sm text-gray-dark">instead of {b.you}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OnePlace;
