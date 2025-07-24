import React from "react";
import EarlyContentDisclaimer from "../../components/EarlyContentDisclaimer";

const WebDevelopers: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <EarlyContentDisclaimer />
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Darklang for Web Developers
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Skip the backend complexity. Build your web app's API in minutes, not days.
          </p>
        </div>

        {/* Problem Statement */}
        <div className="bg-red-50 rounded-lg p-8 mb-12 border-l-4 border-red-500">
          <h2 className="text-2xl font-bold text-red-800 mb-4">Tired of This?</h2>
          <div className="text-red-700 space-y-3">
            <div className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>Setting up Express.js, configuring middleware, handling CORS</p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>Installing and configuring a database (PostgreSQL, MongoDB setup)</p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>Writing Prisma schemas, Mongoose models, or raw SQL</p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>Configuring Docker, setting up deployment pipelines</p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p>Debugging authentication middleware and session management</p>
            </div>
          </div>
        </div>

        {/* Solution */}
        <div className="bg-green-50 rounded-lg p-8 mb-12 border-l-4 border-green-500">
          <h2 className="text-2xl font-bold text-green-800 mb-4">With Darklang:</h2>
          <div className="text-green-700 space-y-3">
            <div className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p><strong>Define API endpoint:</strong> <code>/api/users</code> - instantly live</p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p><strong>Store data:</strong> <code>DB.set users id userData</code> - database included</p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p><strong>Call external APIs:</strong> <code>Http.get "https://api.github.com/users"</code></p>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <p><strong>Deploy:</strong> Already running. No Docker, no config files.</p>
            </div>
          </div>
        </div>

        {/* Perfect For */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Perfect for Web Developers Who:</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-lbg mb-4">Build React/Vue/Angular Apps</h3>
              <p className="text-gray-700 mb-4">
                Focus on your frontend. Darklang handles the backend API, authentication, 
                and data storage without the usual Node.js complexity.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Common pattern:</strong> Build your React app, use Darklang for 
                <code className="bg-gray-200 px-1 rounded mx-1">/api/*</code> endpoints.
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-purple-lbg mb-4">Create Prototypes Fast</h3>
              <p className="text-gray-700 mb-4">
                Test your ideas immediately. No time wasted on infrastructure setup 
                when you need to validate a concept quickly.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Use case:</strong> Weekend hackathons, client demos, startup MVPs
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-mint mb-4">Handle Webhooks</h3>
              <p className="text-gray-700 mb-4">
                Receive webhooks from Stripe, GitHub, Shopify instantly. No ngrok needed 
                for development, no server setup for production.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Example:</strong> <code>/webhooks/stripe</code> endpoint live in seconds
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-taupe mb-4">Build Side Projects</h3>
              <p className="text-gray-700 mb-4">
                Turn your frontend skills into full-stack projects without learning 
                DevOps or managing servers.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Perfect for:</strong> Portfolio projects, freelance work, personal tools
              </div>
            </div>
          </div>
        </div>

        {/* Common Web Dev Use Cases */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Web Development Patterns</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-lbg pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">User Authentication API</h3>
              <p className="text-gray-700 mb-4">
                Build login/signup endpoints that your frontend can call. Store user data, 
                handle password hashing, manage sessions—all built-in.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-sm text-gray-600 space-y-1">
                  <div><code>POST /api/auth/signup</code> - Create new user</div>
                  <div><code>POST /api/auth/login</code> - Authenticate user</div>
                  <div><code>GET /api/user/profile</code> - Get user data</div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-lbg pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Content Management</h3>
              <p className="text-gray-700 mb-4">
                Create, read, update, delete content for your blog, portfolio, or CMS. 
                No database schema migrations—just start storing data.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-sm text-gray-600 space-y-1">
                  <div><code>GET /api/posts</code> - List all posts</div>
                  <div><code>POST /api/posts</code> - Create new post</div>
                  <div><code>PUT /api/posts/:id</code> - Update existing post</div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-mint pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Third-Party Integrations</h3>
              <p className="text-gray-700 mb-4">
                Connect to external APIs (payment processors, social media, weather data) 
                and serve the results to your frontend with proper error handling.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-sm text-gray-600 space-y-1">
                  <div><code>GET /api/weather/:city</code> - Fetch weather data</div>
                  <div><code>POST /api/payments</code> - Process Stripe payments</div>
                  <div><code>GET /api/social/posts</code> - Aggregate social feeds</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Framework Integration */}
        <div className="border-l-4 border-purple-lbg pl-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Works With Your Favorite Frontend
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Darklang APIs work with any frontend framework. Whether you're using 
              React, Vue, Angular, Svelte, or vanilla JavaScript, just make HTTP requests 
              to your Darklang endpoints.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">React/Next.js</h3>
                <div className="text-sm text-gray-600 font-mono bg-white p-3 rounded">
                  {`fetch('/api/users')`}<br/>
                  {`  .then(r => r.json())`}
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Vue/Nuxt</h3>
                <div className="text-sm text-gray-600 font-mono bg-white p-3 rounded">
                  {`this.$http.get('/api/users')`}<br/>
                  {`  .then(response => ...)`}
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Any Framework</h3>
                <div className="text-sm text-gray-600 font-mono bg-white p-3 rounded">
                  {`axios.get('/api/users')`}<br/>
                  {`  .then(data => ...)`}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="border-l-4 border-mint pl-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Stop Fighting Infrastructure
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p className="text-lg">
              You became a web developer to build user interfaces and create experiences. 
              Don't let backend complexity slow you down.
            </p>
            <p>
              With Darklang, you can focus on what you do best—crafting great frontends—while 
              having a powerful, reliable backend that just works.
            </p>
            <p className="text-lg font-medium text-blue-lbg">
              Build full-stack web applications at frontend speed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopers;