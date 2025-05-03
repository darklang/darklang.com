import React from "react";

const Distribution: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <pre>
        package management
        source control
        building artifacts for end users
      </pre>
      <p>
        TODO: move this somewhere else
        <br />
        Darklang is a cloud-native programming language and platform designed to simplify the development of serverless backends by introducing a "deployless" model. This approach aims to remove the complexities of traditional software deployment, allowing developers to focus on writing code rather than managing infrastructure, builds, or deployment pipelines.

        In traditional software development, deploying code involves multiple steps: writing code, committing it to a repository (e.g., via Git), creating pull requests, building assets, pushing containers to registries, and orchestrating deployments (e.g., via Kubernetes). Darklang eliminates roughly 60% of these steps by integrating the language, editor, and infrastructure into a cohesive platform. The result is a deployment process that takes approximately 50 milliseconds, enabling rapid iteration and testing in production.


        The deployless model is analogous to serverless computing: just as serverless abstracts away server management, deployless abstracts away deployment management so that you don’t have to think about it

        Developers don’t need to configure build systems, containers, Kubernetes, or CI/CD pipelines. The platform handles scaling, monitoring, and optimization

        Feature flags allow developers to test code in production without exposing it to users, and precise access controls enhance security

        No Infrastructure Management: Developers avoid configuring servers, databases, or networking components.

        Developers spend less time on DevOps tasks, focusing on application logic
      </p>
    </div>
  );
};

export default Distribution;