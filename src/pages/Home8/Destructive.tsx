import React from "react";

import Section from "./Section";
import { Term } from "../BuiltForAgents/parts";
import { cmd, out, hi, gap } from "../BuiltForAgents/term";

/** The operation is checked before it happens, not reported after. */
const EXAMPLE = [
  cmd("dark run-script ./cleanup.dark"),
  out("  Error  permission denied"),
  hi("    operation   FileDelete ./data"),
  out("    granted     FileWrite ./build"),
  out("    policy      run"),
  gap,
  cmd("dark permissions requirements ./cleanup.dark"),
  out("  requires    FileWrite, FileDelete"),
  hi("  FileDelete is not granted on this machine"),
];

const Destructive: React.FC = () => (
  <Section
    id="destructive"
    category="Destructive actions"
    tinted
    reverse
    problems={[
      "An unauthorized rm -rf that deleted my project directory",
      "A sub-agent told to delete one .pyc file, and prohibited from recursive deletion, chose git clean -fX and the whole ignored data/ tree disappeared, SQLite database included",
      "Broad git staging: git add -A, git add ., and any file absent from the working tree gets staged as a deletion",
      "That deleted production source code, not just documentation, three times in two days",
      "It executed this against my live, in-use database, and every record was permanently deleted",
      "Resource folders on disk were also rmtree'd as a cascade, because a clean slate before tests read as routine prep",
      "Asked only to investigate why deletion was failing, it clicked delete on a real production record and confirmed the dialog itself",
      "An entire repository deleted after a simple ZIP task, including .git, by an overly broad cleanup step",
      "No preview. No I'm about to delete N records warning. No confirmation prompt",
    ]}
    title="A Destructive Operation Is a Decision the Runtime Makes"
    paras={[
      "File writes and deletes, subprocesses, datastore operations, network calls, and model calls are effects. Each one is a specific operation checked against the policies in force at the moment it happens, and access starts denied rather than granted.",
      "There is no layer where a broadly worded command is handed to a shell that carries it out and reports back afterwards. The check happens before the operation, which is the part that was missing from every report above.",
    ]}
    link={{ href: "/backends", label: "Effects and permissions" }}
    example={<Term lines={EXAMPLE} label="dark" />}
  />
);

export default Destructive;
