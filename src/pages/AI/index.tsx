import React from "react";

const AI: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Built for the AI Era
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Darklang is designed from the ground up for AI-powered development.
            From AI-friendly syntax to built-in model integration, we're
            building the platform for the future of software development.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why AI-First Matters
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The age of AI code generation is here, but most programming
            languages weren't designed for it. Darklang is different. We've
            built our language, tooling, and platform specifically to work
            seamlessly with AI models, whether you're using GitHub Copilot,
            ChatGPT, or building your own AI agents.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This isn't just about better autocomplete—it's about fundamentally
            reimagining how humans and AI collaborate to build software.
          </p>
        </div>

        {/* AI for Development */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            AI-Enhanced Development Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Forgiving Parser */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-lbg rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Generous Parser
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our parser is designed to understand AI-generated code, even
                when it's not perfect. Minor syntax errors that would break
                other languages are automatically corrected, making AI
                collaboration seamless.
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm text-gray-600">
                  <strong>Example:</strong> AI writes code with inconsistent
                  spacing or missing semicolons? Darklang just works with it.
                </p>
              </div>
            </div>

            {/* Copilot Integration */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-mint rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
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
                <h3 className="text-xl font-bold text-gray-900">
                  Copilot Ready
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Built-in support for GitHub Copilot and other AI coding
                assistants. Our language syntax and patterns are optimized for
                AI understanding and generation, resulting in more accurate
                suggestions.
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm text-gray-600">
                  <strong>Future:</strong> Cross-language translation powered by
                  AI—import functions from Python or JavaScript automatically.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Model Integration */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Flexible Model Integration
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Bring Your Own Model
              </h3>
              <p className="text-sm text-gray-600">
                Use OpenAI, Anthropic, local models, or any API-accessible AI
                service. No vendor lock-in, just flexible integration.
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
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Local Development
              </h3>
              <p className="text-sm text-gray-600">
                Run models locally for privacy-sensitive work or offline
                development. Seamless switching between local and cloud models.
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
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Package Ecosystem
              </h3>
              <p className="text-sm text-gray-600">
                Pre-built packages for popular AI services. Connect to any model
                with just a few lines of code.
              </p>
            </div>
          </div>
        </div>

        {/* Building AI Applications */}
        <div className="border-l-4 border-taupe pl-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Building AI-Powered Applications
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>
              Darklang isn't just designed for AI-assisted development—it's
              built for creating AI-powered applications. Whether you're
              building chatbots, content generation tools, or sophisticated AI
              agents, Darklang provides the infrastructure and tools you need.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Automatic SDK Generation
                </h3>
                <p className="text-sm text-gray-600">
                  Generate client SDKs for any service automatically. Expose
                  your AI-powered APIs to any platform without writing
                  boilerplate code.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Prompt Engineering Tools
                </h3>
                <p className="text-sm text-gray-600">
                  Built-in tools for prompt versioning, A/B testing, and
                  optimization. Treat prompts as first-class code with proper
                  version control.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">
                  AI Agent Framework
                </h3>
                <p className="text-sm text-gray-600">
                  Build sophisticated AI agents that can interact with your
                  APIs, databases, and external services. Full traceability and
                  debugging support.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Model Training Pipeline
                </h3>
                <p className="text-sm text-gray-600">
                  Train and deploy custom models directly in Darklang. From data
                  preparation to model serving, all in one integrated platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Native AI Integration */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Native AI Integration
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Unlike other platforms that require external frameworks and
              libraries, Darklang has AI integration built into its core. This
              means simpler, more reliable AI workflows without the complexity
              of external dependencies.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">
                Native Prompt Pipelines
              </h3>
              <p className="text-gray-700 mb-3">
                Chain AI operations together using Darklang's pipeline syntax.
                No external libraries, no complex configuration—just clean,
                readable code that does what you expect.
              </p>
              <div className="text-sm text-gray-600 font-mono bg-white p-3 rounded border">
                user_input |&gt; sanitize |&gt; generate_response |&gt;
                format_output
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mt-3 mr-3 flex-shrink-0"></span>
                <div>
                  <strong>Streaming by default:</strong> Real-time response
                  streaming without complex async handling
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-purple-lbg rounded-full mt-3 mr-3 flex-shrink-0"></span>
                <div>
                  <strong>Error handling:</strong> Built-in retry logic and
                  fallback strategies for model failures
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-mint rounded-full mt-3 mr-3 flex-shrink-0"></span>
                <div>
                  <strong>Cost optimization:</strong> Automatic model selection
                  based on task complexity and budget
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-taupe rounded-full mt-3 mr-3 flex-shrink-0"></span>
                <div>
                  <strong>Observability:</strong> Full tracing of AI operations
                  for debugging and optimization
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MCP Server Integration */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            MCP Server for Tool Integration
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Darklang provides an MCP (Model Context Protocol) server that
              enables seamless integration with AI tools like Claude Code. This
              allows AI assistants to both access your Darklang data and invoke
              functions directly within your Darklang environment.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-lbg">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Data Access
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  AI tools can read your Darklang code, examine function
                  signatures, browse your package dependencies, and understand
                  your application structure.
                </p>
                <div className="text-xs text-gray-600">
                  Perfect for: Code reviews, documentation generation, debugging
                  assistance
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Function Execution
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  AI assistants can directly call your Darklang functions and
                  use your custom tools, making them powerful extensions of your
                  development environment.
                </p>
                <div className="text-xs text-gray-600">
                  Perfect for: Testing functions, data processing, workflow
                  automation
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-lbg mt-4">
              <h3 className="font-semibold text-gray-800 mb-3">
                Build Your Own MCP Servers
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Create custom MCP servers entirely in Darklang to extend AI
                capabilities with your domain-specific tools and data. Compose
                multiple MCP servers together for powerful AI workflows tailored
                to your exact needs.
              </p>
              <div className="text-xs text-gray-600">
                <strong>Example:</strong> Build an MCP server that connects AI
                tools to your customer database, inventory system, and analytics
                platform—all using Darklang functions.
              </div>
            </div>
          </div>
        </div>

        {/* Future Capabilities */}
        <div className="border-l-4 border-mint pl-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The Future of AI Development
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              We're just getting started. Darklang's AI capabilities will
              continue to evolve as the AI landscape develops. Here's what we're
              working on:
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="w-3 h-3 bg-mint rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <div>
                  <strong>Vector Database Integration:</strong> Native support
                  for vector databases and embedding operations for AI
                  applications
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-3 h-3 bg-blue-lbg rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <div>
                  <strong>Multi-Modal Support:</strong> Built-in handling for
                  text, images, audio, and video in AI workflows
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-3 h-3 bg-purple-lbg rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <div>
                  <strong>AI-Generated Packages:</strong> Automatically generate
                  Darklang packages from API documentation using AI
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-3 h-3 bg-taupe rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <div>
                  <strong>Collaborative AI Agents:</strong> AI agents that can
                  modify and improve code collaboratively with human developers
                </div>
              </div>
            </div>

            <p className="mt-6 text-lg font-medium text-blue-lbg">
              The age of AI-human collaboration in software development is here.
              Darklang is your platform for building in this new era.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI;
