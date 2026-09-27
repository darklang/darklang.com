import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";
import DetailLinks from "../Home/DetailLinks";
import { Body, Shell } from "./parts";

const Language: React.FC = () => (
  <Shell id="language">
    <div className="mx-auto max-w-5xl 2xl:max-w-6xl text-center">
      <SectionTitle align="center">
        Why a <span className="text-purple-lbg">language</span>, too?
      </SectionTitle>
    </div>

    <div className="mx-auto mt-4 max-w-4xl 2xl:max-w-5xl">
      <Body>
        <p>The language is what lets the environment understand the work.</p>
        <p>
          Dark stores functions, types, and values as connected, versioned data.
          Its tools can follow dependencies, its runtime can check permissions,
          and its traces can show what happened during execution.
        </p>
        <p>
          Those connections stay available as your program grows, whether you're
          writing the code yourself or asking an agent to help.
        </p>
      </Body>

      <DetailLinks links={[{ label: "Meet the language", to: "/language" }]} />
    </div>
  </Shell>
);

export default Language;
