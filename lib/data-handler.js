import fs from "fs/promises";
import path from "path";

/**
 * Read the data from local file (/data/menus.json).
 * TODO: Integrate with Firebase's RTDB.
 *
 * @returns {({id, items, thumbnailUrl, displayName})[]|undefined} Array of object { id, items, thumbnailUrl, displayName? }
 */
export async function loadData() {
  const dataPath = path.join(process.cwd(), "data", "menus.json");
  const content = JSON.parse(await fs.readFile(dataPath));

  return content;
}
