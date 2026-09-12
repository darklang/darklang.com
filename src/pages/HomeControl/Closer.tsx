import React from "react";
import { Link } from "react-router-dom";

import InstallCommand from "../../common/ui/InstallCommand";

const Closer: React.FC = () => (
  <section className="py-16 md:py-24 bg-[#F9F9FB] border-t border-gray-200">
    <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4 text-center">
      <div className="text-lg font-medium text-purple-lbg mb-4">
        Get started
      </div>
      <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-bold text-black-custom mb-6">
        Your code, your machines,{" "}
        <span className="text-purple-lbg">your call</span>
      </h2>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
        Ask for a tool or write one. Read what it can access. Run it here or on
        a server. Keep every run, and go back whenever you need to.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

export default Closer;
