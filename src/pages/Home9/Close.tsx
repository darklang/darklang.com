import React from "react";
import { Link } from "react-router-dom";

import SectionTitle from "../../common/ui/SectionTitle";
import { DOCS, Shell } from "./parts";

const Close: React.FC = () => (
  <Shell id="close">
    <div className="mx-auto max-w-5xl 2xl:max-w-6xl text-center">
      <SectionTitle align="center">
        Give your agents a better place to{" "}
        <span className="text-purple-lbg">build</span>
      </SectionTitle>

      <p className="mx-auto mb-6 max-w-4xl text-lg text-dark md:text-xl lg:text-2xl">
        More context when they make a change. Clearer feedback when something
        breaks. More control over what runs.
      </p>
      <p className="mx-auto mb-12 max-w-4xl text-lg text-dark md:text-xl lg:text-2xl">
        Spend more of your time deciding what to build and less of it untangling
        what your agents just did.
      </p>

      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          to="/getting-started"
          className="inline-flex items-center gap-2 rounded-full bg-purple-lbg px-8 py-3 text-lg font-medium text-white-custom transition-colors hover:bg-purple-secondry"
        >
          Get started with Darklang
          <span aria-hidden="true">→</span>
        </Link>
        <a
          href={DOCS}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 text-lg font-medium text-purple-lbg"
        >
          Read the docs
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </a>
      </div>
    </div>
  </Shell>
);

export default Close;
