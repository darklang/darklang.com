import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";

const KINDS = [
  {
    kicker: "Daemons",
    title: "Work that comes back up",
    body: "Enable a daemon and it registers with launchd or systemd, so it starts at boot and restarts after a crash. Retrying a flaky call is one library function.",
    color: "text-purple-lbg",
  },
  {
    kicker: "Agent tools",
    title: "MCP servers with a visible reach",
    body: "Each tool is a typed function whose effects are read from its code, so you know what an agent could touch before you connect it.",
    color: "text-acc-teal",
  },
  {
    kicker: "Backends",
    title: "Endpoints and storage",
    body: "Route HTTP requests to plain functions and keep data in a typed key-value store. Every request leaves a trace you can open.",
    color: "text-acc-amber",
  },
  {
    kicker: "Personal infrastructure",
    title: "Small software on your own machines",
    body: "Sync the same app to a laptop, a home server and a VPS, and give each machine its own permissions.",
    color: "text-acc-pink",
  },
];

const WhatYouBuild: React.FC = () => (
  <section className="py-16 md:py-20">
    <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
      <div className="max-w-3xl">
        <SectionTitle subtitle="What you build" subtitleColor="text-purple-lbg">
          Four things to <span className="text-purple-lbg">build with it</span>
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
