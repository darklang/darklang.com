import React from "react";

import packageManagerImg from "~/assets/packageManager.png";

import SectionTitle from "../../common/ui/SectionTitle";

const PackageManager: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "No Install Step",
      description:
        "Built-in package management without npm-style installation processes or Python's painful package compatibility issues.",
    },
    {
      id: 2,
      title: "Immutable",
      description:
        "Updates never overwrite existing code but create new versions with unique identifiers.",
    },
    {
      id: 3,
      title: "Precise Package Item Control",
      description:
        "Only download and upgrade the specific package items you use.",
    },
    {
      id: 4,
      title: "Source-Controlled Package Management",
      description: "The package manager functions as a source repository.",
    },
    {
      id: 5,
      title: "Smart Dependency Management",
      description:
        "Automated dependency upgrades, as we track deprecation status, and know what functions are pure and safe to update.",
    },
    {
      id: 6,
      title: "Version Flexibility",
      description:
        "Different packages can rely on different versions of other packages.",
    },
    {
      id: 7,
      title: "Parallel Versioning",
      description:
        "Use multiple versions of the same package item at once: allows testing new versions without having to change an entire package version, lowering risk.",
    },
    {
      id: 8,
      title: "Effortless Pre-Release Sharing",
      description:
        "Share pre-release functions trivially, without contributors needing to check out your git repo or set up anything.",
    },
    {
      id: 9,
      title: "Zero Overhead Workflow",
      description:
        "No need for uploads, releases or other synchronization. No git or GitHub required (but you can sync to GitHub if you prefer).",
    },
  ];

  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
        <SectionTitle subtitle="Package Management">
          Next-gen Package Manager
        </SectionTitle>
        <div className="mb-2">
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-10">
            Darklang has a rather unique package manager built directly into the
            runtime, where functions and types are individually versioned and
            immutable, taking a lot of the hassle out of package management.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 space-y-5 order-2 md:order-1">
            {features.map(feature => (
              <div key={feature.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0 my-1.5">
                  <div className="w-5 h-5 text-purple-lbg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="22"
                      viewBox="0 0 21 22"
                      fill="none"
                    >
                      <path
                        opacity="0.2"
                        d="M10.1562 11.042V21.0918C10.025 21.0913 9.89607 21.0577 9.78125 20.9941L1.1875 16.2891C1.06479 16.2219 0.962355 16.1231 0.890895 16.0028C0.819434 15.8826 0.781568 15.7453 0.78125 15.6055V6.26562C0.78156 6.15621 0.80485 6.04808 0.849609 5.94824L10.1562 11.042Z"
                        fill="#95589F"
                      />
                      <path
                        d="M19.5 4.89557L10.9062 0.193423C10.6766 0.0665499 10.4186 0 10.1562 0C9.89391 0 9.63587 0.0665499 9.40625 0.193423L0.8125 4.89752C0.567079 5.03181 0.36221 5.22952 0.219289 5.47001C0.0763674 5.7105 0.000635017 5.98496 0 6.26471V15.6046C0.000635017 15.8843 0.0763674 16.1588 0.219289 16.3993C0.36221 16.6398 0.567079 16.8375 0.8125 16.9717L9.40625 21.6758C9.63587 21.8027 9.89391 21.8693 10.1562 21.8693C10.4186 21.8693 10.6766 21.8027 10.9062 21.6758L19.5 16.9717C19.7454 16.8375 19.9503 16.6398 20.0932 16.3993C20.2361 16.1588 20.3119 15.8843 20.3125 15.6046V6.26569C20.3124 5.98544 20.2369 5.71037 20.094 5.46932C19.951 5.22826 19.7459 5.03009 19.5 4.89557ZM10.1562 1.56061L18.002 5.85749L15.0947 7.44928L7.24805 3.15241L10.1562 1.56061ZM10.1562 10.1544L2.31055 5.85749L5.62109 4.04499L13.4668 8.34186L10.1562 10.1544ZM1.5625 7.22467L9.375 11.5001V19.878L1.5625 15.6055V7.22467ZM18.75 15.6016L10.9375 19.878V11.504L14.0625 9.79401V13.2794C14.0625 13.4866 14.1448 13.6853 14.2913 13.8318C14.4378 13.9783 14.6365 14.0606 14.8438 14.0606C15.051 14.0606 15.2497 13.9783 15.3962 13.8318C15.5427 13.6853 15.625 13.4866 15.625 13.2794V8.93854L18.75 7.22467V15.6007V15.6016Z"
                        fill="#95589F"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark mb-1">
                    {feature.title}
                  </h4>
                  <p className="md:text-lg text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="order-1 md:order-2 md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
            <img
              src={packageManagerImg}
              alt="Package Manager Architecture"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageManager;
