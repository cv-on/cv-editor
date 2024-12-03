export const capitalize = (str: string) =>
  str ? `${str[0].toUpperCase()}${str.substring(1, str.length)}` : "";

export const getShortUrl = (url: string) =>
  url ? url.replace("https://", "").replace("www.", "") : "";

export const getClickableUrl = (shortUrl: string) =>
  shortUrl ? `https://${shortUrl}` : "";
