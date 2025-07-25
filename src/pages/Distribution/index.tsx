import React from "react";

const Distribution: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Deployless Distribution
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Skip containers, CI/CD, and deployment pipelines. Darklang delivers
            your software instantly—from development to production in
            milliseconds.
          </p>
        </div>

        {/* Deployless Philosophy */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Deployless Revolution
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Just as serverless computing abstracted away server management,
            Darklang introduces "deployless" distribution that abstracts away
            deployment management. Write code, save it, and it's instantly
            running in production.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Traditional deployment involves dozens of steps and tools. Darklang
            eliminates roughly this complexity, reducing deployment time from
            minutes or hours to 50 milliseconds.
          </p>
          <div className="mt-6">
            <a
              href="https://blog.darklang.com/how-dark-deploys-code-in-50ms/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-lbg hover:text-blue-700 font-medium"
            >
              Read about our 50ms deployment architecture →
            </a>
          </div>
        </div>

        {/* Traditional vs Darklang */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Traditional Distribution vs Darklang
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional */}
            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-800 mb-4">
                Traditional Distribution
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Write code and commit to Git
                </div>
                <div className="flex items-center text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Create pull requests and reviews
                </div>
                <div className="flex items-center text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Configure build systems
                </div>
                <div className="flex items-center text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Build Docker containers
                </div>
                <div className="flex items-center text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Push to container registries
                </div>
                <div className="flex items-center text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Configure Kubernetes/orchestration
                </div>
                <div className="flex items-center text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Set up CI/CD pipelines
                </div>
                <div className="flex items-center text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Deploy and pray it works
                </div>
              </div>
              <div className="mt-4 text-red-600 font-medium">
                Result: Hours or days from code to production
              </div>
            </div>

            {/* Darklang */}
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-800 mb-4">
                Darklang Distribution
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-green-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Write your function
                </div>
                <div className="flex items-center text-green-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Save the file
                </div>
                <div className="flex items-center text-green-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  It's running in production
                </div>
                <div className="h-4"></div>
                <div className="h-4"></div>
                <div className="h-4"></div>
                <div className="h-4"></div>
                <div className="h-4"></div>
              </div>
              <div className="mt-4 text-green-600 font-medium">
                Result: 50 milliseconds from code to production
              </div>
            </div>
          </div>
        </div>

        {/* Core Distribution Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Function-Level Distribution */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-lbg rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Function-Level Distribution
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Instead of deploying entire applications, Darklang distributes
              individual functions. Each function is versioned, immutable, and
              can be executed directly from anywhere.
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="font-mono text-sm text-gray-800 mb-2">
                $ darklang @username.parseCSV myfile.csv
              </div>
              <p className="text-sm text-gray-600">
                Run any function directly—no installation, setup, or wrapper
                scripts required.
              </p>
            </div>
          </div>

          {/* Real-Time Sync */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-lbg rounded-lg flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Configurable Synchronization
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              You control what gets synced and when. Auto-sync your public
              functions for instant distribution, manually publish releases, or
              keep sensitive code in local-only files that never leave your
              machine.
            </p>
            <div className="bg-gray-50 p-4 rounded-md space-y-2">
              <div className="text-sm">
                <span className="font-semibold text-green-700">Auto-sync:</span>
                <span className="text-gray-600 ml-2">
                  Public functions sync automatically as you save
                </span>
              </div>
              <div className="text-sm">
                <span className="font-semibold text-blue-700">
                  Manual publish:
                </span>
                <span className="text-gray-600 ml-2">
                  Explicit version releases when you're ready
                </span>
              </div>
              <div className="text-sm">
                <span className="font-semibold text-gray-700">Local-only:</span>
                <span className="text-gray-600 ml-2">
                  Keep secret code in .db files that never sync
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Matter: The Distribution Hub */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Dark Matter: The Central Distribution Platform
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              All Darklang code is hosted on{" "}
              <strong>matter.darklang.com</strong>—a fine-grained package
              manager that serves as the central distribution hub for types,
              functions, data, and more.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-lbg">
              <h3 className="font-semibold text-gray-800 mb-3">
                How Matter Works
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Centrally hosted:</strong> Public code accessible at
                    matter.darklang.com
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-purple-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Local caches:</strong> CLI installations maintain
                    local caches for performance
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-mint rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>You choose visibility:</strong> Auto-sync public
                    functions or keep them private/local
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-taupe rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Fine-grained:</strong> Download only the specific
                    functions you use
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Local-only files:</strong> Secret code in .db files
                    never leaves your machine
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cross-Platform Distribution */}
        <div className="border-l-4 border-purple-lbg pl-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Universal Cross-Platform Distribution
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Darklang functions run everywhere: CLI, cloud, web browsers,
              Slack, Discord, or any platform that can make HTTP calls.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">
                  CLI Distribution
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Run functions directly from the command line without
                  installation.
                </p>
                <div className="font-mono text-xs bg-gray-800 text-green-400 p-2 rounded">
                  $ dark run @user.func
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Cloud Distribution
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Deploy to Darklang cloud instantly with zero configuration.
                </p>
                <div className="font-mono text-xs bg-gray-800 text-green-400 p-2 rounded">
                  dark deploy @user.func
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Gets Eliminated */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What Darklang Distribution Eliminates
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  No DevOps Complexity
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    <span>No YAML configuration files</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    <span>No Docker containers</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    <span>No Kubernetes orchestration</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    <span>No CI/CD pipeline setup</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  No Infrastructure Management
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    <span>No server provisioning</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    <span>No load balancer configuration</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    <span>No networking setup</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    <span>No cloud service integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
