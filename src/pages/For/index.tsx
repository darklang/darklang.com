import React from "react";
import ForCard from "../../components/ForCard";

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
          <div className="w-32 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-4xl mx-auto">
            Discover how Darklang solves the specific challenges in your field.
            Whether you're building web apps, automating tasks, or creating AI
            applications— there's a better way.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {audiencePages.map(audience => (
            <ForCard
              key={audience.path}
              title={audience.title}
              description={audience.description}
              icon={audience.icon}
              path={audience.path}
            />
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="my-28">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Coming Soon
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <ForCard
              title="Home Automation"
              description="Control your smart home and automate your life with Dark."
              icon="🔌"
              disabled={true}
            />
            <ForCard
              title="eInk Devices"
              description="Create apps for Remarkable, and other eInk tablets."
              icon="📱"
              disabled={true}
            />
            <ForCard
              title="Unix Users"
              description="Powerful CLI tools and system integrations for Unix environments."
              icon="🐧"
              disabled={true}
            />
            <ForCard
              title="Accessibility"
              description="Build inclusive applications that work for everyone."
              icon="🔍"
              disabled={true}
            />
            <ForCard
              title="Privacy Advocates"
              description="Create privacy-respecting software with built-in safeguards."
              icon="🛡️"
              disabled={true}
            />
            <ForCard
              title="Domain Collectors"
              description="Put those unused domains to work with quick deployment."
              icon="🔗"
              disabled={true}
            />
            <ForCard
              title="Entrepreneurs"
              description="Launch your MVP in days, not months. Validate ideas quickly."
              icon="🚀"
              disabled={true}
            />
            <ForCard
              title="Contractors"
              description="Deliver more value to clients with rapid development cycles."
              icon="⚙️"
              disabled={true}
            />
          </div>
        </div>

        {/* Why Specialized Pages */}
        <div className="">
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
