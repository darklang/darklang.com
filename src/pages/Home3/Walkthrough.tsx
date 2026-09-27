import React, { useEffect, useState } from "react";

import SectionTitle from "../../common/ui/SectionTitle";
import {
  ClaudeIcon,
  OllamaIcon,
  OpenAIIcon,
} from "../../common/ui/Icons/AgentIcons";

/**
 * A looping, gif-style demo of the whole loop: install, ask an agent for a
 * Stripe checkout endpoint, then watch the package tree fill up.
 *
 * Act 0 is a single console. From act 1 the stage cross-fades to the agent on
 * the left and the workbench on the right. Definitions appear in the workbench
 * as they are added, the branch strip shows where they landed, and the side
 * shows the selected definition's body and the access it requires. Commands
 * you run yourself go to the CLI along the bottom, and when something is
 * denied that CLI lifts forward, holds while you answer, and settles back.
 */

const C = {
  kw: "text-code-kw",
  fn: "text-code-fn",
  ty: "text-code-type",
  str: "text-olive",
  dim: "text-gray-dark",
  cm: "text-gray-custom",
  warn: "text-classic-yellow",
  err: "text-code-rust",
} as const;

type Cls = keyof typeof C;
type Seg = [string, Cls?];

/**
 * What a definition requires, and what the policy layers currently decide.
 * The wording follows the runtime: a function *requires* an effect, it never
 * "has access". Access is the intersection of the instance, run, package and
 * function layers, decided when the operation actually happens.
 */
type State = "unruled" | "denied" | "allowed";

type Def = {
  kind: "type" | "fn";
  name: string;
  sig: string;
  body: string[];
  req?: {
    effect: string;
    request: string;
    via?: string;
    ceiling: string;
    state: State;
  };
  hash?: string;
  moved?: string[];
};

type Branch = { name: string; ops: number; active: boolean };

/** A moment worth looking at, and whether the CLI swells to carry it. */
type Beat = {
  tone: "issue" | "fix";
  label: string;
  def?: string;
  zoom?: boolean;
};

/** Colours a whole CLI row and picks its gutter mark. */
type Tone = "err" | "ok" | "warn" | "ask";

type Ev = {
  act: number;
  pause?: number;
  typed?: boolean;
  beat?: Beat | null;
  tone?: Tone;
  /** Indent, for rows that hang under the one above. */
  pad?: boolean;
  /** Hands the stage to the browser, to show what landed in the cloud. */
  browser?: boolean;
  /** Opens or closes the trace viewer over the workbench. */
  trace?: boolean;
} & (
  | { k: "shell"; segs: Seg[] }
  | { k: "agent"; segs: Seg[] }
  | { k: "cmd"; segs: Seg[] }
  | { k: "out"; segs: Seg[] }
  | { k: "add"; def: Def }
  | { k: "sel"; name: string }
  | { k: "perm"; name: string; state: State }
  | { k: "edit"; name: string; hash: string; moved: string[] }
  | { k: "branch"; branches: Branch[] }
);

const AGENTS = [
  { name: "Claude Code", Icon: ClaudeIcon },
  { name: "Codex", Icon: OpenAIIcon },
  { name: "Ollama", Icon: OllamaIcon },
];

const ACTS = [
  { name: "Install", caption: "One binary. There is no project to create." },
  {
    name: "Ask",
    caption:
      "Whichever agent you prefer works on its own branch, inside your package tree.",
  },
  {
    name: "Watch",
    caption:
      "Definitions appear as they are written, each one carrying the access it needs.",
  },
  {
    name: "Allow",
    caption:
      "You asked for checkout. It also wrote a refund path. Only one of the two can reach Stripe.",
  },
  {
    name: "Run",
    caption:
      "Your router is a function, so serving it is one command. Every run it handles keeps its inputs, its outside calls and what came back.",
  },
  {
    name: "Change",
    caption:
      "Callers follow a change on their own. A change that needs more access than you approved waits for you first.",
  },
  {
    name: "Ship",
    caption:
      "Merge by definition, commit definitions, and sync to your own machines or to Darklang Cloud.",
  },
];

const ORDER: Def = {
  kind: "type",
  name: "Order",
  sig: "record",
  body: ["{ id: String", "  amount: Int64", "  email: String }"],
};

const SESSION: Def = {
  kind: "fn",
  name: "Payments.session",
  sig: "Order :{Http} -> Session",
  body: [
    "let session (o: Order) :{Http} Session =",
    "  HttpClient.post checkoutUrl",
    "    (encode o)",
  ],
  req: {
    effect: "Http",
    request: "POST https://api.stripe.com/v1/checkout/sessions",
    ceiling: ":{Http}",
    state: "unruled",
  },
};

const REFUND: Def = {
  kind: "fn",
  name: "Payments.refund",
  sig: "Charge :{Http} -> Refund",
  body: [
    "let refund (c: Charge) :{Http} Refund =",
    "  HttpClient.post refundsUrl",
    "    (encode c)",
  ],
  req: {
    effect: "Http",
    request: "POST https://api.stripe.com/v1/refunds",
    ceiling: ":{Http}",
    state: "unruled",
  },
};

const CHECKOUT: Def = {
  kind: "fn",
  name: "Api.checkout",
  sig: "Request :{Http} -> Response",
  body: [
    "let checkout (req: Request) :{Http} Response =",
    "  let order = decode req.body",
    "  DB.set order order.id Orders",
  ],
  req: {
    effect: "Http",
    request: "POST https://api.stripe.com/v1/checkout/sessions",
    via: "Payments.session",
    ceiling: ":{Http}",
    state: "unruled",
  },
};

