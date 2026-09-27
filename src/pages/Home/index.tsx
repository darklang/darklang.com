import Hero from "./Hero";
// import DevelopmentSteps from "./DevelopmentSteps";
import OneProgram from "./OneProgram";
import WriteGenerate from "./WriteGenerate";
import RunIt from "./RunIt";
import Inspect from "./Inspect";
import Review from "./Review";
import VersionIt from "./VersionIt";
import Deploy from "./Deploy";
import Sync from "./Sync";
// import LanguageFeatures from "./LanguageFeatures";
import OpenSource from "./OpenSource";
import TryDarklang from "./TryDarklang";
// import BackendFeatures from "./BackendFeatures";
// import AsyncRuntime from "./AsyncRuntime";
// import GradualStaticTyping from "./GradualStaticTyping";
// import PackageManager from "./PackageManager";
// import TraceDrivenDevelopment from "./TraceDrivenDevelopment";
// import Editing from "./Editing";
// import CLI from "./CLI";
// import DeploylessCloud from "./DeploylessCloud";
// import DesignedForGenAI from "./DesignedForGenAI";
import Newsletter from "./Newsletter";
// import BlogPostsExample from "./BlogPostsExample";
import { DraftNav, TableOfContents } from "../../components";

const Home = () => {
  // Table of contents items
  const tocItems = [
    { id: "hero", title: "Just Code. Better Software" },
    // { id: "development-steps", title: "Get Started in No Time" },
    { id: "one-program", title: "One Program, from First Line to Production" },
    { id: "write-generate", title: "Start with Code, or a Prompt" },
    { id: "run-it", title: "Run It the Moment It Exists" },
    { id: "inspect", title: "See Exactly What Happened" },
    { id: "review", title: "See the Full Impact of Every Change" },
    { id: "deploy", title: "Make It Live, Anywhere" },
    { id: "version-it", title: "Source Control That Understands Your Program" },
    { id: "sync", title: "Keep Every Instance in Sync" },
    // {
    //   id: "language-features",
    //   title: "Functional, Composable, and Fun to Use",
    // },
    { id: "try-darklang", title: "See Where Darklang Fits" },
    { id: "open-source", title: "Come Build It with Us" },
    // { id: "async-runtime", title: "Async Runtime" },
    // { id: "static-typing", title: "Gradual Static Typing" },
    // { id: "package-manager", title: "Next-Gen Package Manager" },
    // { id: "trace-driven", title: "Development with Real Data" },
    // { id: "editing", title: "Powerful, Familiar, and Extensible Editing" },
    // { id: "backend-features", title: "Build a Complete Backend with Darklang" },
    // {
    //   id: "cli",
    //   title: "A CLI Runtime to Replace Your Bash and Python Scripts",
    // },
    // { id: "deployless-cloud", title: "Deployless, Infraless Cloud Apps" },
    // { id: "designed-for-ai", title: "Designed for Generative AI" },
    { id: "newsletter", title: "Send Me Project Updates" },
    // { id: "blog-posts", title: "Recent Blog Posts" },
  ];

  return (
    <>
      <DraftNav />
      <TableOfContents items={tocItems} />
      <div id="hero">
        <Hero />
      </div>
      {/* <div id="development-steps">
        <DevelopmentSteps />
      </div> */}
      <div id="one-program">
        <OneProgram />
      </div>
      <div id="write-generate">
        <WriteGenerate />
      </div>
      <div id="run-it">
        <RunIt />
      </div>
      <div id="inspect">
        <Inspect />
      </div>
      <div id="review">
        <Review />
      </div>
      <div id="deploy">
        <Deploy />
      </div>
      <div id="version-it">
        <VersionIt />
      </div>
      <div id="sync">
        <Sync />
      </div>
      {/* <div id="language-features">
        <LanguageFeatures />
      </div> */}
      <div id="try-darklang">
        <TryDarklang />
      </div>
      <div id="open-source">
        <OpenSource />
      </div>
      {/* <div id="async-runtime">
        <AsyncRuntime />
      </div>
      <div id="static-typing">
        <GradualStaticTyping />
      </div>
      <div id="package-manager">
        <PackageManager />
      </div>
      <div id="trace-driven">
        <TraceDrivenDevelopment />
      </div>
      <div id="editing">
        <Editing />
      </div>
      <div id="backend-features">
        <BackendFeatures />
      </div>
      <div id="cli">
        <CLI />
      </div>
      <div id="deployless-cloud">
        <DeploylessCloud />
      </div>
      <div id="designed-for-ai">
        <DesignedForGenAI />
      </div> */}
      <div id="newsletter">
        <Newsletter />
      </div>
      {/* <div id="blog-posts">
        <BlogPostsExample />
      </div> */}
    </>
  );
};

export default Home;
