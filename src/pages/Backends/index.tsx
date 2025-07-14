import React from "react";

const Backends: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Backend Features
          </h1>
          <div className="w-24 h-1 bg-purple-lbg mx-auto rounded-full"></div>
        </div>

        {/* Status Section */}
        <div className="bg-gray-50 rounded-md p-6 mb-12">
          <p className="text-sm font-mono text-gray-700 leading-relaxed">
            talk about features http handlers CRONs workers etc. talk about our
            cloud offerings reference things in dark-classic talk about eventual
            migration from -classic to -next
          </p>
        </div>

        {/* Introduction */}
        <div className="border-l-4 border-purple-lbg pl-6 mb-12">
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p className="text-lg">
              Darklang is a programming language and platform designed to
              simplify backend development by removing much of the complexity
              associated with traditional backend infrastructure. Its backend
              features are tightly integrated into a single environment, and
              built to streamline the creation of cloud-native applications
              without managing infrastructure, deployments, or containers.
            </p>

            <p>
              Darklang's backend features—HTTP handlers, scheduled jobs (CRONs),
              background workers, and datastores are designed for rapid
              development and prototyping, with a focus on simplicity and
              instant deployment.
            </p>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Datastores */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-blue-lbg mb-4">Datastores</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-sm">
                  Datastores in Darklang are key-value stores used for
                  persistent data storage, integrated seamlessly with handlers
                  and workers.
                </p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-sm">
                  when you set up a database in dark, you just add the database,
                  like you click a button or a keyboard shortcut, no requiring a
                  server from somewhere to put it on, no going to another
                  server, no config, no orm it is written in the same language
                  as the rest of your code
                </p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-sm">
                  when you make a query, you query in the dark
                </p>
              </div>
            </div>
          </div>

          {/* HTTP Handlers */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-purple-lbg mb-4">
              HTTP Handlers
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-purple-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-sm">
                  HTTP handlers in Darklang are the core mechanism for handling
                  incoming HTTP requests, serving as the entry point for API
                  endpoints and web applications.
                </p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-purple-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-sm">
                  when setting up a HTTP request you're not setting up a HTTP
                  server, you're just add an end point that is directly
                  connected to the code and you write them in the same place.
                  There's no spinning up servers
                </p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-purple-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-sm">
                  Darklang is designed for interacting with 3rd party APIs over
                  HTTP. The `HttpClient` module has a set of functions for
                  calling out to other HTTP services and APIs
                </p>
              </div>
            </div>
          </div>

          {/* Scheduled Jobs */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-mint mb-4">Scheduled Jobs</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-mint rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-sm">
                  CRON jobs in Darklang are scheduled tasks that run on a
                  predefined schedule, similar to Unix cron, ideal for periodic
                  tasks like report generation or data cleanup.
                </p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-mint rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-sm">
                  Crons run automatically once per interval
                </p>
              </div>
            </div>
          </div>

          {/* Background Workers */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-taupe mb-4">
              Background Workers
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-taupe rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p className="text-sm">
                  Workers in Darklang handle asynchronous background tasks,
                  processing messages from a queue, making them ideal for tasks
                  like API calls, batch processing, or report generation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Database Operations */}
        <div className="border-l-4 border-blue-lbg pl-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Database Operations
          </h2>
          <div className="text-gray-700 leading-relaxed">
            <p className="mb-4">talk about operations?</p>
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <p>- (DB.set, DB.get...)</p>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <p>- (DB.query...)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Worker Implementation */}
        <div className="border-l-4 border-taupe pl-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Worker Implementation Details
          </h2>
          <div className="text-gray-700 leading-relaxed">
            <p className="mb-4">
              Darklang supports doing work asynchronously outside the context of
              an HTTP handler using a **Worker**. Each worker has a queue of
              messages, which are processed loosely in-order, executing the code
              within the Worker once for each message. Messages are created by
              calling `emit` from any other code, and can contain arbitrary
              event data.
            </p>
            <p>ADD Example use case?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backends;
