import React from "react";
import { Link } from "react-router-dom";

import InstallCommand from "../../common/ui/InstallCommand";
import HeroStage from "./HeroStage";

const CHIPS = [
  "access you granted",
  "runs you can replay",
  "changes you can undo",
  "one SQLite file you can copy",
];

const Hero: React.FC = () => (
  <section className="w-full pt-16 md:pt-24 pb-12 md:pb-16">
    <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-[70px] font-bold tracking-tight mb-8">
          Just <span className="text-purple-lbg">Code</span>. Full{" "}
          <span className="text-blue-lbg">Control</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-dark max-w-4xl mx-auto">
          Your code lives in a database, not in text files. So you can read what
          a program is allowed to touch before it runs, see the real values from
          every run afterwards, and put back an earlier version whenever you
          want. Write it yourself, or let an agent write it.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {CHIPS.map(c => (
            <span
              key={c}
              className="rounded-full border border-gray-200 bg-[#F9F9FB] px-4 py-1.5 text-sm text-gray-dark"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/getting-started"
            className="inline-flex items-center gap-2 rounded-full bg-purple-lbg hover:bg-purple-secondry text-white-custom font-medium px-8 py-3 text-lg transition-colors"
          >
            Get Started
            <span aria-hidden="true">→</span>
          </Link>
          <InstallCommand />
        </div>
      </div>

      <div className="mt-12 md:mt-16 max-w-6xl mx-auto">
        <HeroStage />
      </div>
    </div>
  </section>
);

export default Hero;
