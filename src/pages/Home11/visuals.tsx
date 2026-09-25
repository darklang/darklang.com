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
    text: "Found a bug in Billing.total. It's outside this task, so I'm recording it instead of fixing it here.",
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
          text: "Float → Money",
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
    return { text: "calls it", tone: "border-gray-200 bg-white text-gray-600" };
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
      <div className="flex items-center justify-between font-code text-xs">
        <span className="text-gray-dark">$ dark deps usedby Billing.total</span>
        <span className="text-gray-400">
          {IMPACT.length - 1} dependents, 2 levels
        </span>
      </div>

      <div className="-mx-1 mt-4 overflow-x-auto px-1">
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
                  <p className="truncate text-[9px] font-semibold tracking-wider uppercase">
                    {st.text}
                  </p>
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
            : "change Billing.total's return type"}
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
            <span className="text-gray-500">known before you touch it</span>
          )}
        </span>
      </div>
      <Note className="mt-2">
        <Arrow dir="up-right" />
        {changed
          ? "that is the change report, written for you"
          : "the same map an agent asks for before it edits"}
      </Note>
    </Wrap>
  );
};

/* ------------------------------------------------------------------ */
/* 6. versions: one shared function, and a switch per caller           */
/* ------------------------------------------------------------------ */

const OLD_V = { hash: "a64ce1", sig: "List<Line> -> Float" };
const NEW_V = { hash: "c91b40", sig: "List<Line> -> Money" };

