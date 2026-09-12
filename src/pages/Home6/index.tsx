// Experimental homepage at /home6: Darklang as the one tool you need, told as
// a project growing. Each section is something a project needs, in the order
// it needs it, and shows where it lives in Darklang instead of in a separate
// tool. The real homepage at "/" is untouched.
import Hero from "./Hero";
import Walkthrough from "./Walkthrough";
import Steps from "./Steps";
import Start from "./Start";
import Newsletter from "../Home/Newsletter";
import { STORIES } from "./data";
import { DraftNav, TableOfContents } from "../../components";

const Home6 = () => {
  const tocItems = [
    { id: "hero", title: "One Tool. The Whole Stack" },
    ...STORIES.map(story => ({ id: story.id, title: story.eyebrow })),
    { id: "start-building", title: "One Tool. The Whole Way" },
  ];

  return (
    <>
      <DraftNav />
      <TableOfContents items={tocItems} />
      <Hero />
      <Walkthrough />
      <Steps />
      <Start />
      <Newsletter />
    </>
  );
};

export default Home6;
