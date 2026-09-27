// Experimental homepage at /home5: why Darklang is better for building with AI,
// built on four pillars (faster, safer, more powerful, yours). It states
// planned features as fact on purpose and must not ship until they exist.
// The real homepage at "/" is untouched.
import Hero from "./Hero";
import Faster from "./Faster";
import Watch from "./Watch";
import Safer from "./Safer";
import Powerful from "./Powerful";
import Parallel from "./Parallel";
import Yours from "./Yours";
import OnePlace from "./OnePlace";
import Audiences from "./Audiences";
import Start from "./Start";
import Newsletter from "../Home/Newsletter";
import { DraftNav, TableOfContents } from "../../components";

const Home5 = () => {
  const tocItems = [
    { id: "hero", title: "Build With AI. Keep Control" },
    { id: "faster", title: "Imperfect Code Still Runs" },
    { id: "watch", title: "Review It While It's Written" },
    { id: "safer", title: "Nothing Runs With More Than You Allowed" },
    { id: "powerful", title: "Your Agents Ask, Not Grep" },
    { id: "parallel", title: "Five Agents, No Worktrees" },
    { id: "yours", title: "Open Source, Always" },
    { id: "one-place", title: "No Stack to Assemble" },
    { id: "audiences", title: "Speed for One, Safety for All" },
    { id: "start", title: "Faster, Safer, and Yours" },
  ];

  return (
    <>
      <DraftNav />
      <TableOfContents items={tocItems} />
      <Hero />
      <Faster />
      <Watch />
      <Safer />
      <Powerful />
      <Parallel />
      <Yours />
      <OnePlace />
      <Audiences />
      <Start />
      <Newsletter />
    </>
  );
};

export default Home5;
