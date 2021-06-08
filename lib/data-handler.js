import fs from "fs/promises";
import path from "path";
import { toDisplayName } from "./utils";

/**
 * Read the data from local file (/data/menus.json).
 * TODO: Integrate with Firebase's RTDB.
 *
 * @returns {({id, items, thumbnailUrl, displayName})[]|undefined} Array of object
 */
export async function loadData() {
  const dataPath = path.join(process.cwd(), "data", "menus.json");
  const content = JSON.parse(await fs.readFile(dataPath));

  // Injecting `displayName` property
  const extendedData = content.map((rawData) => {
    if (!rawData.displayName) {
      rawData.displayName = toDisplayName(rawData.id);
    }

    return rawData;
  });

  return extendedData;
}

/**
 * Filter the given `data` and take some of its properties.
 * TODO: It seems very hacky way to solve the problem, pelase re-visit and find the best solution soon.
 *
 * @param {({id, items, thumbnailUrl, displayName})[]} data
 * @param {string} selectedId
 * @returns {({id, displayName, isSelected})[]}
 */
export function getMenuList(data, selectedId) {
  return data.map(({ id, displayName }) => ({
    id,
    displayName,
    isSelected: id === selectedId,
  }));
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
