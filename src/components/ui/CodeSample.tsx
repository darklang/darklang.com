import React from 'react';

interface CodeSampleProps {
  content: string;
  className?: string;
}

// This component allows for custom styling of code syntax
const CodeSample: React.FC<CodeSampleProps> = ({ content, className = '' }) => {
  // Simple syntax highlighting for HTTP trace sample
  const formatContent = (code: string) => {
    return code
      .replace(/(Made less than a minute ago)/g, '<span class="text-gray-500">$1</span>')
      .replace(/(request:|body:|headers:|info:|fullBody:|accept:|content-length:)/g, 
        '<span class="text-purple-600">$1</span>')
      .replace(/(".*?")/g, '<span class="text-green-600">$1</span>')
      .replace(/({|}|\[|\]|:|,)/g, '<span class="text-gray-500">$1</span>');
  };

  return (
    <div className={`bg-blue-50 p-4 rounded-md text-xs font-mono overflow-x-auto leading-relaxed ${className}`}>
      <pre 
        className="whitespace-pre-wrap text-indigo-600" 
        dangerouslySetInnerHTML={{ __html: formatContent(content) }}
      />
    </div>
  );
};

export default CodeSample;
