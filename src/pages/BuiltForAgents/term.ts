/**
 * The line constructors for the terminal transcripts. Kept out of parts.tsx so
 * that file only exports components.
 */

export type TermLine =
  | { kind: "cmd"; text: string }
  | { kind: "out"; text: string }
  | { kind: "hi"; text: string }
  | { kind: "gap" };

/** A command the developer typed. */
export const cmd = (text: string): TermLine => ({ kind: "cmd", text });

/** A line of output. */
export const out = (text: string): TermLine => ({ kind: "out", text });

/** Output worth looking at: the answer, the error, the grant. */
export const hi = (text: string): TermLine => ({ kind: "hi", text });

/** A blank line between commands. */
export const gap: TermLine = { kind: "gap" };
