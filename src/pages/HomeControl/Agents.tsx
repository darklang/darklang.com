import React from "react";

import Section, { Facts } from "./Section";
import Console, { Cm, Dim, Fn, Kw, Sp, Str, Ty, Warn } from "./Console";

const Agents: React.FC = () => (
  <Section
    tinted
    flip
    eyebrow="Agents"
    color="text-purple-lbg"
    heading={
      <>
        Move fast, without <span className="text-purple-lbg">blind trust</span>
      </>
    }
    panel={
      <Console title="dark agent · three branches">
        <Dim>$</Dim> dark <Kw>branches</Kw>
        {"\n"}
        <Sp n={2} />
        <Str>agent/github</Str>
        <Sp n={4} />
        <Fn>GitHub.fetchIssues</Fn>
        <Sp n={3} />
        <Dim>4 ops</Dim>
        {"\n"}
        <Sp n={2} />
        <Str>agent/tests</Str>
        <Sp n={5} />
        <Fn>Digest.tests</Fn>
        <Sp n={9} />
        <Dim>7 ops</Dim>
        {"\n"}
        <Sp n={2} />
        <Str>agent/chunking</Str>
        <Sp n={2} />
        <Fn>Digest.summarize</Fn>
        <Sp n={5} />
        <Dim>3 ops</Dim>
        {"\n\n"}
        <Dim>$</Dim> dark <Kw>merge</Kw> --all{"\n"}
        <Sp n={2} />
        <Str>clean</Str>
        <Sp n={2} />
        <Cm># no two agents touched the same definition</Cm>
        {"\n\n"}
        <Warn>Waiting for you</Warn>
        {"\n"}
        <Sp n={2} />
        <Ty>agent/chunking</Ty> asks for <Str>http POST api.anthropic.com</Str>
        {"\n"}
        <Sp n={2} />
        everything else is inside the permissions you approved
      </Console>
    }
  >
    <p>
      Nobody sane runs generated Python unsandboxed, and Docker is the duct tape
      everyone reaches for. Here the answer is in the language: an agent works
      on a branch, under your permissions, and you have the last word.
    </p>
    <Facts
      color="bg-purple-lbg"
      items={[
        "Its edit is a set of ops on a branch, so you can read it, revert it or merge it.",
        "Run several agents on several branches and merge by definition, not by worktree.",
        "What you approve travels over sync, including as an MCP tool other agents can call.",
      ]}
    />
  </Section>
);

export default Agents;
