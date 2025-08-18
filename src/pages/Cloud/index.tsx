import React from "react";

const Cloud: React.FC = () => {
  return (
    <div className="min-h-screen py-16 bg-dark-black relative overflow-hidden">
      {/* CSS Cloud background elements */}
      <style>
        {`
          @keyframes cloudFloat1 {
            0%, 100% { transform: translateX(0) translateY(0); }
            33% { transform: translateX(30px) translateY(-10px); }
            66% { transform: translateX(-20px) translateY(5px); }
          }
          @keyframes cloudFloat2 {
            0%, 100% { transform: translateX(0) translateY(0); }
            50% { transform: translateX(-40px) translateY(-15px); }
          }
          @keyframes cloudFloat3 {
            0%, 100% { transform: translateX(0) translateY(0) scale(1); }
            50% { transform: translateX(50px) translateY(-20px) scale(1.1); }
          }
          @keyframes cloudFloat4 {
            0%, 100% { transform: translateX(0) translateY(0); }
            25% { transform: translateX(20px) translateY(10px); }
            75% { transform: translateX(-30px) translateY(-5px); }
          }
          @keyframes glowPulse {
            0%, 100% { filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.1)); }
            50% { filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.3)); }
          }
          .cloud1 { animation: cloudFloat1 20s ease-in-out infinite, glowPulse 8s ease-in-out infinite; }
          .cloud2 { animation: cloudFloat2 25s ease-in-out infinite, glowPulse 10s ease-in-out infinite; }
          .cloud3 { animation: cloudFloat3 30s ease-in-out infinite, glowPulse 12s ease-in-out infinite; }
          .cloud4 { animation: cloudFloat4 22s ease-in-out infinite, glowPulse 9s ease-in-out infinite; }
        `}
      </style>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cloud 1 - large fluffy cloud */}
        <div className="absolute top-20 -left-20 opacity-10 cloud1">
          <div className="relative">
            <div className="absolute w-32 h-32 bg-purple-400 rounded-full"></div>
            <div className="absolute w-40 h-40 bg-purple-400 rounded-full left-20 -top-4"></div>
            <div className="absolute w-36 h-36 bg-purple-400 rounded-full left-44 top-0"></div>
            <div className="absolute w-28 h-28 bg-purple-400 rounded-full left-64 top-4"></div>
            <div className="absolute w-48 h-24 bg-purple-400 rounded-full left-8 top-16"></div>
          </div>
        </div>

        {/* Cloud 2 - medium cloud */}
        <div className="absolute top-40 right-10 opacity-10 cloud2">
          <div className="relative">
            <div className="absolute w-24 h-24 bg-blue-400 rounded-full"></div>
            <div className="absolute w-32 h-32 bg-blue-400 rounded-full left-16 -top-2"></div>
            <div className="absolute w-28 h-28 bg-blue-400 rounded-full left-36 top-0"></div>
            <div className="absolute w-36 h-20 bg-blue-400 rounded-full left-4 top-12"></div>
          </div>
        </div>

        {/* Cloud 3 - small distant cloud */}
        <div className="absolute bottom-40 right-1/2 opacity-10 cloud3">
          <div className="relative">
            <div className="absolute w-20 h-20 bg-blue-200 rounded-full"></div>
            <div className="absolute w-24 h-24 bg-blue-200 rounded-full left-12 -top-2"></div>
            <div className="absolute w-20 h-20 bg-blue-200 rounded-full left-28 top-0"></div>
            <div className="absolute w-28 h-16 bg-blue-200 rounded-full left-4 top-10"></div>
          </div>
        </div>

        {/* Cloud 4 - wispy cloud */}
        <div className="absolute top-2/3 right-1/3 opacity-10 cloud4">
          <div className="relative">
            <div className="absolute w-16 h-16 bg-purple-300 rounded-full"></div>
            <div className="absolute w-20 h-20 bg-purple-300 rounded-full left-10 -top-1"></div>
            <div className="absolute w-16 h-16 bg-purple-300 rounded-full left-24 top-0"></div>
            <div className="absolute w-24 h-12 bg-purple-300 rounded-full left-2 top-8"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto flex flex-col items-center relative z-10 px-2">
        {/* Header Section */}
        <div className="text-center my-8 relative">
          <h1 className="text-4xl md:text-6xl 2xl:text-7xl font-semibold text-white mb-6">
            <span className="text-purple-dbg">Darklang</span>
            <span className="text-white"> Cloud</span>
          </h1>
          <div className="w-42 h-1 bg-purple-lbg mx-auto rounded-full mb-12"></div>
        </div>

        {/* Main value proposition */}
        <div className="text-center mb-16 text-xl md:text-2xl 2xl:text-3xl max-w-7xl 2xl:max-w-[100rem]">
          <p className="mb-8 text-2xl 2xl:text-3xl">
            <span className="text-white">
              While you can run Darklang anywhere,
            </span>
            <span className="text-blue-dbg"> Darklang Cloud </span>
            <span className="text-white">
              is the most convenient way to deploy your
            </span>
            <span className="text-purple-dbg "> backends</span>
            <span className="text-white">, </span>
            <span className="text-lavender "> CLIs</span>
            <span className="text-white">, </span>
            <span className="text-taupe ">crons</span>
            <span className="text-white">, </span>
            <span className="text-white"> and </span>
            <span className="text-rose">scripts</span>
            <span className="text-white">
              . Deploy instantly, scale automatically, and let us handle the
              infrastructure so you can focus on building—no servers to manage,
              no containers to configure.
            </span>
          </p>

          <div className="backdrop-blur-sm border border-blue-lbg/30 p-6 md:text-lg rounded">
            <p className="text-gray-300">
              <span className="text-blue-lbg font-semibold">
                Darklang Cloud
              </span>{" "}
              is our hosted platform— like Darklang Classic, but for the modern
              Darklang ecosystem. It's how we stay sustainable while providing
              the best developer experience.
            </p>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="mb-16 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Everything You Need, Hosted
          </h2>

          <div className="space-y-6">
            {/* Instant Deployment */}
            <div className="bg-dark-black/60 backdrop-blur-sm rounded-2xl px-8 py-2 text-white">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                <span className="text-blue-lbg">Instant Deployment</span>
              </h3>
              <div className="ml-2">
                <p className="text-gray-300 text-lg md:text-xl mb-4">
                  Write your function, save it, and it's running instantly on
                  our infrastructure. No build steps, no deployment pipelines,
                  no container registries. Your code goes from editor to
                  production in seconds.
                </p>
                <div className="text-sm text-gray-400">
                  Perfect for: HTTP endpoints, background workers, scheduled
                  jobs, CLI tools
                </div>
              </div>
            </div>

            {/* Package Hosting */}
            <div className="bg-dark-black/60 backdrop-blur-sm rounded-2xl px-8 py-2 text-white border-l-taupe">
              <h3 className="text-2xl text-xl md:text-2xl font-semibold mb-4">
                <span className="text-taupe">Package Registry</span>
              </h3>
              <div className="ml-2">
                <p className="text-gray-300 text-lg md:text-xl mb-4">
                  We host{" "}
                  <a
                    href="https://packages.darklang.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-taupe underline"
                  >
                    packages.darklang.com
                  </a>{" "}
                  and the entire package ecosystem. Publish your own packages,
                  use community packages, or contribute to the standard library.
                  Everything is versioned, secure, and instantly available.
                </p>
                <a
                  href="/packages"
                  className="inline-block text-classic-brown hover:text-purple-lbg text-lg underline"
                >
                  Browse the package registry →
                </a>
              </div>
            </div>

            {/* CLI Access */}
            <div className="bg-dark-black/60 backdrop-blur-sm rounded-2xl px-8 py-2 text-white">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                <span className="text-purple-dbg">Remote CLI Access</span>
              </h3>
              <div className="ml-2">
                <p className="text-gray-300 text-lg md:text-xl mb-4">
                  SSH directly into your Darklang environment on our cloud
                  servers. Run your CLI tools, debug issues, or work on your
                  code from anywhere. It's like having a powerful development
                  machine in the cloud.
                </p>
                <div className="bg-[#252525] p-4 rounded font-mono text-sm">
                  <span className="text-purple-dbg">$</span> ssh
                  myapp.darklang.cloud
                  <br />
                  <span className="text-purple-dbg">$</span> darklang run
                  my-script.dark
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cloud Features Grid */}
        <div className="mb-20 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Everything <span className="text-blue-dbg">Included</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* In-Browser Editor */}
            <div className="bg-dark-black/60 backdrop-blur-sm p-6 rounded-xl shadow-md transform transition-transform hover:scale-105 hover:shadow-lg border-t border-l border-white/5">
              <h3 className="text-xl font-semibold mb-3 text-white">
                <span className="text-purple-lbg">In-browser</span> Editing
              </h3>
              <p className="text-gray-300">
                Code directly in your browser with our powerful editor. No local
                setup required—just open a tab and start building.
              </p>
            </div>

            {/* Source Hosting */}
            <div className="bg-dark-black/60 backdrop-blur-sm p-6 rounded-xl shadow-md transform transition-transform hover:scale-105 hover:shadow-lg border-t border-l border-white/5">
              <h3 className="text-xl font-semibold mb-3 text-white">
                <span className="text-lavender">Source</span> Hosting
              </h3>
              <p className="text-gray-300">
                Your code is automatically versioned and backed up with
                Darklang's built-in source control system.
              </p>
            </div>

            {/* MCP & LSP Servers */}
            <div className="bg-dark-black/60 backdrop-blur-sm p-6 rounded-xl shadow-md transform transition-transform hover:scale-105 hover:shadow-lg border-t border-l border-white/5">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-taupe">MCP</span>
                <span className="text-white"> and </span>
                <span className="text-taupe">LSP Servers</span>
              </h3>
              <p className="text-gray-300">
                Hosted language servers and MCP servers for the best development
                experience in any editor.
              </p>
            </div>

            {/* CDN & Performance */}
            <div className="bg-dark-black/60 backdrop-blur-sm p-6 rounded-xl shadow-md transform transition-transform hover:scale-105 hover:shadow-lg border-t border-l border-white/5">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-taupe">Global</span>
                <span className="text-white"> CDN</span>
              </h3>
              <p className="text-gray-300">
                Your applications are automatically distributed globally for the
                best performance anywhere in the world.
              </p>
            </div>

            {/* Monitoring & Logs */}
            <div className="bg-dark-black/60 backdrop-blur-sm p-6 rounded-xl shadow-md transform transition-transform hover:scale-105 hover:shadow-lg border-t border-l border-white/5">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-blue-lbg">Built-in</span>
                <span className="text-white"> Monitoring</span>
              </h3>
              <p className="text-gray-300">
                Comprehensive logging, error tracking, and performance
                monitoring built into the platform.
              </p>
            </div>

            {/* Automatic Scaling */}
            <div className="bg-dark-black/60 backdrop-blur-sm p-6 rounded-xl shadow-md transform transition-transform hover:scale-105 hover:shadow-lg border-t border-l border-white/5">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-purple-lbg">Auto</span>
                <span className="text-white"> Scaling</span>
              </h3>
              <p className="text-gray-300">
                Your applications scale automatically from zero to whatever
                traffic you get. No capacity planning required.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="mb-16 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            <span className="text-white">Cloud vs </span>
            <span className="text-gray-400">Self-Hosted</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-dbg/5 backdrop-blur-sm border border-white/5 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-dbg mb-6">
                Darklang Cloud
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-lbg mr-3">✓</span>
                  Deploy in seconds, no infrastructure setup
                </li>
                <li className="flex items-start">
                  <span className="text-blue-lbg mr-3">✓</span>
                  SSH access to your cloud environment
                </li>
                <li className="flex items-start">
                  <span className="text-blue-lbg mr-3">✓</span>
                  Built-in monitoring and error tracking
                </li>
                <li className="flex items-start">
                  <span className="text-blue-lbg mr-3">✓</span>
                  Global CDN and automatic scaling
                </li>
                <li className="flex items-start">
                  <span className="text-blue-lbg mr-3">✓</span>
                  Package registry and community libraries
                </li>
                <li className="flex items-start">
                  <span className="text-blue-lbg mr-3">✓</span>
                  Supports our mission to keep Darklang sustainable
                </li>
              </ul>
            </div>

            <div className="bg-dark-black/60 backdrop-blur-sm border border-white/5 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-400 mb-6">
                Self-Hosted
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-taupe mr-3">✓</span>
                  Full control over your infrastructure
                </li>
                <li className="flex items-start">
                  <span className="text-taupe mr-3">✓</span>
                  Run on your own servers or cloud provider
                </li>
                <li className="flex items-start">
                  <span className="text-taupe mr-3">✓</span>
                  No vendor lock-in, run anywhere
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">×</span>
                  You manage servers, deployment, scaling
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">×</span>
                  Set up monitoring, logging, error tracking
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">×</span>
                  Configure CDN, load balancing, SSL
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-300 text-lg">
              Both approaches work great—Cloud is optimized for convenience,
              self-hosted is optimized for control.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Coming Soon
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Darklang Cloud is in development. We're working hard to make this
            vision a reality—stay tuned for updates on availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/getting-started"
              className="bg-purple-lbg hover:bg-blue-dbg text-white font-bold py-3 px-8 rounded-xl text-lg transition-all shadow-lg"
            >
              Get Started with Darklang
            </a>
            <a
              href="/company"
              className="border border-gray-400 backdrop-blur-sm bg-dark/80 hover:border-white text-gray-300 hover:text-white font-bold py-3 px-8 rounded-xl text-lg transition-all shadow-md hover:shadow-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloud;
