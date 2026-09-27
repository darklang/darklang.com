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
import { FilesVsDefinitions } from "./visuals";

/** The lead: the collision itself, and why there is nothing to collide in. */
const FEATURE: FeatureData = {
  n: "01",
  problem: {
    title: "Two agents in one repo, and the diff belongs to neither",
    paras: [
      "Run two sessions against the same checkout and the changes come back half overwritten, with edits neither of them quite made. They step on the same files, one reverts what the other just wrote, and it gets worse with every agent you add.",
    ],
  },
  solution: {
    title: "There Is No File to Collide In",
    paras: [
      "A Darklang program is not a folder of text. It is structured data: functions, types, and values, each stored and versioned as its own item. Source control records which definitions changed, and conflicts are detected by content rather than by position in a file.",
      "Two agents working on two definitions are not editing one file, so there is no hunk to merge wrong and no window where one write lands on top of another. Renaming a local variable does not change what a function means, so it does not register as a change at all.",
    ],
    link: { href: "/source-control", label: "Source control" },
  },
};

const MINIS: MiniData[] = [
  {
    n: "02",
    problem: {
      title: "Worktrees fix Git and leave the runtime alone",
      paras: [
        "A worktree per agent separates the branches, then hands them all the same dev database, the same port range, and the same node_modules. Every server wants 3000 and every debugger wants 9229.",
        "On a large dependency tree, spinning one up is the slow part of the task, the test pipeline was never taught what a worktree is, and the agent pushes it somewhere or merges something strange.",
      ],
      terms: ["git worktree", "node_modules", "port 3000", "spin-up time"],
    },
    solution: {
      title: "Branches with nothing to provision",
      para: "Branches live in your instance, not as another copy of the repository on disk. No staging area, no stash, no working tree to keep clean, and dependencies are references to immutable versions inside the code, so there is no install step to wait through before an agent starts.",
      cmds: ["dark switch checkout-fix"],
    },
  },
  {
    n: "03",
    problem: {
      title: "The isolation quietly fails, and the work starts stale",
      paras: [
        "Sub-agents drift out of their working directory and write to the main repo path. Commits land on the wrong branch, changes leak onto branches nobody targeted, main included, and it costs a morning to find out why.",
        "The other half is where the work begins: a delegated worktree branches from origin/main rather than your local HEAD, so the agent never sees the commits you made ten minutes ago.",
      ],
      terms: ["cwd drift", "wrong branch", "leaked to main", "stale HEAD"],
    },
    solution: {
      title: "No path to get wrong, and a branch that starts where you are",
      para: "There is no working directory for a definition to be written into by mistake, and no second copy that can fall out of step with the first. Work in progress belongs to the branch it was written on, and a branch started while you are on another is parented to it, so it carries the commits you just made.",
      cmds: ["dark branches", "dark status"],
    },
  },
  {
    n: "04",
    problem: {
      title: "You cannot follow it, and reading every diff defeats the point",
      paras: [
        "The moment more than one session is running you stop knowing what changed where, and finding out means going to look. Testing something one of them suggested means stashing, switching branches, and losing your own context on the way back.",
        "Then review: reading the diff line by line costs about what writing it would have, and merging it unread is fine until the first refactor nobody asked for.",
      ],
      terms: ["git stash", "context switch", "line-by-line review"],
    },
    solution: {
      title: "Changes that describe themselves",
      para: (
        <>
          <C>dark status</C> says what is in the draft and <C>dark commits</C>{" "}
          lists commits by definition name rather than by hunks of a file, so
          history reads like a changelog. The dependency graph is part of the
          program, so <C>dark deps</C> shows what a change depends on and
          everything that depends on it.
        </>
      ),
      cmds: ["dark status", "dark commits", "dark deps Shop.checkout"],
    },
  },
  {
    n: "05",
    problem: {
      title: "Several agents, nothing they can both look at",
      paras: [
        "One agent does not know what another changed, what it decided, which part of the task it owns, or what depends on its work. The only thing they genuinely share is the repository, which is exactly where they collide.",
        "Once they hand work to each other it gets harder to watch: they act faster than anyone can inspect, and an injected instruction can travel between them.",
      ],
      terms: ["handoff", "shared state", "agent-to-agent"],
    },
    solution: {
      title: "They share a program, not a chat log",
      para: "What one agent did is in the program: commits listed by definition, dependents computed, traces of what actually ran. They do not have to share reach either, because the policy granted to a run applies to that invocation, so a reviewing agent can be handed less than the one making changes.",
    },
  },
];

const Parallel: React.FC = () => (
  <Shell id="parallel">
    <ActHead
      eyebrow="Running agents in parallel"
      title="Four Agents, One Repository"
    >
      Parallelism is the whole reason to use coding agents, and it is the first
      thing the tooling underneath gives up on. A repository is one working
      tree, with one current branch, one current directory, and one copy of
      every file.
    </ActHead>

    <Feature data={FEATURE} visual={<FilesVsDefinitions />} />
    <Minis items={MINIS} />
  </Shell>
);

export default Parallel;
