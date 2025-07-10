import React from "react";

const TypeChecking: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Type Checking in Darklang
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
        </div>

        {/* Status Section */}

        <div className="bg-gray-50 rounded-md p-4 mb-4">
          <pre className="text-sm font-mono text-gray-700 leading-relaxed">
            Runtime is done-ish Parse-time is barely there
          </pre>
        </div>

        {/* Main Content Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            Type Checking Features
          </h2>

          <div className="text-gray-700 leading-relaxed">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <p>
                  Darklang is fully statically typed with Gradual Flexibility,
                  ensuring that types are checked at compile time to catch
                  errors early. This helps developers ensure that changes across
                  large programs are safe, particularly for refactoring or
                  scaling systems
                </p>
              </div>

              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <p>
                  Unlike traditional functional languages where the entire
                  program must compile, Darklang employs gradual static typing.
                  This allows incomplete or partially typed code to run,
                  enabling developers to prototype quickly without ensuring
                  every part of the program type-checks immediately
                </p>
              </div>

              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <p>
                  Darklang uses small compilation units, meaning that type
                  checking is localized to specific parts of the program, such
                  as a single HTTP route. This reduces the scope of type changes
                  needed when prototyping or making small modifications
                </p>
              </div>

              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <p>
                  Instead of modifying existing types, developers create a copy
                  of a type, make changes, and test them. Once validated,
                  semi-automated tooling helps propagate these changes across
                  the program, minimizing the effort required for large-scale
                  type updates.
                </p>
              </div>

              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <p>
                  The language supports Option and Result types for error
                  handling, replacing nulls and exceptions to avoid common
                  pitfalls like null pointer errors
                </p>
              </div>

              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <p>
                  Types and functions in Darklang are versioned and immutable,
                  ensuring that changes don't break existing code. This is
                  particularly useful in the package manager, where types and
                  functions are individually versioned
                </p>
              </div>

              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <p>
                  When updating types, developers can test new versions without
                  affecting the entire program, and tooling assists in migrating
                  to the new type once it's finalized.
                </p>
              </div>

              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <p>
                  Future plans include implementing an at-rest/static checker to
                  perform comprehensive type checking, including preventing
                  invalid operations (e.g., adding a String and an Int). This
                  will leverage Darklang's access to trace data for advanced
                  diagnostics
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-8 h-8 bg-purple-lbg rounded-lg flex items-center justify-center mr-3">
              <svg
                className="w-5 h-5 text-white"
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
            </span>
            Benefits of Darklang's Type Checking
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="font-semibold text-gray-800 mb-2">Safety</h3>
              <p className="text-gray-700">
                Static typing ensures type mismatches are caught early, reducing
                runtime errors and making large-scale changes safer
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="font-semibold text-gray-800 mb-2">Productivity</h3>
              <p className="text-gray-700">
                Small compilation units and gradual typing allow rapid
                prototyping, akin to dynamic languages, while retaining static
                typing benefits
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6 border-l-4 border-purple-lbg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Error Handling
              </h3>
              <p className="text-gray-700">
                The Option/Result types simplify error management, eliminating
                the need for exceptions and reducing null-related bugs
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6 border-l-4 border-taupe">
              <h3 className="font-semibold text-gray-800 mb-2">
                Maintainability
              </h3>
              <p className="text-gray-700">
                Versioned types and editor integration make refactoring and
                maintaining code easier, especially in evolving projects
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg p-6 border-l-4 border-mint">
              <h3 className="font-semibold text-gray-800 mb-2">Diagnostics</h3>
              <p className="text-gray-700">
                Integration with trace data provides unique insights into
                type-related issues, improving debugging and development
                efficiency
              </p>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg p-6 border-l-4 border-blue-lbg">
              <h3 className="font-semibold text-gray-800 mb-2">Scalability</h3>
              <p className="text-gray-700">
                Versioned types and small compilation units make it easier to
                scale and refactor backends as projects grow
              </p>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <span className="w-6 h-6 bg-gray-600 rounded-lg flex items-center justify-center mr-3">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.102m-.758 4.899L7.343 7.343"
                />
              </svg>
            </span>
            Additional Resources
          </h2>
          <div className="text-gray-700">
            <p className="mb-3">For more content inspiration:</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mr-3"></span>
                <a
                  href="https://blog.darklang.com/real-problems-with-functional-languages/amp/"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Real Problems with Functional Languages
                </a>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mr-3"></span>
                <a
                  href="https://blog.darklang.com/an-overdue-status-update/"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  An Overdue Status Update
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeChecking;
