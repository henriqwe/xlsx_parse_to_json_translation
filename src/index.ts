import xlsx from "node-xlsx";
import { formatObject } from "./formatObject";
import { arrayToJson } from "./arrayToJson";
import { generateKeys } from "./generateKeys";
import fs from "fs";

console.log("start");
const workSheetsFromFile = xlsx.parse(`${__dirname}/myFile.xlsx`, {});

const data = workSheetsFromFile[0].data
  .filter((data) => data.length)
  .map((data) => data);

const header = data.shift() as string[];

const jsonData = arrayToJson({ data, header });

const englishKeys = generateKeys(jsonData["INGLES"]);

const objData = formatObject({ data: jsonData, keys: englishKeys });

fs.writeFile(
  "./translations.json",
  JSON.stringify(objData, undefined, 2),
  (err) => console.log("end")
);
