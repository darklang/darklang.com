import React from "react";
import { Link } from "react-router-dom";

import InstallCommand from "../../common/ui/InstallCommand";
import { TONES } from "./tones";

/**
 * Three of the quotes from further down the page, brought up front. The hero
 * makes a claim about the era; these are the evidence for it, so they arrive
 * first rather than as a reward for scrolling.
 */
const OPENERS: { text: string; tone: string }[] = [
  {
    text: "they start stepping on each other's files. Merge conflicts everywhere. One agent reverts what another just wrote. It's a mess.",
    tone: "blue",
  },
  {
    text: "It executed this against my live, in-use database",
    tone: "rust",
  },
  {
    text: "we found malware in our own config files.",
    tone: "amber",
  },
];

/** Where the argument goes, so the page can be entered from the middle. */
const JUMPS: { id: string; label: string }[] = [
  { id: "parallel", label: "Parallel work" },
  { id: "drift", label: "Drift" },
  { id: "blind-spots", label: "Blind spots" },
  { id: "debt", label: "Debt" },
  { id: "destruction", label: "Destruction" },
  { id: "permissions", label: "Permissions" },
  { id: "supply-chain", label: "Supply chain" },
  { id: "foundation", label: "What Darklang does" },
];

const Hero: React.FC = () => (
  <section className="mx-auto max-w-7xl 2xl:max-w-[100rem] px-4 pb-8 pt-16 md:pt-24">
    <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
      <div>
        <p className="mb-4 text-sm 2xl:text-base font-bold uppercase tracking-[0.12em] text-purple-lbg">
          Darklang
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-gray-900 md:text-5xl 2xl:text-6xl">
          Agents Write the Code Now.
          <br />
          <span className="text-blue-lbg">
            The Stack Underneath Was Built for Someone Else.
          </span>
        </h1>

        <p className="mb-5 text-lg md:text-xl 2xl:text-2xl leading-relaxed text-gray-700">
          Files, worktrees, package installs, shell access, and line-by-line
          diffs all assume one person, working alone, deciding what happens
          next. Hand that stack to a few agents running at once and it starts
          coming apart in ways that are now well documented.
        </p>

        <p className="mb-8 text-lg md:text-xl 2xl:text-2xl leading-relaxed text-gray-700">
          What follows is what developers report, in their own words, and what
          Darklang does about it as a language and a platform designed for this
          way of working.
        </p>

        <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link
            to="/getting-started"
            className="inline-flex items-center gap-2 rounded-full bg-purple-lbg px-8 py-3 text-lg font-medium text-white-custom transition-colors hover:bg-purple-secondry"
          >
            Get Started
            <span aria-hidden="true">→</span>
          </Link>
          <InstallCommand />
        </div>

        <nav aria-label="Sections" className="flex flex-wrap gap-2">
          {JUMPS.map(j => (
            <a
              key={j.id}
              href={`#${j.id}`}
              className="rounded-full border border-gray-200 px-3 py-1 text-xs 2xl:text-sm text-gray-600 transition hover:border-gray-300 hover:text-gray-900"
            >
              {j.label}
            </a>
          ))}
        </nav>
      </div>

      {/* the evidence, stacked and slightly out of true, the way notes pile up */}
      <div className="min-w-0 lg:pl-6">
        <div className="space-y-4">
          {OPENERS.map((q, i) => {
            const tone = TONES[q.tone];
            return (
              <figure
                key={q.text}
                style={{ animationDelay: `${i * 90}ms` }}
                className={`animate-rise-in rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_18px_40px_-30px_rgba(30,30,40,0.6)] ${
                  i % 2 === 0 ? "-rotate-[0.6deg]" : "rotate-[0.7deg]"
                }`}
              >
                <div className="flex gap-4">
                  <span
                    className={`w-[3px] shrink-0 rounded-full ${tone.rule}`}
                    aria-hidden="true"
                  />
                  <blockquote className="text-base md:text-lg 2xl:text-xl leading-relaxed text-gray-700">
                    “{q.text}”
                  </blockquote>
                </div>
              </figure>
            );
          })}
        </div>

        <p className="mt-5 text-center text-sm 2xl:text-base text-gray-light">
          Every quote on this page is reproduced as it was written.
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
