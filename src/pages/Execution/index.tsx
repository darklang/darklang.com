import React from "react";

const Execution: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Instant Execution
          </h1>
          <div className="w-28 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl 2xl:text-2xl text-gray-600 mt-6 max-w-4xl 2xl:max-w-5xl mx-auto">
            No compilation, no build steps, no waiting. Write code and it runs
            immediately with Darklang's streamlined execution model.
          </p>
        </div>

        {/* Interpreted Runtime */}
        <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 p-8 mb-20 shadow-sm border border-purple-100">
          {/* Decorative elements */}
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-purple-100/40 blur-2xl"></div>
          <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-indigo-100/40 blur-2xl"></div>

          <div className="relative">
            {/* Icon + Title header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center rounded-full bg-purple-100 p-2 text-purple-lbg">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 3L4 7l4 4"></path>
                  <path d="M4 7h16"></path>
                  <path d="M16 21l4-4-4-4"></path>
                  <path d="M20 17H4"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-purple-dbg">
                Interpreted by Design
              </h2>
            </div>
            <p className="text-gray-700 2xl:text-lg leading-relaxed mb-4">
              Darklang runs your code directly through an interpreter—no
              compilation step required. This means your programs start
              instantly, making the development cycle incredibly fast and
              responsive.
            </p>
            <p className="text-gray-700 2xl:text-lg leading-relaxed">
              While compilation can provide performance benefits, interpretation
              gives you immediate feedback and eliminates the wait times that
              slow down development. Perfect for rapid prototyping and iterative
              development.
            </p>
          </div>
        </section>

        {/* Core Execution Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Async Runtime */}
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Async Without Keywords
              </h3>
            </div>
            <p className="text-gray-700 2xl:text-lg leading-relaxed mb-4">
              Darklang's runtime is fully asynchronous by default, but you don't
              need to think about it. No async/await keywords, no "colored
              functions"— just write straightforward code.
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-sm 2xl:text-base text-gray-600">
                HTTP calls, database queries, and file operations are
                automatically non-blocking, handled through data dependencies
                rather than explicit async syntax.
              </p>
            </div>
          </div>

          {/* Memory Management */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-mint rounded-lg flex items-center justify-center mr-4">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Garbage Collected
              </h3>
            </div>
            <p className="text-gray-700 2xl:text-lg leading-relaxed mb-4">
              No manual memory management, no segfaults, no memory leaks.
              Darklang's garbage collector handles memory automatically so you
              can focus on business logic.
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-sm 2xl:text-base text-gray-600">
                Memory safety without the complexity—one of the greatest
                programming language features for developer productivity.
              </p>
            </div>
          </div>
        </div>

        {/* Streaming Package Integration */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Zero-Wait Dependencies
          </h2>
          <div className="text-gray-700 2xl:text-lg leading-relaxed space-y-4 pl-1">
            <p className="2xl:text-lg">
              Traditional languages require you to download and install packages
              before running code. Darklang streams dependencies automatically
              from the package manager as your code runs.
            </p>

            <div className="pl-8 py-1 border-l-3 border-blue-lbg">
              <h3 className="font-semibold text-gray-800 mb-3">How It Works</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    Your code references a function from another package
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-purple-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    Runtime automatically fetches and caches that specific
                    function
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-mint rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>Code continues executing without interruption</div>
                </div>
              </div>
            </div>

            <div className="bg-mint/8 p-4 rounded-lg mt-4">
              <h4 className="font-semibold text-gray-800 mb-2">
                Minimal Downloads
              </h4>
              <p className="text-sm 2xl:text-base text-gray-600">
                Unlike traditional package managers that download entire
                libraries, Darklang streams only the specific functions and
                types you actually use. This dramatically reduces bandwidth and
                storage requirements.
              </p>
            </div>

            <p className="text-sm 2xl:text-base text-gray-600 mt-4">
              No "npm install" steps, no waiting to download the entire
              internet. Local caching is configurable based on your storage and
              performance preferences.
            </p>
          </div>
        </div>

        {/* Development Loop */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Lightning-Fast Development Loop
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 pl-1 2xl:text-lg">
            <p className="2xl:text-lg">
              The combination of interpretation and{" "}
              <a href="/typechecking" className="text-blue-lbg hover:underline">
                gradual static typing
              </a>{" "}
              creates an incredibly fast development experience:
            </p>

            <div className="grid md:grid-cols-3 gap-2 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-lbg rounded-full flex items-center justify-center mx-auto mb-4">
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
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Write</h3>
                <p className="text-sm 2xl:text-base text-gray-600 max-w-xs mx-auto">
                  Type your function and save. No compilation step needed.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-lbg rounded-full flex items-center justify-center mx-auto mb-4">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Run</h3>
                <p className="text-sm 2xl:text-base text-gray-600 max-w-xs mx-auto">
                  Code executes immediately, even with partial type information.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-mint rounded-full flex items-center justify-center mx-auto mb-4">
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
                <h3 className="font-semibold text-gray-800 mb-2">Iterate</h3>
                <p className="text-sm 2xl:text-base text-gray-600  max-w-xs mx-auto">
                  Refine your code instantly based on real execution feedback.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CLI Execution Model */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Universal Function Execution
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 pl-1 2xl:text-lg">
            <p>
              Any Darklang function can be executed directly from the command
              line, web interfaces, Slack, Discord, or any other platform. This
              universal execution model opens up entirely new ways to interact
              with code.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">
                Example: Run Any Function
              </h3>
              <div className="font-code text-sm 2xl:text-base bg-dark p-4 rounded mb-3">
                <span className="text-purple-dbg">$ darklang</span>{" "}
                <span className="text-white">@username.parseCSV</span>{" "}
                <span className="text-gray-light">myfile.csv</span>
              </div>
              <p className="text-sm 2xl:text-base text-gray-600">
                Execute functions directly without writing wrapper scripts or
                setting up servers. Functions can run server-side without
                exposing credentials.
              </p>
            </div>
          </div>
        </div>

        {/* Performance Philosophy */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Performance Philosophy
          </h2>
          <div className="text-gray-700 2xl:text-lg leading-relaxed space-y-4 pl-1">
            <p>
              Darklang prioritizes developer productivity over raw performance.
              The current runtime is "fast enough for most things" but not
              optimized for high-performance computing scenarios.
            </p>

            <div className="px-8 py-4 border-l-3 border-sand">
              <h3 className="font-semibold text-gray-800 mb-3">
                Current Trade-offs
              </h3>
              <div className="space-y-2 text-sm 2xl:text-base">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span>Instant execution and fast development cycles</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span>No build times or compilation delays</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-sand rounded-full mr-3"></span>
                  <span>
                    Interpreted execution is slower than compiled code
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-sand rounded-full mr-3"></span>
                  <span>Not optimized for CPU-intensive workloads yet</span>
                </div>
              </div>
            </div>

            <p>
              For performance-critical tasks, you can call out to external
              services, local CLI tools, or specialized high-performance
              libraries. Darklang makes it easy to integrate with existing tools
              when you need raw speed. We will eventually build a full compiler
              for maximum performance, but it's not a priority yet—developer
              productivity comes first.
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The Bottom Line
          </h2>
          <div className="text-gray-700 2xl:text-lg leading-relaxed space-y-4 pl-1">
            <p className="text-lg 2xl:text-xl">
              Darklang's execution model eliminates the friction between writing
              code and running code.
            </p>
            <p>
              No build steps, no compilation delays, no dependency
              installation—just instant execution that lets you focus on solving
              problems rather than managing toolchains.
            </p>
            <p className="text-lg 2xl:text-xl font-medium text-blue-lbg">
              Write code, save, it's running.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Execution;
