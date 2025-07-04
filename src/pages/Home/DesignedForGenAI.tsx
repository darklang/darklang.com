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
              Works with your existing <span className="text-purple-lbg">AI dev tools</span>{" "}
            </div>
            <ul>
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                Real-time, context-aware code suggestions for Dark apps
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                Super-tight feedback loop to speed up AI-powered development and testing
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                Safely run partial or incomplete code
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                Seamlessly integrates with Claude Code, GitHub Copilot, and type-ahead agents
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                Share custom context with GenAI tools using LLM.txt
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
                Create next-level applications by leveraging darklang's AI
                agents to handle complex workflows. These agents can analyze
                requirements, suggest implementation strategies, generate code,
                and help troubleshoot issues—all while maintaining code quality
                and adhering to best practices.
              </span>
            </div>
          </div>

          {/* MCP Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">

            <div className="text-xl font-semibold mb-4">
              <span>
                Create, Run, and Share <span className="text-purple-lbg">MCP servers</span>
              </span>
            </div>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-purple-lbg">-</span>
                <span>
                  Allow AI models to access external tools/resources, execute
                  code, and interact with various services
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-lbg">-</span>
                <span>Create custom MCP servers for your systems within a minute</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-lbg">-</span>
                <span>Quickly run MCP servers from the command line, and easily share them with coworkers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-lbg">-</span>
                <span>Ready-to-use MCP servers for Darklang internal development and your own projects</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignedForGenAI;
