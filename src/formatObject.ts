type Props = { data: { [x: string]: string[] }; keys: string[] };

type TObj = { [x: string]: { [y: string]: string } };

export function formatObject({ data, keys }: Props) {
  let obj: TObj = {};

  for (const [key, value] of Object.entries(data)) {
    for (const i in value) {
      obj[key] = { ...obj[key], [keys[i]]: value[i].trim() };
    }
  }

  return obj;
}
