import React, { useState } from "react";
import { Link } from "react-router-dom";

/* ------------------------------------------------------------------ */
/* Reusable pieces                                                     */
/* ------------------------------------------------------------------ */

const Shell: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <section className={className}>
    <div className="mx-auto max-w-7xl 2xl:max-w-[100rem] px-4 py-16 md:py-20">
      {children}
    </div>
  </section>
);

const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mb-4 text-sm 2xl:text-base font-bold uppercase tracking-[0.12em] text-rust">
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

/** A single point: the claim, then the mechanism behind it. */
const Point: React.FC<{
  h: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}> = ({ h, icon, children }) => (
  <div className="flex gap-4">
    {icon && (
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rust/10 text-rust">
        {icon}
      </span>
    )}
    <div>
      <h3 className="mb-1.5 font-bold text-gray-900 2xl:text-lg">{h}</h3>
      <p className="leading-relaxed text-gray-600 2xl:text-lg">{children}</p>
    </div>
  </div>
);

/** An inline CLI word. */
const C: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-code text-sm text-rust">{children}</span>
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
/* Terminal                                                            */
/* ------------------------------------------------------------------ */

type TermLine =
  | { kind: "cmd"; text: string }
  | { kind: "out"; text: string }
  | { kind: "gap" };

const cmd = (text: string): TermLine => ({ kind: "cmd", text });
const out = (text: string): TermLine => ({ kind: "out", text });

