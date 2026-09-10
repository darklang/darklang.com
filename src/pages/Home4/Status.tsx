import React from "react";

import { Section } from "./parts";

const LINKS = [
  { name: "GitHub", href: "https://github.com/darklang/dark" },
  { name: "Discord", href: "https://discord.gg/darklang" },
  { name: "Blog", href: "https://blog.darklang.com" },
  { name: "Roadmap", href: "https://github.com/darklang/dark/issues" },
];

const Status: React.FC = () => (
  <Section
    id="status"
    eyebrow="Status"
    color="text-gray-dark"
    heading={
      <>
        Where it <span className="text-purple-lbg">stands</span>
      </>
    }
  >
    <p>
      Darklang is open source under Apache 2.0 and in active development. The
      CLI, the workbench, the source control, the sync layer, the language
      server and the MCP server are all written in Darklang. The team uses it
      every day to build itself.
    </p>

    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-2">
      {LINKS.map((l, i) => (
        <React.Fragment key={l.name}>
          {i > 0 && <span className="text-gray-light">·</span>}
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-purple-lbg hover:underline"
          >
            {l.name}
          </a>
        </React.Fragment>
      ))}
    </div>
  </Section>
);

export default Status;
