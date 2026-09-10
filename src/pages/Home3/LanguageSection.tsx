import React from "react";

import CodeDisplay from "../../common/ui/CodeDisplay";
import Section, { Facts } from "./Section";

const CODE = `type Ticket =
  { subject: String
    assignee: String
    isOpen: Bool }

type Route =
  | List
  | Show of String

let describe (route: Route) : String =
  match route with
  | List -> "every open ticket"
  | Show key -> $"ticket {key}"

let openOnes (tickets: List<Ticket>) : List<String> =
  tickets
  |> Stdlib.List.filter (fun t -> t.isOpen)
  |> Stdlib.List.map (fun t -> t.subject)`;

const LanguageSection: React.FC = () => (
  <Section
    eyebrow="The language"
    color="text-blue-lbg"
    heading={
      <>
        A type checker, <span className="text-blue-lbg">not a build step</span>
      </>
    }
    panel={
      <div className="space-y-3">
        <div className="code-nowrap overflow-x-auto rounded-2xl border border-gray-200 bg-white p-4">
          <CodeDisplay code={CODE} showLineNumbers={false} size="sm" />
        </div>
        <div className="rounded-xl border border-rust/30 bg-rust/5 px-4 py-3 font-code text-[13px] text-dark">
          <div className="text-rust font-bold mb-1">
            on save · MyApp.Tickets.openOnes
          </div>
          <div className="text-gray-custom">
            Stdlib.List.filter expects Ticket -&gt; Bool, this lambda returns
            String
          </div>
          <div className="text-gray-dark mt-1">
            the definition does not commit until you fix it
          </div>
        </div>
      </div>
    }
  >
    <p>
      Statically typed and functional, with records, enums, pattern matching and
      pipelines. If you have written F#, OCaml or Elm, most of it will already
      look familiar.
    </p>
    <p>
      Type checking happens as you save, one definition at a time, against the
      real types of everything it calls. A definition the checker knows is wrong
      never makes it into a commit.
    </p>
    <Facts
      color="bg-blue-lbg"
      items={[
        "No null. Absence is an Option and failure is a Result, both ordinary values you match on.",
        "Everything is an expression, including match and if.",
        "The standard library is in the same tree as your code, under Stdlib.",
      ]}
    />
  </Section>
);

export default LanguageSection;
