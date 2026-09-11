import React from "react";

import CodeDisplay from "../../common/ui/CodeDisplay";
import { Term } from "../Home4/parts";
import { cmd, cont, err, gap, note, out } from "../Home4/lines";

/*
 * The ten things a developer needs, in the order they need them, and where
 * each one lives in Darklang. Every command and output line is either the
 * real CLI wording from the dark repo or a transcript the site already
 * captured (Backends, CLI and /home4 pages).
 */

export type Step = {
  id: string;
  n: string;
  /** Short label for the hero index and the eyebrow. */
  name: string;
  color: string;
  heading: React.ReactNode;
  /** What you'd normally install or wire up for this step. */
  usually: string[];
  body: React.ReactNode[];
  panel: React.ReactNode;
};

export const STEPS: Step[] = [
  {
    id: "write",
    n: "01",
    name: "Write",
    color: "text-purple-lbg",
    heading: (
      <>
        A language, <span className="text-purple-lbg">and its editor</span>
      </>
    ),
    usually: ["a language", "a formatter", "a linter", "an editor plugin"],
    body: [
      "A small, typed, functional language: records, enums, pattern matching, pipes, and Option and Result instead of null and exceptions.",
      "Your code lives in a database, not in files, so the editor, the type checker and the package tree all read the same thing. Write in the terminal workbench or in VS Code. A draft runs even with type errors; committing waits until they're fixed.",
    ],
    panel: (
      <Term
        lines={[
          cmd("dark fn Hello.greet \\"),
          cmd(`  'let greet (name: String) : String = $"Hi, {name}"'`),
          gap,
          cmd("dark workbench"),
          note("# the package tree, in your terminal"),
        ]}
      />
    ),
  },
  {
    id: "run",
    n: "02",
    name: "Run",
    color: "text-acc-teal",
    heading: (
      <>
        It runs the moment <span className="text-acc-teal">you write it</span>
      </>
    ),
    usually: ["a build step", "a bundler", "a container"],
    body: [
      "There's nothing to compile or package. Evaluate an expression, run a script file, or open the workbench, and the code you just wrote is the code that runs.",
      "Scripts use the same types and functions as the rest of your program, so an importer or a one-off fix isn't a second codebase.",
    ],
    panel: (
      <Term
        lines={[
          cmd(`dark eval 'Hello.greet "world"'`),
          out('"Hi, world"'),
          gap,
          cmd("dark run scripts/import-tickets.dark"),
          out("Imported 247 tickets"),
          out("Updated 18 existing records"),
          out("0 failures"),
        ]}
      />
    ),
  },
  {
    id: "store",
    n: "03",
    name: "Store data",
    color: "text-blue-lbg",
    heading: (
      <>
        A typed database, <span className="text-blue-lbg">built in</span>
      </>
    ),
    usually: ["a database server", "an ORM", "a connection string"],
    body: [
      "Create a datastore with a type, and every row is checked against it. Read, write and query it from the same functions as the rest of your program, with no driver to install.",
      "A query is an ordinary function over your own type, so the type checker knows what comes back.",
    ],
    panel: (
      <>
        <Term
          lines={[
            cmd("dark db Tickets Support.Api.Ticket"),
            out("Created database: Tickets (type: Support.Api.Ticket)"),
            gap,
            cmd("dark db set Tickets t-1042 \\"),
            cont(
              `'{ subject = "Login loop on iOS"; assignee = "alice"; isOpen = true }'`,
            ),
            out("Set t-1042 in Tickets"),
          ]}
        />
        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:p-5">
          <CodeDisplay
            code="Stdlib.DB.query Tickets (fun ticket -> ticket.isOpen)"
            showLineNumbers={false}
            size="sm"
          />
        </div>
      </>
    ),
  },
  {
    id: "http",
    n: "04",
    name: "Serve and call APIs",
    color: "text-acc-amber",
    heading: (
      <>
        HTTP both ways, <span className="text-acc-amber">no framework</span>
      </>
    ),
    usually: ["a web framework", "a router", "an HTTP client library"],
    body: [
      "A handler is a plain function. dark serve turns your router into a running server, with routes and path parameters from the standard library.",
      "Calling other APIs is the standard library too, and every request returns a Result, so a network failure is a value you handle, not an exception that unwinds the handler.",
    ],
    panel: (
      <Term
        lines={[
          cmd("dark serve Support.Api.router"),
          out("Listening on http://localhost:8080"),
          gap,
          note("# from another terminal"),
          cmd("curl http://localhost:8080/tickets"),
          out('[{"subject":"Login loop on iOS","assignee":"alice", ...}]'),
        ]}
      />
    ),
  },
  {
    id: "reuse",
    n: "05",
    name: "Reuse code",
    color: "text-acc-pink",
    heading: (
      <>
        One package tree, <span className="text-acc-pink">no registry</span>
      </>
    ),
    usually: ["a package manager", "a registry", "lockfiles", "version ranges"],
    body: [
      "Your code, the standard library and everyone else's packages live at names in one tree. A reference points at content, not at a name, so a dependency can't change under you.",
      "Search it, and ask what uses anything: dependents are a lookup with an exact answer, not a grep.",
    ],
    panel: (
      <Term
        lines={[
          cmd('dark search "parse json"'),
          out("fn   Stdlib.Json.parse<'a>"),
          out("       String -> Result<'a, ParseError>"),
          gap,
          cmd("dark deps usedby Darklang.Stdlib.HttpClient.get"),
          out("Found 13 dependents of Darklang.Stdlib.HttpClient.get:"),
          out("  [fn] Darklang.GitHub.fetchString"),
          out("  ..."),
        ]}
      />
    ),
  },
  {
    id: "track",
    n: "06",
    name: "Track changes",
    color: "text-acc-cyan",
    heading: (
      <>
        Source control that{" "}
        <span className="text-acc-cyan">knows your code</span>
      </>
    ),
    usually: ["git", "a branching workflow", "a merge tool"],
    body: [
      "Every version of every function is kept. Status shows what you changed and what followed it, and undo moves a name back to an earlier version.",
      "Work on a branch, merge it back, and when two changes meet, nothing stops: both versions are kept, and you settle it by reading them as code.",
    ],
    panel: (
      <Term
        lines={[
          cmd("dark status"),
          out("CHANGED (3)"),
          out("  ~ fn  Shop.total      updated"),
          out("  > fn  Shop.checkout   updated, followed"),
          out("  > fn  Shop.invoice    updated, followed"),
          gap,
          cmd('dark commit "price in cents" -y'),
          cmd("dark undo Shop.total"),
          note("# or step it back"),
        ]}
      />
    ),
  },
  {
    id: "observe",
    n: "07",
    name: "See what happened",
    color: "text-rust",
    heading: (
      <>
        Every run <span className="text-rust">leaves a trace</span>
      </>
    ),
    usually: ["logging", "an APM service", "a profiler"],
    body: [
      "Each run records its input, every call, and what came back. Not a log line you remembered to write, the actual values from the actual run.",
      "Replay a trace against changed code to check a fix, or ask where the time went across recent runs.",
    ],
    panel: (
      <Term
        lines={[
          cmd("dark traces view a3f9c1"),
          out('Shop.checkout("cart_8812")        → Ok "charged"'),
          out('  Shop.charge(4200)               → Ok "ch_91x"'),
          out('  Shop.markPaid("cart_8812")      → Error "cart already paid"'),
          gap,
          cmd("dark traces replay a3f9c1"),
          cmd("dark traces hotspots"),
          note("# per-function timing across recent runs"),
        ]}
      />
    ),
  },
  {
    id: "control",
    n: "08",
    name: "Control access",
    color: "text-acc-green",
    heading: (
      <>
        Permissions <span className="text-acc-green">in the language</span>
      </>
    ),
    usually: ["containers", "sandbox flags", "auditing dependencies by hand"],
    body: [
      "Every builtin is labelled with its effects, so you can ask what a function requires before it runs.",
      "Files, the network, processes and the environment stay denied until you allow them, one exact rule at a time. A refusal names the rule that would have allowed it.",
    ],
    panel: (
      <Term
        lines={[
          cmd("dark permissions requirements Report.send"),
          out("permission requirements: http"),
          gap,
          cmd("dark eval Report.send"),
          err("Permission denied: POST https://hooks.example.com/notify"),
          err("is not allowed."),
          err("To allow: `permissions allow http POST"),
          err("           https://hooks.example.com/notify`"),
        ]}
      />
    ),
  },
  {
    id: "machines",
    n: "09",
    name: "Run it everywhere",
    color: "text-blue-lbg",
    heading: (
      <>
        Keep it running, <span className="text-blue-lbg">on every machine</span>
      </>
    ),
    usually: [
      "a deploy pipeline",
      "a process manager",
      "copying code between machines",
    ],
    body: [
      "Turn a program into a daemon and the operating system keeps it running: enabling it registers it with launchd or systemd, so it starts at login and restarts after a crash.",
      "Sync pushes and pulls your work through a relay, so a laptop, a home server and a VPS share the same code, while each machine keeps its own permissions, data and traces.",
    ],
    panel: (
      <Term
        lines={[
          cmd("dark apps enable digest"),
          note("# starts at login, restarts on failure"),
          gap,
          cmd("dark sync setup"),
          note("# a relay url and a secret, once"),
          cmd("dark sync"),
          note("# push, then pull"),
        ]}
      />
    ),
  },
  {
    id: "agents",
    n: "10",
    name: "Work with agents",
    color: "text-purple-lbg",
    heading: (
      <>
        An agent can <span className="text-purple-lbg">drive all of it</span>
      </>
    ),
    usually: ["context files", "per-tool agent setup", "a separate sandbox"],
    body: [
      "Every step above is a CLI command, and every command that answers a question can answer in JSON. dark docs for-ai gives an agent the whole model in one read.",
      "An agent works on its own branch, with the model you choose, including a local one. It can't touch what you didn't allow, and every run it makes is recorded.",
    ],
    panel: (
      <Term
        lines={[
          cmd("dark docs for-ai"),
          gap,
          cmd("dark --branch fix-refunds agent code \\"),
          cmd('  "refuse orders that were already refunded"'),
          cmd("dark diff fix-refunds"),
          cmd("dark merge fix-refunds -y"),
        ]}
      />
    ),
  },
];
