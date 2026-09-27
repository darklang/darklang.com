import React from "react";

import { Point, SectionHead, Shell } from "./parts";
import { TONES } from "./tones";

const tone = TONES.pink;

/**
 * Why the previous section keeps happening. Permission systems were designed
 * around a person who decides one action at a time; an agent is neither a
 * person nor one action at a time.
 */
const POINTS: { h: string; p?: string }[] = [
  {
    h: "A lot of existing infrastructure wasn't built for autonomous agents.",
    p: "APIs, permissions, sandboxes, CI systems, and developer tools usually assume there's a human deciding what happens next",
  },
  {
    h: "Giving an agent real permissions is scary.",
    p: "If it can touch production, delete data, spend money, deploy things, or change infrastructure, one bad decision can become a real incident",
  },
  {
    h: "Normal permissions don't completely solve that.",
    p: "Every individual action might technically be allowed while the combination of actions produces something nobody intended",
  },
  {
    h: '"Safe" or "Plan" modes aren\'t necessarily real safety boundaries.',
    p: "Telling an agent not to do something destructive isn't the same as technically preventing it",
  },
  {
    h: "Filesystem access is often way broader than it needs to be.",
    p: "If an agent can freely edit everything, it can accidentally touch files far outside the task",
  },
  {
    h: "Shell access makes the possible damage much bigger.",
    p: "A bad command could affect databases, backups, volumes, user files, infrastructure, or even the whole system",
  },
  {
    h: "Prompt injection is still a problem.",
    p: "Agents read external content while also having access to tools and permissions, so malicious instructions can have much bigger consequences.",
  },
  {
    h: "Sandboxes aren't a perfect safety net.",
    p: "If isolation fails or the environment exposes more credentials, files, or permissions than expected, one bad action becomes much more serious",
  },
  {
    h: "Generated code can introduce security problems of its own.",
    p: "Vulnerabilities or known-vulnerable dependencies can slip in even when the code looks reasonable",
  },
  {
    h: "It's not always clear what happens to your data.",
    p: "With cloud agents using several services, it can be hard to know where proprietary code, prompts, credentials, repository data, and tool outputs are being sent, processed, or stored",
  },
];

const Permissions: React.FC = () => (
  <Shell id="permissions">
    <SectionHead
      eyebrow="Permissions and safety"
      title="An Instruction Is Not a Boundary"
      tone={tone}
    >
      The reason an agent can delete a production database is not that anyone
      granted it that. It is that the thing granting access is a shell, a
      filesystem, and a set of credentials, none of which know what task is
      being worked on.
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

export default Permissions;
