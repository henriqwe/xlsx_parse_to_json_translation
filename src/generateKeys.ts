export function generateKeys(data: string[]) {
  return data.map((str) =>
    str
      .toLocaleLowerCase()
      .trim()
      .replaceAll(".", "")
      .replaceAll(",", "")
      .replaceAll("!", "")
      .replaceAll("?", "")
      .replaceAll("(", "")
      .replaceAll(")", "")
      .replaceAll("[", "")
      .replaceAll("]", "")
      .replaceAll("`", "")
      .replaceAll(":", "")
      .replaceAll("–", "-")
      .replaceAll(" ", "_")
  );
}
