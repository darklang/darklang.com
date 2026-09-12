import React from "react";

import { Section } from "../Home4/parts";

const PLACES = [
  {
    where: "Your laptop",
    body: "Everything runs locally, with a local model if you want one.",
  },
  {
    where: "Your servers",
    body: "The same app on a home server or a VPS, each with its own permissions.",
  },
  {
    where: "Darklang Cloud",
    body: "Clear pricing, edit from anywhere, and export your data whenever you like.",
  },
];

const Yours: React.FC = () => (
  <Section
    id="yours"
    eyebrow="Yours"
    color="text-blue-lbg"
    heading={
      <>
        Open source, <span className="text-blue-lbg">always</span>
      </>
    }
    panel={
      <div className="space-y-3">
        {PLACES.map(p => (
          <div
            key={p.where}
            className="rounded-2xl border border-gray-200 bg-white p-5"
          >
            <h3 className="mb-1 text-lg font-bold text-dark">{p.where}</h3>
            <p className="text-gray-dark">{p.body}</p>
          </div>
        ))}
      </div>
    }
  >
    <p>
      Darklang is open source, and it always will be. You can read every line of
      the system your code runs on, and nobody is training on your data.
    </p>
    <p>
      We aren&apos;t VC-backed, so there&apos;s no one pushing us toward
      lock-in. You aren&apos;t tied to a big cloud or to one AI provider: choose
      your model, including one that runs on your own machine.
    </p>
    <p>
      On Darklang Cloud, edit.darklang.com is open wherever you are. Pick up
      where you left off, or check on an agent, without SSHing into a box.
    </p>
  </Section>
);

export default Yours;
