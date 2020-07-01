export async function getGifList(value) {
  const url = `http://api.giphy.com/v1/gifs/search?q=${value}&api_key=lEE9N6e7z1stz0zeW1EWD6e4AB3MIVEj&limit=20`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
}
