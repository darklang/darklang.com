import React from "react";

import Section from "./Section";
import { Term } from "../BuiltForAgents/parts";
import { cmd, out, hi, gap } from "../BuiltForAgents/term";

/**
 * Drift made visible and bounded. The status line shows it touched more than
 * it was asked to; the ceiling denies the effect it reached for anyway.
 */
const EXAMPLE = [
  cmd("dark status"),
  out("  on branch checkout-fix"),
  hi("  changed   Shop.checkout, Cart.total, Cart.Item"),
  out("  affects   12 dependents"),
  out("  # you asked for one function. three changed."),
  gap,
  cmd("dark permissions show Cart.total"),
  out("  requires   FileWrite"),
  out("  ceiling    :{}        declared in the source"),
  hi("  denied     FileWrite, by function policy"),
];

const Autonomy: React.FC = () => (
  <Section
    id="autonomy"
    category="Autonomy and scope"
    tinted
    reverse
    partial
    problems={[
      "Agents tend to drift off-task: you ask for one thing and they end up changing something completely different",
      "They touch stuff you never asked them to touch, or just forget what the original task was",
      "They are not great at keeping scope under control: a tiny symptom fixed instead of the actual problem upstream",
      "Or you ask for a small change and somehow end up with a massive refactor you never wanted",
      "Sometimes they just ignore instructions: explicit rules, memory files, previous transcripts, an AGENTS.md, and it still does the thing those told it not to",
      "Long-running agents can get stuck in loops",
      "They can massively overthink really simple tasks, spending ages exploring files, planning, reasoning, and calling tools",
      "You still have to babysit them: a bad decision, a rabbit hole, a change nobody wanted",
      "It is hard to know how much freedom to give. Too little and you micromanage; too much and you risk scope creep and destructive changes",
    ]}
    title="Drift Becomes Visible Immediately, and Bounded"
    paras={[
      "No language stops a model changing its mind. What changes is how long it takes you to notice and how far it gets. Work is per definition, so status names exactly which functions, types, and values were touched: something nobody asked for is one line of output rather than a discovery during review.",
      "And reach is enforced rather than requested. A function declares its effect ceiling in its own source, that ceiling is part of its content hash, and an agent that decides to do something else is still held to what was granted. That is the answer to how much freedom to give: it stops being a judgement call and becomes a policy.",
    ]}
    link={{
      href: "/built-for-agents",
      label: "Why the answer is only partial",
    }}
    example={<Term lines={EXAMPLE} label="dark" />}
  />
);

export default Autonomy;
