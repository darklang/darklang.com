import React from "react";

import Section, { Facts } from "./Section";
import Console, { Cm, Dim, Fn, Kw, Sp, Str, Ty } from "./Console";

const Versions: React.FC = () => (
  <Section
    tinted
    flip
    eyebrow="Versions"
    color="text-purple-lbg"
    heading={
      <>
        You can always <span className="text-purple-lbg">go back</span>
      </>
    }
    panel={
      <Console title="dark history Digest.summarize">
        <Ty>a17c40b9</Ty>
        <Sp n={2} />
        now
        <Sp n={6} />
        <Str>chunk before summarizing</Str>
        {"\n"}
        <Ty>4c91a7f2</Ty>
        <Sp n={2} />
        2 weeks
        <Sp n={2} />
        summarize by theme{"\n"}
        <Ty>1d80e3c5</Ty>
        <Sp n={2} />
        1 month
        <Sp n={2} />
        first version{"\n\n"}
        <Dim>$</Dim> dark <Kw>callers</Kw> Digest.summarize{"\n"}
        <Sp n={2} />
        <Fn>CustomerDigest.run</Fn>
        <Sp n={6} />
        <Cm># main</Cm>
        {"\n"}
        <Sp n={2} />
        <Fn>CustomerDigest.preview</Fn>
        <Sp n={2} />
        <Cm># main</Cm>
        {"\n\n"}
        <Dim>$</Dim> dark <Kw>use</Kw> Digest.summarize <Ty>4c91a7f2</Ty>
        {"\n"}
        <Sp n={2} />
        rebound on <Str>main</Str>
        <Sp n={3} />
        <Cm># live, no redeploy</Cm>
        {"\n"}
        <Sp n={2} />
        <Str>a17c40b9 is still there if you want it back</Str>
      </Console>
    }
  >
    <p>
      Every definition is stored under the hash of its content, and names are an
      overlay on top of that. Nothing is overwritten, so going back is picking
      an older version rather than repairing the current one.
    </p>
    <Facts
      color="bg-purple-lbg"
      items={[
        "Ask what calls a function and get an answer, not a grep.",
        "Rename freely. Callers point at the hash.",
        "The dependency graph is a fact you can query.",
        "Identity is content, so caching a result by hash and arguments is sound.",
      ]}
    />
  </Section>
);

export default Versions;
