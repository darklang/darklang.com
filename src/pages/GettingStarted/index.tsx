import React from "react";
import Newsletter from "../Home/Newsletter";
import InstallCommand from "../../common/ui/InstallCommand";
// import DevelopmentSteps from "../Home/DevelopmentSteps";

const INVOLVEMENT = [
  {
    title: "Join Our Discord",
    body: "Connect with other developers, ask questions, share ideas, and follow the latest developments.",
    iconBg: "bg-blue-lbg/10",
    iconColor: "text-blue-lbg",
    href: "https://darklang.com/discord",
    linkLabel: "Join Discord",
    primary: true,
    icon: (
      <svg viewBox="0 0 23 17" fill="currentColor" className="h-4 w-auto">
        <path d="M19.071 1.55192C17.6856 0.906087 16.1856 0.437337 14.6231 0.166504C14.5956 0.166895 14.5694 0.178128 14.5502 0.197754C14.3627 0.541504 14.1439 0.98942 13.9981 1.33317C12.3408 1.08333 10.6554 1.08333 8.99809 1.33317C8.85225 0.979004 8.6335 0.541504 8.43559 0.197754C8.42517 0.176921 8.39392 0.166504 8.36267 0.166504C6.80017 0.437337 5.31059 0.906087 3.91475 1.55192C3.90434 1.55192 3.89392 1.56234 3.8835 1.57275C1.05017 5.81234 0.268921 9.93734 0.654338 14.0207C0.654338 14.0415 0.664754 14.0623 0.685588 14.0728C2.56059 15.4478 4.36267 16.2811 6.14392 16.8332C6.17517 16.8436 6.20642 16.8332 6.21684 16.8123C6.6335 16.2394 7.0085 15.6353 7.33142 14.9998C7.35225 14.9582 7.33142 14.9165 7.28975 14.9061C6.696 14.6769 6.1335 14.4061 5.58142 14.0936C5.53975 14.0728 5.53975 14.0103 5.571 13.979C5.68559 13.8957 5.80017 13.8019 5.91475 13.7186C5.93559 13.6978 5.96684 13.6978 5.98767 13.7082C9.571 15.3436 13.4356 15.3436 16.9773 13.7082C16.9981 13.6978 17.0293 13.6978 17.0502 13.7186C17.1648 13.8123 17.2793 13.8957 17.3939 13.9894C17.4356 14.0207 17.4356 14.0832 17.3835 14.104C16.8418 14.4269 16.2689 14.6873 15.6752 14.9165C15.6335 14.9269 15.6231 14.979 15.6335 15.0103C15.9668 15.6457 16.3418 16.2498 16.7481 16.8228C16.7793 16.8332 16.8106 16.8436 16.8418 16.8332C18.6335 16.2811 20.4356 15.4478 22.3106 14.0728C22.3314 14.0623 22.3418 14.0415 22.3418 14.0207C22.8002 9.30192 21.5814 5.20817 19.1127 1.57275C19.1023 1.56234 19.0918 1.55192 19.071 1.55192ZM7.87309 11.5311C6.80017 11.5311 5.90434 10.5415 5.90434 9.32275C5.90434 8.104 6.77934 7.11442 7.87309 7.11442C8.97725 7.11442 9.85225 8.11442 9.84184 9.32275C9.84184 10.5415 8.96684 11.5311 7.87309 11.5311ZM15.1335 11.5311C14.0606 11.5311 13.1648 10.5415 13.1648 9.32275C13.1648 8.104 14.0398 7.11442 15.1335 7.11442C16.2377 7.11442 17.1127 8.11442 17.1023 9.32275C17.1023 10.5415 16.2377 11.5311 15.1335 11.5311Z" />
      </svg>
    ),
  },
  {
    title: "Clone Our Code and Contribute",
    body: "Explore Darklang using our VS Code devcontainer setup. This gives you access to the latest CLI and language features.",
    iconBg: "bg-purple-lbg/10",
    iconColor: "text-purple-lbg",
    href: "https://github.com/darklang/dark",
    linkLabel: "View GitHub setup",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    title: "Follow Our Progress",
    body: "Read our blog for updates, technical insights, and the story behind Darklang's development.",
    iconBg: "bg-mint/20",
    iconColor: "text-acc-teal",
    href: "https://blog.darklang.com",
    linkLabel: "Read the blog",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M4 11a9 9 0 0 1 9 9" />
        <path d="M4 4a16 16 0 0 1 16 16" />
        <circle cx="5" cy="19" r="1" />
      </svg>
    ),
  },
  {
    title: "VS Code Extension",
    body: "Our VS Code extension provides syntax highlighting, LSP features, and integration with the Darklang package manager.",
    iconBg: "bg-taupe/15",
    iconColor: "text-taupe",
    badge: "Coming soon to the VS Code marketplace",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
      </svg>
    ),
  },
];

