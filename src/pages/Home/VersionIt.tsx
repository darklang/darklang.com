import React, { useState } from "react";

import SectionTitle from "../../common/ui/SectionTitle";
import DetailLinks from "./DetailLinks";

/** The branch mark on every chip: a commit that split off and carried on. */
const BranchIcon: React.FC = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
    aria-hidden="true"
  >
    <circle cx="6" cy="5" r="2.5" />
    <circle cx="6" cy="19" r="2.5" />
    <circle cx="18" cy="9" r="2.5" />
    <path d="M6 7.5v9M18 11.5c0 4-4 3.5-9.6 5.2" />
  </svg>
);

/** A hand-drawn arrow, curving from a note toward what it points at. */
const CurvedArrow: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width="36"
    height="20"
    viewBox="0 0 36 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <path d="M2 4C11 1 24 4 31 15" />
    <path d="M29.4 8.2 31 15 24.6 12" />
  </svg>
);

/**
 * Source-control marks in the margins.
 *
 * Drawn at 36px in a 36px box, so a stroke of 1.25 stays crisp without
 * thickening into the blobs that scaled-up glyphs produced. Straight lines and
 * one shallow curve each: long hand-tuned beziers were what looked broken.
 */
const Mark: React.FC<{
  className?: string;
  w?: number;
  h?: number;
  children: React.ReactNode;
}> = ({ className = "", w = 36, h = 36, children }) => (
  <svg
    width={w}
    height={h}
    viewBox={`0 0 ${w} ${h}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="round"
    aria-hidden="true"
    className={`pointer-events-none absolute hidden text-taupe/35 xl:block ${className}`}
  >
    {children}
  </svg>
);

/** A branch leaving the trunk and carrying on. */
const BranchMark: React.FC<{ className?: string }> = ({ className }) => (
  <Mark className={className}>
    <path d="M11 4v28" />
    <path d="M11 14c0 0 14 1 14 9" />
    <circle cx="11" cy="4" r="2.6" />
    <circle cx="11" cy="32" r="2.6" />
    <circle cx="25" cy="26" r="2.6" fill="currentColor" />
  </Mark>
);

/** A branch merging back into the trunk. */
const MergeMark: React.FC<{ className?: string }> = ({ className }) => (
  <Mark className={className}>
    <path d="M25 4v28" />
    <path d="M25 22c0 0-14-1-14-9" />
    <circle cx="25" cy="4" r="2.6" />
    <circle cx="25" cy="32" r="2.6" />
    <circle cx="11" cy="10" r="2.6" fill="currentColor" />
  </Mark>
);

const Marks: React.FC = () => (
  <>
    <MergeMark className="-left-20 top-6" />
    <BranchMark className="-right-20 -bottom-6" />
  </>
);

/**
 * A handwritten note in the margin, pointing at the part of the card it is
 * about. Hidden until there is room outside the card to hang it.
 */
const Note: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <span
    className={`absolute hidden items-end gap-1 whitespace-nowrap font-caveat text-lg text-taupe xl:flex ${className}`}
  >
    {children}
  </span>
);

const CheckIcon: React.FC = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const BRANCHES: {
  name: string;
  changes: {
    kind: string;
    name: string;
    tag?: "edited" | "new" | "renamed" | "followed";
  }[];
}[] = [
  { name: "main", changes: [] },
  {
    name: "agent/rename",
    changes: [
      { kind: "type", name: "User", tag: "renamed" },
      { kind: "fn", name: "Account.updateEmail", tag: "followed" },
      { kind: "fn", name: "Auth.requireUser", tag: "followed" },
    ],
  },
  {
    name: "add-retry",
    changes: [
      { kind: "fn", name: "Webhook.onPush", tag: "edited" },
      { kind: "value", name: "maxRetries", tag: "new" },
    ],
  },
  {
    name: "fix-digest",
    changes: [{ kind: "fn", name: "Digest.summarize", tag: "edited" }],
  },
];

/**
 * The claim is that switching branches is instant and loses nothing, so the
 * visitor gets to do it. Each branch keeps its own work in progress; clicking
 * between them swaps instantly and leaves every one untouched, which is the
 * whole point and is more convincing than a sentence saying so.
 */
const BranchSwitcher: React.FC = () => {
  const [active, setActive] = useState(1);
  const branch = BRANCHES[active];

  return (
    <div className="relative mx-auto w-full max-w-[30rem]">
      <Marks />

      {/* the rename note only belongs beside the branch that shows a rename */}
      {branch.name === "agent/rename" && (
        <Note className="-right-3 top-1/3 translate-x-full">
          <CurvedArrow className="-mb-1 -scale-x-100" />
          <span className="leading-tight">
            one rename,
            <br />
            every caller followed
          </span>
        </Note>
      )}

      <Note className="-bottom-2 left-8 translate-y-full">
        <span className="leading-tight">
          no stash, no worktrees, no second checkout
        </span>
        <CurvedArrow className="mb-1 -scale-y-100" />
      </Note>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
        <div className="border-b border-gray-100 px-4 py-3">
          {/* one line: it should read as a row of branches, not a paragraph */}
          <div className="flex gap-1.5 overflow-x-auto">
            {BRANCHES.map((b, i) => (
              <button
                key={b.name}
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-md px-2 py-1 font-code text-xs transition ${
                  i === active
                    ? "bg-rust/10 text-rust"
                    : "text-gray-dark hover:bg-gray-50"
                }`}
              >
                <BranchIcon />
                {b.name}
              </button>
            ))}
          </div>
        </div>

        {/* keyed on the branch so each switch re-runs the entrance: the snap is
          the message */}
        <div key={branch.name} className="animate-rise-in px-5 py-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.13em] text-gray-light">
            {branch.changes.length === 0
              ? "no uncommitted changes"
              : `${branch.changes.length} in progress`}
          </p>

          <div className="grid min-h-[5.25rem] content-start gap-2.5">
            {branch.changes.map(change => (
              <div
                key={change.name}
                className="flex items-baseline justify-between gap-3 font-code text-xs"
              >
                <span className="min-w-0 truncate text-dark">
                  <span className="text-gray-light">{change.kind}</span>{" "}
                  {change.name}
                </span>
                <span
                  className={`shrink-0 text-[10px] uppercase tracking-wider ${
                    change.tag === "new"
                      ? "text-acc-green"
                      : change.tag === "followed"
                        ? "text-gray-light"
                        : "text-rust"
                  }`}
                >
                  {change.tag}
                </span>
              </div>
            ))}

            {branch.changes.length === 0 && (
              <p className="font-code text-xs text-gray-light">
                everything here is committed
              </p>
            )}
          </div>
        </div>

        <p className="flex items-center gap-1.5 border-t border-gray-100 bg-[#F9F9FB] px-5 py-3.5 text-xs text-blue-lbg">
          <CheckIcon />
          every branch keeps its own work
        </p>
      </div>
    </div>
  );
};

const VersionIt: React.FC<{ reverse?: boolean }> = ({ reverse = false }) => {
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
            <SectionTitle
              subtitle="Version Control, Built In"
              subtitleColor="text-rust"
            >
              Source Control That Understands Your{" "}
              <span className="text-rust">Program</span>
            </SectionTitle>

            <div className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed space-y-6">
              <p>
                Darklang versions your program's functions and types, not text
                files. Branches, commits, review, and history are part of the
                platform itself.
              </p>
              <p>
                A branch is just a set of changes to those definitions, so you
                can keep several going at once and move between them instantly.
                Nothing to stash, no second copy of the project, no working tree
                to clean up first.
              </p>
            </div>

            <DetailLinks
              color="text-rust"
              links={[{ label: "Source control", to: "/source-control" }]}
            />
          </div>

          {/* Right: three ideas, each stated outright */}
          <div className="min-w-0">
            <BranchSwitcher />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VersionIt;
