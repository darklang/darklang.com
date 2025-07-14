import React from "react";

const Distribution: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Distribution
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
        </div>

        {/* Status Section */}
        <div className="bg-gray-50 rounded-md p-4 mb-8">
          <pre className="text-sm font-mono text-gray-700 leading-relaxed">
            package management source control building artifacts for end users
          </pre>
        </div>

        {/* Main Content Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-700 leading-relaxed">
            <span className="text-sm text-gray-500 italic block mb-4">
              TODO: move this somewhere else
            </span>
            Darklang is a cloud-native programming language and platform
            designed to simplify the development of serverless backends by
            introducing a "deployless" model. This approach aims to remove the
            complexities of traditional software deployment, allowing developers
            to focus on writing code rather than managing infrastructure,
            builds, or deployment pipelines.
          </p>

          <p className="text-gray-700 leading-relaxed mt-6">
            In traditional software development, deploying code involves
            multiple steps: writing code, committing it to a repository (e.g.,
            via Git), creating pull requests, building assets, pushing
            containers to registries, and orchestrating deployments (e.g., via
            Kubernetes). Darklang eliminates roughly 60% of these steps by
            integrating the language, editor, and infrastructure into a cohesive
            platform. The result is a deployment process that takes
            approximately 50 milliseconds, enabling rapid iteration and testing
            in production.
          </p>

          <p className="text-gray-700 leading-relaxed mt-6">
            The deployless model is analogous to serverless computing: just as
            serverless abstracts away server management, deployless abstracts
            away deployment management so that you don't have to think about it
          </p>

          <p className="text-gray-700 leading-relaxed mt-6">
            Developers don't need to configure build systems, containers,
            Kubernetes, or CI/CD pipelines. The platform handles scaling,
            monitoring, and optimization
          </p>

          <p className="text-gray-700 leading-relaxed mt-6">
            Feature flags allow developers to test code in production without
            exposing it to users, and precise access controls enhance security
          </p>

          <p className="text-gray-700 leading-relaxed mt-6">
            No Infrastructure Management: Developers avoid configuring servers,
            databases, or networking components.
          </p>

          <p className="text-gray-700 leading-relaxed mt-6">
            Developers spend less time on DevOps tasks, focusing on application
            logic
          </p>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
