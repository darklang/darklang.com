import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";
import DetailLinks from "./DetailLinks";

const green = "text-olive";

const TerminalRun: React.FC = () => (
  <div className="rounded-2xl bg-[#1e1e1e] shadow-2xl overflow-hidden">
    {/* Window bar */}
    <div className="flex items-center gap-2.5 px-5 py-2.5 border-b border-white/5">
      <span className="text-olive">
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 7l4 5-4 5" />
          <path d="M13 17h6" />
        </svg>
      </span>
      <span className="font-code text-sm text-gray-400">terminal</span>
    </div>

    {/* Output */}
    <div className="px-6 py-5 font-code text-[11px] sm:text-[13px] md:text-sm leading-7 text-gray-200 overflow-x-auto">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
        <span className="flex items-center gap-2">
          <span className={green}>$</span>
          <span className="text-gray-100">darklang run Notify</span>
        </span>
        <span className="font-caveat text-lg md:text-xl text-code-kw whitespace-nowrap hidden lg:flex items-center gap-1.5">
          <span className="inline-block animate-nudge-x">←</span>
          ran instantly, no build
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-x-2 text-gray-400">
        <span className="text-gray-500">→</span>
        <span className="text-code-fn">GitHub</span>
        <span className="text-gray-500">.</span>
        <span className="text-code-kw">newIssues</span>
        <span className="text-gray-300">repo</span>
        <span className="text-gray-500">·</span>
        <span>3 new</span>
      </div>
      <div className="flex items-center gap-2">
        <span className={green}>✔</span>
        <span className="text-gray-300">
          posted 3 messages to <span className="text-code-fn">Discord</span>
        </span>
      </div>
    </div>
  </div>
);

const DiscordMessage: React.FC<{ time: string; text: string }> = ({
  time,
  text,
}) => (
  <div className="flex gap-3">
    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-lbg to-blue-lbg">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
        <path d="M12 2l1.9 5.6L19.5 9l-4.8 3 1.7 5.6L12 14.9 7.6 17.6 9.3 12 4.5 9l5.6-1.4z" />
      </svg>
    </div>
    <div className="min-w-0">
      <div className="flex items-center gap-2">
        <span className="text-white font-medium text-sm">Darklang</span>
        <span className="rounded bg-[#5865F2] px-1.5 py-0.5 text-[10px] font-semibold text-white leading-none">
          APP
        </span>
        <span className="text-gray-500 text-xs">{time}</span>
      </div>
      <div className="text-gray-300 text-sm">{text}</div>
    </div>
  </div>
);

const DiscordPanel: React.FC = () => (
  <div className="w-[24rem] max-w-[17rem] sm:max-w-[21rem] lg:max-w-full rounded-2xl bg-[#313338] shadow-2xl overflow-hidden">
    {/* Channel header */}
    <div className="flex items-center gap-2 px-4 py-3 border-b border-black/20">
      <span className="text-gray-500 text-xl leading-none">#</span>
      <span className="text-white font-semibold">dev-updates</span>
    </div>

    {/* Messages */}
    <div className="px-4 py-4 space-y-4">
      <DiscordMessage
        time="Today at 10:24"
        text="New issue #1234 · Fix type inference in nested match"
      />
      <DiscordMessage
        time="Today at 10:24"
        text="New issue #1233 · Add List.groupBy to Stdlib"
      />
      <DiscordMessage
        time="Today at 10:24"
        text="New issue #1230 · Speed up package tree loading"
      />
    </div>
  </div>
);

/** Mobile-only downward arrow from the terminal to Discord. */
const MobileDownArrow: React.FC = () => (
  <svg
    width="28"
    height="34"
    viewBox="0 0 28 34"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-light shrink-0 lg:hidden"
    aria-hidden="true"
  >
    <path d="M14 3 C 10 14, 18 20, 14 30" />
    <path d="M8 24 L14 31 L20 24" />
  </svg>
);

/** Hand-drawn arrow from the terminal down into the left side of Discord. */
const HandArrow: React.FC = () => (
  <svg
    width="64"
    height="60"
    viewBox="0 0 64 60"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-light shrink-0 hidden lg:block"
    aria-hidden="true"
  >
    <path d="M12 6 C 12 30, 26 46, 52 46" />
    <path d="M44 39 L53 46 L44 53" />
  </svg>
);

const RunIt: React.FC<{ reverse?: boolean }> = ({ reverse = false }) => {
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
            <SectionTitle subtitle="Run" subtitleColor="text-acc-green">
              Run It the Moment It{" "}
              <span className="text-acc-green">Exists</span>
            </SectionTitle>

            <div className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed space-y-6">
              <p>
                Run a function, script, or HTTP endpoint as soon as you create
                it. The runtime is already there, with no build step, server
                setup, or framework configuration.
              </p>
            </div>

            <DetailLinks
              color="text-acc-green"
              links={[
                { label: "How execution works", to: "/execution" },
                { label: "CLI runtime", to: "/cli" },
              ]}
            />
          </div>

          {/* Right: run in terminal → posted to Discord */}
          <div>
            <TerminalRun />
            <div className="mt-3 flex flex-col items-center gap-2 lg:flex-row lg:items-start lg:justify-end">
              <MobileDownArrow />
              <HandArrow />
              <DiscordPanel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunIt;
