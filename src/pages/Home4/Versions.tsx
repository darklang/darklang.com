import React from "react";

import DetailLinks from "../Home/DetailLinks";
import { Section, Shot, Term } from "./parts";
import { cmd, cont, gap, note, out } from "./lines";

const LINES = [
  cmd("dark fn Shop.total - <<'EOF'"),
  cont("let total (orders: List<Order>) : Int64 ="),
  cont("  orders"),
  cont("  |> Stdlib.List.map (fun o -> o.qty * o.price)"),
  cont("  |> Stdlib.List.sum"),
  cont("EOF"),
  gap,
  cmd("dark status"),
  out("CHANGED (3)"),
  out("  ~ fn  Shop.total      updated"),
  out("  > fn  Shop.checkout   updated, followed"),
  out("  > fn  Shop.invoice    updated, followed"),
  gap,
  cmd("dark propagate pin Shop.invoice"),
  note("# keep invoice on the old version"),
  cmd("dark undo Shop.total"),
  note("# or step the whole thing back"),
];

const Versions: React.FC = () => (
  <Section
    id="versions"
    eyebrow="Versions"
    color="text-purple-lbg"
    heading={
      <>
        Every version is <span className="text-purple-lbg">kept</span>
      </>
    }
    panel={
      <>
        <Term lines={LINES} />
        <Shot>
          The status output above, with the &quot;followed&quot; rows dimmed to
          show the difference between what you did and what followed.
        </Shot>
      </>
    }
  >
    <p>
      You gave an agent the run of the package tree. No approvals, no branch,
      straight onto main, because it was faster that way. It deleted half your
      project.
    </p>
    <p>
      Your rules were wide open and it still doesn&apos;t matter. Definitions
      are never overwritten or removed, only added, so a delete is a name that
      stopped pointing at something. Undo moves it back.
    </p>
    <p>
      The same thing makes renaming safe. Change a function and the twelve
      things that called it follow you, and if one of them shouldn&apos;t have,
      you pin it.
    </p>
    <p>
      Every version of every function is kept, forever, identified by what it
      says. Changing one makes a new one. The old one still exists and anything
      pointing at it still works. Undo is not a stash. It&apos;s a pointer
      moving back.
    </p>

    <DetailLinks
      color="text-purple-lbg"
      links={[{ label: "Source control", to: "/source-control" }]}
    />
  </Section>
);

export default Versions;
