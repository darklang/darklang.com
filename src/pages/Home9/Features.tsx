import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";
import DetailLinks from "../Home/DetailLinks";
import { Body, Landing, Shell, Split } from "./parts";
import {
  Approval,
  Branches,
  Changes,
  Discovery,
  Permissions,
  Trace,
  Versions,
} from "./visuals";

const Features: React.FC = () => (
  <>
    {/* ===================== PARALLEL DEVELOPMENT ===================== */}
    <Shell id="parallel-development">
      <Split visual={<Branches />}>
        <SectionTitle subtitle="Launch agents">
          Stop agents stepping on each other's{" "}
          <span className="text-purple-lbg">work</span>
        </SectionTitle>

        <Body>
          <p>
            One agent adds search. Another fixes billing. Each needs somewhere
            to change and run code without picking up the other's unfinished
            edits.
          </p>
          <p>
            Dark versions individual functions, types, and values. Assign each
            agent an explicit branch, and its draft stays separate from main and
            other branches. Branches share stored code, so creating one doesn't
            require another checkout of your project.
          </p>
          <p>
            When agents change the same definition, Dark preserves both versions
            and records the conflict. You can inspect the automatic choice and
            select the other version when needed.
          </p>
          <Landing>
            Keep the work separate. See where it overlaps. Decide what to keep.
          </Landing>
        </Body>

        <DetailLinks
          links={[{ label: "Explore branches", to: "/source-control" }]}
        />
      </Split>
    </Shell>

    {/* ===================== CODE DISCOVERY ===================== */}
    <Shell id="code-discovery">
      <Split visual={<Discovery />} reverse>
        <SectionTitle subtitle="They find the code">
          Give agents the <span className="text-blue-lbg">context</span> they
          keep missing
        </SectionTitle>

        <Body>
          <p>
            “It works in this function” isn't enough when five other functions
            depend on it.
          </p>
          <p>
            Dark lets agents search existing code, read its source and
            signatures, and inspect what it uses and what uses it. They can find
            the actual API and its expected types before writing a call.
          </p>
          <p>
            Update a definition, and Dark rechecks its affected dependents for
            type errors. If a helper's new return type breaks a caller, that
            feedback arrives while the agent is making the change.
          </p>
          <Landing>
            Less guessing about what exists. Earlier feedback on what broke.
          </Landing>
        </Body>

        <DetailLinks
          links={[{ label: "Explore code discovery", to: "/packages" }]}
        />
      </Split>
    </Shell>

    {/* ===================== PERMISSIONS ===================== */}
    <Shell id="permissions">
      <Split visual={<Permissions />}>
        <SectionTitle subtitle="Set what they can do">
          “Don't touch that” should be{" "}
          <span className="text-rust">enforceable</span>
        </SectionTitle>

        <Body>
          <p>
            You asked an agent to investigate a bug. That shouldn't require
            giving its code permission to write to every file or send data to
            any server.
          </p>
          <p>
            Dark checks host permissions when code runs, including the libraries
            it calls. Allow reads from a particular directory. Restrict HTTP
            requests by method and destination. Leave unrelated access denied.
          </p>
          <p>
            A report can fetch data from an approved API without gaining
            permission to send that data somewhere else. A file reader can
            access its input directory without being allowed to overwrite it.
          </p>
          <p>
            These boundaries are enforced by Dark's runtime. You can inspect a
            function's inferred permission requirements and see where the
            analysis is incomplete before deciding what to allow.
          </p>
        </Body>

        <DetailLinks
          links={[{ label: "Explore permissions", to: "/backends" }]}
        />
      </Split>
    </Shell>

    {/* ===================== PACKAGE APPROVALS ===================== */}
    <Shell id="package-approvals">
      <Split visual={<Approval />} reverse>
        <SectionTitle subtitle="Choose what they can use">
          Know which dependency you're{" "}
          <span className="text-purple-lbg">trusting</span>
        </SectionTitle>

        <Body>
          <p>A familiar name can point to unfamiliar code after an update.</p>
          <p>
            Dark identifies code by its content and ties your approval to a
            specific version. Once approved, the function's name keeps resolving
            to that version until you choose to update it.
          </p>
          <p>
            You can inspect its source, dependencies, and permission
            requirements. A code change creates a different version that needs a
            new approval decision.
          </p>
          <Landing>
            Keep using the code you reviewed. Choose when to adopt what comes
            next.
          </Landing>
        </Body>

        <DetailLinks
          links={[
            { label: "Explore package approvals", to: "/package-manager" },
          ]}
        />
      </Split>
    </Shell>

    {/* ===================== TRACES ===================== */}
    <Shell id="traces">
      <Split visual={<Trace />}>
        <SectionTitle subtitle="Check the result">
          When something breaks, see what{" "}
          <span className="text-acc-teal">actually happened</span>
        </SectionTitle>

        <Body>
          <p>
            An agent says the fix works. The failing request says otherwise.
          </p>
          <p>
            Dark's execution traces connect recorded runs to the code that ran,
            with inputs, calls, and results. Follow the values through a failure
            to find where the behavior diverged from what you expected.
          </p>
          <p>
            You and your agent can investigate the same evidence, instead of
            starting another round of guesses about what might have happened.
          </p>
        </Body>

        <DetailLinks
          links={[{ label: "Explore traces", to: "/traceDriven" }]}
        />
      </Split>
    </Shell>

    {/* ===================== CHANGE REVIEW ===================== */}
    <Shell id="change-review">
      <Split visual={<Changes />} reverse>
        <SectionTitle subtitle="Review the work">
          You asked for one fix. Why did{" "}
          <span className="text-acc-amber">twelve things</span> change?
        </SectionTitle>

        <Body>
          <p>
            Sometimes an agent went beyond the task. Sometimes a shared function
            changed and its callers followed. You need to know which happened.
          </p>
          <p>
            Dark distinguishes direct edits from changes caused by dependency
            updates. See what changed on a branch, which definitions followed an
            update, and which ones remain pinned to an earlier version.
          </p>
          <p>
            That gives review a concrete starting point: the change you
            requested and the other code it affected.
          </p>
          <p>
            Ask your agent to explain the work in the same language you used to
            request it:
          </p>
        </Body>

        <blockquote className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 font-caveat text-2xl leading-snug text-blue-lbg md:text-3xl">
          “What changed? What else does it affect? What did you test? What's
          still unchecked?”
        </blockquote>

        <div className="mt-6">
          <Body>
            <p>
              Dark exposes structured change and dependency information for
              agents to inspect and explain. You can follow their explanation
              back to the source and check the details that matter.
            </p>
          </Body>
        </div>

        <DetailLinks
          links={[{ label: "Explore change review", to: "/source-control" }]}
        />
      </Split>
    </Shell>

    {/* ===================== VERSION HISTORY ===================== */}
    <Shell id="version-history">
      <Split visual={<Versions />}>
        <SectionTitle subtitle="Keep a way back">
          A bad code change needs a{" "}
          <span className="text-purple-lbg">way back</span>
        </SectionTitle>

        <Body>
          <p>
            An agent rewrites a working function. You try it, and decide the
            earlier version was better.
          </p>
          <p>
            Changing a definition in Dark creates a new version. Its previous
            version remains in the store. Step a definition back, inspect its
            history, or keep a caller pinned to the version it already uses.
          </p>
          <p>
            You can try a change without making the previous implementation
            disappear.
          </p>
        </Body>

        <DetailLinks
          links={[{ label: "Explore version history", to: "/source-control" }]}
        />
      </Split>
    </Shell>
  </>
);

export default Features;
