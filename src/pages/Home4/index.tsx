// Experimental homepage at /home4, built from the long-form draft.
// Order is deliberate: the two things nobody else has (what code may touch,
// and what it did) come before liveness and the language, which are the
// reasons those two are possible. The real homepage at "/" is untouched.
import Hero from "./Hero";
import TryIt from "./TryIt";
import Traces from "./Traces";
import Permissions from "./Permissions";
import Versions from "./Versions";
import Foundation from "./Foundation";
import Language from "./Language";
import Tree from "./Tree";
import Sync from "./Sync";
import Agents from "./Agents";
import Status from "./Status";
import Start from "./Start";
import Newsletter from "../Home/Newsletter";
import { DraftNav, TableOfContents } from "../../components";

const Home4 = () => {
  const tocItems = [
    { id: "try", title: "Run It Here" },
    { id: "traces", title: "Every Run Is Recorded" },
    { id: "permissions", title: "Denied by Default" },
    { id: "versions", title: "Every Version Is Kept" },
    { id: "foundation", title: "Your Code Lives in a Database" },
    { id: "language", title: "Small, Typed, Functional" },
    { id: "tree", title: "One Tree, No Registry" },
    { id: "sync", title: "Sync, Not Git" },
    { id: "agents", title: "Your Agents, Your Rules" },
    { id: "status", title: "Where It Stands" },
    { id: "start", title: "Install and Run" },
  ];

  return (
    <>
      <DraftNav />
      <TableOfContents items={tocItems} />
      <Hero />
      <TryIt />
      <Traces />
      <Permissions />
      <Versions />
      <Foundation />
      <Language />
      <Tree />
      <Sync />
      <Agents />
      <Status />
      <Start />
      <Newsletter />
    </>
  );
};

export default Home4;
