import React from "react";

import Section from "./Section";
import { Term } from "../BuiltForAgents/parts";
import { cmd, out, hi, gap } from "../BuiltForAgents/term";

/** What changed, named, and everything it reaches. */
const EXAMPLE = [
  cmd("dark commits"),
  hi("  a64ce1   Shop.checkout, Shop.refundWindow"),
  out("  7f3a9c   Stock.reserve"),
  out("  5be201   Cart.total, Cart.Item"),
  gap,
  cmd("dark deps Shop.checkout"),
  out("  depends on   Cart.total, Stock.reserve, Payments.charge"),
  hi("  used by      7 definitions"),
  out("               Api.postOrder, Admin.replayOrder, ..."),
  gap,
  cmd("dark permissions requirements Shop.checkout"),
  hi("  requires     Http, DatastoreWrite"),
  out("  new since a64ce1: DatastoreWrite"),
];

const Review: React.FC = () => (
  <Section
    id="review"
    category="Review"
    problems={[
      "Reading every diff line by line defeats the point of running an agent in the first place",
      "But just letting it write and merge feels like asking for trouble the first time it helpfully refactors something you did not ask for",
      "You lose track of what is happening in which session, and have no idea what the other one changed unless you go check manually",
      "Losing context every time you git stash and switch branches to test something an agent suggested",
      "It is really easy now to submit code you do not actually understand, assuming a teammate or another agent will catch anything wrong",
      "Comprehension debt on top of technical debt: the code works, and nobody really understands why, or who owns that knowledge now",
      "AI review does not replace actually understanding the code; someone still has to verify what changed",
      "An endless could this be improved problem: ask one agent to review another and there is always one more refactor",
      "If implementation becomes really fast, planning, architecture, QA, security, CI, release and verification become the slow parts",
      "Feeling faster is not shipping faster, once the time goes into reviewing, debugging, and cleaning up",
    ]}
    title="Review Meaning, Not Line Numbers"
    paras={[
      "Commits list the definitions that changed, by name, rather than hunks of a file. History reads like a changelog because that is what it is, so reviewing an agent's work starts from what it actually touched instead of from a wall of text.",
      "Because the dependency graph is part of the program, a change also reports everything that depends on it and any permissions it now requires. You open the diff where it matters rather than everywhere, and the thing you are reviewing is the change itself rather than its shadow in a file.",
    ]}
    link={{
      href: "/source-control",
      label: "Review, definition by definition",
    }}
    example={<Term lines={EXAMPLE} label="dark" />}
  />
);

export default Review;
