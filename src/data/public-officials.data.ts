export interface PublicOfficialsInterface {
  dni: string;
  fullNames: string;
  shortName: string;
  abbreviatedName: string;
  photos: string;
  position: string;
  status: string;
  currentBench: string;
  currentBenchCode: number;
  partyLogo: string;
  record: string;
  heritageForYear: HeritageForYear[];
  djiStatus: DjiStatu[];
  criminalRecordNumber: number;
  criminalRecordDetails: string;
  quantityContractsRucNaturalPerson: number;
  detailContractsRucNaturalPerson: string;
  quantityCompanyLinks: number;
  detailCompanyLinks: string;
  color: string;
}

export interface HeritageForYear {
  year: number;
  amount: number;
}

interface DjiStatu {
  year: number;
  status: string;
}

export const publicOfficialsData = [
  {
    dni: "80143959",
    fullNames: "Lady Mercedes Camones Soriano",
    shortName: "Lady Camones",
    abbreviatedName: "L. Camones",
    photos: "dni_80143959.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.png",
    record:
      "Fue investigada por la Fiscalía por los audios que se difundieron de su conversación con César Acuña, en el que la presiona para aprobar una ley que lo beneficie con miras a las Elecciones Regionales 2022. No obstante, según IDL-Reporteros, Patricia Benavides archivó el caso.",
    heritageForYear: [
      { year: 2021, amount: 142475 },
      { year: 2022, amount: 187083 },
      { year: 2023, amount: 290570.6 },
      { year: 2024, amount: 296470.6 },
    ],
    djiStatus: [
      { year: 2021, status: "Presentó DJI" },
      { year: 2022, status: "Presentó DJI" },
      { year: 2023, status: "Presentó DJI" },
      { year: 2024, status: "Presentó DJI" },
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails:
      "Denuncias Constitucionales por Fiscalía: 1; Casos de corrupción en Procuraduría: 1; Sentencias penales o civiles declaradas: 0",
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "76030152",
    fullNames: "Rosangella Andrea Barbaran Reyes",
    shortName: "Rosangella Barbaran",
    abbreviatedName: "R. Barbaran",
    photos: "dni_76030152.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "Ha sido vinculada con el grupo extremista La Resistencia, un colectivo de apoyo a Fuerza Popular caracterizado por actos violentistas. La congresista apareció en fotografías con algunos de sus integrantes.",
    heritageForYear: [
      { year: 2021, amount: 93790.31 },
      { year: 2022, amount: 145778.02 },
      { year: 2023, amount: 178738.78 },
      { year: 2024, amount: 216749.52 },
    ],
    djiStatus: [
      { year: 2021, status: "Presentó DJI" },
      { year: 2022, status: "Presentó DJI" },
      { year: 2023, status: "Presentó DJI" },
      { year: 2024, status: "Presentó DJI" },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails:
      "Denuncias Constitucionales por Fiscalía: 0; Casos de corrupción en Procuraduría: 0; Sentencias penales o civiles declaradas: 0",
    quantityContractsRucNaturalPerson: 4,
    detailContractsRucNaturalPerson:
      "Tiene 3 contratos por un total de S/ 29815 con la entidad Gobierno Regional de Lima; Tiene 1 contrato por un total de S/ 6189 con la entidad Municipalidad Distrital de San Juan de Lurigancho; Tiene 0 contrato por un total de S/ 1 con la entidad RENIEC",
    quantityCompanyLinks: 2,
    detailCompanyLinks: "",
    color: "#66c03b",
  },
  {
    dni: "72200895",
    fullNames: "Sigrid Tesoro Bazan Narro",
    shortName: "Sigrid Bazan",
    abbreviatedName: "S. Bazan",
    photos: "dni_72200895.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Democrático Popular",
    currentBenchCode: 3,
    partyLogo: "Bloque_Democrático_Popular.jpg",
    record: "NA",
    heritageForYear: [
      { year: 2021, amount: 304178.56 },
      { year: 2022, amount: 374210.78 },
      { year: 2023, amount: 400746.12 },
      { year: 2024, amount: 431013.99 },
    ],
    djiStatus: [
      { year: 2021, status: "Presentó DJI" },
      { year: 2022, status: "Presentó DJI" },
      { year: 2023, status: "Presentó DJI" },
      { year: 2024, status: "Presentó DJI" },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails:
      "Denuncias Constitucionales por Fiscalía: 0; Casos de corrupción en Procuraduría: 0; Sentencias penales o civiles declaradas: 0",
    quantityContractsRucNaturalPerson: 5,
    detailContractsRucNaturalPerson:
      "Tiene 3 contratos por un total de S/ 11411 con la entidad RENIEC; Tiene 2 contratos por un total de S/ 4193 con la entidad Ministerio de Salud; Tiene 0 contrato por un total de S/ 1 con la entidad Municipalidad de Lima",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#7c6f87",
  },
];
