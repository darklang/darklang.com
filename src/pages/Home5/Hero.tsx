import React from "react";
import { Link } from "react-router-dom";

import InstallCommand from "../../common/ui/InstallCommand";

const PILLARS = [
  {
    kicker: "Faster",
    title: "Imperfect code still runs",
    body: "Changes are live the moment you make them. No build, no pipeline, no CI queue.",
    color: "text-acc-teal",
    href: "#faster",
  },
  {
    kicker: "Safer",
    title: "Nothing starts with access",
    body: "No disk, network or database until you allow it, one exact request at a time.",
    color: "text-rust",
    href: "#safer",
  },
  {
    kicker: "More powerful",
    title: "The codebase answers questions",
    body: "Ask what calls a function and get the exact answer. No grep, no guessing.",
    color: "text-acc-amber",
    href: "#powerful",
  },
  {
    kicker: "Yours",
    title: "Open source, always",
    body: "Run it on your laptop, your servers or our cloud, with the model you choose.",
    color: "text-blue-lbg",
    href: "#yours",
  },
];

const Hero: React.FC = () => (
  <section id="hero" className="w-full pt-16 pb-12 md:pt-24 md:pb-16">
    <div className="mx-auto max-w-7xl px-4 2xl:max-w-[100rem]">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-6xl lg:text-[70px]">
          Build with <span className="text-purple-lbg">AI</span>. Keep{" "}
          <span className="text-blue-lbg">control</span>
        </h1>

        <p className="mx-auto max-w-4xl text-lg text-dark md:text-xl lg:text-2xl">
          Darklang is a language, runtime and toolchain in one, made for
          building with agents. You get their speed without handing them your
          machine: code starts with no access, every run is recorded, and every
          change is reviewed by what it means, not by lines of text.
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

      <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-2 xl:grid-cols-4">
        {PILLARS.map(p => (
          <a
            key={p.kicker}
            href={p.href}
            className="rounded-2xl border border-gray-200 bg-white p-6 transition-colors hover:border-gray-300"
          >
            <div
              className={`mb-2 text-xs font-bold tracking-wider uppercase ${p.color}`}
            >
              {p.kicker}
            </div>
            <h3 className="mb-1.5 text-lg font-bold text-dark">{p.title}</h3>
            <p className="text-gray-dark">{p.body}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
