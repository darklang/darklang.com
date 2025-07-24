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
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Everything you need to build complete backend applications—HTTP endpoints, 
            databases, scheduled jobs, and background workers—all in one integrated platform.
          </p>
        </div>

        {/* Core Philosophy */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Darklang Backend Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Darklang Classic proved that backend development doesn't need to be complex. 
            Since 2019, developers used it to build APIs, internal tools, Slack bots, 
            CRUD apps, and webhooks—all without managing infrastructure, servers, or deployments.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Now Darklang brings those same powerful backend features to the modern era, 
            with the flexibility to run locally for development or deploy to the cloud 
            (ours or your own instance).
          </p>
        </div>

        {/* Core Backend Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Core Backend Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* HTTP Handlers */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-lbg rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">HTTP Handlers</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Create REST APIs and webhooks instantly.
                No server setup, no arduous routing configuration.
                Just define an endpoint and start handling requests.
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm text-gray-600">
                  <strong>Example:</strong> Set up <code>/api/users</code> and immediately 
                  start receiving and processing HTTP requests with full access to 
                  headers, body, and query parameters.
                </p>
              </div>
            </div>

            {/* Datastores */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-lbg rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Integrated Datastores</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Built-in key-value databases that require zero configuration. No separate 
                database servers, no ORMs—just store and query data directly in your code.
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm text-gray-600">
                  <strong>Operations:</strong> <code>DB.set</code>, <code>DB.get</code>, 
                  <code>DB.query</code>, <code>DB.delete</code>—all in the same language 
                  as your application logic.
                </p>
              </div>
            </div>

            {/* Scheduled Jobs (CRONs) */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-mint rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Scheduled Jobs (CRONs)</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Run tasks on a schedule without external cron services. Perfect for 
                data cleanup, report generation, API synchronization, and maintenance tasks.
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm text-gray-600">
                  <strong>Use cases:</strong> Daily reports, data backups, cleanup tasks, 
                  API polling, sending scheduled emails.
                </p>
              </div>
            </div>

            {/* Background Workers */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-taupe rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Background Workers</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Process tasks asynchronously with message queues. Emit events from 
                anywhere in your code and handle them in dedicated worker processes.
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm text-gray-600">
                  <strong>Pattern:</strong> Call <code>emit</code> from HTTP handlers 
                  to queue work. Workers process messages with automatic retry and 
                  error handling.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Real-World Applications */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What You Can Build</h2>
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>
              These four core features enable you to build complete backend applications. 
              Here's what Darklang Classic users built in production:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">APIs & Webhooks</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-lbg rounded-full mr-3"></span>
                    <span>REST APIs for mobile and web apps</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-lbg rounded-full mr-3"></span>
                    <span>Webhook endpoints for third-party integrations</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-lbg rounded-full mr-3"></span>
                    <span>API proxies and data transformation services</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Internal Tools & Bots</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-mint rounded-full mr-3"></span>
                    <span>Slack bots and Discord integrations</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-mint rounded-full mr-3"></span>
                    <span>Internal dashboards and admin tools</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-mint rounded-full mr-3"></span>
                    <span>Automation scripts and workflow tools</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">CRUD Applications</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-lbg rounded-full mr-3"></span>
                    <span>User management systems</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-lbg rounded-full mr-3"></span>
                    <span>Content management backends</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-lbg rounded-full mr-3"></span>
                    <span>Inventory and tracking systems</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Data Processing</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-taupe rounded-full mr-3"></span>
                    <span>Data pipelines and ETL processes</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-taupe rounded-full mr-3"></span>
                    <span>Report generation and analytics</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-taupe rounded-full mr-3"></span>
                    <span>Data synchronization between services</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deployment Flexibility */}
        <div className="border-l-4 border-purple-lbg pl-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Run Anywhere: Local to Cloud
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Unlike Darklang Classic which only ran in our cloud, modern Darklang 
              gives you deployment flexibility while maintaining the same simple development experience.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Local Development</h3>
                <p className="text-sm text-gray-600">
                  Run your backend locally during development. Full feature parity 
                  with cloud deployment, including databases and workers.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Darklang Cloud</h3>
                <p className="text-sm text-gray-600">
                  Deploy to our managed cloud infrastructure. Zero configuration, 
                  automatic scaling, built-in monitoring.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Your Cloud</h3>
                <p className="text-sm text-gray-600">
                  Run your own instances of Darklang on bare metal servers, or any host.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* HTTP Client Integration */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Third-Party API Integration
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Darklang excels at integrating with external services. The built-in 
              <code className="bg-gray-200 px-2 py-1 rounded mx-1">HttpClient</code> module 
              makes API calls straightforward, with automatic JSON handling and 
              comprehensive error management.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">Common Integration Patterns</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-purple-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Webhook processing:</strong> Receive webhooks from services like GitHub, 
                    Stripe, or Shopify and trigger workflows
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-purple-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>API orchestration:</strong> Coordinate calls across multiple services 
                    to build composite APIs
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-purple-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Data synchronization:</strong> Keep data in sync between different 
                    systems using scheduled jobs and workers
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

export default Backends;