const COMING_NEXT = [
  {
    title: "CLI App",
    body: "A stable command-line interface for running Darklang programs, managing packages, and deploying applications",
    color: "text-blue-lbg",
    icon: (
      <>
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" x2="20" y1="19" y2="19" />
      </>
    ),
  },
  {
    title: "Package Manager",
    body: "Function-level package distribution",
    color: "text-purple-lbg",
    icon: (
      <>
        <path d="m7.5 4.27 9 5.15" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </>
    ),
  },
  {
    title: "LSP for General Use",
    body: "Language Server Protocol support for any editor, enabling code completion, diagnostics, and more",
    color: "text-acc-teal",
    icon: (
      <>
        <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
        <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
      </>
    ),
  },
  {
    title: "MCP Server Support",
    body: "Build Model Context Protocol servers quickly to extend AI assistant capabilities",
    color: "text-taupe",
    icon: (
      <>
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </>
    ),
  },
  {
    title: "VS Code Extension",
    body: "Official extension with syntax highlighting, debugging, and integrated package management",
    color: "text-acc-pink",
    icon: (
      <>
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
      </>
    ),
  },
  {
    title: "Documentation",
    body: "Comprehensive guides and API references",
    color: "text-acc-amber",
    icon: (
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
    ),
  },
];

const GettingStarted: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Getting Started with Darklang
          </h1>
          <div className="w-52 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl 2xl:text-2xl text-gray-600 mt-6 max-w-4xl mx-auto">
            Here's how you can start exploring Darklang and connect with our
            community.
          </p>

          {/* Install the CLI */}
          <div className="mt-10">
            <p className="mb-3 text-sm font-medium tracking-wide text-gray-500">
              Install the CLI
            </p>
            <InstallCommand />
          </div>
        </div>

        {/* Current Status Banner */}
        <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 p-6 mb-8 shadow-sm border border-purple-100">
          {/* Decorative elements */}
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-purple-100/40 blur-2xl"></div>
          <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-indigo-100/40 blur-2xl"></div>

          <div className="relative flex items-start">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center rounded-full bg-purple-100 p-2 text-purple-lbg">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-purple-900">
                Development Status
              </h3>
              <p className="text-gray-700 mt-1">
                We're transforming Darklang from the original browser-based
                editor to a CLI and editor-based development experience. The new
                version will be available for broader use soon.
              </p>
            </div>
          </div>
        </section>

        {/* Ways to Get Involved */}
        <div className="my-18">
          <div className="grid gap-5 md:grid-cols-2">
            {INVOLVEMENT.map(item => (
              <div
                key={item.title}
                className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`mb-4 flex h-11 w-11 items-center justify-center rounded-full ${item.iconBg} ${item.iconColor}`}
                >
                  {item.icon}
                </div>
                <h3 className="mb-2 font-semibold text-gray-800 2xl:text-lg">
                  {item.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600 2xl:text-base">
                  {item.body}
                </p>

                <div className="mt-auto">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        item.primary
                          ? "inline-flex items-center rounded-lg bg-[#7B85FF] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-lbg 2xl:text-base"
                          : "group inline-flex items-center gap-1.5 text-sm font-medium text-blue-lbg transition-colors hover:text-purple-lbg 2xl:text-base"
                      }
                    >
                      {item.linkLabel}
                      {!item.primary && (
                        <span className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      )}
                    </a>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500 2xl:text-sm">
                      {item.badge}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What's Coming */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What's Coming Next
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              We're working toward a comprehensive release that will include:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {[COMING_NEXT.slice(0, 3), COMING_NEXT.slice(3)].map(
                (column, columnIndex) => (
                  <div key={columnIndex} className="space-y-4">
                    {column.map(item => (
                      <div key={item.title} className="flex items-start">
                        <svg
                          className={`w-5 h-5 mt-0.5 mr-3 flex-shrink-0 ${item.color}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {item.icon}
                        </svg>
                        <div>
                          <div className="font-medium text-gray-800">
                            {item.title}
                          </div>
                          <div className="text-sm 2xl:text-base text-gray-600">
                            {item.body}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <Newsletter />
      </div>
      {/* <DevelopmentSteps /> */}
    </div>
  );
};

export default GettingStarted;
