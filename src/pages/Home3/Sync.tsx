import React from "react";

import Section, { Facts } from "./Section";
import Console, { Cm, Dim, Fn, Kw, P, Sp, Str, Ty, Warn } from "./Console";

const Sync: React.FC = () => (
  <Section
    tinted
    flip
    eyebrow="Sync"
    color="text-acc-cyan"
    heading={
      <>
        Sync <span className="text-acc-cyan">without git</span>
      </>
    }
    panel={
      <Console title="dark sync">
        <Dim>peer</Dim>
        <Sp n={10} />
        <Dim>cursor</Dim>
        <Sp n={3} />
        <Dim>state</Dim>
        {"\n"}
        laptop
        <Sp n={8} />
        <Ty>#1844</Ty>
        <Sp n={4} />
        <Str>up to date</Str>
        {"\n"}
        home-server
        <Sp n={3} />
        <Ty>#1844</Ty>
        <Sp n={4} />
        <Str>up to date</Str>
        {"\n"}
        relay
        <Sp n={9} />
        <Ty>#1838</Ty>
        <Sp n={4} />
        <Warn>6 ops behind</Warn>
        {"\n\n"}
        <P />
        dark <Kw>sync</Kw>
        {"\n"}
        <Sp n={2} />
        sent ops <Ty>#1839..#1844</Ty>
        <Sp n={2} />
        <Cm># store and forward, never rewrite</Cm>
        {"\n\n"}
        <P />
        dark <Kw>pull</Kw> <Fn>Acme.Billing</Fn>
        {"\n"}
        <Sp n={2} />
        <Fn>Acme.Billing</Fn> at <Ty>4c91a7f2</Ty>
        <Sp n={3} />
        <Cm># a fixed content hash</Cm>
        {"\n\n"}
        <P />
        dark <Kw>merge</Kw> ren/retry{"\n"}
        <Sp n={2} />
        <Str>clean</Str>
        <Sp n={2} />
        <Cm># different definitions, nothing to resolve</Cm>
      </Console>
    }
  >
    <p>
      Your machine holds the full history of everything it has seen. Connect a
      relay and your commits reach your team. The relay stores and forwards
      them, and cannot fold or rewrite them.
    </p>
    <p>
      Merges do not block and conflicts do not stop you, because a change is a
      set of operations on definitions rather than a diff of lines. Nothing you
      wrote gets rewritten or lost.
    </p>
    <p>
      This is one mechanism, not two. Pulling a public package and picking up
      your teammate&apos;s work are the same thing, both landing at a fixed
      content hash.
    </p>
    <Facts
      color="bg-acc-cyan"
      items={[
        "Work offline. Sync when you feel like it.",
        "Code travels. Secrets, data and permissions stay on the machine they belong to.",
        "Run your own relay, or use ours.",
      ]}
    />
  </Section>
);

export default Sync;
