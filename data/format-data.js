import fs from "fs";
import XLSX from "xlsx";

const xlsxToJson = (filePath) => {
  const workbook = XLSX.readFile(filePath); // Leer el archivo
  const sheetName = workbook.SheetNames[0]; // Obtener la primera hoja
  const sheet = workbook.Sheets[sheetName]; // Acceder a la hoja
  return XLSX.utils.sheet_to_json(sheet); // Convertir a JSON
};

const jsonData = xlsxToJson("datos_patrimonio_final_v1.xlsx");

const formatArray = (tagToSearch, data, label1, label2) => {
  return Object.keys(data)
    .filter((key) => key.startsWith(tagToSearch)) // Filtra solo las claves que empiezan con "heritageForYear_"
    .map((key) => ({
      [label1]: parseInt(key.split("_")[1]), // Extrae el año del nombre de la clave
      [label2]: data[key], // Obtiene el valor correspondiente
    }));
};

const getRandomHex = () => {
  const randomHex = () =>
    Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");

  const r = randomHex();
  const g = randomHex();
  const b = randomHex();

  return `#${r}${g}${b}`;
};

/* Generar arreglos */

const formatWithArrays = jsonData.map((data) => ({
  dni: `${data.dni}`,
  fullNames: data.fullNames,
  shortName: data.shortName,
  abbreviatedName: data.abbreviatedName,
  photos: data.photos,
  position: data.position,
  status: data.status,
  currentBench: data.currentBench,
  currentBenchCode: data.currentBenchCode,
  partyLogo: data.partyLogo,
  record: data.record,
  heritageForYear: formatArray("heritageForYear_", data, "year", "amount"),
  separationRange: data.separationRange,
  djiStatus: formatArray("djiStatus_", data, "year", "status"),
  criminalRecordNumber: data.criminalRecordNumber,
  criminalRecordDetails: data.criminalRecordDetails.split(";"),
  quantityContractsRucNaturalPerson: data.quantityContractsRucNaturalPerson,
  detailContractsRucNaturalPerson: data.detailContractsRucNaturalPerson,
  quantityCompanyLinks: data.quantityCompanyLinks,
  detailCompanyLinks: data.detailCompanyLinks || "",
  color: getRandomHex(),
}));
fs.writeFileSync(
  "datos_patrimonio_final_v1.json",
  JSON.stringify(formatWithArrays, null, 2)
);
console.log("✅ XLSX convertido a JSON");
