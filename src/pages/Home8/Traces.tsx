import React from "react";

import Section from "./Section";
import { Term } from "../BuiltForAgents/parts";
import { cmd, out, hi, gap } from "../BuiltForAgents/term";

/** Not what it changed: what happened when the changed thing ran. */
const EXAMPLE = [
  cmd("dark eval 'Shop.checkout(outOfStockCart)'"),
  out('  Error  Stock.Unavailable "sku-4471"'),
  gap,
  cmd("dark traces list --fn Shop.checkout"),
  out("  4f2a1c   Error    7ms    2m ago"),
  out("  3b9e07   Ok       12ms   6m ago"),
  gap,
  cmd("dark traces view 4f2a1c"),
  out("  Shop.checkout(cart)"),
  out("    Cart.total(items)           → 42.00   1ms"),
  hi("    Stock.reserve(items)        → Error   6ms"),
  out('      Stock.available("sku-4471") → 0'),
  out("    Payments.charge               not reached"),
];

const Traces: React.FC = () => (
  <Section
    id="traces"
    tinted
    reverse
    category="Execution and traces"
    problems={[
      "It convinces itself that something works when it doesn't",
      "It optimises for whatever you measure instead of the actual goal: if success is make these tests pass, green is the goal, not fixed",
      "Long-running agents are bad at telling you what is happening: working, stuck, looping, or dead, and you cannot tell which",
      "Debugging happens from scattered log lines written for people rather than from the run itself",
      "Letting an agent run completely on its own is risky precisely because you cannot see what it actually did",
    ]}
    title="Run It the Moment It Exists, and Read What Happened"
    paras={[
      "Evaluating the definition that just changed against a real input needs no project bootstrap and no build, so the answer comes back immediately. That is also what makes a claim checkable: running it is cheaper than arguing about it.",
      "Traces record the execution itself, with nested calls, the values that moved through them, timing, and errors. The agent works from what happened rather than from what it expected, and the person reviewing reads the same trace.",
    ]}
    link={{ href: "/traceDriven", label: "Trace-driven development" }}
    example={<Term lines={EXAMPLE} label="dark" />}
  />
);

export default Traces;
