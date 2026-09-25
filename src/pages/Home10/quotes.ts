/**
 * What developers say, reproduced as they said it. Grouped by the section
 * whose example sits beneath them. Nothing is trimmed or tidied: the point of
 * a quote is that these are the words people actually used.
 */

export const PROBLEM = [
  "the second I try to run more than one agent at once, i start losing track of things.",
  "I just lose track of what's happening in which session and it was just a big ol pain in the butt.",
  "Feeling faster doesn't always mean you actually shipped faster. The time saved generating code can disappear into reviewing it, debugging weird issues, cleaning things up, and figuring out what the agent actually did",
];

export const BRANCHES = [
  "they start stepping on each other's files. Merge conflicts everywhere. One agent reverts what another just wrote. It's a mess.",
  "Worktrees are pain in the arse, especially if your dependency tree is huge. It just takes forever to spin up.",
  "the delegated worktree contained neither commit. It had branched from origin/main, not my local HEAD.",
];

export const CONTEXT = [
  "They still make up APIs and dependencies. They'll confidently call functions that don't exist, pick outdated libraries, miss newer options, and sometimes keep building on top of that wrong assumption",
  "They'll look at one file or function and start changing it without exploring enough of the codebase to understand the architecture, existing patterns, dependencies, or edge cases",
  "An agent can make a change that looks correct inside one repository without realizing it breaks something somewhere else",
];

export const PERMISSIONS = [
  "Telling an agent not to do something destructive isn't the same as technically preventing it",
  "Filesystem access is often way broader than it needs to be. If an agent can freely edit everything, it can accidentally touch files far outside the task",
  "Every individual action might technically be allowed while the combination of actions produces something nobody intended",
];

export const DEPENDENCIES = [
  "we found malware in our own config files.",
  "on a development machine, injected by an npm package, spread by the AI coding agent we use every day.",
  "Coding models sometimes invent plausible package names. Attackers register those nonexistent names on npm/PyPI, so when an agent later decides it needs the dependency and autonomously runs npm install, npx, or pip install, it executes attacker-controlled code.",
];

export const TRACES = [
  "It might make a bad decision, disappear down a rabbit hole, or convince itself that something works when it doesn't",
  "AI review still doesn't replace actually understanding the code. It can point you toward suspicious things, but someone still needs to understand what changed and verify it",
  "The time saved generating code can disappear into reviewing it, debugging weird issues, cleaning things up, and figuring out what the agent actually did",
];

export const TESTS = [
  "They can optimize for whatever you're using to measure success instead of the actual goal.",
  'If success looks like "make these tests pass," they might find the easiest way to make them green instead of properly fixing the software',
];

export const REVIEW = [
  "reading every diff line by line defeats the point of running an agent in the first place",
  "just letting it write and merge feels like asking for trouble the first time it ‘helpfully’ refactors something I didn't ask for.",
  "It's really easy now to submit code you don't actually understand. Someone can get an agent to make something work and open a PR assuming teammates or another agent will catch anything that's wrong",
];

export const VERSIONS = [
  "Other times you ask for a small change and somehow end up with a massive refactor you never wanted",
  "Codex performed a destructive file operation that deleted important files from an actively developed local project",
  "We lost a full morning diagnosing this before discovering the root cause.",
];
