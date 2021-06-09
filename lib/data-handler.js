import fs from "fs/promises";
import path from "path";
import { toDisplayName, toIDRFormat } from "./utils";

/**
 * Read the data from local file (/data/menus.json).
 * TODO: Integrate with Firebase's RTDB.
 *
 * @returns {({id, items, thumbnailUrl, displayName})[]|undefined} Array of object
 */
export async function loadData() {
  const dataPath = path.join(process.cwd(), "data", "menus.json");
  const content = JSON.parse(await fs.readFile(dataPath));

  const extendedData = content.map((rawData) => {
    // Injecting `displayName` property
    if (!rawData.displayName) {
      rawData.displayName = toDisplayName(rawData.id);
    }

    // Format native integer into IDR formatted string.
    const formattedItemsPrice = rawData.items.map((item) => ({
      ...item,
      price: toIDRFormat(item.price),
    }));
    rawData.items = formattedItemsPrice;

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
 * @param {({id, items, thumbnailUrl, displayName})[]} data The data from `loadData()` function.
 * @param {string} menuId Find the given `menuId` inside the `data`
 * @returns {({id, imageUrl, name, price})|undefined}
 */
export function getMenuById(data, menuId) {
  return data.find(({ id }) => menuId === id);
}

/**
 * An object that refer to product details.
 *
 * @param {({id, items, thumbnailUrl, displayName})[]} data
 * @param {string} productId
 * @returns {{menuId, id, name, imageUrl, price}|undefined}
 */
export function getProductDetail(data, productId) {
  for (const menu of data) {
    const product = menu.items.find((item) => item.id === productId);
    if (!product) {
      continue;
    }

    return {
      menuId: menu.id,
      ...product,
    };
  }
}
