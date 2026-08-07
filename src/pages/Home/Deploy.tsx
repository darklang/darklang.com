import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";
import DetailLinks from "./DetailLinks";

const TerminalIcon: React.FC = () => (
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
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M7 9l3 3-3 3" />
    <path d="M13 15h4" />
  </svg>
);

const DeployCommand: React.FC = () => (
  <div className="mb-6 flex items-center gap-2.5">
    <span className="text-gray-dark">
      <TerminalIcon />
    </span>
    <span className="font-code text-sm md:text-base">
      <span className="text-olive">$</span>{" "}
      <span className="text-gray-700">darklang</span>{" "}
      <span className="text-purple-lbg">deploy</span>{" "}
      <span className="text-blue-lbg">Notify</span>
    </span>
  </div>
);

const HandlerIcon: React.FC = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18" />
  </svg>
);

const StoreIcon: React.FC = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <ellipse cx="12" cy="6" rx="7" ry="3" />
    <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
    <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
  </svg>
);

const CronIcon: React.FC = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const WorkerIcon: React.FC = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8" />
    <path d="M20 4v4h-4" />
    <path d="M20 12a8 8 0 0 1-13.7 5.6L4 16" />
    <path d="M4 20v-4h4" />
  </svg>
);

const ResourceCard: React.FC<{
  type: string;
  color: string;
  name: string;
  icon: React.ReactNode;
  stat: string;
}> = ({ type, color, name, icon, stat }) => (
  <div className="rounded-xl border border-gray-200 bg-[#F9F9FB] px-3.5 py-3">
    <div className="flex items-center gap-2">
      <span className={color}>{icon}</span>
      <span
        className={`text-[10px] uppercase tracking-wide font-semibold ${color}`}
      >
        {type}
      </span>
      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-olive"></span>
    </div>
    <div className="mt-1.5 flex items-baseline justify-between gap-2">
      <span className="font-code text-sm text-dark truncate">{name}</span>
      <span className="text-xs text-gray-dark shrink-0">{stat}</span>
    </div>
  </div>
);

const AppLive: React.FC = () => (
  <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 md:p-7">
    <div className="flex items-baseline justify-between mb-4">
      <span className="text-dark font-semibold flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-olive"></span>
        Notify is live
      </span>
      <span className="font-code text-xs text-gray-400">version 8c40d2</span>
    </div>

    <div className="grid grid-cols-2 gap-3">
      <ResourceCard
        type="handler"
        color="text-blue-lbg"
        name="POST /webhook"
        icon={<HandlerIcon />}
        stat="1.2k requests · 24h"
      />
      <ResourceCard
        type="handler"
        color="text-blue-lbg"
        name="GET /status"
        icon={<HandlerIcon />}
        stat="410 requests · 24h"
      />
      <ResourceCard
        type="datastore"
        color="text-acc-green"
        name="PostedIssues"
        icon={<StoreIcon />}
        stat="3,481 entries"
      />
      <ResourceCard
        type="cron"
        color="text-acc-amber"
        name="hourly-sync"
        icon={<CronIcon />}
        stat="next run in 34 min"
      />
      <ResourceCard
        type="worker"
        color="text-purple-lbg"
        name="post-worker"
        icon={<WorkerIcon />}
        stat="6 jobs queued"
      />
    </div>

    <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
      <span className="text-sm text-gray-dark">
        Same version on Local · Your infra · Darklang Cloud
      </span>
      <span className="text-xs text-gray-light">
        no YAML, no artifact to build or ship
      </span>
    </div>
  </div>
);

const Deploy: React.FC<{ reverse?: boolean }> = ({ reverse = false }) => {
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
            <SectionTitle subtitle="Deploy" subtitleColor="text-blue-lbg">
              Make It Live, <span className="text-blue-lbg">Anywhere</span>
            </SectionTitle>

            <div className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed space-y-6">
              <p>
                HTTP handlers, typed datastores, crons, and background workers
                live in the program, not in YAML around it. Run the same version
                locally, on your own infrastructure, or on Darklang Cloud.
                Deployment makes a version live; there is no artifact to build
                or ship.
              </p>
            </div>

            <DetailLinks
              color="text-blue-lbg"
              links={[
                { label: "Backends", to: "/backends" },
                { label: "Darklang Cloud", to: "/our-cloud" },
              ]}
            />
          </div>

          {/* Right: one command → the whole program live */}
          <div>
            <DeployCommand />
            <AppLive />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deploy;
