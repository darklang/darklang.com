import React from "react";
import { Link } from "react-router-dom";

import CodeDisplay from "../../common/ui/CodeDisplay";
import {
  AnyAgentIcon,
  ClaudeIcon,
  DeepSeekIcon,
  OllamaIcon,
  OpenAIIcon,
} from "../../common/ui/Icons";

/* ------------------------------------------------------------------ */
/* Reusable pieces                                                     */
/* ------------------------------------------------------------------ */

const Shell: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}> = ({ children, className = "", id }) => (
  <section id={id} className={className}>
    <div className="mx-auto max-w-7xl 2xl:max-w-[100rem] px-4 py-16 md:py-20">
      {children}
    </div>
  </section>
);

/** Page accent: blue leads the coding-agent story, purple the build-AI one. */
const Eyebrow: React.FC<{
  children: React.ReactNode;
  tone?: "blue" | "purple";
}> = ({ children, tone = "blue" }) => (
  <p
    className={`mb-4 text-sm 2xl:text-base font-bold uppercase tracking-[0.12em] ${
      tone === "blue" ? "text-blue-lbg" : "text-purple-dbg"
    }`}
  >
    {children}
  </p>
);

const H2: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <h2
    className={`text-2xl font-bold tracking-tight text-gray-900 md:text-3xl 2xl:text-4xl ${className}`}
  >
    {children}
  </h2>
);

const Body: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <p
    className={`text-base md:text-lg 2xl:text-xl leading-relaxed text-gray-700 ${className}`}
  >
    {children}
  </p>
);

/**
 * The commands a step runs, as chips that flow along a row. Stacked lines cost
 * a card a lot of height for what is usually two or three short words.
 */
const Cmds: React.FC<{
  items: { text: string; kind?: "cmd" | "confirm" }[];
}> = ({ items }) => (
  <div className="flex flex-wrap gap-1.5">
    {items.map(item => (
      <span
        key={item.text}
        className={`inline-flex max-w-full items-center gap-1.5 overflow-x-auto rounded-md px-2 py-1 font-code text-[0.7rem] 2xl:text-xs ${
          item.kind === "confirm" ? "bg-sand/15" : "bg-gray-50"
        }`}
      >
        <span
          className={`select-none ${
            item.kind === "confirm" ? "text-acc-amber" : "text-blue-lbg"
          }`}
          aria-hidden="true"
        >
          {item.kind === "confirm" ? "?" : "$"}
        </span>
        <span className="whitespace-nowrap text-gray-700">{item.text}</span>
      </span>
    ))}
  </div>
);

const Icon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

/* ------------------------------------------------------------------ */
/* Agents on one program                                               */
/* ------------------------------------------------------------------ */

/** A line of the definition in flight: how wide, how deep, and if it changed. */
type SkeletonLine = { w: string; indent?: 0 | 1 | 2; changed?: boolean };

/**
 * Three agents on one program. They reach it through the same CLI and MCP
 * tools, and each one holds as many branches as it has tasks, so neither the
 * agents nor their separate pieces of work run into each other.
 */
