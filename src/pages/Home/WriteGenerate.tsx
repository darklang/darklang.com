import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";
import DetailLinks from "./DetailLinks";

// Editor syntax colors — Darklang's dark-background palette
const kw = "text-code-kw"; // keywords: let, fun
const mod = "text-code-type"; // module / type names
const fn = "text-code-fn"; // function names
const mut = "text-gray-400"; // punctuation / muted

/** Sparkles marking the prompt as an AI-agent instruction. */
const Sparkles: React.FC = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-purple-lbg shrink-0"
    aria-hidden="true"
  >
    <path d="M12 2.5l1.7 5.3a2 2 0 0 0 1.3 1.3L20.3 11l-5.3 1.7a2 2 0 0 0-1.3 1.3L12 19.3l-1.7-5.3a2 2 0 0 0-1.3-1.3L3.7 11 9 9.3a2 2 0 0 0 1.3-1.3z" />
    <path d="M18.7 14.2l.6 1.9a1 1 0 0 0 .6.6l1.9.6-1.9.6a1 1 0 0 0-.6.6l-.6 1.9-.6-1.9a1 1 0 0 0-.6-.6l-1.9-.6 1.9-.6a1 1 0 0 0 .6-.6z" />
  </svg>
);

/** Clean quarter-circle arrow from the prompt down into the editor. */
const PromptArrow: React.FC = () => (
  <svg
    width="54"
    height="54"
    viewBox="0 0 54 54"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-light"
    aria-hidden="true"
  >
    <path d="M6 8 C 26 8, 42 20, 42 48" />
    <path d="M34 40 L42 49 L50 40" />
  </svg>
);

const CompletionRow: React.FC<{
  name: string;
  signature: string;
  selected?: boolean;
}> = ({ name, signature, selected = false }) => (
  <div
    className={`group flex items-center gap-2 px-2 py-1 rounded ${
      selected ? "bg-purple-dbg/25" : ""
    }`}
  >
    {/* function-type glyph */}
    <span
      className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded text-[11px] font-semibold ${
        selected ? "bg-purple-dbg text-white" : "bg-purple-dbg/15 text-code-kw"
      }`}
    >
      ƒ
    </span>
    <span
      className={`flex-1 ${selected ? "text-white font-medium" : "text-gray-200"}`}
    >
      {name}
    </span>
    <span className="text-[11px]">
      {signature.split("→").map((part, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="text-gray-500">→</span>}
          <span className="text-code-type">{part}</span>
        </React.Fragment>
      ))}
    </span>
  </div>
);

const CompletionMenu: React.FC = () => (
  <div className="w-[21rem] max-w-full rounded-lg bg-[#211f29] border border-white/10 shadow-2xl overflow-hidden font-code text-[13px]">
    <div className="p-1 space-y-0.5">
      <CompletionRow
        name="postMessage"
        signature="Channel → String → Unit"
        selected
      />
      <CompletionRow name="getChannel" signature="String → Channel" />
      <CompletionRow name="listMessages" signature="Channel → List<Message>" />
    </div>
    {/* selected-item doc + hint footer */}
    <div className="border-t border-white/10 px-3 py-1.5 flex items-center justify-between gap-3">
      <span className="text-gray-400 text-[11px] truncate">
        Send a message to a Discord channel
      </span>
      <kbd className="shrink-0 inline-flex items-center justify-center h-5 w-5 rounded bg-purple-dbg/15 text-[11px] leading-none text-gray-300 border border-white/10">
        ↵
      </kbd>
    </div>
  </div>
);

/** The editor window. */
const EditorBox: React.FC = () => (
  <div className="rounded-2xl bg-[#1e1e1e] shadow-2xl overflow-hidden">
    <div className="flex items-center gap-2.5 px-5 py-2.5 border-b border-white/10">
      <span className="text-code-kw">
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 8l-4 4 4 4" />
          <path d="M15 8l4 4-4 4" />
        </svg>
      </span>
      <span className="font-code text-sm text-gray-400">editor</span>
    </div>

    {/* Code */}
    <div className="relative px-5 pb-6 pt-4 font-code text-[12px] sm:text-[15px] md:text-base leading-6 text-gray-200 overflow-x-auto">
      <div>
        <span className={kw}>let</span> <span className={fn}>notify</span>{" "}
        <span className={mut}>(</span>repo<span className={mut}>:</span>{" "}
        <span className={mod}>String</span>
        <span className={mut}>)</span> <span className={mut}>:</span>{" "}
        <span className={mod}>Unit</span> <span className={mut}>=</span>
      </div>
      <div className="pl-4">
        <span className={mod}>GitHub</span>
        <span className={mut}>.</span>
        <span className={fn}>newIssues</span> repo
      </div>
      <div className="pl-4 flex items-center gap-x-4">
        <span className="whitespace-nowrap">
          <span className="text-gray-300">|&gt;</span>{" "}
          <span className={mod}>List</span>
          <span className={mut}>.</span>
          <span className={fn}>map</span> <span className={mut}>(</span>
          <span className={kw}>fun</span> issue{" "}
          <span className={mut}>-&gt;</span>{" "}
          <span className={mod}>Discord</span>
          <span className={mut}>.</span>
        </span>
        <span className="font-caveat text-base md:text-lg text-code-kw whitespace-nowrap hidden lg:flex items-center gap-1.5 shrink-0">
          <span className="inline-block animate-nudge-x">←</span>
          packages just work, no install
        </span>
      </div>

      {/* Autocomplete dropdown, moved to the right */}
      <div className="mt-2 flex justify-end">
        <CompletionMenu />
      </div>
    </div>
  </div>
);

/** Prompt → arrow → editor (no container). */
const PromptCanvas: React.FC = () => (
  <div>
    {/* Agent prompt */}
    <div className="flex items-start gap-3">
      <Sparkles />
      <p className="font-caveat text-xl md:text-2xl text-dark leading-snug">
        When a new issue is opened in our repo, post it to Discord #dev-updates
      </p>
    </div>

    {/* Hand-drawn arrow from the prompt down into the editor */}
    <div className="hidden lg:flex justify-center -mt-1 mb-2">
      <PromptArrow />
    </div>

    <div className="mt-8 lg:mt-0">
      <EditorBox />
    </div>
  </div>
);

const WriteGenerate: React.FC<{ reverse?: boolean }> = ({
  reverse = false,
}) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-4">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Left: copy */}
          <div>
            <SectionTitle subtitle="Write / Generate">
              Start with Code, or a{" "}
              <span className="text-purple-lbg">Prompt</span>
            </SectionTitle>

            <div className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed space-y-6">
              <p>
                Write the code yourself, or generate it with the agent of your
                choice. Work from the CLI, your favorite editor, or Darklang on
                the web. Types, docs, the standard library, and packages are
                ready from the start. No setup or configuration.
              </p>
            </div>

            <DetailLinks
              links={[
                { label: "Explore packages", to: "/packages" },
                { label: "The language", to: "/language" },
              ]}
            />
          </div>

          {/* Right: prompt → editor canvas */}
          <div>
            <PromptCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WriteGenerate;
