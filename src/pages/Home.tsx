/**
 * Home Page
 * The landing page of the application.
 * Includes hero section and other content.
 */

import Hero from "../components/sections/Hero";
import DevelopmentSteps from "../components/sections/DevelopmentSteps";
import BackendFeatures from "../components/sections/BackendFeatures";
import LanguageFeatures from "../components/sections/LanguageFeatures";
import AsyncRuntime from "../components/sections/AsyncRuntime";
import GradualStaticTyping from "../components/sections/GradualStaticTyping";
import PackageManager from "../components/sections/PackageManager";
import TraceDrivenDevelopment from "../components/sections/TraceDrivenDevelopment";
import Editing from "../components/sections/Editing";
import CLI from "../components/sections/CLI";
import DeploylessCloud from "../components/sections/DeploylessCloud";
import Newsletter from "../components/sections/Newsletter";
import BlogPostsExample from "../components/sections/BlogPostsExample";

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
      <Newsletter />
      <BlogPostsExample />
    </>
  );
};

export default Home;
