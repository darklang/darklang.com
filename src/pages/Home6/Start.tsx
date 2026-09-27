import React from "react";
import { Link } from "react-router-dom";

import InstallCommand from "../../common/ui/InstallCommand";

const Start: React.FC = () => (
  <section
    id="start-building"
    className="border-t border-gray-200 bg-[#F9F9FB] py-20"
  >
    <div className="mx-auto max-w-3xl px-4 text-center">
      <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
        One tool. <span className="text-purple-lbg">The whole way</span>
      </h2>
      <div className="space-y-5 text-lg leading-relaxed text-gray-700 md:text-xl">
        <p>
          A script becomes a daily report. A prototype becomes a service your
          team relies on. A function from one project gives the next a head
          start.
        </p>
        <p>
          Darklang stores your program as connected, versioned data. Your code,
          its history, and the knowledge of how it runs stay together as your
          work grows.
        </p>
        <p className="font-medium text-dark">
          Each new project starts with more of the work already done.
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          to="/getting-started"
          className="inline-flex items-center gap-2 rounded-full bg-purple-lbg px-8 py-3 text-lg font-medium whitespace-nowrap text-white-custom transition-colors hover:bg-purple-secondry"
        >
          Start building
          <span aria-hidden="true">→</span>
        </Link>
        <a
          href="https://docs.darklang.com/contributing/getting-started"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-purple-lbg px-8 py-3 text-lg font-medium whitespace-nowrap text-purple-lbg transition-colors hover:bg-purple-lbg/5"
        >
          Contribute
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="mt-4 flex justify-center">
        <InstallCommand />
      </div>

      <p className="mt-6 text-sm text-gray-dark">
        Darklang is open source under Apache 2.0. Read it, run it anywhere, or
        help build it.
      </p>
    </div>
  </section>
);

export default Start;
