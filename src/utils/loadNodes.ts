import { SkillNode } from "../types/ascendancy";

// Glob import all JSON files from /data/
const nodeFiles = import.meta.glob("../data/*.json", { eager: true });

const nodeMap: Record<string, SkillNode[]> = {};

// Loop through and map each file to its base name
for (const path in nodeFiles) {
  const match = path.match(/\/([^\/]+)\.json$/);
  const name = match?.[1];
  if (name) {
    // @ts-ignore: glob import returns unknown
    nodeMap[name.toLowerCase()] = nodeFiles[path].default;
  }
}

// Export the function that fetches from our map
export function generateNodesForSubClass(name: string): SkillNode[] {
  return nodeMap[name.replace(/\s+/g, "").toLowerCase()] ?? [];
}
