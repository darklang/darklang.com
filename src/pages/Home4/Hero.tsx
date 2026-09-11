import React from "react";
import { Link } from "react-router-dom";

import InstallCommand from "../../common/ui/InstallCommand";

const Hero: React.FC = () => (
  <section className="w-full pt-16 pb-12 md:pt-24 md:pb-16">
    <div className="mx-auto max-w-7xl px-4 2xl:max-w-[100rem]">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-6xl lg:text-[64px]">
          A programming language you can trust with code{" "}
          <span className="text-purple-lbg">you didn&apos;t write</span>
        </h1>

        <p className="mx-auto max-w-6xl text-lg text-dark md:text-xl lg:text-2xl">
          Darklang holds every function to the permissions you gave it, records
          every run, and keeps every version. Your code lives in a database, not
          in files, so it runs the moment you write it. Write it yourself, or
          let an agent write it.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/getting-started"
            className="inline-flex items-center gap-2 rounded-full bg-purple-lbg px-8 py-3 text-lg font-medium text-white-custom transition-colors hover:bg-purple-secondry"
          >
            Install Darklang
            <span aria-hidden="true">→</span>
          </Link>
          <a
            href="#try"
            className="inline-flex items-center gap-2 rounded-full border border-purple-lbg px-8 py-3 text-lg font-medium text-purple-lbg transition-colors hover:bg-purple-lbg/5"
          >
            Run it in your browser
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="mt-6 flex justify-center">
          <InstallCommand />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
