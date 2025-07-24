import React from "react";

const No: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            What Darklang Says No To
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Darklang eliminates entire categories of complexity that have become 
            accepted as "just how programming works." Here's what we leave behind 
            and why you don't need them.
          </p>
        </div>

        {/* No Cruft Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-red-500 mr-3">❌</span>
            No Development Cruft
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="font-semibold text-gray-800 mb-4">Language Complexity</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-red-700">No null:</span>
                  <span className="text-gray-600 ml-2">Use Option types for safety</span>
                </div>
                <div>
                  <span className="font-medium text-red-700">No exceptions:</span>
                  <span className="text-gray-600 ml-2">Result types make errors explicit</span>
                </div>
                <div>
                  <span className="font-medium text-red-700">No OOP/inheritance:</span>
                  <span className="text-gray-600 ml-2">Composition over complex hierarchies</span>
                </div>
                <div>
                  <span className="font-medium text-red-700">No async/await:</span>
                  <span className="text-gray-600 ml-2">Everything is async by default</span>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="font-semibold text-gray-800 mb-4">Build System Chaos</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-red-700">No build systems:</span>
                  <span className="text-gray-600 ml-2">Code is stored as compiled ASTs</span>
                </div>
                <div>
                  <span className="font-medium text-red-700">No compilation:</span>
                  <span className="text-gray-600 ml-2">Incremental compilation happens automatically</span>
                </div>
                <div>
                  <span className="font-medium text-red-700">No dev environments:</span>
                  <span className="text-gray-600 ml-2">Development is production</span>
                </div>
                <div>
                  <span className="font-medium text-red-700">No dependency hell:</span>
                  <span className="text-gray-600 ml-2">Content-addressed dependencies</span>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="font-semibold text-gray-800 mb-4">Packaging Nightmares</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-red-700">No packaging:</span>
                  <span className="text-gray-600 ml-2">Function-level distribution</span>
                </div>
                <div>
                  <span className="font-medium text-red-700">No ORMs:</span>
                  <span className="text-gray-600 ml-2">Built-in type-safe database</span>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="font-semibold text-gray-800 mb-4">Version Control Complexity</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-red-700">No git:</span>
                  <span className="text-gray-600 ml-2">Content-addressable source control</span>
                </div>
                <div>
                  <span className="font-medium text-red-700">No GitHub workflows:</span>
                  <span className="text-gray-600 ml-2">Built-in collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* No DevOps Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-orange-500 mr-3">🚫</span>
            No DevOps Complexity
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
              <h3 className="font-semibold text-gray-800 mb-4">Configuration Hell</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-orange-700">No YAML:</span>
                  <span className="text-gray-600 ml-2">Configuration is code</span>
                </div>
                <div>
                  <span className="font-medium text-orange-700">No config files:</span>
                  <span className="text-gray-600 ml-2">Sensible defaults, no setup</span>
                </div>
                <div>
                  <span className="font-medium text-orange-700">No environment variables:</span>
                  <span className="text-gray-600 ml-2">Type-safe configuration</span>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
              <h3 className="font-semibold text-gray-800 mb-4">Container Complexity</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-orange-700">No Docker:</span>
                  <span className="text-gray-600 ml-2">Runtime is the deployment unit</span>
                </div>
                <div>
                  <span className="font-medium text-orange-700">No containers:</span>
                  <span className="text-gray-600 ml-2">Language runtime provides isolation</span>
                </div>
                <div>
                  <span className="font-medium text-orange-700">No Kubernetes:</span>
                  <span className="text-gray-600 ml-2">Platform handles orchestration</span>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
              <h3 className="font-semibold text-gray-800 mb-4">Pipeline Overhead</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-orange-700">No CI/CD pipelines:</span>
                  <span className="text-gray-600 ml-2">Save code, it's deployed</span>
                </div>
                <div>
                  <span className="font-medium text-orange-700">No Terraform:</span>
                  <span className="text-gray-600 ml-2">Infrastructure is implicit</span>
                </div>
                <div>
                  <span className="font-medium text-orange-700">No orchestration:</span>
                  <span className="text-gray-600 ml-2">Platform manages everything</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* No Infrastructure Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-purple-500 mr-3">⛔</span>
            No Infrastructure Management
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="font-semibold text-gray-800 mb-4">Database Complexity</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-purple-700">No SQL/NoSQL:</span>
                  <span className="text-gray-600 ml-2">Built-in type-safe datastore</span>
                </div>
                <div>
                  <span className="font-medium text-purple-700">No connection pooling:</span>
                  <span className="text-gray-600 ml-2">Platform handles connections</span>
                </div>
                <div>
                  <span className="font-medium text-purple-700">No sharding/indexes:</span>
                  <span className="text-gray-600 ml-2">Automatic optimization</span>
                </div>
                <div>
                  <span className="font-medium text-purple-700">No migrations:</span>
                  <span className="text-gray-600 ml-2">Schema evolution is seamless</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="font-semibold text-gray-800 mb-4">Server Management</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-purple-700">No servers:</span>
                  <span className="text-gray-600 ml-2">Deployless architecture</span>
                </div>
                <div>
                  <span className="font-medium text-purple-700">No serverless config:</span>
                  <span className="text-gray-600 ml-2">True serverless, no setup</span>
                </div>
                <div>
                  <span className="font-medium text-purple-700">No load balancers:</span>
                  <span className="text-gray-600 ml-2">Traffic routing is automatic</span>
                </div>
                <div>
                  <span className="font-medium text-purple-700">No networking setup:</span>
                  <span className="text-gray-600 ml-2">Connectivity just works</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="font-semibold text-gray-800 mb-4">Cloud Service Sprawl</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-purple-700">No 200 cloud services:</span>
                  <span className="text-gray-600 ml-2">Integrated platform</span>
                </div>
                <div>
                  <span className="font-medium text-purple-700">No Kafka/queues:</span>
                  <span className="text-gray-600 ml-2">Built-in event processing</span>
                </div>
                <div>
                  <span className="font-medium text-purple-700">No Memcached/Redis:</span>
                  <span className="text-gray-600 ml-2">Smart caching built-in</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="font-semibold text-gray-800 mb-4">System Administration</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-purple-700">No Unix/Linux:</span>
                  <span className="text-gray-600 ml-2">Abstracted away completely</span>
                </div>
                <div>
                  <span className="font-medium text-purple-700">No OS management:</span>
                  <span className="text-gray-600 ml-2">Platform handles everything</span>
                </div>
                <div>
                  <span className="font-medium text-purple-700">No SSH/terminal access:</span>
                  <span className="text-gray-600 ml-2">Observability through traces</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Philosophy */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Philosophy Behind "No"</h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-lg">
              Every "no" represents a conscious choice to eliminate accidental complexity.
            </p>
            <p>
              These aren't limitations—they're liberations. When you don't need to think about 
              YAML files, Docker containers, or database connection pooling, you can focus on 
              what actually matters: building your product and serving your users.
            </p>
            <p>
              <strong>The result:</strong> You write functions. Darklang handles everything else.
            </p>
            <div className="mt-6 p-4 bg-blue-100 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Read more:</strong> Our founders wrote about 
                <a 
                  href="https://blog.darklang.com/first-steps-of-darklang-inc/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-900 ml-1"
                >
                  eliminating the "layers of accidental complexity" in backend development
                </a>.
              </p>
            </div>
          </div>
        </div>

        {/* What You Get Instead */}
        <div className="bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-green-500 mr-3">✅</span>
            What You Get Instead
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Instant Deployment</h3>
              <p className="text-sm text-gray-600">
                Write a function, save it, and it's running in production. No build steps, 
                no containers, no configuration.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Type Safety</h3>
              <p className="text-sm text-gray-600">
                Gradual static typing with no null values or exceptions. 
                Errors are explicit and handled at compile time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Full Observability</h3>
              <p className="text-sm text-gray-600">
                Every function call is traced. Debug with real production data. 
                No logging frameworks or monitoring setup required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default No;