import React, { useState } from "react";

export const INSTALL_CMD = "curl -fsSL https://darklang.com/install | sh";

const InstallCommand: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(INSTALL_CMD);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      aria-label={`Copy install command: ${INSTALL_CMD}`}
      className="group inline-flex items-center gap-2.5 rounded-lg border border-gray-200 bg-[#F9F9FB] hover:border-gray-300 px-4 py-2.5 font-code text-xs md:text-sm transition-colors"
    >
      <span className="select-none text-purple-lbg">$</span>
      <span className="text-dark">{INSTALL_CMD}</span>
      <span className="ml-1.5 text-[11px] text-gray-400 min-w-[3ch] text-left">
        {copied ? "copied" : "copy"}
      </span>
    </button>
  );
};

export default InstallCommand;
