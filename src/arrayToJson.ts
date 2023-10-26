type Props = { data: string[][]; header: string[] };

type Tdata = { [x: string]: string[] };

export function arrayToJson({ data, header }: Props) {
  let obj: Tdata = {};

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
