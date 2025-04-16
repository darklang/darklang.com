/**
 * Terminal Component
 * Renders a terminal-like UI with customizable content
 */

import React, { ReactNode } from "react";

interface TerminalProps {
  children: ReactNode;
  className?: string;
}

const Terminal: React.FC<TerminalProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-dark-black rounded-2xl wrap-break-word ${className}`}>
      <div className="px- py-2">
        <div className="flex space-x-2 pl-5 pt-5">
          <div className="w-3 h-3 rounded-full bg-purple-dbg"></div>
          <div className="w-3 h-3 rounded-full bg-sand"></div>
          <div className="w-3 h-3 rounded-full bg-olive"></div>
        </div>
      </div>
      <div className="pl-10 pr-5 pt-4 pb-6 font-mono text-sm 2xl:text-base leading-6">
        {children}
      </div>
    </div>
  );
};

export default Terminal;
