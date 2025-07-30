import React from "react";

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

          {/* Abstract floral pattern for sustainability theme */}
          <div className="absolute bottom-2 right-2 w-40 h-40 opacity-5">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full fill-purple-900"
            >
              <path d="M50,10 C60,30 80,30 90,20 C80,40 90,60 80,70 C90,80 80,90 70,90 C60,100 40,90 30,80 C20,90 10,80 10,70 C0,60 10,40 20,30 C10,20 30,30 50,10 Z"></path>
              <circle cx="50" cy="50" r="8"></circle>
              <circle
                cx="50"
                cy="50"
                r="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              ></circle>
              <circle
                cx="50"
                cy="50"
                r="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              ></circle>
            </svg>
          </div>
        </section>

        {/* Our Philosophy */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Our Sustainability Philosophy
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-blue-lbg pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Mission First
              </h3>
              <p className="text-gray-700 leading-relaxed">
                In order to work on our mission—making programming radically
                accessible—we must be sustainable. But sustainability can't come
                at the expense of the mission. We won't sacrifice user rights,
                data ownership, or platform openness for short-term revenue.
              </p>
            </div>

            <div className="border-l-4 border-purple-lbg pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                User Rights First
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We believe in absolute user rights for data and software
                storage, access, and malleability. Your code is yours. Your data
                is yours. You should be able to run Darklang anywhere, modify
                it, and never be locked into our platform.
              </p>
            </div>

            <div className="border-l-4 border-mint pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Open Source by Default
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We've fully open-sourced Darklang under the Apache License 2.0.
                This wasn't just a feel-good decision—it was necessary for our
                local-first approach and aligned with our values of
                accessibility and community ownership.
              </p>
            </div>
          </div>
        </div>

        {/* Business Model */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How We Plan to Stay Sustainable
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-blue-lbg mb-4">
                1. Cloud Hosting
              </h3>
              <p className="text-gray-700 mb-4">
                While Darklang can run anywhere (and we'll help you self-host),
                our cloud platform offers the best experience with managed
                infrastructure and collaboration features.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-purple-lbg mb-4">
                2. Developer Services
              </h3>
              <p className="text-gray-700">
                Custom development, consulting, enterprise support, and
                licensing for organizations that need specialized Darklang
                solutions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-mint mb-4">
                3. Community-Driven Growth
              </h3>
              <p className="text-gray-700">
                Our package ecosystem creates value for everyone. When
                developers publish packages, share code, and build on each
                other's work, the entire platform becomes more valuable. We're
                building business models that reward community contribution, not
                extract from it.
              </p>
            </div>
          </div>
        </div>

        {/* Open Source Journey */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Why We Went Open Source
          </h2>

          <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              We realized that local-first development requires open
              source—nobody wants to run proprietary binaries on their machine.
              Trust requires transparency. Open source also aligns with our
              values and makes Darklang truly community-owned.
            </p>

            <p>
              Read more about our decision in our
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
