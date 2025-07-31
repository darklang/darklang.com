import React from "react";
import Newsletter from "../Home/Newsletter";

const GettingStarted: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Getting Started with Darklang
          </h1>
          <div className="w-52 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-4xl mx-auto">
            Here's how you can start exploring Darklang and connect with our
            community.
          </p>
        </div>

        {/* Current Status Banner */}
        <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 p-6 mb-8 shadow-sm border border-purple-100">
          {/* Decorative elements */}
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-purple-100/40 blur-2xl"></div>
          <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-indigo-100/40 blur-2xl"></div>

          <div className="relative flex items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center rounded-full bg-purple-100 p-2 text-purple-lbg">
                <svg
                  className="h-5 w-5"
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
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-purple-900">
                Development Status
              </h3>
              <p className="text-gray-700 mt-1">
                We're transforming Darklang from the original browser-based
                editor to a CLI and editor-based development experience. The new
                version will be available for broader use soon.
              </p>
            </div>
          </div>
        </section>

        {/* Ways to Get Involved */}
        <div className="my-18">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-3 border-mint pl-4">
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

              <div className="border-l-3 border-blue-lbg pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Follow Our Progress
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Read our blog for updates, technical insights, and the story
                  behind Darklang's development.
                </p>
                <a
                  href="https://blog.darklang.com"
                  className="inline-flex items-center text-blue-lbg hover:text-blue-800 text-sm font-medium"
                >
                  Read Blog →
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-l-3 border-purple-lbg pl-4">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Clone our code and contribute
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Explore Darklang using our VS Code devcontainer setup. This
                  gives you access to the latest CLI and language features.
                </p>
                <a
                  href="https://github.com/darklang/dark"
                  className="inline-flex items-center text-blue-lbg hover:text-blue-800 text-sm font-medium"
                >
                  View GitHub Setup →
                </a>
              </div>

              <div className="border-l-3 border-taupe pl-4">
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
        <div className="mb-12">
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
        <Newsletter />
      </div>
    </div>
  );
};

export default GettingStarted;
