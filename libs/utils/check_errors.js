export function checkErrors(errors, key) {
  return !!errors && !!errors[key]
    ? Array.isArray(errors[key])
      ? errors[key][0]
      : errors[key]
    : "";
}
