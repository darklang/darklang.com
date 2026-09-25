import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";
import { Mark, Shell } from "./parts";

const STEPS: { h: string; p: string }[] = [
  {
    h: "Find the relevant code",
    p: "Search functions and types. Read their signatures and source. Inspect the dependencies before deciding what to change.",
  },
  {
    h: "Give the work a branch",
    p: "Assign the agent an explicit branch so its commands target the right draft. Run the changed code there and inspect the feedback.",
  },
  {
    h: "Check the result",
    p: "Review type findings, run tests, and inspect recorded executions. Look at affected callers as well as the function the agent edited.",
  },
  {
    h: "Review and bring the work together",
    p: "Inspect direct edits, dependency updates, and conflicts. Commit the work and merge it when you're ready.",
  },
];

const Workflow: React.FC = () => (
  <Shell id="how-it-works">
    <div className="mx-auto max-w-5xl 2xl:max-w-6xl text-center">
      <SectionTitle align="center">
        <Mark>One environment</Mark>, from the first edit to the review
      </SectionTitle>
    </div>

    <ol className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {STEPS.map((step, i) => (
        <li
          key={step.h}
          className="rounded-2xl border border-gray-200 bg-white p-7"
        >
          <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-lbg/10 font-code text-base font-bold text-purple-lbg">
            {i + 1}
          </span>
          <h3 className="mb-2 text-lg font-bold text-gray-900 2xl:text-xl">
            {step.h}
          </h3>
          <p className="leading-relaxed text-gray-600 2xl:text-lg">{step.p}</p>
        </li>
      ))}
    </ol>
  </Shell>
);

export default Workflow;
