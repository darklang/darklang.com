import React, { useState, useEffect, useRef } from "react";

import SectionTitle from "../../common/ui/SectionTitle";
import DetailLinks from "./DetailLinks";

const tan = "text-classic-yellow";

const CallerLine: React.FC<{ name: string; note?: React.ReactNode }> = ({
  name,
  note,
}) => (
  <div className="flex flex-wrap items-baseline gap-x-2">
    <span className="text-blue-dbg">{name}</span>
    {note && <span className="text-gray-500">{note}</span>}
  </div>
);

const ImpactRow: React.FC<{
  count: string;
  text: React.ReactNode;
  tag: React.ReactNode;
  tagColor?: string;
  details?: React.ReactNode;
}> = ({ count, text, tag, tagColor = "text-gray-500", details }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => details && setOpen(o => !o)}
        className={`w-full flex items-baseline gap-3 text-left ${
          details ? "" : "cursor-default"
        }`}
      >
        <span className={`${tan} w-8 shrink-0`}>{count}</span>
        <span className="flex-1 min-w-0 text-gray-200 flex items-center gap-1.5">
          <span className="truncate">{text}</span>
          {details && (
            <span
              className={`shrink-0 text-gray-500 text-[10px] transition-transform ${
                open ? "rotate-90" : ""
              }`}
            >
              ▸
            </span>
          )}
        </span>
        <span className={`${tagColor} shrink-0`}>{tag}</span>
      </button>
      {open && details && (
        <div className="mt-2 mb-1 ml-8 space-y-1.5 border-l border-white/10 pl-3 text-xs">
          {details}
        </div>
      )}
    </div>
  );
};

const ReviewCard: React.FC = () => (
  <div className="rounded-2xl bg-[#1e1e1e] shadow-2xl overflow-hidden">
    {/* Window bar */}
    <div className="flex items-center gap-2.5 px-5 py-2.5 border-b border-white/5">
      <span className="text-rose">
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <circle cx="18" cy="8" r="2.5" />
          <path d="M6 8.5v7" />
          <path d="M18 10.5c0 3.5-3.5 4-6 4.5" />
        </svg>
      </span>
      <span className="font-code text-sm text-gray-400">
        change review · <span className="text-gray-200">Notify.notify</span>
      </span>
    </div>

    <div className="px-6 py-6 font-code text-[13px] md:text-sm">
      {/* Signature */}
      <div className="text-gray-500 text-xs uppercase tracking-wide mb-3">
        signature
      </div>
      <div className="flex items-baseline flex-wrap gap-x-2 gap-y-1">
        <span className={`${tan} shrink-0`}>~</span>
        <span className="text-gray-200">return type changed from</span>
        <span className="text-gray-400">Unit</span>
        <span className="text-gray-500">to</span>
        <span className="text-blue-dbg">Result&lt;Unit&gt;</span>
      </div>

      {/* Impact */}
      <div className="mt-6 pt-5 border-t border-white/5 text-gray-500 text-xs uppercase tracking-wide mb-3">
        impact
      </div>
      <div className="space-y-2.5">
        <ImpactRow
          count="12"
          text="callers affected"
          tag="analyzed"
          details={
            <>
              <CallerLine name="Notify.notify" />
              <CallerLine name="Digest.summarize" />
              <CallerLine name="Webhook.onIssue" />
              <div className="text-gray-600">+9 more</div>
            </>
          }
        />
        <ImpactRow
          count="2"
          text="callers fail type-checking"
          tag="blocking"
          tagColor="text-rust"
          details={
            <>
              <CallerLine
                name="Notify.formatIssue"
                note={
                  <>
                    expected <span className="text-blue-dbg">String</span>, got{" "}
                    <span className="text-blue-dbg">Result&lt;String&gt;</span>
                  </>
                }
              />
              <CallerLine
                name="Digest.summarize"
                note={
                  <>
                    expected <span className="text-blue-dbg">Unit</span>, got{" "}
                    <span className="text-blue-dbg">Result&lt;Unit&gt;</span>
                  </>
                }
              />
            </>
          }
        />
        <ImpactRow
          count="4"
          text="recorded inputs changed output"
          tag="evidence attached"
          details={
            <>
              <div className="flex flex-wrap items-baseline gap-x-2">
                <span className="text-gray-400">trace #1042</span>
                <span className="text-gray-300">Ok</span>
                <span className="text-gray-600">→</span>
                <span className="text-rust">Error NotFound</span>
              </div>
              <div className="flex flex-wrap items-baseline gap-x-2">
                <span className="text-gray-400">trace #1039</span>
                <span className="text-gray-300">3 sent</span>
                <span className="text-gray-600">→</span>
                <span className="text-rust">0 sent</span>
              </div>
              <div className="text-gray-600">+2 more</div>
            </>
          }
        />
        <ImpactRow
          count="1"
          text="new external request"
          tag="api.discord.com"
          details={
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-purple-dbg">POST</span>
              <span className="text-blue-dbg">
                api.discord.com/channels/…/messages
              </span>
            </div>
          }
        />
      </div>
    </div>
  </div>
);

