import React from "react";

import Section from "./Section";

const Line: React.FC<{ can?: boolean; children: React.ReactNode }> = ({
  can = true,
  children,
}) => (
  <div
    className={`flex items-start gap-3 rounded-lg border border-gray-100 px-3.5 py-2 text-[15px] ${
      can ? "bg-[#F9F9FB] text-dark" : "bg-gray-50 text-gray-dark"
    }`}
  >
    <span
      className={`font-code font-bold shrink-0 ${can ? "text-acc-green" : "text-rust"}`}
    >
      {can ? "+" : "−"}
    </span>
    <span>{children}</span>
  </div>
);

const Installing: React.FC = () => (
  <Section
    eyebrow="Installing"
    color="text-acc-green"
    heading={
      <>
        You see the <span className="text-acc-green">authority</span> before you
        install
      </>
    }
    panel={
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 text-sm font-semibold">
          <span className="text-acc-green">GitHub Issue Digest</span>
          <span className="ml-auto font-code text-xs font-normal text-gray-light">
            4c91a7f2e08b
          </span>
        </div>
        <div className="p-4">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="rounded-full bg-[#6F9A3D1f] px-3 py-1 text-xs font-semibold text-acc-green">
              verified publisher
            </span>
            <span className="rounded-full bg-[#F3F3F7] px-3 py-1 text-xs font-semibold text-gray-dark">
              184 installations
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <Line>Read issues from github.com</Line>
            <Line>Call an AI model</Line>
            <Line>Write to its own database</Line>
            <Line can={false}>Modify GitHub</Line>
            <Line can={false}>Read local files or run programs</Line>
            <Line can={false}>Reach any other website</Line>
          </div>
          <div className="mt-5 pt-4 border-t border-gray-100">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-dark mb-2">
              Version 2 adds
            </div>
            <div className="rounded-lg bg-[#6F9A3D14] px-3 py-2 font-code text-xs text-acc-green">
              + POST https://discord.com/api/webhooks/*
            </div>
            <div className="px-3 py-2 font-code text-xs text-gray-light">
              no other permission changes
            </div>
          </div>
        </div>
      </div>
    }
  >
    <p>
      An install page leads with what a package may do, next to its hash and its
      publisher. Download counts tell you nothing about that.
    </p>
    <p>
      An update leads with the authority it adds, so nobody approves new powers
      by accident while reading a version number.
    </p>
  </Section>
);

export default Installing;
