import React from "react";
import CodeDisplay from "../../common/ui/CodeDisplay";

const Language: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            The Darklang Programming Language
          </h1>
          <div className="w-24 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-4xl mx-auto">
            A functional-imperative language influenced by OCaml, Rust, Elm, and
            F#. Simple, straightforward, and complete—with no nulls, no
            exceptions, and immutable values by default.
          </p>
        </div>

        {/* Language Overview */}
        <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 p-8 mb-20 shadow-sm border border-purple-100">
          {/* Decorative elements */}
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-purple-100/40 blur-2xl"></div>
          <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-indigo-100/40 blur-2xl"></div>

          <div className="relative">
            {/* Icon + Title header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center rounded-full bg-purple-100 p-2 text-purple-lbg">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-purple-dbg">
                Language Design
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Darklang is designed for clarity and correctness. We take the best
              ideas from functional programming—immutability, algebraic data
              types, pattern matching—without the academic complexity.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>The goal is simple:</strong> make it easy to write correct
              programs that handle errors gracefully and scale without
              surprises.
            </p>
          </div>
        </section>

        {/* Code Example */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What Darklang Code Looks Like
          </h2>
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-200 p-4 md:p-8">
            <CodeDisplay
              language="fsharp"
              showLineNumbers={false}
              code={`// Custom types
type Person = { age: Int, name: String }

type Phone =
 | IPhone(Color, Size, model: String)
 | Android(manufacturer: String, model: String)
 | Landline

// Functions with pipeline operators
fn sumOfEvenSquares (nums: List<Int>): Int =
 nums
 |> List.filter (\\x -> Int.isEven x)
 |> List.map (\\x -> x * x)
 |> Int.sum`}
            />
          </div>
        </div>

        {/* Type System */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Type System</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Primitive Types */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Primitive Types
              </h3>
              <div className="text-sm text-gray-600 space-y-2">
                <div className="flex justify-between">
                  <span className="font-mono text-blue-lbg">Int</span>
                  <span>64-bit integers</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-blue-lbg">Float</span>
                  <span>64-bit floats</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-blue-lbg">Bool</span>
                  <span>true/false</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-blue-lbg">String</span>
                  <span>Unicode strings</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-blue-lbg">Char</span>
                  <span>Single characters</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-blue-lbg">Unit</span>
                  <span>No value ()</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded text-sm">
                <strong>No nulls:</strong> Darklang has no null values. Use
                Option&lt;T&gt; for optional values.
              </div>
            </div>

            {/* Collection Types */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Collection Types
              </h3>
              <div className="text-sm text-gray-600 space-y-2">
                <div className="flex justify-between">
                  <span className="font-mono text-purple-lbg">
                    List&lt;T&gt;
                  </span>
                  <span>Ordered collections</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-purple-lbg">
                    Dict&lt;T&gt;
                  </span>
                  <span>Key-value maps</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-purple-lbg">
                    Tuple&lt;A,B&gt;
                  </span>
                  <span>Fixed-size pairs</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-purple-lbg">
                    Option&lt;T&gt;
                  </span>
                  <span>Some(value) | None</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-purple-lbg">
                    Result&lt;T,E&gt;
                  </span>
                  <span>Ok(value) | Error(err)</span>
                </div>
              </div>
              <div className="mt-12 p-3 bg-purple-50 rounded text-sm">
                <strong>Immutable by default:</strong> All values are immutable.
                Create new versions instead of modifying.
              </div>
            </div>

            {/* Custom Types */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Custom Types
              </h3>
              <div className="text-sm text-gray-600 space-y-3">
                <div>
                  <div className="font-mono text-taupe mb-1">Records</div>
                  <div className="text-xs bg-gray-100 p-2 rounded">
                    type Person = &#123; name: String, age: Int &#125;
                  </div>
                </div>
                <div>
                  <div className="font-mono text-taupe mb-1">
                    Unions (Enums)
                  </div>
                  <div className="text-xs bg-gray-100 p-2 rounded">
                    type Color = Red | Green | Blue(Int)
                  </div>
                </div>
                <div>
                  <div className="font-mono text-taupe mb-1">Type Aliases</div>
                  <div className="text-xs bg-gray-100 p-2 rounded">
                    type UserId = String
                  </div>
                </div>
              </div>
            </div>

            {/* Error Handling */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Error Handling
              </h3>
              <div className="text-sm text-gray-600 space-y-3">
                <div>
                  <div className="font-semibold mb-1">Result Types</div>
                  <div className="mb-2">
                    Explicit error handling with Result&lt;T,E&gt; instead of
                    exceptions
                  </div>
                  <div className="text-xs bg-gray-100 p-2 rounded">
                    fn parseUser(data: String): Result&lt;User, String&gt; =
                    <br />
                    &nbsp;&nbsp;// Returns Ok(user) or Error(message)
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-1">? Operator</div>
                  <div className="mb-2">
                    Automatically unwrap Ok values or propagate Error
                  </div>
                  <div className="text-xs bg-gray-100 p-2 rounded">
                    let user = parseUser(data)?
                    <br />
                    let profile = fetchProfile(user.id)?
                    <br />
                    // Short-circuits on first Error
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Pattern Matching</div>
                  <div className="mb-2">
                    Handle success and error cases explicitly
                  </div>
                  <div className="text-xs bg-gray-100 p-2 rounded">
                    match parseUser(data) with
                    <br />
                    | Ok(user) -&gt; processUser(user)
                    <br />| Error(msg) -&gt; logError(msg)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Error Types */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Error Handling in Darklang
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Parse-Time Errors */}
            <div className="bg-yellow-50 rounded-lg shadow-lg p-6 border-l-4 border-yellow-500">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Parse-Time Errors
              </h3>
              <div className="text-sm text-gray-600 space-y-3">
                <div>
                  <span className="font-semibold">Syntax errors:</span> Invalid
                  syntax caught during parsing
                </div>
                <div>
                  <span className="font-semibold">Name resolution:</span>{" "}
                  Undefined variables or functions
                </div>
                <div className="mt-4 p-3 bg-yellow-100 rounded text-xs">
                  <span className="font-semibold text-yellow-800">
                    Coming Soon:
                  </span>
                  <div className="mt-1 space-y-1">
                    <div>• Type errors</div>
                    <div>• Exhaustiveness checking</div>
                    <div>• Unused variable warnings</div>
                    <div>• Pattern match coverage</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Runtime Errors */}
            <div className="bg-red-50 rounded-lg shadow-lg p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Runtime Errors
              </h3>
              <div className="text-sm text-gray-600 space-y-2">
                <div>
                  • <span className="font-semibold">Type mismatches:</span>{" "}
                  Wrong types in operations
                </div>
                <div>
                  • <span className="font-semibold">Math errors:</span> Division
                  by zero, overflow
                </div>
                <div>
                  • <span className="font-semibold">Pattern failures:</span>{" "}
                  Unmatched patterns
                </div>
                <div>
                  • <span className="font-semibold">List/Dict errors:</span>{" "}
                  Type mismatches in collections
                </div>
                <div>
                  • <span className="font-semibold">Function errors:</span>{" "}
                  Wrong argument types/counts
                </div>
                <div>
                  • <span className="font-semibold">Unwrap failures:</span> None
                  or Error values
                </div>
              </div>
              <div className="mt-4 p-3 bg-red-100 rounded text-xs">
                <span className="font-semibold text-red-800">Note:</span>{" "}
                Runtime errors are being eliminated through better static
                analysis
              </div>
            </div>

            {/* Expected Errors */}
            <div className="bg-green-50 rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Expected Errors
              </h3>
              <div className="text-sm text-gray-600 space-y-3">
                <div>
                  <span className="font-semibold">Result types:</span> Explicit
                  error handling
                </div>
                <div className="text-xs bg-white p-2 rounded font-mono">
                  Result&lt;Success, Error&gt;
                </div>
                <div>
                  <span className="font-semibold">Option types:</span> Handling
                  missing values
                </div>
                <div className="text-xs bg-white p-2 rounded font-mono">
                  Option&lt;Value&gt; // Some | None
                </div>
                <div className="mt-3 text-xs text-green-700">
                  <span className="font-semibold">✓ Best practice:</span> Use
                  Result/Option types for expected failures instead of runtime
                  errors
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Language Features */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Language Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">
                Functional Programming
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div>
                  <span className="font-semibold">Immutable by default:</span>{" "}
                  Values don't change after creation
                </div>
                <div>
                  <span className="font-semibold">First-class functions:</span>{" "}
                  Pass functions as arguments
                </div>
                <div>
                  <span className="font-semibold">Pipeline operators:</span>{" "}
                  Chain operations with |&gt;
                </div>
                <div>
                  <span className="font-semibold">Pattern matching:</span>{" "}
                  Destructure data with match expressions
                </div>
                <div>
                  <span className="font-semibold">Algebraic data types:</span>{" "}
                  Model domain with unions and records
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-4">
                Practical Design
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div>
                  <span className="font-semibold">Gradual typing:</span> Start
                  untyped, add types as needed
                </div>
                <div>
                  <span className="font-semibold">Unicode strings:</span>{" "}
                  Characters are what you see on screen
                </div>
                <div>
                  <span className="font-semibold">Error operators:</span> ? for
                  unwrapping, ! for panicking
                </div>
                <div>
                  <span className="font-semibold">Imperative style:</span> Use
                  let bindings and loops when clear
                </div>
                <div>
                  <span className="font-semibold">Async by default:</span> All
                  I/O operations are async
                </div>
                <div>
                  <span className="font-semibold">Unicode-first strings:</span>{" "}
                  Characters are what you see on screen
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">
              Unicode-First Strings
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Unlike languages from last millennium that use bytes or UTF-16
              characters, Darklang strings are built around "extended grapheme
              clusters"—what you actually see on screen.
            </p>
            <div className="text-xs bg-white p-2 rounded font-mono">
              String.length "👨‍👩‍👧‍👦" // 1 (family emoji)
              <br />
              String.length "café" // 4 (including accented é)
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Working with codepoints and bytes is still available when needed.
            </p>
          </div>
        </div>

        {/* More Code Examples */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            More Language Examples
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-200 p-4 md:p-8">
              <CodeDisplay
                language="fsharp"
                showLineNumbers={false}
                code={`// Pattern matching on union types
fn describePhone (phone: Phone): String =
 match phone with
 | IPhone(color, size, model) ->
  "{color} {size} iPhone {model}"
 | Android(manufacturer, model) ->
  "{manufacturer} {model}"
 | Landline ->
  "Old school phone"`}
              />
            </div>

            <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-200 p-4 md:p-8">
              <CodeDisplay
                language="fsharp"
                showLineNumbers={false}
                code={`// Error handling with Result types
fn parseAndDouble (input: String): Result<Int, String> =
 let number = Int.parse input?
 let doubled = number * 2
 Ok(doubled)

// Usage with pattern matching
match parseAndDouble("42") with
| Ok(result) -> print "Success: {result}"
| Error(msg) -> print "Failed: {msg}"`}
              />
            </div>

            <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-200 p-4 md:p-8">
              <CodeDisplay
                language="fsharp"
                showLineNumbers={false}
                code={`// Working with collections
let numbers = [1, 2, 3, 4, 5]
let result =
 numbers
 |> List.filter (\\x -> x > 2)
 |> List.map (\\x -> x * x)
 |> List.sum
// result is 50 (3² + 4² + 5²)`}
              />
            </div>
          </div>
        </div>

        {/* Why a New Language */}
        <div className="bg-gray-50 rounded-lg p-8 mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why a New Language?
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p className="text-lg">
              "Why not just build Darklang on top of JavaScript or some other
              existing language?"
            </p>
            <p>
              <strong>The real answer:</strong> Because the language is part of
              the whole integrated package. When we control the language, we can
              build capabilities that are impossible with existing languages.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 my-6">
              <h3 className="font-semibold text-gray-800 mb-4">
                What Integration Enables
              </h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Expression-level debugging:</strong> Each expression
                    has a unique ID. We can show you exactly what value flowed
                    through any part of your code in production.
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Self-hosting tools:</strong> Our parser is written
                    in Darklang. Our static analysis runs in Darklang. The
                    language understands itself completely.
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>AI code assistance:</strong> Since we control the
                    AST, we can expose structured information to AI models for
                    better code generation and error correction.
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Live code migration:</strong> We can automatically
                    refactor your code when functions change, because we
                    understand the semantic structure, not just text.
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <div>
                    <strong>Built-in performance profiling:</strong> Every
                    function call is instrumented by default. We know where your
                    code spends time without external profilers.
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Using Existing Languages
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Limited to external tooling and plugins</li>
                  <li>• Text-based analysis and transformations</li>
                  <li>• Separate compilation and runtime phases</li>
                  <li>• Debugging through external tools</li>
                  <li>• Legacy assumptions baked into syntax</li>
                  <li>• No integration with platform features</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Darklang's Integration
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Deep AST-level understanding</li>
                  <li>• Semantic analysis and transformations</li>
                  <li>• Language runtime IS the platform</li>
                  <li>• Expression-level tracing built-in</li>
                  <li>• Designed for modern constraints</li>
                  <li>• Platform features integrated into syntax</li>
                </ul>
              </div>
            </div>
            <p className="text-lg font-medium text-blue-lbg">
              When the language is designed as part of the platform, we can
              build developer experiences that are impossible with bolt-on
              tools.
            </p>
          </div>
        </div>

        {/* Learn More */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learn More</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              This page covers the basics of Darklang's language design and
              syntax. For complete language documentation, examples, and
              tutorials, visit our documentation site.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <a
                href="/getting-started"
                className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <h3 className="font-semibold text-blue-dbg mb-2">
                  Getting Started
                </h3>
                <p className="text-sm text-blue-lbg">
                  Install Darklang and write your first function
                </p>
              </a>
              <a
                href="https://docs.darklang.com"
                className="block p-4 bg-mint/10 rounded-lg hover:bg-mint/20 transition-colors"
              >
                <h3 className="font-semibold text-mint mb-2">
                  Language Reference
                </h3>
                <p className="text-sm text-mint">
                  Complete documentation and API reference
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
