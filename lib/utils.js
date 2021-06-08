export function toDisplayName(idFormattedValue, fallbackValue) {
  return fallbackValue || idFormattedValue.split("-").join(" ");
}

export function toIDRFormat(price) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
}
