import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";

interface FeatureCardProps {
  title: React.ReactNode;
  description: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  className = "",
}) => (
  <div className={`bg-[#F9F9FB] p-10 rounded-xl flex flex-col ${className}`}>
    <div className="mb-5">
      <div className="flex items-center mb-4">
        <div className="w-1 h-1 rounded-full bg-purple-lbg mr-1"></div>
        <div className="w-15 h-0.5 bg-purple-lbg"></div>
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <div className="text-lg">{description}</div>
  </div>
);

const AsyncRuntime = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
        <SectionTitle subtitle="Simplified concurrency">
          Async Runtime
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Left side */}
          <div className="md:col-span-2">
            <FeatureCard
              title={
                <>
                  No <span className="text-purple-lbg">async / await</span>
                </>
              }
              description={
                <p className="text-gray-700">
                  Adding async and await keywords to every language was a
                  mistake. It exposes the complexity of concurrency and
                  multi-threading to languages which were originally designed
                  for simplicity.
                </p>
              }
            />
          </div>

          {/* Right column card */}
          <div className="md:row-span-2">
            <FeatureCard
              className="h-full"
              title={
                <>
                  <span className="text-purple-lbg">Concurrent</span> and{" "}
                  <span className="text-purple-lbg">parallel</span> execution
                  via data-dependencies
                </>
              }
              description={
                <div className="space-y-4 text-gray-700 flex flex-col justify-between h-full">
                  <p>
                    When you make an async request, it first waits for any
                    arguments that are async, and starts when they're done. If
                    another function call needs to use the result, it will wait
                    for it before starting.
                  </p>
                  <p>
                    Since darklang values are immutable, there won't be any race
                    conditions from this.
                  </p>
                </div>
              }
            />
          </div>

          {/* Second row cards */}
          <div className="md:col-span-2 grid md:grid-cols-2 gap-4">
            <FeatureCard
              title={
                <>
                  Fully <span className="text-purple-lbg">asynchronous</span>{" "}
                  runtime
                </>
              }
              description={
                <p className="text-gray-700">
                  Darklang has a fully asynchronous runtime, so making a Http
                  call or reading a file doesn't block the runtime.
                </p>
              }
            />

            <FeatureCard
              title={
                <>
                  Powerful{" "}
                  <span className="text-purple-lbg">escape hatches</span>
                </>
              }
              description={
                <p className="text-gray-700">
                  We provide powerful escape hatches if you need async ordering
                  that doesn't match the data dependencies of your program.
                </p>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AsyncRuntime;
