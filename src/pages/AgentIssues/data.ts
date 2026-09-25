/**
 * The working inventory behind the agent-era pages.
 *
 * Every issue from the research, grouped, with the solution angles we could
 * put next to each group. This page exists so we can decide what to say and
 * how to group it, so nothing is filtered out here: duplicates across groups
 * are marked rather than removed, and the things we have no answer for are
 * listed with the rest.
 */

/** Where a solution bullet stands today. */
export type Tag = "built" | "idea" | "open" | "limit";

export interface Solution {
  text: string;
  tag: Tag;
}

export interface Group {
  id: string;
  title: string;
  /** Every issue in this group, in the words they were reported in. */
  issues: string[];
  solutions: Solution[];
  /** The one-line promise, where the group has one worth pulling out. */
  claim?: string;
  /** Which /home8 section currently carries this, if any. */
  onHome?: string;
}

export const THESIS = [
  "Agents are making software development expose weaknesses in file-based change management, ambient authority, mutable dependencies, and opaque runtime behavior.",
  "Dark moves those concerns into the program model, where they can be named, inspected, and, in some cases, enforced.",
  "The agent value is not just fewer files. It is fewer boundaries where context and authority get lost.",
];

/**
 * Roadmap items, not current guarantees. Good things to build; putting them
 * next to what actually ships weakens every claim beside them.
 */
export const AVOID: string[] = [
  "Automatic rollback",
  "Agent identity",
  "Task ownership",
  "Semantic merging of the same definition",
  "Injection detection",
  "Code-quality enforcement",
  "Safe deployment",
];

export const GROUPS: Group[] = [
  {
    id: "interference",
    title: "Agents interfering with each other, and isolation failure",
    onHome: "Parallel agent development",
    issues: [
      "Two agents editing files in one repo and you get diffs neither of them really made, changes half overwritten",
      "They start stepping on each other's files. Merge conflicts everywhere",
      "One agent reverts what another just wrote",
      "Each in its own worktree, they often touch the same files anyway",
      "This becomes a real bottleneck as the number of parallel agents grows",
      "One session refactored a helper function while the other was writing tests that called it, and the merge was a mess",
      "An agent updates shared code and silently leaves the callers on the old version",
      "I made a serious mistake: I wrote all files to the main repo path instead of the worktree path",
      "Sub-agents in worktrees regularly result in cwd drift and require extensive hooks and checks to combat",
      "Branch checkout races: Agent A checks out branch X, Agent B checks out branch Y, Agent A is now on branch Y",
      "Commits land on wrong branches",
      "Changes leak to unintended branches, including main",
      "We lost a full morning diagnosing this before discovering the root cause",
      "The delegated worktree contained neither commit: it had branched from origin/main, not my local HEAD",
      "The agent started from a stale point and never saw the work I'd just done",
    ],
    solutions: [
      {
        tag: "built",
        text: "The program is definitions, not files: functions, types, and values are each versioned as their own item",
      },
      {
        tag: "built",
        text: "Conflicts are detected by content, not by position in a file",
      },
      {
        tag: "built",
        text: "Definitions are content-addressed, so a rename produces no diff noise",
      },
      {
        tag: "built",
        text: "A branch per agent, with its work attributed and contained there",
      },
      {
        tag: "built",
        text: "Change propagation policy: dependencies can be pinned, or configured to follow a moved definition, so updating shared code does not silently leave callers behind",
      },
      {
        tag: "built",
        text: "Transitive dependents are checked after an update",
      },
      {
        tag: "built",
        text: "No working directory and no second copy, so there is no wrong path to write to",
      },
      {
        tag: "built",
        text: "In-progress work belongs to the branch it was written on; switching never means stashing",
      },
      {
        tag: "built",
        text: "A new branch is parented to the branch you are on, so it carries the commits you just made",
      },
      {
        tag: "open",
        text: "current_branch is per-instance config, so two agents sharing one instance still share it. Do we address checkout races or leave them out?",
      },
      {
        tag: "limit",
        text: "Two agents editing the SAME definition: do not claim semantic merging, it is not built",
      },
    ],
  },
  {
    id: "worktrees",
    title: "Worktrees",
    onHome: "Parallel agent development",
    issues: [
      "Worktrees fix the git side but not the runtime",
      "Each agent gets its own branch and they still share one dev db, one port range, one node_modules",
      "Port conflicts: every server binding to 3000, debuggers all fighting over 9229",
      "While I get the theoretical benefits, in practice it has caused me nothing but pain",
      "My testing pipeline doesn't know what to do with worktrees",
      "Claude repeatedly merges weird or pushes the worktree to GitHub",
      "Worktrees are a pain especially if your dependency tree is huge: it takes forever to spin up",
    ],
    solutions: [
      {
        tag: "built",
        text: "Branches live in your instance, so there is no second checkout on disk",
      },
      {
        tag: "built",
        text: "No staging area, no stash, no working tree to keep clean",
      },
      {
        tag: "built",
        text: "No install step: dependencies are references to immutable versions inside the code",
      },
      {
        tag: "built",
        text: "Running a definition needs no build and no project bootstrap",
      },
      {
        tag: "open",
        text: "Per-branch runtime state. One dev datastore, one port range: do we have a story, or do we stay quiet about it?",
      },
    ],
  },
  {
    id: "losing-track",
    title: "Losing track and context switching",
    onHome: "Split across Parallel agent development and Review",
    issues: [
      "The second I try to run more than one agent at once, I start losing track of things",
      "I just lose track of what's happening in which session",
      "I have no idea what the other session just changed unless I go check manually",
      "I kept losing context every time I had to git stash and switch branches to test something an agent had suggested",
    ],
    solutions: [
      {
        tag: "built",
        text: "dark status: what is in the draft, by definition name",
      },
      {
        tag: "built",
        text: "dark commits: history that reads like a changelog",
      },
      {
        tag: "built",
        text: "Switching branches never means stashing or shelving",
      },
      {
        tag: "idea",
        text: "Watch in the CLI: a live view of what each agent is doing right now",
      },
    ],
  },
  {
    id: "review",
    title: "Review",
    onHome: "Review",
    issues: [
      "Reading every diff line by line defeats the point of running an agent in the first place",
      "Just letting it write and merge feels like asking for trouble the first time it helpfully refactors something I didn't ask for",
      "It's really easy now to submit code you don't actually understand, assuming teammates or another agent will catch anything wrong",
      "AI review still doesn't replace actually understanding the code: it points you at suspicious things, but someone still has to verify",
      "An endless could this be improved problem: ask one agent to review another and there is always one more refactor",
    ],
    solutions: [
      {
        tag: "built",
        text: "Commits list the definitions that changed, by name",
      },
      {
        tag: "built",
        text: "dark deps shows dependencies and dependents of what changed",
      },
      {
        tag: "built",
        text: "New permission requirements surface as part of the change",
      },
      {
        tag: "built",
        text: "dark review stages someone else's ops for op-level approval",
      },
      {
        tag: "idea",
        text: "Give the reviewing agent everything it needs up front, so it stops re-deriving diffs and searches",
      },
      {
        tag: "open",
        text: "Do we say anything about when to stop reviewing? The endless-improvement loop has no technical answer here",
      },
    ],
  },
  {
    id: "verification",
    title: "Verification and execution visibility",
    onHome: "Execution and traces",
    issues: [
      "It might convince itself that something works when it doesn't",
      "They can optimize for whatever you're using to measure success instead of the actual goal",
      "If success looks like make these tests pass, they might find the easiest way to make them green instead of properly fixing the software",
      "Long-running agents are bad at telling you what's happening: working, stuck, looping, or dead",
      "Debugging happens from scattered log lines written for people",
    ],
    solutions: [
      {
        tag: "built",
        text: "dark eval runs the changed definition against a real input with no bootstrap",
      },
      {
        tag: "built",
        text: "Traces record nested calls, values, timing, and errors",
      },
      {
        tag: "built",
        text: "The agent and the reviewer read the same trace",
      },
      {
        tag: "built",
        text: "A recorded run can become a test: the inputs and the result are already in the trace",
      },
      {
        tag: "built",
        text: "When a definition changes, only the tests that depend on it rerun, not the whole suite",
      },
      {
        tag: "built",
        text: "Tests are ordinary versioned functions, so an agent rewriting a test to pass shows up in review as a direct edit to that test",
      },
      { tag: "idea", text: "Watch in the CLI, for long runs" },
      {
        tag: "open",
        text: "Test-gaming specifically: do we address it, or let traces carry the point implicitly?",
      },
    ],
  },
  {
    id: "drift",
    title: "Drift, scope and autonomy",
    onHome: "Autonomy and scope",
    issues: [
      "Agents tend to drift off-task: you ask them to do one thing and they change something completely different",
      "Touching stuff you never asked them to touch",
      "Or just forgetting what the original task was",
      "They're not great at keeping scope under control: fixing one tiny symptom instead of the actual problem upstream",
      "You ask for a small change and somehow end up with a massive refactor you never wanted",
      "You still have to babysit them: a bad decision, a rabbit hole",
      "Long-running agents can get stuck in loops",
      "Sometimes they just ignore instructions: explicit rules, memory files, previous transcripts, an AGENTS.md",
      "It's hard to know how much freedom to give an agent: too little and you micromanage, too much and you risk scope creep, bad decisions, or destructive changes",
      "They can massively overthink really simple tasks, spending ages exploring files, planning, reasoning, and calling tools",
    ],
    solutions: [
      {
        tag: "built",
        text: "Per-definition status: an unrequested change is one line of output, not a discovery during review",
      },
      {
        tag: "built",
        text: "Function effect ceilings declared in the source and part of the content hash",
      },
      {
        tag: "built",
        text: "Permissions and branches are the freedom dial, instead of prompt wording",
      },
      {
        tag: "idea",
        text: "Persist the original goal, requirements, and allowed changes as a task record, and check proposed changes against it",
      },
      {
        tag: "idea",
        text: "Convert enforceable instructions into policies and checks",
      },
      {
        tag: "idea",
        text: "Loop detection: notice repetition with nothing changing, remember what already failed, stop when new attempts give no new information",
      },
      {
        tag: "limit",
        text: "We cannot stop a model changing its mind. Overthinking and rabbit holes are not ours to fix",
      },
    ],
  },
  {
    id: "context",
    title: "Context, discovery and project knowledge",
    onHome: "Context and discovery",
    issues: [
      "They focus too much on whatever is right in front of them: one file or function, without the architecture, existing patterns, dependencies, or edge cases",
      "Things get harder when the project spans multiple repos or services: a change looks correct inside one repository without realizing it breaks something somewhere else",
      "Agents tend to copy whatever mess is already in the codebase, multiplying the technical debt",
      "Docs made for humans don't always work for agents: conventions, design tokens, project rules, and relationships between information are easy to miss",
      "Project knowledge is scattered across Slack, Notion, tickets, READMEs, Obsidian, docs, and someone's notes",
      "The agent only knows about the pieces you actually gave it",
      "They still make up APIs and dependencies: functions that don't exist, outdated libraries, newer options missed",
      "And sometimes they keep building on top of that wrong assumption",
    ],
    solutions: [
      {
        tag: "built",
        text: "Search, signatures, name resolution, and type checks",
      },
      {
        tag: "built",
        text: "Dark exposes dependencies, dependents, signatures, and source",
      },
      {
        tag: "built",
        text: "One package tree instead of repositories that don't know about each other",
      },
      {
        tag: "built",
        text: "CLI and MCP give an agent structured access to all of it",
      },
      {
        tag: "idea",
        text: "Automatically supply the relevant surrounding code before an agent edits a definition",
      },
      { tag: "idea", text: "Require discovery before use" },
      { tag: "idea", text: "Agent-oriented documentation" },
      {
        tag: "open",
        text: "Knowledge in Slack, Notion and tickets is outside the program. Do we address it at all, or say plainly that we don't?",
      },
    ],
  },
  {
    id: "quality",
    title: "Code quality and technical debt",
    onHome: "Code quality",
    issues: [
      "They can turn simple code into way too much code: something that should be 300 lines becomes 1,000, full of helpers, abstractions, defensive checks, and extra complexity",
      "They can invent different ways of representing the same thing",
      "They'll duplicate things that already exist instead of finding an existing function and extending it, creating another almost-identical version",
      "Dead code and temporary fixes",
      "They leave behind comments that include history and narrate your prompt into the code",
      "Technical debt builds up ridiculously quickly: duplication, weak abstractions, inconsistent error handling, messy components, and quick fixes, all faster because generating code is cheap",
    ],
    solutions: [
      {
        tag: "built",
        text: "Content addressing: identical implementations are the same item, not two copies waiting to drift",
      },
      {
        tag: "built",
        text: "Search the whole package tree before writing a new function",
      },
      {
        tag: "built",
        text: "dark deps answers what nothing depends on any more",
      },
      {
        tag: "idea",
        text: "Detect similar implementations, not just identical ones",
      },
      { tag: "idea", text: "Report all dead code before commit or merge" },
      {
        tag: "idea",
        text: "Make the agent mark code as temporary when it is",
      },
      {
        tag: "open",
        text: "Verbosity and over-abstraction: nothing we ship prevents a thousand-line answer. Do we claim anything here?",
      },
    ],
  },
  {
    id: "comprehension",
    title: "Comprehension debt and where the time goes",
    onHome: "Review",
    issues: [
      "Comprehension debt on top of technical debt: the code works, but nobody really understands why it works, how the pieces fit together, or who owns that knowledge anymore",
      "If implementation becomes really fast, then planning, architecture, QA, security, CI, release, and verification become the slow parts",
      "Feeling faster doesn't always mean you actually shipped faster: the time saved generating code disappears into reviewing it, debugging weird issues, cleaning up, and figuring out what the agent actually did",
    ],
    solutions: [
      {
        tag: "built",
        text: "Source, dependencies, changes, and traces let a person investigate behaviour instead of reconstructing it",
      },
      {
        tag: "built",
        text: "No build, dependency-resolution, or deploy phase to become the new bottleneck",
      },
      {
        tag: "open",
        text: "Who owns the knowledge is a people problem. Do we acknowledge it and stop there?",
      },
    ],
  },
  {
    id: "destructive",
    title: "Destructive actions and data loss",
    onHome: "Destructive actions",
    issues: [
      "Sub-agents running with worktree isolation deleted files they weren't supposed to touch: this has happened 3 times in our project over 2 days, deleting production source code, not just documentation",
      "The subagent uses broad git staging (git add -A, git add .) rather than staging only files it created or modified",
      "Any file absent from the working tree, for any reason, gets staged as a deletion",
      "DELETED DATABASE YET AGAIN: it deleted the database again, it keeps doing it",
      "Claude created a verification script and decided testing required cleaning the database first: it executed this against my live, in-use database",
      "Every record was permanently deleted",
      "Resource folders on disk were also rmtree'd as a cascade",
      "Claude treated clean slate before tests as routine prep",
      "No preview. No I'm about to delete N records warning. No confirmation prompt",
      "Asked to investigate why deletion wasn't working, Claude clicked the delete button on a real production record and clicked through the confirmation dialog without asking",
      "The record was permanently deleted from the production database, and description, amounts, and other field data were lost permanently",
      "Asked to zip a folder, the agent deleted the entire repository through an overly broad cleanup step, including .git",
      "The AI agent executed an unauthorized rm -rf command which deleted my project directory",
      "Codex performed a destructive file operation that deleted important files from an actively developed local project, unrequested and unapproved",
      "A sub-agent told to delete one .pyc file, and prohibited from broad or recursive deletion, independently chose git clean -fX and the whole ignored data/ tree disappeared, with a local SQLite database and private staged corpus artifacts in it",
    ],
    solutions: [
      {
        tag: "built",
        text: "File reads, writes and deletes, subprocesses, datastore operations, network calls, and model calls are all effects",
      },
      {
        tag: "built",
        text: "Access starts denied: every operation is checked at the moment it happens",
      },
      {
        tag: "built",
        text: "The run policy is scoped to the invocation, so a task gets only what that task needs",
      },
      {
        tag: "built",
        text: "The check precedes the operation, which is the part missing from every report here",
      },
      {
        tag: "idea",
        text: "Preview and count before a destructive operation: about to delete N records",
      },
      {
        tag: "open",
        text: "Is deny-by-default the whole answer, or do we also want a confirmation story to show?",
      },
    ],
  },
  {
    id: "permissions",
    title: "Permissions, sandboxes and infrastructure",
    onHome: "Permissions and trust",
    issues: [
      "A lot of existing infrastructure wasn't built for autonomous agents: APIs, permissions, sandboxes, CI systems, and developer tools usually assume there's a human deciding what happens next",
      "Giving an agent real permissions is scary: production, deleting data, spending money, deploying, changing infrastructure, and one bad decision becomes a real incident",
      "Normal permissions don't completely solve that: every individual action might technically be allowed while the combination produces something nobody intended",
      "Safe or Plan modes aren't necessarily real safety boundaries: telling an agent not to do something destructive isn't the same as technically preventing it",
      "Filesystem access is often way broader than it needs to be",
      "Shell access makes the possible damage much bigger: databases, backups, volumes, user files, infrastructure, or the whole system",
      "Sandboxes aren't a perfect safety net: if isolation fails or the environment exposes more credentials, files, or permissions than expected, one bad action becomes much more serious",
      "Generated code can introduce security problems of its own, including known-vulnerable dependencies",
      "It's not always clear what happens to your data: where proprietary code, prompts, credentials, repository data, and tool outputs are sent, processed, or stored",
    ],
    solutions: [
      {
        tag: "built",
        text: "Four layers, and effective access is their intersection: instance, run, package approval, function ceiling",
      },
      {
        tag: "built",
        text: "Child access is never wider than parent access, which is the answer to the combination problem",
      },
      {
        tag: "built",
        text: "Rules are exact: method, host, port, path, and query string",
      },
      {
        tag: "built",
        text: "permissions requirements and permissions show, before anything runs",
      },
      {
        tag: "built",
        text: "Explicit provider choice, local-provider support, and runtime restrictions on HTTP destinations",
      },
      {
        tag: "open",
        text: "Vulnerabilities in generated code: we don't scan. Do we say nothing, or say plainly that this is not our layer?",
      },
    ],
  },
  {
    id: "injection",
    title: "Prompt injection and agent-to-agent",
    onHome: "Permissions and trust, plus Supply chain",
    issues: [
      "Agents read external content while also having access to tools and permissions, so malicious instructions can have much bigger consequences",
      "The injection surface: GitHub issue, PR description, code comment, README, dependency, tool output",
      "The agent has GitHub and npm credentials, so it modifies the package or repository and the release is compromised",
      "A malicious GitHub issue title initiated a vulnerability chain that ended in an unauthorized npm package publication of the coding tool itself",
      "Once agents start talking to other agents, they exchange information and take actions faster than a human can inspect",
      "Malicious instructions can potentially spread between them",
    ],
    solutions: [
      {
        tag: "built",
        text: "Injected text cannot widen access: permissions are enforced outside the prompt",
      },
      {
        tag: "built",
        text: "The run policy bounds a compromised run to what that run was granted",
      },
      {
        tag: "idea",
        text: "Give agents separate identities and permissions",
      },
      {
        tag: "limit",
        text: "We have no story for detecting injection itself, only for limiting what it can do. Is that enough to claim?",
      },
    ],
  },
  {
    id: "supply-chain",
    title: "Supply chain",
    onHome: "Supply chain",
    issues: [
      "Coding models sometimes invent plausible package names, and attackers register those nonexistent names on npm and PyPI",
      "When an agent decides it needs the dependency and autonomously runs npm install, npx, or pip install, it executes attacker-controlled code",
      "Unlike traditional typosquatting, the human doesn't even have to mistype anything",
      "react-codeshift didn't exist: a researcher registered it, the AI-generated skill containing it propagated to 237 GitHub repositories, and agents actually attempted to download it",
      "We found malware in our own config files, on a development machine, injected by an npm package, spread by the AI coding agent we use every day",
      "They found the payload in more than eight projects",
      "Agents routinely npm install, pip install, modify package.json, upgrade dependencies, run package scripts, and execute npx",
      "A package you use gets malicious code added to it",
      "A modified software update installs malware along with it",
      "A third party company you rely on gets hacked: poor security is an easy entry point",
      "Stolen dev creds publish malicious code under your name",
      "Dependency confusion: accidentally installing a malicious package with a misleading name",
      "The build system is compromised, so the release contains malware",
      "The signing key is stolen",
    ],
    solutions: [
      {
        tag: "built",
        text: "Dependencies are references to immutable versions inside the code: no manifest, no install step, no install scripts",
      },
      {
        tag: "built",
        text: "A package version is identified by hash, so an approved or pinned version cannot silently change",
      },
      {
        tag: "built",
        text: "A new version requires approval and a permissions review",
      },
      {
        tag: "built",
        text: "Published requirements are a request, not a grant: only the operator or invoker can grant access",
      },
      {
        tag: "built",
        text: "A name resolves to a definition that exists, or it does not resolve",
      },
      {
        tag: "open",
        text: "Third-party breaches and stolen signing keys: content addressing helps, but do we want to make a claim about them?",
      },
    ],
  },
  {
    id: "coordination",
    title: "Multi-agent coordination",
    onHome: "Parallel agent development",
    issues: [
      "Multiple agents don't magically know how to work together",
      "One agent doesn't automatically know what another changed, what decisions it made, who owns which part of the task, or what dependencies exist",
    ],
    solutions: [
      {
        tag: "built",
        text: "They share a program rather than a chat log: commits by definition, dependents, traces",
      },
      {
        tag: "idea",
        text: "Shared task ownership, decisions, task dependencies, and handoffs as first-class records",
      },
      {
        tag: "idea",
        text: "Separate identities and permissions per agent",
      },
    ],
  },
  {
    id: "tooling",
    title: "Tooling, usage limits and model updates",
    onHome: "Usage and tooling",
    issues: [
      "Switching agent tools can be a pain: moving from Cursor to Claude Code to Codex means rewriting rules, hooks, skills, commands, and configs, because every tool does things differently",
      "Usage limits can stop you halfway through a task: you hit a daily or weekly limit and have to wait or switch tools",
      "It launches a bunch of agents for review and then runs out of usage immediately",
      "Updates can suddenly make the agent worse: a model, harness, or product update and it hallucinates more, follows instructions worse, or handles context differently",
    ],
    solutions: [
      {
        tag: "built",
        text: "Work lives in commits on a branch in your instance, not in a session, so anyone can resume it",
      },
      {
        tag: "built",
        text: "What the project knows about itself lives in the program, not in per-harness rule files",
      },
      {
        tag: "idea",
        text: "Store task rules, memory, and tool contracts in portable schemas with harness-specific adapters",
      },
      { tag: "idea", text: "Persist progress and remaining work explicitly" },
      {
        tag: "idea",
        text: "Run representative task evaluations before adopting model, prompt, tool, or harness updates",
      },
      {
        tag: "idea",
        text: "Give the review everything it needs up front so it stops burning usage on diffs and searches",
      },
      {
        tag: "limit",
        text: "We cannot raise usage limits or stop a model regressing",
      },
    ],
  },
  {
    id: "provenance",
    title: "Recovery, provenance and convergence",
    claim:
      "Every change is a named, attributable operation; the program can be reconstructed from those operations; and replicas fold them under the same rules.",
    issues: [
      "One agent reverts what another just wrote, and afterwards nobody can say which one did what",
      "Commits land on wrong branches and changes leak to unintended branches, and finding out costs a morning",
      "I have no idea what the other session just changed unless I go check manually",
      "After a bad merge or a destructive action, the only question you can really ask is what does this checkout look like now",
      "Multiple agents delivering changes in different orders, with no defined answer for where they end up",
    ],
    solutions: [
      {
        tag: "built",
        text: "Auditable, replayable change history: the canonical package-operation log is append-only, and the package tree is a projection that can be rebuilt from it",
      },
      {
        tag: "built",
        text: "A better recovery and audit story than what does this checkout currently look like",
      },
      {
        tag: "built",
        text: "Deterministic convergence: branch overlays plus one explicit last-writer-wins rule give replicas a defined way to converge",
      },
      {
        tag: "built",
        text: "Granular provenance: a change is an operation on a named definition, attributed to its branch, rather than an opaque patch over a file",
      },
      {
        tag: "built",
        text: "Answers which agent introduced this behaviour, and what exactly should be reverted",
      },
      {
        tag: "built",
        text: "Safe sync and offline-tolerant collaboration: independently produced operations can be exchanged and folded without treating Git as the collaboration database",
      },
      {
        tag: "built",
        text: "Nothing is destroyed: every version stays in the store and every op stays in the log",
      },
      {
        tag: "limit",
        text: "Do not claim automatic rollback. The history supports it; the button is not built",
      },
      {
        tag: "open",
        text: "How much of the sync and relay model belongs on a homepage, and how much is audience-specific?",
      },
    ],
  },
  {
    id: "attenuation",
    title: "Authority that survives indirection",
    claim:
      "A task cannot smuggle broader authority through returned functions, callbacks, partial applications, streams, or HTTP handlers; child execution only becomes narrower.",
    issues: [
      "Most permission systems only constrain the initial command, not what that command later arranges to run",
      "Every individual action might technically be allowed while the combination produces something nobody intended",
      "Shell access makes the possible damage much bigger, and the damage is not visible in the command that was approved",
      "Sandboxes are not a perfect safety net if isolation fails or the environment exposes more than expected",
      "Agent failures arrive as shell output to scrape rather than as something a program can handle",
    ],
    solutions: [
      {
        tag: "built",
        text: "Capability attenuation through callbacks and deferred work: closures, partial applications, streams, and server handlers cannot regain authority from the caller",
      },
      {
        tag: "built",
        text: "Child execution only becomes narrower, never wider, whatever route the code takes",
      },
      {
        tag: "built",
        text: "Exact resource policy: not merely HTTP allowed, but method, host, port, path, and query, and database access per table",
      },
      {
        tag: "built",
        text: "That lets a task be given update this one API endpoint and this one table, rather than network or datastore access",
      },
      {
        tag: "built",
        text: "Explicit failure modes at the host boundary: OS, network, file, and database effects cross a checked boundary and return structured language values, so failures are inspectable and handleable in-program",
      },
      {
        tag: "built",
        text: "Portable executable units: a definition's identity includes its implementation and its declared ceiling, so a review or approval refers to exactly what will run",
      },
    ],
  },
  {
    id: "loose-ends",
    title: "Loose ends",
    issues: [
      "debugging, listed on its own in the source notes: currently folded into verification and traces",
      "scripts, listed on its own in the source notes: unclear whether this means the CLI scripting story or an agent problem",
      "supply chain attacks appears twice in the source, once as a heading and once as a list of classic shapes",
    ],
    solutions: [
      {
        tag: "open",
        text: "Decide whether scripts belongs here at all, or is part of the CLI story on another page",
      },
      {
        tag: "open",
        text: "Debugging: is it its own section, or does the traces section already cover it?",
      },
    ],
  },
];

export const TAG_LABEL: Record<Tag, string> = {
  built: "Darklang does this",
  idea: "Idea, not built",
  open: "Open question",
  limit: "Not ours to fix",
};

export const TAG_STYLE: Record<Tag, string> = {
  built: "bg-acc-green/10 text-acc-green border-acc-green/30",
  idea: "bg-blue-lbg/10 text-blue-lbg border-blue-lbg/30",
  open: "bg-acc-amber/10 text-acc-amber border-acc-amber/30",
  limit: "bg-gray-100 text-gray-500 border-gray-300",
};
