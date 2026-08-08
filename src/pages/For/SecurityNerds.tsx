import React from "react";
import EarlyContentDisclaimer from "../../components/EarlyContentDisclaimer";
import RelatedForPages from "../../components/RelatedForPages";
import { Contrast, FeatureCard, Glyph } from "./components";

const SecurityNerds: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl 2xl:max-w-7xl mx-auto">
        <EarlyContentDisclaimer />
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Darklang for Security Professionals
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-4xl 2xl:max-w-5xl mx-auto">
            Secure by design. Build security tools and automation with a
            platform that eliminates entire classes of vulnerabilities.
          </p>
        </div>

        {/* Security Context and Security by Design */}
        <div className="mb-16">
          <Contrast
            beforeTitle="Traditional Security Challenges"
            afterTitle="Darklang: Security by Design"
            before={[
              "Container vulnerabilities, supply chain attacks, dependency hell",
              "Configuration drift, infrastructure misconfigurations, YAML hell",
              "SQL injection, XSS, CSRF, and injection vulnerabilities",
              "Secrets management, credential rotation, access control complexity",
              "Monitoring and incident response across fragmented infrastructure",
            ]}
            after={[
              <>
                <strong>No containers:</strong> Eliminate container
                vulnerabilities and supply chain attacks
              </>,
              <>
                <strong>No SQL injection:</strong> Type-safe database
                operations, no raw queries
              </>,
              <>
                <strong>No secrets in code:</strong> Built-in secrets management
                and rotation
              </>,
              <>
                <strong>Immutable deployments:</strong> Function-level
                deployment, no configuration drift
              </>,
            ]}
          />
        </div>

        {/* Perfect For Security Professionals */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Perfect for Security Professionals Who:
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-blue-lbg mb-4">
                Build Security Tools
              </h3>
              <p className="text-gray-700 mb-4">
                Create security monitoring, threat detection, and incident
                response tools without worrying about the security of your
                tooling infrastructure.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Use cases:</strong> SIEM connectors, threat intel
                aggregation, vulnerability scanners, compliance automation
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-purple-lbg mb-4">
                Automate Security
              </h3>
              <p className="text-gray-700 mb-4">
                Automate security workflows, response procedures, and compliance
                checks. Reliable automation without complex orchestration
                platforms.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Examples:</strong> Automated remediation, access
                reviews, security scanning, incident triage
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-mint mb-4">
                Process Security Data
              </h3>
              <p className="text-gray-700 mb-4">
                Ingest, analyze, and correlate security data from multiple
                sources. Built-in data processing without complex ETL pipelines.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Pattern:</strong> Webhook ingestion → data normalization
                → threat detection → automated response
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-taupe mb-4">
                Rapid Response
              </h3>
              <p className="text-gray-700 mb-4">
                Build incident response tools that deploy instantly. No time
                wasted on infrastructure during security incidents.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Scenario:</strong> Zero-day discovered → detection rule
                deployed in minutes → automated containment
              </div>
            </div>
          </div>
        </div>

        {/* Security Features Deep Dive */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Built-in Security Features
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <FeatureCard
              h="Memory Safety"
              tone="blue"
              icon={
                <Glyph>
                  <path d="M12 3l8 3.5v5c0 4.6-3.3 8.4-8 9.5-4.7-1.1-8-4.9-8-9.5v-5z" />
                </Glyph>
              }
              detail={
                <>
                  <strong className="text-gray-900">Eliminated:</strong> buffer
                  overflows, double-free errors, memory leaks, dangling pointers
                </>
              }
            >
              A garbage-collected runtime eliminates buffer overflows,
              use-after-free, and memory corruption vulnerabilities. No manual
              memory management means no memory-related security bugs.
            </FeatureCard>

            <FeatureCard
              h="Type Safety"
              tone="purple"
              icon={
                <Glyph>
                  <path d="M20.6 13.4L12 22l-9-9V4h9z" />
                  <circle cx="7.5" cy="7.5" r="1.2" />
                </Glyph>
              }
              detail={
                <>
                  <strong className="text-gray-900">Features:</strong> Option
                  types (no null), Result types (no exceptions), exhaustive
                  pattern matching
                </>
              }
            >
              Strong static typing prevents entire classes of vulnerabilities.
              No null pointer exceptions, no type confusion attacks, no
              undefined behavior.
            </FeatureCard>

            <FeatureCard
              h="Injection Prevention"
              tone="teal"
              icon={
                <Glyph>
                  <rect x="5" y="11" width="14" height="9" rx="2" />
                  <path d="M8 11V8a4 4 0 018 0v3" />
                </Glyph>
              }
              detail={
                <span className="block font-code text-xs 2xl:text-sm">
                  <span className="text-gray-400">
                    // impossible in Darklang:
                  </span>
                  <br />
                  <span className="line-through">
                    "SELECT * FROM users WHERE id = " + userInput
                  </span>
                  <br />
                  <span className="text-gray-400">// only this:</span>
                  <br />
                  <span className="text-purple-dbg">DB.get Users userId</span>
                </span>
              }
            >
              Type-safe database operations and structured data handling
              eliminate SQL injection and other injection attacks. No raw string
              concatenation for queries or commands.
            </FeatureCard>

            <FeatureCard
              h="Secrets Management"
              tone="amber"
              icon={
                <Glyph>
                  <circle cx="8" cy="12" r="3" />
                  <path d="M11 12h9l-2 2M17 12v3" />
                </Glyph>
              }
              detail={
                <>
                  <strong className="text-gray-900">Features:</strong> encrypted
                  at rest, automatic rotation, audit logging, fine-grained
                  access control
                </>
              }
            >
              Built-in secrets management with automatic rotation and secure
              access patterns. No hardcoded credentials, no environment variable
              leaks.
            </FeatureCard>
          </div>
        </div>

        {/* Security Tools & Automation */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Security Tools & Automation Patterns
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-lbg mb-3">
                Threat Intelligence Aggregation
              </h3>
              <p className="mb-3">
                Collect threat intel from multiple feeds, normalize formats,
                enrich with context, and distribute to security tools. All with
                built-in deduplication and validation.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Pipeline:</strong> Multiple feeds → normalization →
                enrichment → deduplication → distribution to SIEM/EDR
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-lbg mb-3">
                Automated Incident Response
              </h3>
              <p className="mb-3">
                Receive security alerts, enrich with context, determine
                severity, and trigger appropriate response workflows. Human
                escalation only when needed.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Flow:</strong> Alert webhook → context enrichment →
                severity assessment → automated containment → human notification
                if needed
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-lbg mb-3">
                Compliance Monitoring
              </h3>
              <p className="mb-3">
                Continuously monitor infrastructure and applications for
                compliance violations. Generate reports, track remediation, and
                maintain audit trails.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Features:</strong> Policy-as-code, automated scanning,
                exception tracking, audit reporting
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-lbg mb-3">
                Security Data Lake
              </h3>
              <p className="mb-3">
                Centralize security logs and events from multiple sources.
                Correlation, analysis, and long-term retention with built-in
                data processing.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Capabilities:</strong> Multi-source ingestion, real-time
                processing, historical analysis, threat hunting queries
              </div>
            </div>
          </div>
        </div>

        {/* Zero Trust Architecture */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Zero Trust by Default
          </h2>

          <div className="text-gray-700 leading-relaxed space-y-4 pl-1">
            <p>
              Darklang's architecture aligns with zero trust principles. Every
              function is isolated, every request is authenticated, and every
              operation is logged.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Function-Level Isolation
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span>Each function runs in complete isolation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span>No shared memory or file system access</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span>Immutable execution environment</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Built-in Observability
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-lbg rounded-full mr-3"></span>
                    <span>Every function call is traced and logged</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-lbg rounded-full mr-3"></span>
                    <span>Complete audit trail of all operations</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-lbg rounded-full mr-3"></span>
                    <span>Real-time security monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Community */}
        <div className=" mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Security Community & Contributions
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 pl-1">
            <p>
              Security professionals are invited to contribute to Darklang's
              security model. The language design prioritizes security, but
              community input shapes the implementation.
            </p>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h3 className="font-semibold text-gray-800 mb-3">
                Areas for Contribution
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  <span>Security-focused standard library functions</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  <span>Cryptographic primitives and protocols</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  <span>Security scanning and analysis tools</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  <span>Compliance frameworks and templates</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Security Without Compromise
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 pl-1">
            <p className="text-lg">
              You shouldn't have to choose between security and productivity.
              Between rapid development and secure deployment.
            </p>
            <p>
              Darklang eliminates entire classes of vulnerabilities by design,
              letting you focus on building robust security tools and automation
              rather than securing your development stack.
            </p>
            <p className="text-lg font-medium text-blue-lbg">
              Build security tools as secure as your requirements.
            </p>
          </div>
        </div>

        {/* Related For Pages Section */}
        <RelatedForPages currentPath="security-nerds" />
      </div>
    </div>
  );
};

export default SecurityNerds;
