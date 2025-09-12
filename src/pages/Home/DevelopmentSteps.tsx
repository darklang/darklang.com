import { useState, useEffect } from "react";

const DevelopmentSteps = () => {
  // Animation state for the node side
  const [activeNodeStep, setActiveNodeStep] = useState(0);
  const [activeSubSteps, setActiveSubSteps] = useState<{
    [key: string]: number;
  }>({
    setup: 1, // Start with 2 substeps completed in Setup
  });
  const [completedNodeSteps, setCompletedNodeSteps] = useState<number[]>([]);
  const [expandedSteps, setExpandedSteps] = useState<number[]>([]);

  // Animation state for the dark side
  const [darkCompletedSteps, setDarkCompletedSteps] = useState(0); // Start with none completed

  // The complete list of node.js steps with their substeps
  const nodeSteps = [
    {
      id: "setup",
      title: "Setup",
      substeps: [
        { id: "install-nodejs", title: "Install Node.js and NPM" },
        { id: "create-project", title: "Create a new Node.js project" },
        { id: "npm-init", title: "Initialize project with npm init" },
      ],
    },
    {
      id: "development",
      title: "Development",
      substeps: [
        { id: "write-code", title: "Write application code" },
        { id: "env-vars", title: "Set up environment variables" },
        { id: "dependencies", title: "Install required dependencies" },
        { id: "env-vars2", title: "Set up environment variables" },
        {
          id: "config-files",
          title: "Create configuration files (.gitignore, package.json, etc)",
        },
      ],
    },
    {
      id: "database",
      title: "Database Setup",
      substeps: [
        { id: "choose-db", title: "Choose a database system" },
        { id: "setup-db", title: "Set up database" },
        { id: "create-schema", title: "Create database schema" },
        { id: "config-connection", title: "Configure database connection" },
        { id: "setup-orm", title: "Set up ORM" },
      ],
    },
    // {
    //   id: "version-control",
    //   title: "Version Control",
    //   substeps: [
    //     { id: "init-git", title: "Initialize Git repository" },
    //     { id: "commit-push", title: "Create branch, commit, and push code" },
    //   ],
    // },
    // {
    //   id: "testing",
    //   title: "Testing",
    //   substeps: [
    //     { id: "unit-tests", title: "Write unit tests" },
    //     { id: "integration-tests", title: "Write integration tests" },
    //     { id: "test-env", title: "Set up test environment" },
    //     { id: "run-tests", title: "Run tests locally" },
    //   ],
    // },
    {
      id: "infrastructure",
      title: "Infrastructure",
      substeps: [
        { id: "choose-hosting", title: "Choose a hosting provider" },
        {
          id: "create-account",
          title: "Create an account with the hosting provider",
        },
        { id: "register-domain", title: "Register a domain name (optional)" },
        { id: "prod-db", title: "Set up production database" },
      ],
    },
    {
      id: "deployment",
      title: "Deployment",
      substeps: [
        { id: "build-process", title: "Configure Build process" },
        {
          id: "env-hosting",
          title: "Setup environment variables on hosting platform",
        },
        { id: "deploy-app", title: "Deploy application to hosting" },
        { id: "setup-cicd", title: "Set up CI/CD" },
        { id: "test-deployed", title: "Test deployed application" },
        { id: "launch", title: "Launch application to users" },
      ],
    },
  ];

  // Dark app CLI script steps
  const darkScriptSteps = [
    {
      id: "get-cli",
      title: "Open your favourite editor",
      description:
        "e.g. On VSCode download our extension or Go to editor.darklang.com or get the CLI from https://github.com/darklang/dark/releases",
    },
    {
      id: "write-code",
      title: "Write code",
      notice: "Ready to go—no setup needed",
      description:
        "write CLI scripts or create functions, types, DBs, HTTP handlers, Crons, Workers, etc.",
    },
    {
      id: "debug-code",
      title: "Debug code",
      notice: "nothing to setup",
      description: "using traces",
    },
    {
      id: "run-code",
      title: "Run code",
      description:
        "As soon as functions/types/values are created they are accessible publicly (or privately) in the package manager",
    },
    {
      id: "share-code",
      title: "Share code",
      optional: true,
      description:
        "Run $ darklang share @user/myModule.myFnName or click on the Share button to instantly generate a shareable link for your code",
    },
    {
      id: "deploy-code",
      title: "Deploy code",
      optional: true,
      description:
        "Run $ darklang deploy @user/myModule.myFnName to deploy your code to our cloud or yours",
    },
  ];

  // Use CLI script steps only
  const darkSteps = darkScriptSteps;

  // Stats
  const nodeStats = {
    timeSpent: "12mins 34s",
    dependencyIssues: "5 errors",
    packagesInstalled: "67 packages",
  };

  const darkStats = {
    timeSpent: "1mins 23s",
    dependencyIssues: "0 errors",
    packagesInstalled: "0 packages",
  };

  // Animation effect for node steps
  useEffect(() => {
    let animationTimer: ReturnType<typeof setTimeout>;

    const progressAnimation = () => {
      // Get current step info
      const currentStepIndex = activeNodeStep;

      if (currentStepIndex >= nodeSteps.length) {
        // Animation has finished all steps
        return;
      }

      const currentStep = nodeSteps[currentStepIndex];
      const currentStepId = currentStep.id;
      const substepCount = currentStep.substeps.length;
      const currentSubStepIndex = activeSubSteps[currentStepId] ?? -1;

      if (currentSubStepIndex < substepCount - 1) {
        // Move to next substep
        setActiveSubSteps(prev => ({
          ...prev,
          [currentStepId]: currentSubStepIndex + 1,
        }));
      } else {
        // Current step is complete, add to completed steps
        setCompletedNodeSteps(prev => [...prev, currentStepIndex]);

        // Move to next main step
        const nextStepIndex = currentStepIndex + 1;

        if (nextStepIndex < nodeSteps.length) {
          setTimeout(() => {
            setActiveNodeStep(nextStepIndex);

            // Pre-initialize substeps for the next step
            setActiveSubSteps(prev => ({
              ...prev,
              [nodeSteps[nextStepIndex].id]: -1,
            }));
          }, 400); // Slight delay before moving to next step
        }
      }
    };

    // Start the animation and run it every 700ms - slower for Node.js side
    animationTimer = setInterval(progressAnimation, 700);

    return () => {
      if (animationTimer) {
        clearInterval(animationTimer);
      }
    };
  }, [activeNodeStep, activeSubSteps, nodeSteps]);

  // Handle the final step completion (when the deployment step is done)
  useEffect(() => {
    // If the last step is in the completed steps, we should mark all as completed
    if (completedNodeSteps.includes(nodeSteps.length - 1)) {
      setActiveNodeStep(nodeSteps.length); // Move past the last step
    }
  }, [completedNodeSteps, nodeSteps.length]);

  // Animation effect for Dark steps
  useEffect(() => {
    if (darkCompletedSteps < darkSteps.length) {
      const darkInterval = setInterval(() => {
        setDarkCompletedSteps(prev =>
          prev < darkSteps.length ? prev + 1 : prev,
        );
      }, 1200); // Keep this at the faster speed

      return () => clearInterval(darkInterval);
    }
  }, [darkCompletedSteps, darkSteps.length]);

  // Helper to determine if a step is complete
  const isNodeStepComplete = (index: number) => {
    return completedNodeSteps.includes(index) || index < activeNodeStep;
  };

  // Helper to determine if a step is active
  const isNodeStepActive = (index: number) => {
    return index === activeNodeStep && activeNodeStep < nodeSteps.length;
  };

  // Helper to determine if a substep is complete
  const isSubStepComplete = (stepIndex: number, subStepIndex: number) => {
    if (isNodeStepComplete(stepIndex)) return true;

    const stepId = nodeSteps[stepIndex].id;
    const currentSubStep = activeSubSteps[stepId] || -1;

    return stepIndex === activeNodeStep && subStepIndex <= currentSubStep;
  };

  // Helper to determine if a Dark step is complete
  const isDarkStepComplete = (index: number) => {
    return index < darkCompletedSteps;
  };

  // Handle step click for expansion
  const handleStepClick = (stepIndex: number) => {
    setExpandedSteps(prev => {
      if (prev.includes(stepIndex)) {
        return prev.filter(i => i !== stepIndex);
      } else {
        return [...prev, stepIndex];
      }
    });
  };

  // Helper to determine if substeps should be shown
  const shouldShowSubsteps = (stepIndex: number) => {
    return isNodeStepActive(stepIndex) || expandedSteps.includes(stepIndex);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Get started in <span className="text-purple-lbg">no time</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-18">
          {/* Node.js App */}
          <div className="bg-white rounded-xl shadow-md inset-shadow-2xs p-6 md:p-10">
            <h3 className="md:text-xl font-bold mb-4">Building a Node app</h3>

            {/* Stats */}
            <div className="flex justify-between p-4 mb-6 rounded-lg bg-neutral-100">
              <div className="flex items-center">
                <div className="mr-1 md:mr-3">
                  <svg
                    className="h-3 w-3 md:h-5 md:w-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500">
                    Time Spent on Setup
                  </div>
                  <div className="text-xs text-gray-400">
                    {nodeStats.timeSpent}
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-1 md:mr-3">
                  <svg
                    className="h-3 w-3 md:h-5 md:w-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500">
                    Dependency Issues
                  </div>
                  <div className="text-xs text-gray-400">
                    {nodeStats.dependencyIssues}
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-1 md:mr-3">
                  <svg
                    className="h-3 w-3 md:h-5 md:w-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500">
                    Packages Installed
                  </div>
                  <div className="text-xs text-gray-400">
                    {nodeStats.packagesInstalled}
                  </div>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="relative ml-7">
              {/* Vertical line */}
              <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-gray-200"></div>

              {/* All steps */}
              <div className="space-y-6">
                {nodeSteps.map((step, stepIndex) => (
                  <div key={step.id} className="relative">
                    {/* Main step with circle */}
                    <div
                      className="flex mb-2 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
                      onClick={() => handleStepClick(stepIndex)}
                    >
                      <div
                        className={`absolute left-0 w-5 h-5 -ml-2.5 rounded-full flex items-center justify-center ${
                          isNodeStepComplete(stepIndex)
                            ? "bg-purple-lbg"
                            : isNodeStepActive(stepIndex)
                              ? "bg-purple-lbg"
                              : "bg-white border-2 border-gray-300"
                        }`}
                      >
                        {(isNodeStepComplete(stepIndex) ||
                          isNodeStepActive(stepIndex)) && (
                          <svg
                            className="h-3 w-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="ml-8 text-sm 2xl:text-base font-medium">
                        <span>{step.title}</span>
                      </div>
                    </div>

                    {/* Show substeps based on animation or user interaction */}
                    {shouldShowSubsteps(stepIndex) && (
                      <div className="ml-10 mt-2 space-y-6">
                        {step.substeps.map((substep, subIndex) => {
                          const isCompleted = isSubStepComplete(
                            stepIndex,
                            subIndex,
                          );
                          const isInProgress =
                            stepIndex === activeNodeStep &&
                            subIndex === (activeSubSteps[step.id] || -1) + 1;

                          return (
                            <div key={substep.id} className="relative">
                              {/* Substep line */}
                              <div className="absolute left-0 top-0 -bottom-6 -mt-1 w-0.5 bg-gray-200"></div>

                              {/* Substep with circle */}
                              <div className="flex items-center">
                                <div
                                  className={`absolute left-0 w-4 h-4 -ml-2 rounded-full ${
                                    isCompleted
                                      ? "bg-white border-2 border-purple-lbg"
                                      : isInProgress
                                        ? "bg-white border-2 border-gray-400 animate-pulse"
                                        : "bg-white border-2 border-gray-200"
                                  }`}
                                >
                                  {/* This creates the partial fill effect */}
                                  {isCompleted && (
                                    <div className="absolute inset-1 rounded-full bg-purple-200"></div>
                                  )}
                                </div>
                                <div className="text-sm 2xl:text-base ml-6">
                                  {substep.title}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dark App */}
          <div className="bg-white rounded-xl shadow-md inset-shadow-2xs p-6 md:p-10">
            <h3 className="text-xl font-bold mb-4">Building a Dark app</h3>

            {/* Stats */}
            <div className="flex justify-between p-4 mb-6 rounded-lg bg-neutral-100">
              <div className="flex items-center">
                <div className="mr-1 md:mr-3">
                  <svg
                    className="h-3 w-3 md:h-5 md:w-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500">
                    Time Spent on Setup
                  </div>
                  <div className="text-xs text-gray-400">
                    {darkStats.timeSpent}
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-1 md:mr-3">
                  <svg
                    className="h-3 w-3 md:h-5 md:w-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500">
                    Dependency Issues
                  </div>
                  <div className="text-xs text-gray-400">
                    {darkStats.dependencyIssues}
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-1 md:mr-3">
                  <svg
                    className="h-3 w-3 md:h-5 md:w-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500">
                    Packages Installed
                  </div>
                  <div className="text-xs text-gray-400">
                    {darkStats.packagesInstalled}
                  </div>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="relative ml-7">
              {/* Vertical line */}
              <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-gray-200"></div>

              {/* All steps */}
              <div className="space-y-6">
                {darkSteps.map((step, index) => (
                  <div key={step.id} className="relative">
                    {/* Main step with circle */}
                    <div className="flex">
                      <div
                        className={`absolute left-0 w-5 h-5 -ml-2.5 rounded-full flex items-center justify-center ${
                          isDarkStepComplete(index)
                            ? "bg-purple-lbg"
                            : "bg-white border-2 border-gray-300"
                        }`}
                      >
                        {isDarkStepComplete(index) && (
                          <svg
                            className="h-3 w-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>

                      <div className="ml-8">
                        <div className="flex items-center">
                          <span className="text-sm 2xl:text-base font-medium">
                            {step.title}
                          </span>
                          {step.optional && (
                            <span className="ml-2 px-2 py-0.5 text-xs bg-blue-lbg/10 text-blue-lbg rounded">
                              Optional
                            </span>
                          )}
                          {step.notice && (
                            <span className="ml-2 px-2 py-0.5 text-xs bg-blue-lbg/10 text-blue-lbg rounded">
                              {step.notice}
                            </span>
                          )}
                        </div>

                        {step.description && (
                          <div className="mt-1 text-xs md:text-sm text-gray-500">
                            {step.description}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentSteps;
