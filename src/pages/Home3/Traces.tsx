import React from "react";

import Section, { Facts } from "./Section";
import Console, { Cm, Dim, Err, Fn, Kw, P, Sp, Str, Ty } from "./Console";

const Traces: React.FC = () => (
  <Section
    eyebrow="Traces"
    color="text-acc-amber"
    heading={
      <>
        See what your code <span className="text-acc-amber">actually did</span>
      </>
    }
    panel={
      <Console title="dark traces view 8812">
        <Dim>input</Dim>
        <Sp n={6} />
        cart = {"{"} items = <Ty>3L</Ty>; total = <Ty>5000L</Ty> {"}"}
        {"\n\n"}
        <Fn>MyApp.Api.checkout</Fn>
        <Sp n={8} />
        <Dim>12ms</Dim>
        {"\n"}
        <Sp n={2} />
        <Fn>Pricing.discount</Fn>
        <Sp n={2} />
        <Ty>5000L 20L</Ty>
        <Sp n={2} />
        <Dim>0.2ms</Dim>
        <Sp n={2} />
        <Ty>4000L</Ty>
        {"\n"}
        <Sp n={2} />
        <Fn>Stdlib.DB.set</Fn>
        <Sp n={5} />
        <Str>&quot;o-4471&quot;</Str>
        <Sp n={4} />
        <Dim>3ms</Dim>
        <Sp n={4} />
        <Ty>()</Ty>
        {"\n"}
        <Sp n={2} />
        <Fn>Notify.send</Fn>
        <Sp n={7} />
        <Str>&quot;o-4471&quot;</Str>
        <Sp n={4} />
        <Dim>8ms</Dim>
        <Sp n={4} />
        <Err>Timeout</Err>
        {"\n\n"}
        <P />
        dark <Kw>traces</Kw> replay 8812 --branch <Str>fix/retry</Str>
        {"\n"}
        <Sp n={2} />
        <Fn>Notify.send</Fn>
        <Sp n={7} />
        <Dim>0ms</Dim>
        <Sp n={4} />
        <Cm># recorded read, replayed</Cm>
        {"\n"}
        <Sp n={2} />
        <Fn>MyApp.Api.checkout</Fn>
        <Sp n={2} />
        <Err>error</Err> → <Str>Ok</Str>
        {"\n"}
        <Sp n={2} />
        changed by <Ty>a17c40b9</Ty>
      </Console>
    }
  >
    <p>
      Every execution can be recorded: the inputs, every function call, its
      arguments and what it returned. Real values, not a logging setup you
      bolted on afterwards.
    </p>
    <p>
      You debug by looking at what happened, not by trying to make it happen
      again. This was the original Darklang idea and it is still here.
    </p>
    <Facts
      color="bg-acc-amber"
      items={[
        "Replay a recorded run against a change and compare the two.",
        "Turn a failing run into a test, with its outside reads replayed.",
        <>
          Even <span className="font-code text-[0.95em]">printLine</span> is an
          ordinary call, so it shows up in the tree like everything else.
        </>,
      ]}
    />
  </Section>
);

export default Traces;
