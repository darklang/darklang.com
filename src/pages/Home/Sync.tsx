import React, { useState } from "react";

import SectionTitle from "../../common/ui/SectionTitle";
import DetailLinks from "./DetailLinks";

const LaptopIcon: React.FC = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="4" y="5" width="16" height="10" rx="1" />
    <path d="M2 19h20" />
  </svg>
);

const CloudIcon: React.FC = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.5 18H7a4.5 4.5 0 0 1-1-8.9 6 6 0 0 1 11.6-1.1A4 4 0 0 1 18.5 18z" />
  </svg>
);

const DesktopIcon: React.FC = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="12" rx="1" />
    <path d="M8 20h8M12 16v4" />
  </svg>
);

const ServerIcon: React.FC = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="7" rx="1" />
    <rect x="3" y="13" width="18" height="7" rx="1" />
    <path d="M7 7.5h.01M7 16.5h.01" />
  </svg>
);

const MachineNode: React.FC<{
  label: string;
  status: string;
  children: React.ReactNode;
}> = ({ label, status, children }) => (
  <div className="flex flex-col items-center gap-2 shrink-0 w-28">
    <div className="w-16 h-16 rounded-xl border border-gray-200 bg-[#F9F9FB] flex items-center justify-center text-gray-dark">
      {children}
    </div>
    <div className="text-center leading-tight">
      <div className="text-dark text-sm font-medium">{label}</div>
      <div className="mt-0.5 inline-flex items-center gap-1 text-xs text-gray-dark">
        <span className="w-1.5 h-1.5 rounded-full bg-olive"></span>
        {status}
      </div>
    </div>
  </div>
);

const Dot: React.FC<{
  dir: "right" | "left";
  color: string;
  delay: string;
}> = ({ dir, color, delay }) => (
  <span
    className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${color} ${
      dir === "right" ? "animate-flow-right" : "animate-flow-left"
    }`}
    style={{ animationDelay: delay }}
  ></span>
);

const Flow: React.FC = () => (
  <div className="relative flex-1 h-16 flex items-center px-2">
    <div className="w-full h-px bg-gray-300"></div>
    {/* push → (teal) and ← pull (blue) share one line */}
    <Dot dir="right" color="bg-acc-teal" delay="0s" />
    <Dot dir="right" color="bg-acc-teal" delay="1.3s" />
    <Dot dir="left" color="bg-blue-lbg" delay="0.65s" />
    <Dot dir="left" color="bg-blue-lbg" delay="1.95s" />
    <span className="absolute left-1/2 -translate-x-1/2 -top-5 text-xs font-medium">
      <span className="text-acc-teal">push</span>
      <span className="text-gray-dark"> / </span>
      <span className="text-blue-lbg">pull</span>
    </span>
  </div>
);

/** One instance: a toggle that dims when excluded from sync. */
const Target: React.FC<{
  icon: React.ReactNode;
  label: string;
  on: boolean;
  onToggle: () => void;
}> = ({ icon, label, on, onToggle }) => (
  <button
    type="button"
    onClick={onToggle}
    aria-pressed={on}
    className="flex items-center gap-2.5 text-left"
  >
    <div
      className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 transition ${
        on
          ? "border-gray-200 bg-[#F9F9FB] text-gray-dark"
          : "border-gray-100 bg-gray-50 text-gray-300"
      }`}
    >
      {icon}
    </div>
    <span
      className={`text-sm font-medium whitespace-nowrap transition ${
        on ? "text-dark" : "text-gray-300"
      }`}
    >
      {label}
    </span>
  </button>
);

const BRANCHES = [
  "M0 86 C 18 86, 18 24, 36 24",
  "M0 86 L 36 86",
  "M0 86 C 18 86, 18 148, 36 148",
];

// Mobile: the fan points downward, from your machine to a row of three.
const MOBILE_BRANCHES = [
  "M120 3 C 120 26, 40 22, 40 44",
  "M120 3 L 120 44",
  "M120 3 C 120 26, 200 22, 200 44",
];

/** The sync line fans out to any running instance; dots reach only selected ones. */
const Targets: React.FC<{ on: boolean[]; toggle: (i: number) => void }> = ({
  on,
  toggle,
}) => (
  <div className="shrink-0 flex items-center">
    <svg
      width="36"
      height="172"
      viewBox="0 0 36 172"
      fill="none"
      className="shrink-0 overflow-visible"
      aria-hidden="true"
    >
      {BRANCHES.map((d, i) => (
        <g key={i}>
          <path
            d={d}
            stroke={on[i] ? "#d1d5db" : "#e5e7eb"}
            strokeWidth="1.5"
            strokeDasharray={on[i] ? undefined : "4 4"}
          />
          {on[i] && (
            <>
              {/* push out to the instance (teal) */}
              <circle r="2.5" fill="#2f9a90" opacity="0">
                <animateMotion
                  dur="2.2s"
                  repeatCount="indefinite"
                  path={d}
                  begin={`${i * 0.6}s`}
                />
                <animate
                  attributeName="opacity"
                  dur="2.2s"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                  keyTimes="0;0.2;0.8;1"
                  begin={`${i * 0.6}s`}
                />
              </circle>
              {/* pull back from the instance (blue) */}
              <circle r="2.5" fill="#747ab9" opacity="0">
                <animateMotion
                  dur="2.2s"
                  repeatCount="indefinite"
                  path={d}
                  keyPoints="1;0"
                  keyTimes="0;1"
                  calcMode="linear"
                  begin={`${i * 0.6 + 1.1}s`}
                />
                <animate
                  attributeName="opacity"
                  dur="2.2s"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                  keyTimes="0;0.2;0.8;1"
                  begin={`${i * 0.6 + 1.1}s`}
                />
              </circle>
            </>
          )}
        </g>
      ))}
    </svg>
    <div className="flex flex-col gap-[14px]">
      <Target
        icon={<DesktopIcon />}
        label="another machine"
        on={on[0]}
        onToggle={() => toggle(0)}
      />
      <Target
        icon={<ServerIcon />}
        label="your infra"
        on={on[1]}
        onToggle={() => toggle(1)}
      />
      <Target
        icon={<CloudIcon />}
        label="Darklang Cloud"
        on={on[2]}
        onToggle={() => toggle(2)}
      />
    </div>
  </div>
);

