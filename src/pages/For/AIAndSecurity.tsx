import React from "react";
import EarlyContentDisclaimer from "../../components/EarlyContentDisclaimer";
import RelatedForPages from "../../components/RelatedForPages";
import { Code, Contrast, FeatureCard } from "./components";

/*
 * The AI pitch and the security pitch are one argument told to two people:
 * you can't read what an agent writes, so the system has to tell you what it
 * can do. Every command and output line here is the real wording from the
 * dark repo (cli/permissions/command.dark and docs/effects.md).
 */

/** Command-and-output lines, in the small code style the other cards use. */
const Lines: React.FC<{ lines: string[] }> = ({ lines }) => (
  <span className="block overflow-x-auto whitespace-pre font-code text-xs 2xl:text-sm">
    {lines.join("\n")}
  </span>
);

const AIAndSecurity: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl 2xl:max-w-7xl mx-auto">
        <EarlyContentDisclaimer />
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Darklang for AI and Security
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-4xl mx-auto">
            You can&apos;t read six thousand lines of agent code. Darklang tells
            you what it&apos;s able to do, before you run it.
          </p>
        </div>

        {/* Reviewing Agent Code and Knowing Before You Run */}
        <div className="mb-16">
          <Contrast
            beforeTitle="Reviewing Agent Code Today"
            afterTitle="Darklang: Know Before You Run"
            before={[
              "You read the diff, or some of it, and approve",
              "“What can this touch?” is answered by running it and watching",
              "A dependency quietly gains network access in a patch release",
              "Your only choice is “trusted” or “not”",
              "Reviewing means reading, and reading doesn’t scale to what an agent writes",
            ]}
            after={[
              <>
                <strong>Ask first:</strong> see what a function requires before
                it runs
              </>,
              <>
                <strong>Labelled effects:</strong> every builtin declares what
                it does, so the answer follows the call graph
              </>,
              <>
                <strong>Pinned approvals:</strong> you approve an exact version,
                and changed code needs a new approval
              </>,
              <>
                <strong>Exact permissions:</strong> this URL, this path, this
                port, this method
              </>,
              <>
                <strong>Denied by default:</strong> files, network, processes
                and the environment stay off until you allow them
              </>,
            ]}
          />
        </div>

        {/* Perfect For */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Perfect for Teams Who:
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-lbg mb-4">
                Let Agents Write Code
              </h3>
              <p className="text-gray-700 mb-4">
                An agent writes more than you can read. Check what each function
                is able to reach instead of reading every line it contains.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Use cases:</strong> coding agents, generated scripts,
                changes you didn&apos;t make yourself
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-purple-lbg mb-4">
                Run Code They Didn&apos;t Write
              </h3>
              <p className="text-gray-700 mb-4">
                Approve a package once, for the exact version you reviewed. An
                update can&apos;t quietly widen what it&apos;s allowed to do.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Examples:</strong> third-party packages, shared scripts,
                tools from another team
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-mint mb-4">
                Review for Security
              </h3>
              <p className="text-gray-700 mb-4">
                See the outside surface of code before it runs, then rely on the
                runtime to refuse anything that wasn&apos;t allowed.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Pattern:</strong> read the requirements → approve an
                exact version → every request checked at runtime
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-taupe mb-4">
                Build Tools an Agent Calls
              </h3>
              <p className="text-gray-700 mb-4">
                Give each tool exactly the access its job needs, and nothing it
                could be talked into using.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Examples:</strong> API wrappers, file processors,
                internal automations
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How the Permission Model Works
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <FeatureCard
              h="Effects Are Labelled, Not Documented"
              tone="purple"
              detail={
                <Lines
                  lines={[
                    "$ dark permissions requirements MyApp.fetchAndSave",
                    "permission requirements: http, file-write",
                  ]}
                />
              }
            >
              Every builtin carries what it does: HTTP, files, the clock,
              processes, the environment. Darklang follows every function a
              piece of code calls and reads those labels. No sandbox, no
              container, nothing running.
            </FeatureCard>

            <FeatureCard
              h="Four Layers That Must All Agree"
              tone="blue"
              detail={
                <>
                  <strong className="text-gray-900">Owners:</strong> the first
                  three belong to whoever runs the code. The fourth belongs to
                  the author, and it&apos;s part of the function&apos;s content
                  hash, so changing it makes a new version.
                </>
              }
            >
              The machine sets the outer limit. Each run can narrow it. Each
              package you approve gets only what you approved. And each function
              can carry a ceiling its author wrote in the source, which can only
              ever take access away.
            </FeatureCard>

            <FeatureCard
              h="Approval Is to a Version, Not a Name"
              tone="teal"
              detail={
                <>
                  <strong className="text-gray-900">Why it works:</strong>{" "}
                  packages are content-addressed. &ldquo;The same
                  function&rdquo; can&rsquo;t change under you, because the name
                  isn&rsquo;t the identity.
                </>
              }
            >
              You approve one exact version, and Darklang records everything it
              requires. A newer version is a new hash and inherits nothing.
              Revoke it, and the approval goes, along with any dependency
              nothing else you approved still needs.
            </FeatureCard>

            <FeatureCard
              h="One Door to the Operating System"
              tone="green"
              detail={
                <>
                  <strong className="text-gray-900">By design:</strong> the
                  labels tell you what a function wants; the door decides what
                  it gets. If a label were ever wrong, the code still
                  couldn&rsquo;t reach a file or the network unchecked.
                </>
              }
            >
              Everything that reaches the operating system goes through a single
              checked layer, and Darklang&apos;s own tests fail if any code goes
              around it.
            </FeatureCard>

            <FeatureCard
              h="What the Analysis Can and Can't See"
              tone="amber"
              detail={
                <>
                  <strong className="text-gray-900">The guarantee:</strong> the
                  runtime check. The list is the convenience. Nothing reaches
                  the operating system without passing the check either way.
                </>
              }
            >
              It follows every call it can resolve. When a function runs code
              it&apos;s handed, like the callback in <Code>List.map</Code>, it
              says so: <Code>http, plus its callbacks</Code>. It never reports a
              gap as safe.
            </FeatureCard>

            <FeatureCard
              h="Denied Until You Allow It"
              tone="pink"
              detail={
                <Lines
                  lines={[
                    "$ dark permissions allow http GET https://api.github.com",
                    "✓ policy updated",
                  ]}
                />
              }
            >
              A fresh install lets code compute, print, keep its own local data,
              and read the clock and random numbers. Files, the network,
              processes and the environment are denied until you allow them, one
              exact rule at a time.
            </FeatureCard>
          </div>
        </div>

        {/* What It Is and Isn't */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            A Permission System, Not a Sandbox
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-rust mb-4">
                What It Doesn&apos;t Do
              </h3>
              <div className="bg-rust/4 p-4 rounded text-sm space-y-2">
                <div>• Isolate a broken runtime</div>
                <div>• Limit CPU or memory</div>
                <div>• Replace operating-system isolation</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-lbg mb-4">
                What It Does
              </h3>
              <div className="bg-mint/8 p-4 rounded text-sm space-y-2">
                <div>
                  • Checks every request to files, network and processes
                </div>
                <div>• Allows one exact rule at a time</div>
                <div>• Refuses anything you didn&apos;t allow</div>
                <div>• Names the rule that would have allowed it</div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded border-l-4 border-blue-lbg">
            <p className="text-gray-700">
              <strong>In short:</strong> it controls what code is allowed to do.
              Darklang is an alpha. Treat it accordingly.
            </p>
          </div>
        </div>

        {/* Why Nobody Else Does This */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Nobody Else Does This
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 pl-1">
            <p>
              You can&apos;t add this to a language later. Labelling effects
              means owning every primitive, or the labels have holes. Approving
              an exact version needs content-addressed packages. Revoking safely
              needs the whole dependency graph as data, not as files on a disk.
            </p>
            <p>
              We have those because we built a whole system instead of a tool
              that sits on someone else&apos;s. Most weeks that&apos;s
              expensive. For this, it&apos;s the only way.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Try It on Code You Didn&apos;t Write
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 pl-1">
            <p className="text-lg">Three commands, no signup form:</p>
            <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
              <Lines
                lines={[
                  "curl -fsSL https://darklang.com/install | sh",
                  "dark permissions",
                  "dark permissions requirements <a function you didn't write>",
                ]}
              />
            </div>
            <p>
              If Darklang tells you something surprising about a function,{" "}
              <a
                href="https://discord.gg/darklang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-lbg underline underline-offset-2"
              >
                tell us
              </a>
              . That&apos;s the bug report we want.
            </p>
            <p className="text-lg font-medium text-blue-lbg">
              Read what it can do before you run it. The runtime checks the
              rest.
            </p>
          </div>
        </div>

        {/* Related For Pages Section */}
        <RelatedForPages currentPath="ai-and-security" />
      </div>
    </div>
  );
};

export default AIAndSecurity;
