import React from "react";

import Section, { Facts } from "./Section";

const STEPS = [
  { t: "Fetch new GitHub issues", s: "retry up to 5 times", amber: false },
  {
    t: "Checkpoint the result",
    s: "picks up here after a restart",
    amber: false,
  },
  {
    t: "Generate an AI summary",
    s: "model usage and cost recorded",
    amber: false,
  },
  {
    t: "Wait for your approval",
    s: "the run parks until you say yes",
    amber: true,
  },
  {
    t: "Post the approved digest",
    s: "one webhook, exactly once",
    amber: false,
  },
];

const Durable: React.FC = () => (
  <Section
    tinted
    flip
    eyebrow="Durable jobs"
    color="text-acc-teal"
    heading={
      <>
        The run <span className="text-acc-teal">waits for you</span>
      </>
    }
    panel={
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 text-sm font-semibold">
          <span className="text-acc-teal">GitHub Issue Digest</span>
          <span className="ml-auto font-code text-xs font-normal text-gray-light">
            weekdays 09:00
          </span>
        </div>
        <div className="p-5">
          {STEPS.map((s, i) => (
            <div
              key={s.t}
              className="grid grid-cols-[22px_1fr] gap-3.5 pb-4 last:pb-0"
            >
              <div className="flex flex-col items-center gap-1">
                <span
                  className={`w-3 h-3 rounded-full border-2 mt-1.5 shrink-0 ${
                    s.amber ? "border-acc-amber" : "border-acc-teal"
                  }`}
                ></span>
                {i < STEPS.length - 1 && (
                  <span className="flex-1 w-px bg-gray-200"></span>
                )}
              </div>
              <div>
                <div className="font-bold text-dark">{s.t}</div>
                <div className="text-sm text-gray-dark">{s.s}</div>
              </div>
            </div>
          ))}
          <div className="mt-5 flex flex-wrap gap-2">
            {["checkpointed", "idempotent", "dead letter queue"].map(c => (
              <span
                key={c}
                className="rounded-full bg-[#F3F3F7] px-3 py-1 text-xs font-semibold text-gray-dark"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    }
  >
    <p>
      Schedules, queues, checkpoints, retries and dead letters, plus steps that
      stop and wait for a person. Plenty of tools do durable execution. Here it
      sits on top of your versions, your grants and your traces.
    </p>
    <Facts
      color="bg-acc-teal"
      items={[
        "A failed step retries by policy. A finished step is not repeated.",
        "The same digest never posts twice.",
        "Runs that keep failing go to a queue that needs attention.",
        "A restart picks up at the last checkpoint.",
      ]}
    />
  </Section>
);

export default Durable;
