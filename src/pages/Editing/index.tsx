import React from "react";

import doubleGridSquare from "~/assets/double-grid-square.png";
import darklangLogoFramed from "~/assets/darklang-logo-framed.png";

import Button from "../../common/ui/Button";
import CodeEditor from "../../common/ui/CodeEditor";
import CTASection from "../../common/ui/CTASection";

const Editing: React.FC = () => {
  return (
    <div className="bg-[#1F1F1F] text-white min-h-screen font-code">
      <section className="relative pt-16 pb-20">
        <div className="absolute -top-1 right-0 z-0">
          <img
            src={doubleGridSquare}
            alt="Grid Pattern"
            className="w-full max-w-sm"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-10 md:mb-0">
              <div className="w-54 h-54 relative mx-auto md:mx-0">
                <img
                  src={darklangLogoFramed}
                  alt="Darklang Logo"
                  className="w-full"
                />
              </div>
            </div>

            <div className="md:pl-12">
              <h1 className="text-3xl font-bold mb-4">Multi-Editor Support</h1>
              <p className="text-lg mb-6 max-w-2xl">
                Darklang's language server is designed to work across multiple
                editing environments, providing a consistent experience
                regardless of your preferred editor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  className="bg-blue-dbg hover:bg-purple-dbg text-white text-sm tracking-widest"
                >
                  &gt;_ Get Extension!
                </Button>
                <Button
                  variant="outline"
                  className="border border-blue-dbg hover:bg-gray-800 text-white text-sm tracking-widest"
                >
                  Try it on editor.darklang.com →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LSP Server Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-blue-dbg text-2xl mb-8">Darklang LSP Server</div>

        <p className="text-white text-lg leading-relaxed max-w-6xl">
          Our language server is fully written in Darklang and follows the
          Language Server Protocol (LSP), providing features like
          autocompletion, real-time error checking, and hover documentation. It
          is currently integrated with a lightweight VS Code extension, and we
          plan to support more editors like Vim, Rider, and Sublime in the
          future.
        </p>
      </section>

      {/* Basic Features Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className=" text-blue-dbg text-2xl mb-12">Basic Features</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Code Completion */}
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-medium mb-4 text-center">
              Code completion
            </h3>
            <CodeEditor code={`Stdlib.List.`} showCompletion={true} />
          </div>

          {/* Syntax Highlighting */}
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-medium mb-4 text-center">
              Syntax highlighting
            </h3>
            <CodeEditor
              code={`let helloWorld () : Int64 =
  Builtin.printLine ("Hello, World!")

helloWorld ()
`}
            />
          </div>

          {/* Diagnostics */}
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-medium mb-4 text-center">
              Diagnostics
            </h3>
            <CodeEditor
              code={`let x : List = 
  Stdlib.List.
// Error: Cannot use List without completing the method call`}
              showDiagnostics={true}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hover */}
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-medium mb-4 text-center">
              Hover
            </h3>
            <CodeEditor code={`Stdlib.List.push`} showHover={true} />
          </div>

          {/* Go to Definition */}
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-medium mb-4 text-center">
              Go to definition
            </h3>
            <CodeEditor code={`Stdlib.List.head`} showGoToDef={true} />
          </div>
        </div>
      </section>

      {/* Customizing & Creating Language Servers Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className=" text-blue-dbg text-2xl mb-8">
          Customizing & Creating Language Servers
        </div>

        <div className="text-white text-lg space-y-8 max-w-6xl">
          <p className="leading-relaxed">
            Many of our language tools are fully accessible to users. Just like
            forking and editing your own code, you can fork the language server
            to change how features like onHover, autocompletion, or diagnostics
            work.
          </p>

          <p className="leading-relaxed">
            It's also easy to create your own language servers, whether for
            testing new ideas or developing specialized tools
          </p>
        </div>
      </section>

      {/* Extension Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className=" text-blue-dbg text-2xl mb-8">Extension</div>

        <div className="text-white text-lg space-y-8 max-w-6xl">
          <p className="leading-relaxed">
            We are currently focused on building a VS Code extension because of
            its rich API ecosystem and powerful FileSystemProvider (FSP)
            capabilities. Unlike traditional development where code exists as
            plain text files on disk, Darklang's code is stored in a package
            manager, making VS Code's FSP particularly valuable for our
            implementation.
          </p>

          <p className="leading-relaxed">
            While VS Code is our starting point, we're actively planning support
            for additional editors including Vim, Sublime Text, and Rider.
          </p>
        </div>
      </section>

      {/* Getting Started Section */}
      <CTASection>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
          <p className="text-lg mb-6">
            Try the VS Code extension or use it instantly on{" "}
            <a
              href="https://editor.darklang.com"
              className="text-blue-dbg hover:text-purple-400"
            >
              editor.darklang.com
            </a>
            !
          </p>
          <div className="flex justify-center mt-8">
            <Button
              variant="primary"
              className="bg-blue-dbg hover:bg-purple-dbg text-white px-8 py-3 rounded-md"
            >
              &gt;_ Get Extension!
            </Button>
          </div>
        </div>
      </CTASection>
    </div>
  );
};

export default Editing;
