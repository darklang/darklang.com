import React from "react";
import { Link } from "react-router-dom";
import ForCard from "./ForCard";

interface ForPage {
  path: string;
  title: string;
  description: string;
  icon: string;
}

interface RelatedForPagesProps {
  currentPath: string;
}

const RelatedForPages: React.FC<RelatedForPagesProps> = ({ currentPath }) => {
  const forPages: ForPage[] = [
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

  // Filter out the current page and randomly select 3 others
  const otherPages = forPages
    .filter(page => page.path !== currentPath)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div className="mt-20 pt-12 border-t border-gray-200">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Other Use Cases
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Darklang adapts to your needs. Explore how others are using it to
          solve their unique challenges.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {otherPages.map(page => (
          <ForCard
            key={page.path}
            title={page.title}
            description={page.description}
            icon={page.icon}
            path={page.path}
          />
        ))}
      </div>

      {/* Button to main For page */}
      <div className="text-center">
        <Link
          to="/For"
          className="inline-flex items-center px-6 py-3 border border-purple-lbg text-purple-lbg font-semibold rounded-lg hover:bg-purple-lbg hover:text-white shadow-md hover:shadow-lg"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          Explore All Use Cases
        </Link>
      </div>
    </div>
  );
};

export default RelatedForPages;
