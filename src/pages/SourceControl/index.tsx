import React from "react";

const SourceControl: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Source Control Reimagined
          </h1>
          <div className="w-28 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl 2xl:text-2xl text-gray-600 mt-6 max-w-4xl 2xl:max-w-5xl mx-auto">
            Darklang's source control is built into the platform. No files, no
            nasty merge conflicts, no external versioning — just immutable,
            content-addressable code that never gets lost.
          </p>
        </div>

        {/* Core Concept */}
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
                  <circle cx="18" cy="18" r="3"></circle>
                  <circle cx="6" cy="6" r="3"></circle>
                  <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                  <line x1="6" y1="9" x2="6" y2="21"></line>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-purple-dbg">
                Code as Immutable Data, Not Mutable Text
              </h2>
            </div>
            <p className="text-gray-700 2xl:text-lg leading-relaxed mb-4">
              Traditional source control treats your codebase as a "bag of
              mutable text files." Darklang treats code as immutable data
              structures where every function, type, and module gets a
              content-based address. Changes create new versions while
              preserving all previous ones.
            </p>
            <p className="text-gray-700 2xl:text-lg leading-relaxed">
              <strong>The result:</strong> Source control that understands your
              code's meaning, eliminating merge conflicts, enabling perfect
              caching, and providing deep insight into dependencies and test
              coverage.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            How It Works
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-lbg rounded-lg flex items-center justify-center mb-4">
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
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Semantic Storage
              </h3>
              <p className="text-sm 2xl:text-base text-gray-600">
                Code is stored as compiled ASTs, not text. Only semantic changes
                matter—formatting and whitespace never cause conflicts.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-purple-lbg rounded-lg flex items-center justify-center mb-4">
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
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Function-Level Tracking
              </h3>
              <p className="text-sm 2xl:text-base text-gray-600">
                Changes are tracked at the function level, not file level. Know
                exactly what changed and what depends on it.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-mint rounded-lg flex items-center justify-center mb-4">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Impact Analysis
              </h3>
              <p className="text-sm 2xl:text-base text-gray-600">
                See exactly what depends on your changes and what tests need to
                run. No surprises, no broken deployments.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-taupe rounded-lg flex items-center justify-center mb-4">
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
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Gradual Migration
              </h3>
              <p className="text-sm 2xl:text-base text-gray-600">
                Use old and new versions side-by-side. Pin specific calls to old
                versions while you migrate at your own pace.
              </p>
            </div>
          </div>
        </div>

        {/* Deep Knowledge Benefits */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Deep Knowledge of Your Codebase
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 2xl:text-lg">
            Because Darklang stores code as semantic data structures, it has
            intimate knowledge of dependencies, test coverage, performance
            characteristics, and usage patterns that traditional file-based
            systems can never achieve.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <h4 className="font-semibold text-gray-800 2xl:text-lg">
                    Precise Dependency Tracking
                  </h4>
                  <p className="text-sm 2xl:text-base text-gray-600">
                    Know exactly which functions depend on your changes, down to
                    specific parameters and return types.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-purple-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <h4 className="font-semibold text-gray-800 2xl:text-lg">
                    Comprehensive Test Coverage
                  </h4>
                  <p className="text-sm 2xl:text-base text-gray-600">
                    See which tests exercise your code and which edge cases
                    remain untested, with perfect accuracy.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-mint rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <h4 className="font-semibold text-gray-800 2xl:text-lg">
                    Usage Analytics
                  </h4>
                  <p className="text-sm 2xl:text-base text-gray-600">
                    Understand how your functions are actually used in
                    production, enabling data-driven optimization.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-taupe rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <h4 className="font-semibold text-gray-800 2xl:text-lg">
                    Performance Profiling
                  </h4>
                  <p className="text-sm 2xl:text-base text-gray-600">
                    Track performance metrics at the function level, with
                    historical data tied to specific versions.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-rose rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <h4 className="font-semibold text-gray-800 2xl:text-lg">
                    Safe Refactoring
                  </h4>
                  <p className="text-sm 2xl:text-base text-gray-600">
                    Rename, restructure, and optimize with confidence—the system
                    knows what will break and what won't.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>
                  <h4 className="font-semibold text-gray-800 2xl:text-lg">
                    Perfect Caching
                  </h4>
                  <p className="text-sm 2xl:text-base text-gray-600">
                    Compilation and test results cached by content hash—if it
                    hasn't changed semantically, don't rebuild it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="border-l-4 border-blue-lbg pl-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              No Spurious Merge Conflicts
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Semantic storage eliminates conflicts from formatting, import
              order, or whitespace. Only real semantic conflicts matter.
            </p>
          </div>

          <div className="border-l-4 border-purple-lbg pl-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Diamond Dependencies Solved
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Hash-based dependencies eliminate version conflicts—multiple
              versions coexist without interference.
            </p>
          </div>
        </div>

        {/* Why Text-Based Version Control is Broken */}
        <div className="bg-rust/3 rounded-lg p-8 mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Traditional Version Control Holds Us Back
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 2xl:text-lg">The Problems</h3>
              <div className="space-y-3 text-sm 2xl:text-base text-gray-600">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-rust rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Semantic blindness:</strong> Can't tell meaningful
                    changes from cosmetic ones
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-rust rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Constant broken states:</strong> Codebases regularly
                    don't compile during development
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-rust rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Unnecessary rebuilds:</strong> Whitespace changes
                    trigger full recompilation
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-rust rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Tooling fragmentation:</strong> Every tool reparses
                    the same code differently
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3">
                Darklang's Approach
              </h3>
              <div className="space-y-3 text-sm 2xl:text-base text-gray-600">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-mint rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Semantic understanding:</strong> Only real changes
                    trigger downstream effects
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-mint rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Always valid state:</strong> Well-typed
                    transformations maintain semantic integrity
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-mint rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Perfect caching:</strong> Compilation and test
                    results cached by content hash
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-mint rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Unified tooling:</strong> One semantic
                    representation for all tools
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* File-Based Option */}
        <div className="bg-gray-50 rounded-lg p-6 mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Traditional Git Integration Available
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 2xl:text-lg">
            While Darklang's content-addressable source control is our primary
            focus, we also support exporting to{" "}
            <code className="bg-gray-200 px-2 py-1 rounded text-sm 2xl:text-base">.dark</code>{" "}
            files that work with traditional Git workflows. This provides a
            bridge for teams transitioning from file-based version control or
            integrating with existing CI/CD pipelines.
          </p>
          <p className="text-sm 2xl:text-base text-gray-600">
            <strong>Note:</strong> File-based workflows lose many of the
            benefits of semantic source control—like perfect incremental
            compilation and conflict-free refactoring—but they're available when
            needed for compatibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SourceControl;
