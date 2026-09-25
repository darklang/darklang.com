// Experimental homepage at /home7: the problem-first version. It opens with
// what developers publicly report about working with agents, quoted verbatim,
// and only then says what Darklang does about it as a language and a platform.
//
// It states planned features as fact on purpose and must not ship until they
// exist. The real homepage at "/" is untouched.
import Hero from "./Hero";
import Parallel from "./Parallel";
import Drift from "./Drift";
import BlindSpots from "./BlindSpots";
import Debt from "./Debt";
import Destruction from "./Destruction";
import Permissions from "./Permissions";
import SupplyChain from "./SupplyChain";
import Coordination from "./Coordination";
import Foundation from "./Foundation";
import Newsletter from "../Home/Newsletter";
import { DraftNav, TableOfContents } from "../../components";

const Home7 = () => {
  const tocItems = [
    { id: "hero", title: "Agents Write the Code Now" },
    { id: "parallel", title: "Two Agents, One Repo" },
    { id: "drift", title: "You Asked for One Thing" },
    { id: "blind-spots", title: "Reconstructing the Program" },
    { id: "debt", title: "Cheap Code, Expensive Consequences" },
    { id: "destruction", title: "Nothing in the Way of rm -rf" },
    { id: "permissions", title: "An Instruction Is Not a Boundary" },
    { id: "supply-chain", title: "The Agent Installs Things Now" },
    { id: "coordination", title: "Many Agents, No Shared Ground" },
    { id: "foundation", title: "What Darklang Does" },
    { id: "newsletter", title: "Send Me Project Updates" },
  ];

  return (
    <>
      <DraftNav />
      <TableOfContents items={tocItems} />

      <div id="hero">
        <Hero />
      </div>

      {/* ---------- the problems, in their own words ---------- */}
      <Parallel />
      <Drift />
      <BlindSpots />
      <Debt />
      <Destruction />
      <Permissions />
      <SupplyChain />
      <Coordination />

      {/* ---------- what Darklang does about them ---------- */}
      <Foundation />

      <div id="newsletter">
        <Newsletter />
      </div>
    </>
  );
};

export default Home7;
