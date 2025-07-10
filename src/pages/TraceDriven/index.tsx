import React from "react";

const TraceDriven: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Trace-Driven Development
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
        </div>

        {/* Introduction Section */}
        <div className="bg-gray-50 rounded-md p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What are Traces?
          </h2>
          <div className="text-gray-700 leading-relaxed">
            <p>
              Traces are a core feature of Darklang that enable developers to work with live request data to build and debug applications efficiently.
              Acting as an "omniscient debugger" traces provide complete visibility into the state of an application at any point in time, allowing developers
              to see exactly what data flows through their code and how it behaves without needing traditional debugging tools like print statements or external loggers.
            </p>
          </div>
        </div>

        {/* Workflow Section */}
        <div className="border-l-4 border-blue-lbg pl-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Trace-Driven Development Workflow
          </h2>
          <div className="text-gray-700 leading-relaxed">
            <p>
              Traces power Trace-Driven Development, a workflow where you start by sending requests to non-existent endpoints.
              Darklang records those traces, which you then use to write code that handles real inputs.
              This approach ensures code is developed with actual data, reducing guesswork and errors.
            </p>
          </div>
        </div>

        {/* What Traces Capture Section */}
        <div className="bg-gray-50 rounded-md p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What Traces Capture
          </h2>
          <div className="text-gray-700 leading-relaxed">
            <div className="space-y-4">
              <p className="mb-4">
                Traces are records of HTTP requests (or other events) made to a Darklang app. Whether your code runs locally or in the cloud,
                traces automatically capture inputs and intermediate values during execution for:
              </p>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <p>HTTP handlers</p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <p>Worker `emit`s</p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <p>Function calls</p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <p>CRON responses</p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <p>CLI application calls</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trace Components Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What a Trace Includes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="font-semibold text-gray-800 mb-2">Request Inputs</h3>
              <p className="text-gray-700">The full HTTP request, including headers, query parameters, body and metadata.</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="font-semibold text-gray-800 mb-2">Intermediate Values</h3>
              <p className="text-gray-700">Values computed during the execution of a handler, such as the results of expressions or function calls.</p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6 border-l-4 border-purple-lbg">
              <h3 className="font-semibold text-gray-800 mb-2">Live Values</h3>
              <p className="text-gray-700">The evaluated results of expressions for a selected trace. These update in real-time as you write code.</p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6 border-l-4 border-taupe">
              <h3 className="font-semibold text-gray-800 mb-2">Return Values</h3>
              <p className="text-gray-700">The final output of a handler</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="border-l-4 border-green-500 pl-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Storage and Benefits
          </h2>
          <div className="text-gray-700 leading-relaxed">
            <p>
              All traces are securely and centrally captured in the package manager, and made available in your editing environment.
              This approach streamlines debugging, improves accuracy, and makes refactoring safer—all by letting real data guide the development process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraceDriven;
