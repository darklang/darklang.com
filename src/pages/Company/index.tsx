import React from "react";

const Company: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Darklang Inc.
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
        </div>

        {/* Vision & Mission */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A world where building software is as natural as writing a document.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We eliminate complexity in software development by integrating everything 
                you need into one platform that just works.
              </p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-blue-200">
            <p className="text-xl font-medium text-blue-lbg text-center">
              "Write code, get software, no BS"
            </p>
          </div>
        </div>

        {/* Our Philosophy */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Philosophy</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Programming is too hard. We're making it less complex for everyone by building 
            a platform guided by these core principles:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blue-lbg rounded-full mt-3 mr-3 flex-shrink-0"></span>
                <div>
                  <strong>Simple by default:</strong> Just one system, no annoying integrations, 
                  no annoying payments, no complexity that blocks creativity.
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-purple-lbg rounded-full mt-3 mr-3 flex-shrink-0"></span>
                <div>
                  <strong>Local-first:</strong> Your code and data live on your machine first, 
                  with cloud sync and collaboration when you want it.
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-mint rounded-full mt-3 mr-3 flex-shrink-0"></span>
                <div>
                  <strong>Accessible:</strong> Works from any computer, supports voice and 
                  assistive technologies, available in multiple languages.
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-taupe rounded-full mt-3 mr-3 flex-shrink-0"></span>
                <div>
                  <strong>Composable:</strong> Build with reusable pieces that fit together 
                  naturally, sharing and remixing code across the community.
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-rose rounded-full mt-3 mr-3 flex-shrink-0"></span>
                <div>
                  <strong>Malleable:</strong> Changeable, forkable, extensible. The platform 
                  adapts to you, not the other way around.
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Team & Contributions */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Small Team, Big Vision</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Darklang is built by just 2 full-time employees, but we're part of a 
              larger community of contributors, users, and supporters who believe in 
              making programming less complex.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-lbg">
              <h3 className="font-semibold text-gray-800 mb-3">We'd Love Your Help</h3>
              <p className="mb-3">
                Whether you're fixing bugs, adding features, improving documentation, 
                or sharing feedback, every contribution makes Darklang better for everyone.
              </p>
              <div className="space-y-2 text-sm">
                <div>• <strong>Code contributions:</strong> Check out our GitHub issues for good first contributions</div>
                <div>• <strong>Documentation:</strong> Help us explain Darklang concepts clearly</div>
                <div>• <strong>Community:</strong> Answer questions and share your experience</div>
                <div>• <strong>Feedback:</strong> Tell us what works and what doesn't</div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600">
              Want to know how we keep this sustainable? Read about our 
              <a href="/company/sustainability" className="text-blue-lbg hover:underline">approach to funding and business model</a>.
            </p>
          </div>
        </div>

        {/* Journey Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              We started Darklang in 2017 because software development was too complex. 
              Instead of patching existing systems, we reimagined everything—language, 
              deployment, version control—as one integrated platform.
            </p>
            <p>
              Our first version featured a revolutionary structured editor with live values. 
              While powerful, it required abandoning familiar text editors. We learned that 
              innovation needs to meet people where they are.
            </p>
            <p>
              Today's Darklang keeps all the integration benefits while working with 
              standard text editors and workflows. We're building for the AI era, 
              where the platform should amplify human creativity, not constrain it.
            </p>
          </div>
        </div>

        {/* Current Focus */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8 border-l-4 border-blue-lbg">
          <h2 className="text-xl font-bold text-gray-900 mb-4">What We're Building Now</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-sm">
              <div className="font-medium text-gray-800">Language & Runtime</div>
              <div className="text-gray-600">CLI-ready with gradual static typing</div>
            </div>
            <div className="text-sm">
              <div className="font-medium text-gray-800">Editor Support</div>
              <div className="text-gray-600">VSCode extension with LSP</div>
            </div>
            <div className="text-sm">
              <div className="font-medium text-gray-800">Package System</div>
              <div className="text-gray-600">Function-level package management</div>
            </div>
            <div className="text-sm">
              <div className="font-medium text-gray-800">Community</div>
              <div className="text-gray-600">Open-sourcing and contributor growth</div>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Join Our Community</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Darklang is more than a programming language—it's a community of 
              developers who believe software development can be better. Whether 
              you're interested in contributing code, sharing feedback, or just 
              following our progress, there are many ways to get involved.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a 
                href="https://discord.gg/darklang" 
                className="bg-blue-lbg text-white px-6 py-3 rounded-md hover:bg-purple-lbg transition-colors"
              >
                Join Discord
              </a>
              <a 
                href="https://github.com/darklang/dark" 
                className="border border-blue-lbg text-blue-lbg px-6 py-3 rounded-md hover:bg-blue-50 transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://blog.darklang.com" 
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors"
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
