import React from "react";

import Section from "./Section";
import { Term } from "../BuiltForAgents/parts";
import { cmd, out, hi, gap } from "../BuiltForAgents/term";

/** Three agents, three branches, and no second copy of anything on disk. */
const EXAMPLE = [
  cmd("dark branches"),
  out("  main"),
  hi("  checkout-fix     2 definitions"),
  out("  orders-paging    1 definition, 1 type"),
  out("  stock-alerts     3 definitions"),
  gap,
  cmd("dark status"),
  out("  on branch checkout-fix"),
  hi("  changed   Shop.checkout, Shop.refundWindow"),
  out("  affects   7 dependents"),
  out("  no stash, no checkout, no node_modules"),
];

const Parallel: React.FC = () => (
  <Section
    id="parallel"
    category="Parallel agent development"
    problems={[
      "Two agents editing files in one repo, and you get diffs neither of them really made, changes half overwritten",
      "They start stepping on each other's files: merge conflicts everywhere, one agent reverting what another just wrote",
      "It becomes a real bottleneck as the number of parallel agents grows",
      "Worktrees fix the Git side but not the runtime: each agent gets a branch and they still share one dev db, one port range, one node_modules",
      "Port conflicts, every server binding to 3000, debuggers all fighting over 9229",
      "The testing pipeline does not know what to do with worktrees, and the agent merges weirdly or pushes the worktree to GitHub",
      "With a huge dependency tree, a worktree takes forever to spin up",
      "cwd drift: files written to the main repo path instead of the worktree path",
      "Branch checkout races, commits landing on the wrong branch, changes leaking to unintended branches including main",
      "The delegated worktree branched from origin/main, not local HEAD, so the agent started from a stale point and never saw the work you just did",
      "Multiple agents do not magically know how to work together: what another changed, what it decided, who owns which part",
    ]}
    title="Give Every Agent a Branch, Not a Copy of Your Machine"
    paras={[
      "A Darklang program is structured data rather than a folder of text. Functions, types, and values are versioned as their own items and conflicts are detected by content, so two agents working on two definitions are never in the same file and there is no hunk to merge wrong.",
      "Branches live in your instance rather than as another checkout on disk: nothing to provision, no stash, no working tree to keep clean, no second node_modules to install. A branch is parented to the one you are on, so it carries the commits you just made instead of whatever origin/main last looked like.",
    ]}
    link={{ href: "/source-control", label: "How source control works" }}
    example={<Term lines={EXAMPLE} label="dark" />}
  />
);

export default Parallel;
