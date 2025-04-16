/**
 * TraceDrivenDevelopment Section
 * Displays information about trace-driven development with trace cards
 */

import React from 'react';
import { HttpIcon, WorkerIcon, CronIcon, CliIcon, MiscIcon } from '../ui/Icons';
import SectionTitle from '../ui/SectionTitle';
import { TraceCard } from '../ui/Card';

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

const TraceDrivenDevelopment: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-2">
          {/* Left Side Content - 3 columns wide, vertically centered */}
          <div className="md:col-span-3 flex flex-col justify-center ">
            <SectionTitle subtitle="Trace-driven development">Development with Real Data</SectionTitle>

            <p className="text-base md:text-lg lg:text-xl text-gray-700 mr-8 mb-6">
              The best way to debug and refactor code is with the help of{' '}
              <a href="#" className="text-blue-lbg hover:underline">real user data</a>.
              As your code executes, whether{' '}
              <a href="#" className="text-purple-lbg hover:underline">locally</a> or in the{' '}
              <a href="#" className="text-purple-lbg hover:underline">cloud</a>, traces
              are captured and made available in your development workflow,
              making it easier to refactor code and debug issues.
            </p>

            <p className="text-base md:text-lg lg:text-xl text-gray-700 mr-8 mb-6">
              Traces are captured centrally in the package manager, stored locally
              first, and securely available in your editing environment - you control
              when and if they sync.
            </p>

            <a href="#" className="inline-block mt-6 text-blue-lbg hover:underline text-lg xl:text-xl font-semibold">
              See how traces work with real examples →
            </a>
          </div>

          {/* Right Side Stacked Cards - 3 columns wide */}
          <div className="md:col-span-2 relative">
            <div className="grid grid-cols-2 gap-5">
              {/* Left column of cards */}

              <div className="space-y-5">
                <TraceCard
                  title='HTTP Handlers'
                  icon={<HttpIcon className="w-4 h-4" />}
                  description='Lorem ipsum dolor sit amet consectetur. Cras a montes vitae id sit duis lectus amet.'
                  codeSample={httpCodeSample}
                  color='blue'
                ></TraceCard>

                <TraceCard
                  title='Function calls'
                  icon={<CliIcon className="w-4 h-4 text-purple-lbg" />}
                  description='Lorem ipsum dolor sit amet consectetur. Cras a montes vitae id sit duis lectus amet.'
                  codeSample={httpCodeSample}
                  color='magenta'
                ></TraceCard>

                <TraceCard
                  title='CLI application calls'
                  icon={<CliIcon className="w-4 h-4 text-blue-lbg" />}
                  description='Lorem ipsum dolor sit amet consectetur. Cras a montes vitae id sit duis lectus amet.'
                  codeSample={httpCodeSample}
                  color='purple'
                ></TraceCard>
              </div>

              {/* Right column of cards - offset for staggered look */}
              <div className="space-y-5 mt-12">
                <TraceCard
                  title='Worker emits'
                  icon={<WorkerIcon className="w-4 h-4 text-taupe" />}
                  description='Lorem ipsum dolor sit amet consectetur. Cras a montes vitae id sit duis lectus amet.'
                  codeSample={httpCodeSample}
                  color='taupe'
                ></TraceCard>

                <TraceCard
                  title='CRON responses'
                  icon={<CronIcon className="w-4 h-4 text-tan" />}
                  description='Lorem ipsum dolor sit amet consectetur. Cras a montes vitae id sit duis lectus amet.'
                  codeSample={httpCodeSample}
                  color='orange'
                ></TraceCard>

                <TraceCard
                  title='Whatever else you wish'
                  icon={<MiscIcon className="w-4 h-4 text-gray-500" />}
                  description='Lorem ipsum dolor sit amet consectetur. Cras a montes vitae id sit duis lectus amet.'
                  codeSample={httpCodeSample}
                  color='gray'
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
