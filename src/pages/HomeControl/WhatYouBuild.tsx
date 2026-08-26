import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";

const KINDS = [
  {
    kicker: "Automations",
    title: "Jobs that keep going",
    body: "Scheduled work that survives failures, waits for a person, and touches real systems safely.",
    color: "text-purple-lbg",
  },
  {
    kicker: "Agent tools",
    title: "MCP servers you can vouch for",
    body: "Typed tools with a narrow scope, an approval step and a full history behind every call.",
    color: "text-acc-teal",
  },
  {
    kicker: "Backends",
    title: "Endpoints, jobs and storage",
    body: "HTTP handlers, crons, workers and a database, without a deploy pipeline between you and them.",
    color: "text-acc-amber",
  },
  {
    kicker: "Personal infrastructure",
    title: "Small software on your own machines",
    body: "The same app runs on a laptop, a home server or a VPS, with a different grant on each.",
    color: "text-acc-pink",
  },
];

const WhatYouBuild: React.FC = () => (
  <section className="py-16 md:py-20">
    <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
      <div className="max-w-3xl">
        <SectionTitle subtitle="What you build" subtitleColor="text-purple-lbg">
          Four things this makes <span className="text-purple-lbg">easy</span>
        </SectionTitle>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {KINDS.map(k => (
          <div
            key={k.kicker}
            className="rounded-2xl border border-gray-200 bg-white p-6"
          >
            <div
              className={`text-xs font-bold uppercase tracking-wider mb-2 ${k.color}`}
            >
              {k.kicker}
            </div>
            <h3 className="text-lg font-bold text-dark mb-1.5">{k.title}</h3>
            <p className="text-gray-dark">{k.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYouBuild;
