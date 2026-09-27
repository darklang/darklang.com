import React from "react";
import { Link } from "react-router-dom";

import { Body, C, H2, Icon, Shell } from "./parts";
import { TONES } from "./tones";

const tone = TONES.purple;
const accent = TONES.blue;

/**
 * The answer half of the page.
 *
 * Each pillar states what Darklang is, then names which of the reported
 * problems above stop being possible as a result. The order mirrors the
 * problems: collisions first, then review, then verification, then blast
 * radius, then the supply chain.
 */
const PILLARS: {
  kicker: string;
  h: string;
  paras: React.ReactNode[];
  answers: string[];
  icon: React.ReactNode;
  to?: { href: string; label: string };
}[] = [
  {
    kicker: "The program",
    h: "A Program Is Definitions, Not Files",
    icon: (
      <>
        <rect x="3" y="4" width="7" height="7" rx="1.5" />
        <rect x="14" y="4" width="7" height="7" rx="1.5" />
        <rect x="3" y="15" width="7" height="5" rx="1.5" />
        <rect x="14" y="15" width="7" height="5" rx="1.5" />
      </>
    ),
    paras: [
      "A Darklang program isn't a folder of files. It's structured data: functions, types, and values, each tracked as its own item. Source control versions those items, records exactly which ones changed, and detects conflicts by content rather than text position.",
      "Two agents working on two definitions are not editing the same file, so there is nothing to half-overwrite and no hunk to merge wrong. Every definition is content-addressed, so renaming a local variable doesn't change what a function means, doesn't change its identity, and never shows up as a wall of meaningless diff.",
    ],
    answers: [
      "diffs neither of them really made",
      "they start stepping on each other's files",
      "Merge conflicts everywhere.",
    ],
    to: { href: "/source-control", label: "Source control" },
  },
  {
    kicker: "Branches",
    h: "A Branch per Agent, and No Second Copy of Anything",
    icon: (
      <>
        <line x1="6" y1="3" x2="6" y2="15" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 0 1-9 9" />
      </>
    ),
    paras: [
      "Give a coding agent its own branch. Everything it does is attributed and contained there, and its ops are staged for approval one at a time before they land. Branches form a tree: a branch sees its own work plus everything committed beneath it, down to main, and in-progress work belongs to the branch it was written on.",
      "There is no staging area, no stash, and no working tree to keep clean, so there is no second checkout to provision and nothing to install before an agent can start. A branch begins from the branch you are on, including the work you just did, not from whatever origin/main happened to be.",
    ],
    answers: [
      "worktrees fix the git side but not the runtime",
      "cwd drift",
      'Changes "leak" to unintended branches (including main)',
      "It had branched from origin/main, not my local HEAD.",
    ],
  },
  {
    kicker: "Review",
    h: "Every Change Arrives With Its Own Impact Report",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M16 16l5 5" />
      </>
    ),
    paras: [
      <>
        <C tone={accent}>dark status</C> says what is in the draft.{" "}
        <C tone={accent}>dark commits</C> lists the commits newest first, by
        definition name rather than by hunks of a file. A commit reads like a
        changelog because it is one.
      </>,
      <>
        Because source control sees the dependency graph,{" "}
        <C tone={accent}>dark deps</C> shows both what a changed definition
        depends on and everything that depends on it. You can read what an agent
        did at the level of what it means, instead of reading every diff line by
        line to find out.
      </>,
    ],
    answers: [
      "reading every diff line by line defeats the point of running an agent in the first place",
      "I have no idea what the other session just changed",
      "nobody really understands why it works",
    ],
  },
  {
    kicker: "Traces",
    h: "Run It Now, and See What Actually Happened",
    icon: <path d="M3 12h4l3 7 4-14 3 7h4" />,
    paras: [
      <>
        <C tone={accent}>dark eval</C> runs the definition that just changed
        against a real input, with no project bootstrap and no separate build
        standing between a question and an answer.
      </>,
      "Traces show the execution: nested calls, values, timing, and errors. An agent checking its own work reads what happened rather than arguing from log lines, and the person reviewing it reads the same trace.",
    ],
    answers: [
      "convince itself that something works when it doesn't",
      "find the easiest way to make them green",
    ],
    to: { href: "/traceDriven", label: "Trace-driven development" },
  },
  {
    kicker: "Effects and permissions",
    h: "Boundaries the Runtime Enforces, Denied by Default",
    icon: (
      <>
        <path d="M12 3l7 3v6c0 4.2-2.9 7.7-7 9-4.1-1.3-7-4.8-7-9V6l7-3z" />
        <path d="M9.5 12.2l1.8 1.8 3.4-3.6" />
      </>
    ),
    paras: [
      "Network requests, file access, subprocesses, datastore operations, and model calls are effects the runtime decides on, one operation at a time. Access starts denied. Four layers narrow it from there, and effective access is their intersection: what the machine permits, what this invocation grants, what you approved for each third-party package, and the ceiling the author declared in the source.",
      <>
        Rules are exact.{" "}
        <C tone={accent}>
          dark permissions allow http GET https://api.example.com/v1
        </C>{" "}
        grants that and nothing else, and{" "}
        <C tone={accent}>dark permissions requirements</C> shows what a function
        needs before you run it. Child access is never wider than parent access,
        so nothing widens its own reach by calling something else.
      </>,
    ],
    answers: [
      "Telling an agent not to do something destructive isn't the same as technically preventing it",
      "Filesystem access is often way broader than it needs to be",
      "No confirmation prompt.",
    ],
    to: { href: "/backends", label: "Capabilities in the runtime" },
  },
  {
    kicker: "Packages",
    h: "Dependencies You Cannot Install by Accident",
    icon: (
      <>
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
        <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
      </>
    ),
    paras: [
      "When your code uses a package function, it refers to one specific, immutable version. Those references are the program's dependencies, so there is no manifest to edit, no installation step, and no install script to execute. A name either resolves to a definition that exists or it does not.",
      "A package's published requirements are a request, not an approval. Approval is a separate decision a person makes, recorded against the immutable hash of the exact code being approved, so an update does not inherit the trust given to the version before it.",
    ],
    answers: [
      "Agent autonomously runs npx/npm/pip",
      "Dependency confusion",
      "They still make up APIs and dependencies",
    ],
    to: { href: "/package-manager", label: "Package manager" },
  },
];

