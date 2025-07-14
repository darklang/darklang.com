import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";

const DesignedForGenAI: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          // subtitle="Built for Tomorrow"
          align="center"
          className="mb-12"
          description="The Darklang language and tooling are designed with AI integration in mind to enable an AI-powered development flow."
          subtitleStyle="button"
        >
          Designed for Generative AI
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          {/* First Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-xl font-semibold mb-4">
              <span className="text-purple-lbg">Real-Time</span> Code
              Suggestions:
            </div>
            <ul>
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                Context-aware, safe to run even with partial or incomplete Dark
                code
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                Speeds up development with a tight feedback loop
              </li>
            </ul>
          </div>

          {/* Second Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-xl font-semibold mb-4">
              Build short <span className="text-purple-lbg">CLI programs</span>{" "}
              from <span className="text-purple-lbg">prompts</span>
            </div>
            <div className="mt-4 p-3 bg-gray-50 rounded text-sm text-gray-600">
              dark prompt "find all js files which don't have a CSS file of the
              same name"
            </div>
          </div>

          {/* Third Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-xl font-semibold mb-4">
              Use <span className="text-purple-lbg">any Language Model</span>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                darklang's fine-tuned models
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                local OSS models
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                commercial models via API
              </li>
            </ul>
          </div>

          {/* Fourth Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-xl font-semibold mb-4">
              Build <span className="text-purple-lbg">vendor SDKs</span> from
              prompts and OpenAPI docs
            </div>
            <ul>
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                Transform technical API documentation into usable code libraries
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                Turn technical documentation into developer-friendly toolkits
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                Update SDKs automatically when APIs change
              </li>
            </ul>
          </div>

          {/* Fifth Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-xl font-semibold mb-4">
              Build <span className="text-purple-lbg">complex programs</span>{" "}
              with darklang <span className="text-purple-lbg">AI agents</span>
            </div>
            <div>
              <span>
                Let Darklang AI agents analyze requirements, design solutions,
                generate code, and troubleshoot while following best practices.
              </span>
            </div>
          </div>

          {/* Sixth Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-xl font-semibold mb-4">
              <span>
                Create, Run, and Share{" "}
                <span className="text-purple-lbg">MCP servers</span>
              </span>
            </div>

            <ul>
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                Quickly run MCP servers from the command line
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                Easily share them with coworkers
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                Explore ready-to-use servers for Darklang internal development
                and your own projects
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignedForGenAI;