/* ---- New impact-map card (severity grid) ---- */

type Severity = "error" | "changed" | "none";

const sevStyle: Record<
  Severity,
  { bg: string; name: string; detail: string; ring: string }
> = {
  error: {
    bg: "bg-rust/10",
    name: "text-rust",
    detail: "text-rust/70",
    ring: "ring-rust",
  },
  changed: {
    bg: "bg-acc-amber/15",
    name: "text-acc-amber",
    detail: "text-acc-amber/80",
    ring: "ring-acc-amber",
  },
  none: {
    bg: "bg-gray-100",
    name: "text-gray-600",
    detail: "text-gray-400",
    ring: "ring-gray-400",
  },
};

type Caller = {
  name: string;
  detail?: string;
  sev: Severity;
  line?: number;
  code?: { n: number; text: string; hl?: boolean }[];
  msg?: string;
  runs?: {
    trace: string;
    cause: string;
    was: string;
    now: string;
    ms: number;
  }[];
};

const callers: Caller[] = [
  {
    name: "Schedule.hourly",
    detail: "type error · line 8",
    sev: "error",
    line: 8,
    code: [
      { n: 7, text: 'let repo = "darklang/dark"' },
      { n: 8, text: "Notify.notify repo", hl: true },
      { n: 9, text: "()" },
    ],
    msg: "Notify.notify now returns Result<Unit>, but its result is discarded here.",
  },
  {
    name: "Repos.syncAll",
    detail: "type error · line 23",
    sev: "error",
    line: 23,
    code: [
      { n: 22, text: "Config.watchedRepos" },
      {
        n: 23,
        text: "|> List.iter (fun repo -> Notify.notify repo)",
        hl: true,
      },
    ],
    msg: "List.iter expects Unit, but Notify.notify now returns Result<Unit>.",
  },
  {
    name: "Webhook.onPush",
    detail: "2 runs differ",
    sev: "changed",
    runs: [
      {
        trace: "#1042",
        cause: "Error NotFound",
        was: "Ok",
        now: "Error NotFound",
        ms: 143,
      },
      {
        trace: "#1088",
        cause: "Error Timeout",
        was: "Ok",
        now: "Error Timeout",
        ms: 210,
      },
    ],
  },
  {
    name: "Cli.run",
    detail: "1 run differs",
    sev: "changed",
    runs: [
      {
        trace: "#1039",
        cause: "Error Unauthorized",
        was: "3 posted",
        now: "0 posted",
        ms: 88,
      },
    ],
  },
  {
    name: "Dashboard.refresh",
    detail: "1 run differs",
    sev: "changed",
    runs: [
      {
        trace: "#1051",
        cause: "Error RateLimited",
        was: "Ok",
        now: "Error RateLimited",
        ms: 176,
      },
    ],
  },
  { name: "Api.postNotify", sev: "none" },
  { name: "Retry.wrap", sev: "none" },
  { name: "Digest.compose", sev: "none" },
  { name: "Test.notifyPosts", sev: "none" },
];

