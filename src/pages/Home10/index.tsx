// Experimental homepage at /home10: the /home9 draft, re-angled.
//
// Same body copy and same shape as /home9, but every section is titled by
// the thing Dark gives you rather than the thing agents do wrong, on the
// pattern "dependencies you can trust". The through-line is that coding with
// AI revealed problems the language was built to solve, not that agents need
// stopping.
//
// It states planned features as fact on purpose and must not ship until they
// exist. The real homepage at "/" is untouched.
import Hero from "./Hero";
import Problem from "./Problem";
import Features from "./Features";
import Workflow from "./Workflow";
import Language from "./Language";
import Faq from "./Faq";
import Close from "./Close";
import Newsletter from "../Home/Newsletter";
import { DraftNav, TableOfContents } from "../../components";

const Home10 = () => {
  const tocItems = [
    { id: "hero", title: "A New Way of Coding" },
    { id: "problem", title: "The Hard Part Was Never the Typing" },
    { id: "branches", title: "Branches You Can Hand to an Agent" },
    { id: "context", title: "Context You Can Query" },
    { id: "permissions", title: "Permissions You Can Enforce" },
    { id: "dependencies", title: "Dependencies You Can Trust" },
    { id: "traces", title: "Failures You Can Trace" },
    { id: "tests", title: "Tests You Can Review" },
    { id: "review", title: "Changes You Can Explain" },
    { id: "versions", title: "Versions You Can Return To" },
    { id: "how-it-works", title: "One Environment, Edit to Review" },
    { id: "language", title: "Why a Language, Too?" },
    { id: "faq", title: "A Few Things to Know" },
    { id: "close", title: "A Better Place to Build" },
    { id: "newsletter", title: "Send Me Project Updates" },
  ];

  return (
    <>
      <DraftNav />
      <TableOfContents items={tocItems} />
      <Hero />
      <Problem />
      <Features />
      <Workflow />
      <Language />
      <Faq />
      <Close />
      <div id="newsletter">
        <Newsletter />
      </div>
    </>
  );
};

export default Home10;
