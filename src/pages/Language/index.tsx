import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CodeDisplay from "../../common/ui/CodeDisplay";

/* ------------------------------------------------------------------ */
/* Reusable pieces                                                     */
/* ------------------------------------------------------------------ */

const CodeCard: React.FC<{
  file?: string;
  code: string;
  result?: string;
  flat?: boolean;
  dark?: boolean;
}> = ({ file, code, result, flat = false, dark = false }) => {
  if (dark) {
    return (
      <div
        className={`overflow-hidden rounded-2xl bg-dark-black ${
          flat ? "" : "shadow-2xl"
        }`}
      >
        {file && (
          <div className="flex items-center gap-1.5 bg-[#28282a] px-5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#4a4a4e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#4a4a4e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#4a4a4e]" />
            <span className="ml-2 font-code text-xs text-gray-500">{file}</span>
          </div>
        )}
        <div className="hljs-dark overflow-x-auto px-5 py-4 text-sm text-gray-300">
          <CodeDisplay
            language="fsharp"
            showLineNumbers={false}
            size="sm"
            code={code}
          />
        </div>
        {result && (
          <div className="flex items-baseline gap-4 border-t border-white/5 bg-[#28282a] px-5 py-3">
            <span className="shrink-0 font-code text-[11px] font-bold uppercase tracking-wider text-olive">
              result
            </span>
            <code className="font-code text-sm text-olive">{result}</code>
          </div>
        )}
      </div>
    );
  }
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-gray-200 bg-white ${
        flat ? "" : "shadow-sm"
      }`}
    >
      {file && (
        <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-5 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
          <span className="ml-2 font-code text-xs text-gray-400">{file}</span>
        </div>
      )}
      <div className="hljs-light overflow-x-auto px-5 py-4 text-sm text-gray-800">
        <CodeDisplay
          language="fsharp"
          showLineNumbers={false}
          size="sm"
          code={code}
        />
      </div>
      {result && (
        <div className="flex items-baseline gap-4 border-t border-gray-100 bg-gray-50 px-5 py-3">
          <span className="shrink-0 font-code text-[11px] font-bold uppercase tracking-wider text-acc-green">
            result
          </span>
          <code className="font-code text-sm text-gray-700">{result}</code>
        </div>
      )}
    </div>
  );
};

const Callout: React.FC<{
  tag: string;
  title: React.ReactNode;
  children: React.ReactNode;
  code?: string;
  result?: string;
}> = ({ tag, title, children, code, result }) => (
  <div
    className={`my-6 grid gap-5 border-l-[3px] border-purple-lbg/40 pl-5 ${
      code ? "md:grid-cols-2 md:items-center" : ""
    }`}
  >
    <div>
      <span className="mb-1 inline-block text-[10px] font-bold uppercase tracking-[0.14em] text-olive">
        {tag}
      </span>
      <h3 className="mb-1.5 text-base font-bold text-gray-900">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{children}</p>
    </div>
    {code && <CodeCard code={code} result={result} flat />}
  </div>
);

const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-purple-dbg">
    {children}
  </p>
);

const TypeRefRow: React.FC<{
  label: string;
  items: { name: string; desc: string }[];
}> = ({ label, items }) => (
  <div className="mt-8">
    <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
      {label}
    </h4>
    <div className="flex flex-wrap gap-2">
      {items.map(p => (
        <span
          key={p.name}
          className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm"
        >
          <span className="font-code text-purple-dbg">{p.name}</span>
          <span className="ml-2 text-xs text-gray-500">{p.desc}</span>
        </span>
      ))}
    </div>
  </div>
);

const PRIMITIVES = [
  { name: "Int", desc: "arbitrary precision" },
  { name: "Int8/16/32/64/128", desc: "signed" },
  { name: "UInt8/16/32/64/128", desc: "unsigned" },
  { name: "Float", desc: "64-bit" },
  { name: "Bool", desc: "true / false" },
  { name: "String", desc: "Unicode text" },
  { name: "Char", desc: "one grapheme" },
  { name: "DateTime", desc: "date + time" },
  { name: "Uuid", desc: "unique id" },
  { name: "Unit", desc: "()" },
];

/** Functions are values, so they have a type like anything else. */
const FUNCTIONS = [
  { name: "a -> b", desc: "one argument, one result" },
  { name: "a -> b -> c", desc: "two arguments" },
];

const COLLECTIONS = [
  { name: "List<T>", desc: "ordered collection" },
  { name: "Dict<T>", desc: "string-keyed map" },
  { name: "Tuple", desc: "fixed-size group" },
];

const WRAPPERS = [
  { name: "Option<T>", desc: "Some or None" },
  { name: "Result<T, E>", desc: "Ok or Error" },
];

/* ------------------------------------------------------------------ */
/* What people build                                                   */
/* ------------------------------------------------------------------ */

const UseIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const USE_CASES = [
  {
    h: "Backends and APIs",
    p: "HTTP handlers, typed datastores, and the logic between them, declared in the program rather than around it.",
    hint: "POST /checkout",
    tint: "bg-purple-lbg/10 text-purple-dbg",
    icon: (
      <UseIcon>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18" />
      </UseIcon>
    ),
    link: { label: "Backends", to: "/backends" },
  },
  {
    h: "CLIs and Scripts",
    p: "Run a function straight from the terminal. No project to scaffold, no dependencies to install first.",
    hint: "$ dark run parseCsv",
    tint: "bg-blue-lbg/10 text-blue-dbg",
    icon: (
      <UseIcon>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="m7 9 3 3-3 3" />
        <path d="M13 15h4" />
      </UseIcon>
    ),
    link: { label: "The CLI", to: "/cli" },
  },
  {
    h: "Scheduled and Background Work",
    p: "Crons and queue workers are ordinary declarations, so the thing that runs at 3am is written the same way as everything else.",
    hint: "every hour",
    tint: "bg-olive/15 text-acc-green",
    icon: (
      <UseIcon>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </UseIcon>
    ),
    link: { label: "How it executes", to: "/execution" },
  },
];

/* ------------------------------------------------------------------ */
/* What the shared model buys you                                      */
/* ------------------------------------------------------------------ */

const WhyIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const WHY_POINTS = [
  {
    h: "You Can See What Each Expression Produced",
    p: "Every expression has a stable identity, so tools can show the value that flowed through a specific part of your program during a production execution, not merely what a log line happened to print.",
    icon: (
      <WhyIcon>
        <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z" />
        <circle cx="12" cy="12" r="2.5" />
      </WhyIcon>
    ),
  },
  {
    h: "Refactors Operate on Structure",
    p: "A rename or signature change modifies definitions, so Darklang can find the affected call sites and rewrite them for you. Change a function's signature, inspect every affected caller, and migrate them one at a time, without losing a working program.",
    icon: (
      <WhyIcon>
        <path d="M4 9a8 8 0 0 1 13.7-5.6L20 6" />
        <path d="M20 2v4h-4" />
        <path d="M20 15a8 8 0 0 1-13.7 5.6L4 18" />
        <path d="M4 22v-4h4" />
      </WhyIcon>
    ),
  },
  {
    h: "Profiling Uses the Same Execution Record",
    p: "The traces recorded by the runtime also reveal where time was spent, so profiling isn't a separate tool bolted on afterward.",
    icon: (
      <WhyIcon>
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l2.5 1.5" />
        <path d="M9 2h6" />
      </WhyIcon>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Tour data                                                           */
/* ------------------------------------------------------------------ */

const TOUR = [
  { id: "simple", label: "Simple Data" },
  { id: "functions", label: "Functions" },
  { id: "data", label: "Modeling Data" },
  { id: "matching", label: "Pattern Matching" },
  { id: "errors", label: "Errors" },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const Language: React.FC = () => {
  const [active, setActive] = useState<string>("simple");

  useEffect(() => {
    const ids = TOUR.map(t => t.id);
    const els = ids
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const btn = "inline-block rounded-full px-6 py-3 font-semibold transition";
  const primary = `${btn} bg-purple-lbg text-white hover:bg-purple-dbg`;
  const ghost = `${btn} border border-gray-200 bg-white text-purple-dbg hover:border-purple-lbg`;

  return (
    <div className="overflow-x-clip">
      <div className="mx-auto max-w-7xl 2xl:max-w-[100rem] px-4">
        {/* ===================== HERO ===================== */}
        <header className="grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <Eyebrow>The Darklang programming language</Eyebrow>
            <h1 className="mb-5 text-2xl font-bold leading-[1.08] tracking-tight text-gray-900 md:text-4xl lg:text-5xl 2xl:text-[3.75rem]">
              Functional, Composable, and{" "}
              <span className="text-purple-lbg">Fun to Use</span>
            </h1>
            <p className="mb-7 max-w-xl text-lg leading-relaxed text-gray-600">
              Darklang is an open source, functional language with{" "}
              <strong className="font-semibold text-gray-900">
                immutable values
              </strong>
              , a strong type system, and a small, readable syntax, built for
              backends, CLIs, and scheduled jobs.
            </p>
            <p className="mb-7 max-w-xl text-lg leading-relaxed text-gray-600">
              Wherever it ends up, it is the same program: Darklang runs through
              the{" "}
              <Link to="/cli" className="text-purple-dbg underline">
                CLI on your machine
              </Link>
              , in a browser through WebAssembly, and on{" "}
              <Link to="/our-cloud" className="text-purple-dbg underline">
                Darklang Cloud
              </Link>
              .
            </p>
            <p className="text-sm tracking-wide text-gray-400">
              Typed · Functional · Immutable · Interpreted · Apache 2.0
            </p>
            <a
              href="https://github.com/darklang/dark"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-purple-lbg/30 bg-purple-lbg/5 px-4 py-2 text-sm font-medium text-purple-lbg transition hover:bg-purple-lbg/10"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 2.5-.34c.85 0 1.71.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
              </svg>
              Open source on GitHub
            </a>
          </div>
          <CodeCard
            dark
            file="hello.dark"
            code={`let greet (name: String) : String =
  $"Hello, {name}"

greet "Darklang visitor"`}
            result={`"Hello, Darklang visitor"`}
          />
        </header>

        {/* ===================== TRIAD ===================== */}
        <section className="grid items-center gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <Eyebrow>What a program is made of</Eyebrow>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Types, Values, and Functions.
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Every Darklang program, and every Darklang package, is a
              collection of these three declarations. No classes, no interfaces,
              no macros, no headers.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                {
                  k: "Types",
                  v: "records, enums, and aliases that model your domain",
                  icon: (
                    <>
                      <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
                      <path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1" />
                    </>
                  ),
                },
                {
                  k: "Values",
                  v: "named, immutable data",
                  icon: (
                    <>
                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                    </>
                  ),
                },
                {
                  k: "Functions",
                  v: "typed logic that turns inputs into outputs",
                  icon: (
                    <>
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" />
                      <path d="M9 11.2h5.7" />
                    </>
                  ),
                },
              ].map(item => (
                <li
                  key={item.k}
                  className="flex items-start gap-3 leading-relaxed text-gray-600"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0 text-purple-lbg"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </svg>
                  <span>
                    <span className="font-bold text-purple-dbg">{item.k}:</span>{" "}
                    {item.v}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <CodeCard
            file="program.dark"
            code={`// a type
type Item =
  { name: String
    price: Float }

// a value
val openingHour = 7

// a function
let show (i: Item) : String =
  $"{i.name}: {i.price}"`}
          />
        </section>

        {/* ===================== MODULES NOTE ===================== */}
        <div className="mb-4 flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 px-5 py-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-0.5 shrink-0 text-purple-lbg"
            aria-hidden="true"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
          </svg>
          <p className="leading-relaxed text-gray-600">
            <span className="font-semibold text-gray-900">Modules</span> group
            related types, functions, and values under a namespace, like{" "}
            <code className="rounded border border-gray-200 bg-white px-1.5 py-0.5 font-code text-sm text-purple-dbg">
              module Email = ...
            </code>
            , and become packages others can share and reuse.
          </p>
        </div>

        {/* ===================== TOUR ===================== */}
        <div className="grid gap-10 pb-8 lg:grid-cols-[210px_1fr] lg:gap-14">
          {/* rail */}
          <aside
            className="sticky top-28 hidden self-start pt-12 lg:flex lg:flex-col"
            aria-label="Language tour"
          >
            <span className="px-4 pb-2 text-[0.72rem] font-bold uppercase tracking-[0.13em] text-gray-400">
              The tour
            </span>
            {TOUR.map((t, i) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className={`border-l-2 px-4 py-1.5 text-sm transition ${
                  active === t.id
                    ? "border-purple-lbg font-semibold text-purple-dbg"
                    : "border-gray-200 text-gray-400 hover:text-gray-900"
                }`}
              >
                {String(i + 1).padStart(2, "0")} · {t.label}
              </a>
            ))}
          </aside>

          {/* content */}
          <div>
            {/* ---------- 01 SIMPLE DATA ---------- */}
            <section id="simple" className="scroll-mt-32 pb-6 pt-12">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.13em] text-purple-lbg">
                01
              </p>
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                Simple Data
              </h2>
              <p className="mb-6 max-w-2xl leading-relaxed text-gray-600">
                Every program begins with simple data: strings, numbers,
                booleans, and characters. These are immutable, so once created
                they never change. There is also unit, for when a function has
                nothing to return.
              </p>
              <CodeCard
                file="stand.dark"
                code={`let stand = "Terminal Brews"
let cupsToday = 128
let price = 4.50
let isOpen = true
let size = 'M'

$"{stand}, {cupsToday} cups, open: {isOpen}"`}
                result={`"Terminal Brews, 128 cups, open: true"`}
              />

              <Callout
                tag="Worth knowing"
                title="Strings Count Characters the Way People Do."
                code={`Stdlib.String.length "👨‍👩‍👧‍👦"`}
                result="1"
              >
                String operations work on extended grapheme clusters, the
                characters you actually see, not bytes or code points. Byte- and
                code-point-level operations are still there when a program needs
                them.
              </Callout>

              <TypeRefRow
                label="The full set of primitives"
                items={PRIMITIVES}
              />
            </section>

            {/* ---------- 02 FUNCTIONS ---------- */}
            <section id="functions" className="scroll-mt-32 pb-6 pt-12">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.13em] text-purple-lbg">
                02
              </p>
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                Functions
              </h2>
              <p className="mb-6 max-w-2xl leading-relaxed text-gray-600">
                Every named function declares its parameter and return types:
                the signature is the contract. Functions are values: pass one by
                name, or write one inline with{" "}
                <code className="font-code text-sm text-purple-dbg">fun</code>.{" "}
                <strong className="font-semibold text-gray-900">
                  Pipelines
                </strong>{" "}
                go further:{" "}
                <code className="font-code text-sm text-purple-dbg">|&gt;</code>{" "}
                sends a value through a chain of functions, so multi-step logic
                reads in the order it happens.
              </p>
              <div className="grid items-start gap-5 md:grid-cols-2">
                <CodeCard
                  file="label.dark"
                  code={`let label
  (drink: String)
  (milk: String)
  : String =
  $"{drink} with {milk}"

label "matcha" "oat"`}
                  result={`"matcha with oat"`}
                />
                <CodeCard
                  file="pipeline.dark"
                  code={`// pass Stdlib.String.trim by name,
// write a lambda inline with fun
[ "latte"; "matcha "; "  " ]
|> Stdlib.List.map Stdlib.String.trim
|> Stdlib.List.filter (fun d -> d != "")
|> Stdlib.String.join " / "`}
                  result={`"latte / matcha"`}
                />
              </div>

              <Callout
                tag="Worth knowing"
                title={
                  <>
                    That{" "}
                    <code className="font-code text-base text-purple-dbg">
                      Stdlib.List.map
                    </code>{" "}
                    Is a Package Function.
                  </>
                }
              >
                Referencing it is all it takes, there is no install step, no
                import block, no lockfile. Package functions are immutable and
                individually versioned, so what you call today is what runs
                tomorrow. Operators (
                <code className="font-code text-sm text-purple-dbg">+</code>,{" "}
                <code className="font-code text-sm text-purple-dbg">==</code>,{" "}
                <code className="font-code text-sm text-purple-dbg">
                  &amp;&amp;
                </code>
                , <code className="font-code text-sm text-purple-dbg">++</code>{" "}
                for strings) are ordinary function calls too.
              </Callout>

              <TypeRefRow label="The type of a function" items={FUNCTIONS} />
            </section>

            {/* ---------- 03 MODELING DATA ---------- */}
            <section id="data" className="scroll-mt-32 pb-6 pt-12">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.13em] text-purple-lbg">
                03
              </p>
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                Modeling Data
              </h2>
              <p className="mb-6 max-w-2xl leading-relaxed text-gray-600">
                <strong className="font-semibold text-gray-900">Records</strong>{" "}
                group fields that belong together.{" "}
                <strong className="font-semibold text-gray-900">Enums</strong>{" "}
                name the distinct cases a value can be, and a case can carry
                data of its own. Between them, the shape of your domain is
                visible in the code.{" "}
                <strong className="font-semibold text-gray-900">Lists</strong>,{" "}
                <strong className="font-semibold text-gray-900">tuples</strong>,
                and{" "}
                <strong className="font-semibold text-gray-900">dicts</strong>{" "}
                carry collections of values.
              </p>
              <div className="grid items-start gap-5 md:grid-cols-2">
                <CodeCard
                  file="menu.dark"
                  code={`type Drink =
  | Coffee of shots: Int
  | Matcha
  | Tea of leaf: String

type Order =
  { item: Drink
    price: Float }

let espresso =
  Order
    { item = Coffee 2
      price = 4.50 }

let matchaLatte =
  Order
    { item = Matcha
      price = 5.00 }

// an update makes a new value;
// espresso itself is unchanged
let discounted =
  { espresso with price = 4.00 }`}
                />
                <CodeCard
                  file="collections.dark"
                  code={`// lists hold values of one type
let orders = [ espresso; matchaLatte ]

// tuples group a few values
// without naming a type
let special = ("cold brew", 5.00)

// dicts map string keys to values
let stock =
  Dict { beans = 12; matcha = 4 }

// reach in with a dot,
// or destructure as you bind
let firstPrice = espresso.price
let (name, cost) = special`}
                />
              </div>

              <Callout tag="Worth knowing" title="There Is No Null.">
                A value that might be absent is an{" "}
                <code className="font-code text-sm text-purple-dbg">
                  Option
                </code>
                . An operation that might fail returns a{" "}
                <code className="font-code text-sm text-purple-dbg">
                  Result
                </code>
                . Both are ordinary enums, the possibility is right there in the
                type, and the caller handles it like any other case. More on
                this in{" "}
                <a href="#errors" className="text-purple-dbg underline">
                  section 05
                </a>
                .
              </Callout>

              <TypeRefRow label="Collections" items={COLLECTIONS} />

              <p className="mt-6 text-sm text-gray-500">
                A{" "}
                <span className="font-semibold text-gray-700">type alias</span>{" "}
                just gives an existing type a new name, like{" "}
                <code className="rounded border border-gray-200 bg-white px-1.5 py-0.5 font-code text-purple-dbg">
                  type UserId = String
                </code>
                .
              </p>
            </section>

            {/* ---------- 04 PATTERN MATCHING ---------- */}
            <section id="matching" className="scroll-mt-32 pb-6 pt-12">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.13em] text-purple-lbg">
                04
              </p>
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                Pattern Matching
              </h2>
              <p className="mb-6 max-w-2xl leading-relaxed text-gray-600">
                <code className="font-code text-sm text-purple-dbg">match</code>{" "}
                branches on the structure of a value, enum cases, exact values,
                lists, tuples, with or-patterns to share an outcome and{" "}
                <code className="font-code text-sm text-purple-dbg">when</code>{" "}
                guards for extra conditions. For a simple yes/no,{" "}
                <code className="font-code text-sm text-purple-dbg">if</code> is
                there too. Darklang is expression-based, so both produce a value
                rather than just directing control: you can bind the result of a{" "}
                <code className="font-code text-sm text-purple-dbg">match</code>{" "}
                or an{" "}
                <code className="font-code text-sm text-purple-dbg">if</code> to
                a name, pass it to a function, or return it, as{" "}
                <code className="font-code text-sm text-purple-dbg">board</code>{" "}
                does below.
              </p>
              <div className="grid items-start gap-5 md:grid-cols-2">
                <CodeCard
                  file="labels.dark"
                  code={`let describe (drink: Drink) : String =
  match drink with
  | Coffee 1 -> "single espresso"
  | Coffee shots -> $"{shots}-shot coffee"
  | Matcha -> "matcha latte"
  | Tea leaf -> $"{leaf} tea"

// lists match too, with or-patterns,
// cons (head :: rest), and guards
let nextUp (queue: List<String>) : String =
  match queue with
  | [] | [ "water" ] -> "nothing to brew"
  | first :: _ when first == "decaf" ->
    "...why?"
  | first :: _ -> $"now making: {first}"`}
                />
                <CodeCard
                  file="board.dark"
                  code={`let board =
  if isOpen && cupsToday > 0
  then "Open"
  else "Closed"

orders
|> Stdlib.List.filter (fun o -> o.price >= 5.0)
|> Stdlib.List.map (fun o -> describe o.item)
|> Stdlib.String.join ", "`}
                  result={`"matcha latte"`}
                />
              </div>
            </section>

            {/* ---------- 05 ERRORS ---------- */}
            <section id="errors" className="scroll-mt-32 pb-6 pt-12">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.13em] text-purple-lbg">
                05
              </p>
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                Errors Are Values
              </h2>
              <p className="mb-6 max-w-2xl leading-relaxed text-gray-600">
                A function that can fail says so in its signature by returning a{" "}
                <code className="font-code text-sm text-purple-dbg">
                  Result
                </code>
                ; a value that might be absent is an{" "}
                <code className="font-code text-sm text-purple-dbg">
                  Option
                </code>
                . Either way the possibilities are visible in the type, and the
                caller handles them with the same{" "}
                <code className="font-code text-sm text-purple-dbg">match</code>{" "}
                you already know.
              </p>
              <div className="grid items-start gap-5 md:grid-cols-2">
                <CodeCard
                  file="checkout.dark"
                  code={`let checkout (order: Order) : Result<String, String> =
  if isOpen then
    Result.Ok $"One {describe order.item}, enjoy"
  else
    Result.Error "Sorry, we're closed"

match checkout espresso with
| Ok receipt -> receipt
| Error reason -> $"No coffee today: {reason}"`}
                  result={`"One 2-shot coffee, enjoy"`}
                />
                <CodeCard
                  file="loyalty.dark"
                  code={`// Option: a value that
// might be absent
let loyaltyGreeting
  (name: Stdlib.Option.Option<String>)
  : String =
  match name with
  | Some n -> $"Welcome back, {n}"
  | None -> "Welcome"`}
                />
              </div>

              <TypeRefRow label="Option and Result" items={WRAPPERS} />
            </section>
          </div>
        </div>
      </div>

      {/* ===================== WHAT IT IS FOR ===================== */}
      <div className="mx-auto max-w-7xl 2xl:max-w-[100rem] px-4">
        <section className="py-20 md:py-28">
          <div className="mb-10 max-w-3xl">
            <Eyebrow>What it's for</Eyebrow>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
              Backends, CLIs, and the Jobs in Between.
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Darklang is built for the software you actually ship: the service
              behind an app, the tool you run from a terminal, the job that runs
              every hour. One language covers all of them, so moving between
              them is not a change of stack.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-12">
            {USE_CASES.map(item => (
              <div key={item.h}>
                <span
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.tint}`}
                >
                  {item.icon}
                </span>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {item.h}
                </h3>
                <p className="mb-3 leading-relaxed text-gray-600">{item.p}</p>
                <span className="mb-4 inline-block rounded-lg bg-gray-50 px-3 py-1.5 font-code text-xs text-gray-600">
                  {item.hint}
                </span>
                <Link
                  to={item.link.to}
                  className="group flex items-center gap-1.5 text-[0.95rem] font-medium text-purple-dbg"
                >
                  {item.link.label}
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
        </section>
      </div>

      {/* ===================== WHY A NEW LANGUAGE ===================== */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl 2xl:max-w-[100rem] px-4">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Eyebrow>Why a new language?</Eyebrow>
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                The Language and Platform Share the Same Model of a Program.
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                The structure of a Darklang program is itself a Darklang type,
                defined in a Darklang package. The parser produces values of
                that type, the runtime executes them, and every tool works with
                them. Darklang isn't a new language for the sake of new syntax.
                It exists so the entire environment can work with programs as
                structured data rather than text.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-7 gap-y-2">
                {[
                  { label: "Trace-driven development", to: "/traceDriven" },
                  { label: "Package manager", to: "/package-manager" },
                  { label: "Darklang and AI", to: "/ai" },
                ].map(l => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="group inline-flex items-center gap-1.5 font-medium text-purple-dbg"
                  >
                    {l.label}
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <ul className="lg:pt-1">
              {WHY_POINTS.map(item => (
                <li
                  key={item.h}
                  className="flex gap-4 border-t border-gray-100 py-5 first:border-0 first:pt-0"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-lbg/10 text-blue-dbg">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="mb-1 font-bold text-gray-900">{item.h}</h3>
                    <p className="leading-relaxed text-gray-600">{item.p}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===================== INFLUENCES ===================== */}
      <section className="border-y border-gray-200 bg-[#faf8fb] py-12">
        <div className="mx-auto max-w-7xl 2xl:max-w-[100rem] px-4">
          <Eyebrow>Familiar foundations</Eyebrow>
          <p className="mt-2 max-w-4xl text-lg leading-relaxed text-gray-600">
            If you've written{" "}
            <strong className="font-semibold text-gray-900">
              OCaml, F#, Elm, or Rust
            </strong>
            , you've met these ideas: immutable values, records and enums,
            pattern matching, pipelines, errors as values. Darklang's
            contribution isn't inventing them: it's keeping the set small.
          </p>
        </div>
      </section>

      {/* ===================== NEXT ===================== */}
      <div className="mx-auto max-w-7xl 2xl:max-w-[100rem] px-4">
        <section className="py-16 text-center">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            Start Writing Darklang.
          </h2>
          <p className="mb-7 text-gray-600">
            Install the CLI, read the documentation, or browse the packages.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link className={primary} to="/getting-started">
              Install Darklang
            </Link>
            <a
              className={ghost}
              href="https://docs.darklang.com"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
            <Link className={ghost} to="/packages">
              Browse the packages
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Language;