/** Captured CLI output, shown as a transcript. */
const Term: React.FC<{ lines: TermLine[]; label?: string }> = ({
  lines,
  label = "terminal",
}) => (
  <div className="overflow-hidden rounded-2xl bg-dark-black shadow-[0_28px_60px_-32px_rgba(30,30,40,0.75)]">
    <div className="flex items-center gap-1.5 bg-[#28282a] px-5 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-[#4a4a4e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#4a4a4e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#4a4a4e]" />
      <span className="ml-2 font-code text-xs text-gray-500">{label}</span>
    </div>

    <div className="overflow-x-auto px-5 py-4 font-code text-xs leading-7 sm:text-sm">
      {lines.map((line, i) => {
        if (line.kind === "gap") return <div key={i} className="h-4" />;
        if (line.kind === "cmd") {
          return (
            <div key={i} className="whitespace-pre text-gray-200">
              <span className="text-olive">$</span> {line.text}
            </div>
          );
        }
        return (
          <div key={i} className="whitespace-pre text-gray-400">
            {line.text}
          </div>
        );
      })}
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Hero decoration                                                     */
/* ------------------------------------------------------------------ */

/**
 * A commit graph, drawn plainly: a trunk, a branch, and nodes on both.
 * One motif, mirrored, standing in the margins on either side of the hero.
 */
const CommitGraph: React.FC<{
  variant: "branch" | "merge";
  className?: string;
}> = ({ variant, className = "" }) => {
  const trunk = "M32 6V286";
  const branch =
    variant === "branch"
      ? "M32 104C32 104 72 104 88 128C98 143 98 156 98 176V266"
      : "M98 26V118C98 138 98 151 88 166C72 190 32 190 32 190";
  const trunkNodes =
    variant === "branch" ? [46, 104, 232, 274] : [46, 118, 190, 262];
  const branchNodes = variant === "branch" ? [176, 250] : [26, 118];

  return (
    <svg
      viewBox="0 0 130 292"
      aria-hidden="true"
      className={`pointer-events-none absolute h-auto select-none text-rust ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <g strokeOpacity="0.4">
        <path d={trunk} />
        <path d={branch} />
      </g>
      {trunkNodes.map(y => (
        <circle
          key={y}
          cx="32"
          cy={y}
          r="6"
          fill="currentColor"
          fillOpacity="0.5"
          stroke="none"
        />
      ))}
      {branchNodes.map(y => (
        <circle
          key={y}
          cx="98"
          cy={y}
          r="6"
          fill="#fff"
          strokeOpacity="0.55"
          strokeWidth="2.5"
        />
      ))}
    </svg>
  );
};

/* ------------------------------------------------------------------ */
/* Diagrams                                                            */
/* ------------------------------------------------------------------ */

/** Text on the left, definitions on the right: what each system tracks. */
const DIFF_LINES: { w: number; mark?: "add" | "del" }[] = [
  { w: 92 },
  { w: 74 },
  { w: 100, mark: "del" },
  { w: 58, mark: "add" },
  { w: 84 },
  { w: 66 },
];

const SEEN = [
  { k: "fn", n: "Session.verify", changed: true },
  { k: "type", n: "Token", changed: false },
  { k: "value", n: "maxSessionAge", changed: false },
];

const Panel: React.FC<{
  label: string;
  caption: React.ReactNode;
  children: React.ReactNode;
}> = ({ label, caption, children }) => (
  <div className="flex flex-col p-5">
    <p className="mb-4 font-code text-xs text-gray-500">{label}</p>
    <div className="grid gap-2">{children}</div>
    <p className="mt-auto text-balance pt-5 text-sm leading-relaxed text-gray-400">
      {caption}
    </p>
  </div>
);

/**
 * One dark panel split by a hairline, built like the hero frame. The left
 * half can only point at positions; the right half names things.
 */
const TextVsDefinitions: React.FC = () => (
  <div className="grid items-stretch overflow-hidden rounded-2xl bg-dark-black shadow-[0_28px_60px_-32px_rgba(30,30,40,0.75)] divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
    <Panel
      label="what a file diff sees"
      caption={
        <>
          Lines, and{" "}
          <span className="font-semibold text-gray-200">
            a guess at meaning
          </span>
        </>
      }
    >
      {DIFF_LINES.map((l, i) => (
        <div key={i} className="flex items-center gap-2.5">
          {/* the gutter is the whole point: a diff can only name a position */}
          <span className="w-5 shrink-0 text-right font-code text-[10px] tabular-nums text-gray-600">
            {41 + i}
          </span>
          <span className="w-2 shrink-0 font-code text-[10px] text-gray-500">
            {l.mark === "add" ? "+" : l.mark === "del" ? "−" : ""}
          </span>
          <span
            className={`h-2 rounded-full ${
              l.mark ? "bg-white/[0.16]" : "bg-white/[0.07]"
            }`}
            style={{ width: `${l.w}%` }}
          />
        </div>
      ))}
    </Panel>

    <Panel
      label="what Darklang sees"
      caption={
        <>
          Definitions, and{" "}
          <span className="font-semibold text-gray-200">
            exactly which one moved
          </span>
        </>
      }
    >
      {SEEN.map(d => (
        <div
          key={d.n}
          className={`flex items-center gap-2 rounded-lg px-3 py-2 font-code text-xs ring-1 ${
            d.changed
              ? "bg-code-fn/10 ring-code-fn/45"
              : "bg-white/[0.03] ring-white/10"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 shrink-0 rounded-full ${
              d.changed ? "bg-code-fn" : "bg-gray-600"
            }`}
          />
          <span className="text-gray-500">{d.k}</span>
          <span className="truncate text-gray-200">{d.n}</span>
          {d.changed && (
            <span className="ml-auto shrink-0 text-code-fn">changed</span>
          )}
        </div>
      ))}
    </Panel>
  </div>
);

/** Peers holding the same history: your machines, your team, and a host. */
const PEERS = [
  {
    label: "your laptop",
    sub: "full history",
    glyph: (
      <Icon>
        <rect x="3" y="5" width="18" height="12" rx="2" />
        <path d="M2 20h20" />
      </Icon>
    ),
  },
  {
    label: "your desktop",
    sub: "full history",
    glyph: (
      <Icon>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M9 21h6M12 17v4" />
      </Icon>
    ),
  },
  {
    label: "your server",
    sub: "full history",
    glyph: (
      <Icon>
        <rect x="3" y="4" width="18" height="7" rx="2" />
        <rect x="3" y="13" width="18" height="7" rx="2" />
        <path d="M7 7.5h.01M7 16.5h.01" />
      </Icon>
    ),
  },
  {
    label: "darklang.cloud",
    sub: "always on",
    lit: true,
    glyph: (
      <Icon>
        <path d="M17.5 19a4.5 4.5 0 00.5-8.97 6 6 0 00-11.6 1.44A3.5 3.5 0 007 19z" />
      </Icon>
    ),
  },
];

/**
 * The peers, and the command that moves history between them. One figure:
 * the output names a peer the row above just introduced.
 */
const SyncDiagram: React.FC = () => (
  <div>
    <div className="mb-9 font-code text-xs leading-7">
      <div className="whitespace-pre text-gray-800">
        <span className="text-gray-400">your desktop</span>{" "}
        <span className="text-acc-green">$</span> dark sync
      </div>
      <div className="overflow-x-auto whitespace-pre text-gray-500">
        Pulled from your laptop: fn Session.verify
      </div>
    </div>

    <div className="relative">
      {/* the line every peer sits on: one history, many holders */}
      <span
        aria-hidden="true"
        className="absolute left-6 right-6 top-5 h-px bg-gray-200"
      />
      <div className="relative grid grid-cols-2 gap-y-6 sm:grid-cols-4">
        {PEERS.map(peer => (
          <div key={peer.label} className="flex flex-col items-center gap-2">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ${
                peer.lit
                  ? "text-blue-dbg ring-blue-lbg/40"
                  : "text-gray-500 ring-gray-200"
              }`}
            >
              {peer.glyph}
            </span>
            <span className="px-1 text-center font-code text-xs text-gray-700">
              {peer.label}
            </span>
            <span className="-mt-1 text-center text-[11px] text-gray-400">
              {peer.sub}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/**
 * One definition, and the callers that move with it. Built in HTML rather
 * than hand-placed SVG text so a longer name can never outgrow its box; the
 * connectors are the only drawn part, and they carry no text.
 */
const CALLERS = ["Auth.requireUser", "Account.updateEmail"];

const Chip: React.FC<{ name: string; lit?: boolean }> = ({
  name,
  lit = false,
}) => (
  <div
    className={`truncate rounded-lg px-3 py-2 font-code text-xs ring-1 ${
      lit
        ? "bg-code-fn/10 text-gray-100 ring-code-fn/45"
        : "bg-white/[0.03] text-gray-300 ring-white/10"
    }`}
  >
    <span className="text-gray-500">fn</span> {name}
  </div>
);

const GraphViz: React.FC = () => (
  <div className="overflow-hidden rounded-2xl bg-dark-black p-5 shadow-[0_28px_60px_-32px_rgba(30,30,40,0.75)]">
    <p className="mb-4 font-code text-xs text-gray-500">callers</p>

    <div className="grid grid-cols-[minmax(0,1fr)_2.5rem_minmax(0,1fr)] items-center">
      <div className="grid gap-3">
        {CALLERS.map(c => (
          <Chip key={c} name={c} />
        ))}
      </div>

      {/* connectors: each caller's row centre, a spine, then one line out */}
      <div className="relative self-stretch" aria-hidden="true">
        <span className="absolute left-0 right-1/2 top-[22%] h-px bg-white/15" />
        <span className="absolute left-0 right-1/2 top-[78%] h-px bg-white/15" />
        <span className="absolute bottom-[22%] left-1/2 top-[22%] w-px bg-white/15" />
        <span className="absolute left-1/2 right-1 top-1/2 h-px bg-code-fn" />
        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] leading-none text-code-fn">
          &#9656;
        </span>
      </div>

      {/* one row, so its centre is the row centre the connector points at */}
      <div className="flex min-w-0 items-baseline justify-between gap-3 rounded-lg bg-code-fn/10 px-3 py-2 font-code text-xs ring-1 ring-code-fn/45">
        <span className="truncate text-gray-100">
          <span className="text-gray-500">fn</span> Session.verify
        </span>
        <span className="shrink-0 text-gray-500">
          v1 <span className="text-gray-600">&rarr;</span>{" "}
          <span className="text-code-fn">v2</span>
        </span>
      </div>
    </div>

    <p className="mt-5 text-sm leading-relaxed text-gray-400">
      Both callers point at Session.verify. Move it to v2 and{" "}
      <span className="font-semibold text-gray-200">
        both references move with it
      </span>
      , in the same change.
    </p>
  </div>
);

/** Who changed what, and what is still waiting on a person. */
const PersonIcon: React.FC = () => (
  <Icon>
    <circle cx="12" cy="8" r="3.2" />
    <path d="M5 20a7 7 0 0114 0" />
  </Icon>
);

const AgentIcon: React.FC = () => (
  <Icon>
    <rect x="4" y="8" width="16" height="12" rx="3" />
    <path d="M12 4v4M9 14h.01M15 14h.01" />
  </Icon>
);

const REVIEW = [
  {
    who: "you",
    what: "Session.verify",
    state: "approved",
    tone: "bg-rust/10 text-rust",
    agent: false,
  },
  {
    who: "alice",
    what: "Auth.requireUser",
    state: "needs review",
    tone: "bg-blue-lbg/10 text-blue-dbg",
    agent: false,
  },
  {
    who: "agent",
    what: "Token.parse",
    state: "needs review",
    tone: "bg-taupe/15 text-taupe",
    agent: true,
  },
];

const ReviewList: React.FC = () => (
  <div className="min-w-0">
    <div className="mb-2 flex items-baseline justify-between gap-4">
      <p className="font-code text-xs text-gray-400">dark review</p>
      <p className="text-xs text-gray-400">2 need you</p>
    </div>

    <ul className="divide-y divide-gray-200">
      {REVIEW.map(r => (
        <li key={r.who} className="flex items-center gap-3 py-3">
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${r.tone}`}
          >
            {r.agent ? <AgentIcon /> : <PersonIcon />}
          </span>
          <span className="w-12 shrink-0 text-sm text-gray-700">{r.who}</span>
          <span className="min-w-0 truncate font-code text-xs text-gray-800">
            {r.what}
          </span>
          <span
            className={`ml-auto shrink-0 text-[10px] uppercase tracking-wider ${
              r.state === "approved" ? "text-acc-green" : "text-gray-400"
            }`}
          >
            {r.state}
          </span>
        </li>
      ))}
    </ul>

    <p className="mt-3 text-sm text-gray-500">
      Every change carries its author.
    </p>
  </div>
);

/** Git tracks files; Darklang tracks the program. */
const Mini: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0 opacity-70"
  >
    {children}
  </svg>
);

/** A program: layers of structure. */
const ProgramGlyph = (
  <Mini>
    <path d="M12 2 3 7l9 5 9-5-9-5z" />
    <path d="m3 12 9 5 9-5" />
  </Mini>
);

const TextGlyph = (
  <Mini>
    <path d="M4 6h16M4 12h12M4 18h8" />
  </Mini>
);

const FileGlyph = (
  <Mini>
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <path d="M14 2v6h6" />
  </Mini>
);

const DiffGlyph = (
  <Mini>
    <path d="M6 3v6M3 6h6" />
    <path d="M15 18h6" />
    <path d="M4 14h6M14 8h6" />
  </Mini>
);

const GuessGlyph = (
  <Mini>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.6 9.2a2.5 2.5 0 014.9.6c0 1.6-2.4 2-2.4 3.4" />
    <path d="M12 17h.01" />
  </Mini>
);

const GIT_STEPS = [
  { label: "program", glyph: ProgramGlyph },
  { label: "text", glyph: TextGlyph },
  { label: "file", glyph: FileGlyph },
  { label: "diff", glyph: DiffGlyph },
  { label: "guess it back", glyph: GuessGlyph },
];

const DARK_STEPS = [
  { label: "program", glyph: ProgramGlyph },
  { label: "program", glyph: ProgramGlyph },
];

const Chain: React.FC<{
  steps: { label: string; glyph: React.ReactNode }[];
  lit?: boolean;
}> = ({ steps, lit = false }) => (
  <div className="flex flex-wrap items-center gap-2">
    {steps.map((step, i) => (
      <React.Fragment key={i}>
        {i > 0 && (
          <span
            aria-hidden="true"
            className={lit ? "text-blue-lbg/50" : "text-gray-300"}
          >
            &rarr;
          </span>
        )}
        <span
          className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 font-code text-xs ${
            lit
              ? "border-blue-lbg/30 bg-white text-blue-dbg"
              : "border-gray-200 bg-white text-gray-600"
          }`}
        >
          {step.glyph}
          {step.label}
        </span>
      </React.Fragment>
    ))}
  </div>
);

const Side: React.FC<{
  label: string;
  icon: React.ReactNode;
  tint: string;
  className?: string;
  children: React.ReactNode;
}> = ({ label, icon, tint, className = "", children }) => (
  <div className={`flex flex-col ${className}`}>
    <p className={`mb-3 flex items-center gap-2 font-code text-xs ${tint}`}>
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white ring-1 ring-inset ring-current/20">
        {icon}
      </span>
      {label}
    </p>
    {children}
  </div>
);

const GitVsDark: React.FC = () => (
  <div className="grid items-stretch gap-4 md:grid-cols-2">
    <Side
      label="git"
      tint="text-gray-400"
      className="p-6"
      icon={
        <Icon>
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M8 13h8M8 17h5" />
        </Icon>
      }
    >
      <Chain steps={GIT_STEPS} />
      <p className="mt-4 text-sm leading-relaxed text-gray-500">
        Structure is flattened, then reconstructed by every tool downstream.
      </p>
    </Side>

    <Side
      label="Darklang"
      tint="text-blue-dbg"
      className="rounded-xl bg-blue-lbg/[0.07] p-6"
      icon={
        <Icon>
          <path d="M8 3H7a2 2 0 00-2 2v5a2 2 0 01-2 2 2 2 0 012 2v5c0 1.1.9 2 2 2h1" />
          <path d="M16 3h1a2 2 0 012 2v5a2 2 0 002 2 2 2 0 00-2 2v5a2 2 0 01-2 2h-1" />
        </Icon>
      }
    >
      <Chain steps={DARK_STEPS} lit />
      <p className="mt-4 text-sm leading-relaxed text-gray-600">
        What runs, what the editor shows, and what history tracks are the same
        thing.
      </p>
    </Side>
  </div>
);

/* ------------------------------------------------------------------ */
/* Hero: the whole model in one frame                                  */
/* ------------------------------------------------------------------ */

/** Branches keep their own unfinished work, so switching costs nothing. */
const BRANCHES = [
  { name: "session-expiry", state: "3 in progress", here: true },
  { name: "retry-webhooks", state: "1 in progress", here: false },
  { name: "main", state: "clean", here: false },
];

/** A line of the preview a definition shows when you point at it. */
type Line = { k: "ctx" | "del" | "add"; t: string };

/** What you edited by hand. */
const AUTHORED: {
  kind: string;
  name: string;
  badge: string;
  change: string;
  preview: Line[];
}[] = [
  {
    kind: "fn",
    name: "Session.verify",
    badge: "edited",
    change: "signature changed",
    preview: [
      { k: "del", t: "let verify (t: Token) : Bool =" },
      { k: "add", t: "let verify (t: Token) (now: DateTime) : Bool =" },
      { k: "ctx", t: "  Token.isSigned t" },
      { k: "add", t: "  && t.expiresAt > now" },
    ],
  },
  {
    kind: "type",
    name: "Token",
    badge: "edited",
    change: "field added",
    preview: [
      { k: "ctx", t: "type Token =" },
      { k: "ctx", t: "  { signature: String" },
      { k: "add", t: "    expiresAt: DateTime }" },
    ],
  },
  {
    kind: "value",
    name: "maxSessionAge",
    badge: "new",
    change: "added on this branch",
    preview: [{ k: "add", t: "let maxSessionAge = 12h" }],
  },
];

/** What moved with it, because source control can see the call graph. */
const FOLLOWED: {
  kind: string;
  name: string;
  change: string;
  preview: Line[];
}[] = [
  {
    kind: "fn",
    name: "Auth.requireUser",
    change: "call site rewritten",
    preview: [
      { k: "ctx", t: "Session.verify token" },
      { k: "del", t: "  → a101…" },
      { k: "add", t: "  → a202…" },
    ],
  },
  {
    kind: "fn",
    name: "Account.updateEmail",
    change: "call site rewritten",
    preview: [
      { k: "ctx", t: "Auth.requireUser session" },
      { k: "del", t: "  → b101…" },
      { k: "add", t: "  → b202…" },
    ],
  },
];

/** Nothing committed is ever destroyed. */
const VERSIONS = [
  { v: "v3", who: "you", state: "current" },
  { v: "v2", who: "alice", state: "callable" },
  { v: "v1", who: "you", state: "callable" },
];

/**
 * The point a zone is making. Raised off the panel on its own surface so it
 * reads as a note laid on top of the frame rather than more of its contents.
 */
const ZoneNote: React.FC<{
  side: "left" | "right";
  children: React.ReactNode;
}> = ({ side, children }) => (
  <p
    className={`relative z-10 mt-5 rounded-xl border border-white/10 bg-[#2c2b30] px-3.5 py-3 text-xs leading-relaxed text-gray-100 shadow-[0_16px_34px_-10px_rgba(0,0,0,0.95)] ring-1 ring-code-fn/15 ${
      side === "left"
        ? "text-balance xl:w-52 xl:-translate-x-1/2"
        : "xl:w-max xl:translate-x-1/4"
    }`}
  >
    {children}
  </p>
);

const ZoneLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">
    {children}
  </p>
);

const Badge: React.FC<{
  tone?: "blue" | "olive" | "mute";
  children: React.ReactNode;
}> = ({ tone = "mute", children }) => (
  <span
    className={`shrink-0 text-[10px] uppercase tracking-wider ${
      tone === "blue"
        ? "text-code-fn"
        : tone === "olive"
          ? "text-olive"
          : "text-gray-500"
    }`}
  >
    {children}
  </span>
);

/** What actually changed, shown when a definition is pointed at. */
const Preview: React.FC<{ change: string; lines: Line[] }> = ({
  change,
  lines,
}) => (
  <div className="absolute bottom-full left-0 right-0 z-30 mb-2 overflow-hidden rounded-xl border border-white/10 bg-[#2c2b30] shadow-[0_18px_38px_-12px_rgba(0,0,0,0.95)] ring-1 ring-code-fn/15 sm:left-auto sm:w-[21rem]">
    <p className="border-b border-white/10 px-3.5 py-2 text-[10px] uppercase tracking-[0.12em] text-code-fn">
      {change}
    </p>
    <div className="overflow-x-auto px-3.5 py-2.5">
      {lines.map((l, i) => (
        <div
          key={i}
          className={`whitespace-pre font-code text-[11px] leading-6 ${
            l.k === "add"
              ? "text-olive"
              : l.k === "del"
                ? "text-rust line-through decoration-rust/40"
                : "text-gray-400"
          }`}
        >
          <span className="select-none pr-2 text-gray-600">
            {l.k === "add" ? "+" : l.k === "del" ? "−" : " "}
          </span>
          {l.t}
        </div>
      ))}
    </div>
  </div>
);

/** A definition, named by its kind. Never a file, never a path. */
const Def: React.FC<{
  kind: string;
  name: string;
  badge?: React.ReactNode;
  lit?: boolean;
  change?: string;
  preview?: Line[];
  open?: boolean;
  onPoint?: (open: boolean) => void;
}> = ({ kind, name, badge, lit = false, change, preview, open, onPoint }) => {
  const face = (
    <span
      className={`flex w-full items-baseline justify-between gap-3 rounded-lg border px-3 py-2 text-left transition-colors ${
        lit
          ? "border-code-fn/50 bg-code-fn/10"
          : "border-white/10 bg-white/[0.03]"
      } ${open ? "border-code-fn/70 bg-code-fn/15" : ""}`}
    >
      <span className="min-w-0 truncate font-code text-[13px] text-gray-200">
        <span className="text-gray-500">{kind}</span> {name}
      </span>
      {badge}
    </span>
  );

  if (!preview || !change) return <div className="relative">{face}</div>;

  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={open}
        onMouseEnter={() => onPoint?.(true)}
        onMouseLeave={() => onPoint?.(false)}
        onFocus={() => onPoint?.(true)}
        onBlur={() => onPoint?.(false)}
        onClick={() => onPoint?.(!open)}
        className="block w-full cursor-pointer rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-code-fn/70"
      >
        {face}
        <span className="sr-only">, {change}. Show what changed.</span>
      </button>
      {open && <Preview change={change} lines={preview} />}
    </div>
  );
};