const CONFIRM: Def = {
  kind: "fn",
  name: "Email.confirmation",
  sig: "Order :{Http} -> Unit",
  body: [
    "let confirmation (o: Order) :{Http} Unit =",
    "  Postmark.send o.email",
    "    (render o)",
  ],
  req: {
    effect: "Http",
    request: "POST https://api.postmark.com/email",
    ceiling: ":{Http}",
    state: "allowed",
  },
};

const ev = (e: Ev): Ev => e;

const DENIED_SESSION: Beat = {
  tone: "issue",
  label: "denied",
  def: "Payments.session",
  zoom: true,
};

const DENIED_REFUND: Beat = {
  tone: "issue",
  label: "you never asked for this",
  def: "Payments.refund",
  zoom: true,
};

const SCRIPT: Ev[] = [
  // 0 - install
  ev({
    act: 0,
    k: "shell",
    typed: true,
    segs: [["curl -fsSL https://darklang.com/install | sh"]],
  }),
  ev({ act: 0, k: "shell", tone: "ok", segs: [["darklang 0.5.2 installed"]] }),
  ev({ act: 0, k: "shell", segs: [[""]], pause: 120 }),
  ev({ act: 0, k: "shell", typed: true, segs: [["dark"]] }),
  ev({
    act: 0,
    k: "shell",
    pad: true,
    segs: [["no project to create, no config to write", "dim"]],
  }),
  ev({
    act: 0,
    k: "shell",
    pad: true,
    segs: [["package tree ready", "dim"]],
    pause: 900,
  }),

  // 1 - ask
  ev({
    act: 1,
    k: "agent",
    typed: true,
    pause: 120,
    segs: [["> ", "dim"], ["Add a Stripe checkout endpoint."]],
  }),
  ev({
    act: 1,
    k: "agent",
    typed: true,
    pause: 120,
    segs: [["  Store the order and email a"]],
  }),
  ev({
    act: 1,
    k: "agent",
    typed: true,
    pause: 380,
    segs: [["  confirmation."]],
  }),
  ev({
    act: 1,
    k: "branch",
    branches: [
      { name: "main", ops: 0, active: false },
      { name: "agent/stripe", ops: 0, active: true },
    ],
    pause: 500,
  }),
  ev({
    act: 1,
    k: "agent",
    segs: [
      ["- working on ", "dim"],
      ["agent/stripe", "ty"],
    ],
    pause: 900,
  }),

  // 2 - definitions appear, each with the access it requires
  ev({ act: 2, k: "add", def: ORDER, pause: 240 }),
  ev({ act: 2, k: "sel", name: "Order", pause: 600 }),
  ev({ act: 2, k: "add", def: SESSION, pause: 240 }),
  ev({ act: 2, k: "sel", name: "Payments.session", pause: 900 }),
  ev({
    act: 2,
    k: "agent",
    segs: [
      ["- also writing ", "dim"],
      ["Payments.refund", "fn"],
    ],
    pause: 200,
  }),
  ev({
    act: 2,
    k: "agent",
    segs: [["  for duplicate orders", "dim"]],
    pause: 300,
  }),
  ev({ act: 2, k: "add", def: REFUND, pause: 240 }),
  ev({ act: 2, k: "sel", name: "Payments.refund", pause: 900 }),
  ev({ act: 2, k: "add", def: CHECKOUT, pause: 240 }),
  ev({ act: 2, k: "add", def: CONFIRM, pause: 240 }),
  ev({
    act: 2,
    k: "branch",
    branches: [
      { name: "main", ops: 0, active: false },
      { name: "agent/stripe", ops: 5, active: true },
    ],
    pause: 300,
  }),
  ev({
    act: 2,
    k: "out",
    tone: "ok",
    segs: [["type check ok"], ["   5 definitions", "dim"]],
  }),
  ev({
    act: 2,
    k: "out",
    pad: true,
    segs: [["# nothing to build. they are already live.", "cm"]],
    pause: 1000,
  }),

  // 3 - two endpoints on the same host, two different answers
  ev({ act: 3, k: "sel", name: "Payments.session", pause: 300 }),
  ev({
    act: 3,
    k: "perm",
    name: "Payments.session",
    state: "denied",
    pause: 0,
  }),
  ev({ act: 3, k: "perm", name: "Api.checkout", state: "denied", pause: 400 }),
  ev({
    act: 3,
    k: "out",
    tone: "err",
    segs: [["denied by instance policy"]],
    beat: DENIED_SESSION,
  }),
  ev({
    act: 3,
    k: "out",
    pad: true,
    segs: [["http POST api.stripe.com/v1/checkout/sessions"]],
    pause: 800,
  }),
  ev({
    act: 3,
    k: "agent",
    segs: [["! requires ", "warn"], ["Http"], [" api.stripe.com", "dim"]],
  }),
  ev({ act: 3, k: "agent", segs: [["  waiting for you", "dim"]], pause: 400 }),
  ev({
    act: 3,
    k: "out",
    pad: true,
    segs: [["[1] allow once   [2] allow always   [3] deny", "dim"]],
    pause: 700,
  }),
  ev({ act: 3, k: "cmd", tone: "ask", typed: true, pause: 500, segs: [["2"]] }),
  ev({
    act: 3,
    k: "perm",
    name: "Payments.session",
    state: "allowed",
    pause: 0,
  }),
  ev({ act: 3, k: "perm", name: "Api.checkout", state: "allowed", pause: 300 }),
  ev({
    act: 3,
    k: "out",
    tone: "ok",
    segs: [["saved  "], ["permissions allow http POST", "str"]],
    beat: { tone: "fix", label: "what fixed it", def: "Payments.session" },
  }),
  ev({
    act: 3,
    k: "out",
    pad: true,
    segs: [["api.stripe.com/v1/checkout/sessions", "str"]],
    pause: 1600,
  }),
  // Spotlight off while attention moves to the next definition.
  ev({ act: 3, k: "sel", name: "Payments.refund", beat: null, pause: 500 }),
  ev({
    act: 3,
    k: "out",
    tone: "err",
    segs: [["denied by instance policy"]],
    beat: DENIED_REFUND,
  }),
  ev({
    act: 3,
    k: "out",
    pad: true,
    segs: [["http POST api.stripe.com/v1/refunds"]],
    pause: 800,
  }),
  ev({
    act: 3,
    k: "out",
    pad: true,
    segs: [["[1] allow once   [2] allow always   [3] deny", "dim"]],
    pause: 700,
  }),
  ev({ act: 3, k: "cmd", tone: "ask", typed: true, pause: 500, segs: [["3"]] }),
  ev({
    act: 3,
    k: "perm",
    name: "Payments.refund",
    state: "denied",
    pause: 300,
  }),
  ev({
    act: 3,
    k: "out",
    tone: "warn",
    segs: [["stripe is allowed for sessions, not for refunds"]],
    beat: { tone: "fix", label: "your call", def: "Payments.refund" },
    pause: 2200,
  }),

  // 4 - run it, and see what happened
  ev({
    act: 4,
    k: "agent",
    segs: [["- retrying the session", "dim"]],
    beat: null,
  }),
  ev({
    act: 4,
    k: "agent",
    segs: [
      ["+ ok ", "str"],
      ["cs_test_a1B2", "ty"],
    ],
    pause: 500,
  }),
  ev({
    act: 4,
    k: "cmd",
    typed: true,
    segs: [["dark "], ["serve", "kw"], [" MyApp.Api.router"]],
  }),
  ev({
    act: 4,
    k: "out",
    tone: "ok",
    segs: [["Listening on http://localhost:8080"]],
    pause: 500,
  }),
  ev({
    act: 4,
    k: "cmd",
    typed: true,
    pause: 300,
    segs: [["curl -sX POST localhost:8080/checkout"]],
  }),
  ev({
    act: 4,
    k: "out",
    pad: true,
    segs: [['{"url": "https://checkout.stripe.com/c/pay/cs_test_a1B2', "str"]],
    pause: 900,
  }),
  ev({
    act: 4,
    k: "cmd",
    typed: true,
    segs: [["dark "], ["traces view", "kw"], [" 8812"]],
  }),
  ev({
    act: 4,
    k: "out",
    pad: true,
    trace: true,
    segs: [["opening #8812", "dim"]],
    pause: 5600,
  }),

  // 5 - a change that needs more access has to be approved
  ev({
    act: 5,
    k: "agent",
    typed: true,
    trace: false,
    pause: 300,
    segs: [["> ", "dim"], ["also verify the session before storing"]],
  }),
  ev({
    act: 5,
    k: "agent",
    segs: [
      ["- edited ", "dim"],
      ["Payments.session", "fn"],
    ],
    pause: 400,
  }),
  ev({
    act: 5,
    k: "edit",
    name: "Payments.session",
    hash: "9c02af31",
    moved: [],
    pause: 200,
  }),
  ev({ act: 5, k: "sel", name: "Payments.session", pause: 400 }),
  ev({
    act: 5,
    k: "perm",
    name: "Payments.session",
    state: "unruled",
    pause: 300,
  }),
  ev({
    act: 5,
    k: "out",
    tone: "err",
    segs: [["requirements changed since b7d21f04"]],
    beat: {
      tone: "issue",
      label: "the contract moved",
      def: "Payments.session",
      zoom: true,
    },
  }),
  ev({
    act: 5,
    k: "out",
    pad: true,
    segs: [
      ["now also  ", "dim"],
      ["GET api.stripe.com/v1/checkout/sessions/:id"],
    ],
    pause: 900,
  }),
  ev({
    act: 5,
    k: "out",
    pad: true,
    segs: [["callers stay on b7d21f04 until you approve", "dim"]],
    pause: 700,
  }),
  ev({
    act: 5,
    k: "out",
    pad: true,
    segs: [["[1] approve and move   [2] keep b7d21f04", "dim"]],
    pause: 900,
  }),
  ev({ act: 5, k: "cmd", tone: "ask", typed: true, pause: 500, segs: [["1"]] }),
  ev({
    act: 5,
    k: "perm",
    name: "Payments.session",
    state: "allowed",
    pause: 0,
  }),
  ev({
    act: 5,
    k: "edit",
    name: "Payments.session",
    hash: "9c02af31",
    moved: ["Api.checkout", "Jobs.retryFailed"],
    pause: 0,
  }),
  ev({
    act: 5,
    k: "out",
    tone: "ok",
    segs: [["callers moved to "], ["9c02af31", "ty"], [", rule saved"]],
    beat: {
      tone: "fix",
      label: "you approved it",
      def: "Payments.session",
    },
    pause: 2000,
  }),

  // 6 - ship it
  ev({
    act: 6,
    k: "agent",
    segs: [["+ done. 5 definitions to review", "str"]],
    beat: null,
    pause: 400,
  }),
  ev({
    act: 6,
    k: "cmd",
    typed: true,
    segs: [["dark "], ["merge", "kw"], [" agent/stripe"]],
  }),
  ev({
    act: 6,
    k: "branch",
    branches: [{ name: "main", ops: 5, active: true }],
    pause: 200,
  }),
  ev({
    act: 6,
    k: "out",
    tone: "ok",
    segs: [["clean"], ["   merged by definition", "dim"]],
    pause: 500,
  }),
  ev({
    act: 6,
    k: "cmd",
    typed: true,
    segs: [["dark "], ["commit", "kw"], [' "stripe checkout"']],
  }),
  ev({
    act: 6,
    k: "out",
    pad: true,
    segs: [["5 definitions committed", "dim"]],
    pause: 400,
  }),
  ev({ act: 6, k: "cmd", typed: true, segs: [["dark "], ["sync", "kw"]] }),
  ev({
    act: 6,
    k: "out",
    tone: "ok",
    segs: [["matter.darklang.com  "], ["sent ", "dim"], ["#1839..#1844", "ty"]],
  }),
  ev({
    act: 6,
    k: "out",
    tone: "ok",
    segs: [["home-server          "], ["sent ", "dim"], ["#1839..#1844", "ty"]],
  }),
  ev({
    act: 6,
    k: "out",
    pad: true,
    segs: [["# the code travels. your rules do not.", "cm"]],
    pause: 1400,
  }),
  ev({ act: 6, k: "out", browser: true, segs: [[""]], pause: 5200 }),
];

