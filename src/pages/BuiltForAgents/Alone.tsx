import React from "react";

import {
  ActHead,
  C,
  Feature,
  FeatureData,
  MiniData,
  Minis,
  Shell,
  Term,
} from "./parts";
import { cmd, out, hi, gap } from "./term";

/** What the agent produced, and what actually happened when it ran. */
const TRACE = [
  cmd("dark eval 'Shop.checkout(outOfStockCart)'"),
  out('  Error  Stock.Unavailable "sku-4471"'),
  gap,
  cmd("dark traces view 4f2a1c"),
  out("  Shop.checkout(cart)"),
  out("    Cart.total(items)          → 42.00     1ms"),
  hi("    Stock.reserve(items)       → Error     6ms"),
  out('      Stock.available("sku-4471") → 0'),
  out("    Payments.charge            not reached"),
  gap,
  out("  3 calls · 7ms · 1 error"),
];

const FEATURE: FeatureData = {
  n: "06",
  problem: {
    title: "It says it works",
    paras: [
      "An agent can talk itself into believing a change is correct, and if success is phrased as make these tests pass, turning them green the cheapest way is a perfectly rational strategy. Long runs tell you nothing either: it sits there and you cannot tell whether it is working, looping, or dead.",
    ],
  },
  solution: {
    title: "Evidence, Not Assertion",
    paras: [
      <>
        <C>dark eval</C> runs the definition that just changed against a real
        input, with no project bootstrap standing between the question and the
        answer. Traces record the execution: nested calls, the values that moved
        through them, timing, and errors.
      </>,
      "The agent checks its own work by reading what happened, and you review the same trace instead of taking its word for it. Pointing a second agent at the first one's output never closed that gap; a record of the run does.",
    ],
    link: { href: "/traceDriven", label: "Trace-driven development" },
  },
};

const MINIS: MiniData[] = [
  {
    n: "07",
    problem: {
      title: "It wanders off, and the rules do not hold it",
      paras: [
        "You ask for one thing and it changes another, touches files nobody mentioned, or loses the original task. Sometimes it patches the symptom instead of the cause; sometimes a two-line change comes back as a refactor you never wanted.",
        "Explicit rules, memory files, transcripts, and an AGENTS.md do not reliably stop it, because instructions are text it can reinterpret. So it gets babysat: too little freedom and you micromanage, too much and you get scope creep, loops, and a one-line edit that takes forty tool calls.",
      ],
      terms: ["off-task", "scope creep", "AGENTS.md", "stuck in a loop"],
    },
    solution: {
      partial: true,
      title: "Drift becomes visible immediately, and bounded",
      para: (
        <>
          No language stops a model changing its mind. What changes is how long
          it takes you to notice and how far it gets. Work is per definition, so{" "}
          <C>dark status</C> names exactly what was touched, and reach is
          enforced rather than requested: a function declares its effect ceiling
          in its own source, and that ceiling is part of its content hash.
        </>
      ),
      cmds: ["dark status", "dark permissions requirements Shop.checkout"],
    },
  },
  {
    n: "08",
    problem: {
      title: "It cannot see the program, so it invents one",
      paras: [
        "It opens one file, changes it, and never picks up the architecture around it: the patterns, the dependencies, the edge cases. Across services a change can look correct locally and break something two repos away. Whatever mess is already there gets copied, so the bad patterns multiply.",
        "Docs written for people are easy to skip, and the rest of what it needs is in Slack, Notion, tickets, READMEs, and someone's private notes. So it fills the gaps: functions that do not exist, outdated libraries, confident assumptions it then builds on.",
      ],
      terms: ["tunnel vision", "cross-repo break", "hallucinated API"],
    },
    solution: {
      title: "Ask the program instead of grepping for it",
      para: "The language, package manager, source control, and runtime share one model of every definition, and the CLI and MCP tools hand it to an agent directly. It searches for a function, reads its signature, follows its dependents, and gets a typed answer. A name resolves to something that exists or it does not resolve.",
      cmds: ['dark search "checkout" --fn', "dark typecheck"],
      link: { href: "/ai", label: "Darklang and AI" },
    },
  },
];

const Alone: React.FC = () => (
  <Shell id="alone" className="bg-gray-50">
    <ActHead
      eyebrow="What one agent does on its own"
      title="The Problems That Do Not Need a Second Agent"
    >
      Before any of this is about parallelism, it is about one session, one
      task, and a model that cannot see the program it is changing and cannot
      show you what it did.
    </ActHead>

    <Feature
      data={FEATURE}
      visual={<Term lines={TRACE} label="dark" />}
      reverse
    />
    <Minis items={MINIS} />
  </Shell>
);

export default Alone;
