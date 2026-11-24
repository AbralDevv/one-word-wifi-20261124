import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one word, 7 chars — "Alleged"
const WORD = "Alleged";

// Output dir resolution: argv -> $MAKEFUN_OUTPUT_DIR -> /output
const outputDir =
  process.argv[2] || process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), WORD, "utf8");
