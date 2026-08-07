import React from "react";
import { Link } from "react-router-dom";
import InstallCommand from "../../common/ui/InstallCommand";

const Hero: React.FC = () => {
  return (
    <section className="w-full max-w-7xl 2xl:max-w-[100rem] mx-auto px-4 py-20 md:py-32">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-[70px] font-bold mb-10 tracking-tight">
          Just <span className="text-purple-lbg">Code</span>. Better{" "}
          <span className="text-blue-lbg">Software</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl mb-6 max-w-4xl lg:max-w-6xl text-dark">
          Darklang is a functional programming language and integrated runtime
          for building CLI tools and backends.{" "}
          <span className="font-semibold text-purple-lbg">Packages</span>,{" "}
          <span className="font-semibold text-acc-amber">tracing</span>,{" "}
          <span className="font-semibold text-rust">source control</span>,{" "}
          <span className="font-semibold text-acc-pink">review</span>, and{" "}
          <span className="font-semibold text-acc-teal">sync</span> are part of
          the same system, so you can write code, run it immediately, and ship
          without stitching together a stack.
        </p>

        <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl text-dark">
          Work <span className="font-medium text-dark">locally</span>,{" "}
          <span className="font-medium text-dark">self-host</span>, or use{" "}
          <span className="font-medium text-blue-lbg">Darklang Cloud</span>.
          Bring the editor or AI coding agent you prefer.
        </p>

        {/* Video placeholder: Write → Run → Inspect → Review → Version → Deploy → Sync */}
        <div className="w-full max-w-2xl 2xl:max-w-4xl mt-4 mb-12">
          <div className="relative aspect-video w-full rounded-xl border border-gray-300 bg-gray-100 flex flex-col items-center justify-center gap-6 overflow-hidden">
            <span className="text-gray-dark font-medium text-sm md:text-base uppercase tracking-wide">
              Video placeholder
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
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
    </section>
  );
};

export default Hero;
