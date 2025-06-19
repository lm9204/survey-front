export const toLowerCaseKeys = (obj) => {
  const lowered = {};
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      lowered[key.toLowerCase()] = obj[key];
    }
  }
  return lowered;
}