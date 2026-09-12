import React from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * TEMPORARY. A switcher between the homepage drafts, so they can be compared
 * without typing URLs. Delete this file and the imports of it once a
 * direction is chosen.
 *
 * /home3 is hidden rather than deleted: its route and import are gone from
 * App.tsx but src/pages/Home3 is still there. Everything worth keeping from
 * it has moved to /home6 and /for/ai-and-security, except the on-save type
 * error panel, which needs a wrong definition shown before it can move.
 */

/** Best first, so the strongest draft is the one you land on. */
const DRAFTS = [
  { to: "/home6", label: "All in one" },
  { to: "/home5", label: "For AI" },
  { to: "/home4", label: "Story-based" },
  { to: "/home2", label: "Control" },
  { to: "/", label: "Live" },
];

const DraftNav: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="border-b border-gray-200 bg-[#F9F9FB]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-2 2xl:max-w-[100rem]">
        <span className="mr-1 font-code text-[11px] tracking-[0.12em] text-gray-light uppercase">
          drafts
        </span>
        {DRAFTS.map(d => {
          const here = pathname === d.to;
          return (
            <Link
              key={d.to}
              to={d.to}
              className={`rounded-full border px-3 py-1 text-sm transition-colors ${
                here
                  ? "border-purple-lbg bg-purple-lbg text-white-custom"
                  : "border-gray-200 bg-white text-gray-dark hover:border-gray-300"
              }`}
            >
              {d.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DraftNav;
