import React from "react";
import { Link } from "react-router-dom";

import InstallCommand from "../../common/ui/InstallCommand";

const CHIPS = ["no files", "no builds", "no deploys", "no version ever lost"];

/**
 * "faster", with three static motion streaks trailing it. Absolutely
 * positioned so they never affect the headline's text metrics, sized in em so
 * they scale with it, and faded out at their far end so brushing past the
 * preceding word reads as motion blur rather than as a collision.
 */
const Faster: React.FC = () => (
  <span className="relative inline-block text-blue-lbg md:ml-[1.05em]">
    <span
      aria-hidden="true"
      className="pointer-events-none absolute top-[45%] right-full mr-[0.06em] hidden h-[0.52em] w-[0.9em] -translate-y-1/2 md:block"
    >
      <i className="absolute top-0 right-[0.1em] left-[46%] h-[0.045em] rounded-full bg-gradient-to-r from-transparent to-blue-lbg/35"></i>
      <i className="absolute top-1/2 right-0 left-0 h-[0.045em] -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent to-blue-lbg/70"></i>
      <i className="absolute right-[0.05em] bottom-0 left-[26%] h-[0.045em] rounded-full bg-gradient-to-r from-transparent to-blue-lbg/45"></i>
    </span>
    faster
  </span>
);

const Hero: React.FC = () => (
  <section className="w-full pt-16 md:pt-24 pb-10 md:pb-12">
    <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
      <div className="max-w-6xl 2xl:max-w-[88rem] mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-[70px] 2xl:text-[84px] font-bold tracking-tight mb-8">
          A <span className="text-purple-lbg">safer</span> way to run code.
          <br className="hidden md:block" /> A <Faster /> way to write it.
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl 2xl:text-[26px] text-dark max-w-4xl 2xl:max-w-5xl mx-auto">
          Darklang is a language, a package system and a runtime in one.
          Permissions, history and traces are built in, so you can trust what
          runs, whether you wrote it or an agent did.
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
    </div>
  </section>
);

export default Hero;
