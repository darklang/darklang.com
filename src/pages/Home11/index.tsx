// Experimental homepage at /home11: a fresh draft, still being filled in
// section by section.
//
// The angle is that AI made writing code easier, while understanding it,
// checking it, and managing its consequences still takes work. Darklang is
// the connected system that helps with that part. It is copy only
// for now, with no pictures or demos.
//
// The real homepage at "/" is untouched.
import Hero from "./Hero";
import Problem from "./Problem";
import Features from "./Features";
import OpenSource from "./OpenSource";
import { DraftNav, TableOfContents } from "../../components";

const Home11 = () => {
  const tocItems = [
    { id: "hero", title: "Coding Is AI-Accelerated" },
    { id: "problem", title: "The Problems Aren't New" },
    { id: "shorter-path", title: "A Shorter Path to Working Software" },
    { id: "backend", title: "The Whole Backend in One Place" },
    { id: "discoveries", title: "Keep the Agent on Task" },
    { id: "answers", title: "Better Context, Fewer Tokens" },
    { id: "impact", title: "Know the Blast Radius" },
    { id: "versions", title: "Change Shared Code Safely" },
    { id: "branches", title: "Agents in Parallel" },
    { id: "tracing", title: "See What Happened When the Code Ran" },
    { id: "access", title: "Only the Access It Needs" },
    { id: "cleanup", title: "Don't Leave a Mess Behind" },
    { id: "review", title: "Review the Whole Change" },
    { id: "sync", title: "Bring Changes Together" },
    { id: "deployment", title: "Take Working Code Live" },
    { id: "open-source", title: "Darklang Is Open Source" },
  ];

  return (
    <>
      <DraftNav />
      <TableOfContents items={tocItems} />
      <Hero />
      <Problem />
      <Features />
      <OpenSource />
    </>
  );
};

export default Home11;
