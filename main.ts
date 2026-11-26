import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My plant has seen me cry, dance, and lose arguments to a towel — it still pretends to photosynthesize.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
