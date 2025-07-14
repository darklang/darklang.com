import Hero from "./Hero";
import DevelopmentSteps from "./DevelopmentSteps";
import BackendFeatures from "./BackendFeatures";
import LanguageFeatures from "./LanguageFeatures";
import AsyncRuntime from "./AsyncRuntime";
import GradualStaticTyping from "./GradualStaticTyping";
import PackageManager from "./PackageManager";
import TraceDrivenDevelopment from "./TraceDrivenDevelopment";
import Editing from "./Editing";
import CLI from "./CLI";
import DeploylessCloud from "./DeploylessCloud";
import DesignedForGenAI from "./DesignedForGenAI";
import Newsletter from "./Newsletter";
import BlogPostsExample from "./BlogPostsExample";
import { TableOfContents } from "../../components";

const Home = () => {
  // Table of contents items
  const tocItems = [
    { id: "hero", title: "Build above the cloud" },
    { id: "development-steps", title: "Get started in no time" },
    {
      id: "language-features",
      title: "Functional, Composable, and Fun to use",
    },
    { id: "async-runtime", title: "Async Runtime" },
    { id: "static-typing", title: "Gradual Static Typing" },
    { id: "package-manager", title: "Next-gen Package Manager" },
    { id: "trace-driven", title: "Development with Real Data" },
    { id: "editing", title: "Powerful, Familiar, and Extensible editing" },
    { id: "backend-features", title: "Build a complete backend with Darklang" },
    {
      id: "cli",
      title: "A CLI Runtime to Replace your Bash and Python Scripts",
    },
    { id: "deployless-cloud", title: "Deployless, Infraless Cloud Apps" },
    { id: "designed-for-ai", title: "Designed for Generative AI" },
    { id: "newsletter", title: "Send me project updates" },
    { id: "blog-posts", title: "Recent Blog Posts" },
  ];

  return (
    <>
      <TableOfContents items={tocItems} />
      <div id="hero">
        <Hero />
      </div>
      <div id="development-steps">
        <DevelopmentSteps />
      </div>
      <div id="language-features">
        <LanguageFeatures />
      </div>
      <div id="async-runtime">
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
      </div>
      <div id="newsletter">
        <Newsletter />
      </div>
      <div id="blog-posts">
        <BlogPostsExample />
      </div>
    </>
  );
};

export default Home;
