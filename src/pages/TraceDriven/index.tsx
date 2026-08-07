import React, { useState } from "react";
import { Link } from "react-router-dom";

/* ------------------------------------------------------------------ */
/* Reusable pieces                                                     */
/* ------------------------------------------------------------------ */

/** One ground throughout; space alone separates the sections. */
const Shell: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <section className={className}>
    <div className="mx-auto max-w-7xl 2xl:max-w-[100rem] px-4 py-14 md:py-20">
      {children}
    </div>
  </section>
);

const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-acc-amber 2xl:text-base">
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
    className={`text-base leading-relaxed text-gray-700 md:text-lg 2xl:text-xl ${className}`}
  >
    {children}
  </p>
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

/** The claim, then the mechanism behind it. */
const Point: React.FC<{
  h: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}> = ({ h, icon, children }) => (
  <div className="flex gap-4">
    {icon && (
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-acc-amber/10 text-acc-amber">
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
  <span className="font-code text-sm text-acc-amber">{children}</span>
);

/* ------------------------------------------------------------------ */
/* Terminal                                                            */
/* ------------------------------------------------------------------ */

type TermLine =
  | { kind: "cmd"; text: string }
  | { kind: "out"; text: string }
  | { kind: "hit"; text: string }
  | { kind: "gap" }
  | {
      kind: "call";
      fn: string;
      args?: string;
      ret?: string;
      ms?: string;
      depth?: number;
    };

const cmd = (text: string): TermLine => ({ kind: "cmd", text });
const out = (text: string): TermLine => ({ kind: "out", text });
const hit = (text: string): TermLine => ({ kind: "hit", text });
const call = (
  fn: string,
  args?: string,
  ret?: string,
  ms?: string,
  depth = 0,
): TermLine => ({ kind: "call", fn, args, ret, ms, depth });

/** The command line, coloured like the shell would: binary, verb, argument. */
const CmdLine: React.FC<{ text: string }> = ({ text }) => (
  <>
    {text.split(" ").map((tok, i) => {
      const cls =
        tok === "dark"
          ? "text-classic-purple"
          : tok.startsWith("--")
            ? "text-classic-blue"
            : /^["']/.test(tok) ||
                /^[0-9a-f]{6,}$/i.test(tok) ||
                /^\d+$/.test(tok)
              ? "text-classic-yellow"
              : "text-gray-100";
      return (
        <span key={i} className={cls}>
          {i > 0 ? " " : ""}
          {tok}
        </span>
      );
    })}
  </>
);

/**
 * Captured CLI output. The command line is the header: no window chrome, a
 * rule beneath it, and the line that answers the question picked out in the
 * page's accent.
 */
const Term: React.FC<{ lines: TermLine[]; label?: string }> = ({
  lines,
  label,
}) => (
  <div className="overflow-hidden rounded-2xl bg-dark shadow-[0_24px_54px_-30px_rgba(30,30,40,0.8)] ring-1 ring-white/[0.07]">
    {label && (
      <p className="border-b border-white/[0.07] px-5 pb-2 pt-3.5 font-code text-[10px] uppercase tracking-[0.14em] text-gray-600">
        {label}
      </p>
    )}
    <div className="overflow-x-auto px-5 py-4 font-code text-xs leading-7 sm:text-[13px]">
      {lines.map((line, i) => {
        if (line.kind === "gap") return <div key={i} className="h-4" />;
        if (line.kind === "cmd") {
          return (
            <div
              key={i}
              className="mb-2 flex gap-2 whitespace-pre border-b border-white/[0.07] pb-2"
            >
              <span className="select-none text-classic-purple">$</span>
              <CmdLine text={line.text} />
            </div>
          );
        }
        if (line.kind === "call") {
          return (
            <div
              key={i}
              className="flex items-baseline gap-2 whitespace-pre"
              style={{ paddingLeft: `${(line.depth ?? 0) * 1.1}rem` }}
            >
              <span className="text-code-fn">{line.fn}</span>
              {line.args && <span className="text-gray-200">{line.args}</span>}
              {line.ret && (
                <>
                  <span className="text-gray-600">&rarr;</span>
                  <span className="text-classic-yellow">{line.ret}</span>
                </>
              )}
              {line.ms && (
                <span className="ml-auto pl-4 tabular-nums text-gray-500">
                  {line.ms}
                </span>
              )}
            </div>
          );
        }
        return (
          <div
            key={i}
            className={`whitespace-pre ${
              line.kind === "hit" ? "text-code-fn" : "text-gray-light"
            }`}
          >
            {line.text}
          </div>
        );
      })}
    </div>
  </div>
);

const JSON_TERM: TermLine[] = [
  cmd("dark traces list 2 --json"),
  out(
    '[{"handler":"eval","timestamp":"2026-08-06T08:34:45Z","traceId":"fe6029ca-…"}, …]',
  ),
];

/* ------------------------------------------------------------------ */
/* Trace inspector: the page's own visual, built from call trees        */
/* ------------------------------------------------------------------ */

type Call = {
  depth: number;
  fn: string;
  args: string;
  ret?: string;
  ms: number;
};

const CALLS: Call[] = [
  {
    depth: 0,
    fn: "Stdlib.List.map",
    args: "[12, 8, 30], (lambda)",
    ret: "[24, 16, 60]",
    ms: 2,
  },
  {
    depth: 1,
    fn: "Stdlib.List.fold",
    args: "[12, 8, 30], [], (lambda)",
    ret: "[60, 16, 24]",
    ms: 1,
  },
  {
    depth: 2,
    fn: "Stdlib.List.reverse",
    args: "[60, 16, 24]",
    ret: "[24, 16, 60]",
    ms: 0,
  },
];

/**
 * The argument, made switchable: pick any kind of execution and the same two
 * columns answer for it. What you wrote stays short; what was recorded never
 * needed asking for.
 */
type Kind = {
  id: string;
  label: string;
  hint: string;
  tone: string;
  glyph: React.ReactNode;
  /** how the opening sentence refers to it */
  phrase: string;
  /** its colour as plain text, for the sentence */
  ink: string;
  /** dressed as whatever kind of thing this is: a route, a schedule, a queue */
  chip: React.ReactNode;
  /** the recorded side takes the colour of the thing being looked at */
  tint: string;
  label2: string;
  wrote: string[];
  /** what started the execution, recorded verbatim so it can be replayed */
  input: string[];
  recorded: { fn: string; val: string; ms: string; depth?: number }[];
};

const KINDS: Kind[] = [
  {
    id: "call",
    label: "a function call",
    hint: "dark eval",
    phrase: "a function call",
    ink: "text-blue-dbg",
    tone: "bg-blue-lbg text-blue-dbg",
    glyph: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2.5" />
        <path d="m7.5 10 2.5 2.5-2.5 2.5M13 15h4" />
      </>
    ),
    chip: (
      <span className="inline-flex items-center gap-2.5">
        <span className="rounded-md bg-blue-lbg px-2 py-1 font-code text-[11px] font-bold tracking-wide text-white">
          fn
        </span>
        <span className="font-code text-sm text-gray-800">
          Notify.formatIssue
        </span>
      </span>
    ),
    tint: "bg-blue-lbg/[0.05]",
    label2: "text-blue-dbg",
    wrote: [
      "Notify.formatIssue",
      '  { repo = "dark/dark"',
      "    number = 4821 }",
    ],
    input: ["Notify.formatIssue", '  { repo = "dark/dark"; number = 4821 }'],
    recorded: [
      { fn: "Notify.formatIssue", val: '"dark/dark#4821"', ms: "1ms" },
      { fn: "Stdlib.Int.toString", val: '"4821"', ms: "0ms", depth: 1 },
      {
        fn: "Stdlib.String.join",
        val: '"dark/dark#4821"',
        ms: "0ms",
        depth: 1,
      },
    ],
  },
  {
    id: "cli",
    label: "a CLI run",
    hint: "dark run ./deploy.dark",
    phrase: "a whole CLI run",
    ink: "text-purple-lbg",
    tone: "bg-purple-lbg/10 text-purple-lbg",
    glyph: (
      <>
        <path d="M4 17V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
        <path d="m8 10 2 2-2 2M13 14h4" />
      </>
    ),
    chip: (
      <span className="inline-flex items-center gap-2 font-code text-sm text-gray-800">
        <span className="text-acc-green">$</span>
        dark run ./deploy.dark
      </span>
    ),
    tint: "bg-purple-lbg/[0.05]",
    label2: "text-purple-lbg",
    wrote: [
      "let main (args: List<String>) =",
      '  let env = Args.get args "--env"',
      "  Deploy.run env",
    ],
    input: [
      "dark run ./deploy.dark --env staging",
      '  argv = ["--env", "staging"]',
    ],
    recorded: [
      { fn: "Args.get", val: '"staging"', ms: "0ms" },
      { fn: "Deploy.run", val: "Ok", ms: "8.7s" },
      { fn: "Build.assets", val: "42 files", ms: "4.2s", depth: 1 },
      { fn: "Stdlib.printLine", val: "()", ms: "0ms", depth: 1 },
    ],
  },
  {
    id: "request",
    label: "an HTTP request",
    hint: "POST /webhooks/github",
    phrase: "an HTTP request",
    ink: "text-blue-400",
    tone: "bg-blue-50 text-blue-500",
    glyph: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" />
      </>
    ),
    chip: (
      <span className="inline-flex items-center gap-2.5">
        <span className="rounded-md bg-blue-400 px-2 py-1 font-code text-[11px] font-bold tracking-wide text-white">
          POST
        </span>
        <span className="font-code text-sm text-gray-800">
          /webhooks/github
        </span>
      </span>
    ),
    tint: "bg-blue-50",
    label2: "text-blue-500",
    wrote: [
      "let onPush (req: Request) =",
      "  let event = Webhook.parse req",
      "  let msg = Notify.formatIssue event.issue",
      "  Notify.notify event.repo msg",
    ],
    input: [
      "POST /webhooks/github",
      "  x-github-event: issues",
      '  { "action": "opened", "issue": 4821 }',
    ],
    recorded: [
      { fn: "Webhook.parse", val: "Event { … }", ms: "2ms" },
      {
        fn: "Notify.formatIssue",
        val: '"dark/dark#4821"',
        ms: "1ms",
        depth: 1,
      },
      { fn: "Notify.notify", val: "Ok", ms: "40ms" },
      { fn: "Http.post", val: "200", ms: "38ms", depth: 1 },
    ],
  },
  {
    id: "cron",
    label: "a scheduled job",
    hint: "cron 03:00",
    phrase: "a scheduled job",
    ink: "text-taupe",
    tone: "bg-taupe/15 text-taupe",
    glyph: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    chip: (
      <span className="inline-flex items-center gap-2.5">
        <span className="rounded-md bg-taupe/15 px-2.5 py-1 font-code text-[12px] tracking-[0.18em] text-taupe">
          0 3 * * *
        </span>
        <span className="font-code text-sm text-gray-800">
          every day at 03:00
        </span>
      </span>
    ),
    tint: "bg-taupe/[0.07]",
    label2: "text-taupe",
    wrote: [
      "let nightly () =",
      '  let events = DB.getAll "events"',
      "  Digest.summarize events |> Mail.send",
    ],
    input: ["tick = 2026-08-06T03:00:00Z", "  schedule: nightly"],
    recorded: [
      { fn: "DB.getAll", val: "214 events", ms: "310ms" },
      { fn: "Digest.summarize", val: '"12 repos, 63 issues"', ms: "40ms" },
      { fn: "Stdlib.List.groupBy", val: "12 groups", ms: "8ms", depth: 1 },
      { fn: "Mail.send", val: "Ok", ms: "180ms" },
    ],
  },
  {
    id: "worker",
    label: "a background worker",
    hint: "queue: notifications",
    phrase: "a worker event",
    ink: "text-gray-600",
    tone: "bg-gray-100 text-gray-600",
    glyph: (
      <>
        <path d="M4 7h10M4 12h16M4 17h7" />
        <circle cx="18" cy="7" r="2.5" />
        <circle cx="14" cy="17" r="2.5" />
      </>
    ),
    chip: (
      <span className="inline-flex items-center gap-2.5">
        <span className="font-code text-sm text-gray-800">
          queue: notifications
        </span>
        <span className="rounded-full bg-gray-100 px-2 py-0.5 font-code text-[11px] text-gray-500">
          3 waiting
        </span>
      </span>
    ),
    tint: "bg-gray-50",
    label2: "text-gray-500",
    wrote: [
      "let onQueued (job: Job) =",
      "  let msg = Notify.formatIssue job.issue",
      "  Notify.notify job.repo msg",
    ],
    input: [
      "queue: notifications",
      '  { "repo": "dark/dark",',
      '    "issue": 4821 }',
    ],
    recorded: [
      { fn: "Queue.pop", val: "Job { … }", ms: "2ms" },
      { fn: "Notify.formatIssue", val: '"dark/dark#4821"', ms: "1ms" },
      { fn: "Notify.notify", val: "Ok", ms: "820ms" },
      { fn: "Http.post", val: "200", ms: "812ms", depth: 1 },
    ],
  },
];

/** A word in the opening sentence that also picks what the card shows. */
const KindButton: React.FC<{
  kind: Kind;
  on: boolean;
  onPick: () => void;
}> = ({ kind, on, onPick }) => (
  <button
    type="button"
    aria-pressed={on}
    onClick={onPick}
    className={`group inline-flex items-baseline gap-1.5 rounded-md px-1.5 py-0.5 align-baseline transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 ${
      on
        ? `${kind.ink} font-semibold`
        : `${kind.ink} hover:underline hover:decoration-1 hover:underline-offset-4`
    }`}
  >
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
      className="shrink-0 translate-y-px"
    >
      {kind.glyph}
    </svg>
    {kind.phrase}
  </button>
);

/**
 * The hero. The opening sentence lists what leaves a trace, and each of those
 * is the control: pick one and the card beside it answers for that kind.
 */
const Hero: React.FC = () => {
  const [active, setActive] = useState(KINDS[0].id);
  const kind = KINDS.find(k => k.id === active) ?? KINDS[0];
  const pick = (k: Kind) => (
    <KindButton
      key={k.id}
      kind={k}
      on={k.id === active}
      onPick={() => setActive(k.id)}
    />
  );

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1.2fr] lg:gap-12">
      <div>
        <Eyebrow>Traces, built in</Eyebrow>
        <h1 className="mb-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-5xl 2xl:text-6xl">
          See What Your Program{" "}
          <span className="text-acc-amber">Actually Did</span>
        </h1>
        <p className="text-base leading-loose text-gray-700 md:text-lg 2xl:text-xl">
          Every execution leaves a trace, whether it is {pick(KINDS[0])},{" "}
          {pick(KINDS[2])}, {pick(KINDS[3])}, {pick(KINDS[4])}, or{" "}
          {pick(KINDS[1])}. The full call tree, with the real arguments, real
          return values, and timings. Not logs you remembered to write. The
          execution itself, recorded.
        </p>
      </div>

      <div className="min-w-0">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_24px_54px_-34px_rgba(30,30,60,0.45)]">
          <div
            key={kind.id}
            className="animate-rise-in grid divide-y divide-gray-100 sm:min-h-[15.25rem] sm:grid-cols-[0.8fr_1.2fr] sm:divide-x sm:divide-y-0"
          >
            <div className="flex flex-col p-5">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-gray-400">
                what you wrote
              </p>
              <div className="mb-4">{kind.chip}</div>
              <div className="grid gap-1 overflow-x-auto">
                {kind.wrote.map((line, i) => (
                  <p
                    key={i}
                    className="whitespace-pre font-code text-xs text-gray-700"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div className={`flex flex-col p-5 ${kind.tint}`}>
              <p
                className={`mb-3 text-[10px] font-semibold uppercase tracking-[0.13em] ${kind.label2}`}
              >
                what was recorded
              </p>

              {/* the input is recorded too, which is what makes replay possible */}
              <div className="mb-3 overflow-x-auto rounded-lg bg-white/80 px-3 py-2 ring-1 ring-gray-900/[0.06]">
                <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.13em] text-gray-400">
                  input
                </p>
                {kind.input.map((line, i) => (
                  <p
                    key={i}
                    className="whitespace-pre font-code text-[11px] text-gray-600"
                  >
                    {line}
                  </p>
                ))}
              </div>

              <div className="grid min-w-0 gap-1.5">
                {kind.recorded.map(r => (
                  <div
                    key={r.fn}
                    className="flex min-w-0 items-baseline justify-between gap-3 font-code text-xs"
                    style={{ paddingLeft: `${(r.depth ?? 0) * 0.85}rem` }}
                  >
                    <span className="min-w-0 truncate text-blue-dbg">
                      {r.fn}
                    </span>
                    <span className="flex shrink-0 items-baseline gap-3">
                      <span className="text-acc-green">{r.val}</span>
                      <span className="w-11 text-right tabular-nums text-gray-400">
                        {r.ms}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 border-t border-gray-100 bg-gray-50 px-5 py-3 text-center text-xs text-gray-500">
            {["imports", "log lines", "middleware"].map((what, i) => (
              <React.Fragment key={what}>
                {i > 0 && (
                  <span aria-hidden="true" className="text-gray-300">
                    ·
                  </span>
                )}
                <span className="flex items-baseline gap-1.5">
                  <span className="font-code text-base font-semibold text-gray-400">
                    0
                  </span>
                  {what}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * A recorded call tree: nesting on the left, what came back in the middle,
 * how long it took on the right rail.
 */
const TraceTree: React.FC<{
  id: string;
  handler: string;
  input?: string;
  calls: Call[];
}> = ({ id, handler, input, calls }) => {
  const slowest = Math.max(...calls.map(c => c.ms), 1);
  const total = calls.reduce((n, c) => Math.max(n, c.ms), 0);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_22px_50px_-32px_rgba(30,30,60,0.5)]">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-gray-100 bg-gray-50/70 px-5 py-3">
        <span className="font-code text-xs text-gray-400">trace</span>
        <span className="font-code text-xs text-gray-700">{id}</span>
        <span className="font-code text-xs text-gray-300">·</span>
        <span className="font-code text-xs text-acc-amber">{handler}</span>
        <span className="ml-auto font-code text-xs tabular-nums text-gray-400">
          {total}ms
        </span>
      </div>

      {input && (
        <div className="border-b border-gray-100 px-5 py-2.5">
          <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.13em] text-gray-400">
            input
          </p>
          <p className="overflow-x-auto whitespace-pre font-code text-[11px] text-gray-600">
            {input}
          </p>
        </div>
      )}

      <div className="px-5 py-4">
        <div className="grid gap-2.5 px-5 py-3.5">
          {calls.map((c, i) => (
            <div
              key={i}
              className="min-w-0"
              style={{ paddingLeft: `${c.depth * 1.15}rem` }}
            >
              <div className="flex min-w-0 items-baseline gap-2">
                {c.depth > 0 && (
                  <span
                    aria-hidden="true"
                    className="-ml-3 shrink-0 font-code text-xs text-gray-300"
                  >
                    &#9492;
                  </span>
                )}
                <span className="shrink-0 font-code text-xs text-acc-amber">
                  {c.fn}
                </span>
                <span className="truncate font-code text-[11px] text-gray-400">
                  ({c.args})
                </span>
              </div>

              <div className="mt-0.5 flex items-center gap-2.5 pl-3">
                <span
                  aria-hidden="true"
                  className="shrink-0 font-code text-[11px] text-gray-300"
                >
                  &rarr;
                </span>
                <span className="min-w-0 truncate font-code text-xs text-acc-green">
                  {c.ret}
                </span>

                {/* how long it took, kept clear of the values */}
                <span className="ml-auto flex shrink-0 items-center gap-2">
                  <span className="block h-1.5 w-14 overflow-hidden rounded-full bg-gray-100">
                    <span
                      aria-hidden="true"
                      className="block h-full rounded-full bg-acc-amber/40"
                      style={{
                        width: `${Math.max((c.ms / slowest) * 100, 8)}%`,
                      }}
                    />
                  </span>
                  <span className="w-8 text-right font-code text-[11px] tabular-nums text-gray-400">
                    {c.ms}ms
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * What `traces tail` does: the newest execution at the top, opened into its
 * call tree. One call failed, and the trace kept the arguments it received.
 */
const TAILED = [
  {
    fn: "Notify.channelFor",
    args: '"dark/dark"',
    ret: '"#eng"',
    ms: "1ms",
  },
  {
    fn: "Stdlib.printLine",
    args: '"sending to #eng"',
    ret: "()",
    ms: "0ms",
  },
  {
    fn: "Notify.notify",
    args: '"dark/dark", "#eng"',
    ret: "Error: channel not found",
    ms: "38ms",
    failed: true,
  },
];

const RecentTraces: React.FC = () => (
  <div className="min-w-0">
    {/* the run tail opened */}
    <div className="flex items-baseline gap-3">
      <span
        aria-hidden="true"
        className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rust ring-4 ring-rust/15"
      />
      <span className="min-w-0 truncate font-code text-sm text-gray-900">
        POST /webhooks/github
      </span>
      <span className="ml-auto shrink-0 font-code text-xs tabular-nums text-gray-400">
        41ms
      </span>
    </div>
    <p className="mb-5 mt-1 pl-5 text-[11px] text-gray-400">
      08:34:12 · failed after 3 calls
    </p>

    <ol className="grid gap-3">
      {TAILED.map(c => (
        <li
          key={c.fn}
          className={`relative min-w-0 rounded-xl px-3.5 py-2.5 ${
            c.failed
              ? "bg-rust/[0.06] ring-1 ring-rust/20"
              : "bg-gray-50/80 opacity-70"
          }`}
        >
          <div className="flex min-w-0 items-baseline gap-2">
            <span
              className={`shrink-0 font-code text-[13px] ${
                c.failed ? "font-semibold text-rust" : "text-gray-800"
              }`}
            >
              {c.fn}
            </span>
            <span className="truncate font-code text-[11px] text-gray-500">
              {c.args}
            </span>
            <span className="ml-auto shrink-0 font-code text-[11px] tabular-nums text-gray-400">
              {c.ms}
            </span>
          </div>
          <p
            className={`mt-1 truncate font-code text-[12px] ${
              c.failed ? "text-rust" : "text-acc-amber"
            }`}
          >
            {c.failed && (
              <span aria-hidden="true" className="pr-1.5">
                &#10005;
              </span>
            )}
            {c.ret}
          </p>
        </li>
      ))}
    </ol>

    <p className="mt-4 text-[11px] leading-relaxed text-gray-400">
      the call that failed, with the arguments it was given
    </p>
  </div>
);

/**
 * The loop the section describes, as three beats rather than five stacked
 * arrows: send something real, model what arrived, hold later requests to it.
 */
const LOOP = [
  {
    n: "01",
    h: "Send a real request",
    p: "Start the server and hit the path you intend to build, before writing any of it.",
  },
  {
    n: "02",
    h: "Model what you got",
    p: "Read the payload out of the trace and write the records and enums that describe it.",
  },
  {
    n: "03",
    h: "Hold later requests to it",
    p: "The captured request is evidence, not a schema, so model optional fields and variants explicitly. Decode into those types, and reject anything that does not satisfy the contract.",
  },
];

const BuildLoop: React.FC = () => (
  <ol className="grid max-w-3xl gap-5">
    {LOOP.map((s, i) => (
      <li key={s.n} className="relative flex gap-4">
        {i < LOOP.length - 1 && (
          <span
            aria-hidden="true"
            className="absolute bottom-[-1.25rem] left-[13px] top-8 w-px bg-gray-200"
          />
        )}
        <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-acc-amber/10 font-code text-[11px] text-acc-amber">
          {s.n}
        </span>
        <div className="min-w-0 pt-0.5">
          <p className="font-semibold text-gray-900">{s.h}</p>
          <p className="mt-0.5 text-sm leading-relaxed text-gray-500">{s.p}</p>
        </div>
      </li>
    ))}
  </ol>
);

/**
 * The same three beats, sketched: a request hits nothing, the miss leaves a
 * trace, and the trace is what the handler gets written from. The turbulence
 * filter is what keeps the lines looking drawn rather than plotted.
 */
const FlowArrow: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    className="mx-auto h-5 w-5 text-gray-300"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 2v16" strokeDasharray="4 5" />
    <path d="m8 14 4 5 4-5" />
  </svg>
);

/**
 * The three beats as one drawing: a request meets nothing, the miss is
 * recorded anyway, and what you write from it decides what gets in next time.
 */
const RequestFlow: React.FC = () => (
  <div className="mx-auto w-full max-w-[17rem]">
    <PlaceCard
      dense
      label="A real request"
      sub={<span className="text-rust">404, nothing there yet</span>}
      glyph={
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" />
        </>
      }
    />

    <FlowArrow />

    <PlaceCard
      dense
      label="Recorded anyway"
      sub="the trace it left"
      glyph={
        <>
          <rect x="3" y="4" width="18" height="16" rx="2.5" />
          <path d="M3 9h18" />
          <path d="M7 14h10M7 17h6" />
        </>
      }
    />

    <FlowArrow />

    <PlaceCard
      dense
      label="The types you wrote"
      sub="every later request"
      glyph={<path d="M12 3l8 3v6c0 4.4-3.2 8.1-8 9-4.8-.9-8-4.6-8-9V6z" />}
    >
      {/* what step 03 actually does: sort what arrives next */}
      <div className="mt-1 flex items-center justify-center gap-4">
        {[
          {
            k: "fits",
            tone: "text-acc-green",
            mark: <path d="M4 8.5l3 3 6-7" />,
          },
          {
            k: "turned away",
            tone: "text-rust",
            mark: <path d="M4.5 4.5l8 8M12.5 4.5l-8 8" />,
          },
        ].map(o => (
          <span
            key={o.k}
            className="flex items-center gap-1.5 font-code text-[11px] text-gray-500"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 17 17"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className={o.tone}
            >
              {o.mark}
            </svg>
            {o.k}
          </span>
        ))}
      </div>
    </PlaceCard>
  </div>
);

/**
 * Two places, one record. The drawing is the argument: whatever machine ran
 * the program, what you get back to look at is the same trace.
 */
const PlaceCard: React.FC<{
  label: string;
  sub?: React.ReactNode;
  glyph: React.ReactNode;
  children?: React.ReactNode;
  /** the flow reuses these cards, where they need to stay short */
  dense?: boolean;
}> = ({ label, sub, glyph, children, dense = false }) => (
  <div
    className={`flex flex-col items-center rounded-2xl border border-dashed border-gray-300 px-4 ${
      dense ? "gap-1 py-3" : "gap-2 py-5"
    }`}
  >
    <span className="text-gray-400">
      <svg
        width={dense ? 24 : 34}
        height={dense ? 24 : 34}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {glyph}
      </svg>
    </span>
    <span
      className={`text-center font-semibold text-gray-900 ${
        dense ? "text-[13px]" : "text-sm"
      }`}
    >
      {label}
    </span>
    {sub && (
      <span className="text-center font-code text-[11px] text-gray-400">
        {sub}
      </span>
    )}
    {children}
  </div>
);

const SameTrace: React.FC = () => (
  <div className="min-w-0">
    <div className="grid grid-cols-2 gap-5">
      <PlaceCard
        label="Your machine"
        sub="dark traces tail"
        glyph={
          <>
            <rect x="3" y="4.5" width="18" height="12" rx="1.8" />
            <path d="M1.5 19.5h21" />
          </>
        }
      />
      <PlaceCard
        label="Darklang Cloud"
        sub="dark traces tail"
        glyph={
          <>
            <path d="M7.5 18.5h9.5a4 4 0 0 0 .6-7.96 6 6 0 0 0-11.55-1.6A3.95 3.95 0 0 0 7.5 18.5z" />
          </>
        }
      />
    </div>

    {/* the two paths meeting: same commands, same record */}
    <svg
      viewBox="0 0 200 52"
      className="h-14 w-full"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M50 0 C 50 30, 100 20, 100 50"
        stroke="#d1d5db"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M150 0 C 150 30, 100 20, 100 50"
        stroke="#d1d5db"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        vectorEffect="non-scaling-stroke"
      />
    </svg>

    <p className="-mt-3 mb-3 text-center text-sm font-semibold text-acc-amber">
      the same trace
    </p>

    <div className="mx-auto w-full max-w-[21rem] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_18px_44px_-32px_rgba(30,30,60,0.5)]">
      <div className="border-b border-gray-100 bg-gray-50/70 px-3.5 py-2.5">
        <p className="flex items-baseline gap-2">
          <span className="font-code text-[11px] text-gray-400">trace</span>
          <span className="font-code text-[11px] text-gray-700">fe6029ca</span>
        </p>
        <p className="font-code text-[11px] text-acc-amber">
          POST /webhooks/github
        </p>
      </div>

      <div className="grid min-w-0 gap-1.5 px-3.5 py-3">
        {[
          { fn: "Webhook.parse", val: "Event { … }", ms: "2ms", depth: 0 },
          {
            fn: "Notify.formatIssue",
            val: '"dark/dark#4821"',
            ms: "1ms",
            depth: 1,
          },
          { fn: "Notify.notify", val: "Ok", ms: "40ms", depth: 0 },
        ].map(c => (
          <div
            key={c.fn}
            className="flex min-w-0 items-baseline gap-1.5 font-code text-[11px]"
            style={{ paddingLeft: `${c.depth * 0.7}rem` }}
          >
            <span className="shrink-0 text-blue-dbg">{c.fn}</span>
            <span aria-hidden="true" className="shrink-0 text-gray-300">
              &rarr;
            </span>
            <span className="min-w-0 truncate text-acc-green">{c.val}</span>
            <span className="ml-auto shrink-0 pl-2 tabular-nums text-gray-400">
              {c.ms}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/**
 * The editor with a trace picked. The code is what you wrote; the grey at the
 * end of each line is what that line actually did.
 */
type Tok = { t: string; c?: string };

const EDITOR: { n: number; toks: Tok[]; val?: string }[] = [
  {
    n: 1,
    toks: [
      { t: "let ", c: "text-classic-purple" },
      { t: "onPush " },
      { t: "(req: ", c: "text-gray-500" },
      { t: "Request", c: "text-classic-blue" },
      { t: ") =", c: "text-gray-500" },
    ],
  },
  {
    n: 2,
    toks: [
      { t: "  let ", c: "text-classic-purple" },
      { t: "event = " },
      { t: "Webhook.parse", c: "text-code-fn" },
      { t: " req" },
    ],
    val: "Event { issue = 4821 }",
  },
  {
    n: 3,
    toks: [
      { t: "  let ", c: "text-classic-purple" },
      { t: "msg = " },
      { t: "Notify.formatIssue", c: "text-code-fn" },
      { t: " event.issue" },
    ],
    val: '"dark/dark#4821"',
  },
  {
    n: 4,
    toks: [
      { t: "  " },
      { t: "Notify.notify", c: "text-code-fn" },
      { t: " event.repo msg" },
    ],
    val: "Ok · 40ms",
  },
];

const EditorTrace: React.FC = () => (
  <div className="overflow-hidden rounded-2xl bg-dark shadow-[0_24px_54px_-30px_rgba(30,30,40,0.8)] ring-1 ring-white/[0.07]">
    {/* tab strip */}
    <div className="flex items-stretch border-b border-white/[0.07]">
      <span className="border-b-2 border-acc-amber bg-white/[0.04] px-4 py-2 font-code text-xs text-gray-200">
        onPush.dark
      </span>
    </div>

    <div className="overflow-x-auto py-3">
      {EDITOR.map(line => (
        <div
          key={line.n}
          className="flex items-baseline gap-4 whitespace-pre px-3 leading-7 hover:bg-white/[0.03]"
        >
          <span
            aria-hidden="true"
            className="w-4 shrink-0 select-none text-right font-code text-[11px] text-gray-600"
          >
            {line.n}
          </span>

          <span className="font-code text-xs text-gray-200">
            {line.toks.map((tok, i) => (
              <span key={i} className={tok.c}>
                {tok.t}
              </span>
            ))}
          </span>

          {/* the recorded value, sitting where an editor puts an inline hint */}
          {line.val && (
            <span className="ml-auto pl-6 font-code text-[11px] text-gray-500">
              {line.val}
            </span>
          )}
        </div>
      ))}
    </div>

    {/* status bar, where the trace being shown is picked */}
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-white/[0.07] bg-white/[0.02] px-4 py-2">
      <span className="font-code text-[11px] text-gray-400">
        trace fe6029ca
        <span aria-hidden="true" className="pl-1.5 text-[9px]">
          &#9662;
        </span>
      </span>
      <span aria-hidden="true" className="text-gray-600">
        ·
      </span>
      <span className="font-code text-[11px] text-acc-amber">
        POST /webhooks/github
      </span>
      <span className="ml-auto font-code text-[11px] tabular-nums text-gray-500">
        41ms
      </span>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const PROBLEMS: { h: string; p: React.ReactNode; ex: TermLine[] }[] = [
  {
    h: "Inspect the First Run",
    p: (
      <>
        No print statements to add, no breakpoints to set in advance. Both need
        you to decide where to look before the run, and to have the execution in
        front of you. Darklang recorded the arguments and results of the
        original run, so <C>traces view</C> opens the completed call tree and
        you move through it at your own pace.
      </>
    ),
    ex: [
      cmd("dark traces view fe603a12 --depth 2"),
      call("Webhook.parse", "req", "Event { … }", "2ms"),
      call("Notify.formatIssue", "issue", '"dark/dark#4821"', "1ms", 1),
      call("Notify.notify", "repo, msg", "Ok", "40ms"),
    ],
  },
  {
    h: "Ask Questions You Didn't Predict",
    p: (
      <>
        <C>traces find</C> searches recorded values across executions, by user
        ID, error code, or anything else you discover later. Every recorded call
        keeps its actual arguments and result, so a question you only thought of
        afterwards still has an answer waiting.
      </>
    ),
    ex: [
      cmd('dark traces find "4821"'),
      out("2 traces"),
      call("Notify.formatIssue", "issue", '"dark/dark#4821"', "1ms"),
      call("Queue.pop", "", "Job { issue: 4821 }", "2ms"),
    ],
  },
  {
    h: "Profile Without Planning Ahead",
    p: (
      <>
        Every package-function call includes its duration.{" "}
        <C>traces hotspots</C> ranks functions by total recorded time across
        recent executions, so you can find expensive paths without first
        reproducing the problem with a profiler attached.
      </>
    ),
    ex: [
      cmd("dark traces hotspots"),
      call("Notify.notify", "3 calls", undefined, "820ms"),
      call("Digest.summarize", "12 calls", undefined, "40ms"),
      call("Stdlib.List.map", "61 calls", undefined, "8ms"),
    ],
  },
  {
    h: "Fix It, Then Replay It",
    p: (
      <>
        For <C>eval</C> and <C>run</C> executions, the trace preserves the
        original input. After fixing a bug or completing a refactor, use{" "}
        <C>traces replay</C> to run that input against the current code and
        produce a new trace.
      </>
    ),
    ex: [
      cmd("dark traces replay fe6029ca"),
      out("Replaying recorded input under current code"),
      hit("New trace a91c40de"),
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const TraceDriven: React.FC = () => {
  const primary =
    "inline-block rounded-full bg-acc-amber px-6 py-3 font-semibold text-white transition hover:bg-[#96601a]";

  return (
    <div className="overflow-x-clip">
      {/* ===================== HERO ===================== */}
      <Shell>
        <Hero />
      </Shell>

      {/* ===================== THESIS ===================== */}
      <Shell>
        <H2 className="mb-8 max-w-3xl">Execution Produces the Trace</H2>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="grid content-start gap-7">
            <Body>
              Most tools make you choose what to record before anything runs:
              which lines to log, which spans to open, which middleware to
              install. By the time the question comes up, the run is gone.
              Darklang has no such step. The runtime understands the program
              it's executing and records the whole execution, so the questions
              can come afterwards, when you actually know what they are.
            </Body>

            <Point
              h="The Actual Values Stay Intact"
              icon={
                <Icon>
                  <path d="M8 3H7a2 2 0 00-2 2v5a2 2 0 01-2 2 2 2 0 012 2v5c0 1.1.9 2 2 2h1" />
                  <path d="M16 3h1a2 2 0 012 2v5a2 2 0 002 2 2 2 0 00-2 2v5a2 2 0 01-2 2h-1" />
                </Icon>
              }
            >
              The actual arguments and return value of every call in the tree
              stay structured, instead of being flattened into whatever a log
              message happened to include, so you can inspect and search them
              afterward.
            </Point>
          </div>

          <div className="mx-auto w-full min-w-0 max-w-[32rem]">
            <TraceTree
              id="fe6029ca"
              handler="eval"
              input={
                'expression = "Stdlib.List.map [ 12; 8; 30 ] (fun price -> price * 2)"'
              }
              calls={CALLS}
            />
          </div>
        </div>
      </Shell>

      {/* ===================== PROBLEMS ===================== */}
      <Shell>
        <H2 className="mb-10">Debugging Loops You Can Leave Behind</H2>

        <div className="grid gap-10 lg:gap-14">
          {PROBLEMS.map((item, i) => (
            <div
              key={item.h}
              className="grid items-center gap-6 border-t border-gray-100 pt-10 first:border-t-0 first:pt-0 lg:grid-cols-2 lg:gap-14"
            >
              <div className={`flex gap-4 ${i % 2 ? "lg:order-2" : ""}`}>
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 font-code text-sm text-gray-300 line-through decoration-2"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="mb-1.5 font-bold text-gray-900 2xl:text-lg">
                    {item.h}
                  </h3>
                  <p className="leading-relaxed text-gray-600 2xl:text-lg">
                    {item.p}
                  </p>
                </div>
              </div>

              <div className={`min-w-0 ${i % 2 ? "lg:order-1" : ""}`}>
                <Term lines={item.ex} />
              </div>
            </div>
          ))}
        </div>
      </Shell>

      {/* ===================== WORKFLOW ===================== */}
      <Shell>
        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-16">
          <div className="grid content-start gap-6">
            <H2>Start With What Just Happened</H2>
            <Body>
              <C>traces tail</C> opens the latest execution as a call tree. For
              a large trace, narrow the view by depth, function name, library
              calls, or duration until only the relevant path remains.
            </Body>
            <Body>
              To watch a running instance, <C>traces follow</C> prints new
              traces as they complete.
            </Body>

            <Point
              h="Even printLine Is Part of the Trace"
              icon={
                <Icon>
                  <path d="M4 6h16M4 12h16M4 18h10" />
                </Icon>
              }
            >
              <C>printLine</C> is an ordinary function call, so it appears in
              the call tree with the value passed to it. You can still print
              while exploring, but the trace keeps that output beside the
              execution that gave it meaning.
            </Point>
          </div>

          <div className="min-w-0">
            <RecentTraces />
          </div>
        </div>
      </Shell>

      {/* ===================== REQUESTS ===================== */}
      <Shell>
        <H2 className="mb-6">Build From a Real Request</H2>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-16">
          <div>
            <Body className="mb-10">
              Even before a handler exists, the router execution leaves a trace
              of the request exactly as it arrived: its URL, method, headers,
              and body.
            </Body>

            <BuildLoop />
          </div>

          <div className="mx-auto w-full max-w-sm">
            <RequestFlow />
          </div>
        </div>
      </Shell>

      {/* ===================== EVERYWHERE ===================== */}
      <Shell>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <H2 className="mb-4">One Trace Model Everywhere</H2>
            <Body>
              Wherever the program runs, the way you inspect it remains the
              same. The same commands and the same trace format work locally and
              on a hosted instance, including your app on{" "}
              <Link to="/our-cloud" className="text-acc-amber underline">
                Darklang Cloud
              </Link>
              .
            </Body>
          </div>

          <SameTrace />
        </div>
      </Shell>

      {/* ===================== TRACE-DRIVEN ===================== */}
      <Shell>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <H2 className="mb-4">Your Editor Knows What Really Happened</H2>
            <Body className="mb-5">
              Traces don't stop at the terminal. In your editor, values from a
              real trace appear inline next to the code that produced them. Pick
              a trace, and see what every call actually received and returned,
              right where you're editing.
            </Body>
            <Body>
              Change the code, and those values re-run against the recorded
              input: feedback from an execution that actually happened, not an
              example you made up. We call it trace-driven development.
            </Body>
          </div>

          <div className="min-w-0">
            <EditorTrace />
          </div>
        </div>
      </Shell>

      {/* ===================== AGENTS ===================== */}
      <Shell>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <H2 className="mb-4">Agents Read Traces Too</H2>
            <Body>
              An agent debugging your code shouldn't guess what happened from
              log fragments. Traces are machine-readable, so an agent works from
              the actual execution instead of reconstructing it.
            </Body>
          </div>

          <div className="min-w-0">
            <Term lines={JSON_TERM} label="dark traces list" />
          </div>
        </div>
      </Shell>

      {/* ===================== LOCAL ===================== */}
      <Shell>
        <H2 className="mb-8">Your Traces Are Yours</H2>

        <div className="grid gap-6">
          <Body>
            Traces live in your instance's local database. They are not source
            control: they never sync to your other machines, never ship inside
            releases, and never leave the instance that recorded them.
          </Body>
          <Body>
            They hold real values, so they are treated like data: local,
            prunable, deletable. Inspecting a production trace means asking that
            instance, not copying traces around.
          </Body>
          <Body>
            Recording is designed to be always on. Sampling keeps hot paths
            cheap, retention keeps disk bounded, you can tune or disable both
            per instance, and <C>traces delete --all</C> is one command away.
          </Body>
        </div>
      </Shell>

      {/* ===================== CTA ===================== */}
      <Shell>
        <div className="max-w-3xl">
          <H2 className="mb-4">Run Something, Then Ask What Happened</H2>
          <Body className="mb-8">
            Install the CLI, run any expression, and <C>dark traces tail</C>{" "}
            shows you the whole story.
          </Body>

          <Link className={primary} to="/getting-started">
            Install Darklang
          </Link>
        </div>
      </Shell>
    </div>
  );
};

export default TraceDriven;
