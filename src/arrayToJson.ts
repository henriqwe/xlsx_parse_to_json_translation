type Props = { data: string[][]; header: string[] };

type TObj = { [x: string]: string[] };

export function arrayToJson({ data, header }: Props) {
  let obj: TObj = {};

  for (const iterator of header) {
    obj[iterator] = [];
  }

  for (const iteratorData of data) {
    for (const i in iteratorData) {
      obj[header[i]].push(iteratorData[i]);
    }
  }

  return obj;
}
