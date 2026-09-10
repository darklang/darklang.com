import React from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * TEMPORARY. A switcher between the homepage drafts, so they can be compared
 * without typing URLs. Delete this file and the four imports of it once a
 * direction is chosen.
 */

const DRAFTS = [
  { to: "/", label: "Live" },
  { to: "/home2", label: "Control" },
  { to: "/home3", label: "Walkthrough" },
  { to: "/home4", label: "Long-form" },
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