const CallerCard: React.FC<{
  c: Caller;
  selected: boolean;
  onClick: () => void;
}> = ({ c, selected, onClick }) => {
  const s = sevStyle[c.sev];
  const inner = <div className={`font-code text-sm ${s.name}`}>{c.name}</div>;

  // unaffected callers have nothing to open — display only
  if (c.sev === "none") {
    return <div className={`rounded-lg px-3.5 py-2.5 ${s.bg}`}>{inner}</div>;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer text-left rounded-lg px-3.5 py-2.5 transition ${
        s.bg
      } ${selected ? `ring-2 ${s.ring}` : ""}`}
    >
      {inner}
      {c.detail && (
        <div className={`font-code text-[11px] mt-0.5 ${s.detail}`}>
          {c.detail}
        </div>
      )}
    </button>
  );
};

/** Hover card: the replayed trace, and how its result changed. */
const TracePopover: React.FC<{
  trace: string;
  caller: string;
  cause: string;
  now: string;
  ms: number;
}> = ({ trace, caller, cause, now, ms }) => (
  <div className="invisible absolute left-0 top-full z-20 mt-2 w-64 rounded-lg border border-gray-200 bg-white p-3 text-left opacity-0 shadow-xl transition-opacity group-hover:visible group-hover:opacity-100">
    {/* header */}
    <div className="mb-2.5 flex items-center justify-between">
      <span className="flex items-center gap-1.5 font-code text-xs text-dark">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-acc-pink"
          aria-hidden="true"
        >
          <path d="M3 12h4l2 6 4-14 2 8h6" />
        </svg>
        trace {trace}
      </span>
      <span className="font-code text-[10px] text-gray-400">{ms}ms</span>
    </div>

    {/* the replayed call path */}
    <div className="font-code text-[11px]">
      <div className="flex gap-2.5">
        <div className="flex flex-col items-center">
          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gray-300"></span>
          <span className="my-0.5 w-px flex-1 bg-gray-200"></span>
        </div>
        <div className="pb-2 text-gray-500">{caller}</div>
      </div>
      <div className="flex gap-2.5">
        <div className="flex flex-col items-center">
          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rust"></span>
          <span className="my-0.5 w-px flex-1 bg-gray-200"></span>
        </div>
        <div className="pb-2">
          <span className="text-gray-600">Notify.notify</span>{" "}
          <span className="text-gray-400">→</span>{" "}
          <span className="text-rust">{cause}</span>
        </div>
      </div>
      <div className="flex gap-2.5">
        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-acc-amber"></span>
        <div>
          <span className="text-gray-500">returns</span>{" "}
          <span className="text-acc-amber">{now}</span>
        </div>
      </div>
    </div>
  </div>
);

const DetailPanel: React.FC<{ c: Caller }> = ({ c }) => (
  <div className="mt-4 rounded-lg border border-gray-200">
    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-[#F9F9FB] rounded-t-lg">
      <span className="font-code text-sm text-dark">{c.name}</span>
      {c.line != null && (
        <span className="text-xs text-gray-400">line {c.line}</span>
      )}
    </div>
    <div className="px-4 py-3 bg-white">
      {c.code ? (
        <div className="font-code text-[13px]">
          {c.code.map(l => (
            <div
              key={l.n}
              className={`flex gap-3 -mx-4 px-4 ${l.hl ? "bg-rust/10" : ""}`}
            >
              <span className="text-gray-300 w-5 text-right select-none">
                {l.n}
              </span>
              <span className={l.hl ? "text-dark" : "text-gray-500"}>
                {l.text}
                {l.hl && <span className="block h-px bg-rust mt-0.5"></span>}
              </span>
            </div>
          ))}
          {c.msg && <div className="mt-2.5 text-rust text-xs">{c.msg}</div>}
        </div>
      ) : c.runs ? (
        <div className="font-code text-[13px]">
          <div className="space-y-2.5">
            {c.runs.map((r, i) => (
              <div
                key={r.trace}
                className={
                  i > 0 ? "pt-2.5 border-t border-gray-100" : undefined
                }
              >
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                  {/* hoverable trace chip */}
                  <div className="group relative inline-block align-middle">
                    <span className="cursor-help rounded bg-gray-100 px-1.5 py-0.5 text-[11px] text-gray-500 transition-colors hover:bg-gray-200">
                      trace {r.trace}
                    </span>
                    <TracePopover
                      trace={r.trace}
                      caller={c.name}
                      cause={r.cause}
                      now={r.now}
                      ms={r.ms}
                    />
                  </div>
                  {/* the outcome change */}
                  <span className="text-gray-500">
                    previously returned{" "}
                    <span className="text-gray-600">{r.was}</span>, now returns{" "}
                    <span className="text-acc-amber">{r.now}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-gray-500 text-sm">
          Still type-checks. No change needed.
        </div>
      )}
    </div>
  </div>
);

const GlobeIcon: React.FC = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18" />
  </svg>
);

const ImpactMap: React.FC = () => {
  const [sel, setSel] = useState<number | null>(null);
  const active = sel === null ? null : callers[sel];
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 md:p-7">
      {/* header */}
      <div className="flex items-baseline justify-between">
        <span className="text-dark font-semibold text-lg">9 callers</span>
        <span className="text-gray-400 text-sm">sorted by severity</span>
      </div>
      <div className="font-code text-sm text-gray-500 mt-1 mb-3">
        Notify.notify · returns <span className="text-gray-400">Unit</span>{" "}
        <span className="text-gray-400">→</span>{" "}
        <span className="text-blue-lbg">Result&lt;Unit&gt;</span>
      </div>

      {/* severity grid — click a caller to open it */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2.5">
        {callers.map((c, i) => (
          <CallerCard
            key={c.name}
            c={c}
            selected={i === sel}
            onClick={() => setSel(sel === i ? null : i)}
          />
        ))}
      </div>

      {/* opened caller (closed until one is clicked) */}
      {active && <DetailPanel c={active} />}

      {/* footer: external request + color legend */}
      <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <div className="flex items-center gap-2 text-sm text-gray-dark">
          <span className="text-gray-400">
            <GlobeIcon />
          </span>
          1 new external request to{" "}
          <span className="font-code text-dark">api.discord.com</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded bg-rust/40"></span>
            type error
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded bg-acc-amber/50"></span>
            output changed
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded bg-gray-200"></span>
            unaffected
          </span>
        </div>
      </div>
    </div>
  );
};

/* ---- Homepage view: a compact impact summary ---- */

/** Fires once when the element scrolls into view. */
const useInView = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
};

/** Counts up from 0 to `to` when `run` becomes true. */
const CountUp: React.FC<{
  to: number;
  run: boolean;
  duration?: number;
  delay?: number;
  format?: boolean;
}> = ({ to, run, duration = 900, delay = 0, format = false }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    let startTs = 0;
    let started = false;
    const timer = window.setTimeout(() => {
      const tick = (ts: number) => {
        if (!started) {
          startTs = ts;
          started = true;
        }
        const p = Math.min((ts - startTs) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(eased * to));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [run, to, duration, delay]);
  return <>{format ? value.toLocaleString() : value}</>;
};

const SummaryRow: React.FC<{
  n: number;
  nColor: string;
  text: string;
  tag: string;
  run: boolean;
  delay?: number;
}> = ({ n, nColor, text, tag, run, delay = 0 }) => (
  <div className="flex items-baseline gap-3 py-3">
    <span
      className={`w-10 shrink-0 text-right text-xl md:text-2xl font-semibold tabular-nums leading-none ${nColor}`}
    >
      <CountUp to={n} run={run} duration={700} delay={delay} />
    </span>
    <span className="flex-1 min-w-0 text-gray-700 text-sm">{text}</span>
    <span className="shrink-0 text-gray-400 text-xs">{tag}</span>
  </div>
);

/** A little trace mockup that floats around the panel (evidence). */
const MiniTrace: React.FC<{
  trace: string;
  ms: number;
  className?: string;
}> = ({ trace, ms, className }) => (
  <div
    className={`w-48 rounded-xl border border-gray-200 bg-white p-3 shadow-[0_18px_40px_-14px_rgba(0,0,0,0.28)] ${
      className ?? ""
    }`}
  >
    <div className="mb-2.5 flex items-center justify-between">
      <span className="flex items-center gap-1.5 font-code text-[11px] text-dark">
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-acc-pink"
          aria-hidden="true"
        >
          <path d="M3 12h4l2 6 4-14 2 8h6" />
        </svg>
        trace {trace}
      </span>
      <span className="font-code text-[10px] text-gray-400">{ms}ms</span>
    </div>
    {/* skeleton "loading" rows */}
    <div className="animate-pulse space-y-2">
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300"></span>
        <span className="h-2 w-24 rounded bg-gray-200"></span>
      </div>
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-rust/60"></span>
        <span className="h-2 w-28 rounded bg-gray-200"></span>
      </div>
    </div>
  </div>
);

/** A floating card representing the new external call. */
const ExternalCall: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={`w-44 rounded-xl border border-gray-200 bg-white p-3 shadow-[0_18px_40px_-14px_rgba(0,0,0,0.28)] ${
      className ?? ""
    }`}
  >
    <div className="mb-2.5 flex items-center gap-1.5 font-code text-[11px] text-dark">
      <span className="text-acc-pink">
        <GlobeIcon />
      </span>
      external request
    </div>
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="rounded bg-acc-pink/10 px-1.5 py-0.5 font-code text-[10px] font-semibold text-acc-pink">
          POST
        </span>
        <span className="h-2 w-24 rounded bg-gray-200"></span>
      </div>
      <div className="flex animate-pulse items-center gap-2">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300"></span>
        <span className="h-2 w-20 rounded bg-gray-200"></span>
      </div>
    </div>
  </div>
);

/** A floating card representing a new permission the change requires. */
const NewPermission: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={`w-44 rounded-xl border border-gray-200 bg-white p-3 shadow-[0_18px_40px_-14px_rgba(0,0,0,0.28)] ${
      className ?? ""
    }`}
  >
    <div className="mb-2.5 flex items-center gap-1.5 font-code text-[11px] text-dark">
      <span className="text-acc-pink">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="8" cy="9" r="4" />
          <path d="M11 12l7 7" />
          <path d="M14 15l2-2M17 18l2-2" />
        </svg>
      </span>
      new permission
    </div>
    <div className="animate-pulse space-y-2">
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-acc-pink/60"></span>
        <span className="h-2 w-28 rounded bg-gray-200"></span>
      </div>
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300"></span>
        <span className="h-2 w-20 rounded bg-gray-200"></span>
      </div>
    </div>
  </div>
);

/** Below lg, scale a fixed-width composition to exactly fit its column. */
const useFitBelowLg = (designWidth: number) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [zoom, setZoom] = useState<number | undefined>(undefined);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      if (window.innerWidth >= 1024) {
        setZoom(undefined); // desktop: natural, no scaling
        return;
      }
      setZoom(Math.min(1, el.clientWidth / designWidth));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [designWidth]);
  return { ref, zoom };
};

const AnalyzedBadge: React.FC<{ run: boolean; className?: string }> = ({
  run,
  className,
}) => (
  <div
    className={`rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-[0_20px_44px_-16px_rgba(0,0,0,0.24)] ${
      className ?? ""
    }`}
  >
    <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.16em] text-gray-400">
      <svg
        width="11"
        height="11"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-acc-pink"
        aria-hidden="true"
      >
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="M20 20l-4.6-4.6" />
      </svg>
      callers analyzed
    </div>
    <div className="mt-1 text-2xl font-semibold tabular-nums leading-none tracking-tight text-dark">
      <CountUp to={1247} run={run} duration={1500} format />
    </div>
  </div>
);

const ImpactSummary: React.FC = () => {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className="relative mr-8">
      {/* floating hero badge — pops off the top-right corner */}
      <AnalyzedBadge run={inView} className="absolute -top-6 right-6 z-10" />

      {/* floating evidence — a trace, the external call, the new permission (fanned deck) */}
      <div className="pointer-events-none absolute -bottom-[14px] right-10 z-10 -rotate-3">
        <NewPermission />
      </div>
      <div className="pointer-events-none absolute -bottom-[54px] right-2 z-20 rotate-2">
        <ExternalCall />
      </div>
      <div className="pointer-events-none absolute -bottom-[90px] -right-4 z-30 -rotate-2">
        <MiniTrace trace="#1042" ms={143} />
      </div>

      {/* the main panel */}
      <div className="rounded-2xl bg-white p-6 md:p-7 pb-16 border border-gray-200 shadow-[0_28px_55px_-28px_rgba(0,0,0,0.22)]">
        {/* signature: what changed */}
        <div className="mb-6">
          <div className="text-gray-400 text-xs uppercase tracking-widest mb-2">
            Signature
          </div>
          <div className="font-code text-sm text-dark mb-1.5">
            Notify.notify
          </div>
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 font-code text-sm">
            <span className="shrink-0 text-acc-pink">~</span>
            <span className="min-w-0 break-words text-gray-600">
              return type changed from{" "}
              <span className="text-gray-500">Unit</span> to{" "}
              <span className="text-blue-lbg">Result&lt;Unit&gt;</span>
            </span>
          </div>
        </div>

        <div className="text-gray-400 text-xs uppercase tracking-widest mb-2">
          Impact
        </div>
        <div className="divide-y divide-gray-100 font-code">
          <SummaryRow
            n={3}
            run={inView}
            delay={300}
            nColor="text-acc-pink"
            text="callers fail type-checking"
            tag="blocking"
          />
          <SummaryRow
            n={5}
            run={inView}
            delay={550}
            nColor="text-acc-pink"
            text="recorded inputs changed output"
            tag="evidence attached"
          />
          <SummaryRow
            n={1}
            run={inView}
            delay={800}
            nColor="text-acc-pink"
            text="new external request"
            tag="api.discord.com"
          />
        </div>
      </div>
    </div>
  );
};

// Homepage shows the summary; "map"/"card" keep the detailed views for a deeper page.
const VIEW: "summary" | "map" | "card" = "summary";

const Review: React.FC<{ reverse?: boolean }> = ({ reverse = false }) => {
  const { ref: fitRef, zoom } = useFitBelowLg(560);
  return (
    <section className="py-20">
      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Left: copy */}
          <div>
            <SectionTitle subtitle="Review" subtitleColor="text-acc-pink">
              See the Full <span className="text-acc-pink">Impact</span> of
              Every Change
            </SectionTitle>

            <div className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed space-y-6">
              <p>
                Before you accept a change, Darklang shows its impact across the
                program: every affected caller, anything that no longer
                type-checks, recorded inputs that now produce different results,
                and any new permissions it requires, including access to data,
                secrets, files, or external services.
              </p>
              <p>
                Inspect and rerun the evidence, then decide. You control what
                gets merged and deployed.
              </p>
            </div>

            <DetailLinks
              color="text-acc-pink"
              links={[{ label: "Type checking", to: "/type-checking" }]}
            />
          </div>

          {/* Right: change review card.
              Below lg we render the exact desktop composition at its reference
              width and scale it to fit the column with `zoom`, so it looks
              identical, just smaller. */}
          <div ref={fitRef} className="min-w-0">
            <div
              className={`mx-auto lg:mx-0 lg:w-auto ${
                zoom == null ? "w-auto" : "w-[560px]"
              }`}
              style={
                zoom == null ? undefined : ({ zoom } as React.CSSProperties)
              }
            >
              {VIEW === "summary" ? (
                <ImpactSummary />
              ) : VIEW === "map" ? (
                <ImpactMap />
              ) : (
                <ReviewCard />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
