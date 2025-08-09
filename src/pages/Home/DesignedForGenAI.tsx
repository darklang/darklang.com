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
          Designed for AI-Powered Development
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          {/* First Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-xl font-semibold mb-4">
              <span className="text-purple-lbg">Real-Time</span> Code
              Suggestions:
            </div>
            <ul className="text-gray-700 space-y-1">
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
              Generate{" "}
              <span className="text-purple-lbg">
                code from natural language
              </span>
            </div>
            <ul className="mt-4 text-gray-700 space-y-1">
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                Transform natural language descriptions into executable code
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                Multi-modal understanding of screenshots, mockups, and visual
                designs
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                Context-aware code generation with reasoning
              </li>
            </ul>
          </div>

          {/* Third Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-xl font-semibold mb-4">
              Use <span className="text-purple-lbg">any Language Model</span>
            </div>
            <ul className="mt-4 text-gray-700 space-y-1">
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                Reasoning models (o1, Claude 3.5 Sonnet) and fine-tuned models
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
            <ul className="text-gray-700 space-y-1">
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
            <ul className="text-gray-700 space-y-1">
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                Work seamlessly with AI agents like Claude Code and AI
                assistants like Cursor and Copilot
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                Enable agentic workflows where AI agents analyze requirements,
                design solutions, generate code, and troubleshoot while
                following best practices
              </li>
            </ul>
          </div>

          {/* Sixth Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-xl font-semibold mb-4">
              <span>
                Create, Run, and Share{" "}
                <span className="text-purple-lbg">MCP servers</span>
              </span>
            </div>

            <ul className="text-gray-700 space-y-1">
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
