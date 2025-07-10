import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";

const DesignedForGenAI: React.FC = () => {
  const aiFeatures = [
    {
      id: 1,
      title: "Real-Time Code Suggestions",
      description:
        "Context- aware, safe to run even with partial or incomplete Dark code. Speeds up development with a tight feedback loop",
    },
    {
      id: 2,
      title: "Integrate with Any AI Dev Tool",
      description:
        "Works with Claude Code, GitHub Copilot, and type-ahead agents. Share custom context via LLM.txt for smarter GenAI workflows.",
    },
    {
      id: 3,
      title: "Build Short CLI Programs from Prompts",
      description:
        "Instantly generate short CLI programs from natural- language prompts(e.g., dark prompt `find all js files which don't have a CSS file of the same name`)",
    },
    {
      id: 4,
      title: "Use Any Language Model",
      description:
        "Choose darklang’s fine- tuned models, local OSS models, or commercial models via API",
    },
    {
      id: 5,
      title: "Build vendor SDKs from prompts and OpenAPI docs",
      description:
        "Transform technical API documentation into usable code libraries, turn technical documentation into developer-friendly toolkits, and update SDKs automatically when APIs change.",
    },
    {
      id: 6,
      title: "Build Complex Programs with AI Agents",
      description:
        "Let Darklang AI agents analyze requirements, design solutions, generate code, and troubleshoot while following best practices.",
    },
    {
      id: 7,
      title: "Create, Run, and Share MCP Servers",
      description:
        "Quickly run MCP servers from the command line and easily share them with coworkers. Explore ready-to-use servers for Darklang internal development and your own projects.",
    },
  ];
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

        {aiFeatures.map(feature => (
          <div key={feature.id} className="flex items-start space-x-2 ">
            <div className="flex-shrink-0">
              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.713 10.1291L17.467 10.6951C17.4286 10.7872 17.3637 10.866 17.2806 10.9214C17.1975 10.9767 17.0999 11.0063 17 11.0063C16.9001 11.0063 16.8025 10.9767 16.7194 10.9214C16.6363 10.866 16.5714 10.7872 16.533 10.6951L16.287 10.1291C15.8545 9.1278 15.0624 8.325 14.067 7.87908L13.308 7.54008C13.2159 7.49772 13.1379 7.42985 13.0832 7.34451C13.0286 7.25917 12.9995 7.15994 12.9995 7.05858C12.9995 6.95722 13.0286 6.85799 13.0832 6.77265C13.1379 6.68731 13.2159 6.61944 13.308 6.57708L14.025 6.25808C15.0454 5.79946 15.8511 4.96696 16.276 3.93208L16.529 3.32108C16.5662 3.22643 16.631 3.14518 16.715 3.08791C16.799 3.03063 16.8983 3 17 3C17.1017 3 17.201 3.03063 17.285 3.08791C17.369 3.14518 17.4338 3.22643 17.471 3.32108L17.724 3.93108C18.1485 4.96616 18.9538 5.79901 19.974 6.25808L20.692 6.57808C20.7838 6.62056 20.8615 6.68842 20.916 6.77365C20.9705 6.85889 20.9994 6.95793 20.9994 7.05908C20.9994 7.16023 20.9705 7.25928 20.916 7.34451C20.8615 7.42974 20.7838 7.4976 20.692 7.54008L19.932 7.87808C18.9368 8.32445 18.1451 9.12761 17.713 10.1291ZM2.828 12.0011L7.071 16.2441L5.657 17.6581L0 12.0011L5.657 6.34408L7.07 7.75808L2.828 12.0011ZM18.343 17.6581L24 12.0011L21.17 9.17308L19.756 10.5871L21.171 12.0011L16.929 16.2441L18.343 17.6581Z" fill="#747AB9" />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-gray-600 lg:text-lg mb-4">
                <span className="font-semibold">{feature.title}</span>:{" "}
                {feature.description}
              </p>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          {/* First Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-xl font-semibold mb-4">
              <span className="text-purple-lbg">Real-Time</span>{" "}  Code Suggestions:
            </div>
            <ul>
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">-</span>
                Context-aware, safe to run even with partial or incomplete Dark code
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
                Let Darklang AI agents analyze requirements, design solutions, generate code, and troubleshoot while following best practices.
              </span>
            </div>
          </div>

          {/* Sixth Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">

            <div className="text-xl font-semibold mb-4">
              <span>
                Create, Run, and Share <span className="text-purple-lbg">MCP servers</span>
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
                Explore ready-to-use servers for Darklang internal development and your own projects
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignedForGenAI;
