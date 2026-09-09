import React from "react";

import CodeDisplay from "../../common/ui/CodeDisplay";
import DetailLinks from "../Home/DetailLinks";
import { Section } from "./parts";

const CODE = `type Shape =
  | Circle of Float
  | Rect of Float * Float

let area (s: Shape) : Float =
  match s with
  | Circle r -> 3.14159 * r * r
  | Rect (w, h) -> w * h

let describe (s: Shape) : String =
  if area s > 100.0 then "big" else "small"`;

const Language: React.FC = () => (
  <Section
    id="language"
    eyebrow="Language"
    color="text-blue-lbg"
    heading={
      <>
        Small, typed, <span className="text-blue-lbg">functional</span>
      </>
    }
    panel={
      <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:p-5">
        <CodeDisplay code={CODE} showLineNumbers={false} size="sm" />
      </div>
    }
  >
    <p>
      Small, typed, functional. No null. No exceptions in your code. If
      you&apos;ve seen F#, OCaml or Elm, you already read it.
    </p>
    <p>
      Records, enums, pattern matching, pipes, Option and Result instead of null
      and throw. Integers are sized and explicit. Strings interpolate.
    </p>

    <DetailLinks
      color="text-blue-lbg"
      links={[
        { label: "The language", to: "/language" },
        { label: "Type checking", to: "/type-checking" },
      ]}
    />
  </Section>
);

export default Language;
