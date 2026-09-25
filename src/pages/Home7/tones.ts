/**
 * The accent a problem section is drawn in, so a long scroll has some variety.
 * Kept out of parts.tsx so that file only exports components.
 */

export interface Tone {
  /** Eyebrow, rule, and accent text. */
  text: string;
  /** Tinted fill behind icons and markers. */
  soft: string;
  /** The vertical rule down the left of a quote, as a background. */
  rule: string;
  /** The same accent as a border, for blockquotes and chain markers. */
  border: string;
}

export const TONES: Record<string, Tone> = {
  blue: {
    text: "text-blue-lbg",
    soft: "bg-blue-lbg/10",
    rule: "bg-blue-lbg/40",
    border: "border-blue-lbg/40",
  },
  purple: {
    text: "text-purple-lbg",
    soft: "bg-purple-lbg/10",
    rule: "bg-purple-lbg/40",
    border: "border-purple-lbg/40",
  },
  rust: {
    text: "text-rust",
    soft: "bg-rust/10",
    rule: "bg-rust/40",
    border: "border-rust/40",
  },
  amber: {
    text: "text-acc-amber",
    soft: "bg-acc-amber/10",
    rule: "bg-acc-amber/40",
    border: "border-acc-amber/40",
  },
  pink: {
    text: "text-acc-pink",
    soft: "bg-acc-pink/10",
    rule: "bg-acc-pink/40",
    border: "border-acc-pink/40",
  },
  teal: {
    text: "text-acc-teal",
    soft: "bg-acc-teal/10",
    rule: "bg-acc-teal/40",
    border: "border-acc-teal/40",
  },
  cyan: {
    text: "text-acc-cyan",
    soft: "bg-acc-cyan/10",
    rule: "bg-acc-cyan/40",
    border: "border-acc-cyan/40",
  },
  green: {
    text: "text-acc-green",
    soft: "bg-acc-green/10",
    rule: "bg-acc-green/40",
    border: "border-acc-green/40",
  },
};
