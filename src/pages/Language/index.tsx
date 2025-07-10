import React from "react";

const Language: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          The Darklang Programming Language
        </h1>
        {/* TODO */}
        {/* <p className="text-xl text-gray-600 italic">
          It's an ML-style language yay
        </p> */}
      </div>

      {/* Introduction */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          Darklang is a statically-typed, functional/imperative hybrid
          programming language designed primarily for building cloud-based
          backend services. Its functional aspects draw inspiration from
          languages like OCaml, Elm, and Rust, emphasizing simplicity, type
          safety, and productivity while avoiding complex functional programming
          concepts like monads or category theory.
        </p>
      </div>

      {/* Core Features */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Features</h2>

        {/* Immutability */}
        <div className="border-l-4 border-blue-lbg pl-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Immutability
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Darklang embraces immutability, a core functional programming
            principle. Values in Darklang are immutable by default, eliminating
            race conditions in concurrent execution and making programs easier
            to reason about.
          </p>
        </div>

        {/* Error Handling */}
        <div className="border-l-4 border-olive pl-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            No Exceptions, Use of Results and Options
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Instead of exceptions, which can complicate reasoning in functional
            programming, Darklang uses Result and Option types to handle errors
            and optional values. This approach, inspired by languages like Rust
            and OCaml, ensures explicit error handling and avoids issues
            associated with nulls or unchecked exceptions.
          </p>
        </div>

        {/* Functions and Pipelines */}
        <div className="border-l-4 border-purple-dbg pl-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            First-Class Functions and Pipelines
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Darklang supports first-class functions, enabling functions to be
            passed as arguments, returned from other functions, and assigned to
            variables, a standard feature in functional languages. It makes
            heavy use of pipelines (similar to F# or Elm), allowing developers
            to chain function calls in a readable, declarative way. For example,
            operations like List::map are used to transform collections
            functionally.
          </p>
        </div>

        {/* Implicit Returns */}
        <div className="border-l-4 border-rose pl-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Implicit Returns
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Like many functional languages (e.g., Elm or Haskell), Darklang uses
            implicit returns, where the last expression in a function is
            automatically its return value. This reduces boilerplate and aligns
            with functional programming's focus on expressions over statements.
          </p>
        </div>

        {/* Type System */}
        <div className="border-l-4 border-sand pl-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Simple Type System with Records and Enums
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Darklang employs a straightforward type system based on Records and
            Enums (also known as variants or sum types), similar to Rust, Elm,
            or OCaml. These types are expressive enough to model complex data
            structures while remaining simpler than object-oriented class
            hierarchies. For example, a Url type might be defined as a record
            with fields like scheme, domain, and port, while a UrlError enum
            could represent possible errors like InvalidScheme or EmptyDomain.
            This approach avoids the complexity of inheritance and aligns with
            functional programming's preference for algebraic data types.
          </p>
        </div>

        {/* Hybrid Nature */}
        <div className="border-l-4 border-taupe pl-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Functional/Imperative Hybrid
          </h3>
          <p className="text-gray-700 leading-relaxed">
            While primarily functional, Darklang is described as a
            functional/imperative hybrid, drawing from OCaml, Elm, and Rust
            rather than purely functional languages like Haskell. This hybrid
            nature makes it accessible to developers familiar with imperative or
            object-oriented languages, avoiding esoteric functional concepts
            like monads, lenses, or combinators. The language prioritizes
            developer productivity by allowing imperative-style code where
            needed, but its functional core ensures type safety and
            immutability.
          </p>
        </div>

        {/* Async Programming */}
        <div className="border-l-4 border-lavender pl-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Asynchronous Programming Without await
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Darklang's runtime is fully asynchronous, but it avoids the explicit
            await keywords common in languages like JavaScript or TypeScript.
            Instead, it uses data dependencies to manage concurrency, a
            functional approach that ensures operations wait for their inputs
            without exposing threading complexity. This design eliminates race
            conditions (due to immutability) and simplifies concurrent
            programming, aligning with functional programming's emphasis on
            declarative concurrency models.
          </p>
        </div>

        {/* Unicode Strings */}
        <div className="border-l-4 border-mint pl-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Unicode-Aware Strings
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Darklang's string handling is designed for modern applications,
            using Extended Grapheme Clusters to represent characters (e.g.,
            emojis like 👨‍👩‍👦‍👦 are treated as single characters). This functional
            approach to string representation avoids the pitfalls of byte-based
            or UTF-16 strings in older languages, ensuring predictable behavior
            in text processing.
          </p>
        </div>
      </div>

      {/* Benefits Summary */}
      <div className="bg-gray-50 rounded-lg p-6 mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Key Benefits
        </h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-lbg rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <strong className="text-gray-800">Reliability:</strong>
              <span className="text-gray-700">
                {" "}
                Static typing and immutability ensure that compiled code is
                robust, a critical feature for cloud backends.
              </span>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-mint rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <strong className="text-gray-800">Concurrency:</strong>
              <span className="text-gray-700">
                {" "}
                Immutability and data-driven async execution simplify concurrent
                programming, a key requirement for scalable backend services.
              </span>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-purple-lbg rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <strong className="text-gray-800">Productivity:</strong>
              <span className="text-gray-700">
                {" "}
                Features like pipelines, implicit returns, and gradual typing
                make functional programming accessible and efficient, aligning
                with Darklang's goal of simplifying backend development.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
