import React from "react";
import { Link } from "react-router-dom";

import InstallCommand from "../../common/ui/InstallCommand";
import { Term } from "../BuiltForAgents/parts";
import { cmd, out, hi, gap } from "../BuiltForAgents/term";

/** One short session: what changed, what it may touch, what it did. */
const SESSION = [
  cmd("dark status"),
  out("on branch checkout-fix"),
  hi("  changed   Shop.checkout, Shop.refundWindow"),
  out("  affects   7 dependents"),
  gap,
  cmd("dark permissions requirements Shop.checkout"),
  out("  requires  Http, DatastoreWrite"),
  hi("  granted   GET https://api.example.com/v1"),
  out("  denied    everything else"),
  gap,
  cmd("dark eval 'Shop.checkout(cart)'"),
  hi("  Ok order#8812   18ms   trace 4f2a1c"),
];

const Hero: React.FC = () => (
  <section className="mx-auto max-w-7xl 2xl:max-w-[100rem] px-4 pb-4 pt-14 md:pt-20">
    <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
      <div>
        <p className="mb-4 text-sm 2xl:text-base font-bold tracking-[0.12em] text-purple-lbg uppercase">
          Darklang
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-gray-900 md:text-5xl 2xl:text-6xl">
          Agents Write the Code.
          <br />
          <span className="text-blue-lbg">
            Give Them Somewhere Built for It.
          </span>
        </h1>

        <p className="mb-5 text-lg md:text-xl 2xl:text-2xl leading-relaxed text-gray-700">
          Darklang is a functional language and integrated runtime where the
          program is structured data rather than a folder of files, every effect
          is permissioned, and every run is traced. Packages, source control,
          review, and execution are one system.
        </p>

        <p className="mb-9 text-lg md:text-xl 2xl:text-2xl leading-relaxed text-gray-700">
          Git, your package manager, and your shell all assume one person, one
          checkout, one decision at a time. Agents are none of those things.
          Everything below is what happens in that gap.
        </p>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link
            to="/getting-started"
            className="inline-flex items-center gap-2 rounded-full bg-purple-lbg px-8 py-3 text-lg font-medium text-white-custom transition-colors hover:bg-purple-secondry"
          >
            Get Started
            <span aria-hidden="true">→</span>
          </Link>
          <InstallCommand />
        </div>
      </div>

      <div className="min-w-0">
        <Term lines={SESSION} label="dark" />
      </div>
    </div>
  </section>
);

export default Hero;
