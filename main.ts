import { mkdirSync, writeFileSync } from "node:fs";

// Midnight Fridge Roast — v2 (polished: tighter bouncer turn, midnight rule is the target)
const entry =
  "My smart fridge locks at midnight like a nightclub bouncer — mate, the only VIP in there is last Tuesday's leftover pizza.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
console.log(entry);
