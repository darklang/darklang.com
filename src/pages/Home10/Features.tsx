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
  Tests,
  Trace,
  Versions,
} from "./visuals";
import Bubbles from "./Bubbles";
import {
  BRANCHES,
  CONTEXT,
  DEPENDENCIES,
  PERMISSIONS,
  REVIEW,
  TESTS,
  TRACES,
  VERSIONS,
} from "./quotes";

const Features: React.FC = () => (
  <>
    {/* ===================== PARALLEL DEVELOPMENT ===================== */}
    <Shell id="branches">
      <Split
        visual={
          <>
            <Bubbles items={BRANCHES} />
            <Branches />
          </>
        }
      >
        <SectionTitle subtitle="Branches">
          <span className="text-purple-lbg">Branches</span> you can hand to an
          agent
        </SectionTitle>

        <Body>
          <p>
            You open a second agent to speed things up. Now both are editing the
            same file.
          </p>
          <p>
            Dark versions individual functions, types, and values. Assign each
            agent an explicit branch, and its draft stays separate from main and
            other branches. Branches share stored code, so creating one doesn't
            require another checkout of your project. There's no environment to
            set up either: Dark is one binary, with no build step and no
            dependency install.
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
    <Shell id="context">
      <Split
        visual={
          <>
            <Bubbles items={CONTEXT} />
            <Discovery />
          </>
        }
      >
        <SectionTitle subtitle="Context">
          <span className="text-blue-lbg">Context</span> you can query
        </SectionTitle>

        <Body>
          <p>
            You ask the agent to call the billing API. Now it's calling one that
            doesn't exist, from a helper that seven other things depend on.
          </p>
          <p>
            Dark lets agents search existing code, read its source and
            signatures, and inspect what it uses and what uses it. They can find
            the actual API and its expected types before writing a call.
          </p>
          <p>
            Check a change against its dependents before you commit. If a
            helper's new return type breaks a caller, Dark reports it when you
            run the type checker, and refuses the commit until it's fixed.
          </p>
          <p>
            Dark also keeps standing findings: stale usages of a definition that
            moved, and code marked deprecated, so an agent doesn't keep building
            on the old helper.
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
      <Split
        visual={
          <>
            <Bubbles items={PERMISSIONS} />
            <Permissions />
          </>
        }
      >
        <SectionTitle subtitle="Permissions">
          <span className="text-rust">Permissions</span> you can enforce
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
    <Shell id="dependencies">
      <Split
        visual={
          <>
            <Bubbles items={DEPENDENCIES} />
            <Approval />
          </>
        }
      >
        <SectionTitle subtitle="Dependencies">
          <span className="text-purple-lbg">Dependencies</span> you can trust
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
      <Split
        visual={
          <>
            <Bubbles items={TRACES} />
            <Trace />
          </>
        }
      >
        <SectionTitle subtitle="Traces">
          <span className="text-acc-teal">Failures</span> you can trace
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

    {/* ===================== TESTS ===================== */}
    <Shell id="tests">
      <Split
        visual={
          <>
            <Bubbles items={TESTS} />
            <Tests />
          </>
        }
      >
        <SectionTitle subtitle="Tests">
          <span className="text-acc-green">Tests</span> you can review
        </SectionTitle>

        <Body>
          <p>
            You ask for a fix. The tests go green. Two of them are different
            tests now.
          </p>
          <p>
            In Dark, tests are ordinary versioned functions. A branch runs its
            own version of its tests, and an agent's edits to a test are
            versioned like every other change.
          </p>
          <p>
            An agent that rewrites a test to make it pass shows up in review as
            a direct edit to that test, next to the code it was meant to check.
          </p>
          <p>
            A recorded run can become a test, since the inputs and the result
            are already there. And when a definition changes, Dark reruns the
            tests that depend on it rather than the whole suite.
          </p>
          <Landing>Green means the test you reviewed passed.</Landing>
        </Body>

        <DetailLinks links={[{ label: "Explore testing", to: "/cli" }]} />
      </Split>
    </Shell>

    {/* ===================== CHANGE REVIEW ===================== */}
    <Shell id="review">
      <Split
        visual={
          <>
            <Bubbles items={REVIEW} />
            <Changes />
          </>
        }
      >
        <SectionTitle subtitle="Review">
          <span className="text-acc-amber">Changes</span> you can explain
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
            requested and the other code it affected. Every change is an
            operation in an append-only log, so you can always see exactly what
            an agent did, and when.
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
    <Shell id="versions">
      <Split
        visual={
          <>
            <Bubbles items={VERSIONS} />
            <Versions />
          </>
        }
      >
        <SectionTitle subtitle="Versions">
          <span className="text-purple-lbg">Versions</span> you can return to
        </SectionTitle>

        <Body>
          <p>
            An agent rewrites a working function. You try it, and decide the
            earlier version was better.
          </p>
          <p>
            Changing a definition in Dark creates a new version. Its previous
            version remains in the store. Step a definition back to the version
            before, or inspect its history to see how it got here.
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
