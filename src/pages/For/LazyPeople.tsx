import React, { useState, useEffect } from "react";
import EarlyContentDisclaimer from "../../components/EarlyContentDisclaimer";

const LazyPeople: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl 2xl:max-w-7xl mx-auto">
        <EarlyContentDisclaimer />
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Darklang for Lazy People
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-4xl mx-auto">
            Why do things the hard way when you can automate them? Maximum
            results, minimum effort.
          </p>
        </div>

        {/* Lazy Person Problems and Darklang for Lazy People */}
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 2xl:gap-12 mb-10">
          {/* Lazy Person Problems */}
          <div className="py-8">
            <div className="relative inline-block mb-6 px-3 py-2">
              {/* L-shaped corner borders with animation */}
              <div
                className="absolute top-0 left-0 h-0.5 bg-rust transition-all duration-700 ease-out"
                style={{ width: isVisible ? "55px" : "0px" }}
              ></div>
              <div
                className="absolute top-0 left-0 w-0.5 bg-rust transition-all duration-700 ease-out"
                style={{ height: isVisible ? "35px" : "0px" }}
              ></div>
              <div
                className="absolute bottom-0 right-0 h-0.5 bg-rust transition-all duration-700 ease-out delay-300"
                style={{ width: isVisible ? "44px" : "0px" }}
              ></div>
              <div
                className="absolute bottom-0 right-0 w-0.5 bg-rust transition-all duration-700 ease-out delay-300"
                style={{ height: isVisible ? "35px" : "0px" }}
              ></div>

              <h2 className="text-lg md:text-2xl font-semibold text-rust px-4 py-2">
                Things That Are Annoying
              </h2>
            </div>
            <div className="text-gray-800 space-y-3 pl-5">
              <div className="flex items-start">
                <span className="text-rust font-bold text-lg mr-3 flex-shrink-0">
                  ✕
                </span>
                <p>
                  Manually checking websites for updates (prices, news, job
                  postings)
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-rust font-bold text-lg mr-3 flex-shrink-0">
                  ✕
                </span>
                <p>Copying data between spreadsheets and different tools</p>
              </div>
              <div className="flex items-start">
                <span className="text-rust font-bold text-lg mr-3 flex-shrink-0">
                  ✕
                </span>
                <p>
                  Setting up servers, databases, and deployment just to automate
                  one simple task
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-rust font-bold text-lg mr-3 flex-shrink-0">
                  ✕
                </span>
                <p>
                  Remembering to do repetitive tasks that could obviously be
                  automated
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-rust font-bold text-lg mr-3 flex-shrink-0">
                  ✕
                </span>
                <p>Learning complex frameworks just to make a simple webhook</p>
              </div>
            </div>
          </div>

          {/* Darklang for Lazy People */}
          <div className="py-8">
            <div className="relative inline-block mb-6 px-3 py-2">
              {/* L-shaped corner borders with animation */}
              <div
                className="absolute top-0 left-0 h-0.5 bg-mint transition-all duration-700 ease-out delay-500"
                style={{ width: isVisible ? "55px" : "0px" }}
              ></div>
              <div
                className="absolute top-0 left-0 w-0.5 bg-mint transition-all duration-700 ease-out delay-500"
                style={{ height: isVisible ? "35px" : "0px" }}
              ></div>
              <div
                className="absolute bottom-0 right-0 h-0.5 bg-mint transition-all duration-700 ease-out delay-800"
                style={{ width: isVisible ? "55px" : "0px" }}
              ></div>
              <div
                className="absolute bottom-0 right-0 w-0.5 bg-mint transition-all duration-700 ease-out delay-800"
                style={{ height: isVisible ? "35px" : "0px" }}
              ></div>

              <h2 className="text-lg md:text-2xl font-semibold text-mint px-4 py-2">
                Darklang: Maximum Automation, Minimum Effort
              </h2>
            </div>

            <div className="text-gray-800 space-y-3 pl-5">
              <div className="flex items-start">
                <span className="text-sm md:text-base text-mint font-bold text-lg mr-3 flex-shrink-0 ">
                  ✔
                </span>
                <p>
                  <strong>Write once, run forever:</strong> Set up automation in
                  minutes, not days
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-sm md:text-base text-mint font-bold text-lg mr-3 flex-shrink-0 ">
                  ✔
                </span>
                <p>
                  <strong>No infrastructure:</strong> No servers to maintain, no
                  databases to manage
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-sm md:text-base text-mint font-bold text-lg mr-3 flex-shrink-0 ">
                  ✔
                </span>
                <p>
                  <strong>Instant deployment:</strong> Your automation is live
                  as soon as you save it
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-sm md:text-base text-mint font-bold text-lg mr-3 flex-shrink-0 ">
                  ✔
                </span>
                <p>
                  <strong>Set and forget:</strong> Handles errors, retries, and
                  monitoring automatically
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Perfect For Lazy People */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Perfect for People Who Want To:
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-lbg mb-4">
                Automate Boring Tasks
              </h3>
              <p className="text-gray-700 mb-4">
                Those repetitive tasks you do every day? Automate them. Spend
                your time on interesting things instead.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Examples:</strong> Data entry, report generation, file
                organization, status updates, reminder emails
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-purple-lbg mb-4">
                Never Check Things Manually
              </h3>
              <p className="text-gray-700 mb-4">
                Stop manually checking websites for updates. Get notifications
                when something actually changes.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Use cases:</strong> Price drops, job postings, news
                updates, stock prices, website changes
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-mint mb-4">
                Connect All Your Tools
              </h3>
              <p className="text-gray-700 mb-4">
                Make your apps talk to each other so you don't have to copy and
                paste data between them like a caveman.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Pattern:</strong> New email → extract info → update
                spreadsheet → send Slack notification
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-taupe mb-4">
                Build Tools For Yourself
              </h3>
              <p className="text-gray-700 mb-4">
                Create custom utilities that solve your specific problems. No
                more "close enough" generic solutions.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Examples:</strong> Personal dashboards, custom
                calculators, workflow tools, data converters
              </div>
            </div>
          </div>
        </div>

        {/* Lazy Automation Examples */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Lazy Person's Greatest Hits
          </h2>

          <div className="space-y-8 pl-1">
            <div className="border-l-4 border-blue-lbg pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                The "I Don't Want to Check This" Automation
              </h3>
              <p className="text-gray-700 mb-4">
                Set up monitors for things you care about but don't want to
                manually check. Get a text when your favorite item goes on sale,
                when someone mentions your project online, or when your
                competitor changes their pricing.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-sm text-gray-600">
                  <strong>Setup time:</strong> 5 minutes.{" "}
                  <strong>Time saved per month:</strong> Hours of mindless
                  checking.
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-lbg pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                The "Why Am I Doing This Manually?" Fix
              </h3>
              <p className="text-gray-700 mb-4">
                Those tasks you do weekly that involve copying data from one
                place to another? Stop that. Build a simple automation that does
                it for you while you sleep.
              </p>
              <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                <div>// Every Monday at 9 AM</div>
                <div>CRON "0 9 * * MON"</div>
                <div>generateWeeklyReport()</div>
                <div>sendToSlack(report)</div>
              </div>
            </div>

            <div className="border-l-4 border-mint pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                The "I Keep Forgetting This" Reminder
              </h3>
              <p className="text-gray-700 mb-4">
                Instead of setting phone reminders like a peasant, build smart
                reminders that check conditions and only bug you when it
                actually matters.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-sm text-gray-600">
                  <strong>Example:</strong> "Remind me to water plants, but only
                  if it hasn't rained in 3 days and the soil moisture sensor
                  says it's dry."
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Effort vs Results */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Effort vs Results: Traditional vs Darklang
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-rust mb-4">
                Traditional Automation
              </h3>
              <div className="bg-rust/5 p-4 rounded text-sm space-y-2">
                <div>• Learn Docker, Kubernetes, AWS</div>
                <div>• Set up CI/CD pipelines</div>
                <div>• Configure monitoring and alerting</div>
                <div>• Write deployment scripts</div>
                <div>• Manage servers and dependencies</div>
                <div>• Debug production issues at 2 AM</div>
                <div>• Monthly hosting bills for simple scripts</div>
              </div>
              <div className="mt-4 text-center">
                <div className="text-lg font-bold text-rust">
                  Effort: HIGH 🔥
                </div>
                <div className="text-sm text-gray-600">
                  Results: Eventually, maybe
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-lbg mb-4">
                Darklang Automation
              </h3>
              <div className="bg-mint/8 p-4 rounded text-sm space-y-2">
                <div>• Write your logic in the browser</div>
                <div>• Save the function</div>
                <div>• It's running immediately</div>
                <div>• Built-in scheduling and monitoring</div>
                <div>• Automatic error handling and retries</div>
                <div>• No servers, no infrastructure</div>
                <div>• Pay only for what you use</div>
              </div>
              <div className="mt-4 text-center">
                <div className="text-lg font-bold text-mint">
                  Effort: MINIMAL 😎
                </div>
                <div className="text-sm text-gray-600">Results: Immediate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Lazy Programming Patterns */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Lazy Programming Patterns That Actually Work
          </h2>

          <div className="text-gray-700 leading-relaxed space-y-6 pl-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-lbg mb-3">
                The "Set It and Forget It" Pattern
              </h3>
              <p className="mb-3">
                Build automations that handle edge cases gracefully, retry when
                things fail, and only notify you when human intervention is
                actually needed.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Key:</strong> Good error handling means you never have
                to babysit your automations.
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-lbg mb-3">
                The "Do It While I Sleep" Scheduler
              </h3>
              <p className="mb-3">
                Schedule all your data processing, report generation, and
                maintenance tasks to run while you're asleep. Wake up to
                completed work.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Bonus:</strong> Your automations never call in sick or
                take vacation days.
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-lbg mb-3">
                The "Why Do This Twice?" Principle
              </h3>
              <p className="mb-3">
                If you've done something more than once, automate it. Future you
                will thank present you for being lazy in the right way.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Rule:</strong> If it takes more than 5 minutes and you
                do it monthly, automate it.
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-lbg mb-3">
                The "Make the Computer Remember" System
              </h3>
              <p className="mb-3">
                Don't rely on your memory for anything. Build systems that
                remember things for you and remind you only when action is
                needed.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Examples:</strong> Smart todo lists, context-aware
                reminders, automated follow-ups based on responses
              </div>
            </div>
          </div>
        </div>

        {/* ROI of Laziness */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The ROI of Strategic Laziness
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 pl-1">
            <p>
              Being lazy isn't about doing less work. It's about being smart
              enough to automate the boring stuff so you can focus on things
              that actually matter.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">
                Time Investment Analysis
              </h3>
              <div className="text-sm text-gray-600 space-y-2">
                <div>
                  <strong>Task you do weekly (2 hours):</strong> 104 hours/year
                </div>
                <div>
                  <strong>Time to automate with Darklang:</strong> 1 hour
                </div>
                <div>
                  <strong>Time saved in first year:</strong> 103 hours
                </div>
                <div>
                  <strong>Payback period:</strong> ~3 weeks
                </div>
              </div>
            </div>

            <p>
              The best kind of lazy is the kind that saves you hundreds of hours
              a year after a small upfront investment.
            </p>
          </div>
        </div>

        {/* Getting Started Guide for Lazy People */}
        <div className="bg-taupe/5 rounded-lg p-8 mb-20">
          <h2 className="text-2xl font-bold text-taupe mb-4">
            Lazy Person's Getting Started Guide
          </h2>
          <div className="text-gray-600 space-y-4">
            <div className="flex items-start">
              <span className="mr-3">1️-</span>
              <p>
                <strong>Identify your most annoying repetitive task</strong>{" "}
                (the one that makes you groan when you have to do it)
              </p>
            </div>
            <div className="flex items-start">
              <span className="mr-3">2️-</span>
              <p>
                <strong>Spend 30 minutes automating it with Darklang</strong>{" "}
                (seriously, that's probably enough)
              </p>
            </div>
            <div className="flex items-start">
              <span className="mr-3">3️-</span>
              <p>
                <strong>Enjoy never having to do that task again</strong> (and
                the smug satisfaction of being cleverly lazy)
              </p>
            </div>
            <div className="flex items-start">
              <span className="mr-3">4️-</span>
              <p>
                <strong>Repeat with the next most annoying task</strong> (until
                you've automated everything boring)
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Work Smarter, Not Harder
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 pl-1">
            <p className="text-lg">
              You're too smart to keep doing things manually. And life's too
              short to spend it on repetitive tasks.
            </p>
            <p>
              Darklang lets you automate all the boring stuff with minimal
              effort. Be the person who has mysterious amounts of free time
              because you were smart enough to make the computer do the work.
            </p>
            <p className="text-lg font-medium text-blue-lbg">
              Maximum automation, minimum effort.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LazyPeople;