const AGENTS: {
  id: string;
  name: string;
  /** One mark for a named agent, several for the slot standing in for the
      rest. Each carries its own colour, worn only while it is selected. */
  marks: { Icon: React.FC<{ className?: string }>; brand: string }[];
  branches: {
    name: string;
    /** Sessions that may look at a branch but not write to it. */
    readOnly?: boolean;
    lines: SkeletonLine[];
    status: string;
  }[];
}[] = [
  {
    id: "claude",
    name: "Claude Code",
    marks: [{ Icon: ClaudeIcon, brand: "text-[#d97757]" }],
    branches: [
      {
        name: "checkout-fix",
        lines: [
          { w: "w-4/5" },
          { w: "w-3/5", indent: 1, changed: true },
          { w: "w-2/5", indent: 2, changed: true },
          { w: "w-1/2", indent: 1 },
          { w: "w-2/3" },
        ],
        status: "1 definition changed",
      },
      {
        name: "refund-window",
        lines: [
          { w: "w-2/3" },
          { w: "w-4/5", indent: 1, changed: true },
          { w: "w-1/2", indent: 1 },
          { w: "w-3/5", indent: 2, changed: true },
          { w: "w-3/4" },
        ],
        status: "2 definitions changed",
      },
      {
        name: "stock-alerts",
        lines: [
          { w: "w-3/4" },
          { w: "w-1/2", indent: 1 },
          { w: "w-4/5", indent: 1, changed: true },
          { w: "w-2/5", indent: 2 },
          { w: "w-3/5" },
        ],
        status: "1 definition, 1 type",
      },
    ],
  },
  {
    id: "codex",
    name: "Codex",
    marks: [{ Icon: OpenAIIcon, brand: "text-gray-900" }],
    branches: [
      {
        name: "cart-discounts",
        lines: [
          { w: "w-3/5" },
          { w: "w-4/5", indent: 1 },
          { w: "w-2/3", indent: 1, changed: true },
          { w: "w-1/2", indent: 2 },
          { w: "w-3/4" },
        ],
        status: "1 type, 3 callers",
      },
      {
        name: "orders-paging",
        lines: [
          { w: "w-4/5" },
          { w: "w-1/2", indent: 1, changed: true },
          { w: "w-3/5", indent: 1 },
          { w: "w-2/3", indent: 2, changed: true },
          { w: "w-1/2" },
        ],
        status: "2 definitions changed",
      },
    ],
  },
  {
    id: "any",
    name: "Any agent",
    marks: [
      { Icon: DeepSeekIcon, brand: "text-[#4d6bfe]" },
      { Icon: OllamaIcon, brand: "text-gray-900" },
      { Icon: AnyAgentIcon, brand: "text-blue-lbg" },
    ],
    branches: [
      {
        name: "main",
        readOnly: true,
        lines: [
          { w: "w-3/4" },
          { w: "w-1/2", indent: 1 },
          { w: "w-4/5", indent: 1 },
          { w: "w-2/5", indent: 2 },
          { w: "w-3/5" },
        ],
        status: "nothing changed",
      },
      {
        name: "orders-tests",
        lines: [
          { w: "w-2/3" },
          { w: "w-3/4", indent: 1, changed: true },
          { w: "w-1/2", indent: 2 },
          { w: "w-4/5", indent: 1, changed: true },
          { w: "w-3/5" },
        ],
        status: "4 definitions added",
      },
    ],
  },
];

const INDENT = ["ml-0", "ml-3", "ml-6"];

/**
 * The lines between the agents and Darklang's tools. Each one drops straight
 * onto the bar below and picks up again beneath it, so nothing has to cross or
 * gather: the bar itself is what they all pass through.
 */
const Wires: React.FC<{ activeIndex: number }> = ({ activeIndex }) => (
  <svg
    viewBox="0 0 300 20"
    preserveAspectRatio="none"
    className="h-5 w-full"
    aria-hidden="true"
  >
    {[50, 150, 250].map((x, i) => {
      const on = i === activeIndex;
      return (
        <path
          key={x}
          d={`M${x} 0 V20`}
          fill="none"
          stroke="currentColor"
          strokeWidth={on ? 2 : 1.25}
          strokeDasharray={on ? "4 4" : undefined}
          vectorEffect="non-scaling-stroke"
          className={`animate-dash-drift ${
            on ? "text-blue-lbg" : "text-blue-lbg/35"
          }`}
        />
      );
    })}
  </svg>
);

/** The branch glyph shown beside a branch name. */
const BranchIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <line x1="6" y1="3" x2="6" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>
);

/**
 * One agent's current branch, drawn as a code block. Every column is live at
 * once, because the agents work in parallel; the selected one is only ringed,
 * to mark which branch a click will move on from.
 */
