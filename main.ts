// "The World in One Day" — Friday 20 November 2026 (Node 22, standard library only).
// The poster is the entry.png beside this file: a newspaper front page summing up
// the day's news — the Shenzhen trilateral summit, the ICJ Rohingya verdict, COP31,
// the Hormuz tanker attacks, Anthropic's Nasdaq debut, the end of Gaza's ground
// operation and Cyclone Akvan. This program copies it to /output/entry.png.
// The file is a JPEG under 1 MiB at 1024x1024, and the copy is byte-for-byte, so
// both runs of the program write identical bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const DEST = join(OUTPUT_DIR, 'entry.png');

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), DEST);

// Sanity check: the gate refuses an empty file, so fail loudly instead of
// handing one in. A successful copy is byte-for-byte identical to the source.
const size = statSync(DEST).size;
if (size === 0) {
  throw new Error('entry.png copied to /output is empty');
}
console.log(`entry.png written (${size} bytes)`);
