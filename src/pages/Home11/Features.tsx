import React from "react";
import { Link } from "react-router-dom";

import SectionTitle from "../../common/ui/SectionTitle";
import { Shell } from "../Home10/parts";
import * as V from "./visuals";

/**
 * OUTLINE, not final copy. Each section keeps its title and states the
 * problem it answers, then lists the points the written version will make.
 * The fully written sections are parked in FeaturesFull.tsx.
 */
interface Outline {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  /** The section's colour, as the live homepage gives each section one. */
  accent: Accent;
  problem: string;
  /** One line before the bullets, where the list needs a claim made once. */
  intro?: string;
  points: string[];
  /** Where to read more, shown under the points. */
  links?: { label: string; to: string }[];
}

type Accent =
  | "purple-lbg"
  | "blue-lbg"
  | "rust"
  | "acc-green"
  | "acc-amber"
  | "acc-pink"
  | "acc-teal";

/** Tailwind needs the full class names in source, so they are spelled out. */
const ACCENT: Record<
  Accent,
  { text: string; chip: string; rule: string; marker: string }
> = {
  "purple-lbg": {
    text: "text-purple-lbg",
    chip: "bg-purple-lbg/15 text-purple-lbg",
    rule: "border-purple-lbg/30",
    marker: "marker:text-purple-lbg",
  },
  "blue-lbg": {
    text: "text-blue-lbg",
    chip: "bg-blue-lbg/15 text-blue-lbg",
    rule: "border-blue-lbg/30",
    marker: "marker:text-blue-lbg",
  },
  rust: {
    text: "text-rust",
    chip: "bg-rust/15 text-rust",
    rule: "border-rust/30",
    marker: "marker:text-rust",
  },
  "acc-green": {
    text: "text-acc-green",
    chip: "bg-acc-green/15 text-acc-green",
    rule: "border-acc-green/30",
    marker: "marker:text-acc-green",
  },
  "acc-amber": {
    text: "text-acc-amber",
    chip: "bg-acc-amber/15 text-acc-amber",
    rule: "border-acc-amber/30",
    marker: "marker:text-acc-amber",
  },
  "acc-pink": {
    text: "text-acc-pink",
    chip: "bg-acc-pink/15 text-acc-pink",
    rule: "border-acc-pink/30",
    marker: "marker:text-acc-pink",
  },
  "acc-teal": {
    text: "text-acc-teal",
    chip: "bg-acc-teal/15 text-acc-teal",
    rule: "border-acc-teal/30",
    marker: "marker:text-acc-teal",
  },
};

