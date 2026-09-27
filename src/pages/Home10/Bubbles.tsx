/**
 * Developer quotes above each section's example, drawn as slips of paper
 * dropped in a jar: each one a little off true, overlapping the next, held by
 * a strip of tape. Nothing is trimmed or tidied; the quotes live in quotes.ts.
 */

import React from "react";

/** Where each slip lands: a tilt, a nudge sideways, and the tape's position. */
const DROPS = [
  { tilt: "-rotate-[1.6deg]", nudge: "ml-0 mr-6", tape: "left-6" },
  { tilt: "rotate-[1.1deg]", nudge: "ml-5 mr-1", tape: "right-8" },
  {
    tilt: "-rotate-[0.7deg]",
    nudge: "ml-2 mr-4",
    tape: "left-1/2 -translate-x-1/2",
  },
  { tilt: "rotate-[1.4deg]", nudge: "ml-4 mr-2", tape: "right-5" },
];

/** The paper, in the site's soft tints. */
const PAPERS = ["bg-[#fbf8ff]", "bg-[#f4fbf9]", "bg-[#fffaf1]", "bg-[#f5f7fd]"];

const Bubbles: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="mb-8">
    {items.map((text, i) => {
      const drop = DROPS[i % DROPS.length];
      return (
        <li
          key={text}
          className={`relative ${i > 0 ? "-mt-2" : ""} ${drop.nudge}`}
        >
          <blockquote
            className={`relative rounded-sm border border-gray-200/80 px-5 pt-5 pb-4 text-sm leading-relaxed text-gray-700 shadow-[0_10px_24px_-16px_rgba(30,30,40,0.55)] 2xl:text-base ${drop.tilt} ${PAPERS[i % PAPERS.length]}`}
          >
            {/* the tape */}
            <span
              aria-hidden="true"
              className={`absolute -top-2 h-4 w-12 rotate-[-3deg] rounded-[2px] bg-[#e9e3d2]/80 shadow-[0_1px_2px_rgba(0,0,0,0.12)] ${drop.tape}`}
            />
            <span
              aria-hidden="true"
              className="float-left -mt-2 mr-2 font-caveat text-3xl leading-none text-gray-300"
            >
              “
            </span>
            {text}
          </blockquote>
        </li>
      );
    })}
  </ul>
);

export default Bubbles;
