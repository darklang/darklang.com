import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";

/**
 * The four points where code usually gets away from you. Each one maps to a
 * section further down, in the same order.
 */
const MOMENTS = [
  {
    when: "when it changes",
    verb: "Read the change, not the diff",
    body: "An edit arrives as operations on functions and bindings, so you review what it means, not which lines moved.",
    color: "text-blue-lbg",
    dot: "border-blue-lbg",
  },
  {
    when: "before it runs",
    verb: "Say what it may reach",
    body: "Files, network, programs, secrets. Each instance has a permissions policy you edit, and anything you leave out stays out of reach.",
    color: "text-rust",
    dot: "border-rust",
  },
  {
    when: "after it runs",
    verb: "Look at the real values",
    body: "Every run keeps its inputs, its outputs and every outside call it made, ready to replay against a fix.",
    color: "text-acc-amber",
    dot: "border-acc-amber",
  },
  {
    when: "any time later",
    verb: "Put the old version back",
    body: "Nothing is overwritten, so undoing is choosing an earlier version rather than repairing the current one.",
    color: "text-acc-teal",
    dot: "border-acc-teal",
  },
];

const Moments: React.FC = () => (
  <section className="py-16 md:py-20 bg-[#F9F9FB] border-y border-gray-200">
    <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
      <SectionTitle subtitle="Full control" subtitleColor="text-purple-lbg">
        Four moments where the answer is{" "}
        <span className="text-purple-lbg">yours</span>
      </SectionTitle>

      <div className="grid gap-8 lg:grid-cols-4 lg:gap-0">
        {MOMENTS.map(m => (
          <div
            key={m.when}
            className="relative pl-6 border-l border-gray-200 lg:pl-0 lg:pr-8 lg:border-l-0 lg:border-t lg:pt-7"
          >
            <span
              className={`absolute w-3 h-3 rounded-full border-2 bg-white -left-[6.5px] top-1.5 lg:left-0 lg:-top-[6.5px] ${m.dot}`}
            ></span>
            <div className={`font-code text-xs mb-1.5 ${m.color}`}>
              {m.when}
            </div>
            <h3 className="text-lg font-bold text-dark mb-1.5">{m.verb}</h3>
            <p className="text-gray-dark max-w-md">{m.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Moments;
