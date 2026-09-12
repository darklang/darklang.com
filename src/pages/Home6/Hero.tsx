import React from "react";
import { Link } from "react-router-dom";

import InstallCommand from "../../common/ui/InstallCommand";

const Hero: React.FC = () => (
  <section id="hero" className="w-full pt-16 pb-12 md:pt-24 md:pb-16">
    <div className="mx-auto max-w-7xl px-4 2xl:max-w-[100rem]">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-6xl lg:text-[70px]">
          One tool. <span className="text-purple-lbg">The whole stack</span>
        </h1>

        <p className="mx-auto max-w-4xl text-lg text-dark md:text-xl lg:text-2xl">
          Most projects start by choosing a language, a framework, a database, a
          package manager, source control, tracing and a way to deploy, then
          wiring them together. Darklang is all of them in one system: seven
          fewer choices, and one place that knows your whole program.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/getting-started"
            className="inline-flex items-center gap-2 rounded-full bg-purple-lbg px-8 py-3 text-lg font-medium text-white-custom transition-colors hover:bg-purple-secondry"
          >
            Start building
            <span aria-hidden="true">→</span>
          </Link>
          <InstallCommand />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
