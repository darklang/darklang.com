/** One row of a captured shell session. */
export type Line =
  | { k: "cmd"; t: string }
  | { k: "out"; t: string }
  | { k: "err"; t: string }
  | { k: "cont"; t: string }
  | { k: "note"; t: string }
  | { k: "gap" };

export const cmd = (t: string): Line => ({ k: "cmd", t });
export const out = (t: string): Line => ({ k: "out", t });
export const err = (t: string): Line => ({ k: "err", t });
/** Input you are still typing, such as a heredoc body. */
export const cont = (t: string): Line => ({ k: "cont", t });
export const note = (t: string): Line => ({ k: "note", t });
export const gap: Line = { k: "gap" };
