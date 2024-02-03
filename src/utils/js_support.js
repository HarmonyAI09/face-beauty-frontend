export function swapObjectKeyValue(obj) {
  return Object.keys(obj).reduce((o, k) => ({ ...o, [obj[k]]: k }), {})
}