import React, { useEffect, useRef, useState } from "react";

import { Section } from "../Home4/parts";

type Op = { g: "+" | "~"; kind: string; name: string; note?: string };

/**
 * The session, one step per tick. `t` is the session clock and `n` the op
 * count once the step has landed. The first refundable ignores refundedAt, so
 * the stage shows a double refund until step 6 fixes it.
 */
const STEPS: { op: Op; t: string; n: number }[] = [
  { op: { g: "+", kind: "fn", name: "Shop.refundable" }, t: "0m 06s", n: 4 },
  {
    op: { g: "~", kind: "type", name: "Shop.Order", note: "+ refundedAt" },
    t: "0m 21s",
    n: 9,
  },
  {
    op: { g: "~", kind: "fn", name: "Shop.checkout", note: "followed" },
    t: "0m 22s",
    n: 10,
  },
  { op: { g: "+", kind: "fn", name: "Shop.refund" }, t: "0m 48s", n: 17 },
  { op: { g: "+", kind: "http", name: "POST /refunds" }, t: "1m 05s", n: 23 },
  {
    op: { g: "~", kind: "fn", name: "Shop.refundable", note: "checks it" },
    t: "1m 37s",
    n: 31,
  },
  { op: { g: "+", kind: "fn", name: "Shop.notifySlack" }, t: "2m 10s", n: 38 },
];

const LAST: Record<"allowed" | "refused", Op> = {
  allowed: { g: "~", kind: "fn", name: "Shop.refund", note: "posts to Slack" },
  refused: { g: "~", kind: "fn", name: "Shop.refund", note: "skips Slack" },
};

const ROUTE_AT = 5;
const FIX_AT = 6;
const TICK_MS = 1100;
/** How long the question waits for a click before the loop answers it. */
const ASK_MS = 3500;
/** How long the finished session stays up before it plays again. */
const DONE_MS = 3000;
const SLACK = "POST https://hooks.slack.com/services/T01/B02";

const Pane: React.FC<{
  label: string;
  className?: string;
  children: React.ReactNode;
}> = ({ label, className = "", children }) => (
  <div className={`min-w-0 p-4 ${className}`}>
    <div className="mb-3 text-[11px] tracking-[0.12em] text-gray-dark uppercase">
      {label}
    </div>
    {children}
  </div>
);

const Dim: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-gray-dark italic">{children}</div>
);

