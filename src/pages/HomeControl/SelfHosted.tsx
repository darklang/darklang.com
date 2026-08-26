import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";

const TILES = [
  {
    kicker: "Write it",
    title: "A command is a function",
    body: "No plugin API to learn and no build step to wire up.",
  },
  {
    kicker: "Share it",
    title: "Commit, then sync",
    body: "Your command shows up in a teammate's shell on their next sync.",
  },
  {
    kicker: "Change it",
    title: "Even the review interface",
    body: "If it does not show what you need, edit it and sync the change.",
  },
];

const SelfHosted: React.FC = () => (
  <section className="py-16 md:py-20 bg-[#F9F9FB] border-y border-gray-200">
    <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
      <div className="max-w-3xl">
        <SectionTitle subtitle="Self hosted" subtitleColor="text-acc-pink">
          You own the <span className="text-acc-pink">tool itself</span>
        </SectionTitle>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed -mt-2 mb-10">
          The CLI, the language server, the MCP server, the terminal interface
          framework, the source control library and the agent workflows are all
          Darklang packages. Your own command lives in the same package space
          and travels the same way.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {TILES.map(t => (
          <div
            key={t.kicker}
            className="rounded-2xl border border-gray-200 bg-white p-6"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-acc-pink mb-2">
              {t.kicker}
            </div>
            <h3 className="text-lg font-bold text-dark mb-1.5">{t.title}</h3>
            <p className="text-gray-dark">{t.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SelfHosted;