const SECTIONS: Outline[] = [
  {
    id: "shorter-path",
    eyebrow: "Feedback loop",
    accent: "acc-green",
    title: (
      <>
        Give AI a <span className="text-acc-green">shorter path</span> to
        working software
      </>
    ),
    problem:
      "Between an agent editing code and knowing whether it works sit a build, a test runner, a log search, and an issue tracker, each a separate tool with its own setup and its own view of the code.",
    intro:
      "Darklang is one system, so all of this is already there when the agent opens it:",
    points: [
      "No build step: change a function and run it right away",
      "No dependency install: packages live in the same system, so the agent calls a function by name and it's there",
      "Type errors show up the moment a function is saved",
      "Run the tests to check the change before calling it done",
      "Read the trace of what actually happened in a run to understand a failure",
      "Commit the change from the same place, with no git to set up",
      "Find recorded issues, and record new ones, without leaving for another tool",
    ],
  },
  {
    id: "backend",
    eyebrow: "Backend infrastructure",
    accent: "blue-lbg",
    title: (
      <>
        Build and run the <span className="text-blue-lbg">whole backend</span>{" "}
        in one place
      </>
    ),
    problem:
      'Ask an agent to "charge each customer monthly and email them their invoice". In most stacks that means an endpoint, a database, a scheduler, a queue, secrets for the payment and email services, and a deploy pipeline, each a separate service to choose, connect, and explain to the agent before it can start.',
    intro:
      "In Darklang, all of those are part of the runtime, so the agent writes the functions and the rest is already there:",
    points: [
      "Endpoints and routing: write a handler as a function, and serve a router directly",
      "Databases: store and query typed data from the same code",
      "Scheduled jobs: run a function on a schedule, with no separate scheduler to set up",
      "Queues and workers: send work to a queue from anywhere, and process it in the background, out of the request path",
      "Secrets and config: set per instance, never in the code, so the same program runs anywhere without editing it",
      "Deployment: run the same backend on your machine, on a host you control, or on Darklang Cloud",
    ],
  },
  {
    id: "discoveries",
    eyebrow: "Task management",
    accent: "purple-lbg",
    title: (
      <>
        Keep the agent <span className="text-purple-lbg">on task</span>
      </>
    ),
    problem:
      "While doing one task, an agent finds another problem. It fixes it without asking, leaves a note nobody comes back to, or files it in a tracker that knows nothing about the code. Either way, the context is lost and the problem comes back later.",
    intro:
      "Issues are part of Darklang, so a follow-up keeps its evidence from the moment it's found to the moment it's done:",
    points: [
      "Discovered problems are kept: the agent records a proposed follow-up, with the reason and links to the functions, tests, and traces involved, for you to drop, schedule, or hand off",
      "Tasks come with real context: an issue points at actual code and actual runs, so nobody has to rebuild the problem from a paragraph of prose",
      "Unrelated work stays separate: the follow-up goes on its own branch, so you review and merge it on its own",
      "Handoffs keep the evidence: another agent picks up the same issue, code, tests, and traces, without the original conversation and without regathering what the first agent already found",
      '"Done" is easy to verify: test results and traces show whether the reported problem was actually fixed',
    ],
  },
  {
    id: "answers",
    eyebrow: "Context",
    accent: "acc-teal",
    title: (
      <>
        Give your agent <span className="text-acc-teal">better context</span>{" "}
        with fewer tokens
      </>
    ),
    problem:
      "To find a function and the code that uses it, an agent reads entire files and keeps them in context. This takes time, uses tokens, and leaves less room for the actual task. RAG, repo maps, and codebase indexes help narrow the search, but each needs a separate index that must be built, kept up to date, and trusted.",
    points: [
      "Darklang stores code as functions, types, and values that link to each other, not as files",
      "Nothing to index and nothing to keep in sync: the structure is the code, not a copy built from it",
      "The agent asks for exactly what it needs: one function, its signature, what it uses, what uses it",
      "It gets a short, exact answer, not pages of search results to read through",
      "Less reading means fewer tokens, and more of the context left for the actual task",
      "Work is saved to a branch as it goes, so a new session picks up from there, not from zero",
      "You can see the same answers in the command line and the workbench",
    ],
  },
  {
    id: "impact",
    eyebrow: "Impact",
    accent: "blue-lbg",
    title: (
      <>
        Know the <span className="text-blue-lbg">blast radius</span> before you
        change shared code
      </>
    ),
    problem:
      "Change one function and something three modules away stops working, and nothing tells you until it runs.",
    points: [
      "Before you edit, you're one command away from every function that uses the one you're about to change",
      "When you update a function, code that follows it moves to the new version",
      "Darklang rechecks that code for type errors",
      "The change report shows what you edited, what updated because of it, and what stayed on an older version",
    ],
  },
  {
    id: "versions",
    eyebrow: "Versions",
    accent: "rust",
    title: (
      <>
        Change shared code
        <br />
        <span className="text-rust">without forcing every caller to move</span>
      </>
    ),
    problem:
      "When you update shared code, everything that uses it has to update at the same time.",
    points: [
      "Darklang keeps each version of your code",
      "Code that uses a function can follow its updates or stay on one version until you're ready",
      "This is part of the package manager and version control",
      "You can improve shared code while some callers stay on the version they use now",
    ],
  },
  {
    id: "packages",
    eyebrow: "Packages",
    accent: "acc-teal",
    title: (
      <>
        Packages that{" "}
        <span className="text-acc-teal">can't change under you</span>
      </>
    ),
    problem:
      "Agents add dependencies faster than anyone checks them. They guess at package names, pull in a new version that behaves differently, or write a helper that already exists. A lockfile pins a version string, not the code, and an install script runs before anyone has read it.",
    intro:
      "In Darklang, every function, type, and value is identified by its content, and packages live in the same store as your code:",
    points: [
      "Content-addressed: each definition is known by a hash of its code, so a reference always means exactly that code, and a new version is a new hash next to the old one",
      "Nothing to install: use a function by naming it, with no manifest, no lockfile, and no install script",
      "Names are just labels: renaming a package function changes its name, not its hash, so nothing that uses it breaks",
      "Read before you use: an agent can open a function's code and signature before calling it",
      "See what it needs: every package function lists what it reaches outside itself, such as files, HTTP, databases, or environment variables, worked out from its code, and a new version that needs more stands out",
      "Find what already exists: search by name, or find every value of a given type, so the agent reuses code instead of writing it again",
      "Publish by pushing: push your commits and they show up on a public page anyone can browse, pull from, or review first",
    ],
    links: [
      { label: "Browse packages", to: "/packages" },
      { label: "How the package manager works", to: "/package-manager" },
    ],
  },
  {
    id: "branches",
    eyebrow: "Branches",
    accent: "purple-lbg",
    title: (
      <>
        Run agents in parallel{" "}
        <span className="text-purple-lbg">
          without worktrees or merge chaos
        </span>
      </>
    ),
    problem:
      "Running agents in parallel today demands git worktrees: a separate checkout of every file for each agent, each needing its own dependency install, its own build, copied env files, and a port nobody else is using. The agents still change the same files on different branches, and you untangle the merge at the end.",
    points: [
      "Each agent gets its own branch, so unfinished work stays separate",
      "Branches share the stored code, so a new branch is not another copy of your project",
      "Review, edit, and run code on any branch concurrently, with no overhead and no switching: every command can name the branch it targets, and each branch keeps its own unfinished work, so there is never anything to stash or commit first",
      "Nothing to set up per agent: Darklang is one binary, with no build step and no dependency install",
      "Merges never block: when two agents change the same function, conflict resolution is structured and consistent. Darklang keeps the newer version by a fixed rule, records the other, and you can compare both later and pick the other one",
      "Version control tracks each function, type, and value on its own, so overlap shows up per function, not per file",
    ],
  },
  {
    id: "tracing",
    eyebrow: "Tracing",
    accent: "acc-amber",
    title: (
      <>
        See <span className="text-acc-amber">what happened</span> when the code
        ran
      </>
    ),
    problem:
      "A request fails or returns the wrong result. The agent needs to understand what happened inside the execution.",
    points: [
      "Every run of Dark code is recorded, from a one-off eval to a live HTTP request: the inputs, each function call, what it returned, and where it failed",
      "Diagnose a wrong result from its trace: open the request that came in, see exactly what it carried, and follow it call by call to the point where it went wrong",
      "Replay a recorded run against the current code to check that a fix actually fixed it, without reproducing the failure by hand",
      "Give an agent access to the same execution evidence to investigate a failure",
      "Turn a trace into a test, so the input that broke once is checked every time",
      "Reference the trace in an issue so the evidence stays with the problem",
    ],
  },
  {
    id: "access",
    eyebrow: "Access",
    accent: "acc-pink",
    title: (
      <>
        Give code <span className="text-acc-pink">only the access</span> it
        needs
      </>
    ),
    problem:
      "In most languages, code gets whatever access the process has: a package that needs one file can read every file, and one that needs one API can reach any server. The few runtimes with a permission model grant it to the whole process, so every dependency gets what the app was allowed. That is a large part of what makes supply chain attacks work: a package you depend on gets malicious code added, and it runs with everything you have. Agents add dependencies faster than anyone checks them.",
    intro:
      "Darklang gives you granular control over what code is allowed to do on your system:",
    points: [
      "Darklang checks permissions whenever code reaches outside itself",
      "Everything is denied by default: rules allow specific files or web addresses, and anything not allowed is refused, unless you configure the instance more loosely",
      "A third-party package can do nothing outside itself until you approve it",
      "Before you approve a package, you can see the list of what it wants to reach, and that list is a request you can turn down, not access it already has",
      "Your approval covers one exact version, so a changed package is not approved until you review it",
      "There is no install step and no install script to run",
      "You stay on the version you reviewed, and moving to a newer one is your choice",
    ],
  },
  {
    id: "cleanup",
    eyebrow: "Cleanup",
    accent: "rust",
    title: (
      <>
        Don't let working code leave{" "}
        <span className="text-rust">a mess behind</span>
      </>
    ),
    problem:
      "The new code works, but the agent leaves a mess behind: unused helpers, copied logic, old code paths, old tests, old callers, TODOs, and comments that are no longer true. The next task gets harder.",
    intro:
      "At commit time, Darklang looks at the whole change at once and reports what you changed, what followed, and what stayed on an older version. Before the commit lands, you can answer:",
    points: [
      "Did the agent change only what the plan asked for?",
      "Did it leave unused or copied code behind?",
      "Are some callers on an older version on purpose?",
      "Do the tests and comments still match what the code does?",
      "Unrelated finds become their own issues, not TODOs (overlaps with discoveries)",
    ],
  },
  {
    id: "review",
    eyebrow: "Review",
    accent: "acc-pink",
    title: (
      <>
        Review the <span className="text-acc-pink">whole change</span>, not just
        the diff
      </>
    ),
    problem:
      "An agent can produce in minutes a change that takes you hours to review. Renames, moved code, and repetitive updates bury the edits that matter, and a text diff can't tell you which callers are affected or which are still on an older version.",
    intro:
      "Darklang tracks functions, types, values, and what depends on what, so review is organized around changes to code, not lines in files:",
    points: [
      "Renames stay small: a name is separate from the code's identity, so renaming or moving a function doesn't rewrite its callers, and you review one rename instead of lines added and removed across every file that used it",
      "Direct edits are separate from what followed: see what the agent changed and which dependencies updated because of it",
      "The impact is visible: inspect the callers that were affected and the ones still on an older version",
      "You review the final version: repeated edits to the same function collapse into one change when committed",
      "Problems are structured and raised to you, not buried in the diff: type errors, outdated usages, and unresolved merge conflicts each come as a list you can act on",
      "The evidence is attached: the tests and traces used to check the result",
      "Unrelated work stays out: commit selected definitions together with just the dependencies they need",
      "Review at the level that matters: the report separates the changes that set direction, such as new types, changed signatures, and edits high in the dependency graph, from the mechanical ones that followed, so a reviewer can go deep on a few and trust the rest",
      "Intent comes first: the review opens with what the change is for, grouped by purpose, before any code",
      "Permissions are part of the review: each change shows any new access it asks for",
      "Undo one idea: revert a change and everything that followed from it, and keep the rest of the branch",
      "Hand comments to an agent: it prepares clear fixes on their own branch for you to take or drop, and asks you when it needs a decision",
      "Merge what's ready: parts of a change that don't depend on the rest can go out now while the main change waits",
    ],
  },
  {
    id: "sync",
    eyebrow: "Sync",
    accent: "acc-teal",
    title: (
      <>
        Bring changes <span className="text-acc-teal">together</span>
      </>
    ),
    problem:
      "You and your agents work in separate instances. Changes need to move between them without copying code by hand or losing track of conflicts.",
    points: [
      "Push and pull changes seamlessly between your machines, and between you and your agents, through a shared server",
      "Stage incoming changes for review before applying them",
      "Inspect conflicts and decide what to keep",
    ],
  },
  {
    id: "deployment",
    eyebrow: "Deployment",
    accent: "blue-lbg",
    title: (
      <>
        Take working code <span className="text-blue-lbg">live</span>
      </>
    ),
    problem:
      "The code works in development. Getting it in front of users means another workflow to learn, and getting a bad change back out means a redeploy under pressure.",
    points: [
      "No build and no deploy step: the code that ran in development is the code that runs live",
      "In development, a change is live the moment you save it. For users, nothing changes until you choose which version is live",
      "Check it the same way you checked it before: run the tests and read the traces of real requests on the live instance",
      "Rolling back means choosing the previous version, which is still there",
      "Run it on your machine, on a host you control, or on Darklang Cloud",
    ],
  },
];

