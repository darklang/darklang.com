import React from "react";

const TypeChecking: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Gradual Static Typing and Checks
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Beyond type checking: Darklang continuously analyzes your code at
            parse-time, at-rest, and runtime for types, security, performance,
            and code quality.
          </p>
        </div>

        {/* Three Kinds of Checking */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Three Layers of Analysis
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Darklang analyzes your code continuously at three different stages,
            catching different types of issues and providing insights that
            traditional tools miss.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <div className="font-semibold text-yellow-800 mb-2">
                🔧 Parse-Time
              </div>
              <div className="text-sm text-yellow-700 mb-2">
                Syntax, names, basic types
              </div>
              <div className="text-xs text-yellow-600">
                Status: Parse/name resolution ready, types coming
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
              <div className="font-semibold text-gray-700 mb-2">📊 At-Rest</div>
              <div className="text-sm text-gray-600 mb-2">
                Tests, security, code quality
              </div>
              <div className="text-xs text-gray-500">
                Status: Planned for future
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <div className="font-semibold text-green-800 mb-2">
                ⚡ Runtime
              </div>
              <div className="text-sm text-green-700 mb-2">
                Complete type validation
              </div>
              <div className="text-xs text-green-600">
                Status: Production ready
              </div>
            </div>
          </div>
        </div>

        {/* Analysis Details */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Three Stages of Analysis
          </h2>
          <div className="space-y-8">
            {/* Parse-Time */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Parse-Time Checking
              </h3>
              <p className="text-gray-700 mb-4">
                As you type, Darklang immediately validates syntax and resolves
                function names. This catches basic errors before you even run
                your code, providing instant feedback in the editor.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Syntax errors:</strong> Invalid syntax caught
                  immediately ✅
                </div>
                <div>
                  <strong>Name resolution:</strong> Unknown functions and
                  variables ✅
                </div>
                <div>
                  <strong>Type checking:</strong> Full static analysis (coming
                  soon)
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded text-sm text-gray-600">
                <strong>Example:</strong> Calling <code>unknownFunction()</code>{" "}
                shows an error instantly— but you can often fix it by creating
                that function. <code>String.length</code> gets proper
                autocomplete and validation.
              </div>
            </div>

            {/* At-Rest */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                At-Rest Analysis
              </h3>
              <p className="text-gray-700 mb-4">
                Planned continuous background analysis of your entire codebase
                while you're not actively coding. This will identify security
                vulnerabilities, suggest performance optimizations, find
                duplicate code, and ensure comprehensive test coverage—like
                having a tireless code review assistant working 24/7.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div>
                  <strong>Test coverage:</strong> Which code paths lack tests
                </div>
                <div>
                  <strong>Security analysis:</strong> Potential vulnerabilities
                </div>
                <div>
                  <strong>Code quality:</strong> Duplicates, unused code,
                  guidelines
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded text-sm text-gray-600">
                <strong>Vision:</strong> Wake up to notifications like "Found 3
                duplicate functions that could be merged" or "New security best
                practice affects 5 of your endpoints."
              </div>
            </div>

            {/* Runtime */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Runtime Type Checking
              </h3>
              <p className="text-gray-700 mb-4">
                When your code executes, every value is validated against its
                expected type with comprehensive checking. This catches type
                mismatches that static analysis might miss, especially with
                dynamic data from APIs or user input. Darklang uses Option and
                Result types to eliminate null pointer exceptions entirely.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Function parameters:</strong> Type-checked on every
                  call
                </div>
                <div>
                  <strong>Collection types:</strong> Element type enforcement
                </div>
                <div>
                  <strong>Option/Result:</strong> Safe handling of
                  missing/failed values
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded text-sm text-gray-600">
                <strong>Example:</strong> API returns unexpected{" "}
                <code>Int64</code> where you expected <code>String</code>? Get a
                clear error with the exact value received: "Expected String, got
                Int64 (value: 42)."
              </div>
            </div>
          </div>
        </div>

        {/* Benefits of Gradual Approach */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Benefits of Gradual Typing
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Evolving Types Safely
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Traditional languages make changing types painful. Darklang's
                versioned types let you evolve data structures without breaking
                existing code.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Copy and modify types instead of changing originals</div>
                <div>• Test new types in isolation</div>
                <div>• Migrate gradually with tooling assistance</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Production-Informed Types
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Through trace data, see what types your functions actually
                receive in production, enabling data-driven type refinement.
              </p>
              <div className="bg-gray-50 p-4 rounded text-sm space-y-2">
                <div>
                  <strong>Your API expects:</strong>{" "}
                  <code>{`{name: String, age: Int64}`}</code>
                </div>
                <div>
                  <strong>But 15% of requests send:</strong>{" "}
                  <code>{`{name: String, age: String}`}</code>
                </div>
                <div className="text-xs text-blue-600">
                  💡 Consider making age more flexible or adding validation
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="border-l-4 border-blue-lbg pl-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The Best of Both Worlds
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
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
