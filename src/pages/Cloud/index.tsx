import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ------------------------------------------------------------------ */
/* Reusable pieces                                                     */
/* ------------------------------------------------------------------ */

const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mb-4 text-sm 2xl:text-base font-bold uppercase tracking-[0.12em] text-blue-dbg">
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

/** Fades a block in the first time it scrolls into view. */
const Reveal: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSeen(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(e => e.isIntersecting)) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        seen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Hero visual: a terminal, typed on a loop                            */
/* ------------------------------------------------------------------ */

type Line = { kind: "cmd" | "out" | "url"; text: string; note?: string };

const TERMINAL: Line[] = [
  { kind: "cmd", text: 'dark commit "add stock lookup"' },
  { kind: "out", text: "Committed to main" },
  { kind: "cmd", text: "dark sync" },
  { kind: "out", text: "4 ops pushed to darklang.cloud" },
  {
    kind: "url",
    text: "Live at https://warehouse.darklang.cloud/stock",
    note: "2.1s",
  },
];

const TYPE_MS = 26;
const OUT_MS = 380;
const HOLD_MS = 2600;

/** Types the commands, prints the output, holds, then starts again. */
const Terminal: React.FC = () => {
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);
  const [still, setStill] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStill(true);
      setLine(TERMINAL.length);
      return;
    }

    let timer: number;

    if (line >= TERMINAL.length) {
      timer = window.setTimeout(() => {
        setLine(0);
        setChars(0);
      }, HOLD_MS);
      return () => window.clearTimeout(timer);
    }

    const current = TERMINAL[line];

    if (current.kind === "cmd") {
      if (chars < current.text.length) {
        timer = window.setTimeout(() => setChars(c => c + 1), TYPE_MS);
      } else {
        timer = window.setTimeout(() => {
          setLine(l => l + 1);
          setChars(0);
        }, 320);
      }
    } else {
      timer = window.setTimeout(() => setLine(l => l + 1), OUT_MS);
    }

    return () => window.clearTimeout(timer);
  }, [line, chars]);

  const visible = still ? TERMINAL.length : line;

  return (
    <div className="overflow-hidden rounded-2xl bg-dark-black shadow-[0_28px_60px_-32px_rgba(30,30,40,0.75)]">
      <div className="flex items-center gap-1.5 bg-[#28282a] px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#4a4a4e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4a4a4e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4a4a4e]" />
        <span className="ml-2 font-code text-xs text-gray-500">terminal</span>
      </div>

      <div className="min-h-[11rem] px-5 py-4 font-code text-xs sm:text-sm leading-7">
        {TERMINAL.map((l, i) => {
          if (i > visible) return null;
          const typing = i === visible && l.kind === "cmd" && !still;
          const text = typing ? l.text.slice(0, chars) : l.text;
          if (i === visible && !typing && !still) return null;

          if (l.kind === "cmd") {
            return (
              <div key={i} className="text-gray-200">
                <span className="text-olive">$</span> {text}
                {typing && (
                  <span className="ml-0.5 inline-block h-[1em] w-[0.5em] translate-y-[0.12em] bg-gray-400 align-middle" />
                )}
              </div>
            );
          }
          if (l.kind === "url") {
            return (
              <div key={i} className="flex flex-wrap items-baseline gap-x-3">
                <span className="text-gray-400">Live at</span>
                <span className="text-code-fn">
                  https://warehouse.darklang.cloud/stock
                </span>
                <span className="ml-auto text-gray-500">{l.note}</span>
              </div>
            );
          }
          return (
            <div key={i} className="text-gray-400">
              {text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* The cloud                                                           */
/* ------------------------------------------------------------------ */

/** A small cloud, drawn as one silhouette rather than loose circles. */
const Puff: React.FC<{ className?: string; filled?: boolean }> = ({
  className,
  filled = false,
}) => (
  <svg
    className={className}
    viewBox="-2 -5 80 41"
    fill={filled ? "currentColor" : "none"}
    fillOpacity={filled ? 0.14 : undefined}
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13 31a11 11 0 0 1-1.4-21.9A15 15 0 0 1 38.5 5a11.5 11.5 0 0 1 16.8 6.6A10 10 0 0 1 63 31z" />
  </svg>
);

/**
 * Tiny clouds and a few connected nodes around the hero. Grey, quiet, and
 * kept to the margins so nothing lands behind the headline.
 */
const HeroSpecks: React.FC = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10 hidden select-none overflow-hidden lg:block"
  >
    <Puff className="absolute left-[3%] top-[10%] h-8 w-auto text-gray-200" />
    <Puff className="absolute right-[4%] top-[24%] h-7 w-auto text-gray-200" />
    <Puff className="absolute left-[10%] bottom-[8%] h-6 w-auto text-gray-200/80" />
    <Puff className="absolute right-[13%] bottom-[26%] h-5 w-auto text-gray-200/70" />

    {/* two small constellations, one per side */}
    <svg
      className="absolute left-[6%] top-[42%] h-16 w-40 text-gray-300"
      viewBox="0 0 160 64"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 46L52 18L96 40L142 14"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.55"
        strokeLinecap="round"
      />
      <g fill="currentColor">
        <circle cx="14" cy="46" r="2.6" />
        <circle cx="52" cy="18" r="2.6" />
        <circle cx="96" cy="40" r="2.6" />
        <circle cx="142" cy="14" r="2.6" />
      </g>
    </svg>

    <svg
      className="absolute right-[5%] bottom-[6%] h-14 w-36 text-gray-300"
      viewBox="0 0 144 56"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 16L48 42L92 20L130 38"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.55"
        strokeLinecap="round"
      />
      <g fill="currentColor">
        <circle cx="10" cy="16" r="2.6" />
        <circle cx="48" cy="42" r="2.6" />
        <circle cx="92" cy="20" r="2.6" />
        <circle cx="130" cy="38" r="2.6" />
      </g>
    </svg>
  </div>
);

/**
 * A faint constellation cloud behind the deploy scene. Its crown sits above
 * the objects, its base tucks behind the terminal. The nodes are the kinds of
 * thing Darklang Cloud runs.
 */
const SkyCloud: React.FC = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 1000 420"
    preserveAspectRatio="none"
    className="pointer-events-none absolute inset-x-0 -top-10 -z-10 hidden h-[calc(100%+5rem)] w-full lg:block"
  >
    <g fill="#747ab9" opacity="0.045">
      <circle cx="318" cy="196" r="126" />
      <circle cx="500" cy="152" r="152" />
      <circle cx="686" cy="196" r="122" />
      <circle cx="406" cy="238" r="104" />
      <circle cx="600" cy="240" r="100" />
    </g>

    <g fill="none" stroke="#b9bcd8" strokeWidth="1.6">
      <circle cx="318" cy="196" r="126" />
      <circle cx="500" cy="152" r="152" />
      <circle cx="686" cy="196" r="122" />
      <circle cx="406" cy="238" r="104" />
      <circle cx="600" cy="240" r="100" />
    </g>

    <path
      d="M0 330H1000"
      stroke="#b9bcd8"
      strokeWidth="1"
      strokeDasharray="2 6"
      opacity="0.65"
    />

    {/* the deploy path: one arc from your definitions to the running thing */}
    <g
      fill="none"
      stroke="#747ab9"
      strokeWidth="1.8"
      strokeDasharray="5 7"
      strokeLinecap="round"
      className="animate-dash-drift"
    >
      <path d="M170 250C332 14 668 14 830 250" />
    </g>

    <circle r="3.4" fill="#747ab9">
      <animateMotion
        dur="3.6s"
        repeatCount="indefinite"
        path="M170 250C332 14 668 14 830 250"
      />
    </circle>

    {/* the workloads sit on the arc, in front of it */}
    <g fill="#f8f8fb">
      <circle cx="353" cy="105" r="10" />
      <circle cx="500" cy="73" r="10" />
      <circle cx="647" cy="105" r="10" />
    </g>

    {/* http endpoint */}
    <g
      transform="translate(346 98)"
      fill="none"
      stroke="#6d74c5"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <circle cx="7" cy="7" r="6.4" />
      <path d="M.8 7h12.4M7 .6c3 3.6 3 9.2 0 12.8M7 .6c-3 3.6-3 9.2 0 12.8" />
    </g>

    {/* cron */}
    <g
      transform="translate(493 66)"
      fill="none"
      stroke="#a1887f"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <circle cx="7" cy="7" r="6.4" />
      <path d="M7 3.4V7.4l2.6 1.6" />
    </g>

    {/* datastore */}
    <g
      transform="translate(640 96)"
      fill="none"
      stroke="#2f9a90"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="7" cy="3.4" rx="6" ry="2.6" />
      <path d="M1 3.4v9c0 1.4 2.7 2.6 6 2.6s6-1.2 6-2.6v-9" />
    </g>
  </svg>
);

/** What you wrote, before it went anywhere. */
const ProgramCard: React.FC = () => (
  <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_24px_48px_-32px_rgba(45,40,70,0.5)]">
    <div className="flex items-center justify-between gap-3 border-b border-gray-100 bg-[#faf9fb] px-3 py-2 font-code text-[11px] text-gray-light">
      <span>your program</span>
      <span>3 defs</span>
    </div>
    <div className="grid gap-1.5 p-3">
      {[
        { k: "fn", n: "lookupStock" },
        { k: "type", n: "Item" },
        { k: "value", n: "reorderPoint" },
      ].map(d => (
        <div
          key={d.n}
          className="flex items-center gap-2 rounded-lg bg-[#faf9fb] px-2 py-1.5 font-code text-xs"
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-purple-lbg" />
          <span className="text-gray-light">{d.k}</span>
          <span className="text-gray-800">{d.n}</span>
        </div>
      ))}
    </div>
  </div>
);

/** The same program, answering requests. */
const LiveCard: React.FC = () => (
  <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_24px_48px_-32px_rgba(45,40,70,0.5)]">
    <div className="border-b border-gray-100 bg-[#faf9fb] px-3 py-2">
      <span className="block truncate rounded-full border border-gray-200 bg-white px-2 py-0.5 font-code text-[11px] text-gray-500">
        warehouse.darklang.cloud/stock
      </span>
    </div>
    <div className="p-3">
      <div className="mb-1.5 flex items-center gap-2">
        <span className="rounded-full bg-acc-green/15 px-2 py-0.5 font-code text-[11px] text-acc-green">
          200 OK
        </span>
        <span className="font-code text-[11px] text-gray-light">41 ms</span>
      </div>
      <div className="font-code text-xs leading-6 text-gray-700">
        {'{ "sku": '}
        <span className="text-acc-green">"A-2291"</span>
        {", "}
        <br />
        {'  "onHand": '}
        <span className="text-acc-green">14</span>
        {" }"}
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const THESIS_CARDS = [
  {
    h: "Dev/Prod Parity",
    p: "The hosted instance runs the same open-source runtime as your laptop. What you tested is what runs.",
    tone: "border-blue-lbg/25 bg-blue-lbg/[0.055]",
    title: "text-blue-dbg",
  },
  {
    h: "Instant Rollback",
    p: "A deploy is a commit, so rolling back is a sync, not a rebuild.",
    tone: "border-purple-lbg/25 bg-purple-lbg/[0.055]",
    title: "text-purple-dbg",
  },
  {
    h: "Nothing to Configure",
    p: "No capacity planning, no connection pools, no load balancers. Traffic is our problem.",
    tone: "border-acc-teal/25 bg-acc-teal/[0.055]",
    title: "text-acc-teal",
  },
];

const PRIMITIVES = [
  {
    h: "HTTP Endpoints",
    p: "handlers and routers, live at your own darklang.cloud address",
    tone: "text-blue-dbg",
    tile: "bg-blue-lbg/10",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.8 4.2 2.8 13.8 0 18M12 3c-2.8 4.2-2.8 13.8 0 18" />
      </>
    ),
  },
  {
    h: "Scheduled Jobs",
    p: "crons that just say when they run",
    tone: "text-taupe",
    tile: "bg-taupe/15",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5.2l3.4 2" />
      </>
    ),
  },
  {
    h: "Background Workers",
    p: "queues and async work, built in",
    tone: "text-purple-dbg",
    tile: "bg-purple-lbg/10",
    icon: (
      <>
        <rect x="3" y="5" width="7" height="14" rx="2" />
        <rect x="14" y="5" width="7" height="14" rx="2" />
        <path d="M10.5 12h3" />
      </>
    ),
  },
  {
    h: "Scripts and CLIs",
    p: "the same tools you run locally, hosted",
    tone: "text-acc-teal",
    tile: "bg-acc-teal/10",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path d="M7.5 10l2.5 2.4-2.5 2.4M12.5 15h4" />
      </>
    ),
  },
];

