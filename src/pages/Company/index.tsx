import React from "react";

const Company: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto overflow-visible">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Darklang Inc.
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
        </div>

        {/* Vision & Mission - Offset Blocks Design */}
        <div className="mb-18 relative py-6">
          <div className="grid md:grid-cols-2 gap-8 2xl:gap-12 relative overflow-visible items-stretch">
            {/* Vision Block - Offset and angled */}
            <div className="relative transform transition-all duration-700 ease-out m-3">
              <div className="absolute inset-0 bg-blue-lbg rounded-xl transform rotate-1 -translate-x-1 translate-y-1 opacity-50"></div>
              <div className="absolute inset-0 bg-indigo-500 rounded-xl transform -rotate-2 -translate-x-2 translate-y-2 opacity-30"></div>
              <div className="bg-white p-6 rounded-xl relative z-10 shadow-lg transform rotate-1 h-full border border-0.5 border-blue-lbg/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-lbg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-lbg to-blue-dbg/75">
                      Our Vision
                    </h2>
                  </div>
                </div>
                <div>
                  <p className="text-base text-dark-black leading-relaxed pl-0 md:pl-2">
                    A world where building software is as natural as writing a
                    document.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Block - Offset in opposite direction */}
            <div className="relative transform transition-all duration-700 ease-out m-3">
              <div className="absolute inset-0 bg-purple-lbg rounded-xl transform rotate-1 -translate-x-1 translate-y-1 opacity-50"></div>
              <div className="absolute inset-0 bg-purple-secondry rounded-xl transform -rotate-2 -translate-x-2 translate-y-2 opacity-30"></div>
              <div className="bg-white p-6 rounded-xl relative z-10 shadow-lg transform rotate-1 h-full border border-0.5 border-purple-lbg/10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-lbg"
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
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-lbg to-purple-secondry">
                      Our Mission
                    </h2>
                  </div>
                </div>
                <div>
                  <p className="text-base text-dark-black leading-relaxed pl-0 md:pl-2">
                    We eliminate complexity in software development by
                    integrating everything you need into one platform that just
                    works.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slogan Card */}
          <div className="mt-14 mx-auto">
            <p className="text-xl font-bold text-center text-gray-600">
              "Write code, get software, no BS"
            </p>
          </div>
        </div>

        {/* Our Philosophy */}
        <div className="mb-18">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Our Philosophy
          </h2>
          <p className="md:text-lg 2xl:text-xl text-gray-700 leading-relaxed mb-6">
            Programming is too hard. We're making it less complex for everyone
            by building a platform guided by these core principles:
          </p>
          <div className="grid md:grid-cols-2 gap-6 md:text-lg">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mt-3 mr-3 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-700">Simple by default:</strong>{" "}
                  Just one system, no annoying integrations, no annoying
                  payments, no complexity that blocks creativity.
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-purple-lbg rounded-full mt-3 mr-3 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-700">Local-first:</strong> Your
                  code and data live on your machine first, with cloud sync and
                  collaboration when you want it.
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-mint rounded-full mt-3 mr-3 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-700">Accessible:</strong> Works
                  from any computer, supports voice and assistive technologies,
                  available in multiple languages.
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-taupe rounded-full mt-3 mr-3 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-700">Composable:</strong> Build
                  with reusable pieces that fit together naturally, sharing and
                  remixing code across the community.
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-rose rounded-full mt-3 mr-3 flex-shrink-0"></span>
                <div>
                  <strong className="text-gray-700">Malleable:</strong>{" "}
                  Changeable, forkable, extensible. The platform adapts to you,
                  not the other way around.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team & Contributions */}
        <div className="mb-18">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Small Team, Big Vision
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p className="md:text-lg 2xl:text-xl ">
              Darklang is built by just 2 full-time employees, but we're part of
              a larger community of contributors, users, and supporters who
              believe in making programming less complex.
            </p>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-lbg mb-3">
                We'd Love Your Help
              </h3>

              <p className="text-gray-700 mb-5">
                Whether you're fixing bugs, adding features, improving
                documentation, or sharing feedback, every contribution makes
                Darklang better for everyone.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-4 flex items-center shadow-sm">
                  <div className="bg-blue-lbg rounded-lg p-2 mr-4 flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">
                      Code contributions:
                    </div>
                    <div className="text-gray-600">
                      Check out our GitHub issues for good first contributions
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-center shadow-sm">
                  <div className="bg-purple-lbg rounded-lg p-2 mr-4 flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">
                      Documentation:
                    </div>
                    <div className="text-gray-600">
                      Help us explain Darklang concepts clearly
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-center shadow-sm">
                  <div className="bg-mint rounded-lg p-2 mr-4 flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Community:</div>
                    <div className="text-gray-600">
                      Answer questions and share your experience
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-center shadow-sm">
                  <div className="bg-taupe rounded-lg p-2 mr-4 flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Feedback:</div>
                    <div className="text-gray-600">
                      Tell us what works and what doesn't
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm md:text-base text-gray-600">
              Want to know how we keep this sustainable? Read about our
              <a
                href="/company/sustainability"
                className="text-blue-lbg hover:underline"
              >
                {" "}
                approach to funding and business model
              </a>
              .
            </p>
          </div>
        </div>

        {/* Journey Section */}
        <div className="mb-18">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="text-gray-700 md:text-lg 2xl:text-xl leading-relaxed space-y-8">
            <p>
              We started Darklang in 2017 because software development was too
              complex. Instead of patching existing systems, we reimagined
              everything—language, deployment, version control—as one integrated
              platform.
            </p>
            <p>
              Our first version featured a revolutionary structured editor with
              live values. While powerful, it required abandoning familiar text
              editors. We learned that innovation needs to meet people where
              they are.
            </p>
            <p>
              In early 2025, we transitioned from Dark Inc. to Darklang Inc. to
              continue building the platform with renewed focus. Original
              founder Paul Biggar remains active as an advisor and investor.
              We're now fully open source and building for the AI era, where the
              platform should amplify human creativity.
            </p>
            <div className="pt-6 border-t border-gray-200">
              <p>
                Read more in our blog posts:
                <a
                  href="https://blog.darklang.com/goodbye-dark-inc-welcome-darklang-inc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rust hover:underline"
                >
                  {" "}
                  Company Transition
                </a>{" "}
                and
                <a
                  href="https://blog.darklang.com/first-steps-of-darklang-inc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rust hover:underline ml-1"
                >
                  First Steps
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Current Focus */}
        <div className="mb-10 md:mb-18">
          <h2 className="text-xl font-bold text-gray-800 mb-8">
            What We're Building Now
          </h2>

          <div className="md:grid grid-cols-2 gap-6 px-6">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 mr-3 w-9 h-9 flex items-center justify-center rounded-full bg-purple-100 text-purple-lbg">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-medium md:text-lgtext-gray-800">
                  Language & Runtime
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  CLI-ready with gradual static typing
                </div>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 mr-3 w-9 h-9 flex items-center justify-center rounded-full bg-purple-100 text-purple-lbg">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-medium md:text-lgtext-gray-800">
                  Editor Support
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  VSCode extension with LSP
                </div>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 mr-3 w-9 h-9 flex items-center justify-center rounded-full bg-purple-100 text-purple-lbg">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <div>
                <div className="font-medium md:text-lgtext-gray-800">
                  Package System
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  Function-level package management
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3 w-9 h-9 flex items-center justify-center rounded-full bg-purple-100 text-purple-lbg">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-medium md:text-lgtext-gray-800">
                  Community
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  Open-sourcing and contributor growth
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div className="bg-white rounded-md shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Join Our Community
          </h2>
          <div className="text-gray-700 md:text-lg leading-relaxed space-y-4">
            <p>
              Darklang is more than a programming language—it's a community of
              developers who believe software development can be better. Whether
              you're interested in contributing code, sharing feedback, or just
              following our progress, there are many ways to get involved.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="https://discord.gg/darklang"
                className="bg-[#7B85FF] text-white px-5 py-2 rounded-md hover:bg-blue-lbg transition-colors font-medium text-sm"
              >
                Join Discord
              </a>
              <a
                href="https://github.com/darklang/dark"
                className="bg-slate-600 text-white px-5 py-2 rounded-md hover:bg-slate-700 transition-colors font-medium text-sm"
              >
                GitHub
              </a>
              <a
                href="https://blog.darklang.com"
                className="border border-slate-600 text-slate-700 px-5 py-2 rounded-md hover:bg-slate-50 transition-colors font-medium text-sm"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
