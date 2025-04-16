import React, { useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/vs2015.min.css";

// Code display component with highlight.js and line numbers
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
  // Use state to store the highlighted HTML
  const [highlightedCode, setHighlightedCode] = useState("");

  // Effect to highlight code when it changes
  useEffect(() => {
    // Use highlight.js to highlight the code
    const highlighted = hljs.highlight(code, { language }).value;

    // Split the code by lines to add line numbers
    const codeLines = highlighted.split("\n");

    // Add line numbers to each line
    const codeWithLineNumbers = codeLines
      .map((line, index) => {
        const lineNumber = index + 1;
        return `<div class="code-line">
                ${
                  showLineNumbers
                    ? `<span class="line-number">${lineNumber}</span>`
                    : ""
                }
                <span class="line-content">${line}</span>
              </div>`;
      })
      .join("");

    setHighlightedCode(codeWithLineNumbers);
  }, [code, language, showLineNumbers]);

  return (
    <div className="hljs-pre code-with-line-numbers">
      <code
        className={`language-${language}`}
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </div>
  );
};

export default CodeDisplay;
