import React from "react";

import Section, { Facts } from "./Section";

/** Three branches touching different definitions, merging without a conflict. */
const MergeDiagram: React.FC = () => (
  <svg
    viewBox="0 0 420 210"
    className="w-full h-auto overflow-visible"
    role="img"
    aria-label="Three branches merging into main at the definition level"
  >
    {[
      "M40 105 H 120",
      "M120 105 C 150 105, 150 34, 180 34",
      "M120 105 H 180",
      "M120 105 C 150 105, 150 176, 180 176",
      "M300 34 C 330 34, 330 105, 360 105",
      "M300 105 H 360",
      "M300 176 C 330 176, 330 105, 360 105",
    ].map(d => (
      <path key={d} d={d} stroke="#e5e7eb" strokeWidth="1.5" fill="none" />
    ))}

    <circle cx="40" cy="105" r="6" fill="#747ab9" />
    <text x="26" y="128" className="font-code" fontSize="11" fill="#8b8888">
      main
    </text>

    {[
      { y: 18, label: "branch 1", name: "GitHub.fetchIssues", c: "#95589f" },
      { y: 89, label: "branch 2", name: "Digest.tests", c: "#2f9a90" },
      { y: 160, label: "branch 3", name: "grant changes", c: "#b3701f" },
    ].map(b => (
      <g key={b.label}>
        <rect
          x="180"
          y={b.y}
          width="120"
          height="32"
          rx="8"
          fill={`${b.c}1a`}
          stroke={b.c}
          strokeWidth="1"
        />
        <text x="192" y={b.y + 14} fontSize="12.5" fontWeight="700" fill={b.c}>
          {b.label}
        </text>
        <text
          x="192"
          y={b.y + 27}
          className="font-code"
          fontSize="11"
          fill="#8b8888"
        >
          {b.name}
        </text>
      </g>
    ))}

    <circle cx="360" cy="105" r="6" fill="#747ab9" />
    <text x="340" y="128" className="font-code" fontSize="11" fill="#8b8888">
      merged
    </text>
  </svg>
);

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
          <span className="text-dark font-normal">
            three branches, one package database
          </span>
          <span className="ml-auto font-code text-xs font-normal text-gray-light">
            merge preview
          </span>
        </div>
        <div className="p-5">
          <MergeDiagram />
          <div className="mt-5">
            <Facts
              color="bg-blue-lbg"
              items={[
                "Different definitions touched, so the merge is clean by construction.",
                "A conflict names the binding, not a line number.",
                "Branches are cheap, so nothing merges before you are ready.",
              ]}
            />
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
  </Section>
);

export default ReviewChanges;
