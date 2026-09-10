import React from "react";

import Section, { Facts } from "./Section";

/** A changeset is a list of definitions, not a diff of lines. */
const CHANGES = [
  {
    branch: "b1",
    c: "#95589f",
    def: "GitHub.fetchIssues",
    change: "signature changed, 3 callers updated",
    who: "alice · 2h",
  },
  {
    branch: "b2",
    c: "#2f9a90",
    def: "Digest.summarize",
    change: "body changed",
    who: "bob · 40m",
  },
  {
    branch: "b2",
    c: "#2f9a90",
    def: "Digest.tests",
    change: "2 tests added",
    who: "bob · 40m",
  },
  {
    branch: "b3",
    c: "#b3701f",
    def: "CustomerDigest grant",
    change: "+ POST discord.com",
    who: "you · now",
  },
];

const ReviewChanges: React.FC = () => (
  <Section
    eyebrow="Review"
    color="text-blue-lbg"
    heading={
      <>
        You review <span className="text-blue-lbg">meaning</span>, not text
      </>
    }
    panel={
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 text-sm font-semibold">
          <span className="text-blue-lbg">Changeset</span>
          <span className="text-dark font-normal">three branches</span>
          <span className="ml-auto font-code text-xs font-normal text-gray-light">
            merge preview
          </span>
        </div>
        <div className="p-4">
          <div className="flex flex-col gap-1">
            {CHANGES.map(r => (
              <div
                key={r.def}
                className="flex items-baseline gap-3 rounded-lg px-3 py-2 odd:bg-[#F9F9FB]"
              >
                <span
                  className="font-code text-[11px] font-bold shrink-0"
                  style={{ color: r.c }}
                >
                  {r.branch}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-code text-sm text-dark break-words">
                    {r.def}
                  </span>
                  <span className="block text-xs text-gray-dark">
                    {r.change}
                  </span>
                </span>
                <span className="font-code text-[11px] text-gray-light shrink-0">
                  {r.who}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="rounded-lg bg-[#6F9A3D14] px-3 py-2 font-code text-xs text-acc-green">
              clean merge · no definition touched by two branches
            </div>
          </div>
        </div>
      </div>
    }
  >
    <p>
      Branch, merge and review over functions and name bindings, held in SQLite
      and read as a changeset in a terminal interface. Two people editing two
      functions is not a conflict, and the tool knows it, because the content
      itself cannot conflict.
    </p>
    <p>
      The op log records every change with an author, a time and a hash, and it
      replicates verbatim. Who changed what, at the level of a definition. Git
      has a text approximation of that.
    </p>
    <Facts
      color="bg-blue-lbg"
      items={[
        "A conflict names the binding, not a line number.",
        "Branches are cheap, so nothing merges before you are ready.",
      ]}
    />
  </Section>
);

export default ReviewChanges;
