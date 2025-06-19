import React from "react";

const TraceDriven: React.FC = () => {
  return (
    <p>
      Traces are a core feature of Darklang that enable developers to work with live request data to build and debug applications efficiently.
      Acting as an "omniscient debugger" traces provide complete visibility into the state of an application at any point in time, allowing developers
      to see exactly what data flows through their code and how it behaves without needing traditional debugging tools like print statements or external loggers.

      Traces power Trace-Driven Development, a workflow where you start by sending requests to non-existent endpoints.
      Darklang records those traces, which you then use to write code that handles real inputs.
      This approach ensures code is developed with actual data, reducing guesswork and errors.

      Traces are records of HTTP requests (or other events) made to a Darklang app. Whether your code runs locally or in the cloud,
      traces automatically capture inputs and intermediate values during execution for:
      - HTTP handlers
      - Worker `emit`s
      - Function calls
      - CRON responses
      - CLI application calls

      A trace includes:
      - Request Inputs: The full HTTP request, including headers, query parameters, body and metadata.
      - Intermediate Values: Values computed during the execution of a handler, such as the results of expressions or function calls.
      - Live Values: The evaluated results of expressions for a selected traceThese update in real-time as you write code.
      - Return Values: The final output of a handler

      All traces are securely and centrally captured in the package manager, and made available in your editing environment.
      This approach streamlines debugging, improves accuracy, and makes refactoring safer—all by letting real data guide the development process.
    </p>
  );
};

export default TraceDriven;
