import React from "react";
import EarlyContentDisclaimer from "../../components/EarlyContentDisclaimer";
import RelatedForPages from "../../components/RelatedForPages";
import { Contrast, FeatureCard } from "./components";

const FSharpDevelopers: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl 2xl:max-w-7xl mx-auto">
        <EarlyContentDisclaimer />
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Darklang for F# Developers
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-4xl 2xl:max-w-5xl mx-auto">
            Functional programming with instant deployment. Skip the .NET
            ceremony, keep the type safety.
          </p>
        </div>

        {/* F# Pain Points and Darklang Advantage */}
        <div className="mb-16">
          <Contrast
            beforeTitle=".NET Deployment Complexity"
            afterTitle="Darklang: F# Philosophy, Zero Infrastructure"
            before={[
              "Project files, NuGet packages, framework targeting, runtime dependencies",
              "Docker containerization, ASP.NET Core setup, middleware configuration",
              "Azure App Service deployment, connection strings, environment configuration",
              '"It works on my machine" but breaks in production with runtime errors',
            ]}
            after={[
              <>
                <strong>Pure functional programming:</strong> Immutable by
                default, no side effects
              </>,
              <>
                <strong>Type safety without ceremony:</strong> Strong types, no
                verbose syntax
              </>,
              <>
                <strong>Pattern matching:</strong> Discriminated unions,
                exhaustive matching
              </>,
              <>
                <strong>Instant deployment:</strong> Save your function, it's
                running
              </>,
            ]}
          />
        </div>

        {/* Perfect For F# Developers */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Perfect for F# Developers Who:
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-lbg mb-4">
                Love Functional Programming
              </h3>
              <p className="text-gray-700 mb-4">
                Pure functions, immutable data, function composition—all the FP
                concepts you love, without the .NET ecosystem complexity.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Features:</strong> Pipe operators, partial application,
                higher-order functions, monadic error handling
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-purple-lbg mb-4">
                Build Domain Logic
              </h3>
              <p className="text-gray-700 mb-4">
                Model business domains with discriminated unions and pattern
                matching. Express complex business rules clearly and safely.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Use case:</strong> Domain modeling, business rule
                engines, validation pipelines
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-mint mb-4">
                Process Data Streams
              </h3>
              <p className="text-gray-700 mb-4">
                Transform data with functional pipelines. No mutable state, no
                side effects—just clean data transformations.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Pattern:</strong> Input &rarr; map &rarr; filter &rarr;
                reduce &rarr; output
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-taupe mb-4">
                Rapid Prototyping
              </h3>
              <p className="text-gray-700 mb-4">
                Test functional concepts immediately. F# REPL experience with
                instant web deployment.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Workflow:</strong> Write function &rarr; test in editor
                &rarr; deploy instantly
              </div>
            </div>
          </div>
        </div>

        {/* Functional Programming Features */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Familiar F# Concepts
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <FeatureCard
              h="Option and Result Types"
              tone="blue"
              detail={
                <span className="block font-code text-xs 2xl:text-sm">
                  match maybeUser with
                  <br />
                  | Some user -&gt; processUser user
                  <br />| None -&gt; handleMissingUser()
                </span>
              }
            >
              No null reference exceptions. Handle missing values and errors
              explicitly with Option and Result types, just like F#.
            </FeatureCard>

            <FeatureCard
              h="Discriminated Unions"
              tone="purple"
              detail={
                <span className="block font-code text-xs 2xl:text-sm">
                  type PaymentStatus =
                  <br />
                  | Pending
                  <br />
                  | Processing of amount: Float
                  <br />
                  | Completed of transactionId: String
                  <br />| Failed of error: String
                </span>
              }
            >
              Model complex domains with union types. Express business states
              and transformations clearly and safely.
            </FeatureCard>

            <FeatureCard
              h="Function Composition"
              tone="teal"
              detail={
                <span className="block font-code text-xs 2xl:text-sm">
                  data
                  <br />
                  |&gt; List.filter isValid
                  <br />
                  |&gt; List.map transform
                  <br />| List.fold combine initialValue
                </span>
              }
            >
              Compose complex operations from simple functions. Pipeline
              operators and function composition work exactly like F#.
            </FeatureCard>
          </div>
        </div>

        {/* Deployment Comparison */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Deployment: F#/.NET vs Darklang
          </h2>

          <div className="grid md:grid-cols-2 gap-8 pl-1">
            <div>
              <h3 className="text-xl font-bold text-rust mb-4">
                Traditional F#/.NET
              </h3>
              <div className="bg-rust/5 p-4 rounded text-sm space-y-2">
                <div>• Create project file (.fsproj)</div>
                <div>• Configure NuGet packages</div>
                <div>• Set up ASP.NET Core pipeline</div>
                <div>• Configure dependency injection</div>
                <div>• Build Docker container</div>
                <div>• Deploy to Azure/AWS</div>
                <div>• Configure environment variables</div>
                <div>• Monitor with Application Insights</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-lbg mb-4">Darklang</h3>
              <div className="bg-mint/8 p-4 rounded text-sm space-y-2">
                <div>• Write F#-style function</div>
                <div>• Save function</div>
                <div>• Function is live instantly</div>
                <div>• Built-in monitoring</div>
                <div>• Automatic scaling</div>
                <div>• Type-safe database access</div>
                <div>• Integrated HTTP handling</div>
                <div>• Zero infrastructure management</div>
              </div>
            </div>
          </div>
        </div>

        {/* Domain Modeling */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Domain-Driven Design
          </h2>

          <div className="text-gray-700 leading-relaxed space-y-4 pl-1">
            <p>
              F# developers excel at domain modeling with types. Darklang
              preserves this strength while eliminating infrastructure concerns.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-lbg mb-3">
                Business Rule Engines
              </h3>
              <p className="mb-3">
                Model complex business logic with discriminated unions and
                pattern matching. Express rules clearly, validate exhaustively.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Example:</strong> Insurance pricing rules, loan approval
                workflows, tax calculation engines
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-lbg mb-3">
                Event Sourcing
              </h3>
              <p className="mb-3">
                Build event-sourced systems with immutable events and fold
                functions. Reconstruct state from events with functional
                programming patterns.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Pattern:</strong> Events &rarr; fold &rarr; current
                state &rarr; new events
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-lbg mb-3">API Design</h3>
              <p className="mb-3">
                Design APIs that reflect your domain model. Type-safe
                request/response handling with automatic serialization.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Benefit:</strong> Domain types become API contracts
                automatically
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Functional Programming Without Infrastructure
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 pl-1">
            <p className="text-lg">
              You chose F# for its expressiveness, type safety, and functional
              programming model. Don't let .NET infrastructure complexity slow
              you down.
            </p>
            <p>
              Darklang gives you all the FP concepts you love—immutability,
              pattern matching, type safety—with the deployment simplicity
              you've always wanted.
            </p>
            <p className="text-lg font-medium text-blue-lbg">
              Pure functions that deploy instantly.
            </p>
          </div>
        </div>

        {/* Related For Pages Section */}
        <RelatedForPages currentPath="fsharp-developers" />
      </div>
    </div>
  );
};

export default FSharpDevelopers;
