import React from "react";

import { ChainStep, ClusterLabel, SectionHead, Shell } from "./parts";
import { TONES } from "./tones";

const tone = TONES.amber;

/** The slopsquatting chain, step by step, as it was described. */
const INVENTED_CHAIN = [
  "Agent invents dependency",
  "Instructions/code gets copied",
  "Attacker registers invented name",
  "Another agent reads the instructions",
  "Agent autonomously runs npx/npm/pip",
  "Attacker code executes",
];

/** The injection chain. Its first step is anything the agent might read. */
const INJECTION_SOURCES = [
  "GitHub issue",
  "PR description",
  "code comment",
  "README",
  "dependency",
  "tool output",
];

const INJECTION_CHAIN = [
  "Coding agent reads it",
  "Prompt injection",
  "Agent has GitHub/npm credentials",
  "Agent modifies package/repository",
  "Compromised release",
];

/** The package operations an agent takes on its own initiative. */
const ROUTINE = [
  "npm install ...",
  "pip install ...",
  "modify package.json",
  "upgrade dependencies",
  "run package scripts",
  "execute npx",
];

/** The classic shapes, which all still apply, now with an agent pulling the trigger. */
const CLASSIC = [
  "a pkg you use gets malicious code added to it.",
  "modified software update, install malware along with it",
  "a third party company you rely on gets hacked (poor security -> easy entry point)",
  "stolen dev creds (publish malicious code under your name)",
  "Dependency confusion, accidentally install a malicious pkg with the wrong misleading name",
  "Signing key stolen",
];

const Card: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
    <h3 className="mb-4 font-bold text-gray-900 2xl:text-lg">{title}</h3>
    {children}
  </div>
);

const Q: React.FC<{ children: string }> = ({ children }) => (
  <blockquote
    className={`border-l-[3px] pl-4 leading-relaxed text-gray-700 2xl:text-lg ${tone.border}`}
  >
    “{children}”
  </blockquote>
);

const SupplyChain: React.FC = () => (
  <Shell id="supply-chain" className="bg-gray-50">
    <SectionHead
      eyebrow="Supply chain"
      title="The Agent Is Now the One Installing Things"
      tone={tone}
    >
      Coding models sometimes invent plausible package names. Attackers register
      those nonexistent names on npm/PyPI, so when an agent later decides it
      needs the dependency and autonomously runs npm install, npx, or pip
      install, it executes attacker-controlled code.
    </SectionHead>

    <div className="grid gap-6 lg:grid-cols-2">
      <Card title="react-codeshift">
        <p className="mb-5 leading-relaxed text-gray-600 2xl:text-lg">
          The package didn't exist. A security researcher registered the name as
          a harmless proof of concept. The AI-generated skill containing that
          dependency then propagated to 237 GitHub repositories, and agents
          actually attempted to download the package.
        </p>
        <p className="mb-4 text-sm 2xl:text-base text-gray-500">
          This creates a nasty chain:
        </p>
        <ol>
          {INVENTED_CHAIN.map((step, i) => (
            <ChainStep
              key={step}
              tone={tone}
              last={i === INVENTED_CHAIN.length - 1}
            >
              {step}
            </ChainStep>
          ))}
        </ol>
        <p className="mt-2 leading-relaxed text-gray-700 2xl:text-lg">
          So unlike traditional typosquatting, the human doesn't even have to
          mistype anything.
        </p>
      </Card>

      <Card title="Malware that travelled with the agent">
        <p className="mb-5 text-sm 2xl:text-base text-gray-500">
          A developer reported discovering a malicious npm package in one
          project which apparently planted instructions/payloads that affected
          the AI coding agent.
        </p>
        <div className="space-y-4">
          <Q>we found malware in our own config files.</Q>
          <Q>
            on a development machine, injected by an npm package, spread by the
            AI coding agent we use every day.
          </Q>
          <p className="text-sm 2xl:text-base text-gray-500">
            They found the payload in:
          </p>
          <Q>more than eight projects</Q>
        </div>
      </Card>

      <Card title="Anything the agent reads is an input">
        <div className="mb-5 flex flex-wrap gap-2">
          {INJECTION_SOURCES.map(source => (
            <span
              key={source}
              className={`rounded-full px-3 py-1 font-code text-xs 2xl:text-sm ${tone.soft} ${tone.text}`}
            >
              {source}
            </span>
          ))}
        </div>
        <ol>
          {INJECTION_CHAIN.map((step, i) => (
            <ChainStep
              key={step}
              tone={tone}
              last={i === INJECTION_CHAIN.length - 1}
            >
              {step}
            </ChainStep>
          ))}
        </ol>
        <p className="mt-2 leading-relaxed text-gray-700 2xl:text-lg">
          In one case, a malicious GitHub issue title initiated a vulnerability
          chain that ultimately caused an unauthorized npm package publication
          of the coding tool itself.
        </p>
      </Card>

      <Card title="And the old shapes still work">
        <p className="mb-4 text-sm 2xl:text-base text-gray-500">
          Agents routinely decide to:
        </p>
        <div className="mb-6 flex flex-wrap gap-2">
          {ROUTINE.map(op => (
            <span
              key={op}
              className="rounded-md border border-gray-200 px-2.5 py-1 font-code text-xs 2xl:text-sm text-gray-700"
            >
              {op}
            </span>
          ))}
        </div>

        <ClusterLabel tone={tone}>Supply chain attacks</ClusterLabel>
        <ul className="space-y-2.5">
          {CLASSIC.map(item => (
            <li
              key={item}
              className="flex gap-3 leading-relaxed text-gray-600 2xl:text-lg"
            >
              <span
                className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${tone.rule}`}
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>

        {/* the build-system compromise, drawn rather than described */}
        <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <div className="flex flex-wrap items-center gap-2 font-code text-xs 2xl:text-sm text-gray-700">
            <span>source code</span>
            <span aria-hidden="true" className="text-gray-300">
              →
            </span>
            <span className={`rounded px-2 py-0.5 ${tone.soft} ${tone.text}`}>
              build system
            </span>
            <span aria-hidden="true" className="text-gray-300">
              →
            </span>
            <span>pkg</span>
          </div>
          <p className={`mt-2 font-code text-xs 2xl:text-sm ${tone.text}`}>
            compromise → release contains malware
          </p>
        </div>
      </Card>
    </div>
  </Shell>
);

export default SupplyChain;
