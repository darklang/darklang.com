import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";
import CodeDisplay from "../../common/ui/CodeDisplay";

const BACKEND = `type Ticket =
  { subject: String
    assignee: String
    isOpen: Bool }

let listOpen () : Response =
  Tickets
  |> Stdlib.DB.query (fun t -> t.isOpen)
  |> Stdlib.Json.serialize
  |> Stdlib.Http.responseWithJson 200

let router (r: Request) : Response =
  match (r.method, r.path) with
  | ("GET", "/tickets") -> listOpen ()
  | _ -> Stdlib.Http.response [] 404`;

const CLI = `let main (args: List<String>) : Int64 =
  let name =
    args
    |> Stdlib.List.head
    |> Stdlib.Option.withDefault "world"

  Builtin.printLine $"hello {name}"
  0L`;

const SCRIPT = `let rows =
  Builtin.fileRead "catalog.json"
  |> Stdlib.Json.parse<List<Product>>

rows
|> Stdlib.List.iter (fun p ->
     Stdlib.DB.set p p.sku Products)

let n = Stdlib.List.length rows
Builtin.printLine $"imported {n} products"`;

const Cmd: React.FC<{ cmd: string; out: string }> = ({ cmd, out }) => (
  <div className="overflow-x-auto rounded-xl border border-[#333336] bg-dark-black px-4 py-3 font-code text-[12.5px] leading-relaxed whitespace-pre">
    <span className="text-gray-dark">$ </span>
    <span className="text-[#d4d4d4]">{cmd}</span>
    {"\n"}
    <span className="text-olive">{"  " + out}</span>
  </div>
);

const CARDS = [
  {
    kicker: "Backend",
    color: "text-acc-teal",
    title: "A router and a database",
    body: "Your router is a function. The datastore is typed and you query it with a lambda, so there is no schema migration and no SQL.",
    code: BACKEND,
    cmd: "dark serve MyApp.Api.router",
    out: "Listening on http://localhost:8080",
  },
  {
    kicker: "Command line",
    color: "text-purple-lbg",
    title: "A tool you can call",
    body: "A function named main, with typed arguments, callable from your shell. No packaging step and no install step for what it uses.",
    code: CLI,
    cmd: "dark run MyApp.Greet.main ren",
    out: "hello ren",
  },
  {
    kicker: "Scripts",
    color: "text-acc-amber",
    title: "A file you run once",
    body: "A .dark file for the throwaway job. It is type checked before it runs, and it can call anything already in your tree.",
    code: SCRIPT,
    cmd: "dark run import-products.dark",
    out: "imported 214 products",
  },
];

const WhatYouBuild: React.FC = () => (
  <section className="border-t border-gray-200 py-16 md:py-20">
    <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
      <div className="max-w-3xl mb-4">
        <SectionTitle
          subtitle="What you can build"
          subtitleColor="text-purple-lbg"
        >
          A backend, a command-line tool and a throwaway script are all{" "}
          <span className="text-purple-lbg">functions in the same tree</span>
        </SectionTitle>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {CARDS.map(c => (
          <div
            key={c.kicker}
            className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6"
          >
            <div>
              <div
                className={`text-xs font-bold uppercase tracking-wider mb-2 ${c.color}`}
              >
                {c.kicker}
              </div>
              <h3 className="text-lg font-bold text-dark mb-1.5">{c.title}</h3>
              <p className="text-gray-dark">{c.body}</p>
            </div>
            <div className="code-nowrap flex-1 overflow-x-auto rounded-xl border border-gray-200 bg-[#F9F9FB] p-4">
              <CodeDisplay code={c.code} showLineNumbers={false} size="xs" />
            </div>
            <Cmd cmd={c.cmd} out={c.out} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYouBuild;
