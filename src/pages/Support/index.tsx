import React from "react";
import { Link } from "react-router-dom";

type Resource = {
  title: string;
  description: string;
  href: string;
  external?: boolean;
};

const GETTING_STARTED: Resource[] = [
  {
    title: "Getting Started Guide",
    description: "Quick start guide and installation instructions",
    href: "/getting-started",
  },
  {
    title: "Official Documentation",
    description: "Comprehensive language and platform documentation",
    href: "https://docs.darklang.com",
    external: true,
  },
  {
    title: "Language Overview",
    description: "Understanding Darklang's “everything in one box” approach",
    href: "/language",
  },
];

const DEVELOPER_RESOURCES: Resource[] = [
  {
    title: "Source Code",
    description: "Open source under Apache License 2.0",
    href: "https://github.com/darklang/dark",
    external: true,
  },
  {
    title: "Package Registry",
    description: "Community packages and libraries",
    href: "/packages",
  },
  {
    title: "CLI Documentation",
    description: "Command-line interface and local development",
    href: "/cli",
  },
];

/** An arrow that slides forward on hover, so a whole row reads as a link. */
const RowArrow: React.FC = () => (
  <svg
    className="mt-1 h-4 w-4 flex-shrink-0 text-gray-300 transition group-hover:translate-x-0.5 group-hover:text-blue-dbg"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const ResourceRow: React.FC<{ resource: Resource }> = ({ resource }) => {
  const body = (
    <>
      <span className="min-w-0">
        <span className="block font-semibold text-gray-900 group-hover:text-blue-dbg">
          {resource.title}
        </span>
        <span className="block text-sm text-gray-500 2xl:text-base">
          {resource.description}
        </span>
      </span>
      <RowArrow />
    </>
  );

  const className =
    "group flex items-start justify-between gap-4 py-4 first:pt-0 last:pb-0";

  return resource.external ? (
    <a
      href={resource.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {body}
    </a>
  ) : (
    <Link to={resource.href} className={className}>
      {body}
    </Link>
  );
};

const ResourceGroup: React.FC<{ label: string; resources: Resource[] }> = ({
  label,
  resources,
}) => (
  <div>
    <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
      {label}
    </h3>
    <div className="divide-y divide-gray-200">
      {resources.map(resource => (
        <ResourceRow key={resource.title} resource={resource} />
      ))}
    </div>
  </div>
);

/** Hand-drawn marks scattered down the page margins. */
const QuestionMark: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 40 56"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8.5 16c.4-7.4 6.2-12.2 12.6-11.6 6.9.6 11.1 5.4 10.4 11.2-.8 6.9-8.5 8-11.2 12.9-1 1.8-1.2 3.6-1 5.6" />
    <circle cx="20" cy="44.5" r="1.9" fill="currentColor" stroke="none" />
  </svg>
);

const SpeechBubble: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 64 56"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7.5 22C6.5 12 15 4.5 30 4.5S57 11 56.5 22.5C56 34 46 41 33 41c-2.6 0-5-.2-7.3-.7-3.4 2.6-8 5.3-13.7 7.2 2.2-4 3.4-7.3 3.3-10.3C10.4 33.6 8 28.3 7.5 22z" />
    <path d="M21 20.5h22M21 29h14" />
  </svg>
);

const Lightbulb: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 44 56"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 8.5c-7.4 0-13 5.4-12.8 11.9.1 4.6 3.2 7.4 5 10.2 1 1.6 1.4 3 1.4 4.6h12.8c0-1.6.4-3 1.4-4.6 1.8-2.8 4.9-5.6 5-10.2C34.9 13.9 29.4 8.5 22 8.5z" />
    <path d="M16.6 41.5h10.8M18.4 47h7.2" />
    <path d="M22 1.5v3M6.5 8.5l2.2 2M37.5 8.5l-2.2 2M2 24h3M39 24h3" />
  </svg>
);

const Support: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl 2xl:max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get Help &amp; Support
          </h1>
          <div className="w-28 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-4xl 2xl:max-w-5xl mx-auto">
            Need help with Darklang? Here's how to get support, find answers,
            and connect with our community.
          </p>
        </header>

        {/* Primary Support Channels */}
        <div className="relative mb-20">
          <QuestionMark
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-6 hidden h-16 w-auto -rotate-[14deg] text-purple-lbg/20 lg:block"
          />
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            Where to Ask
          </h2>
          <p className="mb-8 text-gray-600">
            Two places, depending on whether you want a conversation or a record
            of the problem.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Discord Community */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7B85FF]/10">
                  <svg
                    className="h-6 w-6 text-[#7B85FF]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  Discord Community
                </h3>
              </div>

              <p className="text-gray-700">
                Join our Discord server for real-time help, discussions, and
                community support. This is the best place to get quick answers
                and connect with other Darklang developers.
              </p>

              <p className="mt-4 border-t border-gray-100 pt-4 text-sm text-gray-500">
                <span className="font-semibold text-gray-700">Best for</span>{" "}
                quick questions, general discussion, community help,
                announcements
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href="https://darklang.com/discord"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-[#7B85FF] px-4 py-2 font-bold text-white transition-colors hover:bg-blue-dbg"
                >
                  Join Discord
                </a>
              </div>
            </div>

            {/* GitHub Support */}
            <div className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100">
                  <svg
                    className="h-6 w-6 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  GitHub Issues &amp; Discussions
                </h3>
              </div>

              <p className="text-gray-700">
                Report bugs, request features, or participate in longer-form
                discussions about Darklang development on our GitHub repository.
              </p>

              <p className="mt-4 border-t border-gray-100 pt-4 text-sm text-gray-500">
                <span className="font-semibold text-gray-700">Best for</span>{" "}
                bug reports, feature requests, technical discussions, feedback
                on development
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href="https://github.com/darklang/dark/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-gray-800 px-4 py-2 font-bold text-white transition-colors hover:bg-gray-900"
                >
                  Report Issues
                </a>
                <a
                  href="https://github.com/darklang/dark/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-gray-300 px-4 py-2 font-bold text-gray-700 transition-colors hover:bg-gray-50"
                >
                  Discussions
                </a>
              </div>

              <SpeechBubble
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -right-2 hidden h-16 w-auto -rotate-[10deg] text-blue-lbg/25 lg:block"
              />
            </div>
          </div>
        </div>

        {/* Documentation Resources */}
        <div className="relative mb-20">
          <Lightbulb
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-8 hidden h-16 w-auto -rotate-[13deg] text-acc-amber/25 lg:block"
          />
          <h2 className="mb-2 text-2xl font-bold text-gray-900">Read First</h2>
          <p className="mb-8 text-gray-600">
            Most questions are answered somewhere below.
          </p>

          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <ResourceGroup
              label="Getting Started"
              resources={GETTING_STARTED}
            />
            <ResourceGroup
              label="Developer Resources"
              resources={DEVELOPER_RESOURCES}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