const SyncDiagram: React.FC = () => {
  const [on, setOn] = useState([true, true, true]);
  const toggle = (i: number) =>
    setOn(prev => prev.map((v, j) => (j === i ? !v : v)));

  return (
    <div className="max-w-xl mx-auto">
      {/* desktop: your machine ⇄ a fan of instances */}
      <div className="hidden lg:flex items-center">
        <MachineNode label="your machine" status="online">
          <LaptopIcon />
        </MachineNode>
        <Flow />
        <Targets on={on} toggle={toggle} />
      </div>

      {/* mobile: your machine on top, the three instances in a row below */}
      <div className="flex flex-col items-center lg:hidden">
        <MachineNode label="your machine" status="online">
          <LaptopIcon />
        </MachineNode>
        <div className="mt-3 text-xs font-medium">
          <span className="text-acc-teal">push</span>
          <span className="text-gray-dark"> / </span>
          <span className="text-blue-lbg">pull</span>
        </div>
        <div className="mt-1 w-full max-w-[20rem]">
          {/* downward fan with the same push / pull traffic */}
          <svg
            viewBox="0 0 240 46"
            className="w-full overflow-visible"
            fill="none"
            aria-hidden="true"
          >
            {MOBILE_BRANCHES.map((d, i) => (
              <g key={i}>
                <path
                  d={d}
                  stroke={on[i] ? "#d1d5db" : "#e5e7eb"}
                  strokeWidth="1.5"
                  strokeDasharray={on[i] ? undefined : "4 4"}
                />
                {on[i] && (
                  <>
                    <circle r="2.5" fill="#2f9a90" opacity="0">
                      <animateMotion
                        dur="2.2s"
                        repeatCount="indefinite"
                        path={d}
                        begin={`${i * 0.6}s`}
                      />
                      <animate
                        attributeName="opacity"
                        dur="2.2s"
                        repeatCount="indefinite"
                        values="0;1;1;0"
                        keyTimes="0;0.2;0.8;1"
                        begin={`${i * 0.6}s`}
                      />
                    </circle>
                    <circle r="2.5" fill="#747ab9" opacity="0">
                      <animateMotion
                        dur="2.2s"
                        repeatCount="indefinite"
                        path={d}
                        keyPoints="1;0"
                        keyTimes="0;1"
                        calcMode="linear"
                        begin={`${i * 0.6 + 1.1}s`}
                      />
                      <animate
                        attributeName="opacity"
                        dur="2.2s"
                        repeatCount="indefinite"
                        values="0;1;1;0"
                        keyTimes="0;0.2;0.8;1"
                        begin={`${i * 0.6 + 1.1}s`}
                      />
                    </circle>
                  </>
                )}
              </g>
            ))}
          </svg>
          {/* the three instances, next to each other */}
          <div className="grid grid-cols-3">
            {[
              { icon: <DesktopIcon />, label: "another machine" },
              { icon: <ServerIcon />, label: "your infra" },
              { icon: <CloudIcon />, label: "Darklang Cloud" },
            ].map((t, i) => (
              <button
                key={t.label}
                type="button"
                onClick={() => toggle(i)}
                aria-pressed={on[i]}
                className="flex flex-col items-center gap-1.5"
              >
                <div
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center transition ${
                    on[i]
                      ? "border-gray-200 bg-[#F9F9FB] text-gray-dark"
                      : "border-gray-100 bg-gray-50 text-gray-300"
                  }`}
                >
                  {t.icon}
                </div>
                <span
                  className={`text-[11px] font-medium text-center leading-tight transition ${
                    on[i] ? "text-dark" : "text-gray-300"
                  }`}
                >
                  {t.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* supporting facts */}
      <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col gap-1.5 text-sm text-gray-dark sm:flex-row sm:items-center sm:justify-between">
        <span>↩ roll back to any earlier version</span>
        <span>works offline · syncs on reconnect</span>
      </div>
    </div>
  );
};

const Sync: React.FC<{ reverse?: boolean }> = ({ reverse = false }) => {
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
            <SectionTitle subtitle="Sync" subtitleColor="text-acc-teal">
              Keep Every Instance in <span className="text-acc-teal">Sync</span>
            </SectionTitle>

            <div className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed space-y-6">
              <p>
                Every definition is stored under a content-derived hash, so
                instances exchange exact versions rather than diffs, and older
                versions stay addressable. Sync from your machine to a running
                instance, make a new version live without downtime, or roll back
                by selecting an earlier one. Work offline and sync when you
                reconnect.
              </p>
            </div>

            <DetailLinks
              color="text-acc-teal"
              links={[
                { label: "Distribution & sync", to: "/distribution" },
                { label: "Source control", to: "/source-control" },
              ]}
            />
          </div>

          {/* Right: machine ⇄ deployment, push and pull */}
          <div>
            <SyncDiagram />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sync;
