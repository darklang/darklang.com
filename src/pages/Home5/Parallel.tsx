import React from "react";

import { Section, Term } from "../Home4/parts";
import { cmd, gap, note, out } from "../Home4/lines";

const LINES = [
  cmd("dark branch agent-1"),
  cmd("dark branch agent-2"),
  cmd('dark --branch agent-1 agent code "add a refund endpoint"'),
  cmd('dark --branch agent-2 agent code "email a weekly report"'),
  gap,
  cmd("dark diff agent-1"),
  out("+ Shop.refund          new function"),
  out("~ Shop.Order           type: added refundedAt"),
  note("  2 callers of Shop.Order updated"),
  gap,
  cmd("dark merge agent-1 -y"),
];

const Parallel: React.FC = () => (
  <Section
    id="parallel"
    eyebrow="Parallel agents"
    color="text-acc-pink"
    heading={
      <>
        Five agents, <span className="text-acc-pink">no worktrees</span>
      </>
    }
    flip
    tinted
    panel={<Term title="dark" lines={LINES} />}
  >
    <p>
      Agents create and move between branches freely, several at once, on the
      same codebase. No worktrees, no stashes, no copies of the repo to keep in
      sync.
    </p>
    <p>
      Review shows what changed in meaning: this function is new, this type
      gained a field, these callers were updated. Not a wall of red and green
      lines. That makes code an agent wrote a lot less scary to run.
    </p>
    <p>
      A conflict never blocks a merge. Both versions are kept, and you choose
      between them by reading them as code, so neither you nor your agents lose
      an afternoon untangling markers in a text file.
    </p>
  </Section>
);

export default Parallel;
