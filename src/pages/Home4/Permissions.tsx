import React from "react";

import CodeDisplay from "../../common/ui/CodeDisplay";
import DetailLinks from "../Home/DetailLinks";
import { Section, Shot, Term } from "./parts";
import { cmd, err } from "./lines";

const DENIAL = [
  cmd("dark eval Report.send"),
  err("Permission denied: POST https://hooks.example.com/notify"),
  err("is not allowed."),
  err("To allow: `permissions allow http POST"),
  err("           https://hooks.example.com/notify`"),
];

const CEILINGS = `let fetchPrice (sku: String) :{Http, Clock} Int64 = ...

let add (a: Int64) (b: Int64) :{} Int64 = a + b`;

const Permissions: React.FC = () => (
  <Section
    id="permissions"
    eyebrow="Permissions"
    color="text-rust"
    heading={
      <>
        Denied by <span className="text-rust">default</span>
      </>
    }
    flip
    tinted
    panel={
      <>
        <Term lines={DENIAL} />
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:p-5">
          <CodeDisplay code={CEILINGS} showLineNumbers={false} size="sm" />
          <p className="mt-3 text-sm text-gray-dark">
            A ceiling on the return colon. The second function may touch
            nothing, ever.
          </p>
        </div>
        <Shot>
          The workbench detail pane for one function, showing what it requires
          and the effective allowed set below it.
        </Shot>
      </>
    }
  >
    <p>
      An agent just wrote forty functions for you. You will read maybe three of
      them. One of the rest wants to POST somewhere you have never heard of.
    </p>
    <p>
      It doesn&apos;t get there. The call is refused before it leaves your
      machine, and the message names the exact rule that would have allowed it.
      Nothing moves until you say so.
    </p>
    <p>
      A rule is one exact request: not &quot;the network&quot; but this URL, not
      &quot;files&quot; but this path. Deny is the default, so you never grant
      wider than you meant to. And you can ask any function what it needs before
      you run it, so &quot;which one?&quot; is a command, not an afternoon.
    </p>
    <p>
      A function can also cap itself. The ceiling is part of its code, so it
      travels with it: nothing the function calls can reach past it, even when
      your own rules are wider.
    </p>
    <p className="text-dark">
      Read the ceiling before you run it. Read the trace after.
    </p>

    <DetailLinks
      color="text-rust"
      links={[{ label: "Security and permissions", to: "/for/security-nerds" }]}
    />
  </Section>
);

export default Permissions;
