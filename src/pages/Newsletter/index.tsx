import React from "react";
import Newsletter from "../Home/Newsletter";

const NewsletterPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Stay Connected with <span className="text-blue-lbg">Dark</span>
          </h1>
          <div className="w-44 h-1.5 bg-blue-lbg mx-auto rounded-full mb-10"></div>

          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Join our community and get the latest updates on features,
            development progress, and insights from our team.
          </p>
        </div>
      </div>

      <Newsletter />

      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-lbg/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-lbg"
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
              <h3 className="text-xl font-semibold mb-2">Early Access</h3>
              <p className="text-gray-600">
                Be among the first to try new Dark features as they're released.
              </p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-purple-lbg/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-lbg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Developer Stories</h3>
              <p className="text-gray-600">
                Read about how other developers are building with Dark.
              </p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-purple-lbg/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-lbg"
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
              <h3 className="text-xl font-semibold mb-2">
                Technical Deep Dives
              </h3>
              <p className="text-gray-600">
                Learn about the architecture and design decisions behind Dark.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPage;