const ACT_START = ACTS.map((_, a) => SCRIPT.findIndex(e => e.act === a));

/** The last event of each act: the step, complete. */
const ACT_END = ACTS.map((_, a) => {
  let last = 0;
  SCRIPT.forEach((e, idx) => {
    if (e.act === a) last = idx;
  });
  return last;
});

const TYPE_MS = 23;

/** Everything waits a little longer than it strictly needs to. */
const SPEED = 1.35;

const CLI_LINES = 5;
const AGENT_LINES = { narrow: 6, wide: 12 };

const lineLength = (segs: Seg[]) => segs.reduce((n, [t]) => n + t.length, 0);

/** Renders a line, optionally truncated to `limit` characters for typing. */
const renderSegs = (segs: Seg[], limit?: number) => {
  let used = 0;
  return segs.map(([text, cls], i) => {
    let shown = text;
    if (limit !== undefined) {
      if (used >= limit) return null;
      shown = text.slice(0, limit - used);
      used += shown.length;
    }
    return (
      <span key={i} className={cls ? C[cls] : undefined}>
        {shown}
      </span>
    );
  });
};

/** The mark in the gutter, which is what keeps the rows lined up. */
const GUTTER: Record<string, { mark: string; cls: string }> = {
  cmd: { mark: "$", cls: "text-gray-dark" },
  ask: { mark: ">", cls: "text-gray-dark" },
  err: { mark: "!", cls: "text-code-rust" },
  ok: { mark: "+", cls: "text-olive" },
  warn: { mark: "!", cls: "text-classic-yellow" },
};

