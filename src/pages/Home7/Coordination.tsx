import React from "react";

import { Point, SectionHead, Shell } from "./parts";
import { TONES } from "./tones";

const tone = TONES.green;

const POINTS: { h: string; p?: string }[] = [
  {
    h: "Multiple agents don't magically know how to work together.",
    p: "One agent doesn't automatically know what another changed, what decisions it made, who owns which part of the task, or what dependencies exist",
  },
  {
    h: "Once agents start talking to other agents, security gets harder too.",
    p: "They can exchange information and take actions faster than a human can inspect everything, and malicious instructions can potentially spread between them",
  },
  {
    h: "Switching agent tools can be a pain.",
    p: "Moving from Cursor to Claude Code to Codex can mean rewriting rules, hooks, skills, commands, and configs because every tool does things differently",
  },
  {
    h: "Usage limits can stop you halfway through a task.",
    p: "You hit a daily or weekly limit and suddenly you have to wait or switch tools",
  },
  {
    h: "it launches a bunch of agents for review then run out of usage immediately",
  },
];

const Coordination: React.FC = () => (
  <Shell id="coordination" className="bg-gray-50">
    <SectionHead
      eyebrow="Many agents, no shared ground"
      title="Nothing They Can Both Look At"
      tone={tone}
    >
      Two agents on the same project have no common record of what was decided,
      what changed, or who is responsible for which part. They coordinate
      through the one artifact they share, which is the repository, and that is
      exactly where they collide.
    </SectionHead>

    <div className="gap-x-12 md:columns-2">
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

export default Coordination;
