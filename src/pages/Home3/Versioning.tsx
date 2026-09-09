import React from "react";

import Section, { Facts } from "./Section";
import Console, { Cm, Dim, Fn, Kw, P, Sp, Str, Ty } from "./Console";

const Versioning: React.FC = () => (
  <Section
    tinted
    flip
    eyebrow="Versions"
    color="text-purple-lbg"
    heading={
      <>
        Version control for functions,{" "}
        <span className="text-purple-lbg">not files</span>
      </>
    }
    panel={
      <Console title="dark history MyApp.Pricing.discount">
        <Ty>a17c40b9</Ty>
        <Sp n={3} />
        <Dim>now</Dim>
        <Sp n={7} />
        round to the cent{"\n"}
        <Ty>4c91a7f2</Ty>
        <Sp n={3} />
        <Dim>2 weeks</Dim>
        <Sp n={3} />
        percent off{"\n"}
        <Ty>1d80e3c5</Ty>
        <Sp n={3} />
        <Dim>1 month</Dim>
        <Sp n={3} />
        first version{"\n\n"}
        <P />
        dark <Kw>callers</Kw> <Fn>MyApp.Pricing.discount</Fn>
        {"\n"}
        <Sp n={2} />
        <Fn>MyApp.Api.checkout</Fn>
        <Sp n={6} />
        <Str>moved to a17c40b9</Str>
        {"\n"}
        <Sp n={2} />
        <Fn>MyApp.Reports.monthly</Fn>
        <Sp n={3} />
        <Str>moved to a17c40b9</Str>
        {"\n"}
        <Sp n={2} />
        <Fn>Acme.Billing.invoice</Fn>
        <Sp n={4} />
        <Dim>pinned at 4c91a7f2</Dim>
        {"\n\n"}
        <P />
        dark <Kw>undo</Kw>
        {"\n"}
        <Sp n={2} />
        back at <Ty>4c91a7f2</Ty>
        <Sp n={3} />
        <Cm># a17c40b9 is still there</Cm>
      </Console>
    }
  >
    <p>
      Every function, type and value is kept forever, identified by what it says
      rather than where it sits. Names are bindings on top of those identities.
    </p>
    <p>
      Change a function and its callers follow it in your draft, immediately.
      Pin the ones that should stay behind, including after the fact. Undo
      anything, because nothing was ever overwritten.
    </p>
    <Facts
      color="bg-purple-lbg"
      items={[
        "A caller on an old version is not broken. It points at something that still exists.",
        "Rename freely. Callers refer to the definition, not the name.",
        "The dependency graph is a fact you can query, not a guess.",
      ]}
    />
  </Section>
);

export default Versioning;