const Foundation: React.FC = () => (
  <>
    <Shell id="foundation">
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <p
          className={`mb-4 text-sm 2xl:text-base font-bold uppercase tracking-[0.12em] ${tone.text}`}
        >
          What Darklang does
        </p>
        <H2 className="mb-6 !text-3xl md:!text-4xl 2xl:!text-5xl">
          A Language and a Platform Built for{" "}
          <span className={accent.text}>This Way of Working</span>
        </H2>
        <Body className="mx-auto max-w-3xl">
          Most of the problems above are not agent problems. They are problems
          with handing a stack designed for one careful human to something fast,
          parallel, and literal-minded. Darklang is one system: language,
          package manager, source control, runtime, and permissions share a
          single model of the program.
        </Body>
      </div>

      <div className="space-y-16">
        {PILLARS.map((pillar, i) => (
          <div
            key={pillar.h}
            className="grid gap-8 border-t border-gray-200 pt-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tone.soft} ${tone.text}`}
                >
                  <Icon className="h-5 w-5">{pillar.icon}</Icon>
                </span>
                <span className="font-code text-xs 2xl:text-sm text-gray-light">
                  {String(i + 1).padStart(2, "0")} · {pillar.kicker}
                </span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl 2xl:text-3xl">
                {pillar.h}
              </h3>
              {pillar.to && (
                <Link
                  to={pillar.to.href}
                  className={`mt-4 inline-flex items-center gap-1.5 text-sm 2xl:text-base font-semibold ${accent.text} hover:underline`}
                >
                  {pillar.to.label}
                  <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>

            <div>
              <div className="space-y-4">
                {pillar.paras.map((para, j) => (
                  <Body key={j}>{para}</Body>
                ))}
              </div>

              {/* the quotes from further up, named as the thing this removes */}
              <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
                <p className="mb-3 text-xs 2xl:text-sm font-bold uppercase tracking-[0.1em] text-gray-light">
                  Stops being possible
                </p>
                <ul className="space-y-2">
                  {pillar.answers.map(answer => (
                    <li
                      key={answer}
                      className="flex gap-2.5 text-sm 2xl:text-base leading-relaxed text-gray-600"
                    >
                      <span
                        className={`mt-2 h-1 w-1 shrink-0 rounded-full ${tone.rule}`}
                        aria-hidden="true"
                      />
                      “{answer}”
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Shell>

    {/* ===================== HOW AN AGENT REACHES IT ===================== */}
    <Shell className="bg-gray-50">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p
            className={`mb-4 text-sm 2xl:text-base font-bold uppercase tracking-[0.12em] ${accent.text}`}
          >
            Bring your own agent
          </p>
          <H2 className="mb-4">Your Agent Reaches It the Same Way You Do</H2>
          <Body className="mb-4">
            Claude Code, Codex, and any other agent that can call command-line
            or MCP tools works with Darklang today. Through those tools an agent
            can search the packages, read signatures, follow dependencies and
            dependents, change a definition, run it, and read the trace.
          </Body>
          <Body>
            It doesn't have to rebuild a picture of the project from folders,
            guessed symbols, and build scripts first. The structure is already
            there, and so are the boundaries around it.
          </Body>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/getting-started"
              className="inline-block rounded-full bg-purple-lbg px-6 py-3 font-semibold text-white transition hover:bg-purple-dbg"
            >
              Install Darklang
            </Link>
            <Link
              to="/ai"
              className="inline-block rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:border-gray-400"
            >
              Darklang and AI
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
          <p className="mb-4 text-xs 2xl:text-sm font-bold uppercase tracking-[0.1em] text-gray-light">
            What an agent can ask for
          </p>
          <ul className="space-y-2.5 font-code text-sm 2xl:text-base text-gray-700">
            {[
              'dark search "checkout" --fn',
              "dark deps Shop.checkout",
              "dark eval 'Shop.checkout(cart)'",
              "dark traces view <id>",
              "dark permissions requirements Shop.checkout",
              "dark status",
              "dark commits",
            ].map(line => (
              <li key={line} className="flex gap-3">
                <span className={accent.text} aria-hidden="true">
                  $
                </span>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Shell>
  </>
);

export default Foundation;
