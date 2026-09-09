import React, { useState } from "react";

import CodeDisplay from "../../common/ui/CodeDisplay";
import { Caveat, Section } from "./parts";

const TABS = [
  {
    name: "Total",
    code: `type Order = { item: String; qty: Int64; price: Int64 }

let total (orders: List<Order>) : Int64 =
  orders
  |> Stdlib.List.map (fun o -> o.qty * o.price)
  |> Stdlib.List.sum

total [ { item = "tea"; qty = 2L; price = 300L };
        { item = "cup"; qty = 1L; price = 1200L } ]`,
    result: "1800L",
    denied: false,
  },
  {
    name: "Fetch a URL",
    code: `Stdlib.HttpClient.get "https://example.com/news" []`,
    result:
      "Permission denied: GET https://example.com/news is not allowed.\nTo allow: `permissions allow http GET https://example.com/news`",
    denied: true,
  },
  {
    name: "Pattern match",
    code: `type Shape =
  | Circle of Float
  | Rect of Float * Float

let area (s: Shape) : Float =
  match s with
  | Circle r -> 3.14159 * r * r
  | Rect (w, h) -> w * h

area (Rect (3.0, 4.0))`,
    result: "12.0",
    denied: false,
  },
];

const TryIt: React.FC = () => {
  const [at, setAt] = useState(0);
  const tab = TABS[at];

  return (
    <Section
      id="try"
      eyebrow="Try it"
      color="text-purple-lbg"
      heading={
        <>
          <span className="text-purple-lbg">Run it</span> here
        </>
      }
      tinted
      panel={
        <div>
          <div className="mb-3 flex flex-wrap gap-2">
            {TABS.map((t, n) => (
              <button
                key={t.name}
                onClick={() => setAt(n)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  n === at
                    ? "border-purple-lbg bg-purple-lbg text-white-custom"
                    : "border-gray-200 bg-white text-gray-dark hover:border-gray-300"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="overflow-x-auto p-4 md:p-5">
              <CodeDisplay code={tab.code} showLineNumbers={false} size="sm" />
            </div>
            <div className="border-t border-gray-100 bg-[#F9F9FB] px-4 py-3 md:px-5">
              <div className="mb-1 font-code text-[11px] tracking-[0.14em] text-gray-light uppercase">
                result
              </div>
              <pre
                className={`overflow-x-auto font-code text-[13px] leading-relaxed whitespace-pre-wrap ${
                  tab.denied ? "text-rust" : "text-dark"
                }`}
              >
                {tab.denied ? tab.result : `→ ${tab.result}`}
              </pre>
            </div>
          </div>
        </div>
      }
    >
      <p>Run this. It&apos;s the whole language in ten lines.</p>

      <Caveat>
        Static for now. The live editor, backed by the browser runtime, is
        coming. The second tab is denied on purpose: permissions are part of the
        language, and you meet them in the first minute.
      </Caveat>
    </Section>
  );
};

export default TryIt;
