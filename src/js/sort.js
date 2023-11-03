export function orderByProps(obj, order) {
  const result = [];
  const alphabetically = [];

  for (const key in obj) {
    if (order.includes(key)) {
      result.push({ key, value: obj[key] });
    } else {
      alphabetically.push({ key, value: obj[key] });
    }
  }

  result.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));
  alphabetically.sort((a, b) => a.key.localeCompare(b.key));

  return result.concat(alphabetically);
}