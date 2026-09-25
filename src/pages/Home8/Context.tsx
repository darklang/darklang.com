import React from "react";

import Section from "./Section";
import { DefinitionPanel } from "../BuiltForAgents/visuals";

const Context: React.FC = () => (
  <Section
    id="context"
    category="Context and discovery"
    problems={[
      "They focus too much on whatever is right in front of them: one file or function, without the architecture, existing patterns, dependencies, or edge cases",
      "They still make up APIs and dependencies: functions that do not exist, outdated libraries, newer options missed",
      "And they keep building on top of that wrong assumption",
      "Things get harder across multiple repos or services: a change that looks correct inside one repository breaks something somewhere else",
      "Docs made for humans do not work well for agents: conventions, project rules, and the relationships between them are easy to miss",
      "Project knowledge is scattered across Slack, Notion, tickets, READMEs, Obsidian, and someone's notes, and the agent only knows the pieces you gave it",
      "They copy whatever mess is already in the codebase, and multiply the technical debt",
    ]}
    title="Your Agent Asks the Program Instead of Grepping For It"
    paras={[
      "The language, package manager, source control, and runtime share one model of every definition, and the CLI and MCP tools hand it over directly: search, signatures, dependencies, dependents, source, and the traces of real runs.",
      "A name resolves to a definition that exists or it does not resolve, and the type checker settles the rest. There is one package tree rather than a set of repositories that do not know about each other.",
    ]}
    link={{ href: "/ai", label: "Darklang and AI" }}
    example={<DefinitionPanel />}
  />
);

export default Context;
