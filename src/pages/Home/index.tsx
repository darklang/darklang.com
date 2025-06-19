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

const Home = () => {
  return (
    <>
      <Hero />
      <DevelopmentSteps />
      <LanguageFeatures />
      <AsyncRuntime />
      <GradualStaticTyping />
      <PackageManager />
      <TraceDrivenDevelopment />
      <Editing />
      <BackendFeatures />
      <CLI />
      <DeploylessCloud />
      <DesignedForGenAI />
      <Newsletter />
      <BlogPostsExample />
    </>
  );
};

export default Home;
