// Experimental homepage at /home9, rendering a copy draft as written, in the
// same shape as /home: the site's own header and footer, a table of contents,
// the centered hero, alternating two-column sections, and the newsletter at
// the end. The words are the draft's; these components only set them.
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

const Home9 = () => {
  const tocItems = [
    { id: "hero", title: "Built for Coding with Agents" },
    {
      id: "problem",
      title: "Writing the Code Was Supposed to Be the Hard Part",
    },
    { id: "parallel-development", title: "Stop Agents Stepping on Each Other" },
    {
      id: "code-discovery",
      title: "Give Agents the Context They Keep Missing",
    },
    { id: "permissions", title: "Don't Touch That, Enforced" },
    { id: "package-approvals", title: "Know Which Dependency You're Trusting" },
    { id: "traces", title: "See What Actually Happened" },
    { id: "change-review", title: "Why Did Twelve Things Change?" },
    { id: "version-history", title: "A Way Back" },
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

export default Home9;