/**
 * The hero figure. One frame holding the whole model: branches on the left
 * each keeping their own work, the program in the middle as typed
 * definitions rather than files, and the history of one of them on the
 * right. What you changed and what changed with it are separated, so the
 * call graph does its arguing without a diagram.
 */
const VersionedProgram: React.FC = () => {
  const [pointed, setPointed] = useState<string | null>(null);
  const point = (name: string) => ({
    open: pointed === name,
    onPoint: (open: boolean) => setPointed(open ? name : null),
  });

  return (
    <div className="rounded-2xl bg-dark-black text-left shadow-[0_28px_60px_-32px_rgba(30,30,40,0.75)]">
      {/* where you are, and what is uncommitted */}
      <div className="flex items-center justify-between gap-4 rounded-t-2xl border-b border-white/10 px-5 py-3.5">
        <p className="flex min-w-0 items-center gap-2 font-code text-xs text-code-fn">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="shrink-0"
          >
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="8" r="3" />
            <path d="M6 9v6M18 11a7 7 0 01-7 7" />
          </svg>
          <span className="truncate">session-expiry</span>
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <span className="hidden text-[11px] text-gray-500 sm:inline">
            3 uncommitted
          </span>
          <span className="rounded-full bg-blue-lbg px-3 py-1 text-[11px] font-semibold text-white">
            Commit
          </span>
        </div>
      </div>

      {/* the three things source control holds */}
      <div className="grid divide-y divide-white/10 md:grid-cols-2 md:divide-y-0 lg:grid-cols-[11rem_1fr_12rem] lg:divide-x">
        {/* branches, each with its own work in progress */}
        <div className="min-w-0 p-5 md:border-r md:border-white/10">
          <ZoneLabel>Branches</ZoneLabel>
          <div className="grid gap-2.5">
            {BRANCHES.map(b => (
              <div key={b.name} className="min-w-0">
                <p
                  className={`truncate font-code text-xs ${
                    b.here ? "text-code-fn" : "text-gray-300"
                  }`}
                >
                  {b.here ? "●" : "○"} {b.name}
                </p>
                <p className="pl-4 text-[11px] text-gray-500">{b.state}</p>
              </div>
            ))}
          </div>
          <ZoneNote side="left">
            Unfinished work stays on its branch.{" "}
            <span className="whitespace-nowrap text-code-fn">
              Nothing to stash.
            </span>
          </ZoneNote>
        </div>

        {/* the program itself: definitions, not files */}
        <div className="min-w-0 p-5">
          <ZoneLabel>You changed</ZoneLabel>
          <div className="grid gap-2">
            {AUTHORED.map(d => (
              <Def
                key={d.name}
                kind={d.kind}
                name={d.name}
                lit={d.badge === "edited"}
                change={d.change}
                preview={d.preview}
                {...point(d.name)}
                badge={
                  <Badge tone={d.badge === "new" ? "olive" : "blue"}>
                    {d.badge}
                  </Badge>
                }
              />
            ))}
          </div>

          <div className="mt-5">
            <ZoneLabel>Rewritten for you</ZoneLabel>
            <div className="grid gap-2">
              {FOLLOWED.map(d => (
                <Def
                  key={d.name}
                  kind={d.kind}
                  name={d.name}
                  change={d.change}
                  preview={d.preview}
                  {...point(d.name)}
                  badge={<Badge>caller</Badge>}
                />
              ))}
            </div>
          </div>
        </div>

        {/* history, at the granularity of a definition */}
        <div className="min-w-0 p-5 md:col-span-2 md:border-t md:border-white/10 lg:col-span-1 lg:border-t-0">
          <ZoneLabel>History of</ZoneLabel>
          <p className="-mt-1 mb-3 truncate font-code text-[13px] text-gray-200">
            <span className="text-gray-500">fn</span> Session.verify
          </p>
          <div className="grid gap-2 md:grid-cols-3 md:gap-x-6 lg:grid-cols-1">
            {VERSIONS.map(v => (
              <div
                key={v.v}
                className="flex flex-col items-start gap-0.5 font-code text-xs lg:flex-row lg:items-baseline lg:justify-between lg:gap-2"
              >
                <span
                  className={
                    v.state === "current" ? "text-code-fn" : "text-gray-400"
                  }
                >
                  {v.v} <span className="text-gray-600">· {v.who}</span>
                </span>
                <Badge tone={v.state === "current" ? "blue" : "mute"}>
                  {v.state}
                </Badge>
              </div>
            ))}
          </div>
          <ZoneNote side="right">
            Committed versions{" "}
            <span className="whitespace-nowrap text-code-fn">
              stay callable.
            </span>
          </ZoneNote>
        </div>
      </div>

      {/* what is true of all of it */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-1 rounded-b-2xl border-t border-white/10 bg-white/[0.02] px-5 py-3 text-[11px] text-gray-500">
        <span>No files</span>
        <span aria-hidden="true" className="text-gray-700">
          ·
        </span>
        <span>No staging area, no stash</span>
        <span aria-hidden="true" className="text-gray-700">
          ·
        </span>
        <span className="flex items-center gap-1.5">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="shrink-0 text-code-fn"
          >
            <path d="M3 11a8 8 0 0113.7-5.7L21 9" />
            <path d="M21 4v5h-5" />
            <path d="M21 13a8 8 0 01-13.7 5.7L3 15" />
            <path d="M3 20v-5h5" />
          </svg>
          Once committed, it syncs to your other machines, your team, and your
          agents
        </span>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const COMMITS_TERM: TermLine[] = [
  cmd("dark commits"),
  out("b8802ff  reject expired sessions"),
  out("         fn Session.verify · type Token · value maxSessionAge"),
  out("a41c9b2  retry failed webhooks"),
  out("         fn Webhook.send"),
];

const PROBLEMS: { h: string; p: React.ReactNode }[] = [
  {
    h: "The 500-Line Rename Diff",
    p: "Renaming is a recorded operation on a name, not a delete-and-add your tools have to guess about. And inside a definition, local names don't affect identity at all.",
  },
  {
    h: "Conflicts Caused by Formatting",
    p: "There is no text to fight over, so reformatting can't cause one. Two sides conflict only if they changed the same definition in different ways. If they happened to make the identical change, there is nothing to resolve.",
  },
  {
    h: "Who Calls This, as a Text Search",
    p: (
      <>
        Callers are recorded references, not string matches. Asking is a query (
        <C>dark deps</C>); updating every caller is one operation.
      </>
    ),
  },
  {
    h: "The Half-Committed Change",
    p: "A commit refuses references to things that don't exist, and offers to bring uncommitted dependencies along, so you can't land a call to something that isn't there.",
  },
  {
    h: "The Lost Stash",
    p: "There's nothing to stash. In-progress work lives with its branch, and switching branches disturbs nothing.",
  },
  {
    h: "The Dependency That Needs Two Versions",
    p: "A reference points at content, not at whatever happens to be latest, so two versions of the same definition coexist peacefully, and each caller moves when you move it. There's no version to fight over.",
  },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "Do I Still Need Git?",
    a: "For your Darklang code, no. Versioning is built in. For everything else in your life that's a file, git is still git.",
  },
  {
    q: "Where Does My Code Actually Live?",
    a: "In your Darklang instances: your machines, and your hosted instance if you have one. Sync gives every one of them the full history, so any single instance can rebuild the picture alone.",
  },
  {
    q: "What Syncs, Exactly?",
    a: "Committed changes only, and only with instances you explicitly connect. Work in progress stays on the machine where you wrote it.",
  },
  {
    q: "What Happens on a Conflict?",
    a: "Nothing stops. Sync applies the latest change, records that two sides disagreed, and shows you both versions to review when you want to. Your decision then syncs everywhere.",
  },
  {
    q: "Can My Whole Team Work This Way?",
    a: "Yes. Share an instance, work on branches, commit under your own account, and review each other's changes definition by definition. Agents fit the same flow: give one a branch, review what it did, merge when it's right.",
  },
  {
    q: "Is My Data Versioned Too?",
    a: "No. Source control covers code: functions, types, and values. Runtime data lives in datastores, with their own lifecycle, so backups and export are a hosting concern, not a history one. Your program's history and your data are separate on purpose.",
  },
  {
    q: "What About Old Versions of My Code?",
    a: "They're never destroyed. Every committed version of every definition stays addressable: inspect it, compare against it, or keep calling it while you migrate on your own schedule.",
  },
  {
    q: "What If My Machine Dies?",
    a: "Every synced instance holds the complete history, so recovery is a sync from any of them: another machine, or your hosted instance.",
  },
  {
    q: "Can I Take Everything with Me?",
    a: "Yes. Your code and its history sync to any instance, including one you own. Leaving a host is a sync, not a migration.",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const TINT = "bg-gray-50";

const SourceControl: React.FC = () => {
  const primary =
    "inline-block rounded-full bg-rust px-6 py-3 font-semibold text-white transition hover:bg-[#a9524f]";

  return (
    <div className="overflow-x-clip">
      {/* ===================== HERO ===================== */}
      <section className="relative">
        <div className="relative mx-auto max-w-7xl 2xl:max-w-[100rem] px-4 py-16 md:py-20">
          <CommitGraph
            variant="branch"
            className="left-4 top-1/2 hidden w-32 -translate-y-1/2 xl:block 2xl:left-24 2xl:w-36"
          />
          <CommitGraph
            variant="merge"
            className="right-4 top-1/2 hidden w-32 -translate-y-1/2 xl:block 2xl:right-24 2xl:w-36"
          />

          <div className="relative mx-auto max-w-4xl text-center">
            <Eyebrow>Source control, built in</Eyebrow>
            <h1 className="mb-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-5xl 2xl:text-6xl">
              Version Control for Definitions,{" "}
              <span className="text-rust">Not Files</span>
            </h1>
            <Body>
              Darklang ships with its own source control. It versions what your
              program is actually made of (functions, types, and values) with
              branches, commits, review, and sync across your machines and your
              team's. Nothing to set up: if you have Darklang, you have it.
            </Body>
          </div>

          <div className="relative mx-auto mt-12 min-w-0 max-w-3xl md:mt-14">
            <VersionedProgram />
          </div>
        </div>
      </section>

      {/* ===================== THESIS ===================== */}
      <Shell className={TINT}>
        <H2 className="mb-8 max-w-3xl">It Tracks Meaning, Not Lines</H2>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* the panels sit second in the source so they stack under the prose
              on narrow screens, and move to the right column at lg */}
          <div className="grid content-start gap-7">
            <Body>
              A Darklang program isn't a folder of files. It's structured data.
              So source control doesn't track lines of text and guess at what
              they mean. It tracks each function, type, and value as its own
              item, and records exactly which ones changed, in a history you can
              read.
            </Body>

            <Point
              h="No Ceremony"
              icon={
                <Icon>
                  <path d="M5 12h14" />
                  <circle cx="12" cy="12" r="9" />
                </Icon>
              }
            >
              No staging area, no stash, no working tree to keep clean. Your
              in-progress work lives in your instance, per branch: status shows
              it, commit keeps it, discard drops it.
            </Point>

            <Point
              h="Identity That Survives Renames"
              icon={
                <Icon>
                  <path d="M4 7V4h16v3M9 20h6M12 4v16" />
                </Icon>
              }
            >
              Every definition is content-addressed. Renaming a local variable
              doesn't change what a function means, so it doesn't change its
              identity, and it never shows up as a wall of meaningless diff.
            </Point>

            <Point
              h="History at the Right Granularity"
              icon={
                <Icon>
                  <path d="M4 6h16M4 12h16M4 18h10" />
                </Icon>
              }
            >
              A commit lists the definitions that changed, by name, not hunks of
              a file you have to decode. <C>dark commits</C> reads like a
              changelog because it is one.
            </Point>
          </div>

          <div className="grid content-start gap-6">
            <TextVsDefinitions />
            <Term lines={COMMITS_TERM} label="dark commits" />
          </div>
        </div>
      </Shell>

      {/* ===================== WHY IT'S BETTER ===================== */}
      <Shell>
        <H2 className="mb-8">Problems That Stop Existing</H2>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map(item => (
            <div
              key={item.h}
              className="rounded-2xl border border-gray-200 bg-white p-6"
            >
              <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-taupe/15 text-taupe">
                <Icon>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" />
                </Icon>
              </span>
              <h3 className="mb-2 font-bold text-gray-900 2xl:text-lg">
                {item.h}
              </h3>
              <p className="leading-relaxed text-gray-600 2xl:text-lg">
                {item.p}
              </p>
            </div>
          ))}
        </div>
      </Shell>

      {/* ===================== BRANCHES ===================== */}
      <Shell className={TINT}>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <H2 className="mb-4">Branches Without the Bookkeeping</H2>
            <Body className="mb-6">
              Branches form a tree. Your branch sees its own work plus
              everything committed beneath it, down to main, and in-progress
              work belongs to the branch it was written on, so switching
              branches never means stashing, shelving, or losing anything.
            </Body>
            <Body className="mt-5">
              When you're done: rebase to catch up with the parent branch, and
              merge to land your commits back into it. Conflicts are detected by
              content, not text position.
            </Body>
          </div>

          <div className="grid content-start gap-5">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <Point
                h="For People"
                icon={
                  <Icon>
                    <circle cx="12" cy="8" r="3.2" />
                    <path d="M5 20a7 7 0 0114 0" />
                  </Icon>
                }
              >
                Experiments and long migrations stay off the shared program
                until they're ready. Before anything lands, <C>dark review</C>{" "}
                walks you through the changes as real diffs, one definition at a
                time.
              </Point>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <Point
                h="For Agents"
                icon={
                  <Icon>
                    <rect x="4" y="8" width="16" height="12" rx="3" />
                    <path d="M12 4v4M9 14h.01M15 14h.01" />
                  </Icon>
                }
              >
                Give a coding agent its own branch. Everything it does is
                attributed and contained there, and you review its work the same
                way, definition by definition, before merging it.
              </Point>
            </div>
          </div>
        </div>
      </Shell>

      {/* ===================== SYNC ===================== */}
      <Shell>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <H2 className="mb-4">Every Machine Holds the Whole History</H2>
            <Body className="mb-6">
              Connect your laptop to your desktop and they sync directly over
              HTTP, with no required central server. What travels is the history
              itself: each machine pulls the commits it hasn't seen, and every
              connected machine ends up holding the whole story. Losing one
              laptop loses nothing.
            </Body>
            <Body>
              Run sync yourself, or start the daemon and let it run in the
              background. Connect an instance on{" "}
              <Link to="/our-cloud" className="text-rust underline">
                Darklang Cloud
              </Link>{" "}
              and sync takes care of itself: always on, always backed up.
            </Body>
          </div>

          <div className="min-w-0">
            <SyncDiagram />
          </div>
        </div>
      </Shell>

      {/* ===================== THE GRAPH ===================== */}
      <Shell className={TINT}>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <H2 className="mb-4">It Knows Who Calls What</H2>
            <Body className="mb-6">
              Because programs are structured data, source control sees the
              dependency graph, not just the items in it.
            </Body>
            <GraphViz />
          </div>

          <div className="grid gap-7 lg:content-center">
            <Point
              h="Edits Follow the Graph"
              icon={
                <Icon>
                  <circle cx="6" cy="6" r="2.5" />
                  <circle cx="18" cy="6" r="2.5" />
                  <circle cx="12" cy="18" r="2.5" />
                  <path d="M7.6 8L11 15.6M16.4 8L13 15.6" />
                </Icon>
              }
            >
              Update a function and every caller, direct or transitive, is
              rewired to the new version in one step, as part of the same
              change. <C>undo</C> steps it back.
            </Point>

            <Point
              h="Commits Are Closed"
              icon={
                <Icon>
                  <path d="M20 6L9 17l-5-5" />
                </Icon>
              }
            >
              A commit refuses references to things that don't exist, and if you
              commit one definition that depends on another uncommitted one, it
              offers to bring the dependency along.
            </Point>

            <Point
              h="Deprecation Is a Versioned Change"
              icon={
                <Icon>
                  <path d="M12 8v5M12 16.5v.01" />
                  <path d="M10.3 3.9L2.6 17a2 2 0 001.7 3h15.4a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" />
                </Icon>
              }
            >
              Retiring a definition is a recorded change, not a comment someone
              might notice. Mark it obsolete, harmful, or superseded, and name
              what replaced it. Callers are told, instead of finding out in
              production.
            </Point>
          </div>
        </div>
      </Shell>

      {/* ===================== TEAMS ===================== */}
      <Shell>
        <div className="grid gap-10 lg:grid-cols-[1fr_22rem] lg:items-center lg:gap-16">
          <div className="max-w-3xl">
            <H2 className="mb-4">Share a Branch, Review What Comes Back</H2>
            <Body>
              A branch is the unit of collaboration: share one with a teammate,
              or hand one to an agent, and review the result before it lands.
              Commits carry their author, history merges cleanly from many
              sources, and review shows what changed, who changed it, and what
              still needs a human decision.
            </Body>
          </div>

          <ReviewList />
        </div>
      </Shell>

      {/* ===================== GIT ===================== */}
      <Shell className={TINT}>
        <div className="mb-8 max-w-6xl">
          <H2 className="mb-4">So, Is This Git?</H2>
          <Body className="mb-5">
            No, and it isn't trying to be. Git is great at what it versions:
            files. Darklang programs aren't files, so putting them in git means
            flattening structure into text and asking every tool downstream to
            guess it back. Built-in source control skips the flattening: the
            thing that runs, the thing the editor shows, and the thing history
            tracks are the same structured program.
          </Body>
          <Body>
            Keep using git for everything that is files. Your Darklang code
            simply doesn't need to be one of them.
          </Body>
        </div>

        <GitVsDark />
      </Shell>

      {/* ===================== FAQ ===================== */}
      <Shell>
        <H2 className="mb-8">Questions</H2>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FAQ.map(item => (
            <div
              key={item.q}
              className="rounded-2xl border border-gray-200 bg-white p-6"
            >
              <h3 className="mb-1.5 font-bold text-gray-900 2xl:text-lg">
                {item.q}
              </h3>
              <p className="leading-relaxed text-gray-600 2xl:text-lg">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </Shell>

      {/* ===================== CTA ===================== */}
      <Shell className={TINT}>
        <div className="max-w-3xl">
          <H2 className="mb-4">Versioned from the First Function</H2>
          <Body className="mb-8">
            Install the CLI and source control is already there: your first
            definition is your first tracked change.
          </Body>

          <div className="flex flex-wrap items-center gap-3">
            <Link className={primary} to="/getting-started">
              Install Darklang
            </Link>
          </div>
        </div>
      </Shell>
    </div>
  );
};

export default SourceControl;
