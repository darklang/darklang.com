// Experimental homepage at /home2, built around staying in control of code:
// what it may reach, what it did, how a change is reviewed, and how to undo it.
// The real homepage at "/" is untouched.
import Hero from "./Hero";
import Moments from "./Moments";
import Capabilities from "./Capabilities";
import Traces from "./Traces";
import ReviewChanges from "./ReviewChanges";
import Versions from "./Versions";
import SyncSection from "./SyncSection";
import SelfHosted from "./SelfHosted";
import Agents from "./Agents";
import ApiImport from "./ApiImport";
import Durable from "./Durable";
import Installing from "./Installing";
import WhatYouBuild from "./WhatYouBuild";
import Closer from "./Closer";
import Newsletter from "../Home/Newsletter";
import { TableOfContents } from "../../components";

const HomeControl = () => {
  const tocItems = [
    { id: "hero", title: "Just Code. Full Control" },
    { id: "moments", title: "Four Moments Where the Answer Is Yours" },
    { id: "capabilities", title: "You Decide What Code Can Reach" },
    { id: "traces", title: "You See What Actually Happened" },
    { id: "review", title: "You Review Meaning, Not Text" },
    { id: "versions", title: "You Can Always Go Back" },
    { id: "sync", title: "You Choose Where It Runs" },
    { id: "agents", title: "Move Fast, Without Blind Trust" },
    { id: "api-import", title: "Turn an API into a Tool" },
    { id: "durable", title: "The Run Waits for You" },
    { id: "installing", title: "You See the Authority Before You Install" },
    { id: "self-hosted", title: "You Own the Tool Itself" },
    { id: "build", title: "Four Things This Makes Easy" },
    { id: "closer", title: "Your Code, Your Machines, Your Call" },
    { id: "newsletter", title: "Send Me Project Updates" },
  ];

  return (
    <>
      <TableOfContents items={tocItems} />
      <div id="hero">
        <Hero />
      </div>
      <div id="moments">
        <Moments />
      </div>
      <div id="capabilities">
        <Capabilities />
      </div>
      <div id="traces">
        <Traces />
      </div>
      <div id="review">
        <ReviewChanges />
      </div>
      <div id="versions">
        <Versions />
      </div>
      <div id="sync">
        <SyncSection />
      </div>
      <div id="agents">
        <Agents />
      </div>
      <div id="api-import">
        <ApiImport />
      </div>
      <div id="durable">
        <Durable />
      </div>
      <div id="installing">
        <Installing />
      </div>
      <div id="self-hosted">
        <SelfHosted />
      </div>
      <div id="build">
        <WhatYouBuild />
      </div>
      <div id="closer">
        <Closer />
      </div>
      <div id="newsletter">
        <Newsletter />
      </div>
    </>
  );
};

export default HomeControl;