/** A bullet with the label before the colon in a heavier weight. Bullets
    without a colon (the cleanup questions) render whole. */
const Point: React.FC<{ text: string }> = ({ text }) => {
  const i = text.indexOf(": ");
  if (i === -1) return <li>{text}</li>;
  return (
    <li>
      <span className="font-semibold text-gray-900">{text.slice(0, i)}: </span>
      {text.slice(i + 2)}
    </li>
  );
};

/** The example beside each section, keyed by section id. */
const VISUALS: Record<string, React.ReactNode> = {
  "shorter-path": <V.ShorterPath />,
  backend: <V.Backend />,
  discoveries: <V.Discoveries />,
  answers: <V.Answers />,
  impact: <V.Impact />,
  versions: <V.Versions />,
  packages: <V.Packages />,
  branches: <V.Branches />,
  tracing: <V.Tracing />,
  access: <V.Access />,
  cleanup: <V.Cleanup />,
  review: <V.Review />,
  sync: <V.Sync />,
  deployment: <V.Deployment />,
};

/**
 * Copy on one side and the example on the other, alternating down the page
 * as the live homepage does.
 */
const Features: React.FC = () => (
  <>
    {SECTIONS.map((section, i) => (
      <Shell key={section.id} id={section.id}>
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 ${
            i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            <SectionTitle
              subtitle={section.eyebrow}
              subtitleColor={ACCENT[section.accent].text}
            >
              {section.title}
            </SectionTitle>

            <div className="space-y-6 text-lg leading-relaxed text-gray-700 md:text-xl">
              <p>{section.problem}</p>
              {section.intro && <p>{section.intro}</p>}
              <ul
                className={`list-disc space-y-2 pl-6 ${ACCENT[section.accent].marker}`}
              >
                {section.points.map(point => (
                  <Point key={point} text={point} />
                ))}
              </ul>
              {section.links && (
                <p className="flex flex-wrap gap-x-6 gap-y-2 text-base">
                  {section.links.map(l => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className={`font-semibold underline-offset-4 hover:underline ${ACCENT[section.accent].text}`}
                    >
                      {l.label} →
                    </Link>
                  ))}
                </p>
              )}
            </div>
          </div>

          <div className="min-w-0">{VISUALS[section.id]}</div>
        </div>
      </Shell>
    ))}
  </>
);

export default Features;
