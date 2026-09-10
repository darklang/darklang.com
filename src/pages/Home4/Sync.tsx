import React from "react";

import DetailLinks from "../Home/DetailLinks";
import { Section, Shot, Term } from "./parts";
import { cmd, gap, note, out } from "./lines";

const FLOW = [
  cmd("dark conflicts"),
  out("Shop.total   kept: yours   other: 7f21a9"),
  out("             (review, or override)"),
  gap,
  cmd("dark sync setup"),
  note("# url and a secret, once"),
  cmd('dark commit "price in cents" -y'),
  cmd("dark sync"),
  note("# both ways, at fixed versions"),
];

const Sync: React.FC = () => (
  <Section
    id="sync"
    eyebrow="Sync"
    color="text-acc-cyan"
    heading={
      <>
        Sync, <span className="text-acc-cyan">not git</span>
      </>
    }
    panel={
      <>
        <Term lines={FLOW} />
        <Shot>
          Two laptops and the server between them, arrows both ways. It can
          withhold. It can&apos;t change what you wrote.
        </Shot>
      </>
    }
  >
    <p>
      A git conflict is a file problem. Two people append a function to the same
      file, the changes have nothing to do with each other, and one of them
      still stops to merge.
    </p>
    <p>
      Darklang has no files, so there is nothing to collide. And when two people
      really do change the same function, neither of them stops: both machines
      land on the same version, the other one is kept, and you look at it when
      you want to.
    </p>
    <p>
      Every machine holds the full history of everything it has seen. The shared
      server is only how those copies reach each other. It stores and forwards,
      and nothing else: it can&apos;t fold, run or rewrite what you wrote.
    </p>
    <p>
      So a broken server can only go quiet, and the next sync fills a new one.
      Lose a laptop instead and it works the same way round, back to your last
      sync. What doesn&apos;t come back is what never left it: that
      machine&apos;s rules, data and traces, which belong to a machine and not
      to the code.
    </p>

    <DetailLinks
      color="text-acc-cyan"
      links={[{ label: "Sharing and sync", to: "/sharing" }]}
    />
  </Section>
);

export default Sync;
