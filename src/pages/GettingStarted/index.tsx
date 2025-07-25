import React from "react";

const GettingStarted: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Getting Started with Darklang
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Here's how you can start exploring Darklang and connect with our
            community.
          </p>
        </div>

        {/* Current Status Banner */}
        <div className="bg-blue-50 border-l-4 border-blue-lbg p-6 mb-8 rounded-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-blue-600 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-blue-800">
                Development Status
              </h3>
              <p className="text-blue-700 mt-1">
                We're transforming Darklang from the original browser-based
                editor to a CLI and editor-based development experience. The new
                version will be available for broader use soon.
              </p>
            </div>
          </div>
        </div>

        {/* Ways to Get Involved */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="border-l-4 border-mint pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Join Our Discord
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Connect with other developers, ask questions, share ideas, and
                  follow the latest developments.
                </p>
                <a
                  href="https://discord.gg/darklang"
                  className="inline-flex items-center bg-blue-lbg text-white px-4 py-2 rounded text-sm hover:bg-purple-lbg transition-colors"
                >
                  Join Discord
                </a>
              </div>

              <div className="border-l-4 border-taupe pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Follow Our Progress
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Read our blog for updates, technical insights, and the story
                  behind Darklang's development.
                </p>
                <a
                  href="https://blog.darklang.com"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Read Blog →
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-lbg pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Clone our code and contribute
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Explore Darklang using our VS Code devcontainer setup. This
                  gives you access to the latest CLI and language features.
                </p>
                <a
                  href="https://github.com/darklang/dark"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  View GitHub Setup →
                </a>
              </div>

              <div className="border-l-4 border-purple-lbg pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">
                  VS Code Extension
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Our VS Code extension provides syntax highlighting, LSP
                  features, and integration with the Darklang package manager.
                </p>
                <div className="text-sm text-gray-500">
                  Coming soon to VS Code marketplace
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Coming */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What's Coming Next
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              We're working toward a comprehensive release that will include:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-blue-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-medium text-gray-800">CLI App</div>
                    <div className="text-sm text-gray-600">
                      A stable command-line interface for running Darklang
                      programs, managing packages, and deploying applications
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-purple-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-medium text-gray-800">
                      Package Manager
                    </div>
                    <div className="text-sm text-gray-600">
                      Function-level package distribution
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-mint rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-medium text-gray-800">
                      LSP for General Use
                    </div>
                    <div className="text-sm text-gray-600">
                      Language Server Protocol support for any editor, enabling
                      code completion, diagnostics, and more
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-taupe rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-medium text-gray-800">
                      MCP Server Support
                    </div>
                    <div className="text-sm text-gray-600">
                      Build Model Context Protocol servers quickly to extend AI
                      assistant capabilities
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-rose rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-medium text-gray-800">
                      VS Code Extension
                    </div>
                    <div className="text-sm text-gray-600">
                      Official extension with syntax highlighting, debugging,
                      and integrated package management
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-sand rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <div className="font-medium text-gray-800">
                      Documentation
                    </div>
                    <div className="text-sm text-gray-600">
                      Comprehensive guides and API references
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Want to be notified when Darklang is ready for broader use? Join our
            newsletter for development updates and early access opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-lbg focus:border-transparent"
            />
            <button className="bg-blue-lbg text-white px-6 py-3 rounded-md hover:bg-purple-lbg transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            We'll only send you important updates, never spam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
