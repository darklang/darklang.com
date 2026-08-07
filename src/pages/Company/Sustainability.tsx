import React from "react";

const PHILOSOPHY = [
  {
    title: "Mission First",
    accent: "bg-blue-lbg",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-lbg",
    body: "In order to work on our mission, making programming radically accessible, we must be sustainable. But sustainability can't come at the expense of the mission. We won't sacrifice user rights, data ownership, or platform openness for short-term revenue.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </>
    ),
  },
  {
    title: "User Rights First",
    accent: "bg-purple-lbg",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-lbg",
    body: "We believe in absolute user rights for data and software storage, access, and malleability. Your code is yours. Your data is yours. You should be able to run Darklang anywhere, modify it, and never be locked into our platform.",
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Open Source by Default",
    accent: "bg-cyan-soft",
    iconBg: "bg-cyan-soft/20",
    iconColor: "text-acc-cyan",
    body: "We've fully open-sourced Darklang under the Apache License 2.0. This wasn't just a feel-good decision. It was necessary for our local-first approach and aligned with our values of accessibility and community ownership.",
    icon: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
  },
];

const BUSINESS_MODEL = [
  {
    title: "Cloud Hosting",
    titleColor: "text-blue-lbg",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-lbg",
    body: "While Darklang can run anywhere (and we'll help you self-host), our cloud platform offers the best experience with managed infrastructure and collaboration features.",
    icon: <path d="M17.5 19a4.5 4.5 0 0 0 0-9h-1.8A7 7 0 1 0 4 15.9" />,
  },
  {
    title: "Developer Services",
    titleColor: "text-purple-lbg",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-lbg",
    body: "Custom development, consulting, enterprise support, and licensing for organizations that need specialized Darklang solutions.",
    icon: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </>
    ),
  },
  {
    title: "Community-Driven Growth",
    titleColor: "text-acc-cyan",
    iconBg: "bg-cyan-soft/20",
    iconColor: "text-acc-cyan",
    body: "Our package ecosystem creates value for everyone. When developers publish packages, share code, and build on each other's work, the entire platform becomes more valuable. We're building business models that reward community contribution, not extract from it.",
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
];

const Sustainability: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl 2xl:max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Building Sustainable Software
          </h1>
          <div className="w-28 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-4xl 2xl:max-w-5xl mx-auto">
            How we're building Darklang to be sustainable for developers,
            maintainable for the long term, and aligned with our values.
          </p>
        </div>

        {/* Current Reality */}
        <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 p-8 mb-20 shadow-sm border border-purple-100">
          {/* Decorative elements */}
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-purple-100/40 blur-2xl"></div>
          <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-indigo-100/40 blur-2xl"></div>

          <div className="relative">
            {/* Icon + Title header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center rounded-full bg-purple-100 p-2 text-purple-lbg">
                {/* Lucide-style leaf icon */}
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-purple-dbg">
                Where We Stand
              </h2>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Darklang Inc. was formed in early 2025 when the original Dark
                Inc. ran out of funding. Former employees acquired the assets to
                continue building Darklang with renewed focus on open source and
                sustainability.
              </p>

              <p className="text-gray-700 leading-relaxed">
                We're actively working on finding the right business model that
                serves both our users and our mission. We believe in being
                transparent about our progress and plans.
              </p>

              <div className="pt-4">
                <a
                  href="https://blog.darklang.com/goodbye-dark-inc-welcome-darklang-inc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-purple-lbg font-medium hover:text-purple-900 transition-colors"
                >
                  Read more about our transition in our blog post
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Our Sustainability Philosophy
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {PHILOSOPHY.map(item => (
              <div
                key={item.title}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className={`h-1 w-full ${item.accent}`}></div>
                <div className="flex flex-1 flex-col p-6">
                  <div
                    className={`mb-4 flex h-11 w-11 items-center justify-center rounded-full ${item.iconBg} ${item.iconColor}`}
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Model */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How We Plan to Stay Sustainable
          </h2>

          <div className="space-y-8">
            {BUSINESS_MODEL.map((item, index) => (
              <div key={item.title} className="relative flex gap-5">
                {/* Connector between this badge and the next one */}
                {index < BUSINESS_MODEL.length - 1 && (
                  <div
                    className="absolute left-6 top-12 -bottom-8 hidden w-px bg-gray-200 sm:block"
                    aria-hidden="true"
                  ></div>
                )}

                <div
                  className={`relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ring-8 ring-white ${item.iconBg} ${item.iconColor}`}
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {item.icon}
                  </svg>
                </div>

                <div className="pt-1">
                  <h3 className={`mb-2 text-xl font-bold ${item.titleColor}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open Source Journey */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Why We Went Open Source
          </h2>

          <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              We realized that local-first development requires open source.
              Nobody wants to run proprietary binaries on their machine. Trust
              requires transparency. Open source also aligns with our values and
              makes Darklang truly community-owned.
            </p>

            <p>
              Read more about our decision in our{" "}
              <a
                href="https://blog.darklang.com/going-open-source/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-lbg hover:underline"
              >
                open source announcement blog post
              </a>
              .
            </p>
          </div>
        </div>

        {/* Get Involved */}
        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Get Involved
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            The best way to support Darklang is to use it, contribute to it, and
            help us build something great together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/getting-started"
              className="bg-blue-lbg hover:bg-purple-lbg text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Try Darklang
            </a>
            <a
              href="https://github.com/darklang/dark"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-400 hover:border-gray-600 text-gray-700 hover:bg-gray-700 hover:text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              View on GitHub
            </a>
            <a
              href="https://github.com/sponsors/darklang"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-400 hover:bg-white hover:text-pink-400 border border-pink-400 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              🩷 Sponsor Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
