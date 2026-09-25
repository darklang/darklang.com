import React from "react";

import Section from "./Section";
import { Term } from "../BuiltForAgents/parts";
import { cmd, out, hi, gap } from "../BuiltForAgents/term";

/** A name that resolves, and an approval pinned to the code it approved. */
const EXAMPLE = [
  cmd('dark search "normalize email" --fn'),
  hi("  User.Email.normalize      String -> String"),
  out("  User.Email.normalizeAll   List<String> -> List<String>"),
  gap,
  cmd("dark permissions requirements Stripe.charge"),
  out("  requires   Http"),
  out("  complete   yes"),
  gap,
  cmd("dark permissions approve Stripe.charge"),
  hi("  approved   Stripe.charge   a64ce1"),
  out("  a new version is not covered by this approval"),
];

const SupplyChain: React.FC = () => (
  <Section
    id="supply-chain"
    tinted
    reverse
    category="Supply chain"
    problems={[
      "Coding models invent plausible package names, and attackers register those nonexistent names on npm and PyPI",
      "The agent decides it needs the dependency and autonomously runs npm install, npx, or pip install, executing attacker-controlled code",
      "Unlike traditional typosquatting, the human does not even have to mistype anything",
      "react-codeshift did not exist: the AI-generated skill carrying it propagated to 237 GitHub repositories and agents tried to download it",
      "Malware found in our own config files, injected by an npm package, spread by the AI coding agent we use every day, across more than eight projects",
      "A GitHub issue, PR description, code comment, README, dependency, or tool output gets read by the agent as instructions",
      "The agent holds GitHub and npm credentials, so a malicious issue title can end in an unauthorized package publication",
      "Agents routinely modify package.json, upgrade dependencies, run package scripts, and execute npx",
      "A package you use gets malicious code added to it, or a modified update installs malware alongside it",
      "A third party you rely on gets hacked, or dev creds are stolen and code is published under your name",
      "Dependency confusion: a misleading name quietly installs the wrong package",
      "The build system is compromised so the release contains malware, or the signing key is stolen",
    ]}
    title="Dependencies You Cannot Install by Accident"
    paras={[
      "Code refers to one specific, immutable version of a package function, and those references are the dependency list. There is no manifest to edit, no installation step, and no install script to execute. A name resolves to a definition that exists, or it does not resolve.",
      "A third-party package's published requirements are a request, not a grant. Approval is a decision a person makes, recorded against the immutable hash of the exact code being approved, so a new version never inherits the trust given to the last one.",
    ]}
    link={{ href: "/package-manager", label: "How packages work" }}
    example={<Term lines={EXAMPLE} label="dark" />}
  />
);

export default SupplyChain;
