export function toDisplayName(idFormattedValue, fallbackValue) {
  return fallbackValue || idFormattedValue.replaceAll("-", " ");
}
