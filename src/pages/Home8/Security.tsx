import React from "react";

import Section from "./Section";
import { PermissionLayers } from "../BuiltForAgents/visuals";

const Security: React.FC = () => (
  <Section
    id="security"
    category="Permissions and trust"
    problems={[
      "A lot of existing infrastructure was not built for autonomous agents: APIs, permissions, sandboxes, CI systems and developer tools assume a human is deciding what happens next",
      "Giving an agent real permissions is scary: production, deleting data, spending money, deploying, changing infrastructure",
      "Normal permissions do not completely solve it: every individual action is technically allowed while the combination produces something nobody intended",
      "Safe and Plan modes are not necessarily real safety boundaries; telling an agent not to do something destructive is not the same as technically preventing it",
      "Filesystem access is often way broader than it needs to be",
      "Shell access makes the possible damage much bigger: databases, backups, volumes, user files, infrastructure, the whole system",
      "Prompt injection: agents read external content while holding tools and permissions, so malicious instructions have much bigger consequences",
      "Sandboxes are not a perfect safety net if isolation fails or the environment exposes more credentials, files, or permissions than expected",
      "Generated code introduces security problems of its own, including known-vulnerable dependencies",
      "It is not always clear where proprietary code, prompts, credentials, repository data, and tool outputs are being sent, processed, or stored",
      "Once agents start talking to agents they act faster than a human can inspect, and injected instructions can spread between them",
    ]}
    title="Four Layers, and the Narrowest One Wins"
    paras={[
      "Effective access is the intersection of what the machine permits, what this run was granted, what you approved for each third-party package, and the ceiling the author declared in the function's source. Rules are exact, so granting one GET on one URL grants that and not the rest of the host.",
      "Entering a package or a function can only narrow access further, never widen it. That is the answer to the combination problem: no sequence of individually allowed steps adds up to more than what was granted at the top. It is also where your data goes, because the destinations a program may reach are themselves permissions you write down.",
    ]}
    link={{ href: "/backends", label: "Capabilities in the runtime" }}
    example={<PermissionLayers />}
  />
);

export default Security;
