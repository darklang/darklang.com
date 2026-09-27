import React from "react";

import Section, { Facts } from "./Section";
import Console, { Cm, Dim, Fn, Kw, Sp, Str, Ty, Warn } from "./Console";

const Rust: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-code-rust">{children}</span>
);

const Traces: React.FC = () => (
  <Section
    tinted
    flip
    eyebrow="Traces"
    color="text-acc-amber"
    heading={
      <>
        You see <span className="text-acc-amber">what actually happened</span>
      </>
    }
    panel={
      <Console title="dark trace">
        <Dim>failing run</Dim>
        <Sp n={2} />
        <Ty>#8812</Ty>
        <Sp n={2} />
        2026-08-14 09:00{"\n"}
        <Dim>input</Dim>
        <Sp n={8} />
        repo = <Str>"acme/project"</Str>
        {"\n\n"}
        <Sp n={2} />
        <Fn>GitHub.fetchIssues</Fn>
        <Sp n={3} />
        <Dim>142ms</Dim>
        <Sp n={2} />
        <Str>41 issues</Str>
        {"\n"}
        <Sp n={2} />
        <Fn>Digest.summarize</Fn>
        <Sp n={5} />
        <Dim>2.1s</Dim>
        <Sp n={3} />
        <Rust>TooManyTokens</Rust>
        {"\n\n"}
        <Dim>$</Dim> dark <Kw>replay</Kw> <Ty>#8812</Ty> --branch{" "}
        <Str>fix/chunking</Str>
        {"\n\n"}
        <Sp n={2} />
        <Fn>GitHub.fetchIssues</Fn>
        <Sp n={3} />
        <Dim>0ms</Dim>
        <Sp n={4} />
        <Cm># recorded read, mocked</Cm>
        {"\n"}
        <Sp n={2} />
        <Fn>Digest.summarize</Fn>
        <Sp n={5} />
        <Dim>3.4s</Dim>
        <Sp n={3} />
        <Str>Digest(7 themes)</Str>
        {"\n\n"}
        <Warn>What changed</Warn>
        {"\n"}
        <Sp n={2} />
        <Fn>Digest.summarize</Fn>
        <Sp n={2} />
        <Rust>error</Rust> → <Str>Digest(7 themes)</Str>
        {"\n"}
        <Sp n={2} />
        introduced by <Ty>a17c40b9</Ty>
      </Console>
    }
  >
    <p>
      Every run keeps its inputs, its call tree, the outside calls it made and
      what came back. Real values, not a logging setup you bolt on.
    </p>
    <Facts
      color="bg-acc-amber"
      items={[
        "Replay a run against a proposed change.",
        "Compare the old and new output, and see which function moved.",
        "Turn a failing run into a test, with its reads mocked.",
        "Ask for approval before a write repeats.",
      ]}
    />
  </Section>
);

export default Traces;