const BranchStack: React.FC<{
  agent: (typeof AGENTS)[number];
  branchIndex: number;
  active: boolean;
  /** Staggers this column's pulse so the three do not breathe in step. */
  offset: number;
  onClick: () => void;
}> = ({ agent, branchIndex, active, offset, onClick }) => {
  const branch = agent.branches[branchIndex];

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={
        active
          ? `${agent.name}: bring forward the next of ${agent.branches.length} branches`
          : `Show ${agent.name}`
      }
      className="block w-full text-left"
    >
      <div className="mb-2 flex items-center justify-center gap-1.5 text-blue-lbg">
        <BranchIcon className="h-3 w-3 shrink-0" />
        <span className="truncate font-code text-[0.7rem] 2xl:text-xs">
          {branch.name}
        </span>
      </div>

      {/* the current branch, as a code block: line numbers, indents, and no
          source, because what it says matters less than that it moved */}
      <div
        className={`overflow-hidden rounded-lg bg-dark-black px-2 py-2.5 transition ${
          active ? "ring-2 ring-blue-lbg/50" : ""
        }`}
      >
        {branch.lines.map((line, i) => (
          <div key={i} className="flex items-center gap-2 py-[3px]">
            <span className="w-2 shrink-0 text-right font-code text-[0.6rem] leading-none text-gray-600">
              {i + 1}
            </span>
            <span
              style={{ animationDelay: `${offset + i * 140}ms` }}
              className={`h-1.5 rounded-full ${line.w} ${
                INDENT[line.indent ?? 0]
              } ${
                line.changed ? "animate-pulse bg-blue-lbg/70" : "bg-white/15"
              }`}
            />
          </div>
        ))}
      </div>

      {/* read-only rides along with the status rather than sitting in its own
          chip, which had nowhere to go once the columns narrowed */}
      <div className="mt-3 text-center text-[0.7rem] 2xl:text-xs text-gray-500">
        {branch.readOnly && <span className="text-gray-400">read-only · </span>}
        {branch.status}
      </div>
    </button>
  );
};

/**
 * The hero picture: bring any agent, reach the program through the same tools,
 * and let each one keep its tasks on branches of their own.
 */