const TONE_TEXT: Record<Tone, string> = {
  err: "text-code-rust",
  ok: "text-olive",
  warn: "text-classic-yellow",
  ask: "text-[#d4d4d4]",
};

const PILL: Record<State, { label: string; cls: string }> = {
  unruled: {
    label: "no rule yet",
    cls: "border-classic-yellow/40 bg-classic-yellow/10 text-classic-yellow",
  },
  denied: {
    label: "denied by instance policy",
    cls: "border-rust/50 bg-rust/15 text-rust",
  },
  allowed: {
    label: "allowed by instance policy",
    cls: "border-olive/40 bg-olive/10 text-olive",
  },
};

const SYNCED = [
  { kind: "type", name: "Order", hash: "1d80e3c5", req: "" },
  { kind: "fn", name: "Payments.session", hash: "b7d21f04", req: "Http" },
  { kind: "fn", name: "Payments.refund", hash: "4c91a7f2", req: "Http" },
  { kind: "fn", name: "Api.checkout", hash: "a17c40b9", req: "Http" },
  { kind: "fn", name: "Email.confirmation", hash: "7e3b1a55", req: "Http" },
];

/** The same tree, seen from the web after a sync. */
const Cloud: React.FC = () => (
  <div className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
    <div className="flex items-center gap-3 border-b border-gray-200 bg-[#F1F1F4] px-4 py-2.5">
      <div className="flex-1 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-center font-code text-xs text-gray-custom">
        <span className="text-acc-green">https://</span>
        matter.darklang.com/MyApp
      </div>
    </div>

    <div className="min-h-0 flex-1 overflow-hidden px-5 py-4 md:px-6">
      <div className="flex flex-wrap items-baseline gap-x-3">
        <h3 className="text-lg font-bold text-dark">MyApp</h3>
        <span className="rounded-full border border-purple-lbg/30 bg-purple-lbg/5 px-2 py-0.5 font-code text-[11px] text-purple-lbg">
          main
        </span>
        <span className="text-sm text-gray-dark">synced from your laptop</span>
      </div>

      <div className="mt-3 overflow-hidden rounded-lg border border-gray-200">
        {SYNCED.map(d => (
          <div
            key={d.name}
            className="flex flex-wrap items-baseline gap-x-3 border-b border-gray-100 px-3 py-2 text-[13px] last:border-b-0"
          >
            <span className="w-8 shrink-0 font-code text-[11px] text-gray-light">
              {d.kind}
            </span>
            <span className="font-code text-dark">{d.name}</span>
            <span className="font-code text-[11px] text-gray-light">
              {d.hash}
            </span>
            {d.req && (
              <span className="ml-auto font-code text-[11px] text-gray-dark">
                requires <span className="text-acc-teal">{d.req}</span>
              </span>
            )}
          </div>
        ))}
      </div>

      <p className="mt-3 text-sm text-gray-dark">
        A package publishes what it requires as a request. Only the person
        installing it can turn that into a rule.
      </p>
    </div>
  </div>
);

