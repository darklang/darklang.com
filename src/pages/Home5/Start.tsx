import React from "react";
import { Link } from "react-router-dom";

import InstallCommand from "../../common/ui/InstallCommand";

const Start: React.FC = () => (
  <section
    id="start"
    className="border-t border-gray-200 bg-[#F9F9FB] py-20 text-center"
  >
    <div className="mx-auto max-w-3xl px-4">
      <h2 className="mb-5 text-3xl font-bold tracking-tight md:text-5xl">
        Faster, safer, <span className="text-purple-lbg">and yours</span>
      </h2>
      <p className="mb-8 text-lg text-gray-700 md:text-xl">
        One install gives you the language, the runtime, tracing, source control
        and the agent commands. Point your agent at it and start.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
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
  </section>
);

export default Start;
