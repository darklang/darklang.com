import React from "react";

const EarlyContentDisclaimer: React.FC = () => {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
      <div className="flex items-start">
        <div className="text-yellow-600 mr-3 mt-0.5">⚠️</div>
        <div className="text-sm text-yellow-800">
          <strong>Early content:</strong> This page contains AI-generated content and represents initial ideas. 
          Content may be incomplete or subject to change as we develop these concepts further.
        </div>
      </div>
    </div>
  );
};

export default EarlyContentDisclaimer;