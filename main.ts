import fs from "node:fs";
import path from "node:path";

// The entry: one word naming the Wi-Fi — narcoleptic, because the
// network keeps falling asleep mid-sentence (and so does everyone on it).
const LINE = "Narcoleptic";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
let dir = outDir;
try {
  fs.mkdirSync(dir, { recursive: true });
} catch {
  dir = "./output";
  fs.mkdirSync(dir, { recursive: true });
}
fs.writeFileSync(path.join(dir, "entry.txt"), LINE, "utf8");
