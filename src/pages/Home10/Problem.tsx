import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";
import { Body, Shell, Underline } from "./parts";
import Bubbles from "./Bubbles";
import { PROBLEM } from "./quotes";

const Problem: React.FC = () => (
  <Shell id="problem">
    <div className="mx-auto max-w-5xl 2xl:max-w-6xl text-center">
      <SectionTitle align="center">
        Writing the code was supposed to be the <Underline>hard part</Underline>
      </SectionTitle>
    </div>

    <div className="mx-auto mt-4 max-w-4xl 2xl:max-w-5xl">
      <Body>
        <p>
          Now one agent is refactoring a helper while another writes tests
          against the old version. A small fix turns into a rewrite. A
          dependency appears that nobody remembers approving. You're switching
          between sessions to work out what happened and whether any of it is
          ready.
        </p>
        <p>
          The time you saved generating code goes into coordinating, reviewing,
          and cleaning up.
        </p>
        <p>
          Dark gives agents an environment that understands the code they're
          changing: its types, its dependencies, its history, and what it can
          access when it runs. That gives them more to work with and gives you
          more control over the result.
        </p>
      </Body>

      <div className="mt-10">
        <Bubbles items={PROBLEM} />
      </div>
    </div>
  </Shell>
);

export default Problem;
