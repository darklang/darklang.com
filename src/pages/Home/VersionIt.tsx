import React from "react";

import SectionTitle from "../../common/ui/SectionTitle";
import DetailLinks from "./DetailLinks";

const Glyph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const CheckIcon: React.FC = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const TagIcon: React.FC = () => (
  <Glyph>
    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
    <circle cx="7.5" cy="7.5" r=".6" fill="currentColor" />
  </Glyph>
);

const SwitchIcon: React.FC = () => (
  <Glyph>
    <path d="M8 4 4 8l4 4" />
    <path d="M4 8h16" />
    <path d="M16 20l4-4-4-4" />
    <path d="M20 16H4" />
  </Glyph>
);

const Rule: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="my-3 flex items-center gap-3">
    <span className="text-[11px] font-semibold uppercase tracking-[0.13em] text-gray-light">
      {children}
    </span>
    <span className="h-px flex-1 bg-gray-100" />
  </div>
);

const Def: React.FC<{ kind: string; name: string; tag?: string }> = ({
  kind,
  name,
  tag,
}) => (
  <div className="flex items-baseline justify-between gap-3 font-code text-xs">
    <span className="min-w-0 truncate text-dark">
      <span className="text-gray-light">{kind}</span> {name}
    </span>
    <span
      className={`shrink-0 text-[10px] uppercase tracking-wider ${
        tag === "new"
          ? "text-acc-green"
          : tag === "edited"
            ? "text-rust"
            : "text-gray-light"
      }`}
    >
      {tag ?? "moved with it"}
    </span>
  </div>
);

/**
 * The claim first, the evidence underneath: the homepage sells in sentences,
 * the source control page shows the same thing as an interface.
 */
const Card: React.FC<{
  icon: React.ReactNode;
  iconClass: string;
  claim: React.ReactNode;
  outcome: string;
  className?: string;
  children: React.ReactNode;
}> = ({ icon, iconClass, claim, outcome, className = "", children }) => (
  <div
    className={`w-full max-w-[26rem] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition duration-200 hover:rotate-0 hover:shadow-lg motion-reduce:transition-none ${className}`}
  >
    <div className="flex items-start gap-3 px-5 pb-4 pt-4">
      <span
        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${iconClass}`}
      >
        {icon}
      </span>
      <p className="text-base font-semibold leading-snug text-dark md:text-lg">
        {claim}
      </p>
    </div>

    <div className="border-t border-gray-100 bg-[#F9F9FB] px-5 py-4">
      {children}
      <p className="mt-4 flex items-center gap-1.5 text-xs text-acc-green">
        <CheckIcon />
        {outcome}
      </p>
    </div>
  </div>
);

const ChangeCards: React.FC = () => (
  <div className="mx-auto flex w-full max-w-[30rem] flex-col gap-5 py-4">
    <Card
      className="self-start rotate-[-1.8deg]"
      icon={<TagIcon />}
      iconClass="bg-rust/10 text-rust"
      claim={
        <>
          You changed three things.{" "}
          <span className="text-rust">Two more followed.</span>
        </>
      }
      outcome="none touched by hand"
    >
      <div className="grid gap-2.5">
        <Def kind="fn" name="Notify.notify" tag="edited" />
        <Def kind="type" name="Digest" tag="edited" />
        <Def kind="value" name="digestHour" tag="new" />
      </div>

      <Rule>and so</Rule>

      <div className="grid gap-2.5">
        <Def kind="fn" name="Webhook.onPush" />
        <Def kind="fn" name="Digest.summarize" />
      </div>
    </Card>

    <Card
      className="self-end rotate-[1.4deg] lg:mr-2"
      icon={<SwitchIcon />}
      iconClass="bg-taupe/15 text-taupe"
      claim={
        <>
          Switching branches is <span className="text-taupe">instant</span>.
        </>
      }
      outcome="nothing to stash"
    >
      <div className="flex items-center gap-2 font-code text-xs">
        <span className="text-taupe">main</span>
        <span className="text-gray-light">&rarr;</span>
        <span className="text-rust">add-retry</span>
        <span className="ml-auto text-[10px] uppercase tracking-wider text-gray-light">
          3 in progress
        </span>
      </div>
    </Card>
  </div>
);

const VersionIt: React.FC<{ reverse?: boolean }> = ({ reverse = false }) => {
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
            <SectionTitle
              subtitle="Version Control, Built In"
              subtitleColor="text-rust"
            >
              Source Control That Understands Your{" "}
              <span className="text-rust">Program</span>
            </SectionTitle>

            <div className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed space-y-6">
              <p>
                Darklang versions your program's functions and types, not text
                files. Branches, commits, review, and history are part of the
                platform itself.
              </p>
              <p>
                A branch is just a set of changes to those definitions, so you
                can keep several going at once and move between them instantly.
                Nothing to stash, no second copy of the project, no working tree
                to clean up first.
              </p>
            </div>

            <DetailLinks
              color="text-rust"
              links={[{ label: "Source control", to: "/source-control" }]}
            />
          </div>

          {/* Right: three ideas, each stated outright */}
          <div className="min-w-0">
            <ChangeCards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VersionIt;
