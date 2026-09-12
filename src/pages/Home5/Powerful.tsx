import React from "react";

import { Section, Term } from "../Home4/parts";
import { cmd, gap, note, out } from "../Home4/lines";

const LINES = [
  cmd("grep -rn slugify ~/src"),
  note("every slugify in every repo, yours to sort through"),
  gap,
  cmd("dark deps Blog.slugify"),
  note("used by"),
  out("  Blog.Post.url"),
  out("  Shop.Product.path"),
  out("  Docs.anchor"),
  gap,
  cmd("dark rename Blog.slugify Blog.toSlug"),
  note("3 callers unaffected: they point at the code, not the name"),
  gap,
  cmd("dark traces hotspots"),
  out("Digest.summarize   2.1s avg   41 calls"),
  out("GitHub.fetchIssues 142ms avg  41 calls"),
];

const Powerful: React.FC = () => (
  <Section
    id="powerful"
    eyebrow="More powerful"
    color="text-acc-amber"
    heading={
      <>
        Your agents <span className="text-acc-amber">ask, not grep</span>
      </>
    }
    panel={<Term title="dark" lines={LINES} />}
  >
    <p className="text-dark">
      The store knows what depends on what, so it can answer questions about
      your code without running it.
    </p>
    <p>
      There are no files to rebuild a codebase from, so &quot;what calls
      this?&quot; gets an exact answer, not a grep full of functions that happen
      to share the name. Dependencies are always there to read, tests included.
    </p>
    <p>
      That makes refactoring safe: rename a function and nothing breaks, because
      callers point at the code, not the name. It also means an agent reads less
      to understand more, which costs fewer tokens and caches better.
    </p>
    <p>
      Prompts are package items too, versioned alongside the code that uses
      them. Profiling is built in. And the dark executable ships with its own
      agent instructions and commands, so any agent can start work without
      setup.
    </p>
  </Section>
);

export default Powerful;
