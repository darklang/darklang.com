import React from "react";

import Terminal from "../../common/ui/Terminal.tsx";
// import Button from "../../common/ui/Button.tsx";
// import CTASection from "../../common/ui/CTASection/index.tsx";

const CLIPage: React.FC = () => {
  return (
    <div className="bg-dark text-white font-code">
      {/* ASCII Art Header Section - Hidden on Mobile */}
      <section className="py-18 px-6 max-w-7xl mx-auto text-center">
        <div className="md:my-20">
          <img
            src="/assets/darklang-cli-ascii.png"
            alt="Darklang CLI ASCII"
            className="mx-auto"
          />
        </div>
      </section>

      {/* CLI Platform Section */}
      <section className="py-12 pl-6 pr-8 max-w-7xl 2xl:max-w-[100rem] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="md:w-2/3">
            <div className="text-lg md:text-2xl font-medium text-purple-dbg mb-4">
              $ darklang platform |
            </div>
            <h2 className="md:text-xl mb-12 mr-10">
              Darklang's CLI is fully cross-platform, seamlessly running on
              macOS, Linux, and Windows for a consistent development experience
              everywhere
            </h2>
            {/* <Button
              variant="primary"
              size="lg"
              className="bg-blue-dbg hover:bg-purple-dbg font-semibold transition duration-200 tracking-widest px-8"
              onClick={() => (window.location.href = "#")}
            >
              &gt;_ Try It Now!
            </Button> */}
          </div>
          <div className="w-full md:w-[700px] md:absolute md:-right-30 2xl:right-30">
            <img
              src="/assets/cli.png"
              alt="Darklang CLI Terminal"
              className="rounded-lg shadow-lg 2xl:w-7xl"
            />
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      {/* <section className="py-32 px-6 max-w-7xl 2xl:max-w-[100rem] mx-auto">
        <div className="text-purple-dbg mb-6 text-lg md:text-2xl font-medium">
          $ darklang get started |
        </div>
      </section> */}

      {/* Bash Complexities Section */}
      <section className="py-16 px-6 max-w-7xl 2xl:max-w-[100rem] mx-auto">
        <div className="text-purple-dbg mb-6 text-lg md:text-2xl font-medium">
          $ darklang as an alternative to bash, python, etc. |
        </div>

        <div className="space-y-8 flex flex-row">
          <div className="md:w-3/4 text-white md:text-lg">
            <p className="leading-relaxed">
              Darklang CLI is a better replacement for traditional file-based
              scripts, such as in bash, python, lua, js, etc.
            </p>

            <p className="leading-relaxed">
              bash is super hard to read, using weird variable names. While lots
              of us can read and write bash scripts, since there are few
              experts, it's not a great language.
            </p>

            <ul className="space-y-8 mt-8 text-white">
              <li className="flex">
                <span className=" md:text-xl mr-4">-</span>
                <span className="leading-relaxed">
                  lack of a package manager means the generated code has to use
                  cli tools, which each have different interfaces, which may not
                  be installed, and are often opaque
                </span>
              </li>

              <li className="flex">
                <span className="mr-4">-</span>
                <span className="leading-relaxed">
                  different versions of the tools might be installed with subtly
                  different behaviour (esp gnu vs bsd)
                </span>
              </li>

              <li className="flex">
                <span className="mr-4">-</span>
                <span className="leading-relaxed">
                  lack of real types and functions (which are a mess in bash)
                  contributes to these problems
                </span>
              </li>
            </ul>

            <p className="leading-relaxed mt-8">
              Python scripts can be just as messy as bash, often requiring you
              to spin up virtual environments for every project just to avoid
              dependency conflicts
            </p>
          </div>
          <div className="hidden md:block md:w-1/4 md:absolute md:-right-20 2xl:-right-80">
            <img
              src="/assets/double-grid.png"
              alt="grid"
              className="w-2xs 2xl:w-xs"
            />
          </div>
        </div>
      </section>

      {/* Darklang for Scripts Section */}
      <section className="py-16 px-6  max-w-7xl 2xl:max-w-[100rem] mx-auto">
        <div className="text-purple-dbg mb-6 text-lg md:text-2xl font-semibold">
          $ darklang is a better language for your scripts |
        </div>
        <div className="relative">
          <img
            src="/assets/grid.png"
            alt="grid"
            className="hidden md:block w-2xs 2xl:w-sm absolute -right-40 -bottom-45 2xl:-right-120"
          />
          <div className="space-y-8">
            <ul className="space-y-6 mt-6 ml-4">
              <li className="flex items-start">
                <span className="text-blue-dbg mr-3">-</span>
                <span className="text-white md:text-xl leading-6">
                  Static types help ensure correctness
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-blue-dbg mr-3">- </span>
                <span className="text-white md:text-xl leading-6">
                  Immutable values make code easier to understand and verify
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-blue-dbg mr-3">- </span>
                <span className="text-white md:text-xl leading-6">
                  Built-in package manager
                </span>
              </li>

              <li className="flex items-start ml-8">
                <span className="text-blue-dbg mr-3">✓</span>
                <span className="text-white md:text-xl leading-6">
                  without an npm install step
                </span>
              </li>

              <li className="flex items-start ml-8">
                <span className="text-blue-dbg mr-3">✓</span>
                <span className="text-white md:text-xl leading-6">
                  versioned immutable functions and packages
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-blue-dbg mr-3">- </span>
                <span className="text-white md:text-xl leading-6">
                  Easy to take a script and move it to the cloud
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-blue-dbg mr-3">- </span>
                <span className="text-white md:text-xl leading-6">
                  Easy to use traces
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-blue-dbg mr-3">- </span>
                <span className="text-white md:text-xl leading-6">
                  Easy to test, and be sure it's working
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Darklang Examples Section */}
      <section className="py-16 px-6  max-w-7xl 2xl:max-w-[100rem] mx-auto relative">
        <div className="text-purple-dbg mb-10 text-lg md:text-2xl font-semibold">
          $ darklang examples |
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 z-20">
          {/* Left Terminal */}
          <Terminal className="z-2">
            <div className="md:flex">
              <span className="text-white mr-2">$</span>
              <span className="text-blue-dbg mr-2">curl</span>
              <span className="text-white">https://darklang.com/download</span>
              <span className="text-gray-500 mx-2">|</span>
              <span className="text-purple-lbg">bash</span>
            </div>

            <div className="mt-4 text-white">
              Darklang installed in{" "}
              <span className="text-gray-400">~/.darklang/bin/darklang</span>
            </div>

            <div className="mt-2 md:flex">
              <span className="text-white mr-2">Add to</span>
              <span className="text-purple-dbg">PATH</span>
              <span className="text-white mx-2">via .bashrc</span>
              <span className="text-gray-400 mx-2">[y, n, ?]:</span>
              <span className="text-white">y</span>
            </div>

            <div className="mt-2 flex">
              <span className="text-mint mr-2">✓</span>
              <span className="text-white">Added to .bashrc.</span>
            </div>

            <div className="mt-4 text-white">Next you can:</div>
            <p className="text-blue-300 mr-2 my-3"># Try the tutorial</p>
            <p className="text-white mr-2">darklang tutorial</p>
            <p className="text-blue-300 mr-2 my-3">
              # Run some code from the package manager darklang
            </p>
            <p className="text-white mr-2 my-3">@paul.fizzbuzz 3</p>
            <p className="text-blue-300 mr-2 my-3"># Generate some code</p>
            <p className="text-white mr-2">
              darklang prompt{" "}
              <span className="text-gray-400">
                "Find ts scripts with more than 600 lines which use the commonjs
                format"
              </span>
            </p>
            <p className="text-blue-300 mr-2 my-3">
              # See available command line options
            </p>
            <p className="text-white mr-2 my-3">darklang help</p>
          </Terminal>

          {/* Right Column */}
          <div className="space-y-8">
            <Terminal>
              <div className="flex">
                <span className="text-white mr-2">$</span>
                <span className="text-purple-dbg mr-2">darklang</span>
                <span className="text-white">@paul.fizzbuzz 3</span>
              </div>
              <div className="mt-2 text-white">1</div>
              <div className="text-white">2</div>
              <div className="text-white">Fizz</div>
            </Terminal>

            <Terminal>
              <div className="md:flex">
                <span className="text-white mr-2">$</span>
                <span className="text-purple-dbg mr-2">darklang</span>
                <span className="text-white">
                  deploy @paul.fizzbuzz /fizzbuzz
                </span>
              </div>

              <div className="text-gray-400 mt-2">
                {" "}
                <span className="text-white">Deployed to</span>{" "}
                https://furry-squirrel-3562.darklang.io/fizzbuzz
              </div>
              <div className="flex">
                <span className="text-white mr-2">in</span>
                <span className="text-olive">0.135s</span>
              </div>
            </Terminal>

            <Terminal>
              <div className="md:flex">
                <span className="text-white mr-2">$ curl -sSO</span>
                <span className="text-gray-400">
                  https://furry-squirrel-3562.darklang.io/fizzbuzz/3
                </span>
              </div>
              <div className="mt-2 text-white">1</div>
              <div className="text-white">2</div>
              <div className="text-white">Fizz</div>
            </Terminal>
          </div>
        </div>
        <img
          src="/assets/logo-ascii.png"
          alt="logo-ascii"
          className="hidden md:block absolute -left-40 w-xs z-1 -bottom-10"
        />
      </section>

      {/* Darklang Commands Section */}
      <section className="py-16 px-6 max-w-7xl 2xl:max-w-[100rem] mx-auto">
        <div className="text-purple-dbg mb-10 text-lg md:text-2xl font-semibold">
          $ darklang commands |
        </div>

        <div className="space-y-6 md:ml-6 md:text-lg 2xl:text-xl md:mb-36">
          <div className="flex flex-col space-y-2 md:grid md:grid-cols-12 md:gap-4 md:space-y-0 md:items-start">
            <div className="md:col-span-3">
              dark <span className="text-blue-dbg">help</span>
            </div>
            <div className="text-white md:col-span-9">
              Show this help message and exit
            </div>
          </div>

          <div className="flex flex-col space-y-2 md:grid md:grid-cols-12 md:gap-4 md:space-y-0 md:items-start">
            <div className="md:col-span-3">
              dark <span className="text-tan">[function name]</span>
            </div>
            <div className="text-white md:col-span-9">
              Run a function in the package manager i.e. `dark
              @Darklang.Stdlib.Bool.not true`
            </div>
          </div>

          <div className="flex flex-col space-y-2 md:grid md:grid-cols-12 md:gap-4 md:space-y-0 md:items-start">
            <div className="md:col-span-3">
              dark <span className="text-mint">run [script path]</span>
            </div>
            <div className="text-white md:col-span-9">
              Run a .dark script i.e. `dark ./my-script.dark`
            </div>
          </div>

          <div className="flex flex-col space-y-2 md:grid md:grid-cols-12 md:gap-4 md:space-y-0 md:items-start">
            <div className="md:col-span-3">
              dark <span className="text-purple-dbg">install</span>
            </div>
            <div className="text-white md:col-span-9">
              Install the darklang CLI so it's available globally in your
              terminal
            </div>
          </div>

          <div className="flex flex-col space-y-2 md:grid md:grid-cols-12 md:gap-4 md:space-y-0 md:items-start">
            <div className="md:col-span-3">
              dark <span className="text-sand">http</span>
            </div>
            <div className="text-white md:col-span-9">
              Lists both local and cloud handlers
            </div>
          </div>

          <div className="flex flex-col space-y-2 md:grid md:grid-cols-12 md:gap-4 md:space-y-0 md:items-start">
            <div className="md:col-span-3">
              dark <span className="text-olive">dbs</span>
            </div>
            <div className="text-white md:col-span-9">
              Lists both local and cloud dbs
            </div>
          </div>
        </div>

        {/* <div className="flex justify-end mt-8">
          <Button
            variant="outline"
            size="lg"
            className="hover:bg-purple-dbg text-white py-3 px-6 rounded-md border border-blue-dbg hover:border-purple-dbg transition duration-200 ml-4"
            onClick={() => (window.location.href = "#")}
          >
            &gt;_ See Full List
          </Button>
        </div> */}
      </section>

      {/* <CTASection>
        <div className="text-center">
          <h1 className="text-lg md:text-2xl 2xl:text-4xl font-bold my-8">
            Getting Started with Darklang CLI
          </h1>
          <p className="text-gray-300 md:text-lg mb-12">
            Write your first script in Darklang today and have it running in
            minutes
          </p>
          <Button
            variant="primary"
            size="lg"
            className="bg-blue-dbg hover:bg-purple-dbg rounded-md transition duration-200 tracking-widest"
            onClick={() => (window.location.href = "#")}
          >
            &gt;_ Try It Now!
          </Button>
        </div>
      </CTASection> */}
    </div>
  );
};

export default CLIPage;
