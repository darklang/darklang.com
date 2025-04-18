/**
 * CodeEditor Component
 * A visual representation of a code editor with syntax highlighting and various features
 */

import React, { useState, useEffect } from "react";
import CodeDisplay from "../../ui/CodeDisplay";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/vs2015.min.css";
import fsharp from "highlight.js/lib/languages/fsharp";

hljs.registerLanguage("fsharp", fsharp);

interface CodeEditorProps {
  code: string;
  language?: string;
  showCompletion?: boolean;
  showHover?: boolean;
  showDiagnostics?: boolean;
  showGoToDef?: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  code,
  language = "fsharp",
  showCompletion = false,
  showHover = false,
  showDiagnostics = false,
  showGoToDef = false,
}) => {
  const [highlightedCode, setHighlightedCode] = useState<
    Array<{ html: string }>
  >([]);

  // Create line numbers
  const lines = code.split("\n");
  const lineNumbers = Array.from(
    { length: Math.max(7, lines.length) },
    (_, i) => i + 1,
  );

  useEffect(() => {
    const processedLines = lines.map(line => {
      if (line.trim() === "") return { html: "&nbsp;" };
      const highlighted = hljs.highlight(line, { language }).value;
      return { html: highlighted };
    });

    setHighlightedCode(processedLines);
  }, [code, language]);

  return (
    <div className="rounded-md overflow-hidden bg-[#1A1A1A] border border-gray-800 relative">
      {/* Editor top bar with dots */}
      <div className="flex items-center px-3 py-2 bg-[#252525] border-b border-gray-800">
        <div className="flex space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
        </div>
      </div>

      {/* Code area */}
      <div className="p-4 font-mono text-sm overflow-x-auto relative">
        <div className="flex">
          {/* Line numbers */}
          <div className="pr-4 text-right text-gray-500 select-none">
            {lineNumbers.map(num => (
              <div key={num} className="h-6">
                {num}
              </div>
            ))}
          </div>

          {/* Actual code with syntax highlighting */}
          <div className="text-white flex-grow">
            {highlightedCode.map((line, index) => (
              <div key={index} className="h-6 overflow-hidden">
                <span dangerouslySetInnerHTML={{ __html: line.html }}></span>
              </div>
            ))}
            {renderEmptyLines(Math.max(0, 7 - lines.length))}
          </div>
        </div>

        {/* Code completion dropdown */}
        {showCompletion && (
          <div className="absolute left-20 top-9 w-48 bg-[#252525] border border-gray-700 shadow-lg rounded-md overflow-hidden z-20">
            <ul className="py-1">
              <li className="px-2 py-1 text-xs bg-blue-600 text-white">
                <div className="flex items-start">
                  <span className="text-white font-bold block">empty</span>
                </div>
              </li>
              <li className="px-2 py-1 text-xs hover:bg-gray-700 cursor-pointer">
                <div className="flex items-start">
                  <span className="text-white font-bold block">toArray</span>
                </div>
              </li>
              <li className="px-2 py-1 text-xs hover:bg-gray-700 cursor-pointer">
                <div className="flex items-start">
                  <span className="text-white font-bold block">map</span>
                </div>
              </li>
              <li className="px-2 py-1 text-xs hover:bg-gray-700 cursor-pointer">
                <div className="flex items-start">
                  <span className="text-white font-bold block">filter</span>
                </div>
              </li>
              <li className="px-2 py-1 text-xs hover:bg-gray-700 cursor-pointer">
                <div className="flex items-start">
                  <span className="text-white font-bold block">length</span>
                </div>
              </li>
              <li className="px-2 py-1 text-xs hover:bg-gray-700 cursor-pointer">
                <div className="flex items-start">
                  <span className="text-white font-bold block">forEach</span>
                </div>
              </li>
              <li className="px-2 py-1 text-xs hover:bg-gray-700 cursor-pointer">
                <div className="flex items-start">
                  <span className="text-white font-bold block">foldr</span>
                </div>
              </li>
              <li className="px-2 py-1 text-xs hover:bg-gray-700 cursor-pointer">
                <div className="flex items-start">
                  <span className="text-white font-bold block">foldl</span>
                </div>
              </li>
            </ul>
          </div>
        )}

        {/* Hover info */}
        {showHover && (
          <div className="absolute left-28 top-9 w-64 bg-[#252525] border border-gray-700 shadow-lg rounded-md p-2 text-xs z-20">
            <div className="text-white">
              <div className="font-bold mb-1">List.empty</div>
              <div className="text-gray-300">
                Create an empty list of any type
              </div>
              <div className="mt-1 text-blue-300">a' list</div>
            </div>
          </div>
        )}

        {/* Diagnostics error */}
        {showDiagnostics && (
          <div className="absolute left-24 top-8 right-4">
            <div className="border-b-2 border-red-500"></div>
            <div className="absolute top-4 left-0 w-64 bg-[#252525] border border-red-500 shadow-lg rounded-md p-2 text-xs z-20">
              <div className="text-red-500 font-bold">Error</div>
              <div className="text-white">
                Cannot use List without completing the method call
              </div>
            </div>
          </div>
        )}

        {/* Go to definition - Popup with function definition */}
        {showGoToDef && (
          <>
            {/* Underline the function name */}
            <div className="absolute left-28 top-9 w-24 border-b border-blue-400"></div>

            {/* Small popup showing function definition */}
            <div className="absolute inset-0 bg-[#1A1A1A] opacity-50 z-10"></div>
            <div className="absolute left-20 right-0 top-15 bottom-0 flex items-center justify-center z-20">
              <div className="max-w-2xl bg-[#252525] border border-gray-700 shadow-lg rounded-md overflow-hidden">
                {/* Popup header */}
                <div className="flex items-center px-3 py-2 bg-[#2D2D2D] border-b border-gray-800">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="ml-4 text-xs text-gray-400 truncate">
                    darklang/packages/stdlib/List.dark
                  </div>
                </div>

                {/* Code content */}
                <div className="p-2 font-mono text-xs overflow-x-auto">
                  {/* Definition code */}
                  <CodeDisplay
                    code={`/// Returns the first element of a list, or None if the list is empty
                      
let head (list: List<a>) : Option<a> =
  match list with
  | [] -> None
  | head::_ -> Some head`}
                    language="fsharp"
                    showLineNumbers={true}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Render empty lines to fill space
const renderEmptyLines = (count: number) => {
  return Array.from({ length: count }, (_, i) => (
    <div key={`empty-${i}`} className="h-6">
      &nbsp;
    </div>
  ));
};

export default CodeEditor;
