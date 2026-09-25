import React from "react";

/** Centered like the live hero, copy only for now. */
const Hero: React.FC = () => (
  <section
    id="hero"
    className="mx-auto w-full max-w-7xl 2xl:max-w-[100rem] px-4 py-20 md:py-32"
  >
    <div className="flex flex-col items-center text-center">
      <h1 className="mb-10 text-4xl font-bold tracking-tight md:text-6xl lg:text-[70px]">
        Coding is AI-accelerated,
        <br />
        <span className="text-purple-lbg">
          and the rest of development needs to catch up
        </span>
      </h1>

      <p className="mb-6 max-w-4xl text-lg text-dark md:text-xl lg:max-w-6xl lg:text-2xl">
        Writing code is getting easier. Understanding it, checking it, and
        managing its consequences still takes work.
      </p>

      <p className="max-w-4xl text-lg text-dark md:text-xl lg:max-w-6xl lg:text-2xl">
        Darklang is a programming language and development platform that
        connects your{" "}
        <span className="font-semibold text-purple-lbg">code</span>, its{" "}
        <span className="font-semibold text-blue-lbg">dependencies</span>, its{" "}
        <span className="font-semibold text-rust">history</span>, and{" "}
        <span className="font-semibold text-acc-amber">
          what happens when it runs
        </span>
        , so you and your AI agents can build with a clearer picture.
      </p>
    </div>
  </section>
);

export default Hero;
