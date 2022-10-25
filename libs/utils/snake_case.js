import { isPlainObject, snakeCase, each } from "lodash-es";

function convertHashToSnakeCase(hash, ignore = []) {
  const snakeHash = {};
  each(hash, (v, k) => {
    const key = ignore.includes(k) ? k : snakeCase(k);
    if (isPlainObject(v)) {
      snakeHash[key] = convertToSnakeCase(v, ignore);
    } else {
      snakeHash[key] = v;
    }
  });
  return snakeHash;
}

export function convertToSnakeCase(value, ignore = ["filters[]"]) {
  if (isPlainObject(value)) {
    return convertHashToSnakeCase(value, ignore);
  } else {
    return ignore.includes(value) ? value : snakeCase(value);
  }
}