/** An agent session, played back: steps land, the endpoint answers, it asks. */
const Watcher: React.FC = () => {
  const box = useRef<HTMLDivElement>(null);
  /** Reduced motion: show the question and stay there. */
  const [still, setStill] = useState(false);
  const [visible, setVisible] = useState(false);
  /** The mouse is over the panel, so leave it alone while they read. */
  const [hold, setHold] = useState(false);
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState<"asking" | "allowed" | "refused">(
    "asking",
  );

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setStill(true);
      setStep(STEPS.length);
      return;
    }
    const el = box.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const seen = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.4 },
    );
    seen.observe(el);
    return () => seen.disconnect();
  }, []);

  // One timer drives the loop: the next step, then the question, then the
  // finished session, then round again. It only runs while on screen.
  useEffect(() => {
    if (still || !visible || hold) return;
    const [ms, next] =
      step < STEPS.length
        ? [step === 0 ? 700 : TICK_MS, () => setStep(s => s + 1)]
        : answer === "asking"
          ? [ASK_MS, () => setAnswer("allowed")]
          : [
              DONE_MS,
              () => {
                setAnswer("asking");
                setStep(0);
              },
            ];
    const id = window.setTimeout(next, ms);
    return () => window.clearTimeout(id);
  }, [still, visible, hold, step, answer]);

  const done = answer !== "asking";
  const asking = step >= STEPS.length && !done;
  const ops = [
    ...STEPS.slice(0, step).map(s => s.op),
    ...(done ? [LAST[answer]] : []),
  ];
  const clock = done ? "2m 41s" : step ? STEPS[step - 1].t : "0m 00s";
  const count = done ? 41 : step ? STEPS[step - 1].n : 0;
  const live = step >= ROUTE_AT;
  const fixed = step >= FIX_AT;

  const status = done
    ? { label: "done", text: "text-acc-green", dot: "bg-acc-green" }
    : asking
      ? {
          label: "waiting for you",
          text: "text-classic-yellow",
          dot: "bg-classic-yellow",
        }
      : {
          label: "running",
          text: "text-classic-blue",
          dot: "bg-classic-blue animate-pulse",
        };

  return (
    <div
      ref={box}
      onPointerEnter={e => e.pointerType === "mouse" && setHold(true)}
      onPointerLeave={() => setHold(false)}
      className="overflow-hidden rounded-2xl border border-[#333336] bg-dark-black font-code text-[12.5px] leading-[1.7] text-[#d4d4d4] shadow-sm md:text-[13px]"
    >
      <div className="flex items-center gap-2 border-b border-[#333336] bg-[#262626] px-4 py-2.5 text-xs text-gray-dark">
        <span>session/refund-endpoint</span>
        <span className={`ml-auto flex items-center gap-1.5 ${status.text}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`}></span>
          {status.label} · {clock}
        </span>
      </div>

      <div className="grid divide-y divide-[#333336] sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        <Pane label={`${count} ops`} className="min-h-[13.5rem]">
          {ops.length === 0 && <Dim>starting…</Dim>}
          {ops.map((op, i) => (
            <div
              key={i}
              className="animate-rise-in flex gap-2 whitespace-nowrap"
            >
              <span className={op.g === "+" ? "text-olive" : "text-code-type"}>
                {op.g}
              </span>
              <span className="w-8 shrink-0 text-gray-dark">{op.kind}</span>
              <span className="truncate">{op.name}</span>
              {op.note && (
                <span className="ml-auto pl-2 text-gray-dark">{op.note}</span>
              )}
            </div>
          ))}
        </Pane>

        <div className="min-w-0 divide-y divide-[#333336]">
          <Pane label="Live endpoint · POST /refunds">
            <div className="-mt-2 mb-2 font-sans text-xs text-gray-dark">
              2 test orders, re-sent after every change
            </div>
            {!live ? (
              <Dim>nothing here yet</Dim>
            ) : (
              <div className="space-y-2">
                <div className="animate-rise-in">
                  <div className="truncate text-gray-dark">→ order 8812</div>
                  <div className="truncate">
                    ← <span className="text-olive">200</span> · refunded $42.00
                  </div>
                </div>
                <div key={fixed ? "fixed" : "bug"} className="animate-rise-in">
                  <div className="truncate text-gray-dark">
                    → order 9001 · refunded Mon
                  </div>
                  <div className="truncate">
                    {fixed ? (
                      <>
                        ← <span className="text-code-rust">409</span> · already
                        refunded <span className="text-acc-green">✓</span>
                      </>
                    ) : (
                      <>
                        ← <span className="text-olive">200</span> · refunded
                        $42.00 <span className="text-code-rust">✗ twice</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </Pane>

          <Pane label="Pinned values">
            <div className="-mt-2 mb-2 font-sans text-xs text-gray-dark">
              what each order can still get back, updated after every change
            </div>
            {step === 0 ? (
              <Dim>waiting for Shop.refundable</Dim>
            ) : (
              <>
                <div className="flex justify-between gap-3">
                  <span className="truncate text-gray-dark">
                    {'Shop.refundable "8812"'}
                  </span>
                  <span className="text-classic-yellow">$42.00</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="truncate text-gray-dark">
                    {'Shop.refundable "9001"'}
                  </span>
                  <span
                    key={fixed ? "fixed" : "bug"}
                    className="animate-rise-in whitespace-nowrap"
                  >
                    {fixed ? (
                      <>
                        <span className="text-classic-yellow">$0.00</span>{" "}
                        <span className="text-acc-green">✓</span>
                      </>
                    ) : (
                      <span className="text-code-rust">$42.00 ✗</span>
                    )}
                  </span>
                </div>
              </>
            )}
          </Pane>
        </div>
      </div>

      <div
        className={`min-h-[4.25rem] border-t px-4 py-3 ${
          asking
            ? "border-classic-yellow/40 bg-classic-yellow/10"
            : "border-[#333336]"
        }`}
      >
        {asking && (
          <div className="animate-rise-in">
            <div className="text-classic-yellow">
              Stopped: Shop.notifySlack wants
            </div>
            <div className="mb-3 truncate">{SLACK}</div>
            <div className="flex flex-wrap gap-2 font-sans text-sm">
              <button
                onClick={() => setAnswer("allowed")}
                className="rounded-full bg-classic-yellow px-4 py-1 font-medium text-dark-black transition-opacity hover:opacity-90"
              >
                Allow for this session
              </button>
              <button
                onClick={() => setAnswer("refused")}
                className="rounded-full border border-[#444448] px-4 py-1 text-[#d4d4d4] transition-colors hover:border-gray-dark"
              >
                Refuse
              </button>
            </div>
          </div>
        )}
        {done && (
          <div className="animate-rise-in flex flex-wrap items-center gap-x-3 gap-y-1">
            <span
              className={
                answer === "allowed" ? "text-acc-green" : "text-code-rust"
              }
            >
              {answer === "allowed"
                ? "✓ allowed for this session"
                : "✗ refused, so it skips Slack"}
            </span>
          </div>
        )}
        {!asking && !done && <Dim>working…</Dim>}
      </div>
    </div>
  );
};

const Watch: React.FC = () => (
  <Section
    id="watch"
    eyebrow="Watch it work"
    color="text-acc-cyan"
    heading={
      <>
        Review it <span className="text-acc-cyan">while it&apos;s written</span>
      </>
    }
    panel={
      <>
        <Watcher />
        <p className="text-sm text-gray-dark">
          Two minutes of an agent&apos;s work, sped up. The endpoint it&apos;s
          writing answers two test orders after every change: watch it refund
          order 9001 twice, then catch it. Then it stops before it posts
          anywhere.
        </p>
      </>
    }
  >
    <p>
      An agent usually gives you two things: a spinner while it thinks, and a
      transcript when it&apos;s done. You can&apos;t review either.
    </p>
    <p>
      In Darklang, the program it&apos;s building runs on screen from the first
      second. Every change arrives as a named step you can open, pin or refuse,
      and the endpoint answers requests as it goes. You&apos;re reviewing, not
      waiting.
    </p>
    <p>
      Pin a value and it&apos;s recalculated after every change, so you see the
      exact moment the agent breaks something, or fixes it. When it needs
      access, it stops and asks, and you allow it for that session only. When
      it&apos;s done, its steps collapse into a handful of named changes, plus
      the one permission it asked for.
    </p>
  </Section>
);

export default Watch;
