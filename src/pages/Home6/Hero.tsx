import React from "react";
import { Link } from "react-router-dom";

import InstallCommand from "../../common/ui/InstallCommand";
import { STEPS } from "./data";

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
          wiring them together. Darklang is all of those, built as one system,
          so every part already knows about the others.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/getting-started"
            className="inline-flex items-center gap-2 rounded-full bg-purple-lbg px-8 py-3 text-lg font-medium text-white-custom transition-colors hover:bg-purple-secondry"
          >
            Get Started
            <span aria-hidden="true">→</span>
          </Link>
          <InstallCommand />
        </div>
      </div>

      <ol className="mx-auto mt-14 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {STEPS.map(step => (
          <li key={step.id}>
            <a
              href={`#${step.id}`}
              className="flex h-full items-baseline gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 transition-colors hover:border-gray-300"
            >
              <span className={`font-code text-xs ${step.color}`}>
                {step.n}
              </span>
              <span className="font-medium text-dark">{step.name}</span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Hero;
