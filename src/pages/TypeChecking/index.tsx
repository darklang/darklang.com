import React from "react";

const TypeChecking: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <pre>
        Runtime is done-ish
        Parse-time is barely there
      </pre>

      <p>
        Type checking:<br />
        - Darklang is fully statically typed with Gradual Flexibility, ensuring that types are checked at compile time to catch errors early. This helps developers ensure that changes across large programs are safe, particularly for refactoring or scaling systems <br />
        - Unlike traditional functional languages where the entire program must compile, Darklang employs gradual static typing. This allows incomplete or partially typed code to run, enabling developers to prototype quickly without ensuring every part of the program type-checks immediately<br />
        - Darklang uses small compilation units, meaning that type checking is localized to specific parts of the program, such as a single HTTP route. This reduces the scope of type changes needed when prototyping or making small modifications<br />
        - Instead of modifying existing types, developers create a copy of a type, make changes, and test them. Once validated, semi-automated tooling helps propagate these changes across the program, minimizing the effort required for large-scale type updates.<br />
        - The language supports Option and Result types for error handling, replacing nulls and exceptions to avoid common pitfalls like null pointer errors<br />
        - Types and functions in Darklang are versioned and immutable, ensuring that changes don’t break existing code. This is particularly useful in the package manager, where types and functions are individually versioned<br />
        - When updating types, developers can test new versions without affecting the entire program, and tooling assists in migrating to the new type once it’s finalized.<br />
        - Future plans include implementing an at-rest/static checker to perform comprehensive type checking, including preventing invalid operations (e.g., adding a String and an Int). This will leverage Darklang’s access to trace data for advanced diagnostics<br />

        Benefits of Darklang’s Type Checking<br />

        - Safety: Static typing ensures type mismatches are caught early, reducing runtime errors and making large-scale changes safer<br />
        - Productivity: Small compilation units and gradual typing allow rapid prototyping, akin to dynamic languages, while retaining static typing benefits<br />
        - Error Handling: The Option/Result types simplify error management, eliminating the need for exceptions and reducing null-related bugs<br />
        - Maintainability: Versioned types and editor integration make refactoring and maintaining code easier, especially in evolving projects<br />
        - Diagnostics: Integration with trace data provides unique insights into type-related issues, improving debugging and development efficiency<br />
        - Scalability: Versioned types and small compilation units make it easier to scale and refactor backends as projects grow<br />
      </p>

      for more content inspo: <br />
      - https://blog.darklang.com/real-problems-with-functional-languages/amp/<br />
      - https://blog.darklang.com/an-overdue-status-update/

    </div>
  );
};

export default TypeChecking;
