import React from "react";
import { Link } from "react-router-dom";

import InstallCommand from "../../common/ui/InstallCommand";
import { DOCS } from "./parts";

/** The same shape as the live hero: centered, with the install command and
    the video slot beneath the copy. */
const Hero: React.FC = () => (
  <section
    id="hero"
    className="mx-auto w-full max-w-7xl 2xl:max-w-[100rem] px-4 py-20 md:py-32"
  >
    <div className="flex flex-col items-center text-center">
      <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-[70px]">
        A new way of coding.
        <br />
        <span className="text-purple-lbg">A language built for it</span>
      </h1>

      <p className="mb-10 text-2xl font-semibold md:text-4xl 2xl:text-5xl">
        Agents stop <span className="text-blue-lbg">guessing</span>. You keep{" "}
        <span className="text-blue-lbg">control</span>
      </p>

      <p className="mb-6 max-w-4xl text-lg text-dark md:text-xl lg:max-w-6xl lg:text-2xl">
        Agents write code fast. Then you're untangling their changes, checking
        what broke, and making sure a test run doesn't touch something it
        shouldn't.
      </p>

      <p className="mb-12 max-w-4xl text-lg text-dark md:text-xl lg:text-2xl">
        Darklang brings the{" "}
        <span className="font-semibold text-purple-lbg">language</span>,{" "}
        <span className="font-semibold text-acc-amber">runtime</span>, and{" "}
        <span className="font-semibold text-rust">version control</span>{" "}
        together to give agents better context, separate places to work, and
        enforced limits on what their code can do.
      </p>

      {/* Video placeholder, as on the live homepage */}
      <div className="mt-4 mb-12 w-full max-w-2xl 2xl:max-w-4xl">
        <div className="relative flex aspect-video w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-xl border border-gray-300 bg-gray-100">
          <span className="text-sm font-medium tracking-wide text-gray-dark uppercase md:text-base">
            Video placeholder
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Link
          to="/getting-started"
          className="inline-flex items-center gap-2 rounded-full bg-purple-lbg px-8 py-3 text-lg font-medium text-white-custom transition-colors hover:bg-purple-secondry"
        >
          Get started
          <span aria-hidden="true">→</span>
        </Link>
        <InstallCommand />
      </div>

      <a
        href={DOCS}
        target="_blank"
        rel="noreferrer"
        className="group mt-6 inline-flex items-center gap-1.5 text-base font-medium text-purple-lbg md:text-lg"
      >
        Explore the docs
        <span
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      </a>
    </div>
  </section>
);

export default Hero;