/** A row in the trace, with a bar behind it in proportion to its time. */
const Row: React.FC<{ ms?: number; children: React.ReactNode }> = ({
  ms,
  children,
}) => (
  <div className="relative flex items-baseline gap-2 rounded px-1.5 py-[3px]">
    {ms !== undefined && (
      <span
        className="absolute inset-y-0 left-0 rounded bg-acc-amber/10"
        style={{ width: `${Math.max((ms / 64) * 100, 6)}%` }}
        aria-hidden="true"
      ></span>
    )}
    <span className="relative min-w-0 flex-1 truncate">{children}</span>
    {ms !== undefined && (
      <span className="relative shrink-0 text-[11px] text-gray-dark">
        {ms}ms
      </span>
    )}
  </div>
);

const Badge: React.FC<{ tone: "req" | "res"; children: React.ReactNode }> = ({
  tone,
  children,
}) => (
  <span
    className={`mr-1.5 rounded px-1.5 py-px text-[10px] tracking-wide ${
      tone === "req"
        ? "bg-code-type/15 text-code-type"
        : "bg-olive/15 text-olive"
    }`}
  >
    {children}
  </span>
);

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mb-1 text-[10px] tracking-[0.12em] text-gray-dark uppercase">
    {children}
  </div>
);

/** One recorded run, opened over the workbench and closed again. */
const TraceView: React.FC = () => (
  <div className="flex max-h-full flex-col overflow-hidden rounded-xl border border-acc-amber/40 bg-[#141414] shadow-2xl ring-1 ring-black/40">
    <div className="flex items-center gap-2 border-b border-[#2f2a22] bg-[#1c1a17] px-4 py-2.5 font-code text-xs">
      <span className="text-acc-amber">trace</span>
      <span className="text-gray-dark">#8812</span>
      <span className="ml-auto flex items-center gap-2">
        <span className="text-gray-dark">POST /checkout</span>
        <span className="rounded bg-olive/15 px-1.5 py-px text-[10px] text-olive">
          200
        </span>
        <span className="text-gray-dark">64ms</span>
      </span>
    </div>

    <div className="min-h-0 flex-1 overflow-hidden px-4 py-3 font-code text-[12px] leading-[1.7] text-[#d4d4d4] md:text-[12.5px]">
      <Label>input</Label>
      <div className="rounded-md bg-[#1b1b1b] px-2.5 py-1.5 break-all">
        {'{ 4200L, "ren@acme.com" }'}
      </div>

      <Label>
        <span className="mt-3 block">call tree</span>
      </Label>
      <Row ms={64}>
        <span className="text-code-fn">Api.checkout</span>
      </Row>
      <div className="ml-2 border-l border-[#2a2a2e] pl-2">
        <Row ms={42}>
          <span className="text-code-fn">Payments.session</span>
        </Row>
        <div className="my-1 ml-2 rounded-md border-l-2 border-code-type/40 bg-[#1b1b1b] px-2.5 py-1.5">
          <div className="truncate">
            <Badge tone="req">POST</Badge>
            <span className="text-gray-light">/v1/checkout/sessions</span>
          </div>
          <div className="truncate">
            <Badge tone="res">200</Badge>
            <span className="text-olive">cs_test_a1B2</span>
          </div>
        </div>
        <Row ms={3}>
          <span className="text-code-fn">Stdlib.DB.set</span>
          <span className="text-gray-dark"> Orders/o-4471</span>
        </Row>
        <Row ms={19}>
          <span className="text-code-fn">Email.confirmation</span>
          <span className="text-gray-dark"> Ok(())</span>
        </Row>
      </div>

      <div className="mt-3">
        <Label>result</Label>
        <div className="rounded-md bg-[#1b1b1b] px-2.5 py-1.5 break-all">
          <span className="rounded bg-olive/15 px-1.5 py-px text-[10px] text-olive">
            200
          </span>
          <span className="ml-1.5 text-olive">cs_test_a1B2</span>
        </div>
      </div>
    </div>

    <div className="border-t border-[#2a2a2e] px-4 py-2 text-[11px] text-gray-dark">
      Replay it against a change, or keep it as a test.
    </div>
  </div>
);

/** The same package on a machine of your own, under that machine's rules. */
const Machine: React.FC = () => (
  <div className="flex h-full flex-col overflow-hidden rounded-xl border border-[#333336] bg-dark-black">
    <div className="flex items-center gap-2 border-b border-[#333336] bg-[#262626] px-4 py-2.5 font-code text-xs">
      <span className="text-acc-teal">home-server</span>
      <span className="ml-auto text-gray-dark">your own box</span>
    </div>
    <div className="min-h-0 flex-1 overflow-hidden px-4 py-3 font-code text-[12.5px] leading-[1.8] whitespace-pre text-[#d4d4d4] md:px-5">
      <div>
        <span className="text-gray-dark">$ </span>dark{" "}
        <span className="text-code-kw">status</span>
      </div>
      <div>
        <span className="text-olive">MyApp</span>
        <span className="text-gray-dark"> main </span>
        <span className="text-code-type">#1844</span>
        <span className="text-gray-dark"> in sync</span>
      </div>
      <div className="mt-3 text-gray-dark">instance policy here</div>
      <div>
        <span className="text-acc-green">+ </span>
        api.stripe.com/v1/checkout/sessions
      </div>
      <div>
        <span className="text-acc-green">+ </span>
        api.postmark.com/email
      </div>
      <div className="text-gray-dark">
        <span className="text-gray-custom"> </span>
        anything not listed is denied
      </div>
      <div className="mt-3 text-gray-custom">
        # same definitions as your laptop,
      </div>
      <div className="text-gray-custom"># under this machine's own rules</div>
    </div>
  </div>
);

