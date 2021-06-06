import fs from "fs/promises";
import path from "path";

/**
 * Read the data from local file (/data/menus.json).
 * TODO: Integrate with Firebase's RTDB.
 *
 * @returns {({id, items, thumbnailUrl, displayName})[]|undefined} Array of object
 */
export async function loadData() {
  const dataPath = path.join(process.cwd(), "data", "menus.json");
  const content = JSON.parse(await fs.readFile(dataPath));

  return content;
}

/**
 * Get all menu ids from the loaded data.
 *
 * @param {({id, items, thumbnailUrl, displayName})[]} data The data from `laodData()` function.
 * @returns {string[]}
 */
export function getMenuIds(data) {
  return data.map(({ id }) => id);
}

/**
 * Get the data (object) for specific menu by its id.
 *
 * @param {*} data The data from `loadData()` function.
 * @param {string} menuId Find the given `menuId` inside the `data`
 * @returns {({id, imageUrl, name, price})|undefined}
 */
export function getMenuById(data, menuId) {
  return data.find(({ id }) => menuId === id);
}
