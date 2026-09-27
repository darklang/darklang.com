import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";
import { Body, Landing, Shell, Underline } from "../Home10/parts";

/** The old problems, one card each. Between them they set up every section
    further down the page. */
const PROBLEMS = [
  "You change one function, and something you never touched stops working.",
  "Two people change the same code, and someone untangles the merge.",
  "The diff shows what changed, but doesn't highlight what's affected.",
  "Finding the right function means reading half the codebase.",
  "A dependency you never read runs with all your permissions.",
  "One bug, four tools, and you piece the story together yourself.",
];

const Problem: React.FC = () => (
  <Shell id="problem">
    <div className="mx-auto max-w-5xl 2xl:max-w-6xl text-center">
      <SectionTitle align="center">
        The problems aren't new.
        <br />
        AI makes them <Underline>harder to ignore</Underline>
      </SectionTitle>
    </div>

    <div className="mx-auto mt-10 max-w-5xl 2xl:max-w-6xl">
      <ul className="flex flex-wrap justify-center gap-4">
        {PROBLEMS.map(problem => (
          <li
            key={problem}
            className="w-full rounded-2xl border border-gray-200 bg-white p-6 text-lg leading-relaxed text-gray-700 shadow-[0_18px_40px_-34px_rgba(30,30,40,0.6)] sm:w-[calc(50%-0.5rem)] md:text-xl lg:w-[calc((100%-2rem)/3)]"
          >
            {problem}
          </li>
        ))}
      </ul>

      <div className="mt-10 text-center">
        <Landing>
          Now imagine those changes arriving from several agents at once.
        </Landing>
      </div>

      <div className="mx-auto mt-10 max-w-4xl text-center">
        <Body>
          <p>
            Darklang brings the{" "}
            <span className="font-semibold text-purple-lbg">language</span>,{" "}
            <span className="font-semibold text-acc-amber">runtime</span>,{" "}
            <span className="font-semibold text-blue-lbg">package manager</span>
            , and{" "}
            <span className="font-semibold text-rust">version control</span>{" "}
            together to help you manage what faster coding leaves behind.
          </p>
        </Body>
      </div>
    </div>
  </Shell>
);

export default Problem;
