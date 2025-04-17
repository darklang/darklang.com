import React from "react";

const DesignedForGenAI: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="maw-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <button className="inline-flex items-center justify-center px-6 py-2 border border-purple-lbg font-medium rounded-full text-purple-lbg bg-white">
            Built for Tomorrow
          </button>
          <h2 className="text-3xl md:text-4xl md:text-5xl font-bold mt-6 mb-8">
            Designed for GenAI
          </h2>
          <p className="text-lg md:text-2xl max-w-6xl mx-auto text-gray-700 leading-relaxed">
            We redesigned the dark language and tooling to enable
            GenAI-generated programs, including exposing language tools to GenAI
            tools, allowing running partial and incomplete programs safely, and
            ensuring access to significant context to GenAI tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          {/* First Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-xl font-semibold mb-4">
              Works with <span className="text-purple-lbg">GitHub Copilot</span>{" "}
              for AI-powered code suggestions
            </div>
            <ul>
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                Get real-time code suggestions while writing Dark applications
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                Accelerate development with context-aware suggestions
              </li>
            </ul>
          </div>

          {/* Second Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="inline-flex items-center justify-center px-4 py-1 mb-4 bg-purple-100 rounded-full">
              <span className="text-xs font-medium text-purple-lbg">2025</span>
            </div>
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
            <div className="inline-flex items-center justify-center px-4 py-1 mb-4 bg-purple-100 rounded-full">
              <span className="text-xs font-medium text-purple-lbg">2025</span>
            </div>
            <div className="text-xl font-semibold mb-4">
              Use <span className="text-purple-lbg">any LLM</span>
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
            <div className="inline-flex items-center justify-center px-4 py-1 mb-4 bg-purple-100 rounded-full">
              <span className="text-xs font-medium text-purple-lbg">2025</span>
            </div>
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
            <div className="inline-flex items-center justify-center px-4 py-1 mb-4 bg-purple-100 rounded-full">
              <span className="text-xs font-medium text-purple-lbg">2025</span>
            </div>
            <div className="text-xl font-semibold mb-4">
              Build <span className="text-purple-lbg">complex programs</span>{" "}
              with darklang <span className="text-purple-lbg">AI agents</span>
            </div>
            <div>
              <span>
                We redesigned the dark language and tooling to enable
                GenAI-generated programs, including exposing language tools to
                GenAI tools, allowing running partial and incomplete programs
                safely, and ensuring access to significant context to GenAI
                tools
              </span>
            </div>
          </div>

          {/* MCP Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="inline-flex items-center justify-center px-4 py-1 mb-4 bg-purple-100 rounded-full">
              <span className="text-xs font-medium text-purple-lbg">2025</span>
            </div>
            <div className="text-xl font-semibold mb-4">
              <span>
                Create <span className="text-purple-lbg">MCP servers</span>
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
                <span>Create custom MCP servers for your systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignedForGenAI;
