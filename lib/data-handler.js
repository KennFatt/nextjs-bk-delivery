export async function fetchData() {
  return fetch(process.env.FIREBASE_RTDB_ENDPOINT).then((response) =>
    response.json()
  );
}

/**
 * Utility function to transforming data into formatted value for the sake of UI/UX (end user) experience.
 * - Formatting raw integer price value into IDR.
 * - Forcing each menu data to have a `displayName` property.
 *
 * @param {Object[]} data Raw data from Firebase's Realtime Database.
 * @returns {{menus: {id, displayName, thumbnailUrl, items}[], products: }}
 */
export function transformData(data) {
  const currencyFormatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const products = [];
  const menus = data.map(({ items, ...menuData }) => {
    /** Format raw integer value into IDR */
    const formattedItems = items.map(({ price, ...itemData }) => {
      const item = {
        ...itemData,
        price: currencyFormatter.format(price),
        menuId: menuData.id,
      };

      /** Filter out each item into its own array */
      products.push(item);
      return item;
    });

    /** Force each menu object to have a `displayName` property. */
    return {
      ...menuData,
      displayName: menuData.displayName || menuData.id.split("-").join(" "),
      items: formattedItems,
    };
  });

  return { menus, products };
}
