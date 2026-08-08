import React from "react";
import { Link } from "react-router-dom";

import Terminal from "../../common/ui/Terminal";

/* ------------------------------------------------------------------ */
/* Reusable pieces                                                     */
/* ------------------------------------------------------------------ */

/**
 * A section label as a shell comment. `$ dark terminal views` looked pasteable
 * and wasn't, which spends the page's one signal for real commands on
 * decoration. A comment is real syntax and does nothing, so it keeps the
 * terminal voice without the false promise.
 */
const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mb-4 text-lg md:text-2xl font-medium text-purple-dbg">
    # {children}
  </p>
);

const Section: React.FC<{
  label: string;
  id?: string;
  children: React.ReactNode;
}> = ({ label, id, children }) => (
  <section
    id={id}
    className="mx-auto max-w-7xl 2xl:max-w-[100rem] px-6 py-16 md:py-20"
  >
    <Label>{label}</Label>
    {children}
  </section>
);

const H2: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <h2 className={`text-xl md:text-3xl 2xl:text-4xl font-bold ${className}`}>
    {children}
  </h2>
);

const Body: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <p
    className={`leading-relaxed text-gray-300 md:text-lg 2xl:text-xl ${className}`}
  >
    {children}
  </p>
);

/** An inline command or definition name. */
const C: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-sand">{children}</span>
);

const Glyph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

/** A bordered panel, the page's one container shape. */
const Panel: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div
    className={`rounded-xl border border-white/10 bg-dark-black p-6 ${className}`}
  >
    {children}
  </div>
);

const Card: React.FC<{
  h: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}> = ({ h, icon, children }) => (
  <Panel className="transition duration-200 hover:border-white/20">
    {icon && (
      <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-purple-dbg">
        {icon}
      </span>
    )}
    <h3 className="mb-2 font-bold text-white md:text-lg">{h}</h3>
    <p className="leading-relaxed text-gray-300 2xl:text-lg">{children}</p>
  </Panel>
);

/** The faint plotting grid the card visuals sit on. */
const GRID = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
  backgroundSize: "18px 18px",
};

/**
 * A card that shows the thing before describing it: a small piece of the
 * workbench on a plotting grid, then the claim underneath.
 */