const TONES = {
  purple: "border-purple-lbg/20 bg-purple-lbg/[0.055]",
  pink: "border-acc-pink/20 bg-acc-pink/[0.055]",
  blue: "border-blue-lbg/20 bg-blue-lbg/[0.055]",
  teal: "border-acc-teal/20 bg-acc-teal/[0.055]",
  taupe: "border-taupe/25 bg-taupe/[0.07]",
};

/** A small tinted panel the feature sketches live in. */
const Mock: React.FC<{
  tone: keyof typeof TONES;
  children: React.ReactNode;
}> = ({ tone, children }) => (
  <div
    className={`flex h-full flex-col justify-center overflow-hidden rounded-xl border p-4 ${TONES[tone]}`}
  >
    {children}
  </div>
);

/** A neutral placeholder bar. Shape only. */
const Bar: React.FC<{ w: string; tone?: string }> = ({
  w,
  tone = "bg-gray-200",
}) => (
  <span className={`block h-1.5 rounded-full ${tone}`} style={{ width: w }} />
);

const Tile: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <div
    className={`flex items-center gap-2.5 rounded-lg border border-gray-100 bg-white px-2.5 py-2 font-code text-[10px] ${className}`}
  >
    {children}
  </div>
);

/** A word that names what the sketch is showing. */
const Note: React.FC<{ children: React.ReactNode; tone?: string }> = ({
  children,
  tone = "text-gray-400",
}) => <span className={`font-code text-[10px] ${tone}`}>{children}</span>;

