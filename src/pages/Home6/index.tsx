// Experimental homepage at /home6: Darklang as the one tool you need. Each
// section is one thing a developer needs, in the order they need it, and
// shows where it lives in Darklang instead of in a separate tool. Copy here
// must match the dark repo; unlike /home5 it doesn't state plans as fact.
// The real homepage at "/" is untouched.
import Hero from "./Hero";
import Steps from "./Steps";
import { STEPS } from "./data";
import OneSystem from "./OneSystem";
import Start from "./Start";
import Newsletter from "../Home/Newsletter";
import { DraftNav, TableOfContents } from "../../components";

const Home6 = () => {
  const tocItems = [
    { id: "hero", title: "One Tool. The Whole Stack" },
    ...STEPS.map(step => ({ id: step.id, title: `${step.n} ${step.name}` })),
    { id: "one-system", title: "Each Part Knows the Others" },
    { id: "start", title: "Everything Above Is One Install" },
  ];

  return (
    <>
      <DraftNav />
      <TableOfContents items={tocItems} />
      <Hero />
      <Steps />
      <OneSystem />
      <Start />
      <Newsletter />
    </>
  );
};

export default Home6;
