import React from "react";
import EarlyContentDisclaimer from "../../components/EarlyContentDisclaimer";
import RelatedForPages from "../../components/RelatedForPages";
import { Code, Contrast, FeatureCard } from "./components";

const WebDevelopers: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl 2xl:max-w-7xl mx-auto">
        <EarlyContentDisclaimer />
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Darklang for Web Developers
          </h1>
          <div className="w-32 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-4xl mx-auto">
            Skip the backend complexity. Build your web app's API in minutes,
            not days.
          </p>
        </div>

        {/* Problem and Solution Sections */}
        <div className="mb-16">
          <Contrast
            before={[
              "Setting up Express.js, configuring middleware, handling CORS",
              "Installing and configuring a database (PostgreSQL, MongoDB setup)",
              "Writing Prisma schemas, Mongoose models, or raw SQL",
              "Configuring Docker, setting up deployment pipelines",
              "Debugging authentication middleware and session management",
            ]}
            after={[
              <>
                <strong className="text-gray-900">Define API endpoint:</strong>{" "}
                <Code>/api/users</Code>, instantly live
              </>,
              <>
                <strong className="text-gray-900">Store data:</strong>{" "}
                <Code>DB.set users id userData</Code>, database included
              </>,
              <>
                <strong className="text-gray-900">Call external APIs:</strong>{" "}
                <Code>Http.get "https://api.github.com/users"</Code>
              </>,
              <>
                <strong className="text-gray-900">Deploy:</strong> already
                running. No Docker, no config files.
              </>,
            ]}
          />
        </div>

        {/* Perfect For */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Perfect for Web Developers Who:
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-blue-lbg mb-4">
                Build React/Vue/Angular Apps
              </h3>
              <p className="text-gray-700 mb-4">
                Focus on your frontend. Darklang handles the backend API,
                authentication, and data storage without the usual Node.js
                complexity.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Common pattern:</strong> Build your React app, use
                Darklang for
                <code className="bg-gray-200 px-1 rounded mx-1">
                  /api/*
                </code>{" "}
                endpoints.
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-purple-lbg mb-4">
                Create Prototypes Fast
              </h3>
              <p className="text-gray-700 mb-4">
                Test your ideas immediately. No time wasted on infrastructure
                setup when you need to validate a concept quickly.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Use case:</strong> Weekend hackathons, client demos,
                startup MVPs
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-mint mb-4">
                Handle Webhooks
              </h3>
              <p className="text-gray-700 mb-4">
                Receive webhooks from Stripe, GitHub, Shopify instantly. No
                ngrok needed for development, no server setup for production.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Example:</strong> <code>/webhooks/stripe</code> endpoint
                live in seconds
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-taupe mb-4">
                Build Side Projects
              </h3>
              <p className="text-gray-700 mb-4">
                Turn your frontend skills into full-stack projects without
                learning DevOps or managing servers.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Perfect for:</strong> Portfolio projects, freelance
                work, personal tools
              </div>
            </div>
          </div>
        </div>

        {/* Common Web Dev Use Cases */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Common Web Development Patterns
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <FeatureCard
              h="User Authentication API"
              tone="blue"
              detail={
                <span className="block">
                  <Code>POST /api/auth/signup</Code> create new user
                  <br />
                  <Code>POST /api/auth/login</Code> authenticate user
                  <br />
                  <Code>GET /api/user/profile</Code> get user data
                </span>
              }
            >
              Build login and signup endpoints that your frontend can call.
              Store user data, hash passwords, and manage sessions, all
              built-in.
            </FeatureCard>

            <FeatureCard
              h="Content Management"
              tone="purple"
              detail={
                <span className="block">
                  <Code>GET /api/posts</Code> list all posts
                  <br />
                  <Code>POST /api/posts</Code> create new post
                  <br />
                  <Code>PUT /api/posts/:id</Code> update existing post
                </span>
              }
            >
              Create, read, update, and delete content for your blog, portfolio,
              or CMS. No schema migrations, just start storing data.
            </FeatureCard>

            <FeatureCard
              h="Third-Party Integrations"
              tone="teal"
              detail={
                <span className="block">
                  <Code>GET /api/weather/:city</Code> fetch weather data
                  <br />
                  <Code>POST /api/payments</Code> process Stripe payments
                  <br />
                  <Code>GET /api/social/posts</Code> aggregate social feeds
                </span>
              }
            >
              Connect to external APIs (payment processors, social media,
              weather data) and serve the results to your frontend with proper
              error handling.
            </FeatureCard>
          </div>
        </div>

        {/* Framework Integration */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Works with Your Favorite Frontend
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Darklang APIs work with any frontend framework. Whether you're
              using React, Vue, Angular, Svelte, or vanilla JavaScript, just
              make HTTP requests to your Darklang endpoints.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">
                  React/Next.js
                </h3>
                <div className="text-sm text-gray-600 font-mono bg-white p-3 rounded">
                  {`fetch('/api/users')`}
                  <br />
                  {`  .then(r => r.json())`}
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Vue/Nuxt</h3>
                <div className="text-sm text-gray-600 font-mono bg-white p-3 rounded">
                  {`this.$http.get('/api/users')`}
                  <br />
                  {`  .then(response => ...)`}
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Any Framework
                </h3>
                <div className="text-sm text-gray-600 font-mono bg-white p-3 rounded">
                  {`axios.get('/api/users')`}
                  <br />
                  {`  .then(data => ...)`}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Stop Fighting Infrastructure
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p className="text-lg">
              You became a web developer to build user interfaces and create
              experiences. Don't let backend complexity slow you down.
            </p>
            <p>
              With Darklang, you can focus on what you do best—crafting great
              frontends—while having a powerful, reliable backend that just
              works.
            </p>
            <p className="text-lg font-medium text-blue-lbg">
              Build full-stack web applications at frontend speed.
            </p>
          </div>
        </div>

        {/* Related For Pages Section */}
        <RelatedForPages currentPath="web-developers" />
      </div>
    </div>
  );
};

export default WebDevelopers;
