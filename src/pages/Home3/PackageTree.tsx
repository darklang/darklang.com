import React from "react";

import Section, { Facts } from "./Section";
import Console, { Cm, Dim, Fn, Kw, P, Sp, Ty } from "./Console";

const PackageTree: React.FC = () => (
  <Section
    tinted
    flip
    eyebrow="One package tree"
    color="text-acc-teal"
    heading={
      <>
        Everything you write lives in{" "}
        <span className="text-acc-teal">one tree</span>
      </>
    }
    panel={
      <Console title="dark tree">
        <P />
        dark <Kw>tree</Kw> MyApp{"\n"}
        <Sp n={2} />
        <Ty>MyApp</Ty>
        {"\n"}
        <Sp n={2} />
        ├── <Ty>Pricing</Ty>
        {"\n"}
        <Sp n={2} />
        │<Sp n={3} />
        ├── <Fn>discount</Fn>
        <Sp n={8} />
        <Dim>Int64 -&gt; Int64 -&gt; Int64</Dim>
        {"\n"}
        <Sp n={2} />
        │<Sp n={3} />
        └── <Fn>taxRate</Fn>
        <Sp n={9} />
        <Dim>Float</Dim>
        {"\n"}
        <Sp n={2} />
        ├── <Ty>Api</Ty>
        {"\n"}
        <Sp n={2} />
        │<Sp n={3} />
        ├── <Fn>router</Fn>
        <Sp n={10} />
        <Dim>Request -&gt; Response</Dim>
        {"\n"}
        <Sp n={2} />
        │<Sp n={3} />
        └── <Fn>listOpen</Fn>
        <Sp n={8} />
        <Dim>Unit -&gt; Response</Dim>
        {"\n"}
        <Sp n={2} />
        └── <Ty>Tickets</Ty>
        <Sp n={11} />
        <Dim>DB&lt;Ticket&gt;</Dim>
        {"\n\n"}
        <P />
        dark <Kw>search</Kw> discount{"\n"}
        <Sp n={2} />
        <Fn>MyApp.Pricing.discount</Fn>
        <Sp n={4} />
        <Ty>a17c40b9</Ty>
        {"\n"}
        <Sp n={2} />
        <Fn>Acme.Billing.discount</Fn>
        <Sp n={5} />
        <Ty>4c91a7f2</Ty>
        <Sp n={3} />
        <Cm># pulled, pinned</Cm>
      </Console>
    }
  >
    <p>
      Your functions, types and values sit in the same tree as the standard
      library and as anything you pulled from somebody else. There is no project
      directory, no module file and no import block. You give a definition a
      name and it is there.
    </p>
    <p>
      Because the tree is real data rather than text on disk, the tools ask it
      questions instead of grepping: what is this, what calls it, what does it
      call, what changed.
    </p>
    <Facts
      color="bg-acc-teal"
      items={[
        <>
          <span className="font-code text-[0.95em]">dark search</span> and{" "}
          <span className="font-code text-[0.95em]">dark view</span> find and
          print any definition, yours or the stdlib&apos;s.
        </>,
        <>
          <span className="font-code text-[0.95em]">dark deps usedby</span>{" "}
          answers who calls this, exactly.
        </>,
        "Publishing is putting a name in the tree, not packaging a folder.",
      ]}
    />
  </Section>
);

export default PackageTree;
