import React from "react";
import { Link } from "react-router-dom";

/**
 * One category on the homepage: everything that goes wrong in this area,
 * grouped, then the thing we do about it, then a way out to the page that
 * argues it properly. The example beside it is always an example of the
 * ANSWER, never of the problem, because the problem is already in words.
 */
export interface SectionProps {
  /** Security, review, usage, and so on. */
  category: string;
  /** The answer, as the headline. */
  title: React.ReactNode;
  /** What goes wrong here, in the words developers use for it. */
  problems: string[];
  paras: React.ReactNode[];
  link: { href: string; label: string };
  /** The worked example, on the side. */
  example: React.ReactNode;
  /** Put the example on the left instead. */
  reverse?: boolean;
  tinted?: boolean;
  /** Set when the honest answer is "partly". */
  partial?: boolean;
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  category,
  title,
  problems,
  paras,
  link,
  example,
  reverse,
  tinted,
  partial,
  id,
}) => (
  <section id={id} className={tinted ? "bg-gray-50" : ""}>
    <div className="mx-auto max-w-7xl 2xl:max-w-[100rem] px-4 py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className={reverse ? "lg:order-2" : ""}>
          <p className="mb-6 text-sm 2xl:text-base font-bold tracking-[0.12em] text-rust uppercase">
            {category}
          </p>

          {/* what goes wrong, grouped and quiet */}
          <div className="mb-8 rounded-xl border border-gray-200 bg-[#fbfafc] p-5 md:p-6">
            <p className="mb-3 text-xs 2xl:text-sm font-bold tracking-[0.1em] text-gray-light uppercase">
              What goes wrong
            </p>
            <ul className="space-y-2">
              {problems.map(problem => (
                <li
                  key={problem}
                  className="flex gap-3 leading-relaxed text-gray-600 2xl:text-lg"
                >
                  <span
                    className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-rust/60"
                    aria-hidden="true"
                  />
                  {problem}
                </li>
              ))}
            </ul>
          </div>

          <p className="mb-3 text-xs 2xl:text-sm font-bold tracking-[0.1em] text-purple-lbg uppercase">
            {partial ? "What we can do" : "How we solve it"}
          </p>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl 2xl:text-4xl">
            {title}
          </h2>

          <div className="space-y-4">
            {paras.map((para, i) => (
              <p
                key={i}
                className="text-base md:text-lg 2xl:text-xl leading-relaxed text-gray-700"
              >
                {para}
              </p>
            ))}
          </div>

          <Link
            to={link.href}
            className="mt-6 inline-flex items-center gap-1.5 font-semibold text-blue-lbg hover:underline 2xl:text-lg"
          >
            {link.label}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={`min-w-0 ${reverse ? "lg:order-1" : ""}`}>
          <p className="mb-3 text-xs 2xl:text-sm font-bold tracking-[0.1em] text-gray-light uppercase">
            What that looks like
          </p>
          {example}
        </div>
      </div>
    </div>
  </section>
);

export default Section;
