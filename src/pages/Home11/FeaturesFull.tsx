import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";
import { Body, Landing, Shell } from "../Home10/parts";

/** Every section is copy alone for now, in a readable column. */
const Solo: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mx-auto max-w-4xl 2xl:max-w-5xl">{children}</div>
);

/**
 * PARKED. The fully written feature sections, kept so the copy is not lost
 * while Features.tsx is an outline. Nothing imports this file.
 */
const FeaturesFull: React.FC = () => (
  <>
    {/* ===================== PLANNING ===================== */}
    <Shell id="planning">
      <Solo>
        <SectionTitle subtitle="Task management">
          Don't send an agent into a codebase{" "}
          <span className="text-purple-lbg">blind</span>
        </SectionTitle>

        <Body>
          <p>An issue starts with the outcome you want.</p>
          <p>
            Darklang keeps code, its dependencies, its version history, tests,
            and execution traces in the same system. That lets an agent ask
            direct questions before it starts: What code is involved? What
            depends on it? What changed recently? How has it behaved when it
            ran?
          </p>
          <p>
            The agent uses those answers to build a plan you can review: what it
            will change, what may be affected, how it will check the result, and
            what needs your input.
          </p>
          <p>
            As work begins, the issue stays connected to the branch, changes,
            tests, traces, and review decision.
          </p>
          <Landing>
            One place for the goal, the context, the plan, the work, and the
            proof it is done.
          </Landing>
        </Body>
      </Solo>
    </Shell>

    {/* ===================== DISCOVERIES ===================== */}
    <Shell id="discoveries" className="bg-[#F9F9FB]">
      <Solo>
        <SectionTitle subtitle="Task management">
          Keep the agent <span className="text-blue-lbg">on task</span>
        </SectionTitle>

        <Body>
          <p>
            While working on one task, an agent may find a separate bug, missing
            feature, or cleanup opportunity.
          </p>
          <p>
            Instead of silently expanding the task, or leaving a vague comment
            behind, Darklang creates a proposed issue for you to review. It
            includes the code involved, why the agent raised it, and any
            relevant tests or execution traces.
          </p>
          <p>
            The new issue stays separate from the current branch and plan. You
            decide whether to dismiss it, schedule it for later, or give it to
            another agent.
          </p>
          <Landing>Discover it now. Decide on it separately.</Landing>
        </Body>
      </Solo>
    </Shell>

    {/* ===================== ANSWERS ===================== */}
    <Shell id="answers">
      <Solo>
        <SectionTitle subtitle="Context">
          Give your agent{" "}
          <span className="text-purple-lbg">better context</span> with fewer
          tokens
        </SectionTitle>

        <Body>
          <p>
            Before changing something, an agent needs to understand what it
            does, where it's used, and what it depends on.
          </p>
          <p>
            Darklang stores code as connected functions, types, and values.
            Agents can ask for those relationships directly and get structured
            answers about dependencies, changes, errors, and conflicts.
          </p>
          <p>
            You can inspect the same information through the command line and
            interactive workbench.
          </p>
          <Landing>
            A shared picture of the software, for you and your agent.
          </Landing>
        </Body>
      </Solo>
    </Shell>

    {/* ===================== IMPACT ===================== */}
    <Shell id="impact" className="bg-[#F9F9FB]">
      <Solo>
        <SectionTitle subtitle="Impact">
          Know the <span className="text-blue-lbg">blast radius</span> before
          you change shared code
        </SectionTitle>

        <Body>
          <p>
            A small edit can have consequences far beyond the code you touched.
          </p>
          <p>
            Darklang tracks which pieces use each other. When you update a
            function, code configured to follow it moves to the new version, and
            Darklang rechecks affected code for type errors.
          </p>
          <p>
            Your change report distinguishes what you edited from what updated
            as a result. It also shows what stayed on an older version.
          </p>
          <Landing>
            Know what changed, what followed, and what needs attention.
          </Landing>
        </Body>
      </Solo>
    </Shell>

    {/* ===================== VERSIONS ===================== */}
    <Shell id="versions">
      <Solo>
        <SectionTitle subtitle="Versions">
          Change shared code without{" "}
          <span className="text-rust">forcing every caller to move</span>
        </SectionTitle>

        <Body>
          <p>
            Updating a shared function shouldn't force every part of your
            application to move at once.
          </p>
          <p>
            Darklang keeps distinct versions of your code. You can let
            dependencies follow updates or keep them on a particular version
            until you're ready.
          </p>
          <p>
            That choice is built into package management and version control, so
            you can evolve shared code while keeping selected callers on the
            version they already use.
          </p>
          <Landing>Move forward without updating everything at once.</Landing>
        </Body>
      </Solo>
    </Shell>

    {/* ===================== BRANCHES ===================== */}
    <Shell id="branches" className="bg-[#F9F9FB]">
      <Solo>
        <SectionTitle subtitle="Branches">
          Run agents in parallel{" "}
          <span className="text-purple-lbg">
            without worktrees or merge chaos
          </span>
        </SectionTitle>

        <Body>
          <p>
            More agents can mean more overlapping edits and more work to
            untangle.
          </p>
          <p>
            Darklang gives each agent a branch where its unfinished code stays
            separate. When work comes together, conflicting versions are
            preserved and recorded for review. Darklang picks a consistent
            winner, and you can inspect or change that choice.
          </p>
          <p>
            Its version control tracks individual functions, types, and values,
            making changes visible at the level of the code itself.
          </p>
          <Landing>
            Separate work while it's in progress. Review it when it comes
            together.
          </Landing>
        </Body>
      </Solo>
    </Shell>

    {/* ===================== VERIFICATION ===================== */}
    <Shell id="verification">
      <Solo>
        <SectionTitle subtitle="Verification">
          <span className="text-acc-amber">Check the result</span> before
          trusting the answer
        </SectionTitle>

        <Body>
          <p>An agent saying "fixed" is a starting point for verification.</p>
          <p>
            Darklang checks code for type errors when it's saved and refuses
            commits with definite type errors by default. Built-in tests help
            check whether the behavior matches your expectations.
          </p>
          <p>
            With tracing enabled, you can inspect the inputs, function calls,
            and results from an execution, giving you and your agent evidence to
            investigate what went wrong.
          </p>
          <Landing>
            A feedback loop from writing code to checking what it actually does.
          </Landing>
        </Body>
      </Solo>
    </Shell>

    {/* ===================== ACCESS ===================== */}
    <Shell id="access" className="bg-[#F9F9FB]">
      <Solo>
        <SectionTitle subtitle="Access">
          Give code <span className="text-blue-lbg">only the access</span> it
          needs
        </SectionTitle>

        <Body>
          <p>
            Code may need to read a file or call an external service. That
            doesn't mean it should have unrestricted access.
          </p>
          <p>
            Darklang checks permissions when code interacts with the outside
            world. Rules can limit access to particular files or web endpoints.
          </p>
          <p>
            You can also approve a specific version of a function. That approval
            keeps you on the reviewed version while newer code is available;
            updating it is an explicit decision.
          </p>
          <Landing>Review the code and its access together.</Landing>
        </Body>
      </Solo>
    </Shell>

    {/* ===================== CLEANUP ===================== */}
    <Shell id="cleanup">
      <Solo>
        <SectionTitle subtitle="Cleanup">
          Don't let working code leave{" "}
          <span className="text-rust">a mess behind</span>
        </SectionTitle>

        <Body>
          <p>
            Agents can add working code and still leave behind unused helpers,
            duplicate logic, obsolete code paths, stale tests, outdated callers,
            TODOs, and comments that describe an earlier version of the
            software.
          </p>
          <p>
            Over time, that debris makes the next task harder for people and
            agents alike.
          </p>
          <p>
            Darklang keeps code as connected, versioned definitions. It knows
            what uses a function, what changed because of an update, what stayed
            behind, and what needs review.
          </p>
          <p>That lets you look beyond a line-by-line diff:</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-purple-lbg">
            <li>Did the agent change only what the plan required?</li>
            <li>Did it leave unused or duplicate code behind?</li>
            <li>Are callers still using an older version on purpose?</li>
            <li>Do tests and comments still describe the current behavior?</li>
          </ul>
          <p>
            When an agent finds unrelated work, Darklang turns it into a
            separate issue with its context attached, rather than expanding the
            current task or leaving a TODO behind.
          </p>
          <Landing>
            Don't just ask whether the new code works. Ask whether the old code
            still belongs.
          </Landing>
        </Body>
      </Solo>
    </Shell>

    {/* ===================== REVIEW ===================== */}
    <Shell id="review" className="bg-[#F9F9FB]">
      <Solo>
        <SectionTitle subtitle="Review">
          Review the <span className="text-purple-lbg">whole change</span>, not
          just the diff
        </SectionTitle>

        <Body>
          <p>
            AI agents can produce a convincing patch while leaving behind unused
            functions, stale comments, outdated callers, and work that only
            partly solves the problem.
          </p>
          <p>
            Darklang makes the consequences of a change visible. Review can
            show:
          </p>
          <ul className="list-disc space-y-2 pl-6 marker:text-purple-lbg">
            <li>what the agent changed directly</li>
            <li>what followed because it depended on that code</li>
            <li>what deliberately stayed on an older version</li>
            <li>type errors, outdated usages, and merge conflicts</li>
            <li>the tests and execution traces used to check the result</li>
          </ul>
          <p>
            Because code is tracked as individual functions, types, and values,
            review can focus on the meaningful units of the program, not just a
            long list of changed lines.
          </p>
          <Landing>
            See what changed. See what it affected. See what the agent left
            behind.
          </Landing>
        </Body>
      </Solo>
    </Shell>
  </>
);

export default FeaturesFull;
