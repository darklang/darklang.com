import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";
import { Shell } from "./parts";

const QUESTIONS: { q: string; a: string }[] = [
  {
    q: "Can I use Dark with my coding agent?",
    a: "An agent that can run command-line tools can use Dark's CLI to discover code, make changes, run it, and inspect the results. Query commands offer structured JSON output, and the CLI includes documentation written for agents.",
  },
  {
    q: "Is Dark a tool I add to an existing JavaScript or Python project?",
    a: "Dark is a programming language and development environment. Its code history, dependency tracking, and runtime permissions apply to code written and run in Dark. External services can connect through APIs.",
  },
  {
    q: "Does each branch get its own database and network ports?",
    a: "Branches separate code changes. External databases, files, and network ports still need appropriate configuration and isolation for parallel testing.",
  },
  {
    q: "Do runtime permissions replace a sandbox?",
    a: "Dark enforces permissions on operations performed through its runtime. OS isolation is a separate boundary. An agent's external shell tools still need their own restrictions.",
  },
  {
    q: "Can restoring code undo a database write?",
    a: "Restoring a definition restores code. It doesn't reverse an email already sent, an external database write, or another completed side effect. Permissions help control which operations code can perform in the first place.",
  },
];

const Faq: React.FC = () => (
  <Shell id="faq">
    <div className="mx-auto max-w-5xl 2xl:max-w-6xl text-center">
      <SectionTitle align="center">
        A few things to <span className="text-blue-lbg">know</span>
      </SectionTitle>
    </div>

    <dl className="mx-auto mt-4 grid max-w-6xl gap-6 md:grid-cols-2">
      {QUESTIONS.map(item => (
        <div
          key={item.q}
          className="rounded-2xl border border-gray-200 bg-white p-7"
        >
          <dt className="mb-3 text-lg font-bold text-gray-900 2xl:text-xl">
            {item.q}
          </dt>
          <dd className="text-lg leading-relaxed text-gray-600 2xl:text-xl">
            {item.a}
          </dd>
        </div>
      ))}
    </dl>
  </Shell>
);

export default Faq;
