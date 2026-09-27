import React from "react";

import Section from "./Section";
import { Term } from "../BuiltForAgents/parts";
import { cmd, out, hi, gap } from "../BuiltForAgents/term";

/** The two questions that stop a codebase silently doubling. */
const EXAMPLE = [
  cmd('dark search "normalize email" --fn'),
  out("  User.Email.normalize      String -> String"),
  hi("  2 definitions already do this"),
  gap,
  cmd("dark deps Checkout.legacyTotal"),
  out("  depends on   Cart.Item, Decimal.round"),
  hi("  used by      nothing"),
];

const Quality: React.FC = () => (
  <Section
    id="quality"
    category="Code quality"
    problems={[
      "They turn simple code into way too much code: something that should be 300 lines becomes 1,000, full of helpers, abstractions, and defensive checks",
      "They invent different ways of representing the same thing",
      "They duplicate what already exists instead of finding the function and extending it, leaving an almost-identical version beside it",
      "Dead code and temporary fixes",
      "Comments that carry history and narrate your prompt into the code",
      "Technical debt builds up ridiculously quickly: duplication, weak abstractions, inconsistent error handling, quick fixes, all faster because generating code is cheap",
    ]}
    title="Duplication and Dead Code Are Questions You Can Ask"
    paras={[
      "Every definition is content-addressed, so two identical implementations are one item rather than two copies waiting to drift apart. Search covers the whole package tree, which makes finding the function that already exists cheaper than writing another one.",
      "And because the program knows its own dependency graph, asking which definitions nothing depends on any more is a command rather than an archaeology project.",
    ]}
    link={{ href: "/packages", label: "Browse the packages" }}
    example={<Term lines={EXAMPLE} label="dark" />}
  />
);

export default Quality;