const INCLUDED: {
  h: string;
  p: React.ReactNode;
  to?: string;
  mock: React.ReactNode;
}[] = [
  {
    h: "Package Registry",
    p: "packages.darklang.com: publish your own packages and use the ecosystem's. Immutable once published, so what you call today is what runs tomorrow.",
    to: "/packages",
    mock: (
      <Mock tone="purple">
        <svg viewBox="0 0 320 98" className="block w-full" aria-hidden="true">
          <g fill="#fff" stroke="#e2e0e8" strokeWidth="1.1">
            <rect x="66" y="6" width="188" height="24" rx="9" />
            <rect x="52" y="26" width="216" height="24" rx="9" />
          </g>
          <g fill="#eceaf0">
            <rect x="84" y="15" width="62" height="6" rx="3" />
            <rect x="70" y="35" width="84" height="6" rx="3" />
          </g>

          <rect
            x="38"
            y="46"
            width="244"
            height="30"
            rx="11"
            fill="rgba(149,88,159,0.07)"
            stroke="#95589f"
            strokeOpacity="0.35"
            strokeWidth="1.1"
          />
          <rect
            x="58"
            y="58"
            width="96"
            height="6"
            rx="3"
            fill="#95589f"
            fillOpacity="0.32"
          />
          <g
            transform="translate(238 52)"
            fill="none"
            stroke="#95589f"
            strokeOpacity="0.55"
            strokeWidth="1.2"
            strokeLinecap="round"
          >
            <rect x="1" y="7" width="14" height="10" rx="2.5" />
            <path d="M4.5 7V4.6a3.5 3.5 0 017 0V7" />
          </g>
        </svg>
        <div className="mt-1">
          <Note>immutable once published</Note>
        </div>
      </Mock>
    ),
  },
  {
    h: "Source Hosting",
    p: "Your code versioned and backed up by Darklang's built-in source control, synced across your machines.",
    to: "/source-control",
    mock: (
      <Mock tone="pink">
        <svg viewBox="0 0 320 66" className="block w-full" aria-hidden="true">
          <path
            d="M10 48H310"
            stroke="#e2e0e8"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M108 48C108 48 118 16 160 16C202 16 212 48 212 48"
            fill="none"
            stroke="#c25a7d"
            strokeOpacity="0.5"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          {[42, 108, 212, 278].map(x => (
            <circle key={x} cx={x} cy="48" r="4" fill="#d8d5de" />
          ))}
          <circle cx="160" cy="16" r="4" fill="#c25a7d" fillOpacity="0.6" />
        </svg>

        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <Note>main</Note>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-acc-pink/60" />
            <Note tone="text-acc-pink">branch</Note>
          </span>
          <Note>synced across your machines</Note>
        </div>
      </Mock>
    ),
  },
  {
    h: "Monitoring and Traces",
    p: "Every request leaves a trace you can inspect: logs, errors, and the actual execution, from the same program structure the runtime executes rather than bolted-on tooling.",
    to: "/traceDriven",
    mock: (
      <Mock tone="blue">
        <div className="mb-2 flex items-center justify-between">
          <Note>requests</Note>
          <Note tone="text-rust">1 error</Note>
        </div>
        <div className="flex h-16 items-end gap-1.5">
          {[38, 62, 30, 74, 46, 88, 34, 58, 42, 70, 26, 52].map((h, i) => (
            <span
              key={i}
              className={`w-full rounded-sm ${
                i === 5 ? "bg-rust/45" : "bg-blue-lbg/30"
              }`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-rust/60" />
          <Note>every request keeps its trace</Note>
        </div>
      </Mock>
    ),
  },
  {
    h: "Your Instance, from Anywhere",
    p: "Reach your hosted environment from any machine and pick up exactly where you left off.",
    mock: (
      <Mock tone="teal">
        <div className="flex items-center gap-2">
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="flex h-6 flex-1 items-center justify-center rounded-lg border border-gray-200 bg-white"
            >
              <span className="h-1.5 w-7 rounded-full bg-gray-200" />
            </span>
          ))}
        </div>

        <svg
          viewBox="0 0 200 22"
          preserveAspectRatio="none"
          className="block h-5 w-full"
          aria-hidden="true"
        >
          <path
            d="M34 0C34 14 84 10 100 20M100 0V20M166 0C166 14 116 10 100 20"
            fill="none"
            stroke="#9fc4c0"
            strokeWidth="1.2"
            strokeDasharray="3.5 4.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="flex justify-center">
          <span className="rounded-full border border-acc-teal/35 bg-acc-teal/[0.08] px-3 py-1 font-code text-[10px] text-acc-teal">
            your instance
          </span>
        </div>
      </Mock>
    ),
  },
  {
    h: "Configuration and Secrets",
    p: "Set per instance, never in your code and never in packages, so the same program runs in different places without editing it.",
    mock: (
      <Mock tone="taupe">
        <div className="grid gap-2">
          <Tile>
            <Note tone="text-gray-500">config</Note>
            <Bar w="30%" />
            <span className="ml-auto h-1.5 w-10 rounded-full bg-gray-100" />
          </Tile>
          <Tile>
            <Note tone="text-gray-500">secret</Note>
            <Bar w="26%" />
            <span className="ml-auto flex gap-1">
              {[0, 1, 2, 3, 4].map(i => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-gray-300"
                />
              ))}
            </span>
          </Tile>
          <div className="px-1">
            <Note>set on the instance, not in your code</Note>
          </div>
        </div>
      </Mock>
    ),
  },
  {
    h: "Your Data, Yours",
    p: "Datastores are backed up, and exportable. Take everything with you, anytime.",
    mock: (
      <Mock tone="purple">
        <div className="flex items-center gap-1">
          <svg width="50" height="60" viewBox="0 0 50 60" aria-hidden="true">
            <g fill="#fff" stroke="#d8d5de" strokeWidth="1.2">
              <path d="M2 14a23 7.5 0 0146 0v32a23 7.5 0 01-46 0z" />
              <path d="M2 14a23 7.5 0 0046 0" />
              <path d="M2 30a23 7.5 0 0046 0" />
            </g>
          </svg>

          <svg
            viewBox="0 0 100 12"
            preserveAspectRatio="none"
            className="h-3 flex-1"
            aria-hidden="true"
          >
            <path
              d="M4 6H96"
              stroke="#95589f"
              strokeWidth="1.3"
              strokeDasharray="4.5 5.5"
              strokeLinecap="round"
              opacity="0.7"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <path
              d="M2 1.5l5 4.5-5 4.5"
              fill="none"
              stroke="#95589f"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.7"
            />
          </svg>

          <svg width="56" height="48" viewBox="0 0 56 48" aria-hidden="true">
            <rect
              x="1"
              y="6"
              width="54"
              height="36"
              rx="11"
              fill="#fff"
              stroke="#e2e0e8"
              strokeWidth="1.1"
            />
            <g
              transform="translate(20 16)"
              fill="none"
              stroke="#95589f"
              strokeOpacity="0.75"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 0v10M4 6l4 4 4-4M1 14h14" />
            </g>
          </svg>
        </div>

        <div className="mt-1 flex items-center justify-between">
          <Note>datastore</Note>
          <Note>yours to take</Note>
        </div>
      </Mock>
    ),
  },
];

