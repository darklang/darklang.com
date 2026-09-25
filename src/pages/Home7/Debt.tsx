import React from "react";

import { ClusterLabel, Point, SectionHead, Shell } from "./parts";
import { TONES } from "./tones";

const tone = TONES.cyan;

/**
 * What is left behind after the code lands. Three clusters, because the debt
 * shows up in three different places: in the code, in the people who now have
 * to understand it, and in the schedule nobody actually saved time on.
 */
const CLUSTERS: { label: string; points: { h: string; p?: string }[] }[] = [
  {
    label: "Code quality and technical debt",
    points: [
      {
        h: "They can turn simple code into way too much code.",
        p: "Something that should be 300 lines somehow becomes 1,000 lines full of helpers, abstractions, defensive checks, and extra complexity",
      },
      { h: "They can invent different ways of representing the same thing." },
      {
        h: "They'll duplicate things that already exist.",
        p: "Instead of finding an existing function and extending it, they can create another almost-identical version.",
      },
      { h: "dead code, temporary fixes" },
      {
        h: "they leave behind comments that include history, narrate your prompt into the code",
      },
      {
        h: "Technical debt can build up ridiculously quickly.",
        p: "Duplication, weak abstractions, inconsistent error handling, messy components, and quick fixes pile up much faster when generating code is cheap",
      },
    ],
  },
  {
    label: "Comprehension debt",
    points: [
      {
        h: "It's really easy now to submit code you don't actually understand.",
        p: "Someone can get an agent to make something work and open a PR assuming teammates or another agent will catch anything that's wrong",
      },
      {
        h: "comprehension debt on top of technical debt.",
        p: "The code works, but nobody really understands why it works, how all the pieces fit together, or who owns that knowledge anymore",
      },
      {
        h: "AI review still doesn't replace actually understanding the code.",
        p: "It can point you toward suspicious things, but someone still needs to understand what changed and verify it",
      },
      {
        h: "They can optimize for whatever you're using to measure success instead of the actual goal.",
        p: 'If success looks like "make these tests pass," they might find the easiest way to make them green instead of properly fixing the software',
      },
      {
        h: 'There\'s also an endless "could this be improved?" problem.',
        p: "Ask one agent to review another agent's work and there's almost always another refactor, abstraction, or suggestion. You can keep \"improving\" something forever",
      },
    ],
  },
  {
    label: "Where the time actually goes",
    points: [
      {
        h: "If implementation becomes really fast, then planning, architecture, QA, security, CI, release, and verification become the slow parts",
      },
      {
        h: "Feeling faster doesn't always mean you actually shipped faster.",
        p: "The time saved generating code can disappear into reviewing it, debugging weird issues, cleaning things up, and figuring out what the agent actually did",
      },
    ],
  },
];

const Debt: React.FC = () => (
  <Shell id="debt">
    <SectionHead
      eyebrow="Cheap code, expensive consequences"
      title="Generating Code Was Never the Bottleneck"
      tone={tone}
    >
      When writing code costs almost nothing, everything downstream of writing
      it gets more expensive: reviewing it, understanding it, keeping it
      consistent, and knowing whether it actually did the thing.
    </SectionHead>

    <div className="space-y-14">
      {CLUSTERS.map(cluster => (
        <div key={cluster.label}>
          <ClusterLabel tone={tone}>{cluster.label}</ClusterLabel>
          <div className="gap-x-12 md:columns-2">
            {cluster.points.map(item => (
              <div key={item.h} className="mb-9 break-inside-avoid">
                <Point h={item.h} tone={tone}>
                  {item.p}
                </Point>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Shell>
);

export default Debt;
