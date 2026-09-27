// The long version of the homepage argument, at /built-for-agents.
//
// Thirteen problems developers report about working with coding agents, each
// paired with the thing in Darklang that answers it. The homepage links here
// rather than carrying all of this itself. Problems are merged where they are
// the same problem wearing different clothes, and the three we cannot fix are
// named at the end.
//
// It states planned features as fact on purpose and must not ship until they
// exist.
import { Link } from "react-router-dom";

import Problem from "./Problem";
import Parallel from "./Parallel";
import Alone from "./Alone";
import Aftermath from "./Aftermath";
import BlastRadius from "./BlastRadius";
import Limits from "./Limits";
import { TableOfContents } from "../../components";

const BuiltForAgents = () => {
  const tocItems = [
    { id: "parallel", title: "Running Agents in Parallel" },
    { id: "alone", title: "What One Agent Does on Its Own" },
    { id: "aftermath", title: "What It Leaves Behind" },
    { id: "blast-radius", title: "What It Can Reach" },
    { id: "limits", title: "Three We Do Not Fix" },
  ];

  return (
    <>
      <TableOfContents items={tocItems} />

      <header className="mx-auto max-w-7xl 2xl:max-w-[100rem] px-4 pb-4 pt-16">
        <div className="max-w-4xl">
          <nav className="mb-6 text-sm 2xl:text-base text-gray-500">
            <Link to="/" className="hover:text-gray-900">
              Home
            </Link>
            <span className="px-2 text-gray-300" aria-hidden="true">
              /
            </span>
            <span className="text-gray-900">Built for agents</span>
          </nav>

          <p className="mb-4 text-sm 2xl:text-base font-bold tracking-[0.12em] text-rust uppercase">
            The long version
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-gray-900 md:text-5xl 2xl:text-6xl">
            What Breaks When Agents Write the Code,{" "}
            <span className="text-blue-lbg">and What We Do About It</span>
          </h1>
          <p className="text-lg md:text-xl 2xl:text-2xl leading-relaxed text-gray-700">
            None of these are new failures of judgement. They are what happens
            when a stack built around one careful human is handed to something
            fast, parallel, and literal-minded. Thirteen of them below, each
            paired with the answer, and three at the end that we do not claim to
            solve.
          </p>
        </div>
      </header>

      <Problem />
      <Parallel />
      <Alone />
      <Aftermath />
      <BlastRadius />
      <Limits />
    </>
  );
};

export default BuiltForAgents;