const CALLERS = [
  { name: "Invoice.build", why: "wants Money for the new invoices" },
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
        <span className="font-semibold text-rust">Money</span>
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
type StoreRow = { name: string; hash: string; where: string; faded?: boolean };

const STORE_STEPS: StoreRow[][] = [
  [
    { name: "Billing.total", hash: "c91b40", where: "main · current" },
    { name: "Billing.total", hash: "d4f7a2", where: "add-invoices" },
    { name: "Billing.total", hash: "9e02d7", where: "fix-refunds" },
    { name: "Invoice.render", hash: "51ab3c", where: "add-invoices" },
  ],
  [
    { name: "Billing.total", hash: "d4f7a2", where: "main · current" },
    { name: "Billing.total", hash: "9e02d7", where: "fix-refunds" },
    { name: "Invoice.render", hash: "51ab3c", where: "main · current" },
    {
      name: "Billing.total",
      hash: "c91b40",
      where: "main · previous",
      faded: true,
    },
  ],
  [
    { name: "Billing.total", hash: "9e02d7", where: "main · current" },
    { name: "Invoice.render", hash: "51ab3c", where: "main · current" },
    {
      name: "Billing.total",
      hash: "d4f7a2",
      where: "kept from the conflict",
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

const MERGES = [
  {
    branch: "add-invoices",
    box: "border-acc-green/30 bg-acc-green/5",
    head: "text-acc-green",
    lines: [
      "✓ add-invoices → main · no conflicts",
      "+ Invoice.render · ~ Billing.total",
    ],
  },
  {
    branch: "fix-refunds",
    box: "border-purple-lbg/30 bg-purple-lbg/5",
    head: "text-purple-lbg",
    lines: [
      "✓ fix-refunds → main · 1 conflict, resolved",
      "Billing.total changed on both branches",
      "kept: fix-refunds (newer) · recorded: add-invoices",
      "$ dark conflicts to compare, or pick the other",
    ],
  },
];

const MERGE_NOTES = [
  "both agents changed Billing.total. merge them into main, one after the other.",
  "the first merge had nothing to decide.",
  "the second found the overlap, kept one version, recorded the other, and finished.",
];

export const Branches: React.FC = () => {
  const [step, setStep] = useState(0);
  const drop = ["M60 0 V 40", "M420 0 V 40"];
  return (
    <Wrap>
      <div className="grid grid-cols-2 gap-4">
        {AGENTS.map(a => (
          <div
            key={a.name}
            className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-900">
                {a.name}
              </span>
              <span className="flex items-center gap-1 text-[10px] text-gray-dark">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-olive" />
                on {a.branch}
              </span>
            </div>
            <p className="mt-2 truncate font-code text-[10px] text-gray-400">
              $ {a.cmd}
            </p>
            <div className="mt-2 space-y-0.5 font-code text-[11px] text-gray-700">
              {a.work.map(w => (
                <p
                  key={w}
                  className={w.includes("total") ? "text-purple-lbg" : ""}
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
        <g className="text-purple-lbg">
          <Traveller path={drop[0]} dur="1.6s" r={2.5} />
          <Traveller path={drop[1]} dur="1.6s" begin="0.8s" r={2.5} />
        </g>
      </svg>
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
                className={`animate-rise-in ${
                  r.faded
                    ? "text-gray-300"
                    : r.where.startsWith("main")
                      ? "text-gray-700"
                      : "text-purple-lbg"
                }`}
              >
                <td className="px-3 py-0.5">{r.name}</td>
                <td className="px-3 py-0.5">{r.hash}</td>
                <td className="px-3 py-0.5">{r.where}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={3} className="px-3 pt-0.5 pb-1.5 text-gray-300">
                … 1,812 more rows
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ol className="mt-3 space-y-2 font-code text-[11px]">
        {MERGES.map((m, i) => {
          const done = step > i;
          const next = step === i;
          return (
            <li key={m.branch}>
              <button
                type="button"
                disabled={!next}
                onClick={() => setStep(i + 1)}
                className={`rounded-md px-2.5 py-1 font-code text-xs transition ${
                  next
                    ? "bg-purple-lbg/15 text-purple-lbg hover:bg-purple-lbg/25"
                    : done
                      ? "text-gray-500"
                      : "text-gray-300"
                }`}
              >
                {i + 1}. $ dark merge {m.branch}
              </button>
              {done && (
                <div
                  className={`mt-1 animate-rise-in rounded-lg border px-3 py-2 ${m.box}`}
                >
                  {m.lines.map((l, j) => (
                    <p key={l} className={j === 0 ? m.head : "text-gray-500"}>
                      {l}
                    </p>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ol>
      {step === MERGES.length && (
        <button
          type="button"
          onClick={() => setStep(0)}
          className="mt-2 font-code text-[11px] text-gray-400 hover:text-gray-600"
        >
          ↩ start over
        </button>
      )}
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

const PERMS: { kind: string; what: string; on: boolean; rule: string }[] = [
  {
    kind: "Http",
    what: "POST api.stripe.com/v1/charges",
    on: true,
    rule: "http POST https://api.stripe.com/v1/charges",
  },
  {
    kind: "Http",
    what: "POST api.stripe.com/v1/refunds",
    on: false,
    rule: "http POST https://api.stripe.com/v1/refunds",
  },
  {
    kind: "Http",
    what: "POST api.email.example/v1/send",
    on: true,
    rule: "http POST https://api.email.example/v1/send",
  },
  {
    kind: "FileRead",
    what: "/app/templates",
    on: true,
    rule: "file read /app/templates",
  },
  {
    kind: "FileWrite",
    what: "/app/invoices",
    on: true,
    rule: "file write /app/invoices",
  },
  {
    kind: "EnvRead",
    what: "STRIPE_KEY",
    on: true,
    rule: "env read STRIPE_KEY",
  },
];

const REACH_ICON: Record<string, React.ReactNode> = {
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

const ROW_H = 44;
const FAN_W = 72;

export const Access: React.FC = () => {
  const [perms, setPerms] = useState(PERMS.map(p => p.on));
  const [picked, setPicked] = useState(1);
  const flip = (i: number) => {
    setPerms(p => p.map((v, j) => (j === i ? !v : v)));
    setPicked(i);
  };
  const h = PERMS.length * ROW_H;
  const mid = h / 2;
  const y = (i: number) => ROW_H / 2 + i * ROW_H;
  const fan = (i: number) =>
    `M0 ${mid} C${FAN_W / 2} ${mid}, ${FAN_W / 2} ${y(i)}, ${FAN_W} ${y(i)}`;
  const sel = PERMS[picked];
  const selOn = perms[picked];
  return (
    <Wrap>
      <div className="-mx-1 overflow-x-auto px-1 pt-5">
        <div className="flex min-w-[28rem] items-stretch">
          <div className="flex shrink-0 items-center">
            <div className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 shadow-md">
              <p className="font-code text-xs font-semibold text-gray-900">
                Invoice.send
              </p>
              <p className="mt-0.5 text-[9px] font-semibold tracking-wider text-gray-400 uppercase">
                6 requests
              </p>
            </div>
          </div>

          <svg
            width={FAN_W}
            height={h}
            viewBox={`0 0 ${FAN_W} ${h}`}
            className="shrink-0 overflow-visible"
            aria-hidden
          >
            {PERMS.map((p, i) => (
              <g key={p.rule}>
                <path
                  d={fan(i)}
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="1.5"
                />
                <g className="text-acc-pink">
                  <Traveller
                    path={fan(i)}
                    dur="1.8s"
                    begin={`${i * 0.35}s`}
                    r={2.5}
                  />
                </g>
              </g>
            ))}
          </svg>

          <div className="relative min-w-0 flex-1">
            <div className="absolute top-0 bottom-0 left-0 w-8 rounded-full border border-acc-pink/30 bg-acc-pink/5" />
            <p className="absolute -top-5 left-0 w-8 text-center text-[9px] font-semibold tracking-wider text-acc-pink uppercase">
              rules
            </p>
            {PERMS.map((p, i) => {
              const on = perms[i];
              return (
                <button
                  key={p.rule}
                  type="button"
                  onClick={() => flip(i)}
                  aria-pressed={on}
                  className="group relative flex w-full items-center text-left"
                  style={{ height: ROW_H }}
                >
                  <span className="flex w-8 shrink-0 justify-center">
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-sm transition ${
                        on ? "bg-acc-green" : "bg-rust"
                      } ${picked === i ? "ring-2 ring-offset-1 " + (on ? "ring-acc-green/40" : "ring-rust/40") : ""}`}
                    >
                      {on ? "✓" : "✕"}
                    </span>
                  </span>
                  <span className="relative mx-1 h-3 w-6 shrink-0 sm:w-10">
                    <span
                      className={`absolute top-1/2 right-0 left-0 ${
                        on
                          ? "h-px bg-gray-200"
                          : "border-t border-dashed border-gray-200"
                      }`}
                    />
                    {on && (
                      <span
                        className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 animate-flow-right rounded-full bg-acc-green"
                        style={{ animationDelay: `${i * 0.35 + 1.2}s` }}
                      />
                    )}
                  </span>
                  <span
                    className={`flex min-w-0 flex-1 items-center gap-2 rounded-lg border px-2.5 py-1.5 transition ${
                      on
                        ? "border-gray-200 bg-white shadow-sm group-hover:border-gray-300"
                        : "border-dashed border-gray-200 bg-transparent"
                    }`}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`shrink-0 ${on ? "text-gray-500" : "text-gray-300"}`}
                      aria-hidden
                    >
                      {REACH_ICON[p.kind]}
                    </svg>
                    <span className="min-w-0">
                      <span
                        className={`block truncate font-code text-[11px] ${
                          on ? "text-gray-800" : "text-gray-400 line-through"
                        }`}
                      >
                        {p.what}
                      </span>
                      <span className="block text-[8px] font-semibold tracking-wider text-gray-400 uppercase">
                        {p.kind}
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div
        key={`${picked}-${selOn}`}
        className={`mt-4 animate-rise-in rounded-xl border px-3.5 py-2.5 font-code text-[10px] leading-relaxed ${
          selOn
            ? "border-acc-green/30 bg-acc-green/5"
            : "border-rust/30 bg-rust/5"
        }`}
      >
        <p className={selOn ? "text-acc-green" : "text-rust"}>
          {selOn ? "✓ allowed" : "✕ denied"} · {sel.what}
        </p>
        <p className="text-gray-500">
          {selOn ? (
            <>by rule {sel.rule}</>
          ) : (
            <>
              instance policy · to allow:{" "}
              <span className="text-gray-700">
                dark permissions allow {sel.rule}
              </span>
            </>
          )}
        </p>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 font-code text-[10px]">
        <span className="text-gray-400">package Pdf.render</span>
        <span className="rounded-full bg-acc-green/10 px-2 py-0.5 text-acc-green">
          @3d8e52 approved · FileRead
        </span>
        <span className="rounded-full border border-dashed border-gray-300 px-2 py-0.5 text-gray-400">
          @9c1e04 newer · adds Http fonts.example · not approved
        </span>
      </div>
      <Note className="mt-3">
        <Arrow dir="up-right" />
        every request stops at a rule. click one to flip it. Billing.total is
        declared :{"{}"}, so it never asks at all.
      </Note>
    </Wrap>
  );
};

/* ------------------------------------------------------------------ */
/* 10. cleanup: what the change left behind                             */
/* ------------------------------------------------------------------ */

const LEFTOVERS = [
  { name: "Invoice.build", tag: "changed", tone: "text-rust", junk: false },
  {
    name: "Invoice.show",
    tag: "followed",
    tone: "text-gray-light",
    junk: false,
  },
  {
    name: "Invoice.formatLegacy",
    tag: "0 callers",
    tone: "text-acc-amber",
    junk: true,
  },
  {
    name: "Invoice.buildTests",
    tag: "tests the old shape",
    tone: "text-acc-amber",
    junk: true,
  },
  {
    name: "Money.round",
    tag: "1 caller on an old version",
    tone: "text-acc-amber",
    junk: true,
  },
];

export const Cleanup: React.FC = () => {
  const [gone, setGone] = useState<string[]>([]);
  const left = LEFTOVERS.filter(l => l.junk && !gone.includes(l.name)).length;
  return (
    <Wrap>
      <div className="flex items-center justify-between font-code text-xs">
        <span className="text-gray-dark">
          $ dark commit · <span className="text-rust">add-invoices</span>
        </span>
        <span className={left === 0 ? "text-acc-green" : "text-acc-amber"}>
          {left === 0 ? "nothing left behind" : `${left} left behind`}
        </span>
      </div>
      <div className="mt-3 space-y-1.5">
        {LEFTOVERS.map(l => {
          const done = gone.includes(l.name);
          return (
            <div
              key={l.name}
              className={`flex items-center justify-between gap-3 rounded-lg border px-3 py-2 font-code text-xs transition ${
                l.junk && !done
                  ? "border-acc-amber/30 bg-acc-amber/5"
                  : "border-gray-100 bg-white"
              }`}
            >
              <span
                className={
                  done ? "text-gray-300 line-through" : "text-gray-700"
                }
              >
                {l.name}
              </span>
              <span className="flex items-center gap-2">
                <span
                  className={`text-[10px] font-semibold tracking-wider uppercase ${done ? "text-acc-green" : l.tone}`}
                >
                  {done ? "cleaned" : l.tag}
                </span>
                {l.junk && !done && (
                  <Choice
                    on={false}
                    onClick={() => setGone(g => [...g, l.name])}
                    tone=""
                  >
                    fix
                  </Choice>
                )}
              </span>
            </div>
          );
        })}
      </div>
      <Note className="mt-3">
        <Arrow dir="up-right" />
        the report knows who calls what, so "unused" is a fact, not a guess
      </Note>
    </Wrap>
  );
};

/* ------------------------------------------------------------------ */
/* 11. review: two decisions for you, the rest already checked          */
/* ------------------------------------------------------------------ */

const DECIDE = [
  {
    name: "type Invoice",
    what: "new type · { customer: Customer; lines: List<Line>; total: Money }",
    why: "shapes every invoice stored and emailed from now on",
  },
  {
    name: "Billing.total",
    what: "signature · Float → Money",
    why: "every amount on an invoice now goes through Money",
  },
];

const CHECKED = [
  {
    text: "Invoice.build, Api.balance, Invoice.show followed the new signature",
    by: "type-checked, 0 errors",
  },
  { text: "Invoice.make → Invoice.build renamed", by: "0 callers edited" },
  { text: "Legacy.statement stays on a64ce1", by: "pinned on purpose" },
  { text: "12 tests passed · trace 2b91e0", by: "evidence attached" },
];

const Tick: React.FC<{ on: boolean; auto?: boolean }> = ({
  on,
  auto = false,
}) => (
  <span
    className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-md border text-[11px] transition ${
      on
        ? auto
          ? "border-acc-green/40 bg-acc-green/10 text-acc-green"
          : "border-acc-pink bg-acc-pink text-white"
        : "border-gray-300 bg-white text-transparent"
    }`}
    aria-hidden
  >
    ✓
  </span>
);

export const Review: React.FC = () => {
  const [done, setDone] = useState<boolean[]>(DECIDE.map(() => false));
  const left = done.filter(d => !d).length;
  return (
    <Wrap>
      <Card>
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3">
          <span className="font-code text-xs text-gray-700">
            review · <span className="text-acc-pink">add-invoices</span>
          </span>
          <span className="font-code text-[10px] text-gray-light">
            6 definitions · 212 lines if it were a diff
          </span>
        </div>

        <div className="px-5 pt-4 pb-2">
          <p className="text-[10px] font-bold tracking-[0.08em] text-acc-pink uppercase">
            your decisions · {DECIDE.length}
          </p>
          <ul className="mt-2 space-y-2">
            {DECIDE.map((d, i) => (
              <li key={d.name}>
                <button
                  type="button"
                  onClick={() =>
                    setDone(x => x.map((v, j) => (j === i ? !v : v)))
                  }
                  aria-pressed={done[i]}
                  className="flex w-full items-start gap-3 rounded-lg border border-gray-200 px-3 py-2 text-left transition hover:bg-gray-50"
                >
                  <span className="mt-0.5">
                    <Tick on={done[i]} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-code text-xs text-gray-900">
                      {d.name}
                    </span>
                    <span className="block font-code text-[11px] text-gray-500">
                      {d.what}
                    </span>
                    <span className="block text-[11px] text-gray-500">
                      {d.why}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-5 pt-3 pb-4">
          <p className="text-[10px] font-bold tracking-[0.08em] text-acc-green uppercase">
            checked for you · {CHECKED.length}
          </p>
          <ul className="mt-2 space-y-1.5">
            {CHECKED.map(c => (
              <li key={c.text} className="flex items-start gap-3">
                <span className="mt-0.5">
                  <Tick on auto />
                </span>
                <span className="min-w-0">
                  <span className="block font-code text-[11px] text-gray-700">
                    {c.text}
                  </span>
                  <span className="block text-[10px] text-gray-400">
                    {c.by}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 bg-[#F9F9FB] px-5 py-3">
          <span className="font-code text-[11px] text-gray-500">
            {left === 0
              ? "2 decisions made · 210 lines you never had to read"
              : `${left} decision${left > 1 ? "s" : ""} left`}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium transition ${
              left === 0
                ? "bg-acc-green text-white"
                : "bg-gray-200 text-gray-400"
            }`}
          >
            approve
          </span>
        </div>
      </Card>
      <Note className="mt-3">
        <Arrow dir="up-right" />a review is the decisions. the rest is shown,
        and already checked.
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

const LIVE_VERSIONS = ["e12b07", "4ac9d3", "b70f18"];
const RESOURCES = [
  {
    type: "handler",
    name: "GET /invoices/:id",
    stat: "1.2k requests · 24h",
    tone: "text-blue-lbg",
  },
  {
    type: "datastore",
    name: "Invoices",
    stat: "1,204 rows",
    tone: "text-acc-green",
  },
  {
    type: "cron",
    name: "monthly · 1st",
    stat: "next in 6d",
    tone: "text-acc-amber",
  },
  {
    type: "worker",
    name: "Invoice.send",
    stat: "212 queued",
    tone: "text-purple-lbg",
  },
];

export const Deployment: React.FC = () => {
  const [live, setLive] = useState(2);
  const rolledBack = live !== LIVE_VERSIONS.length - 1;
  return (
    <Wrap>
      <Card>
        <div className="flex items-center justify-between px-5 pt-4">
          <span className="flex items-center gap-2 text-sm font-semibold text-dark">
            <span className="h-2 w-2 rounded-full bg-olive" />
            Invoices is live
          </span>
          <span
            key={live}
            className="animate-rise-in font-code text-xs text-gray-400"
          >
            version {LIVE_VERSIONS[live]}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2.5 px-5 pt-4">
          {RESOURCES.map(r => (
            <div
              key={r.name}
              className="rounded-xl border border-gray-200 bg-[#F9F9FB] px-3 py-2.5"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`text-[10px] font-semibold tracking-wide uppercase ${r.tone}`}
                >
                  {r.type}
                </span>
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-olive" />
              </div>
              <div className="mt-1 flex items-baseline justify-between gap-2">
                <span className="truncate font-code text-xs text-dark">
                  {r.name}
                </span>
                <span className="shrink-0 text-[10px] text-gray-dark">
                  {r.stat}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 border-t border-gray-100 px-5 py-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold tracking-wider text-gray-light uppercase">
              which version is live
            </span>
            <span className="text-[10px] text-gray-400">
              every one still here
            </span>
          </div>
          <div className="relative mt-9">
            <div className="absolute top-[7px] right-[16.6%] left-[16.6%] h-px bg-gray-200" />
            <div className="grid grid-cols-3">
              {LIVE_VERSIONS.map((v, i) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setLive(i)}
                  className="group flex flex-col items-center gap-1.5"
                >
                  <span
                    className={`h-3.5 w-3.5 rounded-full border-2 transition ${
                      i === live
                        ? "border-blue-lbg bg-blue-lbg"
                        : "border-gray-300 bg-white group-hover:border-blue-lbg/60"
                    }`}
                  />
                  <span
                    className={`font-code text-[10px] ${i === live ? "text-blue-lbg" : "text-gray-500"}`}
                  >
                    {v}
                  </span>
                </button>
              ))}
            </div>
            <div
              className="absolute -top-6 -translate-x-1/2 rounded bg-blue-lbg px-1.5 py-0.5 text-[9px] font-semibold text-white transition-[left] duration-500"
              style={{ left: `${16.6 + live * 33.4}%` }}
            >
              live
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-gray-100 bg-[#F9F9FB] px-5 py-3">
          <span className="text-xs text-gray-dark">
            same version on your machine · your infra · Darklang Cloud
          </span>
          <span className="text-[10px] text-gray-light">
            nothing to build, nothing to ship
          </span>
        </div>
      </Card>
      <Note className="mt-3">
        <Arrow dir="up-right" />
        {rolledBack
          ? "rolled back. nothing rebuilt, nothing redeployed."
          : "click an earlier version. that is the whole rollback."}
      </Note>
    </Wrap>
  );
};
