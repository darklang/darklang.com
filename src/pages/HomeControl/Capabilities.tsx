import React from "react";

import Section from "./Section";

const Row: React.FC<{ allow?: boolean; children: React.ReactNode }> = ({
  allow = true,
  children,
}) => (
  <div
    className={`flex items-start gap-3 rounded-lg border border-gray-100 px-3.5 py-2.5 text-[15px] ${
      allow ? "bg-[#F9F9FB] text-dark" : "bg-gray-50 text-gray-dark"
    }`}
  >
    <span
      className={`font-code font-bold shrink-0 ${allow ? "text-acc-green" : "text-rust"}`}
    >
      {allow ? "+" : "−"}
    </span>
    <span className="min-w-0">{children}</span>
  </div>
);

const Scope: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="block mt-0.5 font-code text-xs text-gray-dark break-all">
    {children}
  </span>
);

const Capabilities: React.FC = () => (
  <Section
    eyebrow="Permissions"
    color="text-rust"
    heading={
      <>
        You decide what code <span className="text-rust">can reach</span>
      </>
    }
    panel={
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 text-sm font-semibold">
          <span className="text-rust">Permissions</span>
          <span className="text-dark">CustomerDigest</span>
          <span className="ml-auto font-code text-xs font-normal text-gray-light">
            instance: vps-1
          </span>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <Row>
            Read issues from one repository
            <Scope>GET https://api.github.com/repos/acme/*</Scope>
          </Row>
          <Row>
            Post to one Discord webhook
            <Scope>POST https://discord.com/api/webhooks/*</Scope>
          </Row>
          <Row>
            Write its own state
            <Scope>db write CustomerDigestState</Scope>
          </Row>
          <Row allow={false}>No file access</Row>
          <Row allow={false}>No subprocess access</Row>
          <Row allow={false}>No other network access</Row>
          <p className="mt-1 text-sm text-gray-dark">
            You edit this policy. Every run records which rules it used.
          </p>
        </div>
      </div>
    }
  >
    <p>
      Each instance has one policy you edit: file, environment and database
      access with scopes, plus network and subprocess rules. The default is
      nothing, so a program can only do what you wrote down.
    </p>
    <p>
      Deno gives you flags on a process. This is a lasting sandbox around a
      language where every definition is identified by its hash, so a package
      cannot quietly swap in different behavior later. That is what makes
      running someone else's code, or something else's code, a reasonable thing
      to do.
    </p>
  </Section>
);

export default Capabilities;
