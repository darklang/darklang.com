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
          <div className="w-32 h-1 bg-blue-lbg mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-4xl 2xl:max-w-5xl mx-auto">
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
            <p className="text-gray-700 2xl:text-lg leading-relaxed mb-4">
              Darklang is designed for clarity and correctness. We take the best
              ideas from functional programming—immutability, algebraic data
              types, pattern matching—without the academic complexity.
            </p>
            <p className="text-gray-700 2xl:text-lg leading-relaxed">
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
              showLineNumbers={true}
              code={`// Custom types
type Person = { age: Int, name: String }

type Phone =
 | IPhone(Color, Size, model: String)
 | Android(manufacturer: String, model: String)
 | Landline

// Functions with pipeline operators
let sumOfEvenSquares (nums: List<Int>): Int =
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
            <div className="bg-white rounded-lg shadow-md border border-1 border-gray-50 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Primitive Types
              </h3>
              <div className="text-sm 2xl:text-base text-gray-600 space-y-2">
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
              <div className="mt-4 p-3 bg-blue-50 rounded text-sm 2xl:text-base">
                <strong>No nulls:</strong> Darklang has no null values. Use
                Option&lt;T&gt; for optional values.
              </div>
            </div>

            {/* Collection Types */}
            <div className="bg-white rounded-lg shadow-md border border-gray-50 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Collection Types
              </h3>
              <div className="text-sm 2xl:text-base text-gray-600 space-y-2">
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
              <div className="mt-12 p-3 bg-purple-50 rounded text-sm 2xl:text-base">
                <strong>Immutable by default:</strong> All values are immutable.
                Create new versions instead of modifying.
              </div>
            </div>

            {/* Custom Types */}
            <div className="bg-white rounded-lg shadow-md border border-gray-50 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Custom Types
              </h3>
              <div className="text-sm 2xl:text-base text-gray-600 space-y-3">
                <div>
                  <div className="font-mono text-taupe mb-1">Records</div>
                  <div className="text-xs md:text-sm 2xl:text-base bg-gray-50 p-2 rounded">
                    type Person = &#123; name: String; age: Int &#125;
                  </div>
                </div>
                <div>
                  <div className="font-mono text-taupe mb-1">
                    Unions (Enums)
                  </div>
                  <div className="text-xs md:text-sm 2xl:text-base bg-gray-50 p-2 rounded">
                    type Color = Red | Green | Blue | Custom of String
                  </div>
                </div>
                <div>
                  <div className="font-mono text-taupe mb-1">Type Aliases</div>
                  <div className="text-xs md:text-sm 2xl:text-base bg-gray-50 p-2 rounded">
                    type UserId = String
                  </div>
                </div>
              </div>
            </div>

            {/* Error Handling */}
            <div className="bg-white rounded-lg shadow-md border border-gray-50 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Error Handling
              </h3>
              <div className="text-sm 2xl:text-base text-gray-600 space-y-3">
                <div>
                  <div className="font-semibold mb-1 text-rose">
                    Result Types
                  </div>
                  <div className="mb-2">
                    Explicit error handling with Result&lt;T,E&gt; instead of
                    exceptions
                  </div>
                  <div className="text-xs md:text-sm bg-gray-50 p-2 rounded">
                    let parseUser(data: String): Result&lt;User, String&gt; =
                    <br />
                    &nbsp;&nbsp;// Returns Ok(user) or Error(message)
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-1 text-rose">? Operator</div>
                  <div className="mb-2">
                    Automatically unwrap Ok values or propagate Error
                  </div>
                  <div className="text-xs md:text-sm bg-gray-50 p-2 rounded">
                    let user = parseUser(data)?
                    <br />
                    let profile = fetchProfile(user.id)?
                    <br />
                    // Short-circuits on first Error
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-1 text-rose">
                    Pattern Matching
                  </div>
                  <div className="mb-2">
                    Handle success and error cases explicitly
                  </div>
                  <div className="text-xs md:text-sm bg-gray-50 p-2 rounded">
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
            <div className="bg-yellow-50/50 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Parse-Time Errors
              </h3>
              <div className="text-sm 2xl:text-base text-gray-600 space-y-3">
                <div>
                  <span className="font-semibold">Syntax errors:</span> Invalid
                  syntax caught during parsing
                </div>
                <div>
                  <span className="font-semibold">Name resolution:</span>{" "}
                  Undefined variables or functions
                </div>
                <div className="mt-4 p-3 bg-sand/20 rounded text-xs md:text-sm 2xl:text-base">
                  <span className="font-semibold text-taupe">Coming Soon:</span>
                  <div className="mt-1 space-y-1">
                    <div>- Type errors</div>
                    <div>- Exhaustiveness checking</div>
                    <div>- Unused variable warnings</div>
                    <div>- Pattern match coverage</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Runtime Errors */}
            <div className="bg-purple-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Runtime Errors
              </h3>
              <div className="text-sm 2xl:text-base text-gray-600 space-y-2">
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
              <div className="mt-4 p-3 bg-purple-100 rounded text-xs md:text-sm 2xl:text-base">
                <span className="font-semibold text-purple-lbg">Note:</span>{" "}
                Runtime errors are being eliminated through better static
                analysis
              </div>
            </div>

            {/* Expected Errors */}
            <div className="bg-mint/10 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Expected Errors
              </h3>
              <div className=" text-gray-600 space-y-3">
                <div>
                  <span className="font-semibold 2xl:text-base">Result types:</span> Explicit
                  error handling
                </div>
                <div className="text-xs md:text-sm bg-mint/20 p-2 rounded font-mono">
                  Result&lt;Success, Error&gt;
                </div>
                <div>
                  <span className="font-semibold 2xl:text-base">Option types:</span> Handling
                  missing values
                </div>
                <div className="text-xs md:text-sm bg-mint/20 p-2 rounded font-mono">
                  Option&lt;Value&gt; // Some | None
                </div>
                <div className="mt-3 text-xs md:text-sm 2xl:text-base text-gray-900">
                  <span className="font-semibold">✓ Best practice:</span> Use
                  Result/Option types for expected failures instead of runtime
                  errors
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Language Features */}
        <div className="bg-purple-50/30 rounded-2xl border border-purple-100 p-8 mb-20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-100/40 blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-purple-100/40 blur-3xl"></div>

          <div className="relative">
            <h2 className="text-2xl font-bold text-gray-800">
              Language Features
            </h2>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              <div>
                <div className="flex items-center gap-3 my-8">
                  <div className="w-1 h-8 bg-purple-lbg rounded-full"></div>
                  <h3 className="font-semibold text-xl text-purple-dbg">
                    Functional Programming
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-lavender rounded-full flex-shrink-0 mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-900">
                        Immutable by default:
                      </span>{" "}
                      <span className="text-gray-700 2xl:text-lg">
                        Values don't change after creation
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-lavender rounded-full flex-shrink-0 mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-900">
                        First-class functions:
                      </span>{" "}
                      <span className="text-gray-700 2xl:text-lg">
                        Pass functions as arguments
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-lavender rounded-full flex-shrink-0 mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-900">
                        Pipeline operators:
                      </span>{" "}
                      <span className="text-gray-700 2xl:text-lg">
                        Chain operations with |&gt;
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-lavender rounded-full flex-shrink-0 mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-900">
                        Pattern matching:
                      </span>{" "}
                      <span className="text-gray-700 2xl:text-lg">
                        Destructure data with match expressions
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-lavender rounded-full flex-shrink-0 mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-900">
                        Algebraic data types:
                      </span>{" "}
                      <span className="text-gray-700 2xl:text-lg">
                        Model domain with unions and records
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 my-8">
                  <div className="w-1 h-8 bg-purple-lbg rounded-full"></div>
                  <h3 className="font-semibold text-xl text-purple-dbg">
                    Practical Design
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-lavender rounded-full flex-shrink-0 mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-900">
                        Gradual typing:
                      </span>{" "}
                      <span className="text-gray-700 2xl:text-lg">
                        Start untyped, add types as needed
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-lavender rounded-full flex-shrink-0 mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-900">
                        Unicode strings:
                      </span>{" "}
                      <span className="text-gray-700 2xl:text-lg">
                        Characters are what you see on screen
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-lavender rounded-full flex-shrink-0 mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-900">
                        Error operators:
                      </span>{" "}
                      <span className="text-gray-700 2xl:text-lg">
                        ? for unwrapping, ! for panicking
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-lavender rounded-full flex-shrink-0 mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-900">
                        Imperative style:
                      </span>{" "}
                      <span className="text-gray-700 2xl:text-lg">
                        Use let bindings and loops when clear
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-lavender rounded-full flex-shrink-0 mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-900">
                        Async by default:
                      </span>{" "}
                      <span className="text-gray-700 2xl:text-lg">
                        All I/O operations are async
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-white/60 rounded-xl p-6 border border-purple-100 backdrop-blur-sm">
              <h4 className="font-bold text-taupe text-lg mb-3">
                Unicode-First Strings
              </h4>
              <p className="text-gray-700 2xl:text-lg mb-4">
                Unlike languages from last millennium that use bytes or UTF-16
                characters, Darklang strings are built around "extended grapheme
                clusters"—what you actually see on screen.
              </p>
              <div className="bg-white p-3 rounded-lg font-mono text-sm border border-purple-100">
                <div className="text-taupe">
                  String.length "👨‍👩‍👧‍👦"{" "}
                  <span className="text-gray-500">
                    // 1 (family emoji)
                  </span>{" "}
                </div>
                <div className="text-taupe mt-1">
                  String.length <span className="text-gray-800">"café"</span>{" "}
                  <span className="text-gray-500">
                    // 4 (including accented é)
                  </span>
                </div>
              </div>
              <p className="text-sm 2xl:text-base text-gray-600 mt-3">
                Working with codepoints and bytes is still available when
                needed.
              </p>
            </div>
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
                showLineNumbers={true}
                code={`// Pattern matching on union types
let describePhone (phone: Phone): String =
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
                showLineNumbers={true}
                code={`// Error handling with Result types
let parseAndDouble (input: String): Result<Int, String> =
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
                showLineNumbers={true}
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
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why a New Language?
          </h2>
          <div className="text-gray-700 2xl:text-lg leading-relaxed space-y-4">
            <blockquote className="text-lg italic border-l-4 border-gray-300 pl-4 py-2 my-6">
              Why not just build Darklang on top of JavaScript or some other
              existing language?
            </blockquote>
            <p className="border border-gray-200 rounded-lg p-4 bg-gray-50 shadow-sm">
              <strong>The real answer:</strong> Because the language is part of
              the whole integrated package. When we control the language, we can
              build capabilities that are impossible with existing languages.
            </p>

            <div className="my-12">
              <h2 className="text-xl font-bold text-purple-dbg mb-6 pb-3 border-b border-gray-200">
                What Integration Enables
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center mt-2">
                    <div className="w-2 h-2 bg-purple-lbg rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">
                      Expression-level debugging
                    </h3>
                    <p className="text-gray-700 2xl:text-lg">
                      Each expression has a unique ID. We can show you exactly
                      what value flowed through any part of your code in
                      production.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center mt-2">
                    <div className="w-2 h-2 bg-purple-lbg rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">
                      Self-hosting tools
                    </h3>
                    <p className="text-gray-700 2xl:text-lg">
                      Our parser is written in Darklang. Our static analysis
                      runs in Darklang. The language understands itself
                      completely.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center mt-2">
                    <div className="w-2 h-2 bg-purple-lbg rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">
                      AI code assistance
                    </h3>
                    <p className="text-gray-700 2xl:text-lg">
                      Since we control the AST, we can expose structured
                      information to AI models for better code generation and
                      error correction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center mt-2">
                    <div className="w-2 h-2 bg-purple-lbg rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">
                      Live code migration
                    </h3>
                    <p className="text-gray-700 2xl:text-lg">
                      We can automatically refactor your code when functions
                      change, because we understand the semantic structure, not
                      just text.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-lbg rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">
                      Built-in performance profiling
                    </h3>
                    <p className="text-gray-700 2xl:text-lg">
                      Every function call is instrumented by default. We know
                      where your code spends time without external profilers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div className="bg-purple-50/30 rounded-2xl overflow-hidden border border-purple-100">
                <div className="px-8 py-6">
                  <h3 className="font-bold text-xl text-blue-dbg mb-6 text-center">
                    Using Existing Languages
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex gap-4">
                      <div className="w-2 h-2 bg-blue-lbg rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700 2xl:text-lg">
                        Limited to external tooling and plugins
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-2 h-2 bg-blue-lbg rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700 2xl:text-lg">
                        Text-based analysis and transformations
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-2 h-2 bg-blue-lbg rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700 2xl:text-lg">
                        Separate compilation and runtime phases
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-2 h-2 bg-blue-lbg rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700 2xl:text-lg">
                        Debugging through external tools
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-2 h-2 bg-blue-lbg rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700 2xl:text-lg">
                        Legacy assumptions baked into syntax
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-2 h-2 bg-blue-lbg rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700 2xl:text-lg">
                        No integration with platform features
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-purple-50/30 rounded-2xl overflow-hidden border border-purple-100">
                <div className="px-8 py-6">
                  <h3 className="font-bold text-xl text-blue-dbg mb-6 text-center">
                    Darklang's Integration
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex gap-4">
                      <div className="w-2 h-2 bg-blue-lbg rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700 2xl:text-lg">
                        Deep AST-level understanding
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-2 h-2 bg-blue-lbg rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700 2xl:text-lg">
                        Semantic analysis and transformations
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-2 h-2 bg-blue-lbg rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700 2xl:text-lg">
                        Language runtime IS the platform
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-2 h-2 bg-blue-lbg rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700 2xl:text-lg">
                        Expression-level tracing built-in
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-2 h-2 bg-blue-lbg rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700 2xl:text-lg">
                        Designed for modern constraints
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-2 h-2 bg-blue-lbg rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700 2xl:text-lg">
                        Platform features integrated into syntax
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-lg font-medium text-purple-lbg mt-6">
              When the language is designed as part of the platform, we can
              build developer experiences that are impossible with bolt-on
              tools.
            </p>
          </div>
        </div>

        {/* Learn More */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learn More</h2>
          <div className="text-gray-700 2xl:text-lg leading-relaxed space-y-4">
            <p className="2xl:text-lg">
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
                <p className="text-sm 2xl:text-base text-blue-lbg">
                  Install Darklang and write your first function
                </p>
              </a>
              <a
                href="https://docs.darklang.com"
                className="block p-4 bg-lavender/10 rounded-lg hover:bg-lavender/30 transition-colors"
              >
                <h3 className="font-semibold text-purple-lbg mb-2">
                  Language Reference
                </h3>
                <p className="text-sm 2xl:text-base text-purple-lbg">
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
