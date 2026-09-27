import React from "react";

import { Point, SectionHead, Shell } from "./parts";
import { TONES } from "./tones";

const tone = TONES.purple;

/**
 * Reported as written. Where a sentence already names the problem before
 * describing it, the naming clause becomes the heading; nothing else changes.
 */
const POINTS: { h: string; p?: string }[] = [
  {
    h: "Agents tend to drift off-task",
    p: "You ask them to do one thing, and somehow they end up changing something completely different, touching stuff you never asked them to touch, or just forgetting what the original task was",
  },
  {
    h: "they're not great at keeping the scope under control",
    p: "Sometimes they fix one tiny symptom instead of looking for the actual problem upstream. Other times you ask for a small change and somehow end up with a massive refactor you never wanted",
  },
  {
    h: "You still have to babysit them quite a bit.",
    p: "Letting an agent run completely on its own can be risky. It might make a bad decision, disappear down a rabbit hole, or convince itself that something works when it doesn't",
  },
  { h: "Long-running agents can get stuck in loops" },
  {
    h: "Sometimes they just ignore instructions.",
    p: "You can have explicit rules, memory files, previous transcripts, or an AGENTS.md, and the agent still does something those instructions specifically told it not to do",
  },
  {
    h: "It's hard to know how much freedom to give an agent.",
    p: "Give it too little and you spend the whole time micromanaging it. Give it too much and you risk scope creep, bad decisions, or destructive changes",
  },
  {
    h: "They can massively overthink really simple tasks.",
    p: "You ask for a straightforward edit and somehow the agent spends ages exploring files, planning, reasoning, and calling tools",
  },
  {
    h: "Long-running agents are bad at telling you what's happening.",
    p: "Sometimes they sit there for ages and you have no idea whether they're working, stuck, looping, or dead.",
  },
];

const Drift: React.FC = () => (
  <Shell id="drift">
    <SectionHead
      eyebrow="Staying on task"
      title="You Asked for One Thing"
      tone={tone}
    >
      An agent that can edit anything will eventually edit something else. The
      instructions that were supposed to keep it in bounds are text it can
      decide to reinterpret, which makes supervision a full-time job rather than
      a safety net.
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

export default Drift;
