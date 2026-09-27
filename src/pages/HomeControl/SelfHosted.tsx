import React from "react";

import Section, { Facts } from "./Section";

// The parts of the tool, as packages. The last row is the reader's own command,
// sitting in the same list to make the point that nothing here is privileged.
const PARTS = [
  { pkg: "Darklang.Cli", what: "the command line" },
  { pkg: "Darklang.LanguageServer", what: "completions and hovers" },
  { pkg: "Darklang.ModelContextProtocol", what: "the MCP server" },
  { pkg: "Darklang.Tui", what: "the terminal interface" },
  { pkg: "Darklang.SourceControl", what: "branches, diffs and sync" },
  { pkg: "Darklang.Agents", what: "the agent workflows" },
];

const SelfHosted: React.FC = () => (
  <Section
    tinted
    flip
    eyebrow="Written in itself"
    color="text-acc-pink"
    heading={
      <>
        You own the <span className="text-acc-pink">tool itself</span>
      </>
    }
    panel={
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 text-sm font-semibold">
          <span className="text-acc-pink">The tool itself</span>
          <span className="ml-auto font-code text-xs font-normal text-gray-light">
            dark packages
          </span>
        </div>
        <div className="p-4 flex flex-col gap-1.5">
          {PARTS.map(p => (
            <div
              key={p.pkg}
              className="flex flex-wrap items-baseline gap-x-3 rounded-lg px-3 py-2"
            >
              <span className="font-code text-sm text-dark">{p.pkg}</span>
              <span className="text-xs text-gray-light">{p.what}</span>
            </div>
          ))}
          <div className="flex flex-wrap items-baseline gap-x-3 rounded-lg bg-[#c25a7d14] px-3 py-2">
            <span className="font-code text-sm text-acc-pink">
              Acme.Cli.standup
            </span>
            <span className="text-xs text-acc-pink">
              yours, written this morning
            </span>
          </div>
        </div>
      </div>
    }
  >
    <p>
      The tool is written in the language it ships. Every part of it is a
      package you can open, read and replace, not a binary you file a bug
      against. Your own command lands in the same package space and travels the
      same way.
    </p>
    <Facts
      color="bg-acc-pink"
      items={[
        "A command is a function. No plugin API to learn, no build step to wire up.",
        "Commit it, and it is in a teammate's shell on their next sync.",
        "The review interface is a package too. If it does not show what you need, change it.",
      ]}
    />
  </Section>
);

export default SelfHosted;