const VisualCard: React.FC<{
  h: string;
  visual: React.ReactNode;
  children: React.ReactNode;
}> = ({ h, visual, children }) => (
  <div className="overflow-hidden rounded-xl border border-white/10 bg-dark-black transition duration-200 hover:border-white/20">
    <div
      className="flex h-44 items-center justify-center border-b border-white/10 px-5"
      style={GRID}
    >
      {visual}
    </div>

    <div className="p-6">
      <h3 className="mb-2 font-bold text-white md:text-lg">{h}</h3>
      <p className="leading-relaxed text-gray-300 2xl:text-lg">{children}</p>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Transcripts                                                         */
/* ------------------------------------------------------------------ */

type Line =
  | { kind: "cmd"; text: string }
  | { kind: "out"; text: string }
  | { kind: "dim"; text: string }
  | { kind: "gap" };

const cmd = (text: string): Line => ({ kind: "cmd", text });
const out = (text: string): Line => ({ kind: "out", text });
const dim = (text: string): Line => ({ kind: "dim", text });
const gap: Line = { kind: "gap" };

const Lines: React.FC<{ lines: Line[]; wrap?: boolean }> = ({
  lines,
  wrap = false,
}) => (
  <div className={`text-xs sm:text-sm ${wrap ? "" : "overflow-x-auto"}`}>
    {lines.map((line, i) => {
      if (line.kind === "gap") return <div key={i} className="h-4" />;
      if (line.kind === "cmd") {
        return (
          <div
            key={i}
            className={`${wrap ? "whitespace-pre-wrap break-words" : "whitespace-pre"} text-gray-200`}
          >
            <span className="text-olive">$</span> {line.text}
          </div>
        );
      }
      if (line.kind === "dim") {
        return (
          <div
            key={i}
            className={`${wrap ? "whitespace-pre-wrap break-words" : "whitespace-pre"} text-gray-500`}
          >
            {line.text}
          </div>
        );
      }
      return (
        <div key={i} className="whitespace-pre text-gray-300">
          {line.text}
        </div>
      );
    })}
  </div>
);

/** A session in one frame: several commands, each labelled by what it is for. */
const Session: React.FC<{
  steps: { label: string; lines: Line[] }[];
}> = ({ steps }) => (
  <div className="overflow-hidden rounded-2xl bg-dark-black">
    <div className="flex space-x-2 px-5 pt-5 pb-1">
      <span className="h-3 w-3 rounded-full bg-purple-dbg" />
      <span className="h-3 w-3 rounded-full bg-sand" />
      <span className="h-3 w-3 rounded-full bg-olive" />
    </div>

    {steps.map((step, i) => (
      <div
        key={step.label}
        className={`px-5 py-4 md:px-6 ${i ? "border-t border-white/10" : ""}`}
      >
        <div className="mb-2 text-xs uppercase tracking-[0.12em] text-purple-dbg">
          {step.label}
        </div>
        <Lines lines={step.lines} />
      </div>
    ))}
  </div>
);

const Term: React.FC<{ lines: Line[]; className?: string }> = ({
  lines,
  className = "",
}) => (
  <Terminal className={`min-w-0 overflow-hidden ${className}`}>
    <Lines lines={lines} />
  </Terminal>
);

/**
 * Captured from the CLI: one definition, found, read, and followed.
 *
 * One edit to what `view` prints: the return type is shortened from
 * `Stdlib.Result.Result<Stdlib.HttpClient.Response, Stdlib.HttpClient.RequestError>`,
 * which the CLI prints in full and which wraps across three lines here.
 */
const SEARCH_TERM: Line[] = [
  cmd("dark search httpclient"),
  out("Search results for: httpclient"),
  out("🗂️  Modules:"),
  out("Darklang.Stdlib.HttpClient"),
  out("Darklang.Stdlib.HttpClient.ContentType"),
  out("Darklang.Stdlib.HttpClient.Sse"),
  dim("  (add --with-docs to show doc comments)"),
];

const VIEW_TERM: Line[] = [
  cmd("dark view Darklang.Stdlib.HttpClient.get"),
  out("let get (uri: String) (headers: List<(String * String)>):"),
  out("  Result<HttpClient.Response, HttpClient.RequestError> ="),
  out('  Stdlib.HttpClient.request "GET" uri headers Stdlib.Blob.empty'),
  dim("capabilities: http-client"),
];

const DEPS_TERM: Line[] = [
  cmd("dark deps usedby Darklang.Stdlib.HttpClient.get"),
  out("Found 13 dependents of Darklang.Stdlib.HttpClient.get:"),
  out("  [fn] Darklang.GitHub.fetchString"),
  out("  [fn] Darklang.WIP.AI.Anthropic.Batch.listBatches"),
  out("  [fn] Darklang.WIP.AI.OpenAI.Chat.getMessages"),
  out("  [fn] Darklang.WIP.AI.OpenAI.Models.get"),
  dim("  …"),
];

const DOCS_TERM: Line[] = [
  cmd("dark docs"),
  out("Available documentation topics:"),
  out(""),
  out("  syntax (lang)       Language syntax reference"),
  out("  types               Type system overview"),
  out("  errors              Common errors and fixes"),
  out("  http-server (http)  HTTP server guide"),
  out("  packages            Package system"),
  out("  scm (git, vcs)      Version control for packages"),
  out("  stdlib (lib)        Live: Stdlib module overview"),
  out("  signatures (api)    Live: stdlib fns + signatures"),
  out("  for-ai (agent)      AI agent guide - start here"),
  out("  …"),
  gap,
  cmd("dark docs signatures Stdlib.HttpClient"),
];

const AUTOMATION_TERM: Line[] = [
  cmd("dark fn MyApp.Import.normalize - < normalize.dark"),
  gap,
  cmd("dark run scripts/import-products.dark catalog.json"),
  gap,
  cmd("dark traces follow --route /checkout --json \\"),
  cmd("    | jq '.result'"),
];

const INSTALL_TERM: Line[] = [
  cmd("curl -fsSL https://darklang.com/install | sh"),
  gap,
  cmd("dark version"),
  dim("# check what landed"),
  out("Darklang CLI alpha-a803bec (up to date)"),
  gap,
  cmd("dark"),
  dim("# opens the workbench"),
];

/* ------------------------------------------------------------------ */
/* The workbench, drawn rather than screenshotted                      */
/* ------------------------------------------------------------------ */

const TREE = [
  { label: "🗂️ ContentType", depth: 1 },
  { label: "🗂️ Sse", depth: 1 },
  { label: "🔖 BadHeader", depth: 1 },
  { label: "🔖 RequestError", depth: 1 },
  { label: "🔖 Response", depth: 1 },
  { label: "⚡️ get", depth: 1, active: true },
  { label: "⚡️ post", depth: 1 },
  { label: "⚡️ request", depth: 1 },
  { label: "⚡️ stream", depth: 1 },
];

const VIEWS = ["definition", "dependencies", "traces", "changes"];

/**
 * The workbench as the page's own drawing: a package tree, the definition
 * that's selected, the views around it, and the status line underneath.
 */
const Workbench: React.FC = () => (
  <div className="overflow-hidden rounded-xl border border-white/10 bg-dark-black">
    {/* location and branch, the two things the workbench always shows */}
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-white/10 px-4 py-2.5 text-xs sm:text-sm">
      <span className="text-purple-dbg">dark</span>
      <span className="text-gray-300">/Darklang.Stdlib.HttpClient</span>
      <span className="ml-auto flex items-center gap-3">
        <span className="text-sand">main</span>
        <span className="text-gray-500">no uncommitted changes</span>
      </span>
    </div>

    <div className="grid md:grid-cols-[14rem_1fr]">
      <div className="border-b border-white/10 py-3 md:border-b-0 md:border-r">
        {TREE.map(item => (
          <div
            key={item.label}
            className={`px-4 py-1 text-xs sm:text-sm ${
              item.active
                ? "border-l-2 border-purple-dbg bg-white/5 pl-3.5 text-white"
                : "text-gray-300"
            }`}
          >
            {item.label}
          </div>
        ))}
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap gap-x-5 gap-y-1 border-b border-white/10 px-4 py-2 text-xs sm:text-sm">
          {VIEWS.map((view, i) => (
            <span
              key={view}
              className={
                i === 0
                  ? "border-b-2 border-purple-dbg pb-1 text-white"
                  : "pb-1 text-gray-500"
              }
            >
              {view}
            </span>
          ))}
        </div>

        <div className="overflow-x-auto px-4 py-4 text-xs sm:text-sm">
          <div className="whitespace-pre text-gray-500">
            /// Make blocking HTTP call to uri
          </div>
          <div className="whitespace-pre text-gray-200">
            <span className="text-purple-dbg">let</span> get
          </div>
          <div className="whitespace-pre text-gray-200">
            {"  (uri: String)"}
          </div>
          <div className="whitespace-pre text-gray-200">
            {"  (headers: List<(String * String)>)"}
          </div>
          <div className="whitespace-pre text-gray-200">
            {"  : Result<Response, RequestError> ="}
          </div>
          <div className="whitespace-pre text-gray-200">
            {'  request "GET" uri headers Stdlib.Blob.empty'}
          </div>
          <div className="mt-3 whitespace-pre text-gray-500">
            capabilities: http-client
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap gap-x-5 gap-y-1 border-t border-white/10 px-4 py-2 text-xs text-gray-500">
      <span>
        <span className="text-gray-300">↑↓</span> move
      </span>
      <span>
        <span className="text-gray-300">↵</span> open
      </span>
      <span>
        <span className="text-gray-300">tab</span> views
      </span>
      <span>
        <span className="text-gray-300">esc</span> back
      </span>
      <span>
        <span className="text-gray-300">/</span> search
      </span>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const WORKBENCH_CARDS: {
  h: string;
  p: string;
  visual: React.ReactNode;
}[] = [
  {
    h: "Navigate the Program's Structure",
    p: "Move through owners, modules, functions, types, and values as the program's own hierarchy, not as folders the CLI has to interpret.",
    visual: (
      <div className="w-full max-w-[15rem] rounded-lg border border-white/10 bg-dark-black/80 py-2 text-xs">
        {[
          { label: "🗂️  Stdlib", indent: 0 },
          { label: "🗂️  HttpClient", indent: 1 },
          { label: "⚡️ get", indent: 2, active: true },
          { label: "⚡️ post", indent: 2 },
          { label: "🔖 Response", indent: 2 },
        ].map(row => (
          <div
            key={row.label}
            className={`py-0.5 pr-3 ${
              row.active
                ? "border-l-2 border-purple-dbg bg-white/5 text-white"
                : "border-l-2 border-transparent text-gray-500"
            }`}
            style={{ paddingLeft: `${0.75 + row.indent * 0.75}rem` }}
          >
            {row.label}
          </div>
        ))}
      </div>
    ),
  },
  {
    h: "Follow the Current Definition",
    p: "Open its dependencies, dependents, traces, and changes, then return without losing your place.",
    visual: (
      <div className="w-full max-w-[15rem] rounded-lg border border-white/10 bg-dark-black/80 p-3 text-xs">
        <div className="mb-2 truncate text-sand">Stdlib.HttpClient.get</div>
        <div className="grid gap-1">
          {["definition", "dependencies", "traces", "changes"].map(
            (view, i) => (
              <div
                key={view}
                className={`flex items-center justify-between rounded px-2 py-1 ${
                  i === 0
                    ? "bg-purple-dbg/20 text-white"
                    : "bg-white/5 text-gray-500"
                }`}
              >
                <span>{view}</span>
                <span aria-hidden="true">{i === 0 ? "•" : "›"}</span>
              </div>
            ),
          )}
        </div>
      </div>
    ),
  },
  {
    h: "Stay Oriented",
    p: "Keep the current location, branch, and uncommitted work visible while you navigate.",
    visual: (
      <div className="w-full max-w-[15rem] rounded-lg border border-white/10 bg-dark-black/80 text-xs">
        <div className="truncate border-b border-white/10 px-3 py-2 text-gray-400">
          /Darklang.Stdlib.HttpClient
        </div>
        <div className="flex items-center justify-between px-3 py-2">
          <span className="text-sand">main</span>
          <span className="text-gray-500">clean</span>
        </div>
        <div className="flex items-center gap-2 border-t border-white/10 px-3 py-2 text-gray-500">
          <span className="text-gray-300">↑↓</span> move
          <span className="ml-2 text-gray-300">tab</span> views
        </div>
      </div>
    ),
  },
];

const TUI_VIEWS: { h: string; cmd: string; p: string }[] = [
  {
    h: "Package Workbench",
    cmd: "dark",
    p: "Browse modules and definitions while keeping your location, branch, and current work visible.",
  },
  {
    h: "Change Review",
    cmd: "dark review",
    p: "Step through definition-level changes before you commit or merge them.",
  },
  {
    h: "Execution Trace",
    cmd: "dark traces view <id>",
    p: "Open a recorded call tree with its values, errors, and timing.",
  },
  {
    h: "Capability Editor",
    cmd: "dark caps edit",
    p: "Inspect and adjust the network, data, file, environment, process, and model access available to the instance.",
  },
];

const LOOP: { n: string; h: string; wide?: boolean; lines: Line[] }[] = [
  {
    n: "01",
    h: "Write",
    wide: true,
    lines: [
      cmd("dark fn MyApp.Pricing.discount \\"),
      out("    '(price: Int64) (percent: Int64): Int64 ="),
      out("     price - ((price * percent) / 100L)'"),
    ],
  },
  {
    n: "02",
    h: "Run",
    wide: true,
    lines: [cmd("dark eval 'MyApp.Pricing.discount 5000L 20L'"), out("4000")],
  },
  {
    n: "03",
    h: "Inspect",
    lines: [cmd("dark traces tail")],
  },
  {
    n: "04",
    h: "Keep",
    lines: [cmd("dark status"), cmd('dark commit "add product discount"')],
  },
];

const MAP: { group: string; commands: string[] }[] = [
  {
    group: "Explore",
    commands: ["tree", "nav", "ls", "search", "view", "deps", "docs"],
  },
  { group: "Create", commands: ["fn", "type", "val", "undo", "deprecate"] },
  { group: "Execute", commands: ["eval", "run", "scripts", "serve"] },
  { group: "Inspect", commands: ["traces", "db", "caps", "apps"] },
  {
    group: "Version",
    commands: ["status", "review", "commit", "branch", "rebase", "merge"],
  },
  { group: "Connect", commands: ["sync", "conflicts", "devices"] },
  {
    group: "Work with AI",
    commands: ["agent ask", "agent code", "agent review", "agent fix"],
  },
];

const VERSUS: { h: string; p: string; icon: React.ReactNode }[] = [
  {
    h: "Static types",
    p: "Catch the mistake when you write the script, not halfway through the run that was supposed to fix production.",
    icon: (
      <Glyph>
        <path d="M20.6 13.4L12 22l-9-9V4h9z" />
        <circle cx="7.5" cy="7.5" r="1.2" />
      </Glyph>
    ),
  },
  {
    h: "Immutable values",
    p: "A value doesn't change under you, so a script stays readable and verifiable as it grows.",
    icon: (
      <Glyph>
        <rect x="5" y="11" width="14" height="9" rx="2" />
        <path d="M8 11V8a4 4 0 018 0v3" />
      </Glyph>
    ),
  },
  {
    h: "Packages, no install step",
    p: "Call a function by name. There is no npm install, no virtualenv, and no dependency resolution before the script runs.",
    icon: (
      <Glyph>
        <path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" />
        <path d="M3 8l9 5 9-5M12 13v9" />
      </Glyph>
    ),
  },
  {
    h: "Versioned and immutable",
    p: "A package function is pinned to exact content, so the script that worked yesterday still runs the same code today.",
    icon: (
      <Glyph>
        <circle cx="12" cy="6" r="2.4" />
        <circle cx="12" cy="18" r="2.4" />
        <path d="M12 8.4v7.2" />
      </Glyph>
    ),
  },
  {
    h: "Same behaviour everywhere",
    p: "macOS, Linux, and Windows run the same code and the same package references, without the GNU-versus-BSD surprises of shelling out.",
    icon: (
      <Glyph>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
      </Glyph>
    ),
  },
  {
    h: "Traceable and testable",
    p: "Every run can leave a structured trace, and any function in the script can be run on its own to check it.",
    icon: (
      <Glyph>
        <path d="M3 12h3l2.5-6 3 12 2.5-6H21" />
      </Glyph>
    ),
  },
];

const PLATFORMS: { h: string; p: string }[] = [
  { h: "macOS", p: "Apple silicon and Intel" },
  { h: "Linux", p: "x64, arm64, arm, and supported musl builds" },
  { h: "Windows", p: "x64 and arm64 downloads" },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const CLIPage: React.FC = () => {
  const btn =
    "inline-block rounded-md px-6 py-3 font-medium tracking-wide transition";
  const primary = `${btn} bg-purple-dbg text-white hover:bg-purple-lbg`;
  const ghost = `${btn} border border-white/20 text-white hover:border-white/40`;

  return (
    <div className="bg-dark text-white font-code">
      {/* ===================== HERO ===================== */}
      <section className="mx-auto max-w-7xl 2xl:max-w-[100rem] px-6 pt-14 pb-8 md:pt-20">
        <img
          src="/assets/darklang-cli-ascii.png"
          alt="Darklang CLI"
          className="mx-auto mb-14 md:mb-20"
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div>
            <h1 className="mb-6 text-3xl font-bold leading-[1.15] md:text-5xl 2xl:text-6xl">
              The Darklang workbench,
              <br />
              <span className="text-purple-dbg">in your terminal</span>
            </h1>

            <Body className="mb-5">
              Run <C>dark</C> and your whole program opens in the terminal.
              Explore it through the interactive workbench, or use a focused
              command to search, change, run, or inspect it directly.
            </Body>
            <Body className="mb-8">
              Both interfaces work with the same live program, its definitions,
              dependencies, runtime, traces, branches, and history.
            </Body>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <span className="inline-flex max-w-full items-baseline gap-2 rounded-md border border-white/15 bg-dark-black px-4 py-2.5 text-gray-200">
                <span className="select-none text-olive" aria-hidden="true">
                  $
                </span>
                <span className="min-w-0 break-all">
                  curl -fsSL https://darklang.com/install | sh
                </span>
              </span>
              <span className="text-gray-500">macOS · Linux</span>
            </div>
          </div>

          <div className="min-w-0">
            <Workbench />
          </div>
        </div>
      </section>

      {/* ===================== WORKBENCH ===================== */}
      <Section label="the workbench" id="workbench">
        <div className="mb-10 max-w-6xl">
          <H2 className="mb-4">Keep the Whole Program in View</H2>
          <Body>
            Most command-line tools print one result and return to the prompt.
            The workbench keeps your package tree, current definition, branch,
            changes, and related program views together on screen.
          </Body>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {WORKBENCH_CARDS.map(card => (
            <VisualCard key={card.h} h={card.h} visual={card.visual}>
              {card.p}
            </VisualCard>
          ))}
        </div>

        <Body className="mt-8 max-w-6xl">
          The workbench is keyboard-driven and updates in place while preserving
          normal terminal scrollback outside it. There are no source files
          underneath: a program is structured package data, so <C>fn</C>,{" "}
          <C>type</C>, and <C>val</C> create and update named items directly,
          and <C>.dark</C> files stay useful for scripts and for moving code
          around.
        </Body>
      </Section>

      {/* ===================== COMMANDS ===================== */}
      <Section label="find and understand" id="commands">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div>
            <H2 className="mb-4">Go Straight to What You Need</H2>
            <Body className="mb-5">
              Use the same command surface inside the workbench or directly from
              your shell. Search the program, open an exact definition, and
              follow its relationships without hunting through files first.
            </Body>
            <Body>
              Results are organized around the program itself, its modules,
              functions, types, signatures, and dependencies, instead of
              disconnected text matches.
            </Body>
          </div>

          {/* One definition, followed from search to source to its callers.
              One frame rather than three: repeating the window chrome around
              each command made three unrelated screenshots of one session. */}
          <div className="min-w-0">
            <Session
              steps={[
                { label: "find it", lines: SEARCH_TERM },
                { label: "read it", lines: VIEW_TERM },
                { label: "follow it", lines: DEPS_TERM },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* ===================== LOOP ===================== */}
      <Section label="the development loop">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div>
            <H2 className="mb-4">
              One Short Loop from Idea to a Working Change
            </H2>
            <Body>
              Create or update a named definition, run it immediately, inspect
              its execution, and commit it when you&rsquo;re ready. Every step
              happens through the same CLI.
            </Body>

            <p className="mt-8 text-lg text-gray-300 md:text-xl">
              Write. Run. Inspect. Commit.
            </p>
          </div>

          {/* the steps whose commands are long take the whole column; the two
              short ones share a row */}
          <div className="grid min-w-0 gap-4 sm:grid-cols-2">
            {LOOP.map(step => (
              <Panel
                key={step.n}
                className={`min-w-0 ${step.wide ? "sm:col-span-2" : ""}`}
              >
                <div className="mb-3 flex items-baseline gap-3">
                  <span className="text-sm text-purple-dbg">{step.n}</span>
                  <span className="font-bold text-white md:text-lg">
                    {step.h}
                  </span>
                </div>
                <Lines lines={step.lines} wrap />
              </Panel>
            ))}
          </div>
        </div>
      </Section>

      {/* ===================== TERMINAL VIEWS ===================== */}
      <Section label="interactive terminal views" id="views">
        <div className="mb-10 max-w-6xl">
          <H2 className="mb-4">
            See the Whole Picture Without Leaving the Terminal
          </H2>
          <Body>
            Some work is easier when its structure stays on screen. Darklang
            provides focused, keyboard-driven views for exploring a program,
            reviewing changes, following an execution, and controlling access,
            all within the same CLI.
          </Body>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {TUI_VIEWS.map(view => (
            <Panel key={view.h}>
              <div className="mb-4 border-b border-white/10 pb-3 text-sm text-olive">
                $ <span className="text-gray-200">{view.cmd}</span>
              </div>
              <h3 className="mb-2 font-bold text-white md:text-lg">{view.h}</h3>
              <p className="leading-relaxed text-gray-300 2xl:text-lg">
                {view.p}
              </p>
            </Panel>
          ))}
        </div>
      </Section>

      {/* ===================== AUTOMATION ===================== */}
      <Section label="scripts and automation">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div>
            <H2 className="mb-4">
              Interactive for People. Composable for Tools
            </H2>
            <Body className="mb-5">
              Use focused commands in shell scripts and CI. Feed multiline
              definitions through standard input, pass arguments to <C>.dark</C>{" "}
              scripts, and pipe JSON or NDJSON from commands that provide
              structured output.
            </Body>
            <Body>
              The command you test interactively is the same command you can put
              into an automated workflow.
            </Body>
          </div>

          <div className="min-w-0">
            <Term lines={AUTOMATION_TERM} />
          </div>
        </div>
      </Section>

      {/* ===================== VERSUS BASH ===================== */}
      <Section label="instead of bash and python">
        <div className="mb-10 max-w-6xl">
          <H2 className="mb-4">A better language for your scripts</H2>
          <Body className="mb-5">
            Bash has no package manager, so scripts lean on whichever CLI tools
            happen to be installed, each with its own interface, its own flags,
            and subtly different behaviour between versions and platforms.
          </Body>
          <Body>
            Python asks for a virtual environment per project to keep
            dependencies from colliding. Darklang scripts are written in the
            same typed language, against the same packages, as the rest of your
            program.
          </Body>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {VERSUS.map(item => (
            <Card key={item.h} h={item.h} icon={item.icon}>
              {item.p}
            </Card>
          ))}
        </div>
      </Section>

      {/* ===================== AGENTS ===================== */}
      <Section label="coding agents">
        <div className="max-w-6xl">
          <H2 className="mb-4">The CLI Explains Itself</H2>
          <Body className="mb-5">
            Coding agents can use the same commands as people to explore the
            package tree, read definitions, follow dependencies, run code, and
            inspect traces.
          </Body>
          <Body className="mb-8">
            <C>dark docs for-ai</C> provides an agent-focused guide to the
            program model, syntax, command surface, capabilities, and
            source-control workflow.
          </Body>

          <Link className="text-purple-dbg underline" to="/ai">
            Explore Darklang + AI
          </Link>
        </div>
      </Section>

      {/* ===================== DOCS ===================== */}
      <Section label="documentation">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div>
            <H2 className="mb-4">The manual ships with the command</H2>
            <Body className="mb-5">
              Browse language syntax, types, errors, packages, source control,
              HTTP, standard-library modules, and live function signatures
              without leaving the terminal.
            </Body>
            <Body className="mb-6">
              Every command includes focused help, while contextual completion
              shows what can come next as you type.
            </Body>

            <div className="grid gap-2 text-sm">
              {["dark help traces", "dark db --help"].map(command => (
                <div key={command} className="flex items-baseline gap-3">
                  <span className="select-none text-olive" aria-hidden="true">
                    $
                  </span>
                  <span className="text-gray-200">{command}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <Term lines={DOCS_TERM} />
          </div>
        </div>
      </Section>

      {/* ===================== COMMAND MAP ===================== */}
      <Section label="command map">
        <H2 className="mb-10">One CLI. The Whole Workflow</H2>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {MAP.map(group => (
            <Panel key={group.group}>
              <h3 className="mb-3 text-sm uppercase tracking-[0.11em] text-purple-dbg">
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-x-2 gap-y-1.5 text-gray-300">
                {group.commands.map(command => (
                  <span
                    key={command}
                    className="rounded border border-white/10 px-2 py-0.5 text-xs sm:text-sm"
                  >
                    {command}
                  </span>
                ))}
              </div>
            </Panel>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <p className="text-gray-300 md:text-lg">
            Every command explains itself.
          </p>
          <span className="inline-flex max-w-full items-baseline gap-2 rounded-md border border-white/15 bg-dark-black px-4 py-2.5 text-sm text-gray-200">
            <span className="select-none text-olive" aria-hidden="true">
              $
            </span>
            <span className="min-w-0 break-all">
              dark &lt;command&gt; --help
            </span>
          </span>
        </div>
      </Section>

      {/* ===================== INSTALL ===================== */}
      <Section label="install" id="install">
        <H2 className="mb-6 max-w-4xl">
          Install One Binary. Start with <C>dark</C>
        </H2>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div className="flex gap-4">
            <div>
              <Body className="mb-5">
                The installer selects the release for your operating system and
                architecture and puts <C>dark</C> on your path. Keep it current
                with <C>dark update</C>, and remove it with{" "}
                <C>dark uninstall</C>.
              </Body>
              <Body>
                The CLI and a local Darklang instance work on their own. No
                cloud account is required to write, run, trace, or version
                anything on this page.
              </Body>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link className={primary} to="/getting-started">
                  Install Darklang
                </Link>
                <a
                  className={ghost}
                  href="https://github.com/darklang/dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View releases on GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <Term lines={INSTALL_TERM} />

            <div className="mt-6 grid gap-5 text-center sm:grid-cols-3">
              {PLATFORMS.map(platform => (
                <div key={platform.h}>
                  <h3 className="mb-1 text-sm font-semibold text-purple-dbg">
                    {platform.h}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {platform.p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CLIPage;
