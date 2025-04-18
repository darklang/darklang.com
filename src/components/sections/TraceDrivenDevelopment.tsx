/**
 * TraceDrivenDevelopment Section
 */

import React from "react";
import {
  HttpIcon,
  WorkerIcon,
  CronIcon,
  CliIcon,
  FnIcon,
  MiscIcon,
} from "../ui/Icons";
import SectionTitle from "../ui/SectionTitle";
import { TraceCard } from "../ui/Card";

const httpCodeSample = `Made less than a minute ago
request: {
  body: {
    info: "testinfo",
  },
  fullBody:"{\\\"info\\\":\\\"testinfo\\\"}",
  headers: {
    accept: "*/*",
    content-length: "37",
    ...
  }
}`;

const fnCallCodeSample = `Made 4 minutes ago
getUserPaintings(userId)
▸ args:
"u-573829"
▸ returns:
[
{ "id": "p-001", "title": "Mountain Sunset", "created": "2024-11-05" },
{ "id": "p-002", "title": "Ocean Waves", "created": "2025-12-01" }
]
▸ duration: 47ms`;

const cliCodeSample = `Made 3 minutes ago
$ npm run deploy --env=staging
stdout:
Deploying to staging environment...
✓ Building application (2.3s)
✓ Running tests (1.7s)
✓ Uploading assets (4.2s)
✓ Deployment complete (8.7s)
exit: 0`;

const workerCodeSample = `Made 2 minutes ago
WORKER: media-processor
TASK_ID: wrk_8a72c9d3
STATUS: completed
DURATION: 3.8s
RESULT: {
"processedFiles": 7,
"compressionRatio": 2.24
}`;

const cronCodeSample = `Made 25 minutes ago
JOB_ID: cron_93f721a5
NAME: data-sync-production
SCHEDULE: */15 * * * *
STATUS: success
DURATION: 42.3s
RESULT: { "records_processed": 8427 }`;

const miscCodeSample = `Create custom trace collectors
Made 17 minutes ago
EVENT: user.onboarding.completed
context: {
userId: "usr_27b391fe",
timestamp: "2025-04-18T15:28:13Z"
}
data: {
stepsCompleted: 4,
totalDuration: 462
}`;

const TraceDrivenDevelopment: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-2">
          {/* Left Side Content */}
          <div className="md:col-span-3 flex flex-col justify-center ">
            <SectionTitle subtitle="Trace-driven development">
              Development with Real Data
            </SectionTitle>

            <p className="text-base md:text-lg lg:text-xl text-gray-700 mr-8 mb-6">
              The best way to debug and refactor code is with the help of{" "}
              <a href="#" className="text-blue-lbg hover:underline">
                real user data
              </a>
              . As your code executes, whether{" "}
              <a href="#" className="text-purple-lbg hover:underline">
                locally
              </a>{" "}
              or in the{" "}
              <a href="#" className="text-purple-lbg hover:underline">
                cloud
              </a>
              , traces are captured and made available in your development
              workflow, making it easier to refactor code and debug issues.
            </p>

            <p className="text-base md:text-lg lg:text-xl text-gray-700 mr-8 mb-6">
              Traces are captured centrally in the package manager, stored
              locally first, and securely available in your editing environment
              - you control when and if they sync.
            </p>

            <a
              href="#"
              className="inline-block mt-6 text-blue-lbg hover:underline text-lg xl:text-xl font-semibold"
            >
              See how traces work with real examples →
            </a>
          </div>

          {/* Right Side Stacked Cards*/}
          <div className="md:col-span-2 relative">
            <div className="grid grid-cols-2 gap-5">
              {/* Left column of cards */}

              <div className="space-y-5">
                <TraceCard
                  title="HTTP Handlers"
                  icon={<HttpIcon className="w-4 h-4" />}
                  description="Capture and analyze HTTP requests and responses in real-time. Debug API integrations with complete request data."
                  codeSample={httpCodeSample}
                  color="blue"
                ></TraceCard>

                <TraceCard
                  title="Function calls"
                  icon={<FnIcon className="w-4 h-4 text-purple-lbg" />}
                  description="Inspect function inputs, outputs, and performance metrics. Debug complex operations with detailed traces."
                  codeSample={fnCallCodeSample}
                  color="magenta"
                ></TraceCard>

                <TraceCard
                  title="CLI application calls"
                  icon={<CliIcon className="w-4 h-4 text-blue-lbg" />}
                  description="Track CLI operations with detailed input and output records. Monitor script execution, environment variables, and command results for easy debugging."
                  codeSample={cliCodeSample}
                  color="purple"
                ></TraceCard>
              </div>

              {/* Right column of cards */}
              <div className="space-y-5 mt-12">
                <TraceCard
                  title="Worker emits"
                  icon={<WorkerIcon className="w-4 h-4 text-taupe" />}
                  description="Track and monitor background workers and their execution. Observe task processing in real-time."
                  codeSample={workerCodeSample}
                  color="taupe"
                ></TraceCard>

                <TraceCard
                  title="CRON responses"
                  icon={<CronIcon className="w-4 h-4 text-tan" />}
                  description="Monitor scheduled tasks and their execution results. Ensure automation runs correctly with real data."
                  codeSample={cronCodeSample}
                  color="orange"
                ></TraceCard>

                <TraceCard
                  title="Whatever else you wish"
                  icon={<MiscIcon className="w-4 h-4 text-gray-500" />}
                  description="Customize your own trace types and visualizations. Monitor any aspect of your application with flexible data collection."
                  codeSample={miscCodeSample}
                  color="gray"
                ></TraceCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraceDrivenDevelopment;
