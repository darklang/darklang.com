import React from "react";

/** One thing a stage catches. */
const Check: React.FC<{ h: string; p: string; tone?: string }> = ({
  h,
  p,
  tone = "text-acc-green",
}) => (
  <div className="flex items-baseline gap-2.5 py-1.5">
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`mt-0.5 shrink-0 ${tone}`}
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
    <span className="text-base 2xl:text-lg">
      <span className="font-semibold text-gray-900">{h}</span>{" "}
      <span className="text-gray-500">{p}</span>
    </span>
  </div>
);

const TypeChecking: React.FC = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
        {/* Header, with the two paths beside it */}
        <div className="mb-20 grid gap-10 pt-4 lg:grid-cols-2 lg:items-center lg:gap-14">
          <header>
            <span className="text-sm font-medium text-blue-dbg 2xl:text-base">
              Gradual static typing
            </span>

            <h1 className="mt-4 text-3xl font-bold leading-[1.18] tracking-tight text-gray-900 md:text-4xl 2xl:text-5xl">
              Run the Path You're Working on Now.{" "}
              <span className="text-blue-lbg">
                Check the Whole Program When You're Ready.
              </span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg 2xl:text-xl">
              Darklang doesn't require every part of a program to type-check
              before one part can run. Runtime checks protect the code being
              executed, while static analysis provides broader guarantees as the
              program matures.
            </p>
          </header>

          {/* one path type-checks and runs, another doesn't check yet */}
          <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:ml-auto">
            {/* the path being worked on: in front, checked, and running */}
            <div className="relative z-10 -ml-6 mr-20 rounded-2xl md:-ml-10 border border-gray-100 bg-white p-6 shadow-[0_26px_56px_-30px_rgba(60,50,90,0.45)]">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-code text-xs text-gray-dark">
                  checkout.dark
                </span>
                <span className="rounded-full bg-blue-lbg/10 px-3 py-1 font-code text-xs text-blue-dbg 2xl:text-sm">
                  type-checks
                </span>
              </div>

              <pre className="overflow-x-auto font-code text-sm leading-[1.9] text-gray-800">
                <span className="text-purple-lbg">{"let"}</span>
                {" checkout (cart: "}
                <span className="text-blue-dbg">{"Cart"}</span>
                {") : "}
                <span className="text-blue-dbg">{"Receipt"}</span>
                {" =\n  cart\n  |> total\n  |> charge"}
              </pre>

              <span className="absolute -bottom-4 right-5 z-20 inline-flex items-center gap-1.5 rounded-full border border-gray-100 bg-white px-3 py-1.5 font-code text-[11px] text-acc-green shadow-[0_10px_24px_-12px_rgba(60,50,90,0.4)]">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                ran in 24ms
              </span>
            </div>

            {/* the path that isn't finished: behind, and quiet, with its error */}
            <div className="relative -mt-6 ml-10 rounded-2xl border border-gray-100 bg-white p-6 pt-12 shadow-[0_18px_44px_-32px_rgba(60,50,90,0.35)]">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-code text-xs text-gray-light">
                  refunds.dark
                </span>
                <span className="rounded-full bg-taupe/15 px-3 py-1 font-code text-xs text-taupe 2xl:text-sm">
                  not finished
                </span>
              </div>

              <pre className="overflow-x-auto font-code text-sm leading-[1.9] text-gray-400">
                <span className="text-purple-lbg/55">{"let"}</span>
                {" refund (order: "}
                <span className="text-blue-dbg/55">{"Order"}</span>
                {") : "}
                <span className="text-blue-dbg/55">{"Receipt"}</span>
                {" =\n  "}
                <span className="italic">{"// still working this out"}</span>
                {"\n  "}
                <span className="text-rust underline decoration-wavy underline-offset-4">
                  {"???"}
                </span>
              </pre>

              <p className="mt-4 flex flex-wrap items-baseline gap-2 font-code text-[11px] 2xl:text-xs">
                <span className="text-gray-light">type checker</span>
                <span className="text-rust">
                  expected Receipt, found nothing
                </span>
              </p>

              <p className="mt-4 border-t border-gray-100 pt-3 text-xs text-gray-500 2xl:text-sm">
                Doesn't type-check yet, and doesn't stop checkout from running.
              </p>
            </div>
          </div>
        </div>

        {/* The three stages */}
        <div className="mb-20">
          <div className="mb-12 pt-10 md:pt-16">
            {/* the three moments are coloured to match the stages below */}
            <h2 className="max-w-5xl text-3xl font-bold leading-[1.15] tracking-tight text-gray-900 md:text-4xl 2xl:text-5xl">
              One Program, Checked{" "}
              <span className="text-blue-lbg">While Editing</span>,{" "}
              <span className="text-taupe">at Rest</span>, and{" "}
              <span className="text-purple-lbg">at Runtime</span>
            </h2>
            <p className="mt-5 max-w-5xl text-base 2xl:text-lg leading-relaxed text-gray-600">
              Every stage works from the same structured representation, so the
              editor, background analysis, and runtime all understand the same
              program.
            </p>
          </div>

          <div className="divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200">
            {/* Parse-Time */}
            <div className="px-6 py-8 md:px-10 md:py-10">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl 2xl:text-2xl font-bold text-gray-900">
                  <span className="text-blue-lbg">Parse-Time</span> Checking
                </h3>
                <span className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-lbg/10 px-3 py-1 font-code text-xs 2xl:text-sm text-blue-dbg">
                    as you type
                  </span>
                  <span className="rounded-full bg-taupe/15 px-3 py-1 font-code text-xs 2xl:text-sm text-taupe">
                    parsing and names ready, types coming
                  </span>
                </span>
              </div>

              <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
                <div>
                  <p className="mb-5 text-base 2xl:text-lg leading-relaxed text-gray-700">
                    As you type, Darklang immediately validates syntax and
                    resolves function names. This catches basic errors before
                    you even run your code, with full type-checking hints in VS
                    Code and any LSP editor.
                  </p>
                  <Check
                    tone="text-blue-lbg"
                    h="Syntax errors"
                    p="Invalid syntax caught immediately"
                  />
                  <Check
                    tone="text-blue-lbg"
                    h="Name resolution"
                    p="Unknown functions and variables"
                  />
                  <Check
                    tone="text-blue-lbg"
                    h="Type checking"
                    p="Full static analysis, coming soon"
                  />
                </div>

                <div>
                  <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_20px_44px_-30px_rgba(60,50,90,0.4)]">
                    <div className="overflow-x-auto px-5 py-4 font-code text-xs 2xl:text-sm leading-relaxed">
                      <div className="text-gray-400">
                        {"// invalid function call"}
                      </div>
                      <div className="text-gray-800">
                        <span className="text-purple-lbg">let</span> result ={" "}
                        <span className="text-rust underline decoration-wavy underline-offset-4">
                          unknownFunction()
                        </span>
                      </div>
                      <div className="mt-3 text-gray-400">
                        {"// valid function call"}
                      </div>
                      <div className="text-gray-800">
                        <span className="text-purple-lbg">let</span> length ={" "}
                        <span className="text-blue-dbg">String.length</span>{" "}
                        <span className="text-acc-green">"hello"</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-baseline gap-2 border-t border-gray-200 bg-gray-50 px-5 py-3 font-code text-[11px] 2xl:text-xs">
                      <span className="text-gray-500">editor</span>
                      <span className="text-rust">
                        unknown function: unknownFunction
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm 2xl:text-base leading-relaxed text-gray-500">
                    An unknown function errors instantly, and you can often fix
                    it by creating that function.{" "}
                    <span className="font-code text-gray-600">
                      String.length
                    </span>{" "}
                    gets proper autocomplete and validation.
                  </p>
                </div>
              </div>
            </div>

            {/* At-Rest */}
            <div className="bg-taupe/[0.04] px-6 py-8 md:px-10 md:py-10">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl 2xl:text-2xl font-bold text-gray-900">
                  <span className="text-taupe">At-Rest</span> Analysis
                </h3>
                <span className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-100 px-3 py-1 font-code text-xs 2xl:text-sm text-gray-dark">
                    in the background
                  </span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 font-code text-xs 2xl:text-sm text-gray-light">
                    planned
                  </span>
                </span>
              </div>

              <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
                <div>
                  <p className="mb-5 text-base 2xl:text-lg leading-relaxed text-gray-700">
                    Planned continuous background analysis of your entire
                    codebase while you're not actively coding. This will
                    identify security vulnerabilities, suggest performance
                    optimizations, find duplicate code, and ensure comprehensive
                    test coverage, like having a tireless code review assistant
                    working around the clock.
                  </p>
                  <Check
                    tone="text-taupe"
                    h="Test coverage"
                    p="Which code paths lack tests"
                  />
                  <Check
                    tone="text-taupe"
                    h="Security analysis"
                    p="Potential vulnerabilities"
                  />
                  <Check
                    tone="text-taupe"
                    h="Code quality"
                    p="Duplicates, unused code, guidelines"
                  />
                </div>

                <div>
                  <div className="rounded-2xl border border-taupe/25 bg-taupe/[0.05] p-5">
                    <div className="mb-4 flex items-center gap-2">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-taupe"
                        aria-hidden="true"
                      >
                        <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z" />
                      </svg>
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-taupe">
                        Overnight
                      </span>
                    </div>

                    <ul className="space-y-2.5">
                      {[
                        "Found 3 duplicate functions that could be merged.",
                        "New security best practice affects 5 of your endpoints.",
                      ].map(note => (
                        <li
                          key={note}
                          className="flex items-start gap-3 rounded-xl border border-taupe/15 bg-white px-4 py-3"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-taupe" />
                          <span className="text-sm leading-relaxed text-gray-700 2xl:text-base">
                            {note}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-4 text-xs text-gray-500 2xl:text-sm">
                      Waiting for you in the morning.
                    </p>
                  </div>

                  <p className="mt-4 text-sm 2xl:text-base leading-relaxed text-gray-500">
                    The vision: wake up to what changed about your program while
                    you were not looking at it.
                  </p>
                </div>
              </div>
            </div>

            {/* Runtime */}
            <div className="px-6 py-8 md:px-10 md:py-10">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl 2xl:text-2xl font-bold text-gray-900">
                  <span className="text-purple-lbg">Runtime</span> Type Checking
                </h3>
                <span className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-purple-lbg/10 px-3 py-1 font-code text-xs 2xl:text-sm text-purple-dbg">
                    during execution
                  </span>
                  <span className="rounded-full bg-olive/15 px-3 py-1 font-code text-xs 2xl:text-sm text-acc-green">
                    available now
                  </span>
                </span>
              </div>

              <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
                <div>
                  <p className="mb-5 text-base 2xl:text-lg leading-relaxed text-gray-700">
                    When your code executes, every value is validated against
                    its expected type with comprehensive checking. This catches
                    type mismatches that static analysis might miss, especially
                    with dynamic data from APIs or user input. Darklang uses
                    Option and Result types to eliminate null pointer exceptions
                    entirely.
                  </p>
                  <Check
                    tone="text-purple-lbg"
                    h="Function parameters"
                    p="Type-checked on every call"
                  />
                  <Check
                    tone="text-purple-lbg"
                    h="Collection types"
                    p="Element type enforcement"
                  />
                  <Check
                    tone="text-purple-lbg"
                    h="Option and Result"
                    p="Safe handling of missing and failed values"
                  />
                </div>

                <div>
                  <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_20px_44px_-30px_rgba(60,50,90,0.4)]">
                    <div className="overflow-x-auto px-5 py-4 font-code text-xs 2xl:text-sm leading-relaxed">
                      <div className="text-gray-400">
                        {"// a function expecting a string"}
                      </div>
                      <div className="text-gray-800">
                        <span className="text-purple-lbg">let</span> formatName
                        (name: <span className="text-blue-dbg">String</span>) :{" "}
                        <span className="text-blue-dbg">String</span> =
                      </div>
                      <div className="text-gray-800">
                        {"  "}
                        <span className="text-blue-dbg">
                          Stdlib.String.toUppercase
                        </span>{" "}
                        name
                      </div>
                      <div className="mt-3 text-gray-400">
                        {"// the API returned an Int64 instead"}
                      </div>
                      <div className="text-gray-800">
                        formatName{" "}
                        <span className="text-rust underline decoration-wavy underline-offset-4">
                          userData.id
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-baseline gap-2 border-t border-gray-200 bg-gray-50 px-5 py-3 font-code text-[11px] 2xl:text-xs">
                      <span className="text-gray-500">runtime</span>
                      <span className="text-rust">
                        Expected String, got Int64 (value: 42)
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm 2xl:text-base leading-relaxed text-gray-500">
                    Every mismatch names the type it wanted and the value it
                    actually received.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prototyping mechanics */}
        <div className="mb-20">
          <div className="mb-10 pt-10 md:pt-16">
            <h2 className="max-w-3xl text-3xl font-bold leading-[1.15] tracking-tight text-gray-900 md:text-4xl 2xl:text-4xl">
              While You <span className="text-blue-lbg">Prototype</span>
            </h2>
            <p className="mt-5 max-w-5xl text-base 2xl:text-lg leading-relaxed text-gray-600">
              Getting the successful path working shouldn't require designing
              every failure path first. Darklang lets you mark error handling as
              unfinished directly in the program, so you can keep moving without
              hiding what remains to be done.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            {/* the shorthand, while the shape is still moving */}
            <div>
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_20px_44px_-30px_rgba(60,50,90,0.4)]">
                <div className="flex items-center justify-between gap-3 border-b border-gray-200 bg-gray-50 px-5 py-3">
                  <span className="font-code text-xs text-gray-500">
                    checkout.dark
                  </span>
                  <span className="rounded-full bg-taupe/20 px-2.5 py-0.5 font-code text-[11px] text-taupe">
                    while you work
                  </span>
                </div>
                <div className="overflow-x-auto px-5 py-4 font-code text-xs 2xl:text-sm leading-relaxed text-gray-800">
                  <div className="text-gray-400">
                    {"// deal with failure later"}
                  </div>
                  <div>
                    <span className="text-purple-lbg">let</span>{" "}
                    <span className="text-blue-dbg">checkout</span> (cart:{" "}
                    <span className="text-blue-dbg">Cart</span>) =
                  </div>
                  <div>
                    {"  "}
                    <span className="text-purple-lbg">let</span> total ={" "}
                    <span className="text-blue-dbg">price</span> cart
                    <span className="text-rust">!</span>
                  </div>
                  <div>
                    {"  "}
                    <span className="text-blue-dbg">charge</span> total
                    <span className="text-rust">!</span>
                  </div>
                </div>
              </div>

              <h3 className="mt-6 mb-2 text-lg 2xl:text-xl font-bold text-gray-900">
                <code className="font-code">!</code> and{" "}
                <code className="font-code">?</code>
              </h3>
              <p className="text-base 2xl:text-lg leading-relaxed text-gray-600">
                These operators let you make an explicit temporary choice about
                an Option or Result while you work. Because that choice is part
                of the program's structure, Darklang can find it again later.
              </p>
            </div>

            {/* the same function, expanded */}
            <div>
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_20px_44px_-30px_rgba(60,50,90,0.4)]">
                <div className="flex items-center justify-between gap-3 border-b border-gray-200 bg-gray-50 px-5 py-3">
                  <span className="font-code text-xs text-gray-500">
                    checkout.dark
                  </span>
                  <span className="rounded-full bg-acc-green/15 px-2.5 py-0.5 font-code text-[11px] text-acc-green">
                    when you're ready
                  </span>
                </div>
                <div className="overflow-x-auto px-5 py-4 font-code text-xs 2xl:text-sm leading-relaxed text-gray-800">
                  <div>
                    <span className="text-purple-lbg">let</span>{" "}
                    <span className="text-blue-dbg">checkout</span> (cart:{" "}
                    <span className="text-blue-dbg">Cart</span>) =
                  </div>
                  <div>
                    {"  "}
                    <span className="text-purple-lbg">match</span>{" "}
                    <span className="text-blue-dbg">price</span> cart{" "}
                    <span className="text-purple-lbg">with</span>
                  </div>
                  <div>
                    {"  | "}
                    <span className="text-blue-dbg">Ok</span> total {"->"}{" "}
                    <span className="text-blue-dbg">charge</span> total
                  </div>
                  <div>
                    {"  | "}
                    <span className="text-blue-dbg">Error</span> e {"->"}{" "}
                    <span className="text-gray-400">{"// your decision"}</span>
                  </div>
                </div>
              </div>

              <h3 className="mt-6 mb-2 text-lg 2xl:text-xl font-bold text-gray-900">
                Expand into Explicit Error Handling
              </h3>
              <p className="text-base 2xl:text-lg leading-relaxed text-gray-600">
                When you're ready, Darklang can replace the shorthand with
                explicit control flow and show you each case that needs a
                decision. You fill in the behavior without searching for every
                shortcut by hand.
              </p>
            </div>
          </div>
        </div>

        {/* Types evolve with the program */}
        <div className="mb-20 pt-10 md:pt-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-gray-900 md:text-4xl 2xl:text-4xl">
                Types <span className="text-purple-lbg">Evolve</span> with the
                Program
              </h2>
              <p className="mt-5 text-base 2xl:text-lg leading-relaxed text-gray-600">
                Darklang type definitions are versioned. Create a new version,
                test it independently, and migrate callers deliberately.
                Existing code continues to refer to the definition it was built
                against until you choose to move it.
              </p>
              <p className="mt-4 text-base 2xl:text-lg leading-relaxed text-gray-600">
                Runtime traces provide evidence from real executions. When
                external data differs from the shape you expected, Darklang can
                show the value that crossed the boundary so you can strengthen
                validation or model the variation explicitly.
              </p>
            </div>

            {/* what the traces actually recorded */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_26px_56px_-30px_rgba(60,50,90,0.45)]">
              <div className="flex items-center justify-between gap-3 border-b border-gray-100 bg-[#fbfafc] px-5 py-3">
                <span className="font-code text-xs text-gray-dark">
                  POST /users
                </span>
                <span className="font-code text-xs text-gray-light">
                  last 24 hours
                </span>
              </div>

              <div className="divide-y divide-gray-100 font-code text-xs 2xl:text-sm">
                <div className="px-5 py-4">
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-lbg" />
                    <span className="text-gray-light">expected</span>
                  </div>
                  <div className="text-gray-700">
                    {"{ name: String, age: "}
                    <span className="text-purple-lbg">Int64</span>
                    {" }"}
                  </div>
                </div>

                <div className="px-5 py-4">
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rust" />
                    <span className="text-gray-light">received</span>
                    <span className="ml-auto rounded-full bg-rust/10 px-2 py-0.5 text-[11px] text-rust">
                      15% of requests
                    </span>
                  </div>
                  <div className="text-gray-700">
                    {"{ name: String, age: "}
                    <span className="text-rust">String</span>
                    {" }"}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-baseline gap-2 border-t border-gray-100 bg-[#fbfafc] px-5 py-3 font-code text-[11px] 2xl:text-xs">
                <span className="text-gray-light">value that crossed</span>
                <span className="text-rust">"42"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeChecking;
