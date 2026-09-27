/**
 * One picture per section, in the homepage's manner: a dark code panel, or a
 * light card that shows the actual thing being described. They illustrate the
 * copy; they never add a claim it does not make.
 */

import React from "react";

import { Term } from "../BuiltForAgents/parts";
import { cmd, out, hi, gap } from "../BuiltForAgents/term";

const Card: React.FC<{
  label: string;
  children: React.ReactNode;
}> = ({ label, children }) => (
  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_18px_40px_-34px_rgba(30,30,40,0.6)]">
    <p className="mb-5 font-code text-xs tracking-[0.1em] text-gray-light uppercase">
      {label}
    </p>
    {children}
  </div>
);

/** Branches, and a conflict kept rather than resolved away. */
export const Branches: React.FC = () => (
  <Term
    label="dark"
    lines={[
      cmd("dark branches"),
      out("  main"),
      hi("  add-search       2 definitions"),
      out("  fix-billing      1 definition"),
      gap,
      cmd("dark conflicts"),
      out("  Shop.checkout"),
      hi("    kept     add-search version"),
      out("    also     fix-billing version"),
      out("    select the other version when needed"),
    ]}
  />
);

/** Find the real API, then hear about the callers you broke. */
export const Discovery: React.FC = () => (
  <Term
    label="dark"
    lines={[
      cmd('dark search "checkout" --fn'),
      hi("  Shop.checkout    Cart -> Order"),
      gap,
      cmd("dark deps Shop.checkout"),
      out("  uses       Cart.total, Stock.reserve"),
      out("  used by    7 definitions"),
      gap,
      out("# after changing the return type"),
      hi("  Api.postOrder      type error: expected Order"),
      out("  Admin.replayOrder  ok"),
    ]}
  />
);

/** Allowed, and everything else denied. */
export const Permissions: React.FC = () => (
  <Card label="Report.daily · permission requirements">
    <ul className="space-y-3">
      {[
        { on: true, text: "GET https://api.example.com/v1/orders" },
        { on: true, text: "FileRead ./input" },
        { on: false, text: "FileWrite ./input" },
        { on: false, text: "POST anywhere else" },
      ].map(rule => (
        <li key={rule.text} className="flex items-center gap-3">
          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-bold ${
              rule.on
                ? "bg-acc-green/10 text-acc-green"
                : "bg-gray-100 text-gray-400"
            }`}
            aria-hidden="true"
          >
            {rule.on ? "✓" : "✕"}
          </span>
          <span className="font-code text-xs text-gray-700 2xl:text-sm">
            {rule.text}
          </span>
        </li>
      ))}
    </ul>
    <p className="mt-5 border-t border-gray-100 pt-4 text-sm text-gray-500">
      Analysis incomplete for 1 call through a variable.
    </p>
  </Card>
);

/** The approval, tied to the version it was given for. */
export const Approval: React.FC = () => (
  <Card label="Stripe.charge · approved">
    <div className="mb-5 overflow-hidden rounded-lg bg-dark-black px-4 py-3 font-code text-xs text-gray-300 2xl:text-sm">
      <p className="text-mint">a64ce1 approved</p>
      <p className="mt-1 text-gray-500">7f3a9c available, not approved</p>
    </div>
    <dl className="divide-y divide-gray-100 text-sm 2xl:text-base">
      {[
        ["name resolves to", "a64ce1"],
        ["requires", "Http"],
        ["dependencies", "4"],
      ].map(([k, v]) => (
        <div key={k} className="flex justify-between py-2.5">
          <dt className="text-gray-500">{k}</dt>
          <dd className="font-code text-xs text-gray-700 2xl:text-sm">{v}</dd>
        </div>
      ))}
    </dl>
  </Card>
);

/** Which changes you asked for, and which followed. */
export const Changes: React.FC = () => (
  <Card label="add-search · 12 changed">
    <div className="space-y-5">
      {[
        {
          head: "Edited directly",
          tone: "text-purple-lbg",
          items: ["Search.query", "Search.rank"],
        },
        {
          head: "Followed an update",
          tone: "text-blue-lbg",
          items: ["Api.getResults", "Admin.preview", "Shop.suggest"],
        },
        {
          head: "Pinned to an earlier version",
          tone: "text-gray-500",
          items: ["Legacy.search"],
        },
      ].map(group => (
        <div key={group.head}>
          <p
            className={`mb-2 text-xs font-bold tracking-[0.08em] uppercase ${group.tone}`}
          >
            {group.head}
          </p>
          <ul className="space-y-1">
            {group.items.map(item => (
              <li
                key={item}
                className="font-code text-xs text-gray-700 2xl:text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Card>
);

/** The run, and where it diverged. */
export const Trace: React.FC = () => (
  <Term
    label="dark"
    lines={[
      cmd("dark traces view 4f2a1c"),
      out("  Shop.checkout(cart)"),
      out("    Cart.total(items)           → 42.00   1ms"),
      hi("    Stock.reserve(items)        → Error   6ms"),
      out('      Stock.available("sku-4471") → 0'),
      out("    Payments.charge               not reached"),
      gap,
      out("  3 calls · 7ms · 1 error"),
    ]}
  />
);

/** Every version still there. */
export const Versions: React.FC = () => (
  <Card label="Search.rank · history">
    <ol className="space-y-2">
      {[
        { hash: "c91b40", note: "current", now: true },
        { hash: "a64ce1", note: "1 caller pinned here" },
        { hash: "7f3a9c", note: "" },
        { hash: "5be201", note: "first version" },
      ].map(version => (
        <li
          key={version.hash}
          className={`flex items-center justify-between rounded-lg px-4 py-3 ${
            version.now ? "bg-purple-lbg/10" : "bg-[#fbfafc]"
          }`}
        >
          <span
            className={`font-code text-xs 2xl:text-sm ${
              version.now ? "font-bold text-purple-lbg" : "text-gray-600"
            }`}
          >
            {version.hash}
          </span>
          <span className="text-xs text-gray-500 2xl:text-sm">
            {version.note}
          </span>
        </li>
      ))}
    </ol>
    <p className="mt-5 border-t border-gray-100 pt-4 text-sm text-gray-500">
      Nothing is removed when a definition changes.
    </p>
  </Card>
);
