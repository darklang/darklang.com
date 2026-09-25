// Experimental homepage at /home8: problem first, grouped by category.
//
// Each section takes one area and lists what goes wrong there in the words
// developers actually use for it, says how we solve it, shows a worked example
// of the answer beside it, and links out to the page with the detail. Between
// them the ten sections account for every problem in the research; the long
// version of the argument lives at /built-for-agents.
//
// It states planned features as fact on purpose and must not ship until they
// exist. The real homepage at "/" is untouched.
import Hero from "./Hero";
import Parallel from "./Parallel";
import Autonomy from "./Autonomy";
import Review from "./Review";
import Traces from "./Traces";
import Context from "./Context";
import Destructive from "./Destructive";
import Security from "./Security";
import SupplyChain from "./SupplyChain";
import Quality from "./Quality";
import Usage from "./Usage";
import Start from "./Start";
import Newsletter from "../Home/Newsletter";
import { DraftNav, TableOfContents } from "../../components";

const Home8 = () => {
  const tocItems = [
    { id: "parallel", title: "Parallel Agent Development" },
    { id: "autonomy", title: "Autonomy and Scope" },
    { id: "review", title: "Review" },
    { id: "traces", title: "Execution and Traces" },
    { id: "context", title: "Context and Discovery" },
    { id: "destructive", title: "Destructive Actions" },
    { id: "security", title: "Permissions and Trust" },
    { id: "supply-chain", title: "Supply Chain" },
    { id: "quality", title: "Code Quality" },
    { id: "usage", title: "Usage and Tooling" },
  ];

  return (
    <>
      <DraftNav />
      <TableOfContents items={tocItems} />
      <Hero />
      <Parallel />
      <Autonomy />
      <Review />
      <Traces />
      <Context />
      <Destructive />
      <Security />
      <SupplyChain />
      <Quality />
      <Usage />
      <Start />
      <Newsletter />
    </>
  );
};

export default Home8;
