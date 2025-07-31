import React from "react";

type ListItemProps = {
  text: string;
  iconType: "cog" | "arrow";
  textSize?: "normal" | "large";
};

const ListItem: React.FC<ListItemProps> = ({
  text,
  iconType,
  textSize = "normal",
}) => {
  const cogIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-taupe mr-3 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );

  const arrowIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-blue-lbg mr-3 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  );

  const sizeClass = textSize === "large" ? "text-lg" : "";

  return (
    <li className={`flex items-center text-gray-600 ${sizeClass}`}>
      {iconType === "cog" ? cogIcon : arrowIcon}
      {text}
    </li>
  );
};

const Distribution: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Deployless Distribution
          </h1>
          <div className="w-28 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-4xl mx-auto">
            Skip containers, CI/CD, and deployment pipelines. Darklang delivers
            your software instantly—from development to production in
            milliseconds.
          </p>
        </div>

        {/* Deployless Philosophy */}
        <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 p-8 mb-20 shadow-sm border border-purple-100">
          {/* Decorative elements */}
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-purple-100/40 blur-2xl"></div>
          <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-indigo-100/40 blur-2xl"></div>

          <div className="relative">
            {/* Icon + Title header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center rounded-full bg-purple-100 p-2 text-purple-lbg">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-purple-dbg">
                The Deployless Revolution
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Just as serverless computing abstracted away server management,
              Darklang introduces "deployless" distribution that abstracts away
              deployment management. Write code, save it, and it's instantly
              running in production.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Traditional deployment involves dozens of steps and tools.
              Darklang eliminates roughly this complexity, reducing deployment
              time from minutes or hours to 50 milliseconds.
            </p>
            <div className="mt-6">
              <a
                href="https://blog.darklang.com/how-dark-deploys-code-in-50ms/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-lbg hover:text-purple-900 font-medium"
              >
                Read about our 50ms deployment architecture →
              </a>
            </div>
          </div>
        </section>

        {/* Traditional vs Darklang */}
        <div className="mb-20">
          <h2 className="font-bold mb-8 flex flex-col items-center justify-center">
            <div className="flex items-center text-3xl tracking-wide">
              <span className="text-taupe tracking-widest">Traditional</span>
              <span className="mx-4 text-gray-600 text-4xl font-light">vs</span>
              <span className="text-blue-lbg tracking-widest">Darklang</span>
            </div>
            <span className="text-gray-500 mt-2 text-2xl tracking-widest">
              Distribution
            </span>
          </h2>
          <div className="grid md:grid-cols-2 2xl:gap-24 2xl:gap-28 mx-8">
            {/* Traditional Distribution */}
            <div>
              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-wider text-gray-700 mb-6 flex items-center ">
                  Traditional{" "}
                  <span className="text-gray-500 ml-1">Distribution</span>
                </h3>

                <ul className="space-y-2 mb-8 pl-4">
                  <ListItem
                    iconType="cog"
                    text="Write code and commit to Git"
                  />
                  <ListItem
                    iconType="cog"
                    text="Create pull requests and reviews"
                  />
                  <ListItem iconType="cog" text="Configure build systems" />
                  <ListItem iconType="cog" text="Build Docker containers" />
                  <ListItem
                    iconType="cog"
                    text="Push to container registries"
                  />
                  <ListItem
                    iconType="cog"
                    text="Configure Kubernetes/orchestration"
                  />
                  <ListItem iconType="cog" text="Set up CI/CD pipelines" />
                  <ListItem iconType="cog" text="Deploy and pray it works" />
                </ul>

                <div className="text-taupe font-medium flex items-center bg-gradient-to-br from-white/70 to-white/40 backdrop-filter backdrop-blur-md px-4 py-2 rounded-md relative overflow-hidden group">
                  <div className="absolute inset-0 bg-taupe/5 mix-blend-overlay"></div>
                  <div className="absolute -inset-1 bg-gradient-to-tr from-taupe/20 via-transparent to-transparent opacity-30 group-hover:opacity-40 transition-opacity"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 relative z-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="relative z-10">
                    Hours or days from code to production
                  </span>
                </div>
              </div>
            </div>

            {/* Darklang Distribution */}
            <div>
              <div className="px-10 py-6">
                <h3 className="text-xl font-semibold tracking-wider text-gray-800 mb-6 flex items-center">
                  Darklang{" "}
                  <span className="text-gray-500 ml-1">Distribution</span>
                </h3>

                <ul className="space-y-2 mb-8">
                  <ListItem
                    iconType="arrow"
                    text="Write your function"
                    textSize="large"
                  />
                  <ListItem
                    iconType="arrow"
                    text="Save the file"
                    textSize="large"
                  />
                  <ListItem
                    iconType="arrow"
                    text="It's running in production"
                    textSize="large"
                  />
                </ul>

                <div className="text-blue-lbg font-medium flex items-center bg-gradient-to-br from-white/70 to-white/40 backdrop-filter backdrop-blur-md px-4 py-2 rounded-md  relative overflow-hidden group">
                  <div className="absolute inset-0 bg-blue-lbg/5 mix-blend-overlay"></div>
                  <div className="absolute -inset-1 bg-gradient-to-tr from-blue-lbg/20 via-transparent to-transparent opacity-30 group-hover:opacity-40 transition-opacity"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 relative z-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span className="relative z-10">
                    50 milliseconds from code to production
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Distribution Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Function-Level Distribution */}
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Function-Level Distribution
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Instead of deploying entire applications, Darklang distributes
              individual functions. Each function is versioned, immutable, and
              can be executed directly from anywhere.
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="font-mono text-sm text-gray-800 mb-2">
                $ darklang @username.parseCSV myfile.csv
              </div>
              <p className="text-sm text-gray-600">
                Run any function directly—no installation, setup, or wrapper
                scripts required.
              </p>
            </div>
          </div>

          {/* Real-Time Sync */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-lbg rounded-lg flex items-center justify-center mr-4">
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
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Configurable Synchronization
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              You control what gets synced and when. Auto-sync your public
              functions for instant distribution, manually publish releases, or
              keep sensitive code in local-only files that never leave your
              machine.
            </p>
            <div className="bg-gray-50 p-4 rounded-md space-y-2">
              <div className="text-sm">
                <span className="font-semibold text-mint">Auto-sync:</span>
                <span className="text-gray-600 ml-2">
                  Public functions sync automatically as you save
                </span>
              </div>
              <div className="text-sm">
                <span className="font-semibold text-blue-lbg">
                  Manual publish:
                </span>
                <span className="text-gray-600 ml-2">
                  Explicit version releases when you're ready
                </span>
              </div>
              <div className="text-sm">
                <span className="font-semibold text-gray-700">Local-only:</span>
                <span className="text-gray-600 ml-2">
                  Keep secret code in .db files that never sync
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Matter: The Distribution Hub */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Dark Matter: The Central Distribution Platform
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 pl-1">
            <p>
              All Darklang code is hosted on{" "}
              <strong>matter.darklang.com</strong>—a fine-grained package
              manager that serves as the central distribution hub for types,
              functions, data, and more.
            </p>

            <div className="px-8 py-4 rounded-xs border-l-4 border-blue-lbg">
              <h3 className="font-semibold text-gray-800 mb-3">
                How Matter Works
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Centrally hosted:</strong> Public code accessible at
                    matter.darklang.com
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-purple-lbg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Local caches:</strong> CLI installations maintain
                    local caches for performance
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-mint rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>You choose visibility:</strong> Auto-sync public
                    functions or keep them private/local
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-taupe rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Fine-grained:</strong> Download only the specific
                    functions you use
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Local-only files:</strong> Secret code in .db files
                    never leaves your machine
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cross-Platform Distribution */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Universal Cross-Platform Distribution
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Darklang functions run everywhere: CLI, cloud, web browsers,
              Slack, Discord, or any platform that can make HTTP calls.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">
                  CLI Distribution
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Run functions directly from the command line without
                  installation.
                </p>
                <div className="font-fira text-xs bg-dark p-2 rounded">
                  <span className="text-gray-300">$ dark</span>{" "}
                  <span className="text-classic-blue">run</span>{" "}
                  <span className="text-gray-light">@user.func</span>
                </div>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Cloud Distribution
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Deploy to Darklang cloud instantly with zero configuration.
                </p>
                <div className="font-fira text-xs bg-dark p-2 rounded">
                  <span className="text-gray-300">$ dark</span>{" "}
                  <span className="text-classic-blue">deploy</span>{" "}
                  <span className="text-gray-light">@user.func</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Gets Eliminated */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What Darklang Distribution Eliminates
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-6 pl-3">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  No DevOps Complexity
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-rust rounded-full mr-3"></span>
                    <span>No YAML configuration files</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-rust rounded-full mr-3"></span>
                    <span>No Docker containers</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-rust rounded-full mr-3"></span>
                    <span>No Kubernetes orchestration</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-rust rounded-full mr-3"></span>
                    <span>No CI/CD pipeline setup</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  No Infrastructure Management
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-rust rounded-full mr-3"></span>
                    <span>No server provisioning</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-rust rounded-full mr-3"></span>
                    <span>No load balancer configuration</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-rust rounded-full mr-3"></span>
                    <span>No networking setup</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-rust rounded-full mr-3"></span>
                    <span>No cloud service integration</span>
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

export default Distribution;
