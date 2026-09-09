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
        Caught <span className="text-blue-lbg">before it runs</span>
      </>
    }
    panel={
      <div className="space-y-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-4 overflow-x-auto">
          <CodeDisplay code={CODE} showLineNumbers={false} size="sm" />
        </div>
        <div className="rounded-xl border border-rust/30 bg-rust/5 px-4 py-3 font-code text-[13px] text-dark">
          <div className="text-rust font-bold mb-1">on save · Alerts.run</div>
          <div className="text-gray-custom">
            Stdlib.List.iter expects Unit, Notify.notify returns Result&lt;Unit,
            String&gt;
          </div>
          <div className="text-gray-dark mt-1">
            not committed until you fix it
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
      real types of everything it calls. Definite errors never make it into a
      commit.
    </p>
    <Facts
      color="bg-blue-lbg"
      items={[
        "No null. Option and Result are how absence and failure are said.",
        "Everything is an expression, including match and if.",
        "The standard library is in the same tree as your code, under Stdlib.",
      ]}
    />
  </Section>
);

export default LanguageSection;
