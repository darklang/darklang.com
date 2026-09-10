import React from "react";

/** A dark terminal panel, used for the small examples beside each section. */
const Console: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="rounded-2xl border border-[#333336] bg-dark-black overflow-hidden shadow-sm">
    <div className="flex items-center gap-2 px-4 py-2.5 bg-[#262626] border-b border-[#333336] font-code text-xs text-gray-dark">
      <span className="w-2.5 h-2.5 rounded-full bg-[#3a3a3f]"></span>
      <span className="w-2.5 h-2.5 rounded-full bg-[#3a3a3f]"></span>
      <span className="w-2.5 h-2.5 rounded-full bg-[#3a3a3f]"></span>
      <span className="ml-1.5">{title}</span>
    </div>
    <pre className="m-0 p-5 overflow-x-auto font-code text-[13px] leading-[1.75] text-[#d4d4d4] whitespace-pre">
      {children}
    </pre>
  </div>
);

/** Syntax colors for the console panels, matching the editor palette. */
export const Kw: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-code-kw">{children}</span>
);
export const Fn: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-code-fn">{children}</span>
);
export const Ty: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-code-type">{children}</span>
);
export const Str: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-olive">{children}</span>
);
export const Dim: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-gray-dark">{children}</span>
);
export const Cm: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-gray-custom">{children}</span>
);
export const Warn: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-classic-yellow">{children}</span>
);

/** Exact-width padding, since JSX collapses literal runs of spaces. */
export const Sp: React.FC<{ n: number }> = ({ n }) => <>{" ".repeat(n)}</>;

export default Console;
