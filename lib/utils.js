export function toDisplayName(idFormattedValue, fallbackValue) {
  return fallbackValue || idFormattedValue.replaceAll("-", " ");
}

export function toIDRFormat(price) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
}
