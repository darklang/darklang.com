import React from "react";

const TypeChecking: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Gradual Static Typing and Checks
          </h1>
          <div className="w-28 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl 2xl:text-2xl text-gray-600 mt-6 max-w-4xl 2xl:max-w-5xl mx-auto">
            Beyond type checking: Darklang continuously analyzes your code at
            parse-time, at-rest, and runtime for types, security, performance,
            and code quality.
          </p>
        </div>

        {/* Three Kinds of Checking */}
        <div className=" rounded-lg p-8 2xl:p-1 mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Three Layers of Analysis
          </h2>
          <p className="text-gray-700 2xl:text-lg leading-relaxed mb-6">
            Darklang analyzes your code continuously at three different stages,
            catching different types of issues and providing insights that
            traditional tools miss.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-taupe/8 p-4 rounded-lg border-l-4 border-taupe">
              <div className="font-semibold text-yellow-800 mb-2">
                🚀 Parse-Time
              </div>
              <div className="text-sm 2xl:text-base text-gray-900 mb-2">
                Syntax, names, basic types
              </div>
              <div className="text-xs md:text-sm 2xl:text-base text-gray-800">
                Status: Parse/name resolution ready, types coming
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
              <div className="font-semibold text-gray-700 mb-2">🔍 At-Rest</div>
              <div className="text-sm 2xl:text-base text-gray-600 mb-2">
                Tests, security, code quality
              </div>
              <div className="text-xs md:text-sm 2xl:text-base text-gray-500">
                Status: Planned for future
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-lbg">
              <div className="font-semibold text-purple-lbg mb-2">
                ⚡ Runtime
              </div>
              <div className="text-sm 2xl:text-base text-gray-900 mb-2">
                Complete type validation
              </div>
              <div className="text-xs md:text-sm 2xl:text-base text-gray-800">
                Status: Production ready
              </div>
            </div>
          </div>
        </div>

        {/* Analysis Details with Minimalist Style */}
        <div className="mb-20 space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Three Stages of Analysis
          </h2>

          {/* Parse-Time */}
          <div className="border border-gray-200 rounded-md p-6 hover:border-taupe transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                Parse-Time Checking
              </h3>
              <span className="text-xs md:text-sm 2xl:text-base font-medium py-1 px-3 bg-taupe/10 text-taupe rounded-full">
                As You Type
              </span>
            </div>
            <p className="text-gray-700 2xl:text-lg mb-6">
              As you type, Darklang immediately validates syntax and resolves
              function names. This catches basic errors before you even run your
              code, providing instant feedback in the editor.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                <div className="font-medium text-gray-900 mb-2 flex items-center">
                  <span className="mr-2 text-taupe">✓</span>
                  Syntax errors
                </div>
                <p className="text-sm 2xl:text-base text-gray-600">
                  Invalid syntax caught immediately
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                <div className="font-medium text-gray-900 mb-2 flex items-center">
                  <span className="mr-2 text-taupe">✓</span>
                  Name resolution
                </div>
                <p className="text-sm 2xl:text-base text-gray-600">
                  Unknown functions and variables
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                <div className="font-medium text-gray-900 mb-2 flex items-center">
                  <span className="mr-2 text-taupe">✓</span>
                  Type checking
                </div>
                <p className="text-sm 2xl:text-base text-gray-600">
                  Full static analysis (coming soon)
                </p>
              </div>
            </div>

            <div className="border-l-3 border-taupe pl-4 py-2">
              <div className="text-sm 2xl:text-base font-medium text-taupe mb-1">
                Example:
              </div>
              <p className="text-sm 2xl:text-base text-gray-700">
                Calling{" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded text-red-500">
                  unknownFunction()
                </code>{" "}
                shows an error instantly— but you can often fix it by creating
                that function.{" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded text-green-600">
                  String.length
                </code>{" "}
                gets proper autocomplete and validation.
              </p>
            </div>

            <div className="mt-4 font-mono text-sm 2xl:text-base bg-gray-50 p-4 rounded-md border border-gray-200 overflow-x-auto">
              <div className="text-gray-500">// Invalid function call</div>
              <div>
                let result ={" "}
                <span className="text-red-500 underline decoration-wavy decoration-red-500">
                  unknownFunction()
                </span>
              </div>
              <div className="mt-2 text-gray-500">// Valid function call</div>
              <div>
                <p className="2xl:text-lg">
                  let length = String.
                  <span className="text-purple-lbg">length("hello")</span>
                </p>
              </div>
            </div>
          </div>

          {/* At-Rest */}
          <div className="border border-gray-200 rounded-md p-6 hover:border-gray-400 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                At-Rest Analysis
              </h3>
              <span className="text-xs md:text-sm 2xl:text-base font-medium py-1 px-3 bg-gray-100 text-gray-600 rounded-full">
                Background
              </span>
            </div>
            <p className="text-gray-700 mb-6 2xl:text-lg">
              Planned continuous background analysis of your entire codebase
              while you're not actively coding. This will identify security
              vulnerabilities, suggest performance optimizations, find duplicate
              code, and ensure comprehensive test coverage—like having a
              tireless code review assistant working 24/7.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                <div className="font-medium text-gray-900 mb-2 flex items-center">
                  <span className="mr-2 text-gray-500">✓</span>
                  Test coverage
                </div>
                <p className="text-sm 2xl:text-base text-gray-600">
                  Which code paths lack tests
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                <div className="font-medium text-gray-900 mb-2 flex items-center">
                  <span className="mr-2 text-gray-500">✓</span>
                  Security analysis
                </div>
                <p className="text-sm 2xl:text-base text-gray-600">
                  Potential vulnerabilities
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                <div className="font-medium text-gray-900 mb-2 flex items-center">
                  <span className="mr-2 text-gray-500">✓</span>
                  Code quality
                </div>
                <p className="text-sm 2xl:text-base text-gray-600">
                  Duplicates, unused code, guidelines
                </p>
              </div>
            </div>

            <div className="border-l-3 border-gray-400 pl-4 py-2">
              <div className="text-sm 2xl:text-base font-medium text-gray-600 mb-1">
                Vision:
              </div>
              <p className="text-sm 2xl:text-base text-gray-700">
                Wake up to notifications like "Found 3 duplicate functions that
                could be merged" or "New security best practice affects 5 of
                your endpoints."
              </p>
            </div>
          </div>

          {/* Runtime */}
          <div className="border border-gray-200 rounded-md p-6 hover:border-purple-lbg transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                Runtime Type Checking
              </h3>
              <span className="text-xs md:text-sm 2xl:text-base font-medium py-1 px-3 bg-purple-50 text-purple-lbg rounded-full">
                During Execution
              </span>
            </div>
            <p className="text-gray-700 mb-6 2xl:text-lg">
              When your code executes, every value is validated against its
              expected type with comprehensive checking. This catches type
              mismatches that static analysis might miss, especially with
              dynamic data from APIs or user input. Darklang uses Option and
              Result types to eliminate null pointer exceptions entirely.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                <div className="font-medium text-gray-900 mb-2 flex items-center">
                  <span className="mr-2 text-purple-lbg">✓</span>
                  Function parameters
                </div>
                <p className="text-sm 2xl:text-base text-gray-600">
                  Type-checked on every call
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                <div className="font-medium text-gray-900 mb-2 flex items-center">
                  <span className="mr-2 text-purple-lbg">✓</span>
                  Collection types
                </div>
                <p className="text-sm 2xl:text-base text-gray-600">
                  Element type enforcement
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                <div className="font-medium text-gray-900 mb-2 flex items-center">
                  <span className="mr-2 text-purple-lbg">✓</span>
                  Option/Result
                </div>
                <p className="text-sm 2xl:text-base text-gray-600">
                  Safe handling of missing/failed values
                </p>
              </div>
            </div>

            <div className="border-l-3 border-purple-lbg pl-4 py-2">
              <div className="text-sm 2xl:text-base font-medium text-purple-lbg mb-1">
                Example:
              </div>
              <p className="text-sm 2xl:text-base text-gray-700">
                API returns unexpected{" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded">Int64</code>{" "}
                where you expected{" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded">String</code>?
                Get a clear error with the exact value received: "Expected
                String, got Int64 (value: 42)."
              </p>
            </div>

            <div className="mt-4 font-mono text-sm 2xl:text-base bg-gray-50 p-4 rounded-md border border-gray-200 overflow-x-auto">
              <div className="text-gray-500">
                // Function expecting a string
              </div>
              <div>let formatName(name: String) : String</div>
              <div className="ml-2">name.toUpperCase()</div>
              <div className="mt-2 text-gray-500">
                // API returns an Int64 instead of String
              </div>
              <div>let userData = fetchUserData()</div>
              <div>
                formatName
                <span className="text-red-500 underline decoration-wavy decoration-red-500">
                  {" "} userData.id
                </span>
                {" "} <span className="text-gray-500">{"// Error at runtime"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits of Gradual Approach */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Benefits of Gradual Typing
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg 2xl:text-xl font-bold text-blue-dbg mb-4 flex items-center">
                <div className="h-6 border-2 border-l border-blue-lbg rounded-md mr-3"></div>
                Evolving Types Safely
              </h3>
              <p className="text-gray-700 2xl:text-lg leading-relaxed mb-4">
                Traditional languages make changing types painful. Darklang's
                versioned types let you evolve data structures without breaking
                existing code.
              </p>
              <div className="space-y-2 text-sm 2xl:text-base text-gray-600 border-l-2 border-gray-200 pl-4">
                <div className="flex items-center">
                  - Copy and modify types instead of changing originals
                </div>
                <div className="flex items-center">
                  - Test new types in isolation
                </div>
                <div className="flex items-center">
                  - Migrate gradually with tooling assistance
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg 2xl:text-xl font-bold text-taupe mb-4 flex items-center">
                <span className="h-6 border-2 border-l border-taupe rounded-md mr-3"></span>
                Production-Informed Types
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 2xl:text-lg">
                Through trace data, see what types your functions actually
                receive in production, enabling data-driven type refinement.
              </p>
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200 text-sm 2xl:text-base space-y-3">
                <div>
                  <span className="font-medium text-gray-900">
                    Your API expects:
                  </span>{" "}
                  <code className="bg-white px-2 py-1 rounded border border-gray-200">{`{name: String, age: Int64}`}</code>
                </div>
                <div>
                  <span className="font-medium text-gray-900">
                    But 15% of requests send:
                  </span>{" "}
                  <code className="bg-white px-2 py-1 rounded border border-gray-200">{`{name: String, age: String}`}</code>
                </div>
                <div className="text-blue-lbg flex items-center font-medium">
                  <span className="text-blue-lbg mr-1d">💡</span>
                  Consider making age more flexible or adding validation
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Best of Both Worlds
          </h2>
          <div className="text-gray-700 2xl:text-lg leading-relaxed space-y-4">
            <p>
              Most developers have experienced both extremes: fighting with
              rigid type systems that block experimentation, and debugging
              runtime errors from untyped code in production.
            </p>
            <p className="text-lg font-medium text-blue-lbg">
              Darklang's gradual approach lets you prototype fast and scale
              safely— start messy, refine as you learn, with safety nets that
              grow stronger over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeChecking;
