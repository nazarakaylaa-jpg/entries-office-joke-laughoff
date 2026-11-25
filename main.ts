// One-Line Office Joke Laugh-Off — make.fun entry.
//
// Writes a single original one-line office joke to /output/entry.txt.
// The joke was drafted in three candidate passes and tightened to its
// sharpest form: a performance-review punchline about doing the work of
// three people and getting a compliment instead of two new hires.
//
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  'My performance review called me "a self-starter," which is HR for "you do the work of three people, so we complimented you instead of hiring two."';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
