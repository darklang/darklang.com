import React from "react";

import DetailLinks from "../Home/DetailLinks";
import { Section, Term } from "./parts";
import { cmd, err, gap, out } from "./lines";

const SEARCH = [
  cmd('dark search "parse json"'),
  out("fn   Stdlib.Json.parse<'a>"),
  out("       String -> Result<'a, ParseError>"),
  out("fn   Stdlib.Json.parseWith          ..."),
  gap,
  cmd("dark deps Stdlib.Json.parse"),
  out("used by  Shop.importOrders"),
  out("         Blog.loadPosts"),
];

const DEPRECATE = [
  cmd("dark deprecate fn Old.hash --kind harmful"),
  cmd('dark eval Old.hash "x"'),
  err("Halted: Old.hash is marked harmful."),
  err("Use --allow-harmful to run it anyway."),
];

const Tree: React.FC = () => (
  <Section
    id="tree"
    eyebrow="Packages"
    color="text-acc-teal"
    heading={
      <>
        One tree, <span className="text-acc-teal">no registry</span>
      </>
    }
    flip
    tinted
    panel={
      <>
        <Term lines={SEARCH} />
        <Term lines={DEPRECATE} />
      </>
    }
  >
    <p>
      You add one dependency. It brings ninety more. Months later one of them
      publishes a patch on a Tuesday, and the build that worked on Monday
      doesn&apos;t.
    </p>
    <p>
      There&apos;s no npm, no node_modules, no version ranges. Everything lives
      at a name in one tree: your code, the standard library, anyone else&apos;s
      packages.
    </p>
    <p>
      A reference points at content, not at a name, so a dependency can never
      change under you and a package can never break you by publishing. When a
      function should stop being used, its author says so and the runtime
      enforces it.
    </p>
    <p>
      One tree also means an agent can look before it writes. It finds the JSON
      parser you already have instead of adding a fourth, and &quot;what uses
      it?&quot; gets an exact answer, not a grep full of functions that happen
      to share its name.
    </p>

    <DetailLinks
      color="text-acc-teal"
      links={[
        { label: "Package manager", to: "/package-manager" },
        { label: "Browse packages", to: "/packages" },
      ]}
    />
  </Section>
);

export default Tree;
