import React, { useState } from "react";

import SectionTitle from "../../common/ui/SectionTitle";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-start gap-6">
      <div className="mt-1 flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const LightningIcon = ({ color = "text-purple-lbg" }: { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={color}
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const DeploylessCloud: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"deployless" | "nosetup">(
    "deployless",
  );

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="No Setup"
          align="center"
          className="mb-20"
          description="Instant cloud deployment of code (to our cloud or yours), with instant creation of DBs, API endpoints, and worker queues, with no containers, no cold starts, no orchestration, or other devops/cloud engineering required"
          subtitleStyle="button"
        >
          Deployless, Infraless Cloud Apps
        </SectionTitle>

        <div className="flex justify-center max-w-5xl 2xl:max-w-6xl mx-auto text-center mb-4">
          <div
            className={`flex-1 pb-2 ${
              activeTab === "deployless"
                ? "border-b-2 border-purple-lbg"
                : "border-b border-gray-200"
            }`}
          >
            <button
              onClick={() => setActiveTab("deployless")}
              className={`md:text-2xl font-semibold py-2 ${
                activeTab === "deployless" ? "text-purple-lbg" : "text-gray-700"
              }`}
            >
              Deployless
            </button>
          </div>

          <div
            className={`flex-1 pb-2 ${
              activeTab === "nosetup"
                ? "border-b-2 border-purple-lbg"
                : "border-b border-gray-200"
            }`}
          >
            <button
              onClick={() => setActiveTab("nosetup")}
              className={`md:text-2xl font-semibold py-2 ${
                activeTab === "nosetup" ? "text-purple-lbg" : "text-gray-700"
              }`}
            >
              No setup required
            </button>
          </div>
        </div>

        <div className="mt-10 flex justify-start max-w-4xl 2xl:max-w-6xl mx-auto">
          {activeTab === "deployless" && (
            <div className="space-y-12">
              <FeatureCard
                icon={<LightningIcon />}
                title="Write code and it's immediately available"
                description="No build step, no wait time, no deployment pipeline your code is live as soon as you type."
              />

              <FeatureCard
                icon={<LightningIcon />}
                title="Feature flags for controlled rollouts"
                description="Control exactly when and for whom new features go live. Test in production safely with instant rollback capability"
              />

              <FeatureCard
                icon={<LightningIcon />}
                title="Development/Production Parity"
                description="Your development environment matches the production environment, so you can test with confidence."
              />

              <FeatureCard
                icon={<LightningIcon />}
                title="Integrated code review and testing"
                description="Review code, run tests, and collaborate seamlessly in one place"
              />
            </div>
          )}

          {activeTab === "nosetup" && (
            <div className="space-y-12">
              <FeatureCard
                icon={<LightningIcon />}
                title="Instant infrastructure creation"
                description="Language-native HTTP handlers, Databases, CRONs and queues, without thinking about servers, containers, or deployment"
              />

              <FeatureCard
                icon={<LightningIcon />}
                title="Simplified Architecture"
                description="No need to worry about connection poolers, sharding, indexes, load balancers, cloud services, or system administration—everything runs seamlessly in the background"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DeploylessCloud;
