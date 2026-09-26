/**
 * One picture per section, in the live homepage's manner: diagrams drawn
 * straight onto the page, something moving, a handwritten note pointing at
 * the part that matters, and a control to click where the claim is "you can
 * do this". A card frame is used only where the thing shown IS a card (an
 * issue, a trace, a review, a live app). Names are real; numbers are
 * illustrative.
 */

import React, { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/* shared pieces                                                       */
/* ------------------------------------------------------------------ */

/** A handwritten note, as the live page hangs them in the margins. */
const Note: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <p
    className={`flex items-end gap-1.5 font-caveat text-lg leading-tight text-taupe md:text-xl ${className}`}
  >
    {children}
  </p>
);

/**
 * A hand-drawn arrow. `dir` is where the head points, so a note sitting
 * below and to the right of the thing it is about uses "up-left".
 */
const Arrow: React.FC<{
  dir: "down-right" | "down-left" | "up-right" | "up-left";
}> = ({ dir }) => {
  const flip = {
    "down-right": "",
    "down-left": "-scale-x-100",
    "up-right": "-scale-y-100",
    "up-left": "rotate-180",
  }[dir];
  return (
    <svg
      width="34"
      height="20"
      viewBox="0 0 36 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block shrink-0 text-taupe ${flip}`}
      aria-hidden="true"
    >
      <path d="M2 4C11 1 24 4 31 15" />
      <path d="M29.4 8.2 31 15 24.6 12" />
    </svg>
  );
};

/** A dot that travels an SVG path and fades in and out at the ends. */
const Traveller: React.FC<{
  path: string;
  dur?: string;
  begin?: string;
  reverse?: boolean;
  r?: number;
}> = ({ path, dur = "2.4s", begin = "0s", reverse = false, r = 3 }) => (
  <circle r={r} fill="currentColor" opacity="0">
    <animateMotion
      dur={dur}
      repeatCount="indefinite"
      path={path}
      begin={begin}
      {...(reverse
        ? { keyPoints: "1;0", keyTimes: "0;1", calcMode: "linear" }
        : {})}
    />
    <animate
      attributeName="opacity"
      dur={dur}
      repeatCount="indefinite"
      values="0;1;1;0"
      keyTimes="0;0.15;0.85;1"
      begin={begin}
    />
  </circle>
);

/** A small clickable choice, as the live page's branch tabs. */
const Choice: React.FC<{
  on: boolean;
  onClick: () => void;
  tone: string;
  children: React.ReactNode;
}> = ({ on, onClick, tone, children }) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={on}
    className={`rounded-md px-2.5 py-1 font-code text-xs transition ${
      on ? tone : "text-gray-dark hover:bg-gray-50"
    }`}
  >
    {children}
  </button>
);

/** The card frame, for the things that are cards. */
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <div
    className={`overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md ${className}`}
  >
    {children}
  </div>
);

const Wrap: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mx-auto w-full max-w-[38rem] 2xl:max-w-[46rem] 2xl:[zoom:1.2]">
    {children}
  </div>
);

/* ------------------------------------------------------------------ */
/* 1. shorter path: each step of the loop, with nothing in between    */
/* ------------------------------------------------------------------ */

const LOOP_STEPS = [
  { step: "save", text: "type-checked, no errors", tone: "text-acc-green" },
  {
    step: "run",
    text: "Invoice { lines = 3, total = 240.00 }",
    tone: "text-gray-700",
  },
  { step: "test", text: "4 tests passed", tone: "text-acc-green" },
  {
    step: "trace",
    text: "2b91e0 · 4 calls, inputs and results",
    tone: "text-gray-700",
  },
  {
    step: "issue",
    text: "new issue: Billing.total double-counts refunds, saved for later",
    tone: "text-gray-700",
  },
  { step: "commit", text: "1 item changed", tone: "text-acc-green" },
];

export const ShorterPath: React.FC = () => {
  const [run, setRun] = useState(0);
  return (
    <Wrap>
      <div className="rounded-xl border border-gray-200 bg-[#1e1e1e] px-4 py-3 font-code text-[12px] text-gray-200 shadow-md">
        <span className="text-code-kw">let</span>{" "}
        <span className="text-code-fn">build</span> (customer:{" "}
        <span className="text-code-type">Customer</span>) :{" "}
        <span className="text-code-type">Invoice</span> =
        <br />
        <span className="pl-4">
          Usage.<span className="text-code-fn">forCustomer</span> customer |&gt;
          Invoice.<span className="text-code-fn">fromUsage</span>
        </span>
        <span className="ml-1 inline-block h-3.5 w-1.5 animate-pulse bg-gray-400 align-middle" />
      </div>
      <div className="mt-3 flex items-center gap-3">
        <Choice on={false} onClick={() => setRun(r => r + 1)} tone="">
          ▶ replay
        </Choice>
        <span className="font-code text-[11px] text-gray-400">
          every step in the same system
        </span>
      </div>
      <ol key={run} className="mt-3 space-y-1.5">
        {LOOP_STEPS.map((r, i) => (
          <li
            key={r.step}
            className="flex animate-rise-in items-baseline gap-3 font-code text-[12px]"
            style={{ animationDelay: `${0.25 + i * 0.28}s` }}
          >
            <span className="w-12 shrink-0 text-right text-[10px] text-gray-400">
              {r.step}
            </span>
            <span className={r.tone}>
              {r.tone === "text-acc-green" ? "✓ " : "· "}
              {r.text}
            </span>
          </li>
        ))}
      </ol>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 border-t border-gray-100 pt-3 font-code text-[11px] text-gray-300">
        {["build", "npm install", "CI", "open the tracker"].map(k => (
          <span key={k} className="line-through decoration-rust/60">
            {k}
          </span>
        ))}
      </div>
      <Note className="mt-2">
        <Arrow dir="up-right" />
        save checks types. the agent runs, tests, files issues, and commits,
        with no build in between.
      </Note>
    </Wrap>
  );
};

/* ------------------------------------------------------------------ */
/* 2. backend: typed pieces, each with its own look, wired in one place */
/* ------------------------------------------------------------------ */

type Kind = "endpoint" | "handler" | "datastore" | "cron" | "worker" | "secret";

const KIND: Record<Kind, { tone: string; icon: React.ReactNode }> = {
  endpoint: {
    tone: "text-blue-lbg",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18" />
      </>
    ),
  },
  handler: {
    tone: "text-purple-lbg",
    icon: <path d="M8 6 4 12l4 6M16 6l4 6-4 6" />,
  },
  datastore: {
    tone: "text-acc-green",
    icon: (
      <>
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
      </>
    ),
  },
  cron: {
    tone: "text-acc-amber",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  worker: {
    tone: "text-acc-pink",
    icon: (
      <>
        <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8M20 4v4h-4" />
        <path d="M20 12a8 8 0 0 1-13.7 5.6L4 16M4 20v-4h4" />
      </>
    ),
  },
  secret: {
    tone: "text-gray-500",
    icon: (
      <>
        <circle cx="8" cy="12" r="4" />
        <path d="M12 12h9M18 12v3M15 12v2" />
      </>
    ),
  },
};

/** One typed piece, as the live Deploy section draws its resources. */
const Piece: React.FC<{ kind: Kind; name: string; stat?: string }> = ({
  kind,
  name,
  stat,
}) => {
  const k = KIND[kind];
  return (
    <div className="flex min-w-0 items-start gap-3 rounded-xl border border-gray-200 bg-white px-3.5 py-3 shadow-sm">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`mt-0.5 shrink-0 ${k.tone}`}
        aria-hidden
      >
        {k.icon}
      </svg>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span
            className={`text-[10px] font-semibold tracking-wide uppercase ${k.tone}`}
          >
            {kind}
          </span>
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-olive" />
        </div>
        <p className="truncate font-code text-xs text-dark">{name}</p>
        {stat && <p className="truncate text-[11px] text-gray-dark">{stat}</p>}
      </div>
    </div>
  );
};

/** A wire between two pieces, with traffic on it. */
const Wire: React.FC<{ dir: "h" | "v"; tone: string; begin?: string }> = ({
  dir,
  tone,
  begin = "0s",
}) => {
  const d = dir === "h" ? "M0 6 H40" : "M6 0 V28";
  return (
    <svg
      viewBox={dir === "h" ? "0 0 40 12" : "0 0 12 28"}
      className={`${dir === "h" ? "h-3 w-full" : "h-7 w-3"} overflow-visible ${tone}`}
      preserveAspectRatio="none"
      aria-hidden
    >
      <path d={d} fill="none" stroke="#d1d5db" strokeWidth="1.5" />
      <Traveller path={d} dur="2.2s" begin={begin} r={2.5} />
    </svg>
  );
};

export const Backend: React.FC = () => (
  <Wrap>
    <p className="mb-4 font-caveat text-xl text-dark md:text-2xl">
      "charge each customer monthly and email them their invoice"
    </p>
    <div className="grid grid-cols-[1fr_1.75rem_1fr_1.75rem_1fr] items-center">
      <Piece
        kind="endpoint"
        name="GET /invoices/:id"
        stat="1.2k requests · 24h"
      />
      <Wire dir="h" tone="text-blue-lbg" />
      <Piece kind="handler" name="Invoice.show" stat="reads Invoices" />
      <Wire dir="h" tone="text-blue-lbg" begin="0.7s" />
      <Piece kind="datastore" name="Invoices" stat="1,204 rows" />

      <div />
      <div />
      <div className="flex justify-center py-1">
        <Wire dir="v" tone="text-acc-green" begin="1.4s" />
      </div>
      <div />
      <div />

      <Piece kind="cron" name="monthly · 1st 06:00" stat="next in 6d" />
      <Wire dir="h" tone="text-acc-amber" begin="0.3s" />
      <Piece
        kind="handler"
        name="Invoice.chargeAll"
        stat="queues one per customer"
      />
      <Wire dir="h" tone="text-acc-amber" begin="1s" />
      <Piece kind="worker" name="Invoice.send" stat="charges, then emails" />

      <div />
      <div />
      <div />
      <div />
      <div className="flex justify-center py-1">
        <Wire dir="v" tone="text-gray-400" begin="0.5s" />
      </div>

      <div className="col-span-4 self-center pr-4 font-code text-xs text-gray-400">
        7 definitions, one store. nothing to install or wire.
      </div>
      <Piece kind="secret" name="STRIPE_KEY" stat="per instance" />
    </div>
    <Note className="mt-4">
      <Arrow dir="up-right" />
      each piece knows the others by name, so the wiring is the code
    </Note>
  </Wrap>
);

