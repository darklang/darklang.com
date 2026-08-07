import React from "react";
import { Link } from "react-router-dom";

import SectionTitle from "../../common/ui/SectionTitle";

interface UseCase {
  title: string;
  description: string;
}

const useCases: UseCase[] = [
  {
    title: "APIs and Webhooks",
    description:
      "Typed HTTP handlers, from request to response, with no framework to wire up.",
  },
  {
    title: "CLIs and Automations",
    description:
      "Scripts and tools that run the moment you write them, straight from the terminal.",
  },
  {
    title: "Background Workers",
    description:
      "Crons, queues, and jobs that live in the same program as everything else.",
  },
  {
    title: "Internal Tools and Services",
    description:
      "Small services your team can call, share, and version without extra plumbing.",
  },
];

const UseCaseCard: React.FC<UseCase> = ({ title, description }) => (
  <div className="bg-[#F9F9FB] p-8 rounded-xl flex flex-col">
    <div className="flex items-center mb-4">
      <div className="w-1 h-1 rounded-full bg-purple-lbg mr-1"></div>
      <div className="w-12 h-0.5 bg-purple-lbg"></div>
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const TryDarklang: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
        <SectionTitle subtitle="Try Darklang" align="center">
          See Where Darklang <span className="text-purple-lbg">Fits</span>
        </SectionTitle>

        <p className="max-w-3xl mx-auto text-center text-lg md:text-xl text-gray-700 mb-12">
          Darklang is a good fit when you are building:
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map(useCase => (
            <UseCaseCard key={useCase.title} {...useCase} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/getting-started"
            className="inline-flex items-center gap-2 rounded-full bg-purple-lbg hover:bg-purple-secondry text-white-custom font-medium px-8 py-3 text-lg transition-colors"
          >
            Try Darklang
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TryDarklang;
