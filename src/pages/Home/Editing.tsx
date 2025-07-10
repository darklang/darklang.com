import React from "react";
import editingImg from "~/assets/editing3.png";
import SectionTitle from "../../common/ui/SectionTitle";
const Editing: React.FC = () => {
  const features = [
    {
      id: 1,
      description:
        "Darklang has a Language Server that provides real-time feedback, AI-powered completions, instant diagnostics, and easy access to language features. The server communicates through a lightweight VS Code extension enabling seamless integration and an intuitive experience.",
    },
    {
      id: 2,
      description:
        "Built entirely in Darklang, the language server follows the Language Server Protocol (LSP), making it easy to expand support to more editors so you can use Darklang in your favourite development environment.",
    },
    {
      id: 3,
      description:
        "The Language Server is designed to be adjustable and expandable, allowing users to configure it to fit their needs.",
    },
  ];
  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 space-y-6">
            <div className="mb-2">
              <SectionTitle subtitle="Editing">
                Powerful, Familiar, and Extensible editing
              </SectionTitle>
              <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mb-8">
                Edit code in your preferred environment—whether it's your local
                editor, a browser-based IDE, or directly in the CLI. This is
                made possible by Darklang's Language Server:
              </p>
            </div>
            {features.map(feature => (
              <div key={feature.id} className="flex items-start space-x-2">
                <div className="flex-shrink-0">
                  <div className="text-purple-lbg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M18 8L13.3333 24.6667M8.66667 11.3333L4 16L8.66667 20.6667M23.3333 11.3333L28 16L23.3333 20.6667"
                        stroke="#95589F"
                        stroke-width="2.625"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 lg:text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="mt-8">
              <a
                href="/editing"
                className="md:text-lg text-purple-lbg hover:text-purple-secondary font-medium"
                target="_blank"
              >
                Learn more about Darklang's Multi-Editor support →
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 hidden md:flex items-center justify-center">
            <img
              src={editingImg}
              alt="Darklang Editor Environment"
              className="md:max-w-4xl 2xl:max-w-7xl max-h-fit md:absolute md:-right-40 2xl:-right-38"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Editing;