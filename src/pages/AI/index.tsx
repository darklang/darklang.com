import React from "react";

const AI: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Integration
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
        </div>

        {/* Development Features Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            AI for Development
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Parser & Language Support */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-purple-lbg mb-4">
                Enhanced Development Experience
              </h3>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-purple-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <p className="text-sm">very generous parser</p>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-purple-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <p className="text-sm">import/export to other languages using AI</p>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-purple-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <p className="text-sm">support copilot</p>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-purple-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <p className="text-sm">redesigned to support AI</p>
                </div>
              </div>
            </div>

            {/* Model Integration */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-mint mb-4">
                Model Integration
              </h3>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-mint rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <p className="text-sm">bring-your-own-model</p>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-mint rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <p className="text-sm">packages for integrating with OpenAI or other models</p>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-mint rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <p className="text-sm">support for local whatever</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User-Facing Features */}
        <div className="border-l-4 border-taupe pl-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            AI for Your Users
          </h2>
          <div className="text-gray-700 leading-relaxed">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-taupe rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <p>"built for AI"</p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-taupe rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <p>build vendor SDKs automagically</p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-taupe rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <p>prompt using your AI, or ours</p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-taupe rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <p>build AI models in darklang</p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-taupe rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <p>agents</p>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Future Features */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-blue-lbg mb-4">
              Future Capabilities
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-sm">future: native support for vector DBs?</p>
              </div>
            </div>
          </div>

          {/* LangChain Alternative */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-purple-lbg mb-4">
              LangChain Alternative
            </h3>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-purple-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-sm">alternative to langchain</p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-purple-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-sm">prompt pipelines, etc</p>
              </div>
            </div>
          </div>
        </div>

        {/* GenAI Features */}
        <div className="border-l-4 border-mint pl-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Designed for GenAI
          </h2>
          <div className="text-gray-700 leading-relaxed">
            <p className="mb-4">
              (bullets from "designed for GenAI")
            </p>
            <p>
              Darklang provides a comprehensive platform for building, deploying, and managing AI-powered applications with built-in support for modern generative AI workflows and tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI;