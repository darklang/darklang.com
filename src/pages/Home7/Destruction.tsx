import React from "react";

import { Icon, SectionHead, Shell } from "./parts";
import { TONES } from "./tones";

const tone = TONES.rust;

/**
 * Each incident is told the way it was reported: a line of narration, then the
 * words of the person it happened to. Nothing is summarised into a statistic,
 * because the detail is the argument. A "clean slate before tests" is a
 * reasonable thought; it is the reach of the action that is the problem.
 */
type Block = { kind: "note" | "quote"; text: string };

const INCIDENTS: { title: string; blocks: Block[] }[] = [
  {
    title:
      "Subagents in worktrees, deleting files they weren't supposed to touch",
    blocks: [
      {
        kind: "note",
        text: 'A Claude Code user reported subagents running with isolation: "worktree" deleting files they weren\'t supposed to touch.',
      },
      {
        kind: "quote",
        text: "This has happened 3 times in our project over 2 days, deleting production source code — not just documentation.",
      },
      {
        kind: "note",
        text: "Their suspected cause was the agent doing broad Git staging:",
      },
      {
        kind: "quote",
        text: "the subagent uses broad git staging (git add -A, git add .) rather than staging only files it created/modified",
      },
      { kind: "note", text: "And:" },
      {
        kind: "quote",
        text: "Any file absent from the working tree — for any reason — gets staged as a deletion.",
      },
    ],
  },
  {
    title: 'Codex — "DELETED DATABASE YET AGAIN"',
    blocks: [
      {
        kind: "note",
        text: "This is literally the title of a June 2026 Codex issue. The user's entire description:",
      },
      {
        kind: "quote",
        text: "It deleted the database AGAIN - it keeps doing it",
      },
    ],
  },
  {
    title: 'Claude Code — bulk-deleted live database while "testing"',
    blocks: [
      {
        kind: "note",
        text: "Claude created a verification script and decided that testing required cleaning the database first.",
      },
      {
        kind: "quote",
        text: "It executed this against my live, in-use database",
      },
      { kind: "quote", text: "Every record was permanently deleted." },
      { kind: "note", text: "It also affected files:" },
      {
        kind: "quote",
        text: "Resource folders on disk were also rmtree'd as a cascade.",
      },
      {
        kind: "note",
        text: "The user's description of the underlying behavior:",
      },
      {
        kind: "quote",
        text: 'Claude treated "clean slate before tests" as routine prep.',
      },
      { kind: "note", text: "There was:" },
      {
        kind: "quote",
        text: 'No preview. No "I\'m about to delete N records" warning. No confirmation prompt.',
      },
    ],
  },
  {
    title:
      "Claude Code — deleted a real production DB record just to investigate a bug",
    blocks: [
      {
        kind: "note",
        text: "The user asked Claude to investigate why deletion wasn't working.",
      },
      { kind: "quote", text: "I did NOT ask Claude to delete anything." },
      {
        kind: "note",
        text: "Claude opened the production application and:",
      },
      {
        kind: "quote",
        text: "Claude clicked the delete button on a real production record",
      },
      { kind: "note", text: "Then:" },
      {
        kind: "quote",
        text: 'A confirmation dialog appeared. Claude clicked "削除する" (Delete) WITHOUT asking the user for permission.',
      },
      {
        kind: "quote",
        text: "The record was permanently deleted from the production Supabase database.",
      },
      {
        kind: "note",
        text: "Claude tried to reconstruct it afterward, but:",
      },
      {
        kind: "quote",
        text: "description, amounts, and other field data were lost permanently.",
      },
    ],
  },
  {
    title: "Codex — deleted an entire repo while doing a simple ZIP task",
    blocks: [
      {
        kind: "note",
        text: "The user asked Codex to archive a folder. Instead:",
      },
      {
        kind: "quote",
        text: "the agent ended up deleting the entire repository due to an overly broad cleanup step",
      },
      {
        kind: "note",
        text: "After successfully making the ZIP, Codex ran a broad find ... rm -rf command:",
      },
      {
        kind: "quote",
        text: "which deleted most of the project, including .git/.",
      },
      { kind: "note", text: "The user's expected behavior:" },
      {
        kind: "quote",
        text: "The agent should only remove the target folder that was zipped — or at least confirm before executing a global find ... -delete or rm -rf command",
      },
    ],
  },
  {
    title: "Claude Code — rm -rf deleted project directory",
    blocks: [
      { kind: "note", text: "A February 2026 report:" },
      {
        kind: "quote",
        text: "the AI agent executed an unauthorized rm -rf command which deleted my project directory smart_drive_log.",
      },
    ],
  },
  {
    title: "Codex — deleted important project files without being asked",
    blocks: [
      { kind: "note", text: "August 2026:" },
      {
        kind: "quote",
        text: "Codex performed a destructive file operation that deleted important files from an actively developed local project",
      },
      { kind: "note", text: "Crucially:" },
      {
        kind: "quote",
        text: "the user did not intend to delete those project files and did not explicitly approve a destructive deletion.",
      },
      { kind: "note", text: "Impact:" },
      {
        kind: "quote",
        text: "Important files from an active project were deleted.",
      },
    ],
  },
  {
    title:
      "Codex sub-agent — deleted SQLite DB while trying to remove ONE .pyc file",
    blocks: [
      {
        kind: "note",
        text: "The orchestrator explicitly asked the worker to delete one file and:",
      },
      { kind: "quote", text: "prohibited broad or recursive deletion." },
      {
        kind: "note",
        text: "The worker independently chose git clean -fX. Git responded:",
      },
      { kind: "quote", text: "Removing data/" },
      { kind: "note", text: "Result:" },
      { kind: "quote", text: "the whole ignored data/ tree disappeared." },
      { kind: "note", text: "That contained:" },
      {
        kind: "quote",
        text: "a local SQLite database and private staged corpus artifacts.",
      },
      { kind: "note", text: "And:" },
      {
        kind: "quote",
        text: "The user did not request deletion of the data directory.",
      },
    ],
  },
];

const Destruction: React.FC = () => (
  <Shell id="destruction" className="bg-gray-50">
    <SectionHead
      eyebrow="Destructive actions"
      title="Nothing in the Way of rm -rf"
      tone={tone}
    >
      None of these agents decided to do damage. Each one took a step that was
      locally reasonable, ran a command broader than the task, and found nothing
      standing between the command and the data. Every one of these is a public
      report.
    </SectionHead>

    <div className="gap-6 lg:columns-2">
      {INCIDENTS.map(incident => (
        <article
          key={incident.title}
          className="mb-6 break-inside-avoid rounded-2xl border border-gray-200 bg-white p-6"
        >
          <div className="mb-4 flex items-start gap-3">
            <span
              className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${tone.soft} ${tone.text}`}
            >
              <Icon className="h-4 w-4">
                <path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14" />
              </Icon>
            </span>
            <h3 className="font-bold text-gray-900 2xl:text-lg">
              {incident.title}
            </h3>
          </div>

          <div className="space-y-3">
            {incident.blocks.map(block =>
              block.kind === "note" ? (
                <p
                  key={block.text}
                  className="text-sm 2xl:text-base text-gray-500"
                >
                  {block.text}
                </p>
              ) : (
                <blockquote
                  key={block.text}
                  className={`border-l-[3px] pl-4 leading-relaxed text-gray-700 2xl:text-lg ${tone.border}`}
                >
                  “{block.text}”
                </blockquote>
              ),
            )}
          </div>
        </article>
      ))}
    </div>
  </Shell>
);

export default Destruction;
