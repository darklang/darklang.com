import React, { useState, useEffect } from "react";
import EarlyContentDisclaimer from "../../components/EarlyContentDisclaimer";
import RelatedForPages from "../../components/RelatedForPages";

const AIDevelopers: React.FC = () => {
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
            Darklang for AI Developers
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-4xl 2xl:max-w-5xl mx-auto">
            The first language designed for the AI era. Build AI applications
            without the infrastructure complexity.
          </p>
        </div>

        {/* AI Development and Darklang Advantages Sections */}
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 2xl:gap-20 mb-10">
          {/* AI Development Pain Points */}
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
                Current AI Development Reality
              </h2>
            </div>
            <div className="text-gray-800 space-y-3 pl-5">
              <div className="flex items-start">
                <span className="text-rust font-bold text-lg mr-3 flex-shrink-0">
                  ✕
                </span>
                <p>
                  Managing API keys, rate limits, and model endpoints across
                  different providers
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-rust font-bold text-lg mr-3 flex-shrink-0">
                  ✕
                </span>
                <p>
                  Building complex LangChain workflows with unclear error
                  handling
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-rust font-bold text-lg mr-3 flex-shrink-0">
                  ✕
                </span>
                <p>
                  Vector database setup, embedding management, context window
                  juggling
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-rust font-bold text-lg mr-3 flex-shrink-0">
                  ✕
                </span>
                <p>
                  Deploying AI agents with proper observability and debugging
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-rust font-bold text-lg mr-3 flex-shrink-0">
                  ✕
                </span>
                <p>
                  Scaling from prototype to production with reliable
                  infrastructure
                </p>
              </div>
            </div>
          </div>

          {/* Darklang AI Advantages */}
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
                Darklang: Built for AI from Day One
              </h2>
            </div>

            <div className="text-gray-800 space-y-3 pl-5">
              <div className="flex items-start">
                <span className="text-sm md:text-base text-mint font-bold text-lg mr-3 flex-shrink-0 ">
                  ✔
                </span>
                <p>
                  <strong>Built-in model access:</strong> OpenAI, Anthropic,
                  local models—all integrated
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-sm md:text-base text-mint font-bold text-lg mr-3 flex-shrink-0 ">
                  ✔
                </span>
                <p>
                  <strong>Generous parser:</strong> AI-generated code that
                  actually runs
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-sm md:text-base text-mint font-bold text-lg mr-3 flex-shrink-0 ">
                  ✔
                </span>
                <p>
                  <strong>Trace-driven debugging:</strong> See exactly what your
                  AI agents did
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-sm md:text-base text-mint font-bold text-lg mr-3 flex-shrink-0 ">
                  ✔
                </span>
                <p>
                  <strong>Instant deployment:</strong> AI applications live in
                  seconds
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Perfect For AI Developers */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Perfect for AI Developers Who:
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-lbg mb-4">
                Build AI Agents
              </h3>
              <p className="text-gray-700 mb-4">
                Create autonomous agents with built-in function calling, memory
                management, and multi-step reasoning. No complex orchestration
                frameworks needed.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Features:</strong> Built-in tool calling, persistent
                memory, automatic error recovery
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-purple-lbg mb-4">
                Rapid Prototyping
              </h3>
              <p className="text-gray-700 mb-4">
                Test AI ideas immediately. From concept to working prototype in
                minutes, not days of infrastructure setup.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Use case:</strong> ChatGPT plugin alternatives,
                AI-powered webhooks, automated workflows
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-mint mb-4">
                Process Documents
              </h3>
              <p className="text-gray-700 mb-4">
                Extract, transform, and analyze documents with AI. Built-in
                support for PDFs, images, and structured data extraction.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Pattern:</strong> Receive document → extract text → AI
                analysis → structured output
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-taupe mb-4">
                Multi-Modal Applications
              </h3>
              <p className="text-gray-700 mb-4">
                Combine text, images, and audio processing. Vision models,
                speech recognition, and text generation—all in one platform.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Example:</strong> Image analysis API, voice-to-text
                workflows, content generation pipelines
              </div>
            </div>
          </div>
        </div>

        {/* AI-First Language Features */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            AI-First Language Design
          </h2>

          <div className="space-y-8">
            <div className="border-l-3 border-blue-lbg pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Generous Parser
              </h3>
              <p className="text-gray-700 mb-4">
                Darklang's parser is designed to understand AI-generated code.
                Other languages break when AI writes slightly incorrect
                syntax—Darklang fixes it automatically.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-sm text-gray-600">
                  <strong>Result:</strong> GitHub Copilot, ChatGPT, and Claude
                  generate code that actually works. No more syntax error
                  debugging.
                </div>
              </div>
            </div>

            <div className="border-l-3 border-purple-lbg pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Built-in Model Access
              </h3>
              <p className="text-gray-700 mb-4">
                Call language models directly from your code. No API key
                management, no HTTP client setup—models are first-class language
                features.
              </p>
              <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                <div>let response = AI.chat model prompt</div>
                <div>let summary = AI.summarize document</div>
                <div>let analysis = AI.analyze image</div>
              </div>
            </div>

            <div className="border-l-3 border-mint pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Trace-Driven AI Debugging
              </h3>
              <p className="text-gray-700 mb-4">
                See exactly what your AI agents did: which models they called,
                what prompts they used, how they reasoned through problems.
                Perfect for debugging complex workflows.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-sm text-gray-600">
                  <strong>Visibility:</strong> Model calls, token usage,
                  reasoning steps, function calls, decision trees—all traced
                  automatically.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Application Patterns */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Common AI Application Patterns
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-lbg mb-3">
                AI-Powered APIs
              </h3>
              <p className="mb-3">
                Transform any AI capability into a reliable API. Text
                generation, image analysis, document processing—expose AI
                features your applications can depend on.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Example:</strong>{" "}
                <code>POST /api/analyze-sentiment</code> → instant sentiment
                analysis with confidence scores
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-lbg mb-3">
                Intelligent Webhooks
              </h3>
              <p className="mb-3">
                Receive data, analyze it with AI, take action. Customer support
                automation, content moderation, lead qualification—all triggered
                by external events.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Pattern:</strong> Webhook → AI analysis → automated
                response → human escalation when needed
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-lbg mb-3">
                Autonomous Agents
              </h3>
              <p className="mb-3">
                Build agents that can reason, plan, and execute multi-step
                tasks. Research assistants, data analysts, content creators—with
                full observability.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Capabilities:</strong> Goal decomposition, tool usage,
                memory persistence, error recovery, human handoff
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-lbg mb-3">
                Document Intelligence
              </h3>
              <p className="mb-3">
                Extract insights from documents, images, and data files. Invoice
                processing, contract analysis, report generation—turn
                unstructured data into structured insights.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Pipeline:</strong> Upload → OCR/parsing → AI extraction
                → validation → structured output
              </div>
            </div>
          </div>
        </div>

        {/* Beyond LangChain */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Beyond LangChain Complexity
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-rust mb-4">
                Traditional AI Stack
              </h3>
              <div className="bg-rust/5 p-4 rounded text-sm space-y-2">
                <div>• Install LangChain + dependencies</div>
                <div>• Configure vector databases</div>
                <div>• Manage API keys and rate limits</div>
                <div>• Debug complex chain failures</div>
                <div>• Handle embedding/chunking logic</div>
                <div>• Deploy with Docker + K8s</div>
                <div>• Monitor with external tools</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-dbg mb-4">
                Darklang AI
              </h3>
              <div className="bg-mint/8 p-4 rounded text-sm space-y-2">
                <div>• Built-in model access</div>
                <div>• Integrated vector storage</div>
                <div>• Automatic API management</div>
                <div>• Trace-driven debugging</div>
                <div>• Language-native embedding</div>
                <div>• Instant deployment</div>
                <div>• Built-in observability</div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded border-l-3 border-blue-lbg">
            <p className="text-gray-700">
              <strong>The difference:</strong> LangChain bolts AI onto existing
              languages. Darklang is designed from the ground up for AI
              development.
            </p>
          </div>
        </div>

        {/* Production AI */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Production-Ready AI Applications
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 pl-1">
            <p>
              Moving AI from prototype to production is notoriously difficult.
              Darklang eliminates the infrastructure gap between experimentation
              and deployment.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Reliability
                </h3>
                <p className="text-sm text-gray-600">
                  Built-in retry logic, graceful degradation, and automatic
                  error recovery. AI applications that don't break.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Observability
                </h3>
                <p className="text-sm text-gray-600">
                  Complete visibility into AI decision-making. Debug complex
                  agent behaviors with full trace history.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Scalability
                </h3>
                <p className="text-sm text-gray-600">
                  Automatic scaling based on demand. From prototype to
                  production without infrastructure changes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The AI-Native Development Platform
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p className="text-lg">
              You're building the future with AI. Don't let yesterday's
              infrastructure slow you down.
            </p>
            <p>
              Darklang was designed for the AI era—where code generation,
              autonomous agents, and intelligent automation are the norm, not
              exceptions.
            </p>
            <p className="text-lg font-medium text-blue-lbg">
              Build AI applications at the speed of thought.
            </p>
          </div>
        </div>

        {/* Related For Pages Section */}
        <RelatedForPages currentPath="ai-developers" />
      </div>
    </div>
  );
};

export default AIDevelopers;
