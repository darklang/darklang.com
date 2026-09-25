import React from "react";

import {
  ActHead,
  C,
  Feature,
  FeatureData,
  MiniData,
  Minis,
  Shell,
} from "./parts";
import { DefinitionPanel } from "./visuals";

const FEATURE: FeatureData = {
  n: "09",
  problem: {
    title: "The code shipped and nobody understands it",
    paras: [
      "It is easy now to open a PR for code you could not explain, assuming a teammate or another agent will catch whatever is wrong. The result works, and nobody can say why, how the pieces fit, or who owns that knowledge now.",
      "The bottleneck moves too. If implementation is instant, planning, architecture, QA, security, CI, release, and verification become the slow parts, and the time saved generating the code returns as time spent working out what the agent did.",
    ],
  },
  solution: {
    title: "The Thing That Ran Is the Thing You Can Inspect",
    paras: [
      "Source, signature, dependencies, dependents, version history, and traces of real executions hang off the same definition. Investigating behaviour is a lookup rather than a reconstruction, so a person can answer why does this work without rebuilding the author's reasoning from nothing.",
      "There is also less pipeline left to become the new bottleneck. Code runs when it exists: no build phase, no dependency resolution, no deploy step in between.",
    ],
    link: { href: "/package-manager", label: "Everything in one place" },
  },
};

const MINIS: MiniData[] = [
  {
    n: "10",
    problem: {
      title: "Cheap code, expensive codebase",
      paras: [
        "Three hundred lines of work arrives as a thousand, padded with helpers, abstractions, and defensive checks nobody needed, and the same idea ends up represented three different ways. Instead of extending the function that already exists, it writes a near-identical one beside it.",
        "Dead code and temporary fixes accumulate, comments narrate the prompt that produced them, and duplication, weak abstractions, and inconsistent error handling pile up far faster than they used to, because generating them costs nothing.",
      ],
      terms: ["1,000 lines", "near-duplicate", "dead code", "tech debt"],
    },
    solution: {
      title: "Duplication and dead code are queries, not archaeology",
      para: (
        <>
          Every definition is content-addressed, so two identical
          implementations are one item rather than two copies waiting to drift
          apart, and search covers the whole package tree, which makes finding
          the existing function cheaper than writing another. Because the
          program knows its own dependency graph, <C>dark deps</C> answers which
          definitions nothing depends on any more.
        </>
      ),
      cmds: ['dark search "normalize email"', "dark deps User.Email.normalize"],
    },
  },
];

const Aftermath: React.FC = () => (
  <Shell id="aftermath">
    <ActHead
      eyebrow="What it leaves behind"
      title="Generating Code Was Never the Bottleneck"
    >
      When writing code costs almost nothing, everything downstream of writing
      it gets more expensive: reviewing it, understanding it, keeping it
      consistent, and being able to say later why it is the way it is.
    </ActHead>

    <Feature data={FEATURE} visual={<DefinitionPanel />} />
    <Minis items={MINIS} cols={1} />
  </Shell>
);

export default Aftermath;
