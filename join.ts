import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const parts: string[] = [];

for (let i = 1; i <= 9; i += 1) {
  const filePath = join(root, `${i}.txt`);
  const content = readFileSync(filePath, "utf8").trimEnd();
  parts.push(content);
}

const output = `${parts.join("\n\n")}
`;

writeFileSync(join(root, "all.txt"), output, "utf8");