const AgentBridge: React.FC = () => {
  const [active, setActive] = React.useState(0);
  const [shown, setShown] = React.useState(AGENTS.map(() => 0));

  /** Clicking another agent selects it; clicking the selected one brings the
      next of its branches to the front of the stack. */
  const pick = (i: number) => {
    if (i !== active) {
      setActive(i);
      return;
    }
    setShown(prev =>
      prev.map((v, j) => (j === i ? (v + 1) % AGENTS[i].branches.length : v)),
    );
  };

  return (
    <div>
      {/* the agents you might bring */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {AGENTS.map((a, i) => (
          <button
            key={a.id}
            type="button"
            onClick={() => pick(i)}
            aria-pressed={i === active}
            className="group flex flex-col items-center gap-2 py-1"
          >
            <span className="flex items-center gap-1.5">
              {a.marks.map(({ Icon, brand }, m) => (
                <Icon
                  key={m}
                  className={`h-7 w-7 transition ${
                    a.marks.length > 1 ? "h-5 w-5" : ""
                  } ${brand} ${i === active ? "" : "opacity-70 group-hover:opacity-100"}`}
                />
              ))}
            </span>
            <span
              className={`text-xs 2xl:text-sm font-semibold transition ${
                i === active ? "text-gray-900" : "text-gray-500"
              }`}
            >
              {a.name}
            </span>
          </button>
        ))}
      </div>

      <Wires activeIndex={active} />

      {/* whichever agent it is, it arrives through the same two doors */}
      <div className="flex items-center justify-center gap-2.5 rounded-xl border border-blue-lbg/25 bg-blue-lbg/5 px-3 py-2.5">
        <img
          src="/assets/darklang-logo.png"
          alt="Darklang"
          className="h-5 w-auto"
        />
        <span className="h-5 w-px bg-blue-lbg/20" />
        {["CLI", "MCP"].map(tool => (
          <span
            key={tool}
            className="rounded-md bg-white px-2 py-0.5 font-code text-[0.7rem] 2xl:text-xs font-semibold text-blue-lbg shadow-sm"
          >
            {tool}
          </span>
        ))}
      </div>

      <Wires activeIndex={active} />

      {/* and holds as many branches as it has tasks */}
      <div className="grid grid-cols-3 items-start gap-2 sm:gap-3">
        {AGENTS.map((a, i) => (
          <BranchStack
            key={a.id}
            agent={a}
            branchIndex={shown[i]}
            active={i === active}
            offset={i * 320}
            onClick={() => pick(i)}
          />
        ))}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* The shorter loop                                                    */
/* ------------------------------------------------------------------ */

const LOOP = ["understand", "change", "run", "inspect", "verify"];

const LoopStrip: React.FC = () => (
  <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2.5">
    {LOOP.map((step, i) => (
      <React.Fragment key={step}>
        {i > 0 && (
          <span className="text-gray-light" aria-hidden="true">
            →
          </span>
        )}
        <span className="rounded-full bg-blue-lbg/10 px-3 py-1 font-code text-xs 2xl:text-sm text-blue-lbg">
          {step}
        </span>
      </React.Fragment>
    ))}
  </div>
);

/* ------------------------------------------------------------------ */
/* From request to evidence                                            */
/* ------------------------------------------------------------------ */

/**
 * The walk-through doubles as the capability list: each step carries the tools
 * it uses and its own colour, so the six read as six distinct things rather
 * than one point made six times.
 */
const WORKFLOW: {
  tone: string;
  icon: React.ReactNode;
  kicker: string;
  h: string;
  p: React.ReactNode;
  cmds?: { text: string; kind?: "cmd" | "confirm" }[];
}[] = [
  {
    tone: "bg-blue-lbg/10 text-blue-lbg",
    icon: (
      <Icon>
        <path d="M4 5h6M4 12h10M4 19h7" />
        <circle cx="18" cy="17" r="3" />
      </Icon>
    ),
    kicker: "tree / search / view",
    h: "Find the Relevant Code",
    p: "The agent searches the package tree and reads complete definitions, signatures, documentation, and exact dependencies. It asks Darklang what exists instead of scraping a repository and inferring the answer from text.",
    cmds: [
      { text: "dark tree Shop" },
      { text: "dark view Shop.checkout" },
      { text: "dark deps Shop.checkout" },
    ],
  },
  {
    tone: "bg-rose/15 text-acc-pink",
    icon: (
      <Icon>
        <line x1="6" y1="3" x2="6" y2="15" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 01-9 9" />
      </Icon>
    ),
    kicker: "branch / commit",
    h: "Work in Isolation",
    p: (
      <>
        Each task gets its own{" "}
        <Link className="underline decoration-gray-300" to="/source-control">
          branch
        </Link>
        . In-progress changes stay there, separate from main and from another
        agent's work, and attributed until a person decides to merge them.
      </>
    ),
    cmds: [{ text: "dark branch create checkout-fix" }],
  },
  {
    tone: "bg-purple-lbg/10 text-purple-dbg",
    icon: (
      <Icon>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </Icon>
    ),
    kicker: "fn / type / val",
    h: "Make a Focused Change",
    p: "The agent creates or replaces a function, type, or value as a named program item. The change stays focused on what the agent meant to edit instead of arriving as a broad text patch. Write access can require confirmation, while read-only tasks cannot change anything.",
    cmds: [
      {
        text: "Allow: update function Shop.checkout? [y/N]",
        kind: "confirm",
      },
    ],
  },
  {
    tone: "bg-olive/15 text-acc-green",
    icon: (
      <Icon>
        <path d="M6 4l12 8-12 8V4z" />
      </Icon>
    ),
    kicker: "eval / run",
    h: "Run the Affected Path",
    p: "The agent evaluates the function it changed with a representative input and reads the result immediately. No project bootstrap or separate compile pipeline stands between a question and an answer.",
    cmds: [{ text: "dark eval 'Shop.checkout(outOfStockCart)'" }],
  },
  {
    tone: "bg-mint/20 text-acc-teal",
    icon: (
      <Icon>
        <path d="M3 12h4l3 7 4-14 3 7h4" />
      </Icon>
    ),
    kicker: "traces",
    h: "Inspect What Actually Happened",
    p: (
      <>
        <Link className="underline decoration-gray-300" to="/traceDriven">
          Traces
        </Link>{" "}
        show the execution: nested calls, values, timing, and errors. An agent
        debugging a real run works from what happened instead of guessing from
        scattered log lines.
      </>
    ),
    cmds: [
      { text: "dark traces list --fn Shop.checkout" },
      { text: "dark traces view <id>" },
    ],
  },
  {
    tone: "bg-sand/25 text-acc-amber",
    icon: (
      <Icon>
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="12" cy="18" r="2.5" />
        <path d="M7.6 8L11 15.6M16.4 8L13 15.6" />
      </Icon>
    ),
    kicker: "deps / status",
    h: "Hand the Work Back",
    p: "Darklang reports the changed definitions and everything that depends on them, so the agent can explain what it changed, what it verified, and what the change might influence. Commit and merge remain separate decisions.",
    cmds: [{ text: "dark status" }, { text: "dark review" }],
  },
];

/* ------------------------------------------------------------------ */
/* Mindful vibe coding                                                 */
/* ------------------------------------------------------------------ */

/** A line icon on the same 24x24 grid as the rest of the page's icons. */
const LineIcon: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

/** The underline you would scribble under something worth remembering. */
const Squiggle: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 220 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    className={className}
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path d="M3 6.5c28-3.5 56-4.5 84-3.5s56 3.4 84 1.6" />
  </svg>
);

const LEGIBILITY: {
  h: string;
  tone: string;
  icon: React.ReactNode;
  p: React.ReactNode;
}[] = [
  {
    h: "See When It Reaches Outside",
    tone: "text-acc-amber",
    icon: (
      <>
        <path d="M19 13.5V19a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h5.5" />
        <path d="M14 4h6v6" />
        <path d="M20 4l-8.5 8.5" />
      </>
    ),
    p: "Network requests, file access, subprocesses, datastore operations, and model calls cross explicit capability boundaries. You can see when the program reaches beyond itself.",
  },
  {
    h: "Notice New Capabilities",
    tone: "text-acc-pink",
    icon: (
      <>
        <circle cx="8" cy="16" r="4" />
        <path d="M10.9 13.1L20 4" />
        <path d="M17 7l2.5 2.5" />
        <path d="M14.5 9.5L17 12" />
      </>
    ),
    p: "If a change requires access the program did not previously need, such as calling an API, reading a secret, writing to a datastore, or invoking a model, Darklang makes that new capability explicit.",
  },
  {
    h: "Set the Boundaries",
    tone: "text-blue-lbg",
    icon: (
      <>
        <path d="M4 6h16M4 12h16M4 18h16" />
        <circle cx="9" cy="6" r="2" />
        <circle cx="15" cy="12" r="2" />
        <circle cx="7.5" cy="18" r="2" />
      </>
    ),
    p: "Choose read-only access, confirm individual writes, or explicitly allow unattended work. Grant only the file, network, environment, datastore, subprocess, and model capabilities the task needs.",
  },
];

/* ------------------------------------------------------------------ */
/* Build AI in Darklang                                                */
/* ------------------------------------------------------------------ */

const AGENT_CODE = `module Research

val agent =
  Agent.create ()
  |> Agent.withSystemPrompt
       "Research carefully. Cite sources."
  |> Agent.withModel Models.Anthropic.sonnet46
  |> Agent.withWebSearch
  |> Agent.withWebFetchCitations
  |> Agent.withMaxTurns 3

let research (topic: String) =
  Agent.run agent $"Research: {topic}"`;

/* ------------------------------------------------------------------ */
/* Examples                                                            */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const TINT = "bg-gray-50";

const AI: React.FC = () => {
  const btn = "inline-block rounded-full px-6 py-3 font-semibold transition";
  const primary = `${btn} bg-blue-lbg text-white hover:bg-[#5f66a8]`;

  return (
    <div className="overflow-x-clip">
      {/* ===================== HERO ===================== */}
      <Shell>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
          <div>
            <Eyebrow>Darklang + AI</Eyebrow>
            <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-5xl 2xl:text-6xl">
              Bring Your Agent.
              <br />
              <span className="text-blue-lbg">Dark Brings the Context</span>
            </h1>
            <Body>
              Use your favorite coding agent with structured access to your
              whole Darklang program: its functions, types, dependencies,
              runtime, traces, and source control. Your agent can explore,
              change, run, and verify its work without piecing the project
              together from files and build scripts.
            </Body>
          </div>

          <div className="min-w-0">
            <AgentBridge />
          </div>
        </div>
      </Shell>

      {/* ===================== COMPATIBILITY ===================== */}
      <Shell className={TINT}>
        {/* a short bridge between the hero and the thesis: text only, on
            purpose. Anything visual here repeats one or the other. */}
        <div className="max-w-6xl">
          <H2 className="mb-4">Use Your Favorite Agents Today</H2>
          <Body className="mb-4">
            Claude Code, Codex, and other agents that can call command-line or
            MCP tools can work with Darklang today. We're also building a
            specialized Darklang agent for a deeper, native experience.
          </Body>
          <Body>
            Building AI products? Choose Anthropic, OpenAI, or a local model
            through Ollama. Switching providers is a configuration change, not a
            rewrite.
          </Body>
        </div>
      </Shell>

      {/* ===================== THESIS ===================== */}
      <Shell id="build-with">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>One integrated system</Eyebrow>
            <H2 className="mb-4">
              Give Agents a Working Environment, Not a Pile of Text
            </H2>
            <Body className="mb-4">
              Most coding agents begin by reconstructing the program. They
              search folders, open files, guess which symbols matter, assemble
              build commands, and interpret logs made for people.
            </Body>
            <Body>
              Darklang already knows the structure of the program. Its language,
              package manager, source control, runtime, and developer tools
              share one model of every definition and relationship. The CLI and
              MCP tools make that model available to an agent directly.
            </Body>
          </div>

          <div className="text-center lg:self-center">
            <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.11em] text-gray-light">
              The result is a shorter loop
            </p>
            <LoopStrip />
            <p className="mt-4 text-base 2xl:text-lg text-gray-600">
              Less context assembly. More useful work.
            </p>
          </div>
        </div>
      </Shell>

      {/* ===================== WORKFLOW ===================== */}
      <Shell id="workflow">
        <div className="mb-10 max-w-3xl">
          <Eyebrow>From request to evidence</Eyebrow>
          <H2 className="mb-4">Trusting the Result Is the Hard Part</H2>
          <Body>
            Giving an agent access is easy. Darklang gives it a tight,
            inspectable path from a request to an evidence-backed result.
          </Body>
        </div>

        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WORKFLOW.map(s => (
            <li
              key={s.h}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${s.tone}`}
                >
                  {s.icon}
                </span>
                <span className="font-code text-xs 2xl:text-sm text-gray-light">
                  {s.kicker}
                </span>
              </div>
              <h3 className="mb-1.5 font-bold text-gray-900 2xl:text-lg">
                {s.h}
              </h3>
              <p className="mb-4 leading-relaxed text-gray-600 2xl:text-lg">
                {s.p}
              </p>
              {s.cmds && <Cmds items={s.cmds} />}
            </li>
          ))}
        </ol>

        <p className="mt-8 border-l-2 border-blue-lbg/40 pl-4 text-base md:text-lg 2xl:text-xl leading-relaxed text-gray-600">
          One task. One branch. One result you can understand.
        </p>
      </Shell>

      {/* ===================== MINDFUL VIBE CODING ===================== */}
      <Shell id="safety">
        <div className="mx-auto max-w-6xl text-center">
          <Eyebrow>Mindful vibe coding</Eyebrow>
          <Body className="mb-8">
            Let the agent explore and create without losing sight of where it
            goes or what it can access.
          </Body>

          {/* the section's heading, in the hand you would write it in */}
          <h2 className="font-caveat text-3xl 2xl:text-4xl leading-snug text-blue-lbg">
            Boundaries live in the program, not in the prompt.
          </h2>
          <Squiggle className="mx-auto mt-1 h-2.5 w-80 max-w-full text-blue-lbg/40" />
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {LEGIBILITY.map(item => (
            <div key={item.h}>
              <LineIcon className={`mb-4 h-8 w-8 ${item.tone}`}>
                {item.icon}
              </LineIcon>
              <h3 className="mb-1.5 font-bold text-gray-900 2xl:text-lg">
                {item.h}
              </h3>
              <p className="leading-relaxed text-gray-600 2xl:text-lg">
                {item.p}
              </p>
            </div>
          ))}
        </div>
      </Shell>

      {/* ============ BUILD AI: the second story starts here, marked by
           the change of background and accent rather than a rule ============ */}
      <Shell id="build-ai">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <Eyebrow tone="purple">Build AI in Darklang</Eyebrow>
            <H2 className="mb-4">
              An Agent Loop Is a Library, Not an Architecture Diagram
            </H2>
            <Body className="mb-4">
              Darklang is not only an environment for coding agents. It is also
              a place to build them. Start with a prompt, choose a model, attach
              ordinary typed Darklang functions as tools, and run the loop in
              the same language as the rest of your application.
            </Body>
            <Body className="mb-6">
              Darklang handles messages, tool calls, results, retries, usage,
              and multi-turn execution. Your business logic remains normal
              application code that can be run, traced, and tested
              independently.
            </Body>
          </div>

          <div className="overflow-hidden rounded-2xl bg-dark-black shadow-2xl">
            <div className="flex items-center gap-1.5 bg-[#28282a] px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#4a4a4e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#4a4a4e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#4a4a4e]" />
              <span className="ml-2 font-code text-xs text-gray-500">
                research.dark
              </span>
            </div>
            <div className="hljs-dark overflow-x-auto px-5 py-4 text-sm text-gray-300">
              <CodeDisplay
                language="fsharp"
                showLineNumbers={false}
                code={AGENT_CODE}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-6xl">
          <h3 className="mb-3 text-xl 2xl:text-2xl font-bold tracking-tight text-gray-900">
            Typed Tools In. Inspectable Results Out.
          </h3>
          <Body className="mb-4">
            Connect a tool to an ordinary typed Darklang function and provide
            its name, description, and input schema. The selected model can call
            it, read the result, and continue within the limits you set.
          </Body>
          <Body>
            The final response, tool-call history, usage, citations, and errors
            return as values your program can inspect, store, and act on.
          </Body>
        </div>
      </Shell>

      {/* ===================== MCP ===================== */}
      <Shell>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10">
          <div className="max-w-6xl">
            <div>
              <Eyebrow tone="purple">Model Context Protocol</Eyebrow>
              <H2 className="mb-4">Turn Darklang Functions into Agent Tools</H2>
              <Body className="mb-6">
                Expose typed Darklang functions, resources, and prompts to any
                MCP-compatible client. They run as ordinary Darklang code, with
                explicit capabilities, direct execution, and runtime traces.
              </Body>

              {/* the protocol surface, named and left at that */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 font-code text-xs 2xl:text-sm text-purple-dbg">
                {["tools", "resources", "prompts", "progress", "logging"].map(
                  (name, i) => (
                    <React.Fragment key={name}>
                      {i > 0 && (
                        <span className="text-gray-300" aria-hidden="true">
                          ·
                        </span>
                      )}
                      <span>{name}</span>
                    </React.Fragment>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </Shell>

      {/* ===================== CLOSING ===================== */}
      <Shell className={TINT}>
        <div className="max-w-6xl">
          <H2 className="mb-4">
            Give Your Agent a Program It Can Actually Understand
          </H2>
          <Body className="mb-8">
            Bring the coding agent you already use, or build the AI product you
            have in mind. Darklang gives both a structured program, a live
            runtime, and clear boundaries for getting useful work done.
          </Body>

          <Link className={primary} to="/getting-started">
            Install Darklang
          </Link>
        </div>
      </Shell>
    </div>
  );
};

export default AI;
