import React from "react";

import { Point, SectionHead, Shell } from "./parts";
import { TONES } from "./tones";

const tone = TONES.teal;

/**
 * Everything an agent cannot see. Grouped loosely from the narrow view of one
 * file outwards: the codebase, the other repositories, the knowledge that was
 * never written down, and the model itself changing underneath the workflow.
 */
const POINTS: { h: string; p?: string }[] = [
  {
    h: "They tend to focus too much on whatever is right in front of them.",
    p: "They'll look at one file or function and start changing it without exploring enough of the codebase to understand the architecture, existing patterns, dependencies, or edge cases",
  },
  {
    h: "Things get harder when the project spans multiple repos or services.",
    p: "An agent can make a change that looks correct inside one repository without realizing it breaks something somewhere else",
  },
  {
    h: "Agents tend to copy whatever mess is already in the codebase.",
    p: "If the existing architecture is bad, they'll often follow those patterns and multiply the technical debt.",
  },
  {
    h: "Docs made for humans don't always work that well for agents.",
    p: "Conventions, design tokens, project rules, and relationships between information can be obvious to developers but easy for an agent to miss",
  },
  {
    h: "Project knowledge is scattered everywhere.",
    p: "Some of it is in Slack, Notion, tickets, READMEs, Obsidian, docs, or someone's notes. The agent only knows about the pieces you actually gave it",
  },
  {
    h: "They still make up APIs and dependencies.",
    p: "They'll confidently call functions that don't exist, pick outdated libraries, miss newer options, and sometimes keep building on top of that wrong assumption",
  },
  {
    h: "Updates can suddenly make the agent worse.",
    p: "A workflow can work really well, then a model, harness, or product update happens and suddenly it hallucinates more, follows instructions worse, or handles context differently",
  },
];

const BlindSpots: React.FC = () => (
  <Shell id="blind-spots" className="bg-gray-50">
    <SectionHead
      eyebrow="What the agent cannot see"
      title="Reconstructing the Program, Every Time"
      tone={tone}
    >
      Before an agent can change anything it has to work out what the program
      is: which files matter, which symbols are real, what calls what, and which
      of the rules written for people still apply. It does that by reading and
      guessing, and it starts over on the next task.
    </SectionHead>

    <div className="gap-x-12 gap-y-10 md:columns-2">
      {POINTS.map(item => (
        <div key={item.h} className="mb-10 break-inside-avoid">
          <Point h={item.h} tone={tone}>
            {item.p}
          </Point>
        </div>
      ))}
    </div>
  </Shell>
);

export default BlindSpots;
