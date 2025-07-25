import React from "react";

const Sustainability: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Building Sustainable Software
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            How we're building Darklang to be sustainable for developers,
            maintainable for the long term, and aligned with our values.
          </p>
        </div>

        {/* Current Reality */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12 border-l-4 border-blue-lbg">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Where We Stand
          </h2>
          <p className="text-blue-700 leading-relaxed mb-4">
            Darklang Inc. was formed in early 2025 when the original Dark Inc.
            ran out of funding. Former employees acquired the assets to continue
            building Darklang with renewed focus on open source and
            sustainability.
          </p>
          <p className="text-blue-700 leading-relaxed">
            We're actively working on finding the right business model that
            serves both our users and our mission. We believe in being
            transparent about our progress and plans.
          </p>
          <p className="text-sm text-blue-600 mt-4">
            Read more about our transition in
            <a
              href="https://blog.darklang.com/goodbye-dark-inc-welcome-darklang-inc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-lbg hover:underline"
            >
              our blog post
            </a>
            .
          </p>
        </div>

        {/* Our Philosophy */}
        <div className="mb-12">
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
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
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
        <div className="mb-12">
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
              className="bg-blue-lbg hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Try Darklang
            </a>
            <a
              href="https://github.com/darklang/dark"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-400 hover:border-gray-600 text-gray-700 hover:text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View on GitHub
            </a>
            <a
              href="https://github.com/sponsors/darklang"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              ❤️ Sponsor Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
