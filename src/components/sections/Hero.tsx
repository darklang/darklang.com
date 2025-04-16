import React from "react";
import Button from "../ui/Button";

const Hero: React.FC = () => {
  return (
    <section className="w-full max-w-7xl 2xl:max-w-[100rem] mx-auto px-4 py-20 md:py-32">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-[80px] font-bold mb-10 tracking-tight">
          Build above the <span className="text-blue-primary">cloud</span>
        </h1>

        <p className="text-lg md:text-2xl lg:text-3xl mb-12 max-w-6xl text-dark">
          Darklang is an integrated language, framework, runtime, and editor for
          building software— CLI scripts and REPLs, cloud apps, and more
        </p>

        <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl text-gray-dark font-medium">
          Write <span className="italic">simple</span> code that runs
          everywhere. No setup.{" "}
          <span className="text-purple-lbg font-semibold">Just code.</span>
        </p>

        <Button
          variant="primary"
          size="lg"
          className="bg-purple-lbg hover:bg-purple-secondry text-white-custom mb-16"
          onClick={() => (window.location.href = "#")}
        >
          Get Started →
        </Button>

        {/* GIF placeholder */}
        <div className="w-full max-w-4xl 2xl:max-w-7xl h-96 2xl:h-[45rem] bg-gray-300 rounded-md mb-16"></div>
      </div>
    </section>
  );
};

export default Hero;
