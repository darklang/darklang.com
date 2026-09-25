import React from "react";

import {
  ActHead,
  C,
  Feature,
  FeatureData,
  MiniData,
  Minis,
  Shell,
} from "./parts";
import { PermissionLayers } from "./visuals";

const FEATURE: FeatureData = {
  n: "11",
  problem: {
    title: "An instruction is not a boundary",
    paras: [
      "Most of the infrastructure assumes a human decides what happens next: APIs, permission prompts, sandboxes, CI. Give an agent real access to production, data, money, deploys, or infrastructure and one bad call becomes an incident, and every individual action can be allowed while the combination produces something nobody intended.",
      "Safe and plan modes are requests rather than enforcement. Filesystem access is wider than the task needs, shell access widens the damage to databases, backups, volumes, and user files, and prompt injection turns anything it reads into something it might do.",
    ],
  },
  solution: {
    title: "Four Layers, and the Narrowest One Wins",
    paras: [
      <>
        Effective access is the intersection of what the machine permits, what
        this run was granted, what you approved for each third-party package,
        and the ceiling the author declared in the function's source. Rules are
        exact, so <C>allow http GET https://api.example.com/v1</C> grants that
        and not the rest of the host.
      </>,
      "Entering a package or a function can only narrow access further, never widen it. That is the answer to the combination problem: there is no sequence of individually allowed steps that adds up to more than what was granted at the top.",
    ],
    cmds: [
      "dark permissions allow http GET https://api.example.com/v1",
      "dark permissions show Shop.checkout",
    ],
    link: { href: "/backends", label: "Capabilities in the runtime" },
  },
};

const MINIS: MiniData[] = [
  {
    n: "12",
    problem: {
      title: "It deletes things",
      paras: [
        "All from ordinary tasks. An agent asked to zip a folder ran a broad cleanup afterwards and removed most of the project, including .git. Another ran rm -rf across a project directory. A sub-agent told to delete one .pyc file, explicitly forbidden from recursive deletion, chose git clean -fX and took out an ignored data/ tree holding a SQLite database.",
        "Broad staging does it too: git add -A turns every file missing from the working tree into a staged deletion, which wiped production source three times in two days for one team. One agent decided a clean slate before tests was routine prep and truncated a live database, cascading into deleted resource folders on disk. Another, asked only to investigate why deletion was failing, clicked delete on a production record and confirmed the dialog itself. No preview, no count, no confirmation.",
      ],
      terms: ["rm -rf", "git clean -fX", "git add -A", "TRUNCATE", "rmtree"],
    },
    solution: {
      title: "Destructive operations are decisions the runtime makes",
      para: "File writes and deletes, subprocesses, datastore operations, network calls, and model calls are effects. Each is a specific operation checked against the policies in force at the moment it happens, and access starts denied rather than granted. There is no layer where a broadly worded command is handed to a shell that carries it out and reports back afterwards.",
      cmds: ["dark permissions requirements Shop.checkout"],
    },
  },
  {
    n: "13",
    problem: {
      title: "The agent is the one installing things now",
      paras: [
        "Models invent plausible package names. Attackers register them, so when an agent decides it needs that dependency and runs npm install, npx, or pip install on its own initiative, it executes their code. Nobody had to mistype anything. One invented name travelled through copied AI-generated instructions into 237 repositories before agents started trying to fetch it.",
        "It runs the other way too: a malicious npm package planted payloads that the coding agent spread into config files across more than eight projects, and a malicious issue title started a chain that ended in an unauthorised package publish. The older routes still work as well, from poisoned updates and dependency confusion to a compromised build system or a stolen signing key.",
      ],
      terms: ["slopsquatting", "npm install", "npx", "dependency confusion"],
    },
    solution: {
      title: "Dependencies you cannot install by accident",
      para: "Code refers to one specific, immutable version of a package function, and those references are the dependency list. No manifest to edit, no installation step, no install script to execute, and a name resolves to a definition that exists or it does not resolve. A package's published requirements are a request, not a grant: approval is a person's decision, recorded against the immutable hash of the exact code approved.",
      link: { href: "/package-manager", label: "Package manager" },
    },
  },
];

const BlastRadius: React.FC = () => (
  <Shell id="blast-radius" className="bg-gray-50">
    <ActHead
      eyebrow="What it can reach"
      title="The Damage Is Not About Judgement"
    >
      None of the agents in these reports decided to do harm. Each took a step
      that was locally reasonable, ran a command broader than the task, and
      found nothing between the command and the data.
    </ActHead>

    <Feature data={FEATURE} visual={<PermissionLayers />} reverse />
    <Minis items={MINIS} />
  </Shell>
);

export default BlastRadius;
