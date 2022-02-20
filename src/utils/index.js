export const capitalizeFirstLetterOfString = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1)

export const encode = (data) => {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) +
        '=' +
        encodeURIComponent(data[key])
    )
    .join('&')
}
