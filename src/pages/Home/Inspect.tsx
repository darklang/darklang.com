import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";
import DetailLinks from "./DetailLinks";

const TraceIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 12h4l2 6 4-14 2 8h6" />
  </svg>
);

const Bar: React.FC<{ pct: number; w?: string }> = ({ pct, w = "w-24" }) => (
  <span
    className={`h-1.5 ${w} rounded-full bg-gray-200 overflow-hidden inline-block align-middle`}
  >
    <span
      className="block h-full rounded-full bg-acc-amber"
      style={{ width: `${pct}%` }}
    ></span>
  </span>
);

/** One stage of the function body, labelled by its position in the pipeline. */
const Stage: React.FC<{
  n: number;
  expr: React.ReactNode;
  result: React.ReactNode;
  meta?: React.ReactNode;
  children?: React.ReactNode;
  last?: boolean;
}> = ({ n, expr, result, meta, children, last = false }) => (
  <div className="flex gap-3">
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-acc-amber/15 text-acc-amber text-[11px] font-semibold font-code">
      {n}
    </span>
    <div className={`flex-1 min-w-0 ${last ? "" : "pb-5"}`}>
      <div className="flex items-baseline flex-wrap gap-x-2 gap-y-0.5">
        <span className="font-code text-sm text-gray-700">{expr}</span>
        <span className="text-gray-300">→</span>
        <span className="text-acc-green font-medium text-sm">{result}</span>
      </div>
      {meta && <div className="mt-1.5">{meta}</div>}
      {children && <div className="mt-2.5">{children}</div>}
    </div>
  </div>
);

/** One pass of the map body: the issue posted, and how long it took. */
const Iter: React.FC<{ id: string; text: string; ms: number; pct: number }> = ({
  id,
  text,
  ms,
  pct,
}) => (
  <div>
    <div className="flex items-baseline flex-wrap gap-x-2">
      <span className="font-code text-xs text-gray-400">{id}</span>
      <span className="text-gray-300">→</span>
      <span className="text-acc-green text-sm">“{text}”</span>
    </div>
    <div className="mt-1 flex items-center gap-2">
      <span className="font-code text-[11px] text-gray-400">{ms}ms</span>
      <Bar pct={pct} w="w-16" />
    </div>
  </div>
);

const TraceCard: React.FC = () => (
  <div className="mx-auto w-fit max-w-full rounded-2xl border border-gray-200 bg-white shadow-sm p-6 md:p-7">
    {/* header */}
    <div className="flex items-center gap-2.5 mb-5">
      <span className="text-acc-amber">
        <TraceIcon />
      </span>
      <span className="text-dark font-semibold">Trace</span>
      <span className="ml-auto pl-8 text-gray-400 text-sm">
        run of <span className="text-gray-600">Notify</span> · 267ms
      </span>
    </div>

    {/* the function, with its input bound for this run */}
    <div className="font-code text-sm flex flex-wrap items-baseline gap-x-2">
      <span className="text-gray-700">notify</span>
      <span className="text-gray-500">repo</span>
      <span className="text-gray-300">=</span>
      <span className="text-acc-green">“darklang/notify”</span>
    </div>

    {/* inside the fn: each stage of the body, down the pipeline */}
    <div className="mt-4">
      <Stage
        n={1}
        expr={
          <>
            <span className="text-gray-500">GitHub.</span>newIssues repo
          </>
        }
        result="3 issues"
        meta={
          <div className="flex items-center gap-2">
            <span className="font-code text-xs text-gray-400">12ms</span>
            <Bar pct={13} />
          </div>
        }
      />
      <Stage
        n={2}
        expr={
          <>
            <span className="text-gray-400">|&gt;</span>{" "}
            <span className="text-gray-500">List.</span>map{" "}
            <span className="text-gray-500">Discord.</span>post
          </>
        }
        result="3 posted"
        last
      >
        {/* the map body, once per issue */}
        <div className="pl-3 border-l border-gray-200 space-y-2.5">
          <Iter
            id="#1234"
            text="Fix type inference in nested match"
            ms={88}
            pct={97}
          />
          <Iter id="#1233" text="Add List.groupBy to Stdlib" ms={76} pct={84} />
          <Iter
            id="#1230"
            text="Speed up package tree loading"
            ms={91}
            pct={100}
          />
        </div>
      </Stage>
    </div>

    <div className="mt-6 pt-4 border-t border-gray-100 text-gray-400 text-sm">
      No errors. Saved for replay, so you can rerun it against any change.
    </div>
  </div>
);

const Inspect: React.FC<{ reverse?: boolean }> = ({ reverse = false }) => {
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
            <SectionTitle subtitle="Inspect" subtitleColor="text-acc-amber">
              See Exactly What <span className="text-acc-amber">Happened</span>
            </SectionTitle>

            <div className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed space-y-6">
              <p>
                Every execution leaves a trace. Inspect the input, follow each
                function call, see its result, and find where the time went. No
                logging setup required.
              </p>
            </div>

            <DetailLinks
              color="text-acc-amber"
              links={[
                { label: "Trace-driven development", to: "/traceDriven" },
              ]}
            />
          </div>

          {/* Right: trace inspector for the notify run */}
          <div>
            <TraceCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspect;
