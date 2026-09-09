// Experimental homepage at /home3, built around liveness: a language, a
// package system and a runtime in one, with permissions, versioning and sync
// following on from it. The real homepage at "/" is untouched.
import Hero from "./Hero";
import Walkthrough from "./Walkthrough";
import LanguageSection from "./LanguageSection";
import PackageTree from "./PackageTree";
import Permissions from "./Permissions";
import Versioning from "./Versioning";
import Traces from "./Traces";
import Sync from "./Sync";
import Agents from "./Agents";
import WhatYouBuild from "./WhatYouBuild";
import WhereItStands from "./WhereItStands";
import GetStarted from "./GetStarted";
import Newsletter from "../Home/Newsletter";
import { DraftNav, TableOfContents } from "../../components";

const Home3 = () => {
  const tocItems = [
    { id: "hero", title: "Write a Function. It's Live" },
    { id: "walkthrough", title: "From Install to a Stripe Endpoint" },
    { id: "language", title: "Caught Before It Runs" },
    { id: "package-tree", title: "Everything You Write Lives in One Tree" },
    { id: "permissions", title: "Permissions Are Part of the Language" },
    { id: "versions", title: "Version Control for Functions, Not Files" },
    { id: "traces", title: "See What Your Code Actually Did" },
    { id: "sync", title: "Sync Without Git" },
    { id: "agents", title: "Made for AI Teammates" },
    { id: "build", title: "What You Can Build" },
    { id: "where-it-stands", title: "Being Built in the Open" },
    { id: "get-started", title: "Less Wiring. More Building" },
    { id: "newsletter", title: "Send Me Project Updates" },
  ];

  return (
    <>
      <DraftNav />
      <TableOfContents items={tocItems} />
      <div id="hero">
        <Hero />
      </div>
      <div id="walkthrough">
        <Walkthrough />
      </div>
      <div id="language">
        <LanguageSection />
      </div>
      <div id="package-tree">
        <PackageTree />
      </div>
      <div id="permissions">
        <Permissions />
      </div>
      <div id="versions">
        <Versioning />
      </div>
      <div id="traces">
        <Traces />
      </div>
      <div id="sync">
        <Sync />
      </div>
      <div id="agents">
        <Agents />
      </div>
      <div id="build">
        <WhatYouBuild />
      </div>
      <div id="where-it-stands">
        <WhereItStands />
      </div>
      <div id="get-started">
        <GetStarted />
      </div>
      <div id="newsletter">
        <Newsletter />
      </div>
    </>
  );
};

export default Home3;
