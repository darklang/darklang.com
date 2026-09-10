import React from "react";

import { Section, Term } from "./parts";
import { cmd, out } from "./lines";

const LOOP = [
  cmd("dark fn Hello.greet \\"),
  cmd(`  'let greet (name: String) : String = $"Hi, {name}"'`),
  cmd(`dark eval 'Hello.greet "world"'`),
  out('"Hi, world"'),
];

const Foundation: React.FC = () => (
  <Section
    id="foundation"
    eyebrow="Foundation"
    color="text-blue-lbg"
    heading={
      <>
        Your code lives in a <span className="text-blue-lbg">database</span>
      </>
    }
    flip
    tinted
    panel={<Term lines={LOOP} />}
  >
    <p>
      You wrote a function. Around it you also have a file, an import, a build,
      a container and a deploy. Only the first one was your idea.
    </p>
    <p>
      Darklang keeps that one and drops the rest. Every function, type and value
      lives in a database, addressed by its content, so the thing you wrote is
      the thing that runs.
    </p>
    <p>
      That is also the reason for every section above it. It runs the moment you
      write it (there&apos;s nothing to build), every version is kept (nothing
      is overwritten), every run can be recorded (the runtime owns the calls),
      and a function can say what it&apos;s allowed to touch (the runtime owns
      the effects too).
    </p>
    <p className="text-2xl font-bold text-black-custom md:text-3xl">
      No files. No build. No deploy.
    </p>
    <p>That&apos;s the entire loop.</p>
  </Section>
);

export default Foundation;
