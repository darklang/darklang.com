import React from "react";

const Stats: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Darklang by the Numbers
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Real performance metrics, usage statistics, and platform insights. 
            Transparency in action.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 rounded-lg p-6 mb-12 border-l-4 border-yellow-500">
          <div className="flex items-start">
            <svg className="w-6 h-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Directional Placeholder</h3>
              <p className="text-yellow-700 text-sm">
                This page is an early preview of our vision for public transparency around performance metrics, 
                usage statistics, and platform health. The specific numbers shown are illustrative examples. 
                As Darklang develops, we plan to provide real-time, publicly accessible stats including performance 
                data, system health, and community metrics.
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Response Time */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border-l-4 border-green-500">
            <div className="text-3xl font-bold text-green-600 mb-2">~8ms</div>
            <div className="text-sm text-gray-600 font-medium">Avg Response Time</div>
            <div className="text-xs text-gray-500 mt-1">P95: ~15ms</div>
          </div>

          {/* Function Executions */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border-l-4 border-blue-500">
            <div className="text-3xl font-bold text-blue-600 mb-2">2.1M+</div>
            <div className="text-sm text-gray-600 font-medium">Function Calls/Day</div>
            <div className="text-xs text-gray-500 mt-1">~24 per second</div>
          </div>

          {/* Cold Start */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border-l-4 border-purple-500">
            <div className="text-3xl font-bold text-purple-600 mb-2">0ms</div>
            <div className="text-sm text-gray-600 font-medium">Cold Start Time</div>
            <div className="text-xs text-gray-500 mt-1">No cold starts</div>
          </div>

          {/* Uptime */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border-l-4 border-mint">
            <div className="text-3xl font-bold text-mint mb-2">99.9%</div>
            <div className="text-sm text-gray-600 font-medium">Platform Uptime</div>
            <div className="text-xs text-gray-500 mt-1">Last 30 days</div>
          </div>
        </div>

        {/* Runtime Performance */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Runtime Performance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Execution Speed</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">HTTP Handler</span>
                  <span className="font-mono text-sm bg-green-100 text-green-800 px-2 py-1 rounded">~3ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Database Query</span>
                  <span className="font-mono text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">~1.2ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Package Function</span>
                  <span className="font-mono text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">~0.8ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">CRON Job</span>
                  <span className="font-mono text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">~2.1ms</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Memory Usage</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Base Runtime</span>
                  <span className="font-mono text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded">~12MB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Per Function</span>
                  <span className="font-mono text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded">~64KB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Package Cache</span>
                  <span className="font-mono text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded">~4MB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Trace Storage</span>
                  <span className="font-mono text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded">~2MB</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Scaling Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Auto-scale Time</span>
                  <span className="font-mono text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">~200ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Max Concurrent</span>
                  <span className="font-mono text-sm bg-indigo-100 text-indigo-800 px-2 py-1 rounded">10,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Package Download</span>
                  <span className="font-mono text-sm bg-teal-100 text-teal-800 px-2 py-1 rounded">~50ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Deploy Time</span>
                  <span className="font-mono text-sm bg-pink-100 text-pink-800 px-2 py-1 rounded">Instant</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Statistics */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Usage</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                <span className="font-medium text-gray-800">Active Developers</span>
                <span className="text-2xl font-bold text-blue-600">847</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                <span className="font-medium text-gray-800">Functions in Package Manager</span>
                <span className="text-2xl font-bold text-green-600">12,493</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                <span className="font-medium text-gray-800">HTTP Requests/Day</span>
                <span className="text-2xl font-bold text-purple-600">89.2K</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                <span className="font-medium text-gray-800">Traces Captured</span>
                <span className="text-2xl font-bold text-orange-600">3.7M</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Developer Experience</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-mint-50 rounded">
                <span className="font-medium text-gray-800">Avg. Time to First Deploy</span>
                <span className="text-2xl font-bold text-mint">4.2min</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-rose-50 rounded">
                <span className="font-medium text-gray-800">Functions Shared/Day</span>
                <span className="text-2xl font-bold text-rose">234</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                <span className="font-medium text-gray-800">AI Code Generations</span>
                <span className="text-2xl font-bold text-yellow-700">1,847</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-indigo-50 rounded">
                <span className="font-medium text-gray-800">Zero-Config Deployments</span>
                <span className="text-2xl font-bold text-indigo-600">100%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Package Manager Stats */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Package Manager Performance</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2.3ms</div>
              <div className="text-sm text-gray-600">Avg. Package Lookup</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">~150MB</div>
              <div className="text-sm text-gray-600">Total Package Size</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">47ms</div>
              <div className="text-sm text-gray-600">Function Download Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">0</div>
              <div className="text-sm text-gray-600">Dependency Conflicts</div>
            </div>
          </div>
        </div>

        {/* Cost Philosophy */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost Philosophy</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              We're committed to transparent, usage-based pricing that follows our actual infrastructure costs. 
              Our goal is to keep basic websites affordable while scaling predictably for larger applications.
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Our target:</strong> Anyone should be able to afford running a small website. 
                We're working toward pricing that makes this accessible to everyone.
              </p>
            </div>
            <p className="text-sm text-gray-600">
              Specific pricing will be announced as our cloud hosting becomes available.
            </p>
          </div>
        </div>

        {/* Comparison */}
        <div className="bg-gray-900 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">vs. Traditional Stack</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-300">Traditional Setup</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• Setup time: 2-4 hours</div>
                <div>• Cold start: 200-2000ms</div>
                <div>• Deploy time: 5-15 minutes</div>
                <div>• Config files: 8-15</div>
                <div>• Services needed: 6-12</div>
                <div>• Monthly cost: $25-200+</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🆚</div>
              <div className="text-lg font-semibold text-yellow-300">The Difference</div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-300">Darklang</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• Setup time: ~4 minutes</div>
                <div>• Cold start: 0ms</div>
                <div>• Deploy time: Instant</div>
                <div>• Config files: 0</div>
                <div>• Services needed: 0</div>
                <div>• Monthly cost: Affordable*</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sustainability Info */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex">
            <svg className="w-6 h-6 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">Transparency & Sustainability</h3>
              <p className="text-sm text-blue-700 mb-2">
                We believe in building a sustainable platform with transparent operations. 
                As we develop, we'll share real metrics about platform health, performance, and growth.
              </p>
              <a href="/company/sustainability" className="text-sm text-blue-800 underline hover:text-blue-900">
                Learn more about our approach →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;