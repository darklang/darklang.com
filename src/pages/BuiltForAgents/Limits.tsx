import React from "react";
import { Link } from "react-router-dom";

import { ActHead, Icon, Shell } from "./parts";

/**
 * The honest coda. These are real complaints from the same pile, and a
 * language does not fix any of them. Saying so is worth more than stretching
 * an answer to cover them, and each one still has something true to say.
 */
const LIMITS: { h: string; problem: string; answer: string }[] = [
  {
    h: "A model or harness update makes everything worse overnight",
    problem:
      "A workflow that worked well stops working. It hallucinates more, follows instructions worse, or handles context differently, and nothing on your side changed.",
    answer:
      "Nothing we ship prevents that. What does not move when the model does is the type checker, the permission layers, and the trace of what actually ran. The things you rely on to catch a bad change are not themselves the model's behaviour.",
  },
  {
    h: "Usage limits stop you halfway through a task",
    problem:
      "You hit a daily or weekly limit and have to wait or switch tools. Fan out a review across several agents and the budget can go before the review does.",
    answer:
      "Finished work is committed to a branch in your instance rather than living in a session, so you or another agent pick it up where it stopped. A review that starts from the changed definitions, their dependents, and a trace also spends less of its budget rediscovering the diff.",
  },
  {
    h: "Switching tools means rewriting rules, hooks, and configs",
    problem:
      "Moving between Cursor, Claude Code, and Codex means redoing rules, hooks, skills, commands, and configuration, because every tool does it differently.",
    answer:
      "Your hooks are still yours to rewrite. What does not have to move is what the project knows about itself: definitions, types, dependencies, history, and the permission policies live in the program, and any agent that can call a CLI or MCP tool gets the same view of them.",
  },
];

const Limits: React.FC = () => (
  <Shell id="limits" className="bg-gray-50">
    <ActHead eyebrow="Where we stop" title="Three We Do Not Fix">
      Not every problem on this list is a language problem. These three are
      real, they came from the same pile as the rest, and a programming language
      is the wrong shape to solve them.
    </ActHead>

    <div className="grid gap-6 lg:grid-cols-3">
      {LIMITS.map(item => (
        <div
          key={item.h}
          className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7"
        >
          <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
            <Icon className="h-4 w-4">
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12h8" />
            </Icon>
          </span>
          <h3 className="mb-3 font-bold text-gray-900 2xl:text-lg">{item.h}</h3>
          <p className="mb-4 leading-relaxed text-gray-600 2xl:text-lg">
            {item.problem}
          </p>
          <p className="mt-auto border-t border-gray-200 pt-4 leading-relaxed text-gray-700 2xl:text-lg">
            {item.answer}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-14 rounded-2xl border border-gray-200 bg-white px-6 py-12 text-center md:px-10">
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
          to="/ai"
        >
          Darklang and AI
        </Link>
      </div>
    </div>
  </Shell>
);

export default Limits;
