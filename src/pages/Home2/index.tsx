// Experimental copy of the homepage at /home.
// Same content as the real homepage, but the pipeline sections alternate
// which side their example/visual sits on (Write right, Version left, Run
// right, Inspect left, and so on). The real homepage at "/" is untouched.
import Hero from "../Home/Hero";
import OneProgram from "../Home/OneProgram";
import WriteGenerate from "../Home/WriteGenerate";
import RunIt from "../Home/RunIt";
import Inspect from "../Home/Inspect";
import Review from "../Home/Review";
import VersionIt from "../Home/VersionIt";
import Deploy from "../Home/Deploy";
import Sync from "../Home/Sync";
import OpenSource from "../Home/OpenSource";
import TryDarklang from "../Home/TryDarklang";
import Newsletter from "../Home/Newsletter";
import { TableOfContents } from "../../components";

const Home2 = () => {
  const tocItems = [
    { id: "hero", title: "Just Code. Better Software" },
    { id: "one-program", title: "One Program, from First Line to Production" },
    { id: "write-generate", title: "Start with Code, or a Prompt" },
    { id: "run-it", title: "Run It the Moment It Exists" },
    { id: "inspect", title: "See Exactly What Happened" },
    { id: "review", title: "See the Full Impact of Every Change" },
    { id: "deploy", title: "Make It Live, Anywhere" },
    { id: "version-it", title: "Source Control That Understands Your Program" },
    { id: "sync", title: "Keep Every Instance in Sync" },
    { id: "try-darklang", title: "See Where Darklang Fits" },
    { id: "open-source", title: "Come Build It with Us" },
    { id: "newsletter", title: "Send Me Project Updates" },
  ];

  return (
    <>
      <TableOfContents items={tocItems} />
      <div id="hero">
        <Hero />
      </div>
      <div id="one-program">
        <OneProgram />
      </div>
      {/* Alternating example sides below: example right, then left, then right… */}
      <div id="write-generate">
        <WriteGenerate />
      </div>
      <div id="run-it">
        <RunIt reverse />
      </div>
      <div id="inspect">
        <Inspect />
      </div>
      <div id="review">
        <Review reverse />
      </div>
      <div id="deploy">
        <Deploy />
      </div>
      <div id="version-it">
        <VersionIt reverse />
      </div>
      <div id="sync">
        <Sync />
      </div>
      <div id="try-darklang">
        <TryDarklang />
      </div>
      <div id="open-source">
        <OpenSource />
      </div>
      <div id="newsletter">
        <Newsletter />
      </div>
    </>
  );
};

export default Home2;
