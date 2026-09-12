import React from "react";

import { Section, Term } from "../Home4/parts";
import { cmd, err, gap, note, out } from "../Home4/lines";

const LINES = [
  cmd("dark traces tail"),
  out("#8812  Digest.summarize  2.1s"),
  err("TooManyTokens: 41 issues in one prompt"),
  gap,
  cmd("dark --branch fix/chunking agent fix 8812"),
  note("replaying #8812 on fix/chunking"),
  out("Digest.summarize  3.4s  Digest(7 themes)"),
  note("ready: dark review fix/chunking"),
];

const Faster: React.FC = () => (
  <Section
    id="faster"
    eyebrow="Faster"
    color="text-acc-teal"
    heading={
      <>
        Imperfect code <span className="text-acc-teal">still runs</span>
      </>
    }
    flip
    tinted
    panel={<Term title="dark" lines={LINES} />}
  >
    <p>
      AI writes code that is mostly right. Darklang&apos;s parser is generous,
      so a half-finished function still loads, runs up to the part that
      isn&apos;t done, and tells you what&apos;s missing. A draft runs even with
      type errors. Only committing it waits for them to be fixed.
    </p>
    <p>
      A change is live the moment you make it. The runtime is the
      infrastructure, so there&apos;s no build, no container and no pipeline
      between an idea and a working endpoint.
    </p>
    <p>
      When something breaks, the trace has the real inputs and every call it
      made. You, or an agent, replay it against a fix without piecing logs
      together from five services.
    </p>
  </Section>
);

export default Faster;
