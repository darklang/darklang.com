import React from "react";

import { ClusterLabel, Quote, QuoteWall, SectionHead, Shell } from "./parts";
import { TONES } from "./tones";

const tone = TONES.blue;

/**
 * The parallel-agent story, in six clusters. It leads the page because it is
 * the problem that did not exist five years ago: everything else on this page
 * got worse with agents, but this one arrived with them.
 */
const CLUSTERS: { label: string; quotes: string[] }[] = [
  {
    label: "Agents interfering with each other",
    quotes: [
      "two agents editing files in one repo and you get diffs neither of them really made, changes half overwritten.",
      "they start stepping on each other's files. Merge conflicts everywhere. One agent reverts what another just wrote. It's a mess.",
      "When multiple agents work in parallel on the same repo, each in its own worktree, they often touch the same files.",
      "This becomes a real bottleneck as the number of parallel agents grows.",
      "Last week one session refactored a helper function while the other was writing tests that called it, and the merge was a mess.",
    ],
  },
  {
    label: "Worktrees",
    quotes: [
      "worktrees fix the git side but not the runtime. each agent gets its own branch and they still share one dev db, one port range, one node_modules.",
      "the main pain with parallel claude code + worktrees for us was port conflicts - every server binding to 3000, debuggers all fighting over 9229.",
      "While I get the theoretical benefits, in practice it has caused me nothing but pain.",
      "My testing pipeline doesnt know what to do with worktrees, claude repeatedly merges weird or pushes the worktree to github",
      "Worktrees are pain in the arse, especially if your dependency tree is huge. It just takes forever to spin up.",
    ],
  },
  {
    label: "Losing track",
    quotes: [
      "the second I try to run more than one agent at once, i start losing track of things.",
      "I just lose track of what's happening in which session and it was just a big ol pain in the butt.",
      "It mostly works but I have no idea what the other session just changed unless I go check manually.",
      "I kept losing context every time I had to git stash and switch branches to test something an agent had suggested.",
    ],
  },
  {
    label: "Review",
    quotes: [
      "reading every diff line by line defeats the point of running an agent in the first place",
      "just letting it write and merge feels like asking for trouble the first time it ‘helpfully’ refactors something I didn't ask for.",
    ],
  },
  {
    label: "Isolation failure",
    quotes: [
      "I made a serious mistake - I wrote all files to the main repo path instead of the worktree path.",
      'Sub-agents in worktrees regularly result in "cwd drift" and require extensive hooks and checks to combat.',
      "Branch checkout races: Agent A checks out branch X, Agent B checks out branch Y → Agent A is now on branch Y",
      "Commits land on wrong branches",
      'Changes "leak" to unintended branches (including main)',
      "We lost a full morning diagnosing this before discovering the root cause.",
    ],
  },
  {
    label: "Starting with stale state",
    quotes: [
      "the delegated worktree contained neither commit. It had branched from origin/main, not my local HEAD.",
      "started from a stale point and never saw the work I'd just done.",
    ],
  },
];

const Parallel: React.FC = () => (
  <Shell id="parallel" className="bg-gray-50">
    <SectionHead
      eyebrow="Parallel agent development"
      title="Two Agents, One Repo"
      tone={tone}
    >
      Running several agents at once is the whole promise of coding agents, and
      it is the first thing the tooling underneath gives up on. A repository is
      a single working tree, and a working tree has one current branch, one
      current directory, and one copy of every file.
    </SectionHead>

    <div className="space-y-12">
      {CLUSTERS.map(cluster => (
        <div key={cluster.label}>
          <ClusterLabel tone={tone}>{cluster.label}</ClusterLabel>
          <QuoteWall>
            {cluster.quotes.map(q => (
              <Quote key={q} tone={tone}>
                {q}
              </Quote>
            ))}
          </QuoteWall>
        </div>
      ))}
    </div>
  </Shell>
);

export default Parallel;
