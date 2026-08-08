import React from "react";
import EarlyContentDisclaimer from "../../components/EarlyContentDisclaimer";
import RelatedForPages from "../../components/RelatedForPages";
import { Contrast, FeatureCard } from "./components";
import CodeDisplay from "../../common/ui/CodeDisplay";

const PythonDevelopers: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl 2xl:max-w-7xl mx-auto">
        <EarlyContentDisclaimer />
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Darklang for Python Developers
          </h1>
          <div className="w-28 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-4xl 2xl:max-w-5xl mx-auto">
            Skip the Flask/Django setup. Build APIs and automation scripts that
            run instantly.
          </p>
        </div>

        {/* Python Pain Points and Darklang Advantage */}
        <div className="mb-16">
          <Contrast
            beforeTitle="Python Deployment Reality"
            afterTitle="Darklang: Python's Simplicity, Better Deployment"
            before={[
              "Virtual environments, requirements.txt, pip install conflicts",
              "Setting up Flask/Django, configuring WSGI, handling production deployment",
              "Database setup (SQLAlchemy, Django ORM), migration headaches",
              "Cron jobs, task queues (Celery), background workers setup",
              '"It works on my machine" → deployment debugging nightmare',
            ]}
            after={[
              <>
                <strong>No virtual environments:</strong> Functions are isolated
                by design
              </>,
              <>
                <strong>No Flask setup: </strong> HTTP endpoints are first-class
                language features
              </>,
              <>
                <strong>No ORM complexity:</strong> Built-in key-value database,
                query directly
              </>,
              <>
                <strong>No deployment setup:</strong> Save your function, it's
                running
              </>,
            ]}
          />
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

            <FeatureCard
              h="What You'll Love"
              tone="blue"
              detail={
                <span className="block">
                  <strong className="text-gray-900">
                    Functional programming:
                  </strong>{" "}
                  immutable values, pattern matching, pipeline operators
                  <br />
                  <strong className="text-gray-900">Type safety:</strong>{" "}
                  gradual typing that doesn&rsquo;t get in your way
                  <br />
                  <strong className="text-gray-900">Error handling:</strong> no
                  exceptions, Result and Option types like Rust
                  <br />
                  <strong className="text-gray-900">
                    Readable syntax:
                  </strong>{" "}
                  clean, expressive code without ceremony
                </span>
              }
            >
              What Python developers tend to notice first when they move over.
            </FeatureCard>
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

        {/* Related For Pages Section */}
        <RelatedForPages currentPath="python-developers" />
      </div>
    </div>
  );
};

export default PythonDevelopers;
