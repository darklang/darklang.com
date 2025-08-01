import React, { useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/xcode.min.css";
import fsharp from "highlight.js/lib/languages/fsharp";

hljs.registerLanguage("fsharp", fsharp);

interface CodeDisplayProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

const CodeDisplay: React.FC<CodeDisplayProps> = ({
  code,
  language = "fsharp",
  showLineNumbers = true,
}) => {
  const [highlightedCode, setHighlightedCode] = useState("");

  useEffect(() => {
    const highlighted = hljs.highlight(code, { language }).value;

    const codeLines = highlighted.split("\n");

    const codeWithLineNumbers = codeLines
      .map((line, index) => {
        const lineNumber = index + 1;
        return `<div class="code-line">${showLineNumbers
          ? `<span class="line-number">${lineNumber}</span>`
          : ""
          }<span class="line-content">${line || " "}</span></div>`;
      })
      .join("");

    setHighlightedCode(codeWithLineNumbers);
  }, [code, language, showLineNumbers]);

  return (
    <div className="hljs-pre code-with-line-numbers whitespace-pre text-sm md:text-base">
      <pre>
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </pre>
    </div>
  );
};

export default CodeDisplay;
