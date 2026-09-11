import React from "react";

import DetailLinks from "../Home/DetailLinks";
import { Section, Term } from "./parts";
import { cmd, gap, out } from "./lines";

const LINES = [
  cmd("dark traces tail --fn Shop.checkout"),
  out("a3f9c1   Shop.checkout   2026-09-08 01:57:12"),
  gap,
  cmd("dark traces view a3f9c1"),
  out('Shop.checkout("cart_8812")            → Ok "charged"'),
  out('  Shop.loadCart("cart_8812")          → { items = 2, paid = false }'),
  out('  Shop.charge(4200)                   → Ok "ch_91x"'),
  out('  Shop.markPaid("cart_8812")          → Error "cart already paid"'),
  out('  Shop.charge(4200)                   → Ok "ch_92b"'),
];

const Traces: React.FC = () => (
  <Section
    id="traces"
    eyebrow="Traces"
    color="text-acc-amber"
    heading={
      <>
        Every run is <span className="text-acc-amber">recorded</span>
      </>
    }
    panel={<Term lines={LINES} />}
  >
    <p>
      It&apos;s 2am. A customer says checkout charged them twice. You have a log
      line that says &quot;payment ok&quot; and no idea what the code was
      looking at when it decided that.
    </p>
    <p>In Darklang you don&apos;t guess. You open the run.</p>
    <p>
      Every run records every call, every argument and every return value. Not a
      log you remembered to write. The actual values, from the actual run. The
      bug is on line four, and you didn&apos;t reproduce anything.
    </p>
    <p>
      That matters more when you didn&apos;t write the code. An agent&apos;s
      code is often almost right, and almost right reads fine. The run shows you
      where it isn&apos;t.
    </p>

    <DetailLinks
      color="text-acc-amber"
      links={[{ label: "Trace-driven development", to: "/traceDriven" }]}
    />
  </Section>
);

export default Traces;
