import React from "react";
import { Link } from "react-router-dom";

const For: React.FC = () => {
  const audiencePages = [
    {
      path: "web-developers",
      title: "Web Developers",
      description:
        "Skip the backend complexity. Build your web app's API in minutes, not days.",
      icon: "🌐",
    },
    {
      path: "python-developers",
      title: "Python Developers",
      description:
        "Skip the Flask/Django setup. Build APIs and automation scripts that run instantly.",
      icon: "🐍",
    },
    {
      path: "ai-developers",
      title: "AI Developers",
      description:
        "The first language designed for the AI era. Build AI applications without the infrastructure complexity.",
      icon: "🤖",
    },
    {
      path: "security-nerds",
      title: "Security Professionals",
      description:
        "Secure by design. Build security tools and automation with a platform that eliminates entire classes of vulnerabilities.",
      icon: "🔒",
    },
    {
      path: "fsharp-developers",
      title: "F# Developers",
      description:
        "Functional programming with instant deployment. Skip the .NET ceremony, keep the type safety.",
      icon: "⚡",
    },
    {
      path: "small-businesses",
      title: "Small Businesses",
      description:
        "Custom software solutions without the enterprise price tag. Build exactly what your business needs.",
      icon: "🏪",
    },
    {
      path: "local-first",
      title: "Local-First Developers",
      description:
        "Build resilient applications that work offline and sync seamlessly. Your data stays yours.",
      icon: "📱",
    },
    {
      path: "web-scrapers",
      title: "Web Scrapers",
      description:
        "The web is cluttered with ads, trackers, and noise. Extract the signal from the chaos.",
      icon: "🕷️",
    },
    {
      path: "lazy-people",
      title: "Lazy People",
      description:
        "Why do things the hard way when you can automate them? Maximum results, minimum effort.",
      icon: "😎",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Darklang For...
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Discover how Darklang solves the specific challenges in your field.
            Whether you're building web apps, automating tasks, or creating AI
            applications— there's a better way.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {audiencePages.map(audience => (
            <Link
              key={audience.path}
              to={`/for/${audience.path}`}
              className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 hover:border-blue-lbg"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{audience.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-lbg transition-colors">
                  {audience.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {audience.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Coming Soon
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="text-2xl mb-2">🏠</div>
              <div className="text-sm font-medium text-gray-700">
                Home Automation
              </div>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">📺</div>
              <div className="text-sm font-medium text-gray-700">
                eInk Devices
              </div>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">🖥️</div>
              <div className="text-sm font-medium text-gray-700">
                Unix Users
              </div>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">♿</div>
              <div className="text-sm font-medium text-gray-700">
                Accessibility
              </div>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">🔒</div>
              <div className="text-sm font-medium text-gray-700">
                Privacy Advocates
              </div>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">🌐</div>
              <div className="text-sm font-medium text-gray-700">
                Domain Collectors
              </div>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">💰</div>
              <div className="text-sm font-medium text-gray-700">
                Entrepreneurs
              </div>
            </div>
            <div className="p-4">
              <div className="text-2xl mb-2">🎯</div>
              <div className="text-sm font-medium text-gray-700">
                Contractors
              </div>
            </div>
          </div>
        </div>

        {/* Why Specialized Pages */}
        <div className="border-l-4 border-blue-lbg pl-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Different Pages for Different People?
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Every field has its own challenges, tools, and workflows. A web
              developer's pain points are different from a security
              professional's, which are different from a small business owner's.
            </p>
            <p>
              Instead of generic marketing speak, each page speaks directly to
              your specific situation. We explain how Darklang solves the
              problems you actually face, using examples from your domain.
            </p>
            <p className="text-lg font-medium text-blue-lbg">
              Same platform, tailored to your world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default For;