const Chrome: React.FC<{
  title: React.ReactNode;
  accent?: string;
  context?: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, accent = "text-gray-dark", context, children }) => (
  <div className="flex h-full flex-col overflow-hidden rounded-xl border border-[#333336] bg-dark-black">
    <div className="flex items-center gap-2 border-b border-[#333336] bg-[#262626] px-4 py-2.5 font-code text-xs">
      <span className={accent}>{title}</span>
      {context && <span className="ml-auto min-w-0">{context}</span>}
    </div>
    {children}
  </div>
);

const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-0 flex-1 overflow-hidden px-4 py-3 font-code text-[12.5px] leading-[1.7] whitespace-pre text-[#d4d4d4] md:px-5 md:py-4 md:text-[13px]">
    {children}
  </div>
);

const Walkthrough: React.FC = () => {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const [i, setI] = useState(reduced ? SCRIPT.length - 1 : 0);
  const [chars, setChars] = useState(0);
  const [wide, setWide] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setWide(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduced || paused) return;
    const e = SCRIPT[i];
    if (!e) {
      const t = setTimeout(() => {
        setI(0);
        setChars(0);
      }, 1200);
      return () => clearTimeout(t);
    }
    const typed = "segs" in e && e.typed;
    if (typed && chars < lineLength(e.segs)) {
      const t = setTimeout(() => setChars(c => c + 1), TYPE_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(
      () => {
        setI(n => n + 1);
        setChars(0);
      },
      (e.pause ?? 300) * SPEED,
    );
    return () => clearTimeout(t);
  }, [i, chars, reduced, paused]);

  const at = Math.min(i, SCRIPT.length - 1);
  const act = SCRIPT[at].act;

  const pause = () => {
    setPaused(true);
    setI(ACT_END[act]);
    setChars(0);
  };

  const play = () => {
    setPaused(false);
    setChars(0);
  };

  // Fold the events reached so far into the state the workbench displays.
  const defs: Def[] = [];
  let branches: Branch[] = [];
  let selected = "";
  let beat: Beat | null = null;
  let cloud = false;
  let traceOpen = false;
  for (const e of SCRIPT.slice(0, i + 1)) {
    if (e.k === "add") defs.push({ ...e.def });
    if (e.k === "sel") selected = e.name;
    if (e.k === "branch") branches = e.branches;
    if ("beat" in e) beat = e.beat ?? null;
    if (e.browser) cloud = true;
    if (e.trace !== undefined) traceOpen = e.trace;
    if (e.k === "perm") {
      const d = defs.find(x => x.name === e.name);
      if (d?.req) d.req = { ...d.req, state: e.state };
    }
    if (e.k === "edit") {
      const d = defs.find(x => x.name === e.name);
      if (d) {
        d.hash = e.hash;
        d.moved = e.moved;
      }
    }
  }
  const current = defs.find(d => d.name === selected);

  /** One aligned row: a gutter mark, then content in a single column. */
  const row = (e: Ev, idx: number) => {
    if (!("segs" in e)) return null;
    const typing = idx === i && e.typed && !reduced && !paused;
    const key = e.tone ?? (e.k === "cmd" ? "cmd" : "");
    const g = GUTTER[key];
    const blank = e.segs.length === 1 && e.segs[0][0] === "";
    return (
      <div key={idx} className="flex gap-2">
        <span className={`w-2 shrink-0 ${g ? g.cls : ""}`}>
          {g ? g.mark : " "}
        </span>
        <span
          className={`min-w-0 whitespace-pre ${e.pad ? "pl-3" : ""} ${e.tone ? TONE_TEXT[e.tone] : ""}`}
        >
          {renderSegs(e.segs, typing ? chars : undefined)}
          {typing && <span className="text-gray-light">▌</span>}
          {blank ? " " : null}
        </span>
      </div>
    );
  };

  const streamOf = (kind: Ev["k"] | Ev["k"][], keep: number) => {
    const kinds = Array.isArray(kind) ? kind : [kind];
    return SCRIPT.slice(0, i + 1)
      .map((e, idx) => ({ e, idx }))
      .filter(({ e }) => kinds.includes(e.k))
      .slice(-keep)
      .map(({ e, idx }) => row(e, idx));
  };

  const zoom = !!beat?.zoom;
  const cli = streamOf(["cmd", "out"], zoom ? 6 : CLI_LINES);

  return (
    <section className="pb-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 2xl:max-w-[100rem]">
        <div className="mx-auto mb-10 max-w-3xl">
          <SectionTitle
            subtitle="The whole loop"
            subtitleColor="text-purple-lbg"
            align="center"
            maxWidth="max-w-3xl"
            description="Install it, ask an agent for a Stripe checkout endpoint, decide what that code may reach, then run it. Nothing here is built, packaged or deployed."
          >
            From an empty machine to a{" "}
            <span className="text-purple-lbg">live endpoint</span>
          </SectionTitle>
        </div>

        <div className="mx-auto max-w-6xl rounded-2xl border border-gray-200 bg-[#F9F9FB] p-4 md:p-6">
          {/* Acts. Clicking one jumps the demo there. */}
          <div className="mb-4 flex flex-wrap items-center justify-center gap-1.5">
            {ACTS.map((a, n) => (
              <React.Fragment key={a.name}>
                {n > 0 && (
                  <span
                    className={`hidden h-px w-4 sm:block ${n <= act ? "bg-purple-lbg/40" : "bg-gray-200"}`}
                  ></span>
                )}
                <button
                  onClick={() => {
                    setI(paused ? ACT_END[n] : ACT_START[n]);
                    setChars(0);
                  }}
                  aria-current={n === act ? "step" : undefined}
                  className={`rounded-full border px-2.5 py-1 text-xs transition-colors sm:px-3.5 sm:py-1.5 sm:text-sm ${
                    n === act
                      ? "border-purple-lbg bg-purple-lbg text-white-custom"
                      : n < act
                        ? "border-purple-lbg/30 bg-white text-purple-lbg"
                        : "border-gray-200 bg-white text-gray-dark hover:border-gray-300"
                  }`}
                >
                  {a.name}
                </button>
              </React.Fragment>
            ))}

            <button
              onClick={paused ? play : pause}
              aria-pressed={paused}
              aria-label={
                paused ? "Play the walkthrough" : "Pause on this step"
              }
              title={paused ? "Play" : "Pause on this step"}
              className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-dark transition-colors hover:border-gray-300 sm:px-3 sm:py-1.5 sm:text-sm"
            >
              {paused ? (
                <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true">
                  <path d="M3 2l7 4-7 4z" fill="currentColor" />
                </svg>
              ) : (
                <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true">
                  <rect
                    x="3"
                    y="2"
                    width="2.5"
                    height="8"
                    fill="currentColor"
                  />
                  <rect
                    x="7"
                    y="2"
                    width="2.5"
                    height="8"
                    fill="currentColor"
                  />
                </svg>
              )}
              {paused ? "Play" : "Pause"}
            </button>
          </div>

          <div className="relative h-[34rem] md:h-[30rem]">
            {/* Act 0: one console, before there is anything to watch. */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                act > 0 ? "pointer-events-none opacity-0" : "opacity-100"
              }`}
            >
              <div className="mx-auto h-full max-w-3xl">
                <Chrome
                  title="your shell"
                  context={<span className="text-gray-dark">no project</span>}
                >
                  <Body>
                    {SCRIPT.slice(0, i + 1)
                      .map((e, idx) => ({ e, idx }))
                      .filter(({ e }) => e.k === "shell")
                      .map(({ e, idx }) => row(e, idx))}
                  </Body>
                </Chrome>
              </div>
            </div>

            {/* Acts 1 and up: the agent, and the workbench it writes into. */}
            <div
              className={`absolute inset-0 grid grid-rows-[9rem_1fr] gap-4 transition-opacity duration-500 md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] md:grid-rows-1 ${
                act > 0 && !cloud
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            >
              <div className="min-h-0">
                <Chrome
                  title={
                    <span className="flex items-center gap-2">
                      agent
                      <span className="flex items-center gap-1.5 text-gray-dark">
                        {AGENTS.map(a => (
                          <a.Icon
                            key={a.name}
                            className="h-3.5 w-3.5 opacity-80"
                          />
                        ))}
                      </span>
                    </span>
                  }
                  accent="text-acc-pink"
                  context={
                    <span className="font-code text-code-type">
                      agent/stripe
                    </span>
                  }
                >
                  <Body>
                    {/* Steps back while the workbench is lit up. */}
                    <div
                      className={`transition-opacity duration-500 ${
                        beat ? "opacity-35" : "opacity-100"
                      }`}
                    >
                      {streamOf(
                        "agent",
                        wide ? AGENT_LINES.wide : AGENT_LINES.narrow,
                      )}
                    </div>
                  </Body>
                </Chrome>
              </div>

              <div className="relative min-h-0">
                <Chrome
                  title={
                    <span className="flex items-center gap-2">
                      <img
                        src="/assets/branding/logo-light-transparent.svg"
                        alt=""
                        className="h-4 w-4"
                      />
                      workbench
                    </span>
                  }
                  accent="text-purple-lbg"
                  context={
                    <span className="flex items-center gap-1.5">
                      {branches.map(b => (
                        <span
                          key={b.name}
                          className={`rounded-full border px-2 py-0.5 font-code text-[11px] ${
                            b.active
                              ? "border-code-type/50 bg-code-type/10 text-code-type"
                              : "border-[#3a3a3f] text-gray-dark"
                          }`}
                        >
                          {b.name}
                          {b.ops > 0 ? ` ${b.ops}` : ""}
                        </span>
                      ))}
                    </span>
                  }
                >
                  <div className="flex min-h-0 flex-1 flex-col">
                    <div className="grid min-h-0 flex-1 grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
                      {/* What has been added, in the order it arrived. */}
                      <div className="min-h-0 overflow-hidden border-b border-[#2a2a2e] px-4 py-3 font-code text-[12.5px] leading-[1.75] md:border-r md:border-b-0 md:text-[13px]">
                        <div className="text-gray-dark">MyApp</div>
                        {defs.map(d => {
                          const on = d.name === selected;
                          const lit = !beat || beat.def === d.name;
                          return (
                            <div
                              key={d.name}
                              className={`flex gap-2 transition-opacity duration-500 ${
                                lit ? "opacity-100" : "opacity-30"
                              }`}
                            >
                              <span
                                className={
                                  d.hash ? "text-classic-yellow" : "text-olive"
                                }
                              >
                                {d.hash ? "~" : "+"}
                              </span>
                              <span
                                className={`truncate ${
                                  on
                                    ? d.kind === "type"
                                      ? "text-code-type"
                                      : "text-code-fn"
                                    : "text-gray-dark"
                                }`}
                              >
                                {d.name}
                              </span>
                              {/* What it needs, until you have decided;
                                  then what you decided. */}
                              {d.req && (
                                <span
                                  className={`ml-auto shrink-0 text-[11px] ${
                                    d.req.state === "allowed"
                                      ? "text-olive"
                                      : d.req.state === "denied"
                                        ? "text-code-rust"
                                        : "text-gray-dark"
                                  }`}
                                >
                                  {d.req.state === "denied"
                                    ? "denied"
                                    : d.req.effect}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* The selected definition, and what it may reach. */}
                      <div className="hidden min-h-0 overflow-hidden px-4 py-3 font-code text-[12.5px] leading-[1.7] md:block md:text-[13px]">
                        {current ? (
                          <>
                            <div className="flex items-baseline gap-2">
                              <span
                                className={
                                  current.kind === "type"
                                    ? "text-code-type"
                                    : "text-code-fn"
                                }
                              >
                                {current.name}
                              </span>
                              {current.hash && (
                                <span className="text-[11px] text-classic-yellow">
                                  {current.hash}
                                </span>
                              )}
                            </div>
                            <div className="truncate text-[11px] text-gray-dark">
                              {current.sig}
                            </div>
                            <div className="mt-2 whitespace-pre text-[#d4d4d4]">
                              {current.body.join("\n")}
                            </div>
                            {current.req && (
                              <div className="mt-2 text-[11px]">
                                <div>
                                  <span className="text-gray-dark">
                                    requires{" "}
                                  </span>
                                  <span className="text-code-type">
                                    {current.req.effect}
                                  </span>
                                  {current.req.via && (
                                    <>
                                      <span className="text-gray-dark">
                                        {" "}
                                        via{" "}
                                      </span>
                                      <span className="text-code-fn">
                                        {current.req.via}
                                      </span>
                                    </>
                                  )}
                                </div>
                                <div className="break-all whitespace-normal text-[#d4d4d4]">
                                  {current.req.request}
                                </div>
                                <div>
                                  <span className="text-gray-dark">
                                    ceiling{" "}
                                  </span>
                                  <span className="text-code-type">
                                    {current.req.ceiling}
                                  </span>
                                </div>
                                <span
                                  className={`mt-1 inline-block rounded-full border px-2 py-0.5 transition-colors duration-300 ${PILL[current.req.state].cls}`}
                                >
                                  {PILL[current.req.state].label}
                                </span>
                              </div>
                            )}
                            {current.moved && current.moved.length > 0 && (
                              <div className="mt-2 text-[11px]">
                                <span className="text-gray-dark">
                                  callers moved{" "}
                                </span>
                                <span className="text-code-fn">
                                  {current.moved.join(", ")}
                                </span>
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="text-gray-dark">
                            nothing selected yet
                          </div>
                        )}
                      </div>
                    </div>

                    {/* The CLI: what you run yourself. It swells when the
                        thing that matters is happening here, and settles
                        back afterwards. */}
                    <div
                      className={`relative shrink-0 overflow-hidden border-t px-4 py-2.5 leading-[1.7] font-code text-[#d4d4d4] transition-all duration-500 ${
                        zoom
                          ? "h-[12rem] text-[14px] shadow-[0_-10px_30px_rgba(0,0,0,0.45)] md:text-[15px]"
                          : "h-[7.5rem] text-[12px] md:text-[12.5px]"
                      } ${
                        beat
                          ? beat.tone === "issue"
                            ? "border-rust/50 bg-rust/10"
                            : "border-olive/40 bg-olive/10"
                          : "border-[#2a2a2e] bg-[#171717]"
                      }`}
                    >
                      {beat && (
                        <span
                          className={`absolute top-2 right-3 rounded-full border px-2 py-0.5 text-[11px] ${
                            beat.tone === "issue"
                              ? "border-rust/50 bg-rust/15 text-rust"
                              : "border-olive/40 bg-olive/15 text-olive"
                          }`}
                        >
                          {beat.label}
                        </span>
                      )}
                      {cli}
                    </div>
                  </div>
                </Chrome>

                {/* A recorded run, opened in front of everything else. */}
                <div
                  className={`absolute right-2 bottom-2 left-2 z-10 origin-bottom-right transition-all duration-500 md:left-[42%] ${
                    traceOpen
                      ? "translate-y-0 scale-100 opacity-100"
                      : "pointer-events-none translate-y-3 scale-95 opacity-0"
                  }`}
                >
                  <TraceView />
                </div>
              </div>
            </div>

            {/* After the sync: the same tree, on the web. */}
            <div
              className={`absolute inset-0 transition-opacity duration-700 ${
                cloud ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <div className="grid h-full grid-rows-[1fr_11rem] gap-4 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:grid-rows-1">
                <Cloud />
                <Machine />
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-3xl text-center text-base text-gray-dark md:text-lg">
          {ACTS[act].caption}
        </p>
      </div>
    </section>
  );
};

export default Walkthrough;
