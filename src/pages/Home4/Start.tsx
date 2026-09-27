import React from "react";
import { Link } from "react-router-dom";

import { INSTALL_CMD } from "../../common/ui/InstallCommand";
import { Section, Term } from "./parts";
import { cmd } from "./lines";

const STEPS = [
  cmd(INSTALL_CMD),
  cmd(
    `dark fn Hello.greet 'let greet (name: String) : String = $"Hi, {name}"'`,
  ),
  cmd(`dark eval 'Hello.greet "world"'`),
];

const Start: React.FC = () => (
  <Section
    id="start"
    eyebrow="Start"
    color="text-purple-lbg"
    heading={
      <>
        <span className="text-purple-lbg">Install</span> and run
      </>
    }
    tinted
    panel={<Term lines={STEPS} />}
  >
    <p>Five minutes from install to a running function.</p>

    <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
      <Link
        to="/getting-started"
        className="inline-flex items-center gap-2 rounded-full bg-purple-lbg px-8 py-3 text-lg font-medium text-white-custom transition-colors hover:bg-purple-secondry"
      >
        Install Darklang
        <span aria-hidden="true">→</span>
      </Link>
      <a
        href="#try"
        className="inline-flex items-center gap-2 rounded-full border border-purple-lbg px-8 py-3 text-lg font-medium text-purple-lbg transition-colors hover:bg-purple-lbg/5"
      >
        Run it in your browser
        <span aria-hidden="true">↑</span>
      </a>
    </div>

    <p className="text-base text-gray-dark">
      Editor support for VS Code, and a language server for everything else.
    </p>
  </Section>
);

export default Start;