const CLOUD_SIDE = [
  {
    h: "Deploy in Seconds, No Setup",
    p: "A commit and a sync, and it's live at a URL. There's no build step to wait on.",
  },
  {
    h: "Monitoring and Traces Built In",
    p: "Every request keeps a trace you can inspect, with no separate tool to wire up.",
  },
  {
    h: "Scaling and Uptime Handled",
    p: "No capacity planning, no connection pools, no load balancers. Traffic is our problem.",
  },
  {
    h: "Package Registry Included",
    p: "Publish and pull from packages.darklang.com with nothing of your own to host.",
  },
];

const SELF_SIDE = [
  {
    h: "Full Control of Your Infrastructure",
    p: "Your machines, your network, your rules, with no dependency on us to keep running.",
  },
  {
    h: "Run on Your Own Servers or Cloud",
    p: "The runtime is open source, so it runs anywhere you can run a binary.",
  },
  {
    h: "You Manage Servers, Monitoring, Scale",
    p: "The work Cloud does for you is work you take on yourself.",
  },
  {
    h: "Same Runtime, Same Packages",
    p: "Behaviour is identical either way, so moving between them is a sync, not a migration.",
  },
];

const Side: React.FC<{
  title: string;
  items: { h: string; p: string }[];
  title_tone: string;
  icon_tone: string;
  icon: React.ReactNode;
}> = ({ title, items, title_tone, icon_tone, icon }) => (
  <div>
    <h3
      className={`mb-7 text-center text-xl font-bold 2xl:text-2xl ${title_tone}`}
    >
      {title}
    </h3>
    <ul className="grid gap-7">
      {items.map(item => (
        <li key={item.h} className="flex gap-3.5">
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`mt-1 shrink-0 ${icon_tone}`}
            aria-hidden="true"
          >
            {icon}
          </svg>
          <div>
            <p className="font-semibold text-gray-900 2xl:text-lg">{item.h}</p>
            <p className="mt-1 leading-relaxed text-gray-600 2xl:text-lg">
              {item.p}
            </p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

/* ------------------------------------------------------------------ */
/* Newsletter signup, posting to the same endpoint the site already uses */
/* ------------------------------------------------------------------ */

const CloudSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setState("error");
      setMessage("Please enter your email address");
      return;
    }
    setState("sending");
    try {
      const response = await fetch(
        "https://ops-corpsite.builtwithdark.com/signup",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );
      if (!response.ok) throw new Error("signup failed");
      setState("done");
    } catch {
      setState("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  if (state === "done") {
    return (
      <p className="text-base text-acc-green">
        Thanks. We'll email you when Cloud opens.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-2">
        <label htmlFor="cloudSignupEmail" className="sr-only">
          Email address
        </label>
        <input
          id="cloudSignupEmail"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="min-w-[14rem] flex-1 rounded-full border border-gray-200 px-5 py-3 text-base text-dark outline-none transition focus:border-blue-lbg"
        />
        <button
          type="submit"
          disabled={state === "sending"}
          className="rounded-full border border-gray-200 bg-white px-6 py-3 font-semibold text-purple-dbg transition hover:border-purple-lbg disabled:opacity-60"
        >
          {state === "sending" ? "Sending" : "Get notified"}
        </button>
      </div>
      {state === "error" && (
        <span className="text-sm text-rust">{message}</span>
      )}
    </form>
  );
};

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const Cloud: React.FC = () => {
  const primary =
    "inline-block rounded-full bg-purple-lbg px-6 py-3 font-semibold text-white transition hover:bg-purple-dbg";
  const ghost =
    "inline-block rounded-full border border-gray-300 bg-white/70 px-6 py-3 font-semibold text-gray-800 backdrop-blur transition hover:border-gray-400 hover:bg-white";

  return (
    <div className="relative overflow-x-clip">
      <div className="mx-auto max-w-7xl 2xl:max-w-[100rem] px-4">
        {/* ===================== HERO ===================== */}
        <header className="relative pt-14 pb-8 text-center md:pt-20">
          <HeroSpecks />

          <Eyebrow>Darklang Cloud</Eyebrow>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-balance text-gray-900 md:text-5xl 2xl:text-6xl">
            Run Your Darklang Code{" "}
            <span className="text-blue-dbg">Without Running Servers</span>
          </h1>

          <p className="mx-auto mt-6 max-w-5xl text-lg leading-relaxed text-gray-700 md:text-xl 2xl:max-w-6xl 2xl:text-2xl">
            Darklang runs anywhere: your laptop, your servers, ours. Darklang
            Cloud is the hosted option, the most convenient way to run your
            backends, crons, and scripts, with none of the infrastructure. No
            servers to manage, no containers to configure, no YAML.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link className={primary} to="/getting-started">
              Install Darklang
            </Link>
            <a className={ghost} href="#included">
              See what's included
            </a>
          </div>
        </header>

        {/* the deploy scene: what you wrote, the command, the running thing */}
        <div className="relative mx-auto mt-8 max-w-6xl pb-16 pt-8 lg:pt-24">
          <SkyCloud />

          <div className="relative grid items-center gap-6 lg:grid-cols-[11rem_1fr_13rem] lg:gap-8">
            <ProgramCard />
            <Terminal />
            <LiveCard />
          </div>
        </div>

        {/* ===================== THESIS ===================== */}
        <Reveal>
          <section className="py-24">
            <div className="mb-10 max-w-6xl">
              <Eyebrow>How deploying works</Eyebrow>
              <H2 className="mb-4">The runtime is the infrastructure</H2>
              <Body>
                A deploy on Darklang Cloud isn't a build and a ship. There's
                nothing to build, and not because we automated it away: Darklang
                programs are structured data, so deploying is syncing your
                committed code to an instance we host. Save, sync, and it's live
                at a URL in seconds. Rolling back is pointing at the previous
                commit.
              </Body>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {THESIS_CARDS.map(c => (
                <div
                  key={c.h}
                  className={`rounded-2xl border p-6 transition duration-200 hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none ${c.tone}`}
                >
                  <h3
                    className={`mb-2 text-lg font-bold 2xl:text-xl ${c.title}`}
                  >
                    {c.h}
                  </h3>
                  <p className="text-base 2xl:text-lg leading-relaxed text-gray-600">
                    {c.p}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ===================== WHAT YOU CAN RUN ===================== */}
        <Reveal>
          <section className="py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_26rem] lg:items-start lg:gap-24 2xl:grid-cols-[1fr_32rem]">
              <div>
                <Eyebrow>What you can run</Eyebrow>
                <H2 className="mb-4">
                  Endpoints, crons, and queues are language features
                </H2>
                <Body>
                  An HTTP endpoint, a cron, or a background worker is declared
                  in your code the same way a function is, and the platform runs
                  it. Nothing to pick, nothing to provision, no scheduler to
                  wire up. Every app gets its own darklang.cloud address, and
                  custom domains are planned.
                </Body>
              </div>

              <dl className="grid gap-7">
                {PRIMITIVES.map(p => (
                  <div key={p.h} className="flex items-start gap-3.5">
                    <span
                      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${p.tile} ${p.tone}`}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        {p.icon}
                      </svg>
                    </span>
                    <div>
                      <dt className="font-code text-base font-semibold text-dark 2xl:text-lg">
                        {p.h}
                      </dt>
                      <dd className="text-base text-gray-600 2xl:text-lg">
                        {p.p}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        </Reveal>

        {/* ===================== EVERYTHING INCLUDED ===================== */}
        <Reveal>
          <section id="included" className="scroll-mt-32 pb-24">
            <div className="mb-10 max-w-3xl">
              <Eyebrow>Everything included</Eyebrow>
              <H2>The rest comes with the platform</H2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {INCLUDED.map(f => (
                <div
                  key={f.h}
                  className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none"
                >
                  <h3 className="mb-2 text-lg 2xl:text-xl font-bold text-gray-900">
                    {f.h}
                  </h3>
                  <p className="text-base 2xl:text-lg leading-relaxed text-gray-600">
                    {f.p}
                  </p>

                  {f.to && (
                    <Link
                      to={f.to}
                      className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-purple-dbg"
                    >
                      Learn more
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
                  )}

                  <div className="mt-5 flex-1">{f.mock}</div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ===================== COMPARISON ===================== */}
        <Reveal>
          <section className="py-24">
            <div className="mx-auto mb-12 max-w-6xl text-center">
              <Eyebrow>Cloud or self-hosted</Eyebrow>
              <H2 className="mb-4">Same runtime, either way</H2>
              <Body>
                Cloud is optimized for convenience and self-hosting for control,
                but the same open-source runtime is underneath both. Moving
                between them is the same sync a deploy is: your code, history,
                and packages replicate to any instance, including one you own.
                Leaving is a sync, not a migration.
              </Body>
            </div>

            <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:gap-16 lg:max-w-6xl lg:gap-24 2xl:max-w-7xl 2xl:gap-32">
              <Side
                title="Darklang Cloud"
                items={CLOUD_SIDE}
                title_tone="text-blue-dbg"
                icon_tone="text-blue-dbg"
                icon={
                  <path d="M7 19a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 17.6 8.4 4.6 4.6 0 0 1 18 19z" />
                }
              />
              <Side
                title="Self-Hosted"
                items={SELF_SIDE}
                title_tone="text-gray-900"
                icon_tone="text-gray-400"
                icon={
                  <>
                    <rect x="3" y="4.5" width="18" height="12" rx="2" />
                    <path d="M2 20h20" />
                  </>
                }
              />
            </div>

            <p className="mx-auto mt-14 max-w-3xl text-center text-base leading-relaxed text-gray-500 2xl:text-lg">
              Cloud is also how Darklang stays sustainable: the language is open
              source and always will be, and hosting is the product.
            </p>
          </section>
        </Reveal>

        {/* ===================== PRICING ===================== */}
        <Reveal>
          <section className="relative left-1/2 my-8 w-screen -translate-x-1/2 border-y border-gray-200 bg-[#f5f6fc] py-12">
            <div className="mx-auto max-w-7xl 2xl:max-w-[100rem] px-4">
              <Eyebrow>Pricing</Eyebrow>
              <p className="mt-2 max-w-4xl text-lg leading-relaxed text-gray-600">
                <strong className="font-semibold text-gray-900">
                  Free while in development
                </strong>
                . Paid plans when Cloud opens, priced for everything from side
                projects to production apps. The language, the CLI, and
                self-hosting are free forever.
              </p>
            </div>
          </section>
        </Reveal>

        {/* ===================== CTA ===================== */}
        <Reveal>
          <section className="py-24">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white px-6 py-14 text-center shadow-[0_18px_44px_-34px_rgba(45,40,70,0.35)] md:px-12 md:py-16">
                {/* the same specks as the hero */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 hidden select-none overflow-hidden lg:block"
                >
                  <Puff
                    filled
                    className="absolute left-[5%] top-[16%] h-8 w-auto text-blue-lbg/35"
                  />
                  <Puff
                    filled
                    className="absolute right-[6%] top-[24%] h-6 w-auto text-purple-lbg/30"
                  />
                  <Puff
                    filled
                    className="absolute left-[13%] bottom-[14%] h-5 w-auto text-acc-teal/30"
                  />

                  <svg
                    className="absolute right-[8%] bottom-[16%] h-14 w-36 text-blue-lbg/45"
                    viewBox="0 0 144 56"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 16L48 42L92 20L130 38"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeOpacity="0.55"
                      strokeLinecap="round"
                    />
                    <g fill="currentColor">
                      <circle cx="10" cy="16" r="2.6" />
                      <circle cx="48" cy="42" r="2.6" />
                      <circle cx="92" cy="20" r="2.6" />
                      <circle cx="130" cy="38" r="2.6" />
                    </g>
                  </svg>
                </div>

                <div className="relative">
                  <h2 className="mx-auto max-w-5xl text-3xl font-bold tracking-tight text-gray-900 md:text-4xl 2xl:text-5xl">
                    Start Now, Host Later
                  </h2>

                  <p className="mx-auto mt-5 max-w-5xl text-lg leading-relaxed text-gray-700 2xl:text-xl">
                    Darklang Cloud isn't open yet, but the language is. You
                    don't need the cloud to use Darklang: install the CLI, build
                    locally, and your code will be ready to sync the day hosting
                    opens.
                  </p>

                  <div className="mt-9 flex justify-center">
                    <Link className={primary} to="/getting-started">
                      Install Darklang
                    </Link>
                  </div>

                  <div className="mx-auto mt-10 max-w-lg border-t border-gray-200 pt-8">
                    <p className="mb-4 text-base text-gray-600">
                      Cloud is in development. The newsletter is where we will
                      announce it opening.
                    </p>
                    <CloudSignup />
                  </div>
                </div>
              </div>

              {/* a few that sit half on the card, half off it */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden select-none lg:block"
              >
                <Puff
                  filled
                  className="absolute -left-7 top-12 h-11 w-auto text-blue-lbg/40"
                />
                <Puff
                  filled
                  className="absolute -right-6 bottom-16 h-9 w-auto text-purple-lbg/35"
                />
              </div>
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-gray-500 2xl:text-base">
              Already running a Darklang Classic app? It keeps running. Darklang
              Cloud is hosting for the new ecosystem; see the{" "}
              <Link to="/classic" className="text-blue-dbg underline">
                Darklang Classic page
              </Link>{" "}
              for where Classic stands.
            </p>
          </section>
        </Reveal>
      </div>
    </div>
  );
};

export default Cloud;
