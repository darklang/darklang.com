import React from "react";

import { Term } from "../Home4/parts";
import { cmd, err, gap, note, out } from "../Home4/lines";

import {
  Branch,
  Card,
  Change,
  Command,
  Fact,
  Line,
  Tile,
  Version,
} from "./parts";

/*
 * One section per thing a project needs, in the order a project needs it.
 *
 * Commands and output wording follow the real CLI (see cli/registry.dark in
 * the dark repo), but the names are invented: there is no Blog.slugify or
 * Weather.report to capture.
 *
 * Some of it is ahead of the build on purpose, since the site ships after the
 * features do. To re-check before launch: the effect line in `dark diff`
 * (cli/scm has no requirements handling yet), hosting in the ship section,
 * the per-session status column in `dark branches`, and `dark versions`
 * (nothing lists a function's versions today; `history` is an alias for
 * `commits`, so don't use that name). Re-capture the rest against a real
 * instance.
 */

export type Story = {
  id: string;
  /** Short label for the eyebrow and the table of contents. */
  eyebrow: string;
  color: string;
  heading: React.ReactNode;
  body: string[];
  /** The line the section lands on. */
  takeaway: string;
  panel: React.ReactNode;
};

export const STORIES: Story[] = [
  {
    id: "start",
    eyebrow: "Start",
    color: "text-purple-lbg",
    heading: (
      <>
        Start with the thing{" "}
        <span className="text-purple-lbg">you want to make</span>
      </>
    ),
    body: [
      "There's nothing to set up first. Write a function, give it a type, and run it. The place you try it is the place the rest of the program will live.",
      "It's already part of your program: named, typed, and callable from anything you write next. There's no project layout to decide on and no configuration to fill in before you start. Write it yourself, or let whichever agent you use write it.",
    ],
    takeaway:
      "Your first decision is what the software should do, not what to build it with.",
    panel: (
      <Term
        lines={[
          cmd("dark fn Blog.slugify \\"),
          cmd("  'let slugify (title: String) : String ="),
          cmd("     title"),
          cmd("     |> Stdlib.String.toLowercase"),
          cmd(`     |> Stdlib.Regex.replace "[^a-z0-9]+" "-"'`),
          gap,
          cmd(`dark eval 'Blog.slugify "Hello, World! Darklang 101"'`),
          out('"hello-world-darklang-101"'),
        ]}
      />
    ),
  },
  {
    id: "rest",
    eyebrow: "Data and endpoints",
    color: "text-acc-teal",
    heading: (
      <>
        Give it a database <span className="text-acc-teal">and a URL</span>
      </>
    ),
    body: [
      "A useful function often needs somewhere to store data and a way for people to reach it. Both are part of Darklang. The datastore is typed, so there's no schema to migrate and no SQL to write.",
      "Build a signup form's backend: receive an email address, validate it, save it in the database, and send a confirmation. One flow, written in one language, with the server and storage ready to use.",
    ],
    takeaway: "Add what your idea needs as it needs it.",
    panel: (
      <Term
        lines={[
          cmd("dark db Signups App.Signup"),
          out("Created database: Signups (type: App.Signup)"),
          gap,
          cmd("dark serve App.Api.router"),
          out("Listening on http://localhost:8080"),
          gap,
          note("# from another terminal"),
          cmd(`curl -X POST localhost:8080/signup -d '{"email":"ada@..."}'`),
          out('{"ok":true}'),
        ]}
      />
    ),
  },
  {
    id: "reuse",
    eyebrow: "Packages",
    color: "text-acc-pink",
    heading: (
      <>
        Build on <span className="text-acc-pink">what already exists</span>
      </>
    ),
    body: [
      "Need to read a CSV file? Find a parser, read its code, ask what it requires, and call it. Your importer can build on work someone has already done.",
      "Your functions, shared libraries, and the standard library live in the same searchable tree. Each reference points to a specific version, so you know exactly what you're running and can choose when to update.",
      "Pulling a stranger's package and picking up a teammate's work are the same act, both landing at a fixed hash. There's no second mechanism to learn for code that came from outside.",
    ],
    takeaway: "Everything you write can become something you build on, too.",
    panel: (
      <Term
        lines={[
          cmd(`dark search "parse csv"`),
          out("fn   Acme.Csv.parse"),
          out("       String -> List<List<String>>"),
          gap,
          cmd("dark view Acme.Csv.parse"),
          note("# read it before you call it"),
          gap,
          cmd("dark deps Acme.Csv.parse"),
          note("# and see what else already uses it"),
        ]}
      />
    ),
  },
  {
    id: "ship",
    eyebrow: "Ship it",
    color: "text-acc-amber",
    heading: (
      <>
        Put it in <span className="text-acc-amber">people&apos;s hands</span>
      </>
    ),
    body: [
      "You've written a bot that answers questions about your team's projects. Make its endpoint live and point your chat app at it. There's no build to configure and nothing to package.",
      "What you ran while writing it is what runs now: the same functions, the same data, the same versions. Traces and permissions work the same way in production as they did on your laptop, so going live doesn't mean learning a second set of tools. Run it on our cloud or your own machine; it's the same instance either way, and you can work offline and sync when you feel like it.",
    ],
    takeaway: "Going live is a step, not a project.",
    panel: (
      <div className="space-y-4">
        <Command
          parts={[
            ["dark"],
            ["apps enable", "text-purple-lbg"],
            ["projects-bot", "text-blue-lbg"],
          ]}
        />

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-7">
          <div className="mb-4 flex items-baseline justify-between">
            <span className="flex items-center gap-2 font-semibold text-dark">
              <span className="h-2 w-2 rounded-full bg-olive"></span>
              projects-bot is live
            </span>
            <span className="font-code text-xs text-gray-light">
              version 9c02af31
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Tile
              kind="endpoint"
              color="text-blue-lbg"
              name="POST /ask"
              stat="212 asks · 24h"
            />
            <Tile
              kind="daemon"
              color="text-purple-lbg"
              name="projects-bot"
              stat="up since Monday"
            />
            <Tile
              kind="datastore"
              color="text-acc-green"
              name="Answers"
              stat="1,904 entries"
            />
            <Tile
              kind="instances"
              color="text-acc-teal"
              name="laptop, home-server"
              stat="both at #1844"
            />
          </div>

          <p className="mt-5 border-t border-gray-100 pt-4 text-sm text-gray-dark">
            The same code on every instance, synced as ops. Nothing was built,
            packaged or deployed.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "traces",
    eyebrow: "Traces",
    color: "text-rust",
    heading: (
      <>
        See what <span className="text-rust">actually happened</span>
      </>
    ),
    body: [
      "Once people use your software, they give it inputs you didn't expect. Someone's reminder arrived an hour late, and it works fine on your machine.",
      "Open the run. Every call is there, with the values that went in and came back: the request carried a time zone, and the scheduling function never used it. Nothing had to be logged in advance, because the runtime recorded the run itself.",
    ],
    takeaway: "You don't have to reproduce it to see what happened.",
    panel: (
      <Term
        lines={[
          cmd("dark traces view 7c21b9"),
          out('Remind.send({ at = 09:00; tz = "Europe/Paris" })'),
          out("  Schedule.next(09:00)        → 09:00 UTC"),
          err("  # tz never reached this call"),
          out('  Notify.push("in 1 hour")    → sent 10:00 local'),
          gap,
          cmd("dark traces replay 7c21b9 --branch fix/tz"),
          note("  # the recorded request, against your fix"),
          out("  Remind.send    09:00 Europe/Paris   → sent 09:00 local"),
        ]}
      />
    ),
  },
  {
    id: "change",
    eyebrow: "Change",
    color: "text-acc-cyan",
    heading: (
      <>
        Change one thing.{" "}
        <span className="text-acc-cyan">Understand what follows</span>
      </>
    ),
    body: [
      "Change one thing and you get the exact list of what used it. No grep to sift through, no wondering whether you caught them all.",
      "Editing doesn't overwrite anything: your change is a new version, and callers move to it on their own. Pin the ones that shouldn't have, like an endpoint an old app still calls, and they drop back to the version they were on.",
      "A caller left on an older version isn't broken. It points at something that still exists, and putting anything back is just pointing at it again.",
    ],
    takeaway: "You can move forward with a way back.",
    panel: (
      <div className="space-y-4">
        <Card title="Format.date">
          <Version
            hash="a17c40b9"
            label="round to the cent"
            when="now"
            current
          />
          <div className="mt-2">
            <Version hash="4c91a7f2" label="percent off" when="2 weeks ago" />
          </div>
        </Card>

        <Card title="What used it">
          <Line name="Calendar.render" note="followed" tone="ok" />
          <Line name="Notify.digest" note="followed" tone="ok" />
          <Line name="Api.v1.order" note="pinned at 4c91a7f2" tone="warn" />
          <p className="mt-4 border-t border-gray-100 pt-3 text-sm text-gray-dark">
            Last year&apos;s app still calls the pinned one, so it keeps the
            format it was built against.
          </p>
        </Card>
      </div>
    ),
  },
  {
    id: "together",
    eyebrow: "Teamwork",
    color: "text-blue-lbg",
    heading: (
      <>
        Make room for <span className="text-blue-lbg">more hands</span>
      </>
    ),
    body: [
      "A teammate builds search on one branch. Two agents work on others at the same time, one adding pagination and one adding rate limits. Each runs and tests their work before any of it comes back to you.",
      "There's no git underneath any of this. A branch costs nothing: no directory, no clone, no stash, and merging happens by definition rather than by line. They all work against the same store, with the same types to read, functions to reuse, and traces to open when something fails.",
    ],
    takeaway:
      "The context you've built up stays available to everyone helping you.",
    panel: (
      <div className="space-y-4">
        <Command parts={[["dark"], ["branches", "text-purple-lbg"]]} />

        <Card title="Three at once, one store">
          <Branch name="search" who="ren" ops="12 ops" />
          <Branch name="pagination" who="agent-1" ops="31 ops" waiting />
          <Branch name="rate-limit" who="agent-2" ops="18 ops" />
          <p className="mt-4 border-t border-gray-100 pt-3 text-sm text-gray-dark">
            No directories, no clones, nobody blocked. Each one runs and tests
            its own work before it comes back to you.
          </p>
        </Card>
      </div>
    ),
  },
  {
    id: "review",
    eyebrow: "Review",
    color: "text-purple-dbg",
    heading: (
      <>
        Read the change, <span className="text-purple-dbg">not the diff</span>
      </>
    ),
    body: [
      "Before any of it lands you see what each branch changes: a function added, a type that gained a field, the callers that followed, anything that now reaches outside. Definitions and effects, not a wall of red and green.",
      "A text diff can't tell you that. It shows the lines someone touched, leaves the consequences to you, and fills with things that aren't changes at all: reformatting, reordered imports, a moved function, a renamed file. You spend the review confirming that nothing happened.",
      "None of it exists here: no files for it to happen in, and a rename doesn't touch callers, which point at the code rather than the name.",
      "A conflict doesn't stop the merge either: both versions are kept, and you settle it by reading code instead of conflict markers.",
    ],
    takeaway: "Reviewing is reading meaning, not text.",
    panel: (
      <div className="space-y-4">
        <Command
          parts={[
            ["dark"],
            ["diff", "text-purple-lbg"],
            ["pagination", "text-blue-lbg"],
          ]}
        />

        <Card title="What this branch changes">
          <Change mark="+" kind="fn" name="Shop.pageOf" note="new" />
          <Change mark="~" kind="type" name="Shop.Page" note="gained cursor" />
          <Change mark="~" kind="fn" name="Shop.list" note="followed" />
          <Change
            mark="+"
            kind="fn"
            name="Shop.fetchPage"
            note="new"
            effect="now requires http"
          />
          <p className="mt-4 border-t border-gray-100 pt-3 text-sm text-gray-dark">
            Four definitions and one new reach outside the program. Nothing
            moved, nothing reformatted.
          </p>
        </Card>

        <div className="rounded-xl border border-gray-200 bg-[#F9F9FB] px-4 py-3">
          <div className="flex flex-wrap items-baseline gap-x-3 text-sm">
            <span className="font-code text-dark">Shop.list</span>
            <span className="text-gray-dark">
              changed on both sides, both kept
            </span>
            <span className="ml-auto font-code text-xs text-gray-light">
              yours · 7f21a9
            </span>
          </div>
          <p className="mt-1.5 text-sm text-gray-dark">
            A conflict doesn&apos;t block the merge. You pick by reading them.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "permissions",
    eyebrow: "Permissions",
    color: "text-acc-green",
    heading: (
      <>
        Decide what <span className="text-acc-green">your code can touch</span>
      </>
    ),
    body: [
      "As more code enters your project, you stay in control of what it can do.",
      "Give a weather widget permission to fetch a forecast from one API. A request to send data to another address is denied. Allow a file reader to open one directory and keep the rest outside its reach.",
      "Darklang checks permissions when code runs, including the libraries it calls, whether you wrote it, a teammate shared it, or an agent generated it. And because every builtin declares what it does, you can ask any function what it needs before you run it.",
      "You choose the scope: the whole instance, one package you approved, or a single run. A function's author can narrow it further, never widen it, and code gets only what all of them allow.",
    ],
    takeaway:
      "Reusing code doesn't have to mean giving it access to everything.",
    panel: (
      <div className="space-y-4">
        <Command
          parts={[
            ["dark"],
            ["permissions", "text-purple-lbg"],
            ["requirements", "text-purple-lbg"],
            ["Weather.report", "text-blue-lbg"],
          ]}
        />

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-3 text-sm font-semibold">
            <span className="text-acc-green">What it may reach</span>
            <span className="font-code text-dark">Weather.report</span>
          </div>
          <Fact label="requires">
            <span className="font-code text-sm text-dark">Http</span>
            <span className="text-gray-dark"> worked out from the code</span>
          </Fact>
          <Fact label="allowed">
            <span className="block font-code text-xs break-all text-gray-dark">
              GET https://api.weather.example/forecast
            </span>
          </Fact>
          <Fact label="everything else">
            <span className="text-gray-dark">denied</span>
          </Fact>
        </div>

        <div className="rounded-xl border border-rust/30 bg-rust/5 px-4 py-3 font-code text-[13px]">
          <div className="mb-1 font-bold text-rust">
            denied by instance policy
          </div>
          <div className="break-all text-gray-custom">
            http POST https://metrics.example.com/collect
          </div>
          <div className="mt-2 break-all text-dark">
            <span className="text-gray-dark">$ </span>
            permissions allow http POST
            <br />
            <span className="inline-block pl-4">
              https://metrics.example.com/collect
            </span>
          </div>
        </div>
      </div>
    ),
  },
];
