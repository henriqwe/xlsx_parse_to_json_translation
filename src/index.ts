import xlsx from "node-xlsx";
import { formatObject } from "./formatObject";
import { arrayToJson } from "./arrayToJson";
import { generateKeys } from "./generateKeys";
import fs from "fs";

console.log("start");
const workSheetsFromFile = xlsx.parse(`${__dirname}/myFile.xlsx`, {});

const workSheetsData = workSheetsFromFile[0].data.filter(
  (data) => data.length
) as string[][];

const header = workSheetsData.shift() as string[];

const data = arrayToJson({ data: workSheetsData, header });

const englishKeys = generateKeys(data["INGLES"]);

const dataFormated = formatObject({ data, keys: englishKeys });

fs.writeFile(
  "./translations.json",
  JSON.stringify(dataFormated, undefined, 2),
  (err) => console.log("end")
);
