/**
 * The four pictures on the page, one per section. Each one draws the answer
 * rather than the problem: a homepage should show the thing being sold, and
 * the problem is already stated in words beside it.
 */

import React from "react";

import { Icon } from "./parts";

/* ------------------------------------------------------------------ */
/* 1. A file two agents share, next to two definitions they don't       */
/* ------------------------------------------------------------------ */

const Line: React.FC<{
  w: string;
  tone?: "a" | "b" | "plain";
  indent?: number;
}> = ({ w, tone = "plain", indent = 0 }) => (
  <span
    className={`block h-1.5 rounded-full ${w} ${["ml-0", "ml-3", "ml-6"][indent]} ${
      tone === "a" ? "bg-rust/70" : tone === "b" ? "bg-tan/70" : "bg-gray-200"
    }`}
  />
);

export const FilesVsDefinitions: React.FC = () => (
  <div className="grid gap-4 sm:grid-cols-2">
    {/* one file, both of them in it */}
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-code text-xs text-gray-500">checkout.ts</span>
        <span className="rounded bg-rust/10 px-2 py-0.5 font-code text-[0.65rem] text-rust">
          conflict
        </span>
      </div>
      <div className="space-y-2 rounded-lg bg-[#fbfafc] p-4">
        <Line w="w-4/5" />
        <Line w="w-3/5" tone="a" indent={1} />
        <Line w="w-2/3" tone="b" indent={1} />
        <Line w="w-1/2" tone="a" indent={2} />
        <Line w="w-3/4" />
        <Line w="w-2/5" tone="b" indent={1} />
      </div>
      <p className="mt-3 text-xs 2xl:text-sm text-gray-500">
        Two agents, one file, one set of line numbers.
      </p>
    </div>

    {/* two definitions, one each */}
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-code text-xs text-gray-500">2 definitions</span>
        <span className="rounded bg-acc-green/10 px-2 py-0.5 font-code text-[0.65rem] text-acc-green">
          no overlap
        </span>
      </div>
      <div className="space-y-3">
        {[
          { name: "Shop.checkout", tone: "a" as const },
          { name: "Shop.refundWindow", tone: "b" as const },
        ].map(def => (
          <div key={def.name} className="rounded-lg bg-[#fbfafc] p-4">
            <span className="mb-2 block font-code text-[0.7rem] text-gray-600">
              {def.name}
            </span>
            <div className="space-y-2">
              <Line w="w-3/4" tone={def.tone} />
              <Line w="w-1/2" indent={1} />
              <Line w="w-2/3" tone={def.tone} indent={1} />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs 2xl:text-sm text-gray-500">
        Each one versioned on its own.
      </p>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* 2. Everything known about one definition, in one panel               */
/* ------------------------------------------------------------------ */

const FACTS: { label: string; value: string }[] = [
  { label: "depends on", value: "3 definitions" },
  { label: "used by", value: "7 definitions" },
  { label: "versions", value: "4, newest a64ce1" },
  { label: "requires", value: "Http, DatastoreWrite" },
];

export const DefinitionPanel: React.FC = () => (
  <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-7">
    <div className="mb-4 flex items-center gap-2.5">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-lbg/10 text-blue-lbg">
        <Icon className="h-4 w-4">
          <path d="M4 7h16M4 12h10M4 17h13" />
        </Icon>
      </span>
      <span className="font-code text-sm text-gray-700">Shop.checkout</span>
    </div>

    <div className="mb-5 overflow-x-auto rounded-lg bg-dark-black px-4 py-3">
      <code className="whitespace-pre font-code text-xs text-gray-300 2xl:text-sm">
        <span className="text-code-kw">let</span>{" "}
        <span className="text-code-fn">checkout</span> (cart:{" "}
        <span className="text-code-type">Cart</span>) :
        <span className="text-code-rust">{"{Http, DatastoreWrite}"}</span>{" "}
        <span className="text-code-type">Order</span>
      </code>
    </div>

    <dl className="divide-y divide-gray-100">
      {FACTS.map(fact => (
        <div
          key={fact.label}
          className="flex items-baseline justify-between py-2.5"
        >
          <dt className="text-sm 2xl:text-base text-gray-500">{fact.label}</dt>
          <dd className="font-code text-xs 2xl:text-sm text-gray-700">
            {fact.value}
          </dd>
        </div>
      ))}
    </dl>

    <div className="mt-5 rounded-lg border border-gray-200 bg-[#fbfafc] p-4">
      <p className="mb-2 text-xs 2xl:text-sm font-bold tracking-[0.1em] text-gray-light uppercase">
        Last run
      </p>
      <div className="space-y-1.5 font-code text-xs 2xl:text-sm text-gray-600">
        <p>Shop.checkout(cart) → Ok order#8812</p>
        <p className="pl-4">Stock.reserve(items) → Ok 3 reserved</p>
        <p className="pl-4">Payments.charge(total) → Ok 42.00</p>
        <p className="pl-4 text-gray-400">18ms</p>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* 3. The four permission layers, and what survives all of them         */
/* ------------------------------------------------------------------ */

const LAYERS: { name: string; owner: string; width: string }[] = [
  { name: "instance policy", owner: "the machine", width: "w-full" },
  { name: "run policy", owner: "this invocation", width: "w-[86%]" },
  { name: "package approval", owner: "you, per release", width: "w-[70%]" },
  { name: "function ceiling", owner: "the author", width: "w-[54%]" },
];

export const PermissionLayers: React.FC = () => (
  <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
    <p className="mb-6 text-xs 2xl:text-sm font-bold tracking-[0.1em] text-gray-light uppercase">
      Effective access is the intersection
    </p>

    <div className="space-y-3">
      {LAYERS.map(layer => (
        <div key={layer.name} className={layer.width}>
          <div className="flex items-center justify-between rounded-lg border border-acc-pink/30 bg-acc-pink/5 px-4 py-2.5">
            <span className="font-code text-xs 2xl:text-sm text-gray-700">
              {layer.name}
            </span>
            <span className="ml-3 shrink-0 text-[0.7rem] 2xl:text-xs text-gray-500">
              {layer.owner}
            </span>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-6 w-[54%] border-t-2 border-dashed border-gray-300 pt-4">
      <div className="rounded-lg bg-dark-black px-4 py-3">
        <p className="font-code text-xs text-mint 2xl:text-sm">
          GET https://api.example.com/v1
        </p>
        <p className="mt-1 font-code text-xs text-gray-500">
          everything else: denied
        </p>
      </div>
    </div>

    <p className="mt-5 text-sm 2xl:text-base leading-relaxed text-gray-500">
      Entering a package or a function can only narrow this further. Child
      access is never wider than parent access.
    </p>
  </div>
);
