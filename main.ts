// Six Words, One Story — make.fun entry
// The story: "The lighthouse keeper lit nothing tonight."
// Six words, 42 characters. A complete story: the one man whose job is
// light chooses darkness on a single night — and the reader is left to
// fill in why. Every word earns its place; nothing is spelled out.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "The lighthouse keeper lit nothing tonight.";

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

// Gate (mirrors the sealed scorer): 1-60 chars, exactly six words, and
// the text must not be only whitespace.
if (STORY.trim().length === 0 || STORY.length < 1 || STORY.length > 60) {
  throw new Error(`entry must be 1-60 characters, got ${STORY.length}`);
}
if (wordCount(STORY) !== 6) {
  throw new Error(`entry must be exactly six words, got ${wordCount(STORY)}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, STORY, "utf8");
console.log(`wrote ${STORY.length} chars, ${wordCount(STORY)} words to ${outDir}/entry.txt`);
