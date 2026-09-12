import React from "react";

import DetailLinks from "../Home/DetailLinks";
import { Section, Term } from "./parts";
import { cmd, gap, out } from "./lines";

const LINES = [
  cmd("dark branch agent-1"),
  cmd("dark --branch agent-1 agent code \\"),
  cmd('  "fix the rounding in Shop.total"'),
  gap,
  cmd("dark diff agent-1"),
  out("  ~ fn  Shop.total      updated"),
  out("  ~ fn  Auth.check      updated"),
  out("  + fn  Util.roundHalf  new"),
  gap,
  cmd("dark branch archive agent-1"),
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
    panel={<Term lines={LINES} />}
  >
    <p>
      You asked an agent for one small fix. It also rewrote the auth check and
      added a helper nobody asked for, because it seemed like a good idea at the
      time.
    </p>
    <p>
      You didn&apos;t have to watch every step to find out. It was working on
      its own branch, live, the same way you do. It couldn&apos;t touch what you
      didn&apos;t allow, and every run it made was recorded. The diff lists
      every function it changed. Merge the branch if it&apos;s right, archive it
      if it isn&apos;t, and ask again.
    </p>
    <p>
      Every command that answers a question can answer in JSON, so the agent
      host you already use can drive it.
    </p>

    <DetailLinks
      color="text-acc-pink"
      links={[{ label: "Darklang for AI", to: "/ai" }]}
    />
  </Section>
);

export default Agents;
