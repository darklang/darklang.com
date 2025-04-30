import React from "react";

const TraceDriven: React.FC = () => {
  return (
    <pre>
The best way to debug and refactor code is with the help of real user data. As your code is executed, locally or in the cloud, traces are stored that you can use and inspect in the development flow.

Traces are captured:
- for http handlers
- for worker `emit`s
- for function calls
- for CRON responses
- for CLI application calls
- whatever else you wish

, and they can be helpful when adjusting code
- or debugging things.

Traces are captured centrally, in the package manager, and are available securely in your editing environment.

(gif in action - ok to be from -classic)

for inspo: https://docs.darklang.com/discussion/trace-driven-development

</pre>
  );
};

export default TraceDriven;