/* ------------------------------------------------------------------ */
/* 3. discoveries: a find becomes a proposed issue you decide on        */
/* ------------------------------------------------------------------ */

const DECISIONS = [
  {
    label: "dismiss",
    status: "dismissed",
    done: "dismissed. the branch is untouched.",
  },
  {
    label: "later",
    status: "scheduled",
    done: "scheduled. it keeps its code, test, and trace.",
  },
  {
    label: "hand off",
    status: "handed off",
    done: "agent-2 takes it on fix-refunds, with the evidence.",
  },
];

/** What the agent attached to the issue, as links into the code. */
const EVIDENCE = [
  { kind: "code", text: "Billing.total", tone: "text-purple-lbg" },
  { kind: "code", text: "Billing.refunds", tone: "text-purple-lbg" },
  { kind: "test", text: "totalTests · 1 failing", tone: "text-rust" },
  { kind: "trace", text: "4f2a1c · GET /invoices/1042", tone: "text-gray-700" },
];

/** One entry in the agent's session, as a coding agent's terminal shows it. */
type Entry =
  | { kind: "prompt"; text: string }
  | { kind: "say"; text: string; tone?: string }
  | { kind: "tool"; name: string; arg: string; out: string; tone?: string };

const SESSION: Entry[] = [
  {
    kind: "prompt",
    text: "charge each customer monthly and email them their invoice",
  },
  { kind: "tool", name: "Update", arg: "Invoice.build", out: "no type errors" },
  {
    kind: "tool",
    name: "Run",
    arg: "Invoice.build c_881",
    out: "total = 160.00, expected 180.00",
    tone: "text-[#e0897f]",
  },
  {
    kind: "say",
    text: "Found a bug in Billing.total. It's outside this task, so I'll file it as an issue and keep going.",
  },
  {
    kind: "tool",
    name: "ProposeIssue",
    arg: "Billing.total double-counts refunds",
    out: "proposed",
    tone: "text-[#b9a3f5]",
  },
  { kind: "tool", name: "Write", arg: "Invoice.send", out: "added" },
];

/** The entry the camera zooms in on. */
const ZOOM_ON = 3;

/** The ProposeIssue entry, which glows as its card pops out. */
const GLOW_ON = 4;

/**
 * The timeline: how many entries show, whether we're zoomed in on the
 * issue, whether its card is out, and how long the frame holds.
 */
const FRAMES = [
  { lines: 1, zoom: false, card: false, hold: 900 },
  { lines: 2, zoom: false, card: false, hold: 1000 },
  { lines: 3, zoom: false, card: false, hold: 1200 },
  { lines: 4, zoom: false, card: false, hold: 400 },
  { lines: 4, zoom: true, card: false, hold: 2200 },
  { lines: 5, zoom: false, card: false, hold: 600 },
  { lines: 5, zoom: false, card: true, glow: true, hold: 1400 },
  { lines: 6, zoom: false, card: true, hold: 0 },
];
const LOG_DONE = FRAMES.length;

/** Plays the agent's log once the example scrolls into view. */
const useAgentLog = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [run, setRun] = useState(0);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!seen) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setStep(LOG_DONE);
      return;
    }
    setStep(0);
    let at = 400;
    const timers = FRAMES.map((f, i) => {
      const t = window.setTimeout(() => setStep(i + 1), at);
      at += f.hold;
      return t;
    });
    return () => timers.forEach(t => window.clearTimeout(t));
  }, [seen, run]);

  return { ref, step, replay: () => setRun(r => r + 1) };
};

