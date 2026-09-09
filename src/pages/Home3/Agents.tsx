import React from "react";

import Section, { Facts } from "./Section";
import Console, { Cm, Dim, Err, Fn, Kw, P, Sp, Str, Ty, Warn } from "./Console";

const Agents: React.FC = () => (
  <Section
    eyebrow="AI teammates"
    color="text-acc-pink"
    heading={
      <>
        Made for <span className="text-acc-pink">AI teammates</span>
      </>
    }
    panel={
      <Console title="dark branches --json">
        <Dim>[</Dim>
        {"\n"}
        <Sp n={2} />
        {"{"} <Str>&quot;branch&quot;</Str>: <Str>&quot;agent/retry&quot;</Str>,{" "}
        <Str>&quot;fn&quot;</Str>: <Str>&quot;Notify.send&quot;</Str>,{" "}
        <Str>&quot;ops&quot;</Str>: <Ty>3</Ty> {"}"},{"\n"}
        <Sp n={2} />
        {"{"} <Str>&quot;branch&quot;</Str>: <Str>&quot;agent/tests&quot;</Str>,{" "}
        <Str>&quot;fn&quot;</Str>: <Str>&quot;Pricing.tests&quot;</Str>,{" "}
        <Str>&quot;ops&quot;</Str>: <Ty>7</Ty> {"}"}
        {"\n"}
        <Dim>]</Dim>
        {"\n\n"}
        <P />
        dark <Kw>review</Kw> agent/retry{"\n"}
        <Sp n={2} />
        <Fn>Notify.send</Fn>
        <Sp n={6} />
        <Str>+ retry with backoff</Str>
        <Sp n={3} />
        <Dim>3 ops</Dim>
        {"\n"}
        <Sp n={2} />
        <Warn>asks for</Warn>
        <Sp n={7} />
        net POST https://api.openai.com/... <Err>denied</Err>
        {"\n\n"}
        <P />
        dark <Kw>merge</Kw> agent/retry{"\n"}
        <Sp n={2} />
        <Str>clean</Str>
        <Sp n={2} />
        <Cm># you had the last word</Cm>
      </Console>
    }
  >
    <p>
      Every command speaks JSON, so an agent drives the same tools you do
      instead of guessing at a project layout.
    </p>
    <p>
      Agents work on their own branches, under the same permissions as you, and
      you merge what is good. A branch is a set of operations on named
      definitions, so reviewing one means reading the functions that changed,
      not a patch.
    </p>
    <Facts
      color="bg-acc-pink"
      items={[
        "Several agents on several branches merge by definition, not by worktree.",
        "An agent that wants more access has to ask you for it.",
        "What you approve travels over sync, to your machines and your team.",
      ]}
    />
  </Section>
);

export default Agents;
