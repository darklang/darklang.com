import React, { useState, useEffect } from "react";
import EarlyContentDisclaimer from "../../components/EarlyContentDisclaimer";
import CodeDisplay from "../../common/ui/CodeDisplay";

const PythonDevelopers: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto">
        <EarlyContentDisclaimer />
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Darklang for Python Developers
          </h1>
          <div className="w-28 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Skip the Flask/Django setup. Build APIs and automation scripts that
            run instantly.
          </p>
        </div>

        {/* Python Pain Points */}
        <div className="py-8">
          <div className="relative inline-block mb-6 px-3 py-2">
            {/* L-shaped corner borders with animation */}
            <div
              className="absolute top-0 left-0 h-0.5 bg-rust transition-all duration-700 ease-out"
              style={{ width: isVisible ? "55px" : "0px" }}
            ></div>
            <div
              className="absolute top-0 left-0 w-0.5 bg-rust transition-all duration-700 ease-out"
              style={{ height: isVisible ? "35px" : "0px" }}
            ></div>
            <div
              className="absolute bottom-0 right-0 h-0.5 bg-rust transition-all duration-700 ease-out delay-300"
              style={{ width: isVisible ? "44px" : "0px" }}
            ></div>
            <div
              className="absolute bottom-0 right-0 w-0.5 bg-rust transition-all duration-700 ease-out delay-300"
              style={{ height: isVisible ? "35px" : "0px" }}
            ></div>

            <h2 className="text-2xl font-semibold text-rust px-4 py-2">
              Python Deployment Reality
            </h2>
          </div>
          <div className="text-gray-800 space-y-3 pl-5">
            <div className="flex items-start">
              <span className="text-rust font-bold text-lg mr-3 flex-shrink-0">
                ✕
              </span>
              <p>
                Virtual environments, requirements.txt, pip install conflicts
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-rust font-bold text-lg mr-3 flex-shrink-0">
                ✕
              </span>
              <p>
                Setting up Flask/Django, configuring WSGI, handling production
                deployment
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-rust font-bold text-lg mr-3 flex-shrink-0">
                ✕
              </span>
              <p>
                Database setup (SQLAlchemy, Django ORM), migration headaches
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-rust font-bold text-lg mr-3 flex-shrink-0">
                ✕
              </span>
              <p>Cron jobs, task queues (Celery), background workers setup</p>
            </div>
            <div className="flex items-start">
              <span className="text-rust font-bold text-lg mr-3 flex-shrink-0">
                ✕
              </span>
              <p>"It works on my machine" → deployment debugging nightmare</p>
            </div>
          </div>
        </div>

        {/* Darklang Advantage */}
        <div className="py-8 mb-10">
          <div className="relative inline-block mb-6 px-3 py-2">
            {/* L-shaped corner borders with animation */}
            <div
              className="absolute top-0 left-0 h-0.5 bg-mint transition-all duration-700 ease-out delay-500"
              style={{ width: isVisible ? "55px" : "0px" }}
            ></div>
            <div
              className="absolute top-0 left-0 w-0.5 bg-mint transition-all duration-700 ease-out delay-500"
              style={{ height: isVisible ? "35px" : "0px" }}
            ></div>
            <div
              className="absolute bottom-0 right-0 h-0.5 bg-mint transition-all duration-700 ease-out delay-800"
              style={{ width: isVisible ? "55px" : "0px" }}
            ></div>
            <div
              className="absolute bottom-0 right-0 w-0.5 bg-mint transition-all duration-700 ease-out delay-800"
              style={{ height: isVisible ? "35px" : "0px" }}
            ></div>

            <h2 className="text-2xl font-semibold text-mint px-4 py-2">
              Darklang: Python's Simplicity, Better Deployment
            </h2>
          </div>

          <div className="text-gray-800 space-y-3 pl-5">
            <div className="flex items-start">
              <span className="text-mint font-bold text-lg mr-3 flex-shrink-0">
                ✔
              </span>
              <p>
                <strong>No virtual environments:</strong> Functions are isolated
                by design
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-mint font-bold text-lg mr-3 flex-shrink-0">
                ✔
              </span>
              <p>
                <strong>No Flask setup: </strong> HTTP endpoints are first-class
                language features
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-mint font-bold text-lg mr-3 flex-shrink-0">
                ✔
              </span>
              <p>
                <strong>No ORM complexity:</strong> Built-in key-value database,
                query directly
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-mint font-bold text-lg mr-3 flex-shrink-0">
                ✔
              </span>
              <p>
                <strong>No deployment setup:</strong> Save your function, it's
                running
              </p>
            </div>
          </div>
        </div>

        {/* Perfect For Python Devs */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Perfect for Python Developers Who:
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-lbg mb-4">
                Build Data APIs
              </h3>
              <p className="text-gray-700 mb-4">
                Expose your data science work as APIs without Flask complexity.
                Process data, return JSON—no WSGI configuration needed.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Perfect for:</strong> ML model serving, data processing
                endpoints, analytics APIs
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-purple-lbg mb-4">
                Automate Everything
              </h3>
              <p className="text-gray-700 mb-4">
                Python automation with proper scheduling and error handling. No
                more cron setup or process management.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Use cases:</strong> Web scraping, data pipelines, system
                monitoring, report generation
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-mint mb-4">
                Rapid Prototyping
              </h3>
              <p className="text-gray-700 mb-4">
                Test ideas immediately. Python's readability with instant
                deployment for proof-of-concepts and experiments.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Example:</strong> Data analysis scripts that become
                shareable APIs
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-taupe mb-4">
                Integration Scripts
              </h3>
              <p className="text-gray-700 mb-4">
                Connect different services and APIs. Darklang's HTTP client
                makes external API calls as simple as Python's requests library.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Pattern:</strong> Webhook receivers, API orchestration,
                data sync
              </div>
            </div>
          </div>
        </div>

        {/* Language Comparison */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Familiar Concepts, Better Experience
          </h2>

          <div className="space-y-8 pl-1">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-rust mb-4">
                  Traditional Python
                </h3>
                <div className="px-8 py-4 font-mono text-sm overflow-x-auto bg-rust/4 rounded">
                  <CodeDisplay
                    showLineNumbers={false}
                    language="python"
                    code={`# Flask API

pip install flask
from flask import Flask, jsonify
app = Flask(__name__) 
@app.route('/api/users')
def get_users():
    # DB setup required
    return jsonify(users)
app.run()`}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-lbg mb-4">
                  Darklang
                </h3>
                <div className="px-8 py-4 font-mono text-sm overflow-x-auto bg-mint/8 rounded">
                  <CodeDisplay
                    showLineNumbers={false}
                    language="fsharp"
                    code={`// HTTP Handler

GET /api/users

let users = DB.getAll Users
users

// Already running!`}
                  />
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-lbg pl-6 mt-15">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                What You'll Love
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <p>
                    <strong>Functional programming:</strong> Immutable values,
                    pattern matching, pipeline operators
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <p>
                    <strong>Type safety:</strong> Gradual typing that doesn't
                    get in your way
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <p>
                    <strong>Error handling:</strong> No exceptions—Result and
                    Option types like Rust
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <p>
                    <strong>Readable syntax:</strong> Clean, expressive code
                    without ceremony
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Python Use Cases */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Common Python Patterns, Simplified
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-lbg mb-3">
                Web Scraping & Data Collection
              </h3>
              <p className="mb-3">
                Build scrapers that run on schedule. Store data, expose it via
                API, send alerts—all without managing cron jobs or databases.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Example:</strong> Scrape product prices daily, store in
                built-in DB, alert via webhook when prices drop.
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-lbg mb-3">
                Data Processing Pipelines
              </h3>
              <p className="mb-3">
                ETL processes that trigger on webhooks or schedule. Process CSV
                files, call APIs, transform data—background workers handle the
                heavy lifting.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Pattern:</strong> Receive webhook → emit to worker →
                process data → store results
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-lbg mb-3">
                API Integration & Orchestration
              </h3>
              <p className="mb-3">
                Connect multiple services, transform data formats, implement
                business logic. Perfect for integration projects and API
                middleware.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Use case:</strong> Sync data between CRM and accounting
                system, transform formats, handle errors gracefully.
              </div>
            </div>
          </div>
        </div>

        {/* Migration Benefits */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Python Developers Switch
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-lbg rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
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
              <h3 className="font-semibold text-gray-800 mb-2">
                Deployment Speed
              </h3>
              <p className="text-sm text-gray-600">
                From hours of setup to seconds. No Docker, no servers, no
                configuration files.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-lbg rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
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
              <h3 className="font-semibold text-gray-800 mb-2">Reliability</h3>
              <p className="text-sm text-gray-600">
                Type safety prevents runtime errors. No more "AttributeError" in
                production.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-mint rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
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
              <h3 className="font-semibold text-gray-800 mb-2">Productivity</h3>
              <p className="text-sm text-gray-600">
                Focus on logic, not infrastructure. Spend time solving problems,
                not configuring tools.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Python Philosophy, Modern Deployment
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 pl-1">
            <p className="text-lg">
              You love Python for its readability and expressiveness. But you're
              tired of deployment complexity and environment management.
            </p>
            <p>
              Darklang gives you the same development experience—clean, readable
              code that does what you expect—with the deployment simplicity
              you've always wanted.
            </p>
            <p className="text-lg font-medium text-blue-lbg">
              Write code that runs immediately, everywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonDevelopers;
