import React, { useEffect, useRef, useState } from "react";

import CodeDisplay from "../../common/ui/CodeDisplay";
import { Section } from "./parts";

type Tab = {
  name: string;
  code: string;
  /** What the run prints. Return values carry their own "→". */
  result: string;
  /** Set when the run is refused until a rule allows it. */
  denied?: { rule: string; allowedResult: string };
};

const TABS: Tab[] = [
  {
    name: "Web server",
    code: `let hello (req: Stdlib.Http.Request) : Stdlib.Http.Response =
  match Stdlib.HttpServer.getPathParam req "/hello/:name" "name" with
  | Some name -> Stdlib.Http.responseWithText $"Hi, {name}!" 200
  | None -> Stdlib.Http.notFound ()

Stdlib.HttpServer.serve
  (Stdlib.HttpServer.Config.defaults 8000)
  (Stdlib.HttpServer.routeRequest [ Stdlib.HttpServer.get "/hello/:name" hello ])
  (fun () -> Stdlib.printLine "listening on http://localhost:8000")`,
    result:
      "Permission denied: http-server 8000 is not allowed.\nTo allow: `permissions allow http-server 8000`",
    denied: {
      rule: "http-server 8000",
      allowedResult: `listening on http://localhost:8000

$ curl localhost:8000/hello/ada
Hi, ada!`,
    },
  },
  {
    name: "Fetch a URL",
    code: `Stdlib.HttpClient.get "https://example.com/news" []`,
    result:
      "Permission denied: GET https://example.com/news is not allowed.\nTo allow: `permissions allow http GET https://example.com/news`",
    denied: {
      rule: "http GET https://example.com/news",
      allowedResult: `→ Ok { statusCode = 200
     headers = [ ("content-type", "text/html; charset=utf-8") ]
     body = <Blob 1256 bytes> }`,
    },
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
    result: "→ 12.0",
  },
];

/** How long a run appears to take, so the result doesn't just blink in. */
const RUN_MS = 450;

const TryIt: React.FC = () => {
  const [at, setAt] = useState(0);
  const [run, setRun] = useState<"idle" | "running" | "done">("idle");
  /** Rules allowed so far. They stick across tabs, the way a policy does. */
  const [allowed, setAllowed] = useState<string[]>([]);
  /** The permissions command just typed, shown above the rerun. */
  const [typed, setTyped] = useState<string | null>(null);
  const timer = useRef<number | undefined>(undefined);
  const tab = TABS[at];
  const blocked = !!tab.denied && !allowed.includes(tab.denied.rule);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const pick = (n: number) => {
    window.clearTimeout(timer.current);
    setAt(n);
    setTyped(null);
    setRun("idle");
  };

  const start = () => {
    window.clearTimeout(timer.current);
    setRun("running");
    timer.current = window.setTimeout(() => setRun("done"), RUN_MS);
  };

  const setRule = (allow: boolean) => {
    if (!tab.denied) return;
    const rule = tab.denied.rule;
    setAllowed(rules =>
      allow ? [...rules, rule] : rules.filter(r => r !== rule),
    );
    setTyped(`permissions ${allow ? "allow" : "remove"} ${rule}`);
    start();
  };

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
                onClick={() => pick(n)}
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
              <div className="mb-1 flex items-center justify-between">
                <span className="font-code text-[11px] tracking-[0.14em] text-gray-light uppercase">
                  result
                </span>
                <button
                  onClick={start}
                  disabled={run === "running"}
                  className="inline-flex items-center gap-1.5 rounded-full bg-purple-lbg px-4 py-1 text-sm font-medium text-white-custom transition-colors hover:bg-purple-secondry disabled:opacity-60"
                >
                  <span aria-hidden="true">▶</span>
                  Run
                </button>
              </div>

              {typed && (
                <div className="mb-2 font-code text-[13px] leading-relaxed">
                  <div className="text-gray-dark">$ {typed}</div>
                  <div className="text-acc-green">✓ policy updated</div>
                </div>
              )}

              <pre
                aria-live="polite"
                className={`min-h-[1.6em] overflow-x-auto font-code text-[13px] leading-relaxed whitespace-pre-wrap ${
                  run === "done" && blocked ? "text-rust" : "text-dark"
                }`}
              >
                {run === "idle" && (
                  <span className="text-gray-light">Press Run.</span>
                )}
                {run === "running" && (
                  <span className="text-gray-light">running…</span>
                )}
                {run === "done" &&
                  (tab.denied && !blocked
                    ? tab.denied.allowedResult
                    : tab.result)}
              </pre>

              {run === "done" && tab.denied && (
                <button
                  onClick={() => setRule(blocked)}
                  className={`mt-3 inline-flex max-w-full items-center gap-2 rounded-lg border px-3 py-1.5 text-left font-code text-xs transition-colors ${
                    blocked
                      ? "border-purple-lbg bg-white text-purple-lbg hover:bg-purple-lbg/5"
                      : "border-gray-200 bg-white text-gray-dark hover:border-gray-300"
                  }`}
                >
                  <span className="font-sans text-sm font-medium">
                    {blocked ? "Allow" : "Remove the rule"}
                  </span>
                  <span className="truncate">
                    permissions {blocked ? "allow" : "remove"} {tab.denied.rule}
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      }
    >
      <p>Run this. It&apos;s a whole web server in nine lines.</p>
      <p>
        It&apos;s refused on purpose: even a hello-world server has to ask for
        its port. Allow it and it runs. Permissions are part of the language,
        and you meet them in the first minute.
      </p>
    </Section>
  );
};

export default TryIt;