export const Discoveries: React.FC = () => {
  const [picked, setPicked] = useState<number | null>(null);
  const { ref, step, replay } = useAgentLog();
  const frame =
    step === 0
      ? { lines: 0, zoom: false, card: false, glow: false }
      : FRAMES[step - 1];
  const working = step < LOG_DONE;
  return (
    <Wrap>
      <div
        ref={ref}
        className="overflow-hidden rounded-xl border border-gray-800 bg-[#1e1e1e] shadow-lg"
      >
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-2 font-code text-[10px] text-gray-500">
            agent · add-invoices
          </span>
          {!working && (
            <button
              type="button"
              onClick={() => {
                setPicked(null);
                replay();
              }}
              className="ml-auto font-code text-[10px] text-gray-500 hover:text-gray-300"
            >
              ↻ replay
            </button>
          )}
        </div>
        <div className="relative min-h-[13rem] space-y-2 px-4 py-3 font-code text-[11px] leading-relaxed text-gray-300">
          {SESSION.slice(0, frame.lines).map((e, i) => (
            <div
              key={i}
              className={`relative animate-rise-in ${
                frame.zoom && i === ZOOM_ON ? "z-10" : ""
              }`}
            >
              <div
                className={`transition duration-500 ease-out ${
                  i === ZOOM_ON
                    ? // narrower than the line, so it still fits once scaled
                      `-ml-2 mr-[10%] origin-left rounded-lg px-2 py-1 ${
                        frame.zoom
                          ? "scale-110 bg-[#2a2a2a] shadow-xl ring-1 ring-white/15"
                          : ""
                      }`
                    : frame.zoom
                      ? "opacity-40 blur-[2px]"
                      : i === GLOW_ON
                        ? `-mx-2 rounded-md px-2 py-0.5 ${
                            "glow" in frame && frame.glow
                              ? "bg-purple-lbg/15 shadow-[0_0_16px_rgba(149,88,159,0.6)] ring-1 ring-purple-lbg/50"
                              : ""
                          }`
                        : ""
                }`}
              >
                {e.kind === "prompt" && (
                  <p className="rounded-md border border-white/10 px-2.5 py-1.5 text-gray-200">
                    <span className="text-gray-500">&gt; </span>
                    {e.text}
                  </p>
                )}
                {e.kind === "say" && (
                  <p className="flex gap-2">
                    <span className="shrink-0 text-gray-200">⏺</span>
                    <span className={e.tone ?? "text-gray-200"}>{e.text}</span>
                  </p>
                )}
                {e.kind === "tool" && (
                  <p className="flex flex-wrap gap-x-2">
                    <span className="shrink-0 text-acc-green">⏺</span>
                    <span>
                      <span className="font-semibold text-gray-100">
                        {e.name}
                      </span>
                      <span className="text-gray-400">({e.arg})</span>
                    </span>
                    <span className={e.tone ?? "text-gray-500"}>⎿ {e.out}</span>
                  </p>
                )}
              </div>
            </div>
          ))}
          {working && step > 0 && !frame.zoom && (
            <p className="flex items-center gap-2">
              <span className="animate-pulse text-acc-amber">✻</span>
              <span className="text-gray-500">working…</span>
            </p>
          )}
        </div>
      </div>

      <div
        className={`origin-top-left transition duration-500 ease-out ${
          frame.card
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-3 scale-95 opacity-0"
        }`}
        aria-hidden={!frame.card}
      >
        <div className="my-2 ml-6">
          <Arrow dir="down-right" />
        </div>

        <div
          className={`flex overflow-hidden rounded-2xl border-2 bg-white shadow-md transition ${
            picked === null
              ? "border-dashed border-purple-lbg/50"
              : picked === 0
                ? "border-gray-200 opacity-60"
                : "border-purple-lbg/60"
          }`}
        >
          <div className="flex w-9 shrink-0 flex-col items-center justify-between border-r-2 border-dashed border-purple-lbg/25 bg-purple-lbg/10 py-3">
            <span className="text-sm text-purple-lbg">✦</span>
            <span
              key={picked ?? -1}
              className="animate-rise-in font-code text-[10px] font-semibold tracking-widest text-purple-lbg uppercase [writing-mode:vertical-rl] rotate-180"
            >
              {picked === null ? "proposed" : DECISIONS[picked].status}
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <div className="px-4 pt-3 pb-2">
              <p className="font-code text-[10px] text-gray-light">
                found by agent · on add-invoices · while editing Invoice.build
              </p>
              <p
                className={`mt-1 text-sm font-semibold text-gray-900 ${
                  picked === 0 ? "line-through decoration-gray-400" : ""
                }`}
              >
                Billing.total double-counts refunded invoices
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {EVIDENCE.map(e => (
                  <span
                    key={e.text}
                    className="flex items-center gap-1 rounded-full border border-gray-200 bg-[#F9F9FB] px-2 py-0.5 font-code text-[10px]"
                  >
                    <span className="text-gray-light">{e.kind}</span>
                    <span className={e.tone}>{e.text}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 border-t border-dashed border-gray-200 px-3 py-2">
              {DECISIONS.map((d, i) => (
                <Choice
                  key={d.label}
                  on={picked === i}
                  onClick={() => setPicked(i)}
                  tone="bg-purple-lbg/15 text-purple-lbg"
                >
                  {d.label}
                </Choice>
              ))}
            </div>
            {picked !== null && (
              <p
                key={picked}
                className="animate-rise-in px-4 pb-2.5 font-code text-[11px] text-gray-600"
              >
                {DECISIONS[picked].done}
              </p>
            )}
          </div>
        </div>
      </div>
    </Wrap>
  );
};

/* ------------------------------------------------------------------ */
/* 4. context: what one question costs the context window, two ways  */
/* ------------------------------------------------------------------ */

type Load = { cmd: string; got: string; tokens: number };

const BY_FILES: Load[] = [
  { cmd: 'grep "total"', got: "41 matches", tokens: 900 },
  { cmd: "read billing.ts", got: "412 lines", tokens: 3400 },
  { cmd: "read invoice.ts", got: "1 caller", tokens: 2200 },
  { cmd: "read api.ts", got: "1 caller", tokens: 1900 },
  { cmd: "read export.ts", got: "1 caller", tokens: 1500 },
];

const BY_STORE: Load[] = [
  { cmd: "dark view Billing.total", got: "its type", tokens: 140 },
  { cmd: "dark deps Billing.total", got: "3 callers", tokens: 90 },
  { cmd: "dark view Billing.refunds", got: "its type", tokens: 110 },
];

const WINDOW = 12000;
const METER_H = 180;

const tokens = (n: number) =>
  n >= 1000 ? `${(n / 1000).toFixed(1)}k` : `${n}`;

/** One way of answering: the context window it fills, and what filled it. */
const ContextColumn: React.FC<{
  title: string;
  loads: Load[];
  good: boolean;
}> = ({ title, loads, good }) => {
  const used = loads.reduce((n, l) => n + l.tokens, 0);
  const left = Math.round(((WINDOW - used) / WINDOW) * 100);
  const accent = good ? "text-blue-lbg" : "text-rust";
  return (
    <div
      className={`min-w-0 rounded-2xl border p-4 ${
        good ? "border-blue-lbg/25 bg-blue-lbg/5" : "border-transparent"
      }`}
    >
      <p
        className={`mb-3 text-[10px] font-semibold tracking-wider uppercase ${
          good ? "text-blue-lbg" : "text-gray-500"
        }`}
      >
        {title}
      </p>
      <div className="flex gap-3">
        <div
          className="flex w-8 shrink-0 flex-col overflow-hidden rounded-md border-2 border-gray-300 bg-white"
          style={{ height: METER_H }}
        >
          {loads.map((l, i) => (
            <div
              key={l.cmd}
              className={`shrink-0 animate-rise-in border-b border-white ${
                good ? "bg-blue-lbg" : "bg-gray-300"
              }`}
              style={{
                height: Math.max(2, (l.tokens / WINDOW) * METER_H),
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
          <div className="flex flex-1 items-center justify-center bg-[repeating-linear-gradient(135deg,transparent_0_5px,rgba(0,0,0,0.04)_5px_7px)]">
            <span className={`font-code text-[9px] font-semibold ${accent}`}>
              task
            </span>
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-between">
          <ol className="space-y-1.5 font-code text-[11px]">
            {loads.map((l, i) => (
              <li
                key={l.cmd}
                className="flex animate-rise-in justify-between gap-2"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <span className="truncate text-gray-600">
                  {l.cmd} <span className="text-gray-400">· {l.got}</span>
                </span>
                <span
                  className={`shrink-0 tabular-nums ${good ? "text-blue-lbg/70" : "text-gray-400"}`}
                >
                  +{tokens(l.tokens)}
                </span>
              </li>
            ))}
          </ol>
          <p className="font-code text-[11px] text-gray-500">
            <span className={accent}>{left}% left for the task</span>
            <br />
            {tokens(used)} used
          </p>
        </div>
      </div>
    </div>
  );
};

export const Answers: React.FC = () => (
  <Wrap>
    <p className="mb-4 font-caveat text-xl text-dark md:text-2xl">
      "fix the refund bug in Billing.total"
    </p>
    <div className="grid gap-4 sm:grid-cols-2">
      <ContextColumn title="read the files" loads={BY_FILES} good={false} />
      <ContextColumn title="ask Darklang" loads={BY_STORE} good />
    </div>
    <Note className="mt-4">
      <Arrow dir="up-right" />
      same question. the files fill the window, the answers barely touch it.
    </Note>
  </Wrap>
);

/* ------------------------------------------------------------------ */
/* 5. blast radius: the callers as a tree, and the change running down it */
/* ------------------------------------------------------------------ */

/** One function in the graph, placed in percent of the drawing. */
type ImpactNode = {
  name: string;
  depth: 0 | 1 | 2;
  x: number;
  y: number;
  from?: string;
  pinned?: boolean;
};

const IMPACT: ImpactNode[] = [
  { name: "Billing.total", depth: 0, x: 13, y: 50 },
  { name: "Invoice.build", depth: 1, x: 48, y: 24, from: "Billing.total" },
  { name: "Api.balance", depth: 1, x: 48, y: 60, from: "Billing.total" },
  {
    name: "Legacy.statement",
    depth: 1,
    x: 48,
    y: 88,
    from: "Billing.total",
    pinned: true,
  },
  { name: "Invoice.chargeAll", depth: 2, x: 84, y: 12, from: "Invoice.build" },
  { name: "Invoice.show", depth: 2, x: 84, y: 36, from: "Invoice.build" },
  { name: "Dashboard.page", depth: 2, x: 84, y: 60, from: "Api.balance" },
];

/** Half a node's width, in percent, so edges meet the node's sides. */
const HALF = 11;

const impactStatus = (n: ImpactNode, changed: boolean) => {
  if (n.depth === 0)
    return changed
      ? {
          text: "Float → Amount",
          tone: "border-blue-lbg bg-blue-lbg text-white",
        }
      : {
          text: "about to change",
          tone: "border-blue-lbg bg-white text-blue-lbg",
        };
  if (n.pinned)
    return {
      text: changed ? "stays on a64ce1" : "pinned to a64ce1",
      tone: "border-dashed border-gray-300 bg-white text-gray-500",
    };
  if (!changed)
    return { text: "", tone: "border-gray-200 bg-white text-gray-600" };
  return n.depth === 1
    ? {
        text: "followed",
        tone: "border-blue-lbg/40 bg-blue-lbg/10 text-blue-lbg",
      }
    : {
        text: "rechecked · ok",
        tone: "border-acc-green/40 bg-acc-green/10 text-acc-green",
      };
};

export const Impact: React.FC = () => {
  const [changed, setChanged] = useState(false);
  const byName = Object.fromEntries(IMPACT.map(n => [n.name, n]));
  return (
    <Wrap>
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-blue-lbg/8 px-3 py-2 font-code text-xs">
        <span className="text-gray-700">
          <span className="text-blue-lbg">$</span> dark deps usedby
          Billing.total
        </span>
        <span className="text-blue-lbg/80">
          {IMPACT.length - 1} dependents, 2 levels
        </span>
      </div>

      <div className="-mx-1 mt-4 overflow-x-auto px-1">
        <div className="relative mb-1 h-4 min-w-[34rem] text-[9px] font-semibold tracking-wider text-gray-400 uppercase">
          {[
            { x: 13, text: "you change" },
            { x: 48, text: "used by" },
            { x: 84, text: "then used by" },
          ].map(h => (
            <span
              key={h.text}
              className="absolute -translate-x-1/2 whitespace-nowrap"
              style={{ left: `${h.x}%` }}
            >
              {h.text}
            </span>
          ))}
        </div>
        <div className="relative h-64 min-w-[34rem]">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            {IMPACT.filter(n => n.from).map(n => {
              const p = byName[n.from!];
              const x1 = p.x + HALF;
              const x2 = n.x - HALF;
              const mid = (x1 + x2) / 2;
              const d = `M${x1} ${p.y} C${mid} ${p.y}, ${mid} ${n.y}, ${x2} ${n.y}`;
              return (
                <g key={n.name}>
                  <path
                    d={d}
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                    strokeDasharray={n.pinned ? "4 4" : undefined}
                  />
                  {changed && !n.pinned && (
                    <path
                      d={d}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                      className={
                        n.depth === 1 ? "text-blue-lbg" : "text-acc-green"
                      }
                      pathLength={1}
                      strokeDasharray="1"
                      strokeDashoffset="1"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="1"
                        to="0"
                        dur="0.45s"
                        begin={`${(n.depth - 1) * 0.45}s`}
                        fill="freeze"
                      />
                    </path>
                  )}
                </g>
              );
            })}
          </svg>

          {IMPACT.map(n => {
            const st = impactStatus(n, changed);
            return (
              <div
                key={n.name}
                tabIndex={n.pinned ? 0 : undefined}
                aria-describedby={n.pinned ? "pinned-tip" : undefined}
                className={`absolute -translate-x-1/2 -translate-y-1/2 ${
                  n.pinned ? "group z-30 cursor-help outline-none" : ""
                }`}
                style={{
                  left: `${n.x}%`,
                  top: `${n.y}%`,
                  width: `${HALF * 2}%`,
                }}
              >
                {n.pinned && (
                  <span
                    aria-hidden
                    className="absolute -top-1.5 -right-1.5 z-10 flex h-4 w-4 items-center justify-center rounded-full border border-gray-300 bg-white text-[9px] text-gray-500 shadow-sm"
                  >
                    ?
                  </span>
                )}
                {n.pinned && (
                  <span
                    id="pinned-tip"
                    role="tooltip"
                    className={`pointer-events-none absolute bottom-0 left-full z-20 ml-3 w-44 rounded-lg bg-dark px-3 py-2 text-left text-[11px] leading-snug text-white shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 ${
                      changed ? "opacity-100 delay-700" : "opacity-0"
                    }`}
                  >
                    <span className="block font-semibold">Pinned</span>
                    Still uses the old Billing.total, so it keeps working
                    exactly as before. Move it over whenever you're ready.
                  </span>
                )}
                <div
                  key={`${changed}`}
                  className={`animate-rise-in rounded-lg border px-2 py-1.5 text-center shadow-sm transition ${st.tone}`}
                  style={{
                    animationDelay: changed ? `${n.depth * 0.45}s` : "0s",
                  }}
                >
                  <p
                    className={`truncate font-code text-[10px] ${
                      n.depth === 0 ? "font-semibold" : ""
                    } ${n.depth === 0 && changed ? "text-white" : "text-gray-800"}`}
                  >
                    {n.name}
                  </p>
                  {st.text && (
                    <p className="truncate text-[9px] font-semibold tracking-wider uppercase">
                      {st.text}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4">
        <Choice
          on={changed}
          onClick={() => setChanged(v => !v)}
          tone="bg-blue-lbg/15 text-blue-lbg"
        >
          {changed
            ? "↩ before the edit"
            : "change Billing.total to return Amount"}
        </Choice>
        <span className="flex flex-wrap gap-1.5 font-code text-[10px]">
          {changed ? (
            <>
              <span className="rounded-full bg-blue-lbg/10 px-2 py-0.5 text-blue-lbg">
                2 followed
              </span>
              <span className="rounded-full bg-acc-green/10 px-2 py-0.5 text-acc-green">
                3 rechecked
              </span>
              <span className="rounded-full border border-dashed border-gray-300 px-2 py-0.5 text-gray-500">
                1 stayed
              </span>
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-gray-600">
                0 type errors
              </span>
            </>
          ) : (
            <span className="text-gray-500">
              every caller, before you change a line
            </span>
          )}
        </span>
      </div>
      <Note className="mt-2">
        <Arrow dir="up-right" />
        {changed
          ? "that is the change report, written for you"
          : "your agent gets this same map before it edits anything"}
      </Note>
    </Wrap>
  );
};

/* ------------------------------------------------------------------ */
/* 6. versions: one shared function, and a switch per caller           */
/* ------------------------------------------------------------------ */

const OLD_V = { hash: "a64ce1", sig: "List<Line> -> Float" };
const NEW_V = { hash: "c91b40", sig: "List<Line> -> Amount" };

const CALLERS = [
  { name: "Invoice.build", why: "needs the new Amount type" },
  { name: "Api.balance", why: "shows the same amounts" },
  { name: "Legacy.statement", why: "must match last year's numbers" },
];

export const Versions: React.FC = () => {
  const [onNew, setOnNew] = useState<Record<string, boolean>>({
    "Invoice.build": true,
    "Api.balance": true,
    "Legacy.statement": false,
  });
  const moved = CALLERS.filter(c => onNew[c.name]).length;
  const stayed = CALLERS.length - moved;
  return (
    <Wrap>
      <p className="mb-2 text-[10px] font-semibold tracking-wider text-gray-light uppercase">
        you changed a shared function
      </p>
      <div className="rounded-xl border border-gray-200 bg-[#F9F9FB] px-4 py-3 font-code text-[12px] text-gray-700">
        <span className="text-purple-lbg">let</span>{" "}
        <span className="text-blue-lbg">total</span> (lines:{" "}
        <span className="text-gray-800">List&lt;Line&gt;</span>) :{" "}
        <span className="text-gray-400 line-through">Float</span>{" "}
        <span className="font-semibold text-rust">Amount</span>
        <p className="mt-1 text-[10px] text-gray-400">
          Billing.total · old version {OLD_V.hash} · new version{" "}
          <span className="text-rust">{NEW_V.hash}</span>
        </p>
      </div>

      <p className="mt-5 mb-2 text-[10px] font-semibold tracking-wider text-gray-light uppercase">
        each caller picks which version it runs
      </p>
      <ul className="space-y-2">
        {CALLERS.map(c => (
          <li
            key={c.name}
            className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm"
          >
            <span className="min-w-0">
              <span className="block font-code text-xs text-gray-800">
                {c.name}
              </span>
              <span className="block text-[10px] text-gray-500">{c.why}</span>
            </span>
            <span
              role="radiogroup"
              aria-label={`${c.name} runs`}
              className="flex shrink-0 rounded-lg bg-gray-100 p-0.5 font-code text-[10px]"
            >
              {[false, true].map(isNew => {
                const on = onNew[c.name] === isNew;
                return (
                  <button
                    key={String(isNew)}
                    type="button"
                    role="radio"
                    aria-checked={on}
                    onClick={() => setOnNew(o => ({ ...o, [c.name]: isNew }))}
                    className={`rounded-md px-2 py-1 transition ${
                      on
                        ? isNew
                          ? "bg-rust text-white shadow-sm"
                          : "bg-white text-gray-800 shadow-sm"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {isNew ? `new · ${NEW_V.hash}` : `old · ${OLD_V.hash}`}
                  </button>
                );
              })}
            </span>
          </li>
        ))}
      </ul>

      <p
        key={moved}
        className="mt-3 animate-rise-in font-code text-[11px] text-gray-500"
      >
        <span className="text-rust">
          {moved} moved, {stayed} still on the old version
        </span>{" "}
        · no need to move all {CALLERS.length} at once
      </p>
      <Note className="mt-3">
        <Arrow dir="up-right" />
        the old version keeps running for whoever still uses it
      </Note>
    </Wrap>
  );
};

/* ------------------------------------------------------------------ */
/* packages: a package's page, friendly first, with what it needs       */
/* ------------------------------------------------------------------ */

const NeedChip: React.FC<{ kind: string; what: string; tone?: "new" }> = ({
  kind,
  what,
  tone,
}) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-code text-[11px] ${
      tone === "new"
        ? "bg-acc-amber/10 text-acc-amber"
        : "bg-acc-teal/10 text-acc-teal"
    }`}
  >
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {REACH_ICON[kind]}
    </svg>
    {what}
  </span>
);

export const Packages: React.FC = () => {
  const [review, setReview] = useState(false);
  const [choice, setChoice] = useState<"stay" | "move" | null>(null);
  return (
    <Wrap>
      <Card>
        <div className="flex items-start gap-3.5 px-5 pt-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-acc-teal to-blue-lbg font-code text-[11px] font-bold text-white shadow-sm">
            MAIL
          </span>
          <div className="min-w-0">
            <p className="font-code text-sm font-semibold text-gray-900">
              Mail.send
            </p>
            <p className="text-[12px] text-gray-600">
              Sends email through the Mailkit API.
            </p>
            <p className="mt-1 flex flex-wrap gap-x-3 font-code text-[10px] text-gray-400">
              <span>by mailkit</span>
              <span>used by 3,410</span>
              <span>public · browse online</span>
            </p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-y border-gray-100 bg-[#F9F9FB] px-5 py-2.5">
          <code className="font-code text-[12px] text-gray-700">
            <span className="text-acc-teal">Mail.send</span> customer.email body
          </code>
          <span className="font-code text-[10px] text-gray-400">
            just call it · nothing to install
          </span>
        </div>

        <div className="px-5 pt-3">
          <p className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
            needs, read from its code
          </p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            <NeedChip kind="Http" what="POST api.mailkit.io/v3/send" />
            <NeedChip kind="EnvRead" what="MAILKIT_KEY" />
            <NeedChip kind="FileRead" what="/app/templates" />
          </div>
        </div>

        <div className="px-5 pt-4 pb-4">
          <p className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
            versions
          </p>
          <ul className="mt-1.5 divide-y divide-gray-100 rounded-xl border border-gray-200">
            <li className="px-3 py-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-code text-xs text-gray-900">8b41dd</span>
                <span className="text-[10px] text-gray-400">
                  newer · 2 days ago
                </span>
                {choice === null ? (
                  <button
                    type="button"
                    onClick={() => setReview(r => !r)}
                    className="ml-auto rounded-full border border-gray-200 px-2.5 py-0.5 text-[11px] text-gray-700 transition hover:border-gray-400"
                  >
                    {review ? "hide" : "review"}
                  </button>
                ) : (
                  <span className="ml-auto text-[11px] text-gray-500">
                    {choice === "move" ? "✓ moved to 8b41dd" : "skipped"}
                  </span>
                )}
              </div>
              <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] text-gray-500">also needs</span>
                <NeedChip
                  kind="DbRead"
                  what="your Customers table"
                  tone="new"
                />
                <NeedChip
                  kind="Http"
                  what="POST collect.mailkit.io"
                  tone="new"
                />
              </div>
              {review && choice === null && (
                <div className="mt-2 animate-rise-in">
                  <pre className="overflow-x-auto rounded-lg bg-[#F9F9FB] px-3 py-2 font-code text-[11px] leading-relaxed text-gray-600">
                    {"  Http.post mailkitUrl message\n"}
                    <span className="-mx-3 block bg-acc-amber/10 px-3 text-acc-amber">
                      {"+ Db.readAll Customers |> Mailkit.syncContacts"}
                    </span>
                  </pre>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    <button
                      type="button"
                      onClick={() => setChoice("stay")}
                      className="rounded-full bg-acc-teal px-3 py-1 text-[11px] font-medium text-white"
                    >
                      stay on 2f7a90
                    </button>
                    <button
                      type="button"
                      onClick={() => setChoice("move")}
                      className="rounded-full border border-gray-200 px-3 py-1 text-[11px] text-gray-600 hover:border-gray-400"
                    >
                      approve and move
                    </button>
                  </div>
                </div>
              )}
            </li>
            <li className="flex flex-wrap items-center gap-2 px-3 py-2.5">
              <span className="font-code text-xs text-gray-900">2f7a90</span>
              <span className="text-[10px] text-gray-400">approved</span>
              <span
                className={`ml-auto rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                  choice === "move"
                    ? "bg-gray-100 text-gray-400"
                    : "bg-acc-teal/10 text-acc-teal"
                }`}
              >
                {choice === "move" ? "previous" : "you're on this one"}
              </span>
            </li>
          </ul>
        </div>
      </Card>
      <Note className="mt-3">
        <Arrow dir="up-right" />
        {choice === "stay"
          ? "nothing changed. your code still points at 2f7a90."
          : choice === "move"
            ? "your call, made with the new need in plain sight"
            : "a new version is a new hash, and it shows what it now needs"}
      </Note>
    </Wrap>
  );
};

/* ------------------------------------------------------------------ */
/* 7. branches: two agents on one store, and a merge that keeps going   */
/* ------------------------------------------------------------------ */

const AGENTS = [
  {
    name: "agent-1",
    branch: "add-invoices",
    cmd: "dark --branch add-invoices fn Invoice.render",
    work: ["+ Invoice.render", "~ Billing.total"],
  },
  {
    name: "agent-2",
    branch: "fix-refunds",
    cmd: "dark --branch fix-refunds eval",
    work: ["~ Billing.refunds", "~ Billing.total"],
  },
];

/** A few rows of the one database both branches write to, per merge step. */
type StoreRow = {
  name: string;
  hash: string;
  where: string;
  faded?: boolean;
  /** Changed by the merge that led to this step: highlighted. */
  changed?: boolean;
  /** Won a conflict in that merge: highlighted red. */
  conflict?: boolean;
};

const STORE_STEPS: StoreRow[][] = [
  [
    { name: "Billing.total", hash: "c91b40", where: "main · current" },
    { name: "Billing.total", hash: "d4f7a2", where: "add-invoices" },
    { name: "Billing.total", hash: "9e02d7", where: "fix-refunds" },
    { name: "Billing.refunds", hash: "b2c418", where: "fix-refunds" },
    { name: "Invoice.render", hash: "51ab3c", where: "add-invoices" },
  ],
  [
    {
      name: "Billing.total",
      hash: "d4f7a2",
      where: "main · current",
      changed: true,
    },
    { name: "Billing.total", hash: "9e02d7", where: "fix-refunds" },
    { name: "Billing.refunds", hash: "b2c418", where: "fix-refunds" },
    {
      name: "Invoice.render",
      hash: "51ab3c",
      where: "main · current",
      changed: true,
    },
    {
      name: "Billing.total",
      hash: "c91b40",
      where: "main · previous",
      faded: true,
    },
  ],
  [
    {
      name: "Billing.total",
      hash: "9e02d7",
      where: "main · current",
      conflict: true,
    },
    { name: "Invoice.render", hash: "51ab3c", where: "main · current" },
    {
      name: "Billing.refunds",
      hash: "b2c418",
      where: "main · current",
      changed: true,
    },
    {
      name: "Billing.total",
      hash: "d4f7a2",
      where: "saved from the conflict",
      faded: true,
    },
    {
      name: "Billing.total",
      hash: "c91b40",
      where: "main · previous",
      faded: true,
    },
  ],
];

/**
 * The merges, one line each: the table above already shows what moved, so
 * the result only says what the merge decided.
 */
const MERGES = [
  {
    branch: "add-invoices",
    title: "Merged add-invoices, no conflicts",
    tone: "text-acc-green",
    body: "",
  },
  {
    branch: "fix-refunds",
    title: "1 conflict: Billing.total",
    tone: "text-purple-lbg",
    body: "Both branches changed it. The newer version, from fix-refunds, is now current. The other is saved, so you can switch with dark conflicts.",
  },
];

const MERGE_NOTES = [
  "both agents changed Billing.total. merge them into main, one after the other.",
  "the first merge had nothing to decide.",
  "the second found the overlap, kept one version, recorded the other, and finished.",
];

/** Each agent's branch gets its own color, carried into the database rows. */
const BRANCH_TONE: Record<
  string,
  { text: string; dot: string; border: string }
> = {
  "add-invoices": {
    text: "text-blue-lbg",
    dot: "bg-blue-lbg",
    border: "border-blue-lbg/40",
  },
  "fix-refunds": {
    text: "text-acc-amber",
    dot: "bg-acc-amber",
    border: "border-acc-amber/40",
  },
};

/** Which branch wrote each version. */
const HASH_FROM: Record<string, string> = {
  d4f7a2: "add-invoices",
  "9e02d7": "fix-refunds",
  "51ab3c": "add-invoices",
  b2c418: "fix-refunds",
};

export const Branches: React.FC = () => {
  const [step, setStep] = useState(0);
  const drop = ["M60 0 V 40", "M420 0 V 40"];
  return (
    <Wrap>
      <div className="grid grid-cols-2 gap-4">
        {AGENTS.map(a => (
          <div
            key={a.name}
            className={`rounded-xl border bg-white p-3 shadow-sm ${BRANCH_TONE[a.branch].border}`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`text-xs font-semibold ${BRANCH_TONE[a.branch].text}`}
              >
                {a.name}
              </span>
              <span className="flex items-center gap-1 text-[10px] text-gray-dark">
                <span
                  className={`h-1.5 w-1.5 animate-pulse rounded-full ${BRANCH_TONE[a.branch].dot}`}
                />
                on {a.branch}
              </span>
            </div>
            <p className="mt-2 truncate font-code text-[10px] text-gray-400">
              $ {a.cmd}
            </p>
            <div
              className={`mt-2 space-y-0.5 font-code text-[11px] ${BRANCH_TONE[a.branch].text}`}
            >
              {a.work.map(w => (
                <p
                  key={w}
                  className={w.includes("total") ? "font-semibold" : ""}
                >
                  {w}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 480 40" className="w-full" aria-hidden>
        {drop.map(d => (
          <path key={d} d={d} stroke="#e5e7eb" strokeWidth="1.5" />
        ))}
        <g className="text-blue-lbg">
          <Traveller path={drop[0]} dur="1.6s" r={2.5} />
        </g>
        <g className="text-acc-amber">
          <Traveller path={drop[1]} dur="1.6s" begin="0.8s" r={2.5} />
        </g>
      </svg>
      <div className="relative">
        <div className="overflow-hidden rounded-xl border border-purple-lbg/30 bg-white">
          <div className="flex items-center gap-2.5 border-b border-purple-lbg/20 bg-purple-lbg/5 px-3 py-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="shrink-0 text-purple-lbg"
              aria-hidden
            >
              <ellipse cx="12" cy="6" rx="7" ry="3" />
              <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
            </svg>
            <span className="font-code text-xs font-semibold text-purple-lbg">
              data.db
            </span>
            <span className="ml-auto text-[10px] text-gray-500">
              one database · no files, no checkouts
            </span>
          </div>
          <table className="w-full font-code text-[10px]">
            <thead className="text-left text-gray-400">
              <tr>
                <th className="px-3 pt-1.5 font-normal">definition</th>
                <th className="px-3 pt-1.5 font-normal">version</th>
                <th className="px-3 pt-1.5 font-normal">where</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {STORE_STEPS[step].map(r => (
                <tr
                  key={`${step}-${r.hash}`}
                  className={`animate-rise-in transition-colors ${
                    r.conflict
                      ? "bg-rust/10 font-semibold"
                      : r.changed
                        ? "bg-purple-lbg/10"
                        : ""
                  } ${
                    r.faded
                      ? "text-gray-300"
                      : r.where.startsWith("main")
                        ? "text-gray-700"
                        : (BRANCH_TONE[r.where]?.text ?? "text-gray-700")
                  }`}
                >
                  <td
                    className={`px-3 py-0.5 ${
                      r.conflict
                        ? "shadow-[inset_3px_0_0_#bf6360]"
                        : r.changed
                          ? "shadow-[inset_3px_0_0_#95589f]"
                          : ""
                    }`}
                  >
                    {r.name}
                  </td>
                  <td className="px-3 py-0.5">
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          HASH_FROM[r.hash]
                            ? BRANCH_TONE[HASH_FROM[r.hash]].dot
                            : "bg-gray-300"
                        } ${r.faded ? "opacity-40" : ""}`}
                      />
                      {r.hash}
                    </span>
                  </td>
                  <td className="px-3 py-0.5">{r.where}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={3} className="p-0">
                  {step === 0 ? (
                    <p className="px-3 pt-0.5 pb-1.5 text-gray-300">
                      … 1,812 more rows
                    </p>
                  ) : (
                    <div
                      key={step}
                      role="status"
                      className="mt-1 animate-rise-in border-t border-gray-200 bg-gray-50 px-3 py-2 font-sans text-[11px] leading-snug"
                    >
                      <p
                        className={`font-semibold ${step === 2 ? "text-rust" : "text-gray-700"}`}
                      >
                        {MERGES[step - 1].title}
                      </p>
                      {MERGES[step - 1].body && (
                        <p className="mt-0.5 text-gray-600">
                          {MERGES[step - 1].body}
                        </p>
                      )}
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2 font-code text-xs">
        {MERGES.map((m, i) => {
          const done = step > i;
          const next = step === i;
          return (
            <button
              key={m.branch}
              type="button"
              disabled={!next}
              onClick={() => setStep(i + 1)}
              className={`rounded-md px-2.5 py-1 transition ${
                next
                  ? "bg-purple-lbg/15 text-purple-lbg hover:bg-purple-lbg/25"
                  : done
                    ? "text-gray-500"
                    : "text-gray-300"
              }`}
            >
              {done ? "✓" : `${i + 1}.`} $ dark merge {m.branch}
            </button>
          );
        })}
        {step === MERGES.length && (
          <button
            type="button"
            onClick={() => setStep(0)}
            className="ml-auto text-[11px] text-gray-400 hover:text-gray-600"
          >
            ↩ start over
          </button>
        )}
      </div>
      <Note className="mt-2">
        <Arrow dir="up-right" />
        {MERGE_NOTES[step]}
      </Note>
    </Wrap>
  );
};

/* ------------------------------------------------------------------ */
/* 8. tracing: the failing request, then the same input replayed        */
/* ------------------------------------------------------------------ */

/** One recorded call: what went in, what came out, and how deep it ran. */
type Call = {
  fn: string;
  args: string;
  res: string;
  ms: number;
  depth?: 1;
  flag?: "wrong" | "twice";
};

const RUN_BEFORE: Call[] = [
  {
    fn: "Invoices.find",
    args: "1042",
    res: "Some { customer = c_881; lines = [200.00; -20.00] }",
    ms: 2,
  },
  {
    fn: "Billing.total",
    args: "[200.00; -20.00]",
    res: "160.00",
    ms: 0,
    flag: "wrong",
  },
  {
    fn: "List.sum",
    args: "[200.00; -20.00]",
    res: "180.00",
    ms: 0,
    depth: 1,
  },
  {
    fn: "Billing.refunds",
    args: "180.00 [-20.00]",
    res: "160.00",
    ms: 0,
    depth: 1,
    flag: "twice",
  },
];

const RUN_AFTER: Call[] = [
  RUN_BEFORE[0],
  { fn: "Billing.total", args: "[200.00; -20.00]", res: "180.00", ms: 0 },
  RUN_BEFORE[2],
];

export const Tracing: React.FC = () => {
  const [replayed, setReplayed] = useState(false);
  const calls = replayed ? RUN_AFTER : RUN_BEFORE;
  return (
    <Wrap>
      <Card>
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-2.5 font-code text-xs">
          <span className="text-gray-700">
            <span className="text-acc-amber">GET</span> /invoices/1042
          </span>
          <span className="text-gray-light">trace 4f2a1c · today 06:02</span>
        </div>
        <div className="px-5 py-4">
          <p className="font-code text-[11px] text-gray-500">
            request {"{ id = 1042 }"} · response{" "}
            <span className={replayed ? "text-acc-green" : "text-rust"}>
              {replayed ? "180.00" : "160.00"}
            </span>
          </p>
          <ol
            key={String(replayed)}
            className="mt-3 animate-rise-in space-y-1.5 font-code text-[11px]"
          >
            {calls.map((c, i) => (
              <li
                key={`${c.fn}-${i}`}
                className={`rounded-md px-2 py-1 ${c.depth ? "ml-6 border-l-2 border-gray-100" : ""} ${
                  c.flag === "twice" ? "bg-rust/10" : ""
                }`}
              >
                <div className="flex items-baseline gap-2">
                  <span className="min-w-0 truncate">
                    <span className="text-gray-800">{c.fn}</span>{" "}
                    <span className="text-gray-400">{c.args}</span>
                  </span>
                  <span className="ml-auto shrink-0 text-[10px] text-gray-300">
                    {c.ms}ms
                  </span>
                </div>
                <p
                  className={`truncate pl-3 ${
                    c.flag ? "font-semibold text-rust" : "text-gray-500"
                  }`}
                >
                  → {c.res}
                  {c.flag === "twice" && (
                    <span className="ml-2 font-normal">
                      the sum already took it off
                    </span>
                  )}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 bg-[#F9F9FB] px-5 py-3">
          <Choice
            on={replayed}
            onClick={() => setReplayed(v => !v)}
            tone="bg-acc-amber/15 text-acc-amber"
          >
            {replayed ? "↩ the original run" : "$ dark traces replay 4f2a1c"}
          </Choice>
          <span className="font-code text-[11px] text-gray-500">
            {replayed
              ? "same request, current code"
              : `${RUN_BEFORE.length} calls, each with inputs and result`}
          </span>
        </div>
      </Card>
      <Note className="mt-3">
        <Arrow dir="up-right" />
        {replayed
          ? "fixed, and proven on the request that broke"
          : "the refund was already in the sum, then came off again. no logging needed to see it."}
      </Note>
    </Wrap>
  );
};

/* ------------------------------------------------------------------ */
/* 9. access: a permissions sheet for one function, deny by default     */
/* ------------------------------------------------------------------ */

const REACH_ICON: Record<string, React.ReactNode> = {
  DbRead: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
    </>
  ),
  Http: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18" />
    </>
  ),
  FileRead: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4M9 12h6M9 16h6" />
    </>
  ),
  FileWrite: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4M12 11v6M9 14h6" />
    </>
  ),
  EnvRead: (
    <>
      <circle cx="8" cy="12" r="4" />
      <path d="M12 12h9M18 12v3M15 12v2" />
    </>
  ),
};

/** One of the four places a rule can live; access is where all four agree. */
type Layer = "instance" | "run" | "package" | "function";

const LAYER_OWNER: Record<Layer, string> = {
  instance: "this machine",
  run: "whoever started it",
  package: "your approval",
  function: "its author",
};

/** How one layer answered: allowed, denied, not a package, or never asked. */
type Check = { rule: string; result: "ok" | "deny" | "skip" | "unreached" };

/** A request the code makes, and each layer's answer to it. */
type Req = {
  kind: "Http" | "FileWrite";
  what: string;
  via: string;
  checks: Record<Layer, Check>;
  why?: string;
  fix?: string;
};

const INSTANCE_HTTP = "http * https://*.stripe.com";

const REQUESTS: Req[] = [
  {
    kind: "Http",
    what: "POST api.stripe.com/v1/charges",
    via: "Stripe.charge @3d8e52",
    checks: {
      instance: { rule: INSTANCE_HTTP, result: "ok" },
      run: { rule: "http POST *", result: "ok" },
      package: {
        rule: "Stripe.charge approved, for POST …/v1/charges",
        result: "ok",
      },
      function: { rule: "Stripe.charge :{Http}", result: "ok" },
    },
  },
  {
    kind: "Http",
    what: "POST api.stripe.com/v1/refunds",
    via: "Stripe.refund @3d8e52",
    checks: {
      instance: { rule: INSTANCE_HTTP, result: "ok" },
      run: { rule: "http POST *", result: "ok" },
      package: { rule: "Stripe.refund is not approved", result: "deny" },
      function: { rule: "Stripe.refund :{Http}", result: "unreached" },
    },
    why: "you approved Stripe.charge, not Stripe.refund",
    fix: "dark permissions approve Stripe.refund http POST https://api.stripe.com/v1/refunds",
  },
  {
    kind: "Http",
    what: "GET files.stripe.com/receipts/1042",
    via: "Stripe.receipt @3d8e52",
    checks: {
      instance: { rule: `${INSTANCE_HTTP} (subdomain)`, result: "ok" },
      run: { rule: "http POST * (POST only)", result: "deny" },
      package: { rule: "", result: "unreached" },
      function: { rule: "", result: "unreached" },
    },
    why: "the machine allows it, but this run was only given POST",
  },
  {
    kind: "Http",
    what: "POST telemetry.pdfkit.io/v1/events",
    via: "Pdf.render @9c1e04 · newer",
    checks: {
      instance: { rule: "no rule for pdfkit.io", result: "deny" },
      run: { rule: "", result: "unreached" },
      package: { rule: "", result: "unreached" },
      function: { rule: "", result: "unreached" },
    },
    why: "nothing on this machine allows that host",
    fix: "dark permissions allow http POST https://telemetry.pdfkit.io",
  },
  {
    kind: "FileWrite",
    what: "/app/invoices/1042.pdf",
    via: "Invoice.send · your code",
    checks: {
      instance: { rule: "file write /app/invoices", result: "ok" },
      run: { rule: "file write /app", result: "ok" },
      package: { rule: "your own code, not a package", result: "skip" },
      function: { rule: "Invoice.send :{Http, FileWrite}", result: "ok" },
    },
  },
];

const allowed = (r: Req) =>
  Object.values(r.checks).every(c => c.result === "ok" || c.result === "skip");
const stoppedAt = (r: Req) =>
  (Object.keys(r.checks) as Layer[]).find(l => r.checks[l].result === "deny");

const LAYERS: Layer[] = ["instance", "run", "package", "function"];

export const Access: React.FC = () => {
  const [picked, setPicked] = useState(1);
  const [lit, setLit] = useState(false);
  const [run, setRun] = useState(0);
  const sel = REQUESTS[picked];
  const ok = allowed(sel);
  const stop = stoppedAt(sel);
  const stopIdx = stop ? LAYERS.indexOf(stop) : LAYERS.length;

  // on each pick the gates go dark, then light up one after another
  useEffect(() => {
    setLit(false);
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setLit(true)),
    );
    return () => cancelAnimationFrame(id);
  }, [run]);

  return (
    <Wrap>
      <p className="mb-2 text-[10px] font-semibold tracking-wider text-gray-light uppercase">
        pick a request
      </p>
      <ul className="space-y-1">
        {REQUESTS.map((r, i) => {
          const on = allowed(r);
          const active = picked === i;
          return (
            <li key={r.what}>
              <button
                type="button"
                onClick={() => {
                  // go dark in the same render as the new pick, so the old
                  // colors never flash and nothing fades back first
                  setLit(false);
                  setPicked(i);
                  setRun(r => r + 1);
                }}
                aria-pressed={active}
                className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-left transition ${
                  active ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-gray-400"
                  aria-hidden
                >
                  {REACH_ICON[r.kind]}
                </svg>
                <span className="min-w-0 flex-1 truncate font-code text-[11px] text-gray-800">
                  {r.what}
                </span>
                <span className="hidden shrink-0 font-code text-[10px] text-gray-400 sm:inline">
                  {r.via}
                </span>
                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white ${
                    on ? "bg-acc-green" : "bg-rust"
                  }`}
                >
                  {on ? "✓" : "✕"}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="-mx-1 mt-5 overflow-x-auto px-1">
        <div className="min-w-[30rem]">
          <div className="grid grid-cols-4 gap-2">
            {LAYERS.map((l, i) => {
              const c = sel.checks[l];
              const denied = c.result === "deny";
              const reached = i <= stopIdx;
              const tone = !lit
                ? "border-gray-200 bg-white"
                : denied
                  ? "border-rust bg-rust/10 shadow-[0_0_14px_rgba(191,99,96,0.35)]"
                  : !reached
                    ? "border-dashed border-gray-200 bg-white opacity-40"
                    : c.result === "skip"
                      ? "border-gray-300 bg-gray-50"
                      : "border-acc-green bg-acc-green/10 shadow-[0_0_14px_rgba(111,154,61,0.3)]";
              return (
                <div
                  key={l}
                  className={`rounded-xl border px-2.5 py-2 ${
                    lit ? "transition-all duration-300" : "transition-none"
                  } ${tone}`}
                  style={{ transitionDelay: lit ? `${i * 0.18}s` : "0s" }}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[11px] font-semibold text-gray-800">
                      {l}
                    </span>
                    {reached && (
                      <span
                        className={`text-[11px] font-bold ${
                          denied
                            ? "text-rust"
                            : c.result === "skip"
                              ? "text-gray-300"
                              : "text-acc-green"
                        }`}
                      >
                        {denied ? "✕" : c.result === "skip" ? "–" : "✓"}
                      </span>
                    )}
                  </div>
                  <p className="text-[9px] text-gray-400">{LAYER_OWNER[l]}</p>
                  <p className="mt-1 line-clamp-2 font-code text-[9px] leading-snug text-gray-600">
                    {reached ? c.rule : "not checked"}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        key={picked}
        className="mt-3 animate-rise-in font-code text-[11px] leading-relaxed"
      >
        {ok ? (
          <p className="text-acc-green">
            ✓ all four said yes, so it goes through
          </p>
        ) : (
          <>
            <p className="text-rust">✕ {sel.why}</p>
            {sel.fix && (
              <p className="truncate text-gray-400">
                to allow: <span className="text-gray-600">{sel.fix}</span>
              </p>
            )}
          </>
        )}
      </div>
      <Note className="mt-2">
        <Arrow dir="up-right" />
        machine, run, package, function: every request needs a yes from all four
      </Note>
    </Wrap>
  );
};

/* ------------------------------------------------------------------ */
/* 10. cleanup: what the change left behind                             */
/* ------------------------------------------------------------------ */

/** What the change left behind, each with the one action that clears it. */
const LEFTOVERS = [
  {
    name: "Invoice.formatLegacy",
    kind: "unused",
    why: "0 callers since this change",
    action: "delete",
    done: "deleted",
  },
  {
    name: "Invoice.roundCents",
    kind: "copied",
    why: "same code as Amount.round",
    action: "use Amount.round",
    done: "replaced",
  },
  {
    name: "Admin.export",
    kind: "left behind",
    why: "still on Billing.total a64ce1, not pinned",
    action: "move to c91b40",
    done: "moved",
  },
  {
    name: "Invoice.buildTests",
    kind: "stale test",
    why: "still checks the old Float total",
    action: "update",
    done: "updated",
  },
];

/** A small glyph per kind of leftover. */
const LEFTOVER_ICON: Record<string, React.ReactNode> = {
  unused: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="m6.5 17.5 11-11" />
    </>
  ),
  copied: (
    <>
      <rect x="8" y="8" width="11" height="11" rx="2" />
      <path d="M5 15V6a1 1 0 0 1 1-1h9" />
    </>
  ),
  "left behind": (
    <>
      <path d="M4 12a8 8 0 1 0 2.3-5.6L4 8.7" />
      <path d="M4 4v4.7h4.7M12 8v4l2.5 2" />
    </>
  ),
  "stale test": (
    <>
      <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3" />
      <path d="M7.5 15h9" />
    </>
  ),
};

export const Cleanup: React.FC = () => {
  const [gone, setGone] = useState<string[]>([]);
  const left = LEFTOVERS.length - gone.length;
  const clean = left === 0;
  return (
    <Wrap>
      <Card>
        <div className="flex items-center justify-between gap-3 border-b border-gray-100 px-5 py-3">
          <span className="font-code text-xs text-gray-700">
            $ dark commit · <span className="text-rust">add-invoices</span>
          </span>
          <span
            key={left}
            className={`animate-rise-in rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase ${
              clean
                ? "bg-acc-green/10 text-acc-green"
                : "bg-acc-amber/10 text-acc-amber"
            }`}
          >
            {clean ? "clean" : `${left} left behind`}
          </span>
        </div>

        <ul className="divide-y divide-gray-100">
          {LEFTOVERS.map(l => {
            const done = gone.includes(l.name);
            return (
              <li key={l.name} className="flex items-center gap-3 px-5 py-2.5">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                    done
                      ? "bg-acc-green/10 text-acc-green"
                      : "bg-acc-amber/10 text-acc-amber"
                  }`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    {done ? <path d="m5 12 5 5 9-10" /> : LEFTOVER_ICON[l.kind]}
                  </svg>
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={`block truncate font-code text-xs ${
                      done ? "text-gray-400 line-through" : "text-gray-800"
                    }`}
                  >
                    {l.name}
                  </span>
                  <span className="block truncate text-[11px] text-gray-500">
                    <span className={done ? "" : "text-acc-amber"}>
                      {l.kind}
                    </span>{" "}
                    · {l.why}
                  </span>
                </span>
                {done ? (
                  <span className="shrink-0 animate-rise-in font-code text-[11px] text-acc-green">
                    {l.done}
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => setGone(g => [...g, l.name])}
                    className="shrink-0 rounded-full border border-gray-200 px-3 py-1 font-code text-[11px] text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
                  >
                    {l.action}
                  </button>
                )}
              </li>
            );
          })}
          <li className="flex items-center gap-3 px-5 py-2.5 text-gray-400">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M12 17v5M9 3h6l-1 7 4 3v2H6v-2l4-3z" />
              </svg>
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate font-code text-xs">
                Legacy.statement
              </span>
              <span className="block truncate text-[11px]">
                pinned to a64ce1 on purpose · not a leftover
              </span>
            </span>
          </li>
        </ul>

        <div className="flex items-center gap-3 border-t border-gray-100 bg-[#F9F9FB] px-5 py-3">
          <span className="flex-1 font-code text-[11px] text-gray-500">
            {clean
              ? "ready to commit"
              : `${gone.length} of ${LEFTOVERS.length} cleaned`}
          </span>
          <span
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium transition ${
              clean ? "bg-acc-green text-white" : "bg-gray-200 text-gray-400"
            }`}
          >
            commit
          </span>
        </div>
      </Card>
      <Note className="mt-3">
        <Arrow dir="up-right" />
        {clean
          ? "clean commit. each fix was the right kind, not a guess."
          : "darklang knows who calls what, so it knows what's left over"}
      </Note>
    </Wrap>
  );
};

/* ------------------------------------------------------------------ */
/* 11. review: two decisions for you, the rest already checked          */
/* ------------------------------------------------------------------ */

/** The change, grouped by what each part is for, not by file. */
const REVIEW_GROUPS = [
  {
    title: "Invoices, built and sent",
    items: [
      { kind: "type", name: "Invoice", note: "new" },
      { kind: "fn", name: "Invoice.build", note: "updated" },
      { kind: "fn", name: "Invoice.render", note: "new" },
      { kind: "fn", name: "Invoice.send", note: "new" },
    ],
    access: "+ Http POST api.stripe.com/v1/charges · + FileWrite /app/invoices",
  },
  {
    title: "Totals become Amount, not Float",
    items: [
      { kind: "fn", name: "Billing.total", note: "Float → Amount" },
      { kind: "type", name: "Amount", note: "new" },
    ],
    access: "",
  },
];

/** Changes nobody wrote on purpose: they followed what they depend on. */
const FOLLOWED = [
  { name: "Invoice.show", why: "calls Billing.total" },
  { name: "Api.balance", why: "calls Billing.total" },
  { name: "Invoice.chargeAll", why: "calls Invoice.build" },
];

const Tick: React.FC<{ on: boolean }> = ({ on }) => (
  <span
    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[11px] transition ${
      on
        ? "border-acc-pink bg-acc-pink text-white"
        : "border-gray-300 bg-white text-transparent"
    }`}
    aria-hidden
  >
    ✓
  </span>
);

export const Review: React.FC = () => {
  const [ok, setOk] = useState<boolean[]>(REVIEW_GROUPS.map(() => false));
  const [open, setOpen] = useState(false);
  const [fix, setFix] = useState<"ready" | "taken" | "dropped">("ready");
  const [undo, setUndo] = useState(false);
  const left = ok.filter(v => !v).length;
  return (
    <Wrap>
      <Card>
        <div className="border-b border-gray-100 px-5 py-3">
          <div className="flex items-center justify-between gap-3 font-code text-[11px]">
            <span className="text-gray-500">
              review · <span className="text-acc-pink">add-invoices</span>
            </span>
            <span className="text-gray-400">by agent-1</span>
          </div>
          <p className="mt-1 text-sm font-semibold text-gray-900">
            Charge each customer monthly and email their invoice
          </p>
        </div>

        <div className="space-y-2 px-5 pt-3 pb-2">
          <p className="text-[10px] font-bold tracking-[0.08em] text-gray-400 uppercase">
            what it does · you decide
          </p>
          {REVIEW_GROUPS.map((g, i) => (
            <button
              key={g.title}
              type="button"
              onClick={() => setOk(x => x.map((v, j) => (j === i ? !v : v)))}
              aria-pressed={ok[i]}
              className={`flex w-full items-start gap-3 rounded-xl border px-3 py-2.5 text-left transition ${
                ok[i]
                  ? "border-acc-pink/40 bg-acc-pink/5"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <span className="mt-0.5">
                <Tick on={ok[i]} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[13px] font-semibold text-gray-900">
                  {g.title}
                </span>
                <span className="mt-1 flex flex-wrap gap-1.5">
                  {g.items.map(it => (
                    <span
                      key={it.name}
                      className="inline-flex items-center gap-1 rounded-md bg-gray-100 px-1.5 py-0.5 font-code text-[10px] text-gray-700"
                    >
                      <span className="text-[8px] tracking-wider text-gray-400 uppercase">
                        {it.kind}
                      </span>
                      {it.name}
                      <span className="text-gray-400">· {it.note}</span>
                    </span>
                  ))}
                </span>
                {g.access && (
                  <span className="mt-1.5 block font-code text-[10px] text-acc-amber">
                    permissions {g.access}
                  </span>
                )}
              </span>
            </button>
          ))}
          <button
            type="button"
            onClick={() => setUndo(v => !v)}
            aria-expanded={undo}
            className="font-code text-[10px] text-gray-400 hover:text-gray-600"
          >
            ↶ undo "Totals become Amount"
          </button>
          {undo && (
            <p className="animate-rise-in rounded-lg bg-gray-50 px-3 py-2 text-[11px] text-gray-600">
              Reverts Billing.total, Amount, and the 2 changes that followed
              them (Invoice.show, Api.balance). The invoices stay.
            </p>
          )}
        </div>

        <div className="px-5 pb-3">
          <button
            type="button"
            onClick={() => setOpen(v => !v)}
            aria-expanded={open}
            className="flex w-full items-center gap-3 rounded-xl bg-[#F9F9FB] px-3 py-2 text-left"
          >
            <Tick on />
            <span className="min-w-0 flex-1 text-[12px] text-gray-600">
              <span className="font-semibold text-gray-800">
                {FOLLOWED.length} followed on their own
              </span>{" "}
              · approved together, type-checked
            </span>
            <span className="font-code text-[10px] text-gray-400">
              {open ? "hide" : "show"}
            </span>
          </button>
          {open && (
            <ul className="mt-1 animate-rise-in space-y-0.5 pl-11 font-code text-[10px] text-gray-500">
              {FOLLOWED.map(f => (
                <li key={f.name}>
                  <span className="text-gray-700">{f.name}</span> · {f.why}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-gray-100 px-5 py-3">
          <p className="text-[12px] text-gray-700">
            <span className="font-semibold">You:</span> what if the charge fails
            in Invoice.send?
          </p>
          <div
            className={`mt-2 rounded-xl border px-3 py-2 transition ${
              fix === "taken"
                ? "border-acc-green/40 bg-acc-green/5"
                : fix === "dropped"
                  ? "border-gray-200 opacity-50"
                  : "border-acc-pink/30 bg-acc-pink/5"
            }`}
          >
            <p className="flex flex-wrap items-baseline justify-between gap-2 font-code text-[10px]">
              <span className="text-gray-500">
                agent-1 · fix on agent/charge-retry
              </span>
              <span
                className={
                  fix === "taken"
                    ? "text-acc-green"
                    : fix === "dropped"
                      ? "text-gray-400"
                      : "text-acc-pink"
                }
              >
                {fix === "taken"
                  ? "taken into add-invoices"
                  : fix === "dropped"
                    ? "dropped"
                    : "fix ready"}
              </span>
            </p>
            <p className="mt-1 font-code text-[11px] text-gray-700">
              + | Error e -&gt; Invoice.retryLater invoice e
            </p>
            {fix === "ready" && (
              <div className="mt-1.5 flex gap-1.5">
                <button
                  type="button"
                  onClick={() => setFix("taken")}
                  className="rounded-md bg-acc-pink px-2.5 py-0.5 text-[11px] font-medium text-white"
                >
                  take fix
                </button>
                <button
                  type="button"
                  onClick={() => setFix("dropped")}
                  className="rounded-md px-2.5 py-0.5 text-[11px] text-gray-500 hover:bg-gray-100"
                >
                  drop
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 border-t border-gray-100 px-5 py-2.5 font-code text-[10px]">
          <span className="rounded-full bg-acc-green/10 px-2 py-0.5 text-acc-green">
            0 type errors
          </span>
          <span className="rounded-full bg-acc-green/10 px-2 py-0.5 text-acc-green">
            12 tests passed
          </span>
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-gray-600">
            trace 2b91e0
          </span>
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-gray-600">
            Legacy.statement stays on a64ce1
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 bg-[#F9F9FB] px-5 py-3">
          <span className="font-code text-[11px] text-gray-500">
            {left === 0
              ? "2 decisions made, the rest was checked for you"
              : `${left} decision${left > 1 ? "s" : ""} left`}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium transition ${
              left === 0
                ? "bg-acc-pink text-white"
                : "bg-gray-200 text-gray-400"
            }`}
          >
            approve
          </span>
        </div>
      </Card>
      <Note className="mt-3">
        <Arrow dir="up-right" />
        grouped by what it's for. you decide two things, not 212 lines.
      </Note>
    </Wrap>
  );
};

/* ------------------------------------------------------------------ */
/* 12. sync: your machine and your agents, and incoming work staged     */
/* ------------------------------------------------------------------ */

const INSTANCES = [
  { name: "agent-1", ops: 4, path: "M0 86 C 18 86, 18 24, 36 24" },
  { name: "agent-2", ops: 6, path: "M0 86 L 36 86" },
  { name: "your laptop", ops: 2, path: "M0 86 C 18 86, 18 148, 36 148" },
];

const Screen: React.FC<{ label: string; sub?: string; on?: boolean }> = ({
  label,
  sub,
  on = true,
}) => (
  <div className="flex items-center gap-2.5">
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${
        on
          ? "border-gray-200 bg-[#F9F9FB] text-gray-dark"
          : "border-acc-teal bg-acc-teal/10 text-acc-teal"
      }`}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        aria-hidden
      >
        <rect x="3" y="4" width="18" height="12" rx="1" />
        <path d="M8 20h8M12 16v4" />
      </svg>
    </div>
    <div className="leading-tight">
      <p className="text-sm font-medium text-dark">{label}</p>
      {sub && <p className="text-[10px] text-gray-dark">{sub}</p>}
    </div>
  </div>
);

export const Sync: React.FC = () => {
  const [picked, setPicked] = useState(1);
  const [state, setState] = useState<"pending" | "approved" | "rejected">(
    "pending",
  );
  const choose = (i: number) => {
    setPicked(i);
    setState("pending");
  };
  const inst = INSTANCES[picked];
  return (
    <Wrap>
      <div className="flex items-center justify-center gap-2">
        <div className="flex w-28 shrink-0 flex-col items-center gap-2">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-gray-200 bg-[#F9F9FB] text-gray-dark">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              aria-hidden
            >
              <rect x="4" y="5" width="16" height="10" rx="1" />
              <path d="M2 19h20" />
            </svg>
          </div>
          <p className="text-sm font-medium text-dark">your machine</p>
        </div>
        <div className="relative flex h-16 flex-1 items-center px-2">
          <div className="h-px w-full bg-gray-300" />
          <span className="absolute top-1/2 h-2 w-2 -translate-y-1/2 animate-flow-right rounded-full bg-acc-teal" />
          <span
            className="absolute top-1/2 h-2 w-2 -translate-y-1/2 animate-flow-right rounded-full bg-acc-teal"
            style={{ animationDelay: "1.3s" }}
          />
          <span
            className="absolute top-1/2 h-2 w-2 -translate-y-1/2 animate-flow-left rounded-full bg-blue-lbg"
            style={{ animationDelay: "0.65s" }}
          />
          <span
            className="absolute top-1/2 h-2 w-2 -translate-y-1/2 animate-flow-left rounded-full bg-blue-lbg"
            style={{ animationDelay: "1.95s" }}
          />
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs font-medium whitespace-nowrap">
            <span className="text-acc-teal">push</span>
            <span className="text-gray-dark"> / </span>
            <span className="text-blue-lbg">pull</span>
          </span>
        </div>
        <div className="flex shrink-0 items-center">
          <svg
            width="36"
            height="172"
            viewBox="0 0 36 172"
            fill="none"
            className="shrink-0 overflow-visible"
            aria-hidden
          >
            {INSTANCES.map((it, i) => (
              <g key={it.name}>
                <path d={it.path} stroke="#d1d5db" strokeWidth="1.5" />
                <g className="text-acc-teal">
                  <Traveller
                    path={it.path}
                    dur="2.2s"
                    begin={`${i * 0.6}s`}
                    r={2.5}
                  />
                </g>
                <g className="text-blue-lbg">
                  <Traveller
                    path={it.path}
                    dur="2.2s"
                    begin={`${i * 0.6 + 1.1}s`}
                    r={2.5}
                    reverse
                  />
                </g>
              </g>
            ))}
          </svg>
          <div className="flex flex-col gap-[14px]">
            {INSTANCES.map((it, i) => (
              <button
                key={it.name}
                type="button"
                onClick={() => choose(i)}
                aria-pressed={picked === i}
                className="text-left"
              >
                <Screen
                  label={it.name}
                  sub={`${it.ops} ops incoming`}
                  on={picked !== i}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 pt-4">
        <span className="font-code text-xs text-gray-700">
          from {inst.name} · {inst.ops} ops ·{" "}
          <span
            className={
              state === "approved"
                ? "text-acc-green"
                : state === "rejected"
                  ? "text-rust"
                  : "text-acc-teal"
            }
          >
            {state === "pending" ? "staged, pending" : state}
          </span>
        </span>
        <span className="flex gap-1">
          <Choice
            on={state === "approved"}
            onClick={() => setState("approved")}
            tone="bg-acc-green/15 text-acc-green"
          >
            approve
          </Choice>
          <Choice
            on={state === "rejected"}
            onClick={() => setState("rejected")}
            tone="bg-rust/15 text-rust"
          >
            reject
          </Choice>
        </span>
      </div>
      <Note className="mt-2">
        <Arrow dir="up-right" />
        {state === "pending"
          ? "incoming work is present but inert until you say so"
          : state === "approved"
            ? "applied. your own draft was never touched."
            : "dropped. nothing ran."}
      </Note>
    </Wrap>
  );
};

/* ------------------------------------------------------------------ */
/* 13. deployment: the live app, and which version is live is a choice  */
/* ------------------------------------------------------------------ */

const DEV_V = "b70f18";
const PROD_V = "4ac9d3";

/** 0 before · 1 going live · 2 live and healthy · 3 rolled back */
type DeployStage = 0 | 1 | 2 | 3;

/** One place the app runs: which version it serves, and how it's doing. */
const Env: React.FC<{
  name: string;
  where: string;
  version: string;
  status: React.ReactNode;
  tone: "dev" | "live";
  flash: boolean;
}> = ({ name, where, version, status, tone, flash }) => (
  <div
    className={`min-w-0 rounded-2xl border bg-white px-4 py-3 shadow-sm transition ${
      tone === "live" ? "border-blue-lbg/40" : "border-gray-200"
    }`}
  >
    <div className="flex items-center justify-between gap-2">
      <span className="flex items-center gap-2 text-sm font-semibold text-dark">
        <span className="h-2 w-2 animate-pulse rounded-full bg-olive" />
        {name}
      </span>
      <span className="text-[10px] text-gray-400">{where}</span>
    </div>
    <p
      key={version}
      className={`mt-3 font-code text-lg ${flash ? "animate-rise-in" : ""} ${
        tone === "dev" ? "text-gray-700" : "text-blue-lbg"
      }`}
    >
      {version}
    </p>
    <div className="mt-1 min-h-[2.5rem] font-code text-[11px] leading-snug">
      {status}
    </div>
  </div>
);

export const Deployment: React.FC = () => {
  const [stage, setStage] = useState<DeployStage>(0);

  // a moment after switching, the first real requests come back fine
  useEffect(() => {
    if (stage !== 1) return;
    const t = window.setTimeout(() => setStage(2), 1400);
    return () => window.clearTimeout(t);
  }, [stage]);

  const prodVersion = stage === 1 || stage === 2 ? DEV_V : PROD_V;
  const prodStatus =
    stage === 0 ? (
      <span className="text-gray-500">1.2k requests today · 0 errors</span>
    ) : stage === 1 ? (
      <span className="text-gray-500">live · watching real requests…</span>
    ) : stage === 2 ? (
      <span className="text-gray-500">
        <span className="text-acc-green">214 requests · 0 errors</span>
        <br />
        traces look normal
      </span>
    ) : (
      <span className="text-gray-500">back on {PROD_V} · nothing rebuilt</span>
    );

  const action =
    stage === 0
      ? { label: `make ${DEV_V} live →`, go: () => setStage(1) }
      : stage === 2
        ? { label: `← roll back to ${PROD_V}`, go: () => setStage(3) }
        : stage === 3
          ? { label: "↻ start over", go: () => setStage(0) }
          : null;

  return (
    <Wrap>
      <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2">
        <Env
          name="your machine"
          where="development"
          version={DEV_V}
          tone="dev"
          flash={false}
          status={
            <span className="text-gray-500">
              live the moment you save
              <br />
              12 tests passed
            </span>
          }
        />
        <Env
          name="live"
          where="Darklang Cloud · what users see"
          version={prodVersion}
          tone="live"
          flash
          status={prodStatus}
        />
      </div>

      <div className="mt-3 flex min-h-8 flex-wrap items-center justify-between gap-3">
        {action ? (
          <Choice on={false} onClick={action.go} tone="">
            <span className={stage === 0 ? "text-blue-lbg" : "text-gray-500"}>
              {action.label}
            </span>
          </Choice>
        ) : (
          <span className="px-2.5 font-code text-xs text-gray-400">
            going live…
          </span>
        )}
        <span className="font-code text-[10px] text-gray-400">
          no build · no deploy step · every version kept
        </span>
      </div>

      <Note className="mt-2">
        <Arrow dir="up-right" />
        {stage === 0
          ? "users stay on 4ac9d3 until you pick another version"
          : stage === 1
            ? "same code that ran on your machine, now serving users"
            : stage === 2
              ? "live. the previous version is one click away, just in case."
              : "rolled back in one click. the old version never left."}
      </Note>
    </Wrap>
  );
};
