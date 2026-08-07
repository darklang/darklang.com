import React from "react";
import { Link } from "react-router-dom";

import SectionTitle from "../../common/ui/SectionTitle";

const CubeIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="22"
    viewBox="0 0 21 22"
    fill="none"
    aria-hidden="true"
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
);

/** What the package manager itself does. */
const CORE_FEATURES = [
  {
    id: 1,
    title: "No Separate Install Step",
    description:
      "Reference a function, type, or value by name and use it. There is no install command and no setup step before a program can run.",
  },
  {
    id: 2,
    title: "Published Versions Do Not Change",
    description:
      "Changing an item creates a new version with its own identifier. Existing versions are never overwritten, so programs already using them keep working.",
  },
  {
    id: 3,
    title: "Definition-Level Versions and Dependencies",
    description:
      "Functions, types, and values each carry their own version, and a program depends on the exact definitions it references. A small change does not version a whole package, and nothing beyond what you reference is downloaded or upgraded.",
  },
  {
    id: 4,
    title: "Dependency and Dependent Tracking",
    description:
      "Every item records what it uses and what uses it, so the impact of a change is known before it is made.",
  },
  {
    id: 5,
    title: "Different Versions Can Coexist",
    description:
      "Two parts of a program, or two packages, can rely on different versions of the same item. A new version can be tested without changing every existing caller.",
  },
  {
    id: 6,
    title: "Explicit Upgrades",
    description:
      "Publishing a new version does not move existing programs onto it. Each caller upgrades when it is ready.",
  },
  {
    id: 7,
    title: "Deprecation Information",
    description:
      "An item can be marked as deprecated or replaced by a named version. Programs can keep using the old one while they migrate.",
  },
];

const Glyph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

/** Separate systems that share the same versioned definitions. */
const CONNECTED = [
  {
    id: 1,
    title: "Built-in Source Control",
    description:
      "Package items carry their own versions and history, so there is one system rather than two kept in step.",
    to: "/source-control",
    linkLabel: "Source control",
    iconClass: "bg-rust/10 text-rust",
    icon: (
      <Glyph>
        <circle cx="6" cy="6" r="2.6" />
        <circle cx="18" cy="18" r="2.6" />
        <path d="M6 8.6V15a3 3 0 0 0 3 3h6" />
      </Glyph>
    ),
  },
  {
    id: 2,
    title: "Sharing Between Instances",
    description:
      "Move work between your machine, your own infrastructure, and the cloud. No uploads or release step.",
    to: "/distribution",
    linkLabel: "Distribution & sync",
    iconClass: "bg-acc-teal/10 text-acc-teal",
    icon: (
      <Glyph>
        <path d="M4 9a8 8 0 0 1 13.7-5.6L20 6" />
        <path d="M20 2v4h-4" />
        <path d="M20 15a8 8 0 0 1-13.7 5.6L4 18" />
        <path d="M4 22v-4h4" />
      </Glyph>
    ),
  },
  {
    id: 3,
    title: "No Publishing Process",
    description:
      "Share functions, types, and values directly. Nobody has to clone a repository first.",
    to: "/packages",
    linkLabel: "Browse the packages",
    iconClass: "bg-purple-lbg/10 text-purple-dbg",
    icon: (
      <Glyph>
        <circle cx="18" cy="5" r="2.6" />
        <circle cx="6" cy="12" r="2.6" />
        <circle cx="18" cy="19" r="2.6" />
        <path d="m8.3 10.7 7.4-4.4M8.3 13.3l7.4 4.4" />
      </Glyph>
    ),
  },
];

const PackageManager: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <SectionTitle subtitle="Package Management">
              Next-Gen Package Manager
            </SectionTitle>
            <p className="text-base md:text-lg 2xl:text-xl text-gray-700 mb-10">
              Darklang has a rather unique package manager built directly into
              the runtime, where functions, types, and values are individually
              versioned and immutable, taking a lot of the hassle out of package
              management.
            </p>

            <div className="space-y-5">
              {CORE_FEATURES.map(feature => (
                <div key={feature.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 my-1.5">
                    <div className="w-5 h-5 text-purple-lbg">
                      <CubeIcon />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg 2xl:text-xl font-semibold text-dark mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-base md:text-lg 2xl:text-xl text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
            <img
              src="/assets/packageManager.png"
              alt="Package Manager Architecture"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* These are separate systems; they share the same versioned
            definitions rather than being features of the package manager. */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-black-custom mb-4">
            How Packages Connect to the Rest of Darklang
          </h3>
          <p className="text-base md:text-lg 2xl:text-xl text-gray-700 max-w-3xl mb-10">
            These are separate parts of Darklang, built on the same versioned
            functions, types, and values.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {CONNECTED.map(item => (
              <div
                key={item.id}
                className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-6"
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${item.iconClass}`}
                >
                  {item.icon}
                </span>
                <h4 className="text-lg 2xl:text-xl font-semibold text-dark">
                  {item.title}
                </h4>
                {/* flex-1 keeps every link on the same baseline */}
                <p className="flex-1 text-base 2xl:text-lg text-gray-600">
                  {item.description}
                </p>
                <Link
                  to={item.to}
                  className="group inline-flex items-center gap-1.5 font-medium text-purple-lbg"
                >
                  {item.linkLabel}
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageManager;
