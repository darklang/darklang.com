import React from "react";

import Section, { Facts } from "./Section";

const LAYERS = [
  {
    layer: "instance",
    owner: "you, on this machine",
    note: "the hard maximum",
  },
  { layer: "run", owner: "whoever invokes it", note: "this invocation only" },
  { layer: "package", owner: "you, per release", note: "keyed to a hash" },
  { layer: "function", owner: "the author", note: "can only take away" },
];

const Row: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 border-b border-gray-100 px-4 py-2.5 text-[15px] last:border-b-0">
    <span className="w-24 shrink-0 font-code text-xs text-gray-dark">
      {label}
    </span>
    <span className="min-w-0 flex-1">{children}</span>
  </div>
);

const Permissions: React.FC = () => (
  <Section
    eyebrow="Permissions"
    color="text-rust"
    heading={
      <>
        Permissions are part of <span className="text-rust">the language</span>
      </>
    }
    panel={
      <div className="space-y-3">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-3 text-sm font-semibold">
            <span className="text-rust">Access report</span>
            <span className="font-code text-dark">Payments.charge</span>
          </div>
          <Row label="requires">
            <span className="font-code text-sm text-dark">Http</span>
            <span className="text-gray-dark"> analyzed from the code</span>
            <span className="mt-0.5 block font-code text-xs break-all text-gray-dark">
              POST https://api.stripe.com/v1/checkout/sessions
            </span>
          </Row>
          <Row label="ceiling">
            <span className="font-code text-sm text-dark">:{"{Http}"}</span>
            <span className="text-gray-dark">
              {" "}
              declared by the author, part of the hash
            </span>
          </Row>
          <Row label="package">
            <span className="text-dark">approved at</span>
            <span className="font-code text-sm text-dark"> b7d21f04</span>
          </Row>
          <Row label="instance">
            <span className="text-dark">that one URL</span>
            <span className="text-gray-dark">, nothing else</span>
          </Row>
          <Row label="effective">
            <span className="text-dark">the intersection of all four</span>
          </Row>
        </div>

        <div className="rounded-xl border border-rust/30 bg-rust/5 px-4 py-3 font-code text-[13px]">
          <div className="mb-1 font-bold text-rust">
            denied by instance policy
          </div>
          <div className="break-all text-gray-custom">
            http POST https://api.stripe.com/v1/checkout/sessions
          </div>
          <div className="mt-2 break-all text-dark">
            <span className="text-gray-dark">$ </span>
            permissions allow http POST
            <br />
            <span className="inline-block pl-4">
              https://api.stripe.com/v1/checkout/sessions
            </span>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          {LAYERS.map(l => (
            <div
              key={l.layer}
              className="flex flex-wrap items-baseline gap-x-3 border-b border-gray-100 px-4 py-2 text-sm last:border-b-0"
            >
              <span className="w-20 shrink-0 font-code text-xs text-rust">
                {l.layer}
              </span>
              <span className="text-dark">{l.owner}</span>
              <span className="ml-auto text-gray-dark">{l.note}</span>
            </div>
          ))}
        </div>
      </div>
    }
  >
    <p>
      Access is denied by default, and a check matches the exact URL, file path,
      port or process being used. Not &quot;the network&quot;, but this request,
      down to the query string.
    </p>
    <p>
      A function declares its ceiling on the return colon, so it travels in the
      content hash with the code:{" "}
      <span className="font-code text-[0.9em] whitespace-nowrap">
        let fetch (url: String) :{"{Http}"} String
      </span>
      . A ceiling can only take access away, and nothing the function calls can
      reach past it.
    </p>
    <p>
      What a function requires is analyzed from the code rather than declared by
      hand, including the code inside closures it might hand back later. A
      package publishes its requirements as a request. Only you can turn that
      into a rule.
    </p>
    <Facts
      color="bg-rust"
      items={[
        "Four layers, and effective access is their intersection, so child access is never wider than its parent.",
        "Function values and closures keep the access they captured, so handing one away does not hand away your reach.",
        "A denial names the layer that refused, the exact request, and the rule that would allow it.",
      ]}
    />
  </Section>
);

export default Permissions;
