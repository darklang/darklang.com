import React from "react";
import { Link } from "react-router-dom";

const Start: React.FC = () => (
  <section className="mx-auto max-w-7xl 2xl:max-w-[100rem] px-4 py-16 md:py-24">
    <div className="rounded-2xl border border-gray-200 bg-white px-6 py-14 text-center md:px-10">
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl 2xl:text-4xl">
        Bring the Agent You Already Use
      </h2>
      <p className="mx-auto mb-8 max-w-3xl text-base md:text-lg 2xl:text-xl leading-relaxed text-gray-600">
        Claude Code, Codex, and anything else that can call command-line or MCP
        tools works with Darklang today. The structure is already there, and so
        are the boundaries around it.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          className="inline-block rounded-full bg-purple-lbg px-6 py-3 font-semibold text-white transition hover:bg-purple-dbg"
          to="/getting-started"
        >
          Install Darklang
        </Link>
        <Link
          className="inline-block rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:border-gray-400"
          to="/built-for-agents"
        >
          Why it is built this way
        </Link>
      </div>
    </div>
  </section>
);

export default Start;
