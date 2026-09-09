import React from "react";

import DetailLinks from "../Home/DetailLinks";
import { Section, Shot, Term } from "./parts";
import { cmd, gap, out } from "./lines";

const LINES = [
  cmd("dark branch create agent-1"),
  cmd("dark agent code --branch agent-1 \\"),
  cmd('  "add a refund endpoint"'),
  cmd("dark review agent-1"),
  cmd("dark merge agent-1"),
  gap,
  cmd("dark status --json"),
  out('{ "changed": ['),
  out('    { "name": "Shop.refund", "followed": false }'),
  out("  ], ... }"),
];

const Agents: React.FC = () => (
  <Section
    id="agents"
    eyebrow="Agents"
    color="text-acc-pink"
    heading={
      <>
        Your agents, <span className="text-acc-pink">your rules</span>
      </>
    }
    flip
    tinted
    panel={
      <>
        <Term lines={LINES} />
        <Shot>
          The workbench with two branches in the sidebar, one named after an
          agent, and a diff open.
        </Shot>
      </>
    }
  >
    <p>
      You come back from lunch. An agent has written eleven functions, run them,
      and is waiting for you.
    </p>
    <p>
      It was working on its own branch, live, the same way you do. It
      couldn&apos;t touch what you didn&apos;t allow. Every run it made was
      recorded. You read what changed, and merge what&apos;s good.
    </p>
    <p>
      Every command answers in JSON and Darklang runs as an MCP server, so the
      agent host you already use can drive it.
    </p>

    <DetailLinks
      color="text-acc-pink"
      links={[{ label: "Darklang for AI", to: "/ai" }]}
    />
  </Section>
);

export default Agents;
