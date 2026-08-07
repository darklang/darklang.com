import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";

const OpenSource: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
        <SectionTitle subtitle="Open Source" align="center">
          Come Build It <span className="text-purple-lbg">with Us</span>
        </SectionTitle>

        <p className="max-w-3xl mx-auto text-center text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
          Darklang is open source under the Apache License 2.0. Follow along on
          GitHub, jump into the issues, and help shape where it goes next. New
          contributors are always welcome.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="https://github.com/darklang/dark"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-purple-lbg hover:bg-purple-secondry text-white-custom font-medium px-8 py-3 text-lg transition-colors"
          >
            Follow on GitHub
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="https://docs.darklang.com/contributing/getting-started"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-purple-lbg text-purple-lbg hover:bg-purple-lbg/5 font-medium px-8 py-3 text-lg transition-colors"
          >
            Contribute
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
