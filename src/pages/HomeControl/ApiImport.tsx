import React from "react";

import Section from "./Section";
import Console, { Cm, Dim, Fn, Kw, Str, Ty, Warn } from "./Console";

const ApiImport: React.FC = () => (
  <Section
    eyebrow="Start here"
    color="text-acc-green"
    heading={
      <>
        Turn an API into a tool you can{" "}
        <span className="text-acc-green">hand to an agent</span>
      </>
    }
    panel={
      <Console title="dark tool import openapi.json">
        <Dim>$</Dim> dark <Kw>tool import</Kw> openapi.json{"\n"}
        {"  read "}
        <Str>"GitHub REST v3"</Str> <Dim>142 operations</Dim>
        {"\n\n"}
        <Dim>&gt;</Dim> Only the read-only operations, plus a tool that{"\n"}
        {"  summarizes open bugs."}
        {"\n\n"}
        <Warn>MCP server</Warn> <Str>github-readonly</Str>
        {"\n"}
        {"  "}
        <Fn>list_issues</Fn> <Dim>from</Dim> <Ty>GitHub.listIssues</Ty>
        {"\n"}
        {"  "}
        <Fn>get_issue</Fn> <Dim>from</Dim> <Ty>GitHub.getIssue</Ty>
        {"\n"}
        {"  "}
        <Fn>summarize_open_bugs</Fn> <Dim>new</Dim>
        {"\n\n"}
        {"  "}
        <span className="text-code-rust">91 write operations withheld</span>
        {"\n"}
        {"  auth  "}
        <Str>GITHUB_TOKEN</Str> <Cm># this instance only</Cm>
      </Console>
    }
  >
    <p>
      Point it at a spec and you get typed functions, an MCP server, the auth
      configuration and a network scope narrow enough to read. Say which
      operations to expose, and the rest stays unreachable.
    </p>
    <p>
      That is a way into the Claude, Codex and OpenClaw setup you already have,
      without adopting Darklang as your main language first.
    </p>
  </Section>
);

export default ApiImport;
