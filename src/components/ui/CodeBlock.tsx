import React, { ReactNode } from 'react';

interface CodeBlockLineProps {
  number: number;
  children: ReactNode;
  indent?: number;
}

export const CodeBlockLine: React.FC<CodeBlockLineProps> = ({ number, children, indent = 0 }) => {
  return (
    <div className="flex">
      <div className="w-6 text-right text-gray-400 select-none pr-4">
        {number}
      </div>
      <div className="flex-1" style={{ paddingLeft: `${indent * 1}rem` }}>
        {children}
      </div>
    </div>
  );
};

interface CodeBlockProps {
  children: ReactNode;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  return (
    <div className="font-mono text-sm p-4 overflow-x-auto bg-white text-left">
      {children}
    </div>
  );
};
