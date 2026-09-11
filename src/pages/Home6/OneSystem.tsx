import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";

/** What you get from these being one system, not ten tools glued together. */
const LINKS = [
  {
    h: "Traces know your types",
    p: "A trace holds real values of your own records and enums, not strings a logger flattened.",
  },
  {
    h: "Permissions know your call graph",
    p: "What a function requires is worked out from everything it calls, because the analysis reads the same store the runtime does.",
  },
  {
    h: "Source control knows what depends on what",
    p: "Change a function and status names every caller that followed. There's no text diff to squint at.",
  },
  {
    h: "An agent reads one thing",
    p: "One CLI, one store, answers in JSON. No stack to reconstruct before it can help.",
  },
];

const OneSystem: React.FC = () => (
  <section
    id="one-system"
    className="border-y border-gray-200 bg-[#F9F9FB] py-20"
  >
    <div className="mx-auto max-w-7xl px-4 2xl:max-w-[100rem]">
      <div className="max-w-3xl">
        <SectionTitle
          subtitle="Because it's one system"
          subtitleColor="text-purple-lbg"
        >
          Each part already{" "}
          <span className="text-purple-lbg">knows the others</span>
        </SectionTitle>
        <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
          Ten separate tools each see a slice of your program. Here they share
          one store, so every piece can use what the others know.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {LINKS.map(link => (
          <div
            key={link.h}
            className="rounded-2xl border border-gray-200 bg-white p-6"
          >
            <h3 className="mb-1.5 text-lg font-bold text-dark">{link.h}</h3>
            <p className="text-gray-dark">{link.p}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OneSystem;
