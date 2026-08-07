import React from "react";
import { Link } from "react-router-dom";

import CodeDisplay from "../../common/ui/CodeDisplay";
import Terminal from "../../common/ui/Terminal";

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

const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mb-4 text-sm 2xl:text-base font-bold uppercase tracking-[0.12em] text-purple-dbg">
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

/** An inline code word. */
const C: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-code text-sm 2xl:text-base text-purple-dbg">
    {children}
  </span>
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

/** Icon tile tones, so a grid of cards doesn't read as one colour. */
const TONES = {
  purple: "bg-purple-lbg/10 text-purple-dbg",
  blue: "bg-blue-lbg/10 text-blue-lbg",
  teal: "bg-acc-teal/10 text-acc-teal",
  green: "bg-olive/15 text-acc-green",
  amber: "bg-sand/25 text-acc-amber",
  pink: "bg-rose/15 text-acc-pink",
} as const;

type Tone = keyof typeof TONES;

/** A single point: the claim, then the mechanism behind it. */
const Point: React.FC<{
  h: string;
  icon?: React.ReactNode;
  tone?: Tone;
  children: React.ReactNode;
}> = ({ h, icon, tone = "purple", children }) => (
  <div className="flex gap-4">
    {icon && (
      <span
        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${TONES[tone]}`}
      >
        {icon}
      </span>
    )}
    <div>
      <h3 className="mb-1.5 font-bold text-gray-900 2xl:text-lg">{h}</h3>
      <p className="leading-relaxed text-gray-600 2xl:text-lg">{children}</p>
    </div>
  </div>
);

/** A bordered card carrying one claim. */
const Card: React.FC<{
  h: string;
  icon?: React.ReactNode;
  tone?: Tone;
  children: React.ReactNode;
}> = ({ h, icon, tone = "purple", children }) => (
  <div className="rounded-2xl border border-gray-200 bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none">
    {icon && (
      <span
        className={`mb-4 flex h-9 w-9 items-center justify-center rounded-lg ${TONES[tone]}`}
      >
        {icon}
      </span>
    )}
    <h3 className="mb-2 text-lg 2xl:text-xl font-bold text-gray-900">{h}</h3>
    <p className="leading-relaxed text-gray-600 2xl:text-lg">{children}</p>
  </div>
);

const ArrowLink: React.FC<{ to: string; children: React.ReactNode }> = ({
  to,
  children,
}) => (
  <Link
    to={to}
    className="group inline-flex items-center gap-1.5 font-semibold text-purple-dbg 2xl:text-lg"
  >
    {children}
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition group-hover:translate-x-0.5"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  </Link>
);

/* ------------------------------------------------------------------ */
/* Hero visual: what a request passes through, all of it built in       */
/* ------------------------------------------------------------------ */

const BUILT_INS: { label: string; tone: Tone; icon: React.ReactNode }[] = [
  {
    label: "HTTP server",
    tone: "purple",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
      </Icon>
    ),
  },
  {
    label: "Routing",
    tone: "blue",
    icon: (
      <Icon>
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <path d="M6 8.5V15a3 3 0 003 3h6.5" />
      </Icon>
    ),
  },
  {
    label: "Datastores",
    tone: "teal",
    icon: (
      <Icon>
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </Icon>
    ),
  },
  {
    label: "JSON",
    tone: "amber",
    icon: (
      <Icon>
        <path d="M9 4C7 4 7 7 7 8s0 4-3 4c3 0 3 3 3 4s0 4 2 4" />
        <path d="M15 4c2 0 2 3 2 4s0 4 3 4c-3 0-3 3-3 4s0 4-2 4" />
      </Icon>
    ),
  },
  {
    label: "HTTP client",
    tone: "pink",
    icon: (
      <Icon>
        <path d="M14 4h6v6M20 4l-8 8" />
        <path d="M18 14v4a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h4" />
      </Icon>
    ),
  },
  {
    label: "Scheduled jobs",
    tone: "green",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </Icon>
    ),
  },
  {
    label: "Workers",
    tone: "purple",
    icon: (
      <Icon>
        <path d="M12 3l9 5-9 5-9-5 9-5z" />
        <path d="M3 13l9 5 9-5" />
      </Icon>
    ),
  },
  {
    label: "Traces",
    tone: "blue",
    icon: (
      <Icon>
        <path d="M3 12h3l2.5-6 3 12 2.5-6H21" />
      </Icon>
    ),
  },
  {
    label: "Capabilities",
    tone: "teal",
    icon: (
      <Icon>
        <path d="M12 3l8 3.5v5c0 4.6-3.3 8.4-8 9.5-4.7-1.1-8-4.9-8-9.5v-5z" />
        <path d="M9.5 12l1.8 1.8L15 10" />
      </Icon>
    ),
  },
  {
    label: "Scripts & CLIs",
    tone: "amber",
    icon: (
      <Icon>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 10l3 2.5L7 15M12.5 15H17" />
      </Icon>
    ),
  },
  {
    label: "Packages",
    tone: "pink",
    icon: (
      <Icon>
        <path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" />
        <path d="M3 8l9 5 9-5M12 13v9" />
      </Icon>
    ),
  },
  {
    label: "Source control",
    tone: "green",
    icon: (
      <Icon>
        <circle cx="7" cy="6" r="2.5" />
        <circle cx="7" cy="18" r="2.5" />
        <circle cx="17" cy="8" r="2.5" />
        <path d="M7 8.5v7M17 10.5c0 4-4.2 3.4-7.6 5" />
      </Icon>
    ),
  },
];

/** The chips on either side: what arrives, and what leaves. */
const Edge: React.FC<{ label: string; tone: "in" | "out" }> = ({
  label,
  tone,
}) => (
  <div className="flex shrink-0 items-center gap-2 rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 shadow-sm">
    <span
      className={`h-1.5 w-1.5 rounded-full ${
        tone === "in" ? "bg-blue-lbg" : "bg-olive"
      }`}
      aria-hidden="true"
    />
    <span className="whitespace-nowrap font-code text-xs 2xl:text-sm text-gray-700">
      {label}
    </span>
  </div>
);

/** A dashed run of track with something travelling along it. */
const Connector: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`relative h-6 shrink-0 ${className}`} aria-hidden="true">
    <svg
      className="absolute inset-x-0 top-1/2 h-0.5 w-full -translate-y-1/2"
      viewBox="0 0 64 2"
      preserveAspectRatio="none"
    >
      <line
        x1="0"
        y1="1"
        x2="64"
        y2="1"
        stroke="#e5e7eb"
        strokeWidth="2"
        strokeDasharray="4 4"
        className="animate-dash-drift"
      />
    </svg>
    <span className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-purple-lbg animate-flow-right" />
  </div>
);

/**
 * The hero picture: a request goes in, a response comes out, and everything
 * it passes through on the way is part of Darklang rather than something you
 * assembled.
 */
const BuiltIn: React.FC = () => (
  <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white px-5 py-8 shadow-sm md:px-8">
    {/* soft colour, so the panel isn't a plain white rectangle */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-20 -top-24 h-60 w-60 rounded-full bg-purple-lbg/10 blur-3xl"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-28 -right-16 h-60 w-60 rounded-full bg-blue-lbg/10 blur-3xl"
    />

    <div className="relative flex flex-col items-center gap-4 lg:flex-row lg:gap-5">
      <Edge label="GET /tickets" tone="in" />
      <Connector className="hidden w-16 lg:block" />

      <div className="min-w-0 flex-1">
        <p className="mb-4 text-center text-[0.7rem] font-bold uppercase tracking-[0.13em] text-gray-light">
          all of this is already in the language
        </p>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 xl:grid-cols-6">
          {BUILT_INS.map((item, i) => (
            <div
              key={item.label}
              className="animate-rise-in rounded-xl border border-gray-100 bg-white p-3 text-center transition duration-200 hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-sm motion-reduce:transform-none"
              style={{ animationDelay: `${i * 45}ms` }}
            >
              <span
                className={`mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg ${TONES[item.tone]}`}
              >
                {item.icon}
              </span>
              <span className="block text-[0.7rem] 2xl:text-xs font-semibold leading-tight text-gray-600">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Connector className="hidden w-16 lg:block" />
      <Edge label="200 · application/json" tone="out" />
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Handlers, drawn as what they are                                    */
/* ------------------------------------------------------------------ */

/** The accent each kind of toplevel wears in its header. */
const KIND = {
  http: { text: "text-classic-green", rule: "bg-classic-green/40" },
  cron: { text: "text-classic-yellow", rule: "bg-classic-yellow/40" },
  worker: { text: "text-classic-blue", rule: "bg-classic-blue/40" },
  db: { text: "text-classic-brown", rule: "bg-classic-brown/40" },
  fn: { text: "text-classic-purple", rule: "bg-classic-purple/40" },
} as const;

/** The controls in the top-right of a toplevel: re-run, and its menu. */
const ToplevelControls: React.FC<{ tone: string }> = ({ tone }) => (
  <span className={`flex shrink-0 items-center gap-2.5 ${tone}`}>
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 11a8 8 0 10-2.3 5.7M20 5v6h-6" />
    </svg>
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  </span>
);

/**
 * One unit of a program, drawn the way Darklang draws it: what kind of thing
 * it is and when it runs on the left, what it is called in the middle, and its
 * code underneath. Omit `code` for a collapsed one.
 */
const Toplevel: React.FC<{
  kind: keyof typeof KIND;
  modifier?: string;
  name: string;
  code?: string;
  /** A body that isn't source: rows, results, whatever the toplevel holds. */
  children?: React.ReactNode;
}> = ({ kind, modifier, name, code, children }) => {
  const tone = KIND[kind];

  return (
    <div className="min-w-0 overflow-hidden rounded-lg bg-dark shadow-md">
      <div className="flex items-center gap-3 px-4 py-2.5 sm:px-5">
        <span
          className={`flex shrink-0 items-center gap-3 font-code text-xs 2xl:text-sm uppercase tracking-wide ${tone.text}`}
        >
          <span>{kind}</span>
          {modifier && <span>{modifier}</span>}
        </span>

        <span className="flex-1 truncate text-center font-code text-xs 2xl:text-sm text-gray-300">
          {name}
        </span>

        <ToplevelControls tone={tone.text} />
      </div>

      {(code || children) && (
        <div className={`mx-4 h-px sm:mx-5 ${tone.rule}`} />
      )}

      {code && (
        <div className="hljs-dark overflow-x-auto px-4 py-4 text-gray-300 sm:px-5">
          <CodeDisplay
            code={code}
            language="fsharp"
            showLineNumbers={false}
            size="sm"
          />
        </div>
      )}

      {children}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* A datastore, and a query over it                                    */
/* ------------------------------------------------------------------ */

const TICKETS = [
  {
    key: "t-1042",
    subject: "Login loop on iOS",
    assignee: "alice",
    isOpen: true,
  },
  {
    key: "t-1043",
    subject: "Export is truncated",
    assignee: "dev",
    isOpen: false,
  },
  {
    key: "t-1044",
    subject: "SSO metadata expired",
    assignee: "ren",
    isOpen: true,
  },
];

const Bool: React.FC<{ value: boolean }> = ({ value }) => (
  <span className={value ? "text-classic-green" : "text-gray-500"}>
    {value ? "true" : "false"}
  </span>
);

/** The rows a datastore is holding, keyed the way `Stdlib.DB` keys them. */
/**
 * The rows a datastore is holding, keyed the way `Stdlib.DB` keys them.
 *
 * A grid rather than a table. The slack splits 2:1 between `subject` and
 * `assignee` instead of piling up behind one column, which would leave the
 * row reading as two clusters with a canyon between them. `min-w-max` keeps
 * the columns from crushing together, and the wrapper scrolls if the panel
 * ever gets narrower than that.
 */
const DataTable: React.FC<{ rows: typeof TICKETS }> = ({ rows }) => {
  const cell = "py-1.5 pr-6 border-t border-white/5";

  return (
    <div className="overflow-x-auto px-4 pb-4 pt-3 sm:px-5">
      <div className="grid min-w-max grid-cols-[auto_2fr_1fr_auto] font-code text-xs 2xl:text-sm">
        <div className="pb-2 pr-6 text-gray-500">key</div>
        <div className="pb-2 pr-6 text-gray-500">subject</div>
        <div className="pb-2 pr-6 text-gray-500">assignee</div>
        <div className="pb-2 text-right text-gray-500">isOpen</div>

        {rows.map(row => (
          <React.Fragment key={row.key}>
            <div className={`${cell} text-gray-500`}>{row.key}</div>
            <div className={`${cell} text-gray-300`}>{row.subject}</div>
            <div className={`${cell} text-gray-300`}>{row.assignee}</div>
            <div className="border-t border-white/5 py-1.5 text-right">
              <Bool value={row.isOpen} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

/** A dashed rule, for separating a query from what it returned. */
const DashedRule: React.FC = () => (
  <div
    className="mx-4 h-px sm:mx-5"
    style={{
      backgroundImage:
        "repeating-linear-gradient(to right, rgba(255,255,255,0.22) 0 5px, transparent 5px 10px)",
    }}
    aria-hidden="true"
  />
);

/* ------------------------------------------------------------------ */
/* Capabilities, without the terminal                                  */
/* ------------------------------------------------------------------ */

/** A command, set on the page rather than inside a fake terminal. */
const Cmd: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="inline-flex max-w-full items-baseline gap-2.5 rounded-lg bg-gray-100 px-4 py-2.5 font-code text-sm 2xl:text-base text-dark">
    <span className="select-none text-purple-lbg" aria-hidden="true">
      $
    </span>
    <span className="min-w-0 break-all">{children}</span>
  </p>
);

/** What a function needs, and then what got granted. */
const CapsFlow: React.FC = () => (
  <div className="grid gap-9">
    <div>
      <Cmd>dark caps needed-for Support.Sync.refreshTickets</Cmd>

      <ul className="mt-4 grid gap-2.5">
        {NEEDS.map(need => (
          <li
            key={need.spec}
            className="flex flex-wrap items-baseline gap-x-3 gap-y-1"
          >
            <span
              className={`w-24 shrink-0 rounded-md px-2 py-0.5 text-center font-code text-xs 2xl:text-sm ${TONES[need.tone]}`}
            >
              {need.domain}
            </span>
            <span className="font-code text-sm 2xl:text-base text-gray-700">
              {need.detail}
            </span>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <Cmd>dark caps grant-for-fn Support.Sync.refreshTickets</Cmd>

      <ul className="mt-4 grid gap-2">
        {NEEDS.map(need => (
          <li
            key={need.spec}
            className="flex items-baseline gap-2.5 font-code text-sm 2xl:text-base text-gray-600"
          >
            <span className="text-acc-green" aria-hidden="true">
              ✓
            </span>
            <span className="min-w-0 break-all">{need.spec}</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-sm 2xl:text-base leading-relaxed text-gray-600">
        Or one at a time, with{" "}
        <span className="font-code text-purple-dbg">
          dark caps grant db read Tickets
        </span>
        .
      </p>
    </div>

    <div>
      <Cmd>dark run untrusted.dark --sandbox</Cmd>
      <p className="mt-3 text-sm 2xl:text-base leading-relaxed text-gray-600">
        Runs with no capabilities at all, whatever this instance otherwise
        grants.
      </p>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* A trace                                                             */
/* ------------------------------------------------------------------ */

/**
 * One call: what ran, what came back, and how long it took, with a bar so the
 * expensive step is findable without reading any numbers. Rows stay on one
 * line, because wrapping values destroy the indentation that carries the
 * shape of the call tree.
 */
const TraceCall: React.FC<{
  call: (typeof TRACE.calls)[number];
  total: number;
  last: boolean;
}> = ({ call, total, last }) => (
  <div className="group flex items-center gap-3 py-1.5">
    <div
      className="flex min-w-0 flex-1 items-baseline gap-2 font-code text-xs 2xl:text-sm"
      style={{ paddingLeft: `${call.depth * 1.15}rem` }}
    >
      {call.depth > 0 && (
        <span className="select-none text-gray-300" aria-hidden="true">
          {last ? "└" : "├"}
        </span>
      )}
      <span className="shrink-0 text-purple-dbg">{call.fn}</span>
      <span className="min-w-0 flex-1 truncate text-gray-400" title={call.args}>
        ({call.args})
      </span>
      <span
        className="min-w-0 max-w-[45%] shrink-0 truncate rounded bg-olive/10 px-1.5 py-0.5 text-acc-green"
        title={call.result}
      >
        {call.result}
      </span>
    </div>

    {/* time, twice: as a bar to scan and as a number to read */}
    <div
      className="hidden h-1.5 w-16 shrink-0 overflow-hidden rounded-full bg-gray-100 sm:block"
      aria-hidden="true"
    >
      <div
        className="h-full rounded-full bg-purple-lbg/40"
        style={{ width: `${Math.max((call.ms / total) * 100, 4)}%` }}
      />
    </div>
    <span className="w-12 shrink-0 text-right font-code text-xs text-gray-light">
      {call.ms === 0 ? "<1ms" : `${call.ms}ms`}
    </span>
  </div>
);

/** A recorded run: what came in, what each call returned, where time went. */
const TraceTree: React.FC = () => (
  <div className="min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 border-b border-gray-100 px-5 py-3.5">
      <span className="text-[0.7rem] font-bold uppercase tracking-[0.11em] text-gray-light">
        Trace
      </span>
      <span className="rounded-md bg-olive/15 px-2 py-0.5 font-code text-[0.7rem] font-bold text-acc-green">
        {TRACE.method}
      </span>
      <span className="font-code text-sm text-dark">{TRACE.route}</span>

      <span className="ml-auto flex items-center gap-3">
        <span className="font-code text-xs text-acc-green">{TRACE.status}</span>
        <span className="font-code text-xs text-gray-light">{TRACE.ms}ms</span>
      </span>
    </div>

    <div className="px-5 py-3">
      {TRACE.calls.map((call, i) => (
        <TraceCall
          key={i}
          call={call}
          total={TRACE.ms}
          last={i === TRACE.calls.length - 1}
        />
      ))}
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Code + terminal                                                     */
/* ------------------------------------------------------------------ */

/**
 * Darklang code, in the light panel this page has always used. `min-w-0` is
 * load-bearing: as a grid/flex child it would otherwise refuse to shrink below
 * the width of its longest unwrapped line and overrun the column beside it.
 */
const Code: React.FC<{ file?: string; code: string }> = ({ file, code }) => (
  <div className="min-w-0 bg-white rounded-4xl shadow-lg inset-shadow-xs overflow-hidden">
    <div className="flex items-center justify-between gap-4 px-8 pt-8">
      <span className="font-code text-xs 2xl:text-sm text-gray-400">
        {file}
      </span>
      <div className="flex space-x-2">
        <div className="w-4 h-4 rounded-full bg-purple-lbg"></div>
        <div className="w-4 h-4 rounded-full bg-sand"></div>
        <div className="w-4 h-4 rounded-full bg-olive"></div>
      </div>
    </div>

    <div className="code-container p-8 mb-2 overflow-x-auto">
      <CodeDisplay code={code} language="fsharp" size="sm" />
    </div>
  </div>
);

type TermLine =
  | { kind: "cmd"; text: string }
  /** The rest of a command, after a shell line continuation. */
  | { kind: "cont"; text: string }
  | { kind: "out"; text: string }
  | { kind: "note"; text: string }
  | { kind: "gap" };

const cmd = (text: string): TermLine => ({ kind: "cmd", text });
const cont = (text: string): TermLine => ({ kind: "cont", text });
const out = (text: string): TermLine => ({ kind: "out", text });
const note = (text: string): TermLine => ({ kind: "note", text });
const gap: TermLine = { kind: "gap" };

/** Captured CLI output, shown as a transcript. See `Code` on `min-w-0`. */
const Term: React.FC<{ lines: TermLine[]; className?: string }> = ({
  lines,
  className = "",
}) => (
  <Terminal className={`min-w-0 overflow-hidden ${className}`}>
    <div className="overflow-x-auto text-xs sm:text-sm">
      {lines.map((line, i) => {
        if (line.kind === "gap") return <div key={i} className="h-4" />;
        if (line.kind === "cmd") {
          return (
            <div key={i} className="whitespace-pre text-gray-200">
              <span className="text-olive">$</span> {line.text}
            </div>
          );
        }
        if (line.kind === "cont") {
          return (
            <div key={i} className="whitespace-pre text-gray-200">
              {"  "}
              {line.text}
            </div>
          );
        }
        if (line.kind === "note") {
          return (
            <div key={i} className="whitespace-pre text-gray-600">
              {line.text}
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
  </Terminal>
);

/* ------------------------------------------------------------------ */
/* Verified code + captured CLI output                                 */
/* ------------------------------------------------------------------ */

const HANDLER_CODE = `let tickets = Stdlib.DB.getAll Tickets
let body = Stdlib.Json.serialize<List<Ticket>> tickets
Stdlib.Http.responseWithJson body 200`;

const SERVE_TERM: TermLine[] = [
  cmd("dark serve Support.Api.router"),
  out("Listening on http://localhost:8080"),
  gap,
  note("# from another terminal"),
  cmd("curl http://localhost:8080/tickets"),
  out(
    '[{"subject":"Login loop on iOS","assignee":"alice","isOpen":true},' +
      '{"subject":"Export is truncated","assignee":"dev","isOpen":false},' +
      '{"subject":"SSO metadata expired","assignee":"ren","isOpen":true}]',
  ),
];

const DB_TERM: TermLine[] = [
  cmd("dark db Tickets Support.Api.Ticket"),
  out("Created database: Tickets (type: Support.Api.Ticket)"),
  gap,
  cmd("dark db set Tickets t-1042 \\"),
  cont(
    '\'{ subject = "Login loop on iOS"; assignee = "alice"; isOpen = true }\'',
  ),
  out("Set t-1042 in Tickets"),
];

const QUERY_CODE = `Stdlib.DB.query Tickets (fun ticket -> ticket.isOpen)`;

const CRON_CODE = `let openTickets = Stdlib.DB.query Tickets (fun ticket -> ticket.isOpen)
let body = Stdlib.Json.serialize<List<Ticket>> openTickets
Stdlib.HttpClient.post digestUrl [] (Stdlib.String.toBlob body)`;

const WORKER_CODE = `let ticket = Stdlib.DB.get event.ticketKey Tickets
let message = $"{ticket.subject} assigned to {ticket.assignee}"
Stdlib.HttpClient.post notifyUrl [] (Stdlib.String.toBlob message)`;

const HTTP_CLIENT_CODE = `let fetchIssue (url: String) : Stdlib.Result.Result<String, String> =
  match Stdlib.HttpClient.get url [] with
  | Ok response ->
    response.body
    |> Stdlib.String.fromBlobWithReplacement
    |> Stdlib.Result.Result.Ok
  | Error error ->
    error
    |> Stdlib.HttpClient.toString
    |> Stdlib.Result.Result.Error`;

/**
 * What `dark caps needed-for` reports, as data. NOT captured:
 * `Support.Sync.refreshTickets` doesn't exist to run against. The domains and
 * details follow the real renderer (`PrettyPrinter.Capabilities.detail`), so
 * they should match once there's a function to point it at.
 */
const NEEDS: { domain: string; detail: string; tone: Tone; spec: string }[] = [
  {
    domain: "http-client",
    detail: "GET → https://api.example.com/*",
    tone: "purple",
    spec: "http-client GET https://api.example.com/*",
  },
  {
    domain: "db",
    detail: "read → Tickets",
    tone: "blue",
    spec: "db read Tickets",
  },
  {
    domain: "db",
    detail: "write → Tickets",
    tone: "blue",
    spec: "db write Tickets",
  },
  {
    domain: "env",
    detail: "read → TRACKER_API_KEY",
    tone: "teal",
    spec: "env read TRACKER_API_KEY",
  },
];

const CAPABILITIES = [
  "http-client",
  "http-server",
  "db read / write",
  "file read / write",
  "env read / write",
  "exec",
  "clock",
  "random",
  "stdout / stdin",
  "llm",
];

/**
 * ILLUSTRATIVE, not captured. Capturing this needs `Support.Api` and the
 * `Tickets` datastore to exist in an instance, then a request served against
 * them; every other transcript on this page is real output. Replace it with a
 * real `dark traces view` before publishing.
 *
 * The shape is what an application function's trace looks like: the handler,
 * then the handful of calls it made, without the stdlib plumbing underneath.
 */
const TRACE = {
  method: "GET",
  route: "/tickets",
  status: 200,
  ms: 4,
  calls: [
    {
      depth: 0,
      fn: "Support.Api.listTicketsFn",
      args: "req",
      result: "Response 200",
      ms: 4,
    },
    {
      depth: 1,
      fn: "Stdlib.DB.getAll",
      args: "Tickets",
      result: "[Ticket, Ticket, Ticket]",
      ms: 2,
    },
    {
      depth: 1,
      fn: "Stdlib.Json.serialize",
      args: "tickets",
      result: '"[{"subject":"Login loop on iOS"…}]"',
      ms: 1,
    },
    {
      depth: 1,
      fn: "Stdlib.Http.responseWithJson",
      args: "body, 200",
      result: "Response 200",
      ms: 0,
    },
  ],
};

const SCRIPT_TERM: TermLine[] = [
  cmd("dark run scripts/import-tickets.dark"),
  out("Imported 247 tickets"),
  out("Updated 18 existing records"),
  out("0 failures"),
];

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const THESIS: {
  h: string;
  tone: Tone;
  icon: React.ReactNode;
  p: React.ReactNode;
}[] = [
  {
    h: "Serve HTTP",
    tone: "purple",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
      </Icon>
    ),
    p: "Define handlers and routers as ordinary typed functions, then serve a named router directly. No framework lifecycle or generated project structure.",
  },
  {
    h: "Store Typed Data",
    tone: "blue",
    icon: (
      <Icon>
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </Icon>
    ),
    p: "Create a datastore for a Darklang type, then read, write, delete, and query its values directly. No separate database service, ORM, or duplicated schema to get started.",
  },
  {
    h: "Call Other Services",
    tone: "teal",
    icon: (
      <Icon>
        <path d="M9.5 14.5l5-5" />
        <path d="M7 12l-2 2a3.5 3.5 0 005 5l2-2M17 12l2-2a3.5 3.5 0 00-5-5l-2 2" />
      </Icon>
    ),
    p: "Make outbound HTTP calls, parse and serialize JSON, read configuration, and handle network failures as explicit values.",
  },
  {
    h: "Schedule Recurring Work",
    tone: "amber",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </Icon>
    ),
    p: "Run functions on a schedule without configuring a separate cron service. Use them for synchronization, cleanup, reports, reminders, and recurring application work.",
  },
  {
    h: "Process Work in the Background",
    tone: "pink",
    icon: (
      <Icon>
        <path d="M12 3l9 5-9 5-9-5 9-5z" />
        <path d="M3 13l9 5 9-5" />
      </Icon>
    ),
    p: "Send work to a queue from anywhere in the program and process it with a typed worker. Slow and retryable work stays out of the request path.",
  },
  {
    h: "Inspect Executions",
    tone: "green",
    icon: (
      <Icon>
        <circle cx="11" cy="11" r="7" />
        <path d="M16 16l5 5" />
      </Icon>
    ),
    p: "A recorded run shows its input, result, nested calls, errors, and timing. Debug from what happened, not only from what a log line remembered to mention.",
  },
];

const PLACES: { h: string; tone: Tone; icon: React.ReactNode; p: string }[] = [
  {
    h: "Local",
    tone: "blue",
    icon: (
      <Icon>
        <rect x="3" y="5" width="18" height="11" rx="2" />
        <path d="M2 20h20" />
      </Icon>
    ),
    p: "Run the complete backend on your machine, including HTTP servers, datastores, scheduled jobs, workers, scripts, and traces. No cloud account required.",
  },
  {
    h: "Self-Hosted",
    tone: "teal",
    icon: (
      <Icon>
        <rect x="3" y="4" width="18" height="7" rx="2" />
        <rect x="3" y="13" width="18" height="7" rx="2" />
        <path d="M7 7.5h.01M7 16.5h.01" />
      </Icon>
    ),
    p: "Run the same open-source runtime on infrastructure you control. You choose the host, network, storage, and operating boundaries, and manage its availability.",
  },
  {
    h: "Darklang Cloud",
    tone: "purple",
    icon: (
      <Icon>
        <path d="M7 18.5a4.2 4.2 0 01-.5-8.4 5.6 5.6 0 0110.8-1 3.9 3.9 0 01-.3 9.4z" />
      </Icon>
    ),
    p: "Run the same backend as a managed service, without operating the runtime yourself. Darklang handles the hosting, availability, and day-to-day operations.",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const TINT = "bg-gray-50";

const Backends: React.FC = () => {
  const btn = "inline-block rounded-full px-6 py-3 font-semibold transition";
  const primary = `${btn} bg-purple-lbg text-white hover:bg-purple-dbg`;
  const ghost = `${btn} border border-gray-300 bg-white text-gray-800 hover:border-gray-400`;

  return (
    <div className="overflow-x-clip">
      {/* ===================== HERO ===================== */}
      <Shell>
        <div className="mx-auto max-w-5xl 2xl:max-w-6xl text-center">
          <Eyebrow>Darklang for backends</Eyebrow>
          <h1 className="mb-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-5xl 2xl:text-6xl">
            Build the Backend.{" "}
            <span className="text-purple-lbg">Skip the Framework Assembly</span>
          </h1>
          <Body>
            Write HTTP endpoints, store typed data, call external services, and
            inspect every execution in one programming environment. The
            language, runtime, package system, traces, and source control all
            work from the same model of your program.
          </Body>
        </div>

        <div className="mt-12 md:mt-14">
          <BuiltIn />
        </div>
      </Shell>

      {/* ===================== THESIS ===================== */}
      <Shell className={TINT}>
        <div className="mb-10 max-w-5xl">
          <Eyebrow>One integrated environment</Eyebrow>
          <H2 className="mb-4">Built In. Designed to Work Together.</H2>
          <Body className="mb-4">
            Most backend stacks begin with a series of choices: server
            framework, router, data layer, serialization library, configuration
            system, observability tools, and deployment workflow. Then you have
            to make them agree.
          </Body>
          <Body>
            In Darklang, HTTP, data, external calls, scripts, traces,
            capabilities, packages, and source control are parts of the same
            programming environment. The same typed functions can handle a
            request, run directly, support a script, appear in a trace, or be
            used by a coding agent.
          </Body>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {THESIS.map(item => (
            <Card key={item.h} h={item.h} icon={item.icon} tone={item.tone}>
              {item.p}
            </Card>
          ))}
        </div>
      </Shell>

      {/* ===================== HTTP ===================== */}
      <Shell id="http">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <Eyebrow>HTTP</Eyebrow>
            <H2 className="mb-4">An Endpoint Is Just a Function</H2>
            <Body className="mb-8">
              A handler receives a typed request and returns a typed response.
              Compose handlers into a router, then run any named router locally
              from the CLI or expose the same router through Darklang Cloud. The
              handler code does not change between them.
            </Body>

            <div className="grid gap-7">
              <Point
                h="Requests You Can Work With"
                tone="purple"
                icon={
                  <Icon>
                    <path d="M4 7h16M4 12h10M4 17h7" />
                  </Icon>
                }
              >
                Read the method, URL, headers, body, query parameters, and route
                parameters. Parse incoming text and JSON into Darklang types at
                the boundary, then keep the rest of the program typed.
              </Point>

              <Point
                h="Responses Without Ceremony"
                tone="green"
                icon={
                  <Icon>
                    <path d="M20 6L9 17l-5-5" />
                  </Icon>
                }
              >
                Return text, HTML, JSON, a redirect, or a raw body with the
                status and headers you choose.
              </Point>

              <Point
                h="Route and Serve"
                tone="blue"
                icon={
                  <Icon>
                    <circle cx="6" cy="6" r="2.5" />
                    <circle cx="18" cy="18" r="2.5" />
                    <path d="M6 8.5V15a3 3 0 003 3h6.5" />
                  </Icon>
                }
              >
                Declare each handler with a method, route pattern, and function.
                Combine handlers into a router, then run it locally or on
                Darklang Cloud. No separate routing configuration or server
                setup.
              </Point>
            </div>
          </div>

          <div className="grid min-w-0 content-center gap-4">
            <Toplevel
              kind="http"
              modifier="GET"
              name="/tickets"
              code={HANDLER_CODE}
            />
            <Term lines={SERVE_TERM} />
          </div>
        </div>
      </Shell>

      {/* ===================== DATA ===================== */}
      <Shell className={TINT}>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <Eyebrow>Data</Eyebrow>
            <H2 className="mb-4">Store the Types You Already Use</H2>
            <Body className="mb-8">
              A datastore holds values of a declared Darklang type. Create and
              inspect it locally with the CLI, then use the same types and{" "}
              <C>Stdlib.DB</C> operations with a hosted datastore on Darklang
              Cloud. No separate schema, ORM model, or database integration
              layer.
            </Body>

            <div className="grid gap-7">
              <Point
                h="Read and Write by Key"
                tone="blue"
                icon={
                  <Icon>
                    <circle cx="8" cy="12" r="3" />
                    <path d="M11 12h9l-2 2M17 12v3" />
                  </Icon>
                }
              >
                Use <C>DB.get</C>, <C>DB.set</C>, and <C>DB.delete</C> when you
                know the key.
              </Point>

              <Point
                h="Query with Typed Functions"
                tone="purple"
                icon={
                  <Icon>
                    <circle cx="11" cy="11" r="7" />
                    <path d="M16 16l5 5" />
                  </Icon>
                }
              >
                Pass a Darklang function to <C>DB.query</C> instead of
                constructing query strings. Darklang compiles supported
                predicates into datastore queries and reports unsupported
                expressions before the query runs.
              </Point>

              <Point
                h="Inspect and Manage Data"
                tone="teal"
                icon={
                  <Icon>
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M7 10l3 2.5L7 15M12.5 15H17" />
                  </Icon>
                }
              >
                Use the CLI to list datastores, inspect their contents, retrieve
                a key, run a query, or make a focused update, without building
                an administration endpoint first.
              </Point>

              <Point
                h="Scope Access"
                tone="green"
                icon={
                  <Icon>
                    <rect x="5" y="11" width="14" height="9" rx="2" />
                    <path d="M8 11V8a4 4 0 018 0v3" />
                  </Icon>
                }
              >
                Datastore reads and writes are separate runtime capabilities,
                and each can be granted for a specific datastore.
              </Point>
            </div>
          </div>

          <div className="grid min-w-0 content-center gap-4">
            <Term lines={DB_TERM} />

            <Toplevel kind="db" name="Tickets">
              <DataTable rows={TICKETS} />
            </Toplevel>

            <Toplevel kind="fn" name="openTickets" code={QUERY_CODE}>
              <DashedRule />
              <div className="px-4 pt-3 font-code text-xs 2xl:text-sm text-gray-500 sm:px-5">
                &rarr; 2 of 3 rows
              </div>
              <DataTable rows={TICKETS.filter(ticket => ticket.isOpen)} />
            </Toplevel>
          </div>
        </div>
      </Shell>

      {/* ===================== SCHEDULED WORK ===================== */}
      <Shell>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <Eyebrow>Scheduled and background work</Eyebrow>
            <H2 className="mb-4">Not Every Task Belongs in a Request</H2>
            <Body className="mb-5">
              Scheduled jobs and background workers are part of your Darklang
              program, not separate infrastructure that must be provisioned and
              connected afterward.
            </Body>
            <Body className="mb-5">
              They call ordinary Darklang functions, using the same types,
              datastores, packages, and capabilities as the rest of the backend.
              Every run produces the same structured execution traces.
            </Body>
            <Body>
              Develop and test them locally. On Darklang Cloud, schedules stay
              active and workers remain ready to process queued work.
            </Body>
          </div>

          <div className="grid min-w-0 content-center gap-4">
            <Toplevel
              kind="cron"
              modifier="Daily"
              name="postDailyDigest"
              code={CRON_CODE}
            />
            <Toplevel kind="worker" name="notifyAssignee" code={WORKER_CODE} />
          </div>
        </div>
      </Shell>

      {/* ===================== INTEGRATIONS ===================== */}
      <Shell className={TINT}>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <Eyebrow>Integrations</Eyebrow>
            <H2 className="mb-4">Call APIs Without Hiding the Boundary</H2>
            <Body className="mb-5">
              Use <C>Stdlib.HttpClient</C> to make outbound requests or consume
              a response as it arrives. Network access can be restricted by
              method and destination through runtime capabilities.
            </Body>
            <Body className="mb-5">
              Every request returns an explicit <C>Result</C>, so network
              failures become values your code can handle rather than exceptions
              that unwind the handler.
            </Body>
            <Body>
              Combine outbound calls with handlers, datastores, scheduled
              functions, and workers to build webhook processors, API
              orchestration, and data synchronization.
            </Body>
          </div>

          <div className="min-w-0">
            <Code file="support/sync.dark" code={HTTP_CLIENT_CODE} />
          </div>
        </div>
      </Shell>

      {/* ===================== CAPABILITIES ===================== */}
      <Shell>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <Eyebrow>Capabilities</Eyebrow>
            <H2 className="mb-4">Nothing Reaches Out Without Permission</H2>
            <Body className="mb-5">
              Pure functions need no runtime access. Operations that use the
              network, datastores, files, environment, subprocesses, time,
              randomness, terminal, or models declare the capabilities they
              require.
            </Body>
            <Body className="mb-8">
              Ask what a function needs, including everything it calls, and
              grant only that. Code you do not trust can run in a deny-all
              sandbox.
            </Body>

            <div className="flex flex-wrap gap-2">
              {CAPABILITIES.map(capability => (
                <span
                  key={capability}
                  className="rounded-lg border border-gray-200 bg-white px-2.5 py-1 font-code text-xs 2xl:text-sm text-gray-700"
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <CapsFlow />
          </div>
        </div>
      </Shell>

      {/* ===================== TRACES ===================== */}
      <Shell className={TINT}>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="order-2 min-w-0 lg:order-1">
            <TraceTree />
          </div>

          <div className="order-1 lg:order-2">
            <Eyebrow>Traces</Eyebrow>
            <H2 className="mb-4">Every Execution Can Explain Itself</H2>
            <Body className="mb-6">
              A request, a function evaluation, or a script run can leave a
              structured trace: the input, the result, the nested calls, their
              values, and any error, from the execution that actually happened.
              Debug from what happened, not from what a log line remembered to
              mention.
            </Body>

            <ArrowLink to="/traceDriven">
              Explore trace-driven development
            </ArrowLink>
          </div>
        </div>
      </Shell>

      {/* ===================== SCRIPTS ===================== */}
      <Shell>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <Eyebrow>Scripts and CLIs</Eyebrow>
            <H2 className="mb-4">One Program for the Backend and Its Tools</H2>
            <Body className="mb-5">
              Write importers, migrations, maintenance scripts, and internal
              CLIs with the same types, packages, and functions as your
              application. No second codebase or duplicated domain model.
            </Body>
            <Body className="mb-8">
              Run each tool with only the capabilities it needs, or with none in
              a deny-all sandbox. Its execution produces the same structured
              traces as the rest of the backend.
            </Body>

            <ArrowLink to="/cli">Explore the CLI</ArrowLink>
          </div>

          <div className="min-w-0">
            <Term lines={SCRIPT_TERM} />
          </div>
        </div>
      </Shell>

      {/* ===================== SOURCE CONTROL ===================== */}
      <Shell className={TINT}>
        <div className="mb-10 max-w-4xl">
          <Eyebrow>Source control</Eyebrow>
          <H2 className="mb-4">Change the Backend at the Level It Is Built</H2>
          <Body>
            Darklang source control versions functions, types, values, and the
            relationships between them, instead of treating the program as
            unrelated lines of text. Branches isolate work, dependencies show
            the impact of a change, and a commit keeps the definitions that
            belong together.
          </Body>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <Card h="Definition-Level History" tone="purple">
            See which items in the program changed, without formatting
            dominating the story.
          </Card>
          <Card h="Exact Dependencies" tone="blue">
            Ask which definitions call or depend on the function you are about
            to change.
          </Card>
          <Card h="Isolated Branches" tone="green">
            Keep a feature, an experiment, or an agent's task separate until you
            decide to merge it.
          </Card>
        </div>

        <div className="mt-8">
          <ArrowLink to="/source-control">
            Explore Darklang source control
          </ArrowLink>
        </div>
      </Shell>

      {/* ===================== CLASSIC ===================== */}
      <Shell>
        <div className="max-w-4xl">
          <Eyebrow>Proven in Classic</Eyebrow>
          <H2 className="mb-4">The Model Has Already Built Real Backends</H2>
          <Body className="mb-5">
            Beginning in 2019, Darklang Classic developers used this integrated
            backend model to build APIs, internal tools, Slack bots, CRUD
            applications, webhooks, automation, and data-processing systems,
            without managing the usual collection of backend infrastructure.
          </Body>
          <Body>
            Classic is the original hosted product. Modern Darklang is a new
            open-source implementation, not a rename, and it keeps the strongest
            idea, backend primitives that work together, while adding local
            development, self-hosting, structured source control, capabilities,
            modern tooling, and first-class support for coding agents.
          </Body>
        </div>
      </Shell>

      {/* ===================== WHAT YOU CAN BUILD ===================== */}
      <Shell className={TINT}>
        <div className="max-w-4xl">
          <Eyebrow>What you can build</Eyebrow>
          <H2 className="mb-4">From One Endpoint to a Complete Backend</H2>
          <Body className="mb-5">
            Use the same backend primitives to build APIs and webhooks, internal
            tools and bots, CRUD applications, data pipelines, scheduled
            automation, and AI products.
          </Body>
          <Body>
            Start with a small integration between two services, then grow it
            into an application with its own domain model, data, background
            work, and operational tools, without changing stacks.
          </Body>
        </div>
      </Shell>

      {/* ===================== RUN ANYWHERE ===================== */}
      <Shell>
        <div className="mb-10 max-w-4xl">
          <Eyebrow>Run anywhere</Eyebrow>
          <H2>One Program. Choose Who Operates It.</H2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {PLACES.map(place => (
            <Point
              key={place.h}
              h={place.h}
              tone={place.tone}
              icon={place.icon}
            >
              {place.p}
            </Point>
          ))}
        </div>

        <div className="mt-8">
          <ArrowLink to="/our-cloud">Explore Darklang Cloud</ArrowLink>
        </div>
      </Shell>

      {/* ===================== AGENTS ===================== */}
      <Shell className={TINT}>
        <div className="max-w-4xl">
          <Eyebrow>Coding agents</Eyebrow>
          <H2 className="mb-4">A Backend Your Coding Agent Can Understand</H2>
          <Body className="mb-5">
            Darklang exposes its package tree, definitions, dependencies,
            runtime, traces, capabilities, branches, and datastores through
            structured tools, so an agent that can call command-line tools works
            with the whole environment.
          </Body>
          <Body className="mb-8">
            The agent finds the relevant code, makes a focused change on an
            isolated branch, runs the affected path, and reads the resulting
            trace, without reconstructing your backend from a collection of
            repositories and services first.
          </Body>

          <Link className={primary} to="/ai">
            Explore Darklang + AI
          </Link>
        </div>
      </Shell>

      {/* ===================== CTA ===================== */}
      <Shell>
        <div className="mx-auto max-w-2xl text-center">
          <H2 className="mb-4">Build Your First Backend</H2>
          <Body className="mb-8">
            Install Darklang, write a handler, and serve it. The datastore, the
            traces, and the capability checks are already there.
          </Body>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link className={primary} to="/getting-started">
              Install Darklang
            </Link>
            <Link className={ghost} to="/packages">
              Browse the packages
            </Link>
          </div>
        </div>
      </Shell>
    </div>
  );
};

export default Backends;
