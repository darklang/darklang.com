import React from "react";

import Section from "./Section";
import { Term } from "../BuiltForAgents/parts";
import { cmd, out, hi, gap } from "../BuiltForAgents/term";

/** The session ended. The work did not. */
const EXAMPLE = [
  out("# the agent's session ended mid-task"),
  gap,
  cmd("dark switch checkout-fix"),
  out("  on checkout-fix."),
  gap,
  cmd("dark commits"),
  hi("  a64ce1   Shop.checkout, Shop.refundWindow"),
  out("  7f3a9c   Stock.reserve"),
  gap,
  cmd("dark status"),
  out("  changed   Shop.refundWindow"),
  hi("  pick up from here, with any agent"),
];

const Usage: React.FC = () => (
  <Section
    id="usage"
    tinted
    reverse
    category="Usage and tooling"
    partial
    problems={[
      "Usage limits stop you halfway through a task: you hit a daily or weekly limit and have to wait or switch tools",
      "It launches a bunch of agents for review and runs out of usage immediately",
      "Switching agent tools means rewriting rules, hooks, skills, commands, and configs, because every tool does things differently",
      "Updates can suddenly make the agent worse: a model, harness, or product update and it hallucinates more, follows instructions worse, or handles context differently",
    ]}
    title="Some of This Is Not Ours to Fix"
    paras={[
      "A language does not raise your usage limits or stop a model regressing. What it can do is keep the work out of the session: anything finished is committed to a branch in your instance, so you or another agent resume from it rather than starting again.",
      "What the project knows about itself lives in the program rather than in per-harness rule files. Definitions, types, dependencies, history, and permission policies are the same whichever agent is calling, and they do not move when the model does. Your hooks are still yours to rewrite.",
    ]}
    link={{ href: "/built-for-agents", label: "The three we do not fix" }}
    example={<Term lines={EXAMPLE} label="dark" />}
  />
);

export default Usage;
