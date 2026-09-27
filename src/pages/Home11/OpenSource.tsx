import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";
import { GITHUB, Shell } from "../Home10/parts";

/** A short, centered closing note. Deliberately not in the outline shape the
    feature sections use: this answers a trust question, not a problem. */
const OpenSource: React.FC = () => (
  <Shell id="open-source">
    <div className="mx-auto max-w-4xl text-center">
      <SectionTitle subtitle="Open Source" align="center">
        Darklang is <span className="text-purple-lbg">open source</span>
      </SectionTitle>

      <p className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed text-gray-700 md:text-xl lg:text-2xl">
        The language, runtime, package manager, and version control are all in
        one repository, under the Apache 2.0 license.
      </p>
      <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-700 md:text-xl lg:text-2xl">
        Self-hosting runs the same code as Darklang Cloud, so you can read it,
        run it yourself, and keep running it.
      </p>

      <a
        href={GITHUB}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-purple-lbg px-8 py-3 text-lg font-medium text-white-custom transition-colors hover:bg-purple-secondry"
      >
        See the source on GitHub
        <span aria-hidden="true">→</span>
      </a>
    </div>
  </Shell>
);

export default OpenSource;
