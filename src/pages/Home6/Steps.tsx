import React from "react";

import { Section } from "../Home4/parts";
import { STEPS } from "./data";

/** What you'd usually reach for, crossed out. */
const Usually: React.FC<{ items: string[] }> = ({ items }) => (
  <div className="flex flex-wrap items-center gap-2 text-sm">
    <span className="text-gray-dark">Usually:</span>
    {items.map(item => (
      <span
        key={item}
        className="rounded-full border border-gray-200 bg-white px-3 py-0.5 text-gray-dark line-through decoration-rust/70"
      >
        {item}
      </span>
    ))}
  </div>
);

/** One section per step, alternating sides and tint down the page. */
const Steps: React.FC = () => (
  <>
    {STEPS.map((step, i) => (
      <Section
        key={step.id}
        id={step.id}
        eyebrow={`${step.n} · ${step.name}`}
        color={step.color}
        heading={step.heading}
        flip={i % 2 === 1}
        tinted={i % 2 === 1}
        panel={step.panel}
      >
        <Usually items={step.usually} />
        {step.body.map((p, j) => (
          <p key={j}>{p}</p>
        ))}
      </Section>
    ))}
  </>
);

export default Steps;
