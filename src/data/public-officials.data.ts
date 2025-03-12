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
  separationRange: number;
  djiStatus: DjiStatu[];
  criminalRecordNumber: number;
  criminalRecordDetails: string[];
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
    abbreviatedName: "Lady Camones",
    photos: "dni_80143959.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record:
      "En 2022, cuando era presidenta del Congreso, se filtró un audio en el que César Acuña solicitó que influya en una comisión para aprobar la creación de un distrito en La Libertad, donde Acuña es gobernador.",
    heritageForYear: [
      {
        year: 2021,
        amount: 142475,
      },
      {
        year: 2022,
        amount: 187083,
      },
      {
        year: 2023,
        amount: 290570.6,
      },
      {
        year: 2024,
        amount: 296470.6,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -3,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#709bd7",
  },
  {
    dni: "76030152",
    fullNames: "Rosangella Andrea Barbaran Reyes",
    shortName: "Rosangella Barbarán",
    abbreviatedName: "Rosangella Barbarán",
    photos: "dni_76030152.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "Ha sido vinculada con el grupo extremista La Resistencia, un colectivo de apoyo a Fuerza Popular caracterizado por actos violentos.",
    heritageForYear: [
      {
        year: 2021,
        amount: 93790.31,
      },
      {
        year: 2022,
        amount: 145778.02,
      },
      {
        year: 2023,
        amount: 178738.78,
      },
      {
        year: 2024,
        amount: 216749.52,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -2,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#6d4cf8",
  },
  {
    dni: "72200895",
    fullNames: "Sigrid Tesoro Bazan Narro",
    shortName: "Sigrid Bazán",
    abbreviatedName: "Sigrid Bazán",
    photos: "dni_72200895.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Democrático Popular",
    currentBenchCode: 3,
    partyLogo: "Bloque_Democrático_Popular.png",
    record:
      'En 2023, la Fiscalía de Lavado de Activos le inició una investigación por la presunta “incompatibilidad de “capacidad económica para la compra de dos inmuebles".',
    heritageForYear: [
      {
        year: 2021,
        amount: 304178.56,
      },
      {
        year: 2022,
        amount: 374210.78,
      },
      {
        year: 2023,
        amount: 400746.12,
      },
      {
        year: 2024,
        amount: 431013.99,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -7,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#7f5fe7",
  },
  {
    dni: "70546213",
    fullNames: "Diana Carolina Gonzales Delgado",
    shortName: "Diana Gonzales",
    abbreviatedName: "Diana Gonzales",
    photos: "dni_70546213.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Avanza País - Partido de Integración Social",
    currentBenchCode: 4,
    partyLogo: "avanzapais.png",
    record:
      "No registra antecedentes de investigaciones oficiales. Si tiene alguna información nos puede escribir a denuncias@ojo-publico.com",
    heritageForYear: [
      {
        year: 2021,
        amount: 17318.3,
      },
      {
        year: 2022,
        amount: 75471.55,
      },
      {
        year: 2023,
        amount: 108061.92,
      },
      {
        year: 2024,
        amount: 234813.8,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 1,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#b04dc6",
  },
  {
    dni: "70094373",
    fullNames: "Tania Estefany Ramirez Garcia",
    shortName: "Tania Ramírez",
    abbreviatedName: "Tania Ramírez",
    photos: "dni_70094373.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "Un reportaje de Cuarto Poder denunció que la congresista habría plagiado su tesis de licenciatura y maestría.",
    heritageForYear: [
      {
        year: 2021,
        amount: 670300,
      },
      {
        year: 2022,
        amount: 826339.55,
      },
      {
        year: 2023,
        amount: 877519.99,
      },
      {
        year: 2024,
        amount: 2667131.11,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -3,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#bfbf57",
  },
  {
    dni: "48507818",
    fullNames: "Luis Otsuka Salazar",
    shortName: "Luis Otsuka",
    abbreviatedName: "Luis Otsuka",
    photos: "dni_48507818.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Avanza País",
    currentBenchCode: 11,
    partyLogo: "avanzapais.jpeg",
    record:
      "Ha sido vinculado a la minería informal y fue investigado por delitos ambientales. En enero de 2023, tras reunirse con el exprimer ministro Alberto Otárola, hizo uso de su arma para disipar a los manifestantes que llegaron a protestar a los exteriores de su vivienda.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 987808.46,
      },
      {
        year: 2024,
        amount: 1390089.7,
      },
      {
        year: 2025,
        amount: 1357483.10999999,
      },
    ],
    separationRange: 5,
    djiStatus: [
      {
        year: 2021,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#d0bab1",
  },
  {
    dni: "48164963",
    fullNames: "Ariana Maybe Orué Medina",
    shortName: "Ariana Orué",
    abbreviatedName: "Ariana Orué",
    photos: "dni_48164963.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Podemos Perú",
    currentBenchCode: 7,
    partyLogo: "podemosperu.png",
    record:
      "No registra antecedentes de investigaciones oficiales. Si tiene alguna información nos puede escribir a denuncias@ojo-publico.com",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 82311.64,
      },
      {
        year: 2024,
        amount: 61900.2,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 4,
    djiStatus: [
      {
        year: 2021,
        status: "No presentó DJI",
      },
      {
        year: 2022,
        status: "No presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#a4a24f",
  },
  {
    dni: "47785498",
    fullNames: "Alejandro Enrique Cavero Alva",
    shortName: "Alejandro Cavero",
    abbreviatedName: "Alejandro Cavero",
    photos: "dni_47785498.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Avanza País - Partido de Integración Social",
    currentBenchCode: 4,
    partyLogo: "avanzapais.png",
    record:
      "En la Subcomisión de Acusaciones Constitucionales del Congreso, fue el encargado de elaborar el informe que recomendó no iniciar proceso en el Ministerio Público contra Manuel Merino, Ántero Flores-Aráoz y Gastón Rodríguez por sus presuntas responsabilidades en las muertes de Inti Sotelo y Bryan Pintado, producidas en las protestas de 2020.",
    heritageForYear: [
      {
        year: 2021,
        amount: 58186.98,
      },
      {
        year: 2022,
        amount: 371735.69,
      },
      {
        year: 2023,
        amount: 416767.84,
      },
      {
        year: 2024,
        amount: 713647.45,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 4,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#384fef",
  },
  {
    dni: "46847115",
    fullNames: "Diego Alonso Fernando Bazan Calderon",
    shortName: "Diego Bazán",
    abbreviatedName: "Diego Bazán",
    photos: "dni_46847115.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Renovación Popular",
    currentBenchCode: 5,
    partyLogo: "renovacionpop.png",
    record:
      "A inicios del 2025, la Fiscalía de la Nación lo incluyó en una denuncia constitucional por el presunto uso de recursos públicos de manera irregular.",
    heritageForYear: [
      {
        year: 2021,
        amount: 1268618,
      },
      {
        year: 2022,
        amount: 1457195.24,
      },
      {
        year: 2023,
        amount: 1456129.63,
      },
      {
        year: 2024,
        amount: 1472365.71,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 8,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#1af76b",
  },
  {
    dni: "46646988",
    fullNames: "Gilia Ninfa Gutierrez Ayala",
    shortName: "Gilia Gutierrez",
    abbreviatedName: "Gilia Gutierrez",
    photos: "dni_46646988.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Somos Perú",
    currentBenchCode: 8,
    partyLogo: "somosperu.png",
    record:
      "Tiene al menos tres investigaciones en curso por hechos cometidos en funciones: dos por negociación incompatible y una por delitos contra la administración pública.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 15312.5,
      },
      {
        year: 2024,
        amount: 41363.09,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 0,
    djiStatus: [
      {
        year: 2021,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No presentó DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#fcce11",
  },
  {
    dni: "46517805",
    fullNames: "Alex Randu Flores Ramirez",
    shortName: "Alex Flores",
    abbreviatedName: "Alex Flores",
    photos: "dni_46517805.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bancada Socialista",
    currentBenchCode: 6,
    partyLogo: "bancada_socialista.png",
    record:
      'Es coautor de una iniciativa que plantea incorporar distintos delitos para aplicar la pena de muerte "sin trasgredir las obligaciones internacionales del Estado peruano".',
    heritageForYear: [
      {
        year: 2021,
        amount: 17828.21,
      },
      {
        year: 2022,
        amount: 306148.7,
      },
      {
        year: 2023,
        amount: 288633.44,
      },
      {
        year: 2024,
        amount: 360439.3,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 2,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#6486bf",
  },
  {
    dni: "46130369",
    fullNames: "Elva Edhit Julon Irigoin",
    shortName: "Elva Julón",
    abbreviatedName: "Elva Julón",
    photos: "dni_46130369.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record:
      "Desde 2022, la Fiscalía investiga por lavado de activos a su empresa SJ Biomedic SAC, que fundó con su empareja Alejandro Sánchez, dueño de la casa de Sarratea donde se alojó el expresidente Pedro Castillo.",
    heritageForYear: [
      {
        year: 2021,
        amount: 1615.07,
      },
      {
        year: 2022,
        amount: 127945.91,
      },
      {
        year: 2023,
        amount: 211507.47,
      },
      {
        year: 2024,
        amount: 220758.5,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -1,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#d09fdd",
  },
  {
    dni: "45591954",
    fullNames: "Adriana Josefina Tudela Gutierrez",
    shortName: "Adriana Tudela",
    abbreviatedName: "Adriana Tudela",
    photos: "dni_45591954.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Avanza País - Partido de Integración Social",
    currentBenchCode: 4,
    partyLogo: "avanzapais.png",
    record:
      "En 2024, planteó en una iniciativa que las inspecciones a centros comerciales tuvieran vigencia indefinida. Sin embargo, luego del derrumbe en el Real Plaza de Trujillo en febrero pasado, retiró la propuesta.",
    heritageForYear: [
      {
        year: 2021,
        amount: 187218.85,
      },
      {
        year: 2022,
        amount: 398971.46,
      },
      {
        year: 2023,
        amount: 1094693.33999999,
      },
      {
        year: 2024,
        amount: 1070038.11,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -9,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#a7f876",
  },
  {
    dni: "45382589",
    fullNames: "Luis Arturo Alegria Garcia",
    shortName: "Luis Alegría",
    abbreviatedName: "Luis Alegría",
    photos: "dni_45382589.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "A meses de ocupar el cargo aseguró que no se había vacunado contra la Covid-19 y en diciembre del 2021 recién inició este proceso. Previo a su labor congresal se desempeñó como asesor del exlegislador fujimorista Luis Galarreta.",
    heritageForYear: [
      {
        year: 2021,
        amount: 89528.63,
      },
      {
        year: 2022,
        amount: 284368.13,
      },
      {
        year: 2023,
        amount: 305081,
      },
      {
        year: 2024,
        amount: 451123.61,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -3,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#8c6618",
  },
  {
    dni: "45209282",
    fullNames: "Alejandro Muñante Barrios",
    shortName: "Alejandro Muñante",
    abbreviatedName: "Alejandro Muñante",
    photos: "dni_45209282.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Renovación Popular",
    currentBenchCode: 5,
    partyLogo: "renovacionpop.png",
    record:
      "Ha sido vocero del colectivo Con mis hijos no te metas y, desde el Congreso, impulsa iniciativas conservadoras, en contra del enfoque de género y las mujeres.",
    heritageForYear: [
      {
        year: 2021,
        amount: 4000,
      },
      {
        year: 2022,
        amount: 99608,
      },
      {
        year: 2023,
        amount: 109608,
      },
      {
        year: 2024,
        amount: 214678.09,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -3,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#eeb025",
  },
  {
    dni: "44993239",
    fullNames: "Roger Guevara Rodríguez",
    shortName: "Roger Guevara",
    abbreviatedName: "Roger Guevara",
    photos: "dni_44993239.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Somos Perú",
    currentBenchCode: 8,
    partyLogo: "somosperu.png",
    record:
      "El medio local La Rotativa indicó, en enero de este año, que durante su gestión se destinaron más de S/ 30 millones en viajes nacionales e internacionales.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 369250,
      },
      {
        year: 2024,
        amount: 369250,
      },
      {
        year: 2025,
        amount: 369250,
      },
    ],
    separationRange: 3,
    djiStatus: [
      {
        year: 2021,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#fd0530",
  },
  {
    dni: "44886100",
    fullNames: "Cheryl Trigozo Reátegui",
    shortName: "Cheryl Trigozo",
    abbreviatedName: "Cheryl Trigozo",
    photos: "dni_44886100.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Renovación Popular",
    currentBenchCode: 5,
    partyLogo: "renovacionpop.png",
    record:
      "Es investigada por la Fiscalía por presuntamente haber gestionado contratos en horario laboral a favor de su agrupación Sonido 2000.",
    heritageForYear: [
      {
        year: 2021,
        amount: 765586.83,
      },
      {
        year: 2022,
        amount: 1101305.81,
      },
      {
        year: 2023,
        amount: 773094.55,
      },
      {
        year: 2024,
        amount: 958308.889999999,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 6,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#89192c",
  },
  {
    dni: "44807108",
    fullNames: "Eduardo Enrique Castillo Rivas",
    shortName: "Eduardo Castillo",
    abbreviatedName: "Eduardo Castillo",
    photos: "dni_44807108.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "Fue denunciado por su pareja por violencia psicológica en febrero de 2023, por lo que el Poder Judicial dictó medidas de protección a favor de ella.",
    heritageForYear: [
      {
        year: 2021,
        amount: 800,
      },
      {
        year: 2022,
        amount: 41613.77,
      },
      {
        year: 2023,
        amount: 50934.83,
      },
      {
        year: 2024,
        amount: 50845.71,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 2,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#169f10",
  },
  {
    dni: "44756974",
    fullNames: "Yessica Rosselli Amuruz Dulanto",
    shortName: "Yessica Amuruz",
    abbreviatedName: "Yessica Amuruz",
    photos: "dni_44756974.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Avanza País - Partido de Integración Social",
    currentBenchCode: 4,
    partyLogo: "avanzapais.png",
    record:
      "Fue sancionada con una amonestación escrita pública con multa de sesenta 60 días por la Comisión de Ética por haber participado en una fiesta en la que falleció una persona y haber negado que la organizó.",
    heritageForYear: [
      {
        year: 2021,
        amount: 420215.12,
      },
      {
        year: 2022,
        amount: 1088437.89,
      },
      {
        year: 2023,
        amount: 1154476.45,
      },
      {
        year: 2024,
        amount: 1054503.91,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 9,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#0dba24",
  },
  {
    dni: "44649199",
    fullNames: "Guido Bellido Ugarte",
    shortName: "Guido Bellido",
    abbreviatedName: "Guido Bellido",
    photos: "dni_44649199.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Podemos Perú",
    currentBenchCode: 7,
    partyLogo: "podemosperu.png",
    record:
      "Es investigado por la Fiscalía por presunto lavado de activos al interior de Perú Libre. También por apología al terrorismo y obstrucción a la justicia. Fue investigado en dos ocasiones por la Comisión de Ética, pero en ambos casos las denuncias fueron archivadas. La primera denuncia fue por haber agredido verbalmente a la congresista Patricia Chirinos y la segunda, por presuntamente haber intercedido a favor de un amigo para que acceda a un cargo en Mincetur.",
    heritageForYear: [
      {
        year: 2021,
        amount: 3840.93,
      },
      {
        year: 2022,
        amount: 458702.5,
      },
      {
        year: 2023,
        amount: 341327.7,
      },
      {
        year: 2024,
        amount: 333922.15,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 0,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#deb6ee",
  },
  {
    dni: "44338336",
    fullNames: "Percy Godoy Medina",
    shortName: "Percy Godoy",
    abbreviatedName: "Percy Godoy",
    photos: "dni_44338336.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Frente de la Esperanza",
    currentBenchCode: 18,
    partyLogo: "frente_esperanza.png",
    record:
      "Tiene al menos tres denuncias desde que asumió el cargo, por negociación incompatible, tráfico de influencias y peculado. Según una investigación de OjoPúblico, cuenta con una visita no registrada a Palacio de Gobierno.",
    heritageForYear: [
      {
        year: 2021,
        amount: 693534,
      },
      {
        year: 2022,
        amount: 767434,
      },
      {
        year: 2023,
        amount: 812300,
      },
      {
        year: 2024,
        amount: 825000,
      },
      {
        year: 2025,
        amount: 945000,
      },
    ],
    separationRange: -4,
    djiStatus: [
      {
        year: 2021,
        status:
          "Ejercía cargo de alcalde distrital de San Jerónimo, Andahuaylas, Apurímac",
      },
      {
        year: 2022,
        status:
          "Ejercía cargo de alcalde distrital de San Jerónimo, Andahuaylas, Apurímac",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#e2b235",
  },
  {
    dni: "44306903",
    fullNames: "Alfredo Azurin Loayza",
    shortName: "Alfredo Azurín",
    abbreviatedName: "Alfredo Azurín",
    photos: "dni_44306903.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Somos Perú",
    currentBenchCode: 8,
    partyLogo: "somosperu.png",
    record:
      "Propuso un proyecto de ley para crear la Guardia Nacional y la Policía de Investigación Criminal, para que los agentes policial dirijan las investigaciones penales.",
    heritageForYear: [
      {
        year: 2021,
        amount: 64162,
      },
      {
        year: 2022,
        amount: 136170,
      },
      {
        year: 2023,
        amount: 141770,
      },
      {
        year: 2024,
        amount: 278220.93,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -5,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#e8ccf0",
  },
  {
    dni: "44275599",
    fullNames: "Cesar Manuel Revilla Villanueva",
    shortName: "César Revilla",
    abbreviatedName: "César Revilla",
    photos: "dni_44275599.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "Es investigado por la Fiscalía en el caso La Fiscal y su Cúpula de Poder por sus presuntos vínculos y negociaciones con la organización criminal que habría liderado la exfiscal de la Nación, Patricia Benavides, al interior del Ministerio Público.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 177606.4,
      },
      {
        year: 2023,
        amount: 142008,
      },
      {
        year: 2024,
        amount: 240477.97,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 3,
    djiStatus: [
      {
        year: 2021,
        status: "No presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#3b7769",
  },
  {
    dni: "44144875",
    fullNames: "Leslie Vivian Olivos Martinez",
    shortName: "Leslie Olivos",
    abbreviatedName: "Leslie Olivos",
    photos: "dni_44144875.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "Es la tercera congresista que más licencias personales solicitó entre 2021 y 2023 para ausentarse de sus funciones parlamentarias, según una investigación de OjoPúblico.",
    heritageForYear: [
      {
        year: 2021,
        amount: 753662.46,
      },
      {
        year: 2022,
        amount: 948191.659999999,
      },
      {
        year: 2023,
        amount: 1156111.1,
      },
      {
        year: 2024,
        amount: 1356511.76,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 4,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 1",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#58a01d",
  },
  {
    dni: "44103082",
    fullNames: "Jose Enrique Jeri Ore",
    shortName: "José Jerí",
    abbreviatedName: "José Jerí",
    photos: "dni_44103082.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Somos Perú",
    currentBenchCode: 8,
    partyLogo: "somosperu.png",
    record:
      "Es investigado por la Fiscalía en el caso La Fiscal y su Cúpula de Poder por sus presuntos vínculos y negociaciones con la organización criminal que habría liderado la exfiscal de la Nación, Patricia Benavides, al interior del Ministerio Público.",
    heritageForYear: [
      {
        year: 2021,
        amount: 99779.98,
      },
      {
        year: 2022,
        amount: 1048295.81,
      },
      {
        year: 2023,
        amount: 1140504.01,
      },
      {
        year: 2024,
        amount: 1261402.47,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -2,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#9e0fde",
  },
  {
    dni: "43328757",
    fullNames: "Jorge Carlos Montoya Manrique",
    shortName: "Jorge Montoya",
    abbreviatedName: "Jorge Montoya",
    photos: "dni_43328757.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Honor y Democracia",
    currentBenchCode: 9,
    partyLogo: "honor_y_democracia.png",
    record:
      "Es almirante retirado. Fue investigado por la Comisión de Ética por haber vinculado a la premier Mirtha Vásquez con Sendero Luminoso cuando era universitaria, pero la investigación fue archivada.",
    heritageForYear: [
      {
        year: 2021,
        amount: 850309,
      },
      {
        year: 2022,
        amount: 955143,
      },
      {
        year: 2023,
        amount: 190960,
      },
      {
        year: 2024,
        amount: 248780.5,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 5,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#6aedd9",
  },
  {
    dni: "43313696",
    fullNames: "Wilson Soto Palacios",
    shortName: "Wilson Soto",
    abbreviatedName: "Wilson Soto",
    photos: "dni_43313696.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Acción Popular",
    currentBenchCode: 10,
    partyLogo: "accionpopular.png",
    record:
      "Es investigado por la Fiscalía por el caso Los Niños, que implica a un grupo de congresistas de Acción Popular que habrían negociado beneficios con el expresidente Pedro Castillo cuando estaba en el cargo.",
    heritageForYear: [
      {
        year: 2021,
        amount: 478512.73,
      },
      {
        year: 2022,
        amount: 586990.85,
      },
      {
        year: 2023,
        amount: 399796.67,
      },
      {
        year: 2024,
        amount: 785186.41,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -7,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#403bce",
  },
  {
    dni: "43287528",
    fullNames: "Jose Daniel Williams Zapata",
    shortName: "José Williams",
    abbreviatedName: "José Williams",
    photos: "dni_43287528.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Avanza País",
    currentBenchCode: 11,
    partyLogo: "avanzapais.jpeg",
    record:
      "Es investigado por la Fiscalía en el caso La Fiscal y su Cúpula de Poder por sus presuntos vínculos y negociaciones con la organización criminal que habría liderado la exfiscal de la Nación, Patricia Benavides, al interior del Ministerio Público.",
    heritageForYear: [
      {
        year: 2021,
        amount: 1114265.61,
      },
      {
        year: 2022,
        amount: 1437223.61,
      },
      {
        year: 2023,
        amount: 1614112.81,
      },
      {
        year: 2024,
        amount: 1850021.9,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -3,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 2",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#07f307",
  },
  {
    dni: "42878423",
    fullNames: "Fabián Noriega Brito",
    shortName: "Fabian Noriega",
    abbreviatedName: "Fabian Noriega",
    photos: "dni_42878423.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Movimiento Regional AGUA",
    currentBenchCode: 17,
    partyLogo: "mov_reg_agua_logo.svg",
    record:
      "Tras haber ganado las elecciones, la Fiscalía inició investigación en su contra por el presunto delito de falsa declaración en proceso administrativo. También registra, al menos, cinco investigaciones preliminares por delitos contra la administración pública.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 52555.16,
      },
      {
        year: 2024,
        amount: 52555.16,
      },
      {
        year: 2025,
        amount: 112106.42,
      },
    ],
    separationRange: 3,
    djiStatus: [
      {
        year: 2021,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#3855b4",
  },
  {
    dni: "42846124",
    fullNames: "Noelia Rossvith Herrera Medina",
    shortName: "Noelia Herrera",
    abbreviatedName: "Noelia Herrera",
    photos: "dni_42846124.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Renovación Popular",
    currentBenchCode: 5,
    partyLogo: "renovacionpop.png",
    record:
      'En setiembre del 2024 presentó un proyecto que plantea con cadena perpetua los delitos de "extorsión y terrorismo urbano". En 2021, la ONPE le abrió un proceso sancionador por no reportar sus aportes y gastos de campaña en los plazos establecidos.',
    heritageForYear: [
      {
        year: 2021,
        amount: 1787.95,
      },
      {
        year: 2022,
        amount: 301192.26,
      },
      {
        year: 2023,
        amount: 301192.26,
      },
      {
        year: 2024,
        amount: 0,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 3,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "No presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#28c69e",
  },
  {
    dni: "42843414",
    fullNames: "Elvis Hernan Vergara Mendoza",
    shortName: "Elvis Vergara",
    abbreviatedName: "Elvis Vergara",
    photos: "dni_42843414.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Acción Popular",
    currentBenchCode: 10,
    partyLogo: "accionpopular.png",
    record:
      "Es investigado por la Fiscalía por el caso Los Niños, que implica a un grupo de congresistas de Acción Popular que habrían negociado beneficios con el expresidente Pedro Castillo cuando estaba en el cargo. Fue sancionado con suspensión de 120 días por la Comisión de Ética por el caso Los Niños.",
    heritageForYear: [
      {
        year: 2021,
        amount: 38311.06,
      },
      {
        year: 2022,
        amount: 192592.75,
      },
      {
        year: 2023,
        amount: 137710.93,
      },
      {
        year: 2024,
        amount: 226085.26,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 0,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 2",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#fb78e5",
  },
  {
    dni: "42834886",
    fullNames: "Ilich Fredy Lopez Ureña",
    shortName: "Ilich López",
    abbreviatedName: "Ilich López",
    photos: "dni_42834886.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Acción Popular",
    currentBenchCode: 10,
    partyLogo: "accionpopular.png",
    record:
      "Es investigado por la Fiscalía en el caso La Fiscal y su Cúpula de Poder por sus presuntos vínculos y negociaciones con la organización criminal que habría liderado la exfiscal de la Nación, Patricia Benavides, al interior del Ministerio Público.",
    heritageForYear: [
      {
        year: 2021,
        amount: 28900,
      },
      {
        year: 2022,
        amount: 166278.82,
      },
      {
        year: 2023,
        amount: 268825.22,
      },
      {
        year: 2024,
        amount: 243167.169999999,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 4,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 2",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#ade491",
  },
  {
    dni: "42750152",
    fullNames: "Silvana Emperatriz Robles Araujo",
    shortName: "Silvana Robles",
    abbreviatedName: "Silvana Robles",
    photos: "dni_42750152.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bancada Socialista",
    currentBenchCode: 6,
    partyLogo: "bancada_socialista.png",
    record:
      'Fue ministra de Cultura del gobierno de Pedro Castillo. También fue denunciada por la Procuraduría General del Estado por presunto reembolso de combustible "en actividades que no cumplían representación oficial".',
    heritageForYear: [
      {
        year: 2021,
        amount: 41409.96,
      },
      {
        year: 2022,
        amount: 79174.45,
      },
      {
        year: 2023,
        amount: 120915.33,
      },
      {
        year: 2024,
        amount: 703093.65,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 1,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#48a5f6",
  },
  {
    dni: "42699423",
    fullNames: "Kelly Roxana Portalatino Avalos",
    shortName: "Kelly Portalatino",
    abbreviatedName: "Kelly Portalatino",
    photos: "dni_42699423.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Perú Libre",
    currentBenchCode: 12,
    partyLogo: "perulibre.png",
    record:
      "Fue ministra de Salud durante el gobierno de Pedro Castillo. En julio del año pasado, la Fiscalía inició una investigación preliminar por el presunto encubrimiento de Vladimir Cerrón.",
    heritageForYear: [
      {
        year: 2021,
        amount: 43432.92,
      },
      {
        year: 2022,
        amount: 118656.34,
      },
      {
        year: 2023,
        amount: 94744.45,
      },
      {
        year: 2024,
        amount: 273158.03,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -6,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#70d07a",
  },
  {
    dni: "42628319",
    fullNames: "Ana Zadith Zegarra Saboya",
    shortName: "Ana Zegarra",
    abbreviatedName: "Ana Zegarra",
    photos: "dni_42628319.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Somos Perú",
    currentBenchCode: 8,
    partyLogo: "somosperu.png",
    record:
      "En las elecciones generales del 2021 declaró dos sentencias penales por falsificación de documentos y falsedad ideológica.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 0,
      },
      {
        year: 2024,
        amount: 314231.54,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -2,
    djiStatus: [
      {
        year: 2021,
        status: "No presentó DJI",
      },
      {
        year: 2022,
        status: "No presentó DJI",
      },
      {
        year: 2023,
        status: "No presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 2",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#627baa",
  },
  {
    dni: "42611628",
    fullNames: "Wilson Rusbel Quispe Mamani",
    shortName: "Wilson Quispe",
    abbreviatedName: "Wilson Quispe",
    photos: "dni_42611628.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Juntos por el Perú - Voces Del Pueblo",
    currentBenchCode: 13,
    partyLogo: "juntosperu.png",
    record:
      "En 2021 presentó un proyecto de ley para regular el cultivo de la hoja de coca. Mientras que en 2023, de todas sus iniciativas presentadas, el 63.3% eran de corte declarativo, según informó OjoPúblico.",
    heritageForYear: [
      {
        year: 2021,
        amount: 371000,
      },
      {
        year: 2022,
        amount: 666314.15,
      },
      {
        year: 2023,
        amount: 671379.54,
      },
      {
        year: 2024,
        amount: 850838.67,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -3,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#468143",
  },
  {
    dni: "42589181",
    fullNames: "Janet Milagros Rivas Chacara",
    shortName: "Janet Rivas",
    abbreviatedName: "Janet Rivas",
    photos: "dni_42589181.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Perú Libre",
    currentBenchCode: 12,
    partyLogo: "perulibre.png",
    record:
      "Fue presidenta de la Comisión de Justicia en el contexto de las denuncias contra la JNJ y cuando se realizó el informe express que recomendó la remoción de sus miembros.",
    heritageForYear: [
      {
        year: 2021,
        amount: 13466.54,
      },
      {
        year: 2022,
        amount: 258527.54,
      },
      {
        year: 2023,
        amount: 336998.15,
      },
      {
        year: 2024,
        amount: 500434.579999999,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 2,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#eee370",
  },
  {
    dni: "42572649",
    fullNames: "Jhaec Darwin Espinoza Vargas",
    shortName: "Jhaec Espinoza",
    abbreviatedName: "Jhaec Espinoza",
    photos: "dni_42572649.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Podemos Perú",
    currentBenchCode: 7,
    partyLogo: "podemosperu.png",
    record:
      "Es investigado por la Fiscalía por el caso Los Niños, que implica a un grupo de congresistas de Acción Popular que habrían negociado beneficios con el expresidente Pedro Castillo cuando estaba en el cargo. Fue sancionado con recomendación pública por la Comisión de Ética por haber agredido verbalmente a una congresista.",
    heritageForYear: [
      {
        year: 2021,
        amount: 1010,
      },
      {
        year: 2022,
        amount: 185118.28,
      },
      {
        year: 2023,
        amount: 103042.769999999,
      },
      {
        year: 2024,
        amount: 455620.76,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -2,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 6,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 4",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 2",
    ],
    detailCompanyLinks: "",
    color: "#bc504a",
  },
  {
    dni: "42377791",
    fullNames: "Abel Augusto Reyes Cam",
    shortName: "Abel Reyes",
    abbreviatedName: "Abel Reyes",
    photos: "dni_42377791.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Perú Libre",
    currentBenchCode: 12,
    partyLogo: "perulibre.png",
    record:
      "En 2021 contrató como asesor a un socio de una compañía que no declaró y que incluso aportó en su campaña. Ese mismo año también presentó un proyecto declarativo para el control de medios de comunicación.",
    heritageForYear: [
      {
        year: 2021,
        amount: 167275.4,
      },
      {
        year: 2022,
        amount: 61225.2,
      },
      {
        year: 2023,
        amount: 0,
      },
      {
        year: 2024,
        amount: 0,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 2,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "No presentó DJI",
      },
      {
        year: 2024,
        status: "No presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#e3dcb9",
  },
  {
    dni: "42335591",
    fullNames: "Heidy Lisbeth Juarez Calle",
    shortName: "Heidy Juárez",
    abbreviatedName: "Heidy Juárez",
    photos: "dni_42335591.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Podemos Perú",
    currentBenchCode: 7,
    partyLogo: "podemosperu.png",
    record:
      "Fue sancionada por la Comisión de Ética con amonestación escrita pública y multa de 60 días por haber solicitado “diezmos mensuales” y otros cobros irregulares a los trabajadores de su despacho congresal y de una comisión.",
    heritageForYear: [
      {
        year: 2021,
        amount: 355100,
      },
      {
        year: 2022,
        amount: 1156608.17,
      },
      {
        year: 2023,
        amount: 1212389.69,
      },
      {
        year: 2024,
        amount: 1342352.60999999,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 3,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#d5b851",
  },
  {
    dni: "42134579",
    fullNames: "Margot Palacios Huaman",
    shortName: "Margot Palacios",
    abbreviatedName: "Margot Palacios",
    photos: "dni_42134579.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "No Agrupado",
    currentBenchCode: 14,
    partyLogo: "no_agrupado.png",
    record:
      "En 2021 presentó un proyecto de ley para regular el cultivo y producción de la hoja de coca. La iniciativa recibió críticas por su similitud y copia de párrafos de una ley boliviana, según Perú 21",
    heritageForYear: [
      {
        year: 2021,
        amount: 8200,
      },
      {
        year: 2022,
        amount: 168846,
      },
      {
        year: 2023,
        amount: 857940.74,
      },
      {
        year: 2024,
        amount: 251845.72,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 6,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#1626c9",
  },
  {
    dni: "41799959",
    fullNames: "Magally Santisteban Suclupe",
    shortName: "Magally Santisteban",
    abbreviatedName: "Magally Santisteban",
    photos: "dni_41799959.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "No registra antecedentes de investigaciones oficiales. Si tiene alguna información nos puede escribir a denuncias@ojo-publico.com",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 0,
      },
      {
        year: 2024,
        amount: 36000,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -2,
    djiStatus: [
      {
        year: 2021,
        status: "No presentó DJI",
      },
      {
        year: 2022,
        status: "No presentó DJI",
      },
      {
        year: 2023,
        status: "No presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#02f2b0",
  },
  {
    dni: "41623184",
    fullNames: "Luis Neyra León",
    shortName: "Luis Neyra",
    abbreviatedName: "Luis Neyra",
    photos: "dni_41623184.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Contigo Región",
    currentBenchCode: 27,
    partyLogo: "contigo_region.png",
    record:
      "Durante su gestión, contrató en cargos directivos a tres funcionarios investigados por la Fiscalía Anticorrupción y con procesos disciplinarios en Contraloría, según una investigación de Convoca. Según una investigación de OjoPúblico, cuenta con una visita no registrada a Palacio de Gobierno.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 372200,
      },
      {
        year: 2024,
        amount: 399343.79,
      },
      {
        year: 2025,
        amount: 379398.63,
      },
    ],
    separationRange: 6,
    djiStatus: [
      {
        year: 2021,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 1",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#11aac2",
  },
  {
    dni: "41258762",
    fullNames: "Nieves Esmeralda Limachi Quispe",
    shortName: "Nieves Limachi",
    abbreviatedName: "Nieves Limachi",
    photos: "dni_41258762.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Juntos por el Perú - Voces Del Pueblo",
    currentBenchCode: 13,
    partyLogo: "juntosperu.png",
    record:
      "El Poder Judicial le ordenó pagar S/47.268 a la Beneficencia de Tacna por irregularidades en el alquiler de un inmueble de dicha entidad en 2015.",
    heritageForYear: [
      {
        year: 2021,
        amount: 254507,
      },
      {
        year: 2022,
        amount: 413320.06,
      },
      {
        year: 2023,
        amount: 417902.9,
      },
      {
        year: 2024,
        amount: 0,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 1,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "No presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#20bd72",
  },
  {
    dni: "41187802",
    fullNames: "Américo Gonza Castillo",
    shortName: "Américo Gonza",
    abbreviatedName: "Américo Gonza",
    photos: "dni_41187802.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Perú Libre",
    currentBenchCode: 12,
    partyLogo: "perulibre.png",
    record:
      "Fue investigado por la Comisión de Ética por haber tenido conocimiento de una agresión y no haber tomado acciones; sin embargo, la sanción de recomendación pública no prosperó y la denuncia fue archivada.",
    heritageForYear: [
      {
        year: 2021,
        amount: 57781.56,
      },
      {
        year: 2022,
        amount: 80915.99,
      },
      {
        year: 2023,
        amount: 214266.36,
      },
      {
        year: 2024,
        amount: 449902.33,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -4,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 2",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#6cd1a8",
  },
  {
    dni: "41103058",
    fullNames: "Jorge René Chávez Silvano",
    shortName: "Jorge Chávez",
    abbreviatedName: "Jorge Chávez",
    photos: "dni_41103058.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Somos Perú",
    currentBenchCode: 8,
    partyLogo: "somosperu.png",
    record:
      "Es el segundo gobernador que más investigaciones en curso mantiene, con 19 procesos, según información de la Procuraduría. En perjuicio del Gobierno Regional de Loreto registra, al menos, 10 denuncias.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 0,
      },
      {
        year: 2024,
        amount: 134800,
      },
      {
        year: 2025,
        amount: 167133.72,
      },
    ],
    separationRange: -6,
    djiStatus: [
      {
        year: 2021,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "No presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#654c9f",
  },
  {
    dni: "41005490",
    fullNames: "Maria Elizabeth Taipe Coronado",
    shortName: "María Taipe",
    abbreviatedName: "María Taipe",
    photos: "dni_41005490.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Perú Libre",
    currentBenchCode: 12,
    partyLogo: "perulibre.png",
    record:
      "Es investigada por la Fiscalía por el presunto delito de lavado de activos.",
    heritageForYear: [
      {
        year: 2021,
        amount: 205000,
      },
      {
        year: 2022,
        amount: 268088,
      },
      {
        year: 2023,
        amount: 281984.67,
      },
      {
        year: 2024,
        amount: 402634.79,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 8,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#d60de5",
  },
  {
    dni: "40858548",
    fullNames: "Francis Jhasmina Paredes Castro",
    shortName: "Francis Paredes",
    abbreviatedName: "Francis Paredes",
    photos: "dni_40858548.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Podemos Perú",
    currentBenchCode: 7,
    partyLogo: "podemosperu.png",
    record:
      "Es investigada por la Fiscalía por el caso Los Niños, que implica a un grupo de congresistas de Acción Popular que habrían negociado beneficios con el expresidente Pedro Castillo cuando estaba en el cargo. Una empresa vinculada a uno de sus familiares se encuentra sancionada para contratar con el Estado, según OjoPúblico.",
    heritageForYear: [
      {
        year: 2021,
        amount: 82700,
      },
      {
        year: 2022,
        amount: 235948,
      },
      {
        year: 2023,
        amount: 339680.96,
      },
      {
        year: 2024,
        amount: 496377.13,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 1,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#f46115",
  },
  {
    dni: "40728264",
    fullNames: "Roberto Enrique Chiabra Leon",
    shortName: "Roberto Chiabra",
    abbreviatedName: "Roberto Chiabra",
    photos: "dni_40728264.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record:
      "A inicios del 2025, la Fiscalía de la Nación lo incluyó en una denuncia constitucional por una presunto favorecimiento y permitir beneficios económicos a pensionistas de las Fuerzas Armadas y de la Policía Nacional. Sin embargo, en marzo último, la Subcomisión de Acusaciones Constitucionales declaró improcedente la denuncia.",
    heritageForYear: [
      {
        year: 2021,
        amount: 785536.57,
      },
      {
        year: 2022,
        amount: 705263.48,
      },
      {
        year: 2023,
        amount: 921543.12,
      },
      {
        year: 2024,
        amount: 1189540.66,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -3,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#63f006",
  },
  {
    dni: "40577351",
    fullNames: "Richard Hancco Soncco",
    shortName: "Richard Hancco",
    abbreviatedName: "Richard Hancco",
    photos: "dni_40577351.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Reforma y Honradez por Más Obras",
    currentBenchCode: 28,
    partyLogo: "reforma_y_honradez.svg",
    record:
      "En setiembre del 2024, fue denunciado ante la fiscalía anticorrupción por la presunta sobrevaloración en la compra de 21 retroexcavadoras y 6 martillos hidráulicos.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 277700,
      },
      {
        year: 2024,
        amount: 345800,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 1,
    djiStatus: [
      {
        year: 2021,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No presentó DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#a09734",
  },
  {
    dni: "40383269",
    fullNames: "Jorge Luis Pérez Flores",
    shortName: "Jorge Pérez",
    abbreviatedName: "Jorge Pérez",
    photos: "dni_40383269.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Somos Perú",
    currentBenchCode: 8,
    partyLogo: "somosperu.png",
    record:
      "Fue congresista del periodo 2020-2021. También fue condecorado por el cuestionado expresidente ejecutivo de Essalud, Mario Carhuapoma. En 2022, fue denunciado por tráfico de influencias en perjuicio del Estado. Según una investigación de OjoPúblico, cuenta con una visita no registrada a Palacio de Gobierno.",
    heritageForYear: [
      {
        year: 2021,
        amount: 314306.51,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 0,
      },
      {
        year: 2024,
        amount: 40284.5,
      },
      {
        year: 2025,
        amount: 35462.69,
      },
    ],
    separationRange: -1,
    djiStatus: [
      {
        year: 2021,
        status:
          "Ejercía cargo de gerente de operaciones del hospital Edgardo Rebagliati",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "No presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#40b3d9",
  },
  {
    dni: "40332943",
    fullNames: "Juan Luis Chombo Heredia",
    shortName: "Juan Chombo",
    abbreviatedName: "Juan Chombo",
    photos: "dni_40332943.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Somos Perú",
    currentBenchCode: 8,
    partyLogo: "somosperu.png",
    record:
      "Tiene al menos seis investigaciones por delitos de corrupción de funcionarios cometidos como gobernador, como exalcalde provincial de Daniel Carrión y como alcalde distrital de Tapuc. Según una investigación de OjoPúblico, cuenta con una visita no registrada a Palacio de Gobierno.",
    heritageForYear: [
      {
        year: 2021,
        amount: 344400,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 603000,
      },
      {
        year: 2024,
        amount: 811600,
      },
      {
        year: 2025,
        amount: 680600,
      },
    ],
    separationRange: -5,
    djiStatus: [
      {
        year: 2021,
        status:
          "Ejercía cargo de alcalde provincial en Daniel Alcides Carrión, Pasco",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#92ff86",
  },
  {
    dni: "40242430",
    fullNames: "Hector Jose Ventura Angel",
    shortName: "Héctor Ventura",
    abbreviatedName: "Héctor Ventura",
    photos: "dni_40242430.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "En 2022 fue investigado por la Comisión de Ética por agresión física, pero finalmente la denuncia fue archivada.",
    heritageForYear: [
      {
        year: 2021,
        amount: 31734.9899999999,
      },
      {
        year: 2022,
        amount: 231511.14,
      },
      {
        year: 2023,
        amount: 450177.54,
      },
      {
        year: 2024,
        amount: 482905.81,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -1,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#5edd15",
  },
  {
    dni: "40204874",
    fullNames: "Ruth Luque Ibarra",
    shortName: "Ruth Luque",
    abbreviatedName: "Ruth Luque",
    photos: "dni_40204874.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Democrático Popular",
    currentBenchCode: 3,
    partyLogo: "Bloque_Democrático_Popular.png",
    record:
      "En 2024 el Ministerio Público le abrió una investigación por presunto encubrimiento al expresidente Pedro Castillo. Sin embargo, a fines de ese año, se archivó el caso por falta de pruebas.",
    heritageForYear: [
      {
        year: 2021,
        amount: 442382.96,
      },
      {
        year: 2022,
        amount: 571462.46,
      },
      {
        year: 2023,
        amount: 635929.9,
      },
      {
        year: 2024,
        amount: 677701.82,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -3,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#054a6d",
  },
  {
    dni: "40160380",
    fullNames: "Werner Máximo Salcedo Álvarez",
    shortName: "Werner Salcedo",
    abbreviatedName: "Werner Salcedo",
    photos: "dni_40160380.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Somos Perú",
    currentBenchCode: 8,
    partyLogo: "somosperu.png",
    record:
      "Es investigado por la Fiscalía por presunto enriquecimiento ilícito, por la posesión de relojes de alta gama. Según declaró el gobernador, Wilfredo Oscorima también le habría prestado estos objetos. También es investigado por la designación de su asesor regional.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 127130.83,
      },
      {
        year: 2024,
        amount: 3286800,
      },
      {
        year: 2025,
        amount: 3375083.26,
      },
    ],
    separationRange: 2,
    djiStatus: [
      {
        year: 2021,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 1",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#3ce8a3",
  },
  {
    dni: "32971154",
    fullNames: "Nilza Merly Chacon Trujillo",
    shortName: "Nilza Chacón",
    abbreviatedName: "Nilza Chacón",
    photos: "dni_32971154.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "Fue presidenta de la Comisión Agraria del Congreso e impulsó las modificaciones a la Ley Forestal y de Fauna Silvestre, en perjuicio de la Amazonía.",
    heritageForYear: [
      {
        year: 2021,
        amount: 672936.29,
      },
      {
        year: 2022,
        amount: 1683999.95,
      },
      {
        year: 2023,
        amount: 2004478.06,
      },
      {
        year: 2024,
        amount: 1113273.6,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -7,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#3839b6",
  },
  {
    dni: "32923902",
    fullNames: "Elias Marcial Varas Melendez",
    shortName: "Elías Varas",
    abbreviatedName: "Elías Varas",
    photos: "dni_32923902.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Juntos por el Perú - Voces Del Pueblo",
    currentBenchCode: 13,
    partyLogo: "juntosperu.png",
    record:
      "En 2022 su sobrino participó en actividades del Congreso aunque no estaba contratado en el Legislativo, según informó Cuarto Poder.",
    heritageForYear: [
      {
        year: 2021,
        amount: 350120.06,
      },
      {
        year: 2022,
        amount: 395920.06,
      },
      {
        year: 2023,
        amount: 396500.06,
      },
      {
        year: 2024,
        amount: 732802.06,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 7,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#285393",
  },
  {
    dni: "31031443",
    fullNames: "German Adolfo Tacuri Valdivia",
    shortName: "Germán Tacuri",
    abbreviatedName: "Germán Tacuri",
    photos: "dni_31031443.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Magisterial de Concertación Nacional",
    currentBenchCode: 15,
    partyLogo: "bloquemagisterial.png",
    record:
      "Es investigado por la Fiscalía en el caso La Fiscal y su Cúpula de Poder por sus presuntos vínculos y negociaciones con la organización criminal que habría liderado la exfiscal de la Nación, Patricia Benavides, al interior del Ministerio Público.",
    heritageForYear: [
      {
        year: 2021,
        amount: 13830.15,
      },
      {
        year: 2022,
        amount: 390050.64,
      },
      {
        year: 2023,
        amount: 533868.31,
      },
      {
        year: 2024,
        amount: 707198.09,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 3,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 2",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#e0f78a",
  },
  {
    dni: "31027035",
    fullNames: "Paul Silvio Gutierrez Ticona",
    shortName: "Paul Gutiérrez",
    abbreviatedName: "Paul Gutiérrez",
    photos: "dni_31027035.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Magisterial de Concertación Nacional",
    currentBenchCode: 15,
    partyLogo: "bloquemagisterial.png",
    record:
      "Fue investigado por la Comisión de Ética por haberse beneficiado con una ley sobre pensión alimenticia; sin embargo, la denuncia fue archivada.",
    heritageForYear: [
      {
        year: 2021,
        amount: 229300,
      },
      {
        year: 2022,
        amount: 345600,
      },
      {
        year: 2023,
        amount: 366850,
      },
      {
        year: 2024,
        amount: 574100,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 9,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 1",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#49448f",
  },
  {
    dni: "29632775",
    fullNames: "Bernardo Jaime Quito Sarmiento",
    shortName: "Bernardo Quito",
    abbreviatedName: "Bernardo Quito",
    photos: "dni_29632775.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bancada Socialista",
    currentBenchCode: 6,
    partyLogo: "bancada_socialista.png",
    record:
      "Fue investigado por la Comisión de Ética agresión sexual, pero finalmente la denuncia fue archivada.",
    heritageForYear: [
      {
        year: 2021,
        amount: 4177.33,
      },
      {
        year: 2022,
        amount: 180526.87,
      },
      {
        year: 2023,
        amount: 352567.52,
      },
      {
        year: 2024,
        amount: 629576.41,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -6,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#28ffe9",
  },
  {
    dni: "29423212",
    fullNames: "Esdras Ricardo Medina Minaya",
    shortName: "Esdras Medina",
    abbreviatedName: "Esdras Medina",
    photos: "dni_29423212.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Renovación Popular",
    currentBenchCode: 5,
    partyLogo: "renovacionpop.png",
    record:
      "Fue promotor de la contrarreforma universitaria en el Congreso. También elaboró el informe que recomendó inhabilitar a los miembros de la JNJ. Es aliado del movimiento Con mis hijos no te metas.",
    heritageForYear: [
      {
        year: 2021,
        amount: 1034240,
      },
      {
        year: 2022,
        amount: 1035617.5,
      },
      {
        year: 2023,
        amount: 1240225.5,
      },
      {
        year: 2024,
        amount: 936102.95,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 4,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#d454d2",
  },
  {
    dni: "29410132",
    fullNames: "Rohel Sánchez Sánchez",
    shortName: "Rohel Sánchez",
    abbreviatedName: "Rohel Sánchez",
    photos: "dni_29410132.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Yo Arequipa",
    currentBenchCode: 19,
    partyLogo: "yo_arequipa.svg",
    record:
      "Desde que asumió el cargo, registra, al menos, tres denuncias en su contra por negociación incompatible, según información de la Procuraduría. Según una investigación de OjoPúblico, cuenta con una visita no registrada a Palacio de Gobierno.",
    heritageForYear: [
      {
        year: 2021,
        amount: 1753680,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 510607.77,
      },
      {
        year: 2024,
        amount: 424353.27,
      },
      {
        year: 2025,
        amount: 365106.27,
      },
    ],
    separationRange: -9,
    djiStatus: [
      {
        year: 2021,
        status:
          "Ejercía cargo de rector en la Universidad Nacional de San Agustín (Unsa) en Arequipa",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#6f8bfa",
  },
  {
    dni: "29384343",
    fullNames: "Pedro Edwin Martinez Talavera",
    shortName: "Pedro Martínez",
    abbreviatedName: "Pedro Martínez",
    photos: "dni_29384343.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Acción Popular",
    currentBenchCode: 10,
    partyLogo: "accionpopular.png",
    record:
      "Tiene un juicio pendiente por el delito de lavado de activos imputado en su contra por desbalance patrimonial durante su gestión como alcalde del distrito de Mariano Melgar, en Arequipa.",
    heritageForYear: [
      {
        year: 2021,
        amount: 143999.39,
      },
      {
        year: 2022,
        amount: 580857.57,
      },
      {
        year: 2023,
        amount: 770375.72,
      },
      {
        year: 2024,
        amount: 897620.04,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 0,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 5,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 2",
      " Casos de corrupción en Procuraduría: 2",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#e21446",
  },
  {
    dni: "29299579",
    fullNames: "Alex Antonio Paredes Gonzales",
    shortName: "Alex Paredes",
    abbreviatedName: "Alex Paredes",
    photos: "dni_29299579.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Magisterial de Concertación Nacional",
    currentBenchCode: 15,
    partyLogo: "bloquemagisterial.png",
    record:
      "Fue uno de los docentes que desaprobó cinco de las seis evaluaciones exigidas por el Ministerio de Educación entre 2014 y 2019. Aún así, promovió la contrarreforma universitaria y también propuso modificaciones a la Ley de Reforma Magisterial.",
    heritageForYear: [
      {
        year: 2021,
        amount: 5427.58,
      },
      {
        year: 2022,
        amount: 145073,
      },
      {
        year: 2023,
        amount: 211598.55,
      },
      {
        year: 2024,
        amount: 322217.27,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -1,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#f51699",
  },
  {
    dni: "28300174",
    fullNames: "Digna Calle Lobaton",
    shortName: "Digna Calle",
    abbreviatedName: "Digna Calle",
    photos: "dni_28300174.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Podemos Perú",
    currentBenchCode: 7,
    partyLogo: "podemosperu.png",
    record:
      "Fue sancionada con amonestación escrita pública por la Comisión de Ética haberse ausentado de sus funciones parlamentarias por más de un año.",
    heritageForYear: [
      {
        year: 2021,
        amount: 11896090.26,
      },
      {
        year: 2022,
        amount: 21916658.84,
      },
      {
        year: 2023,
        amount: 6329737.55,
      },
      {
        year: 2024,
        amount: 3543826.94,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -2,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#4698d2",
  },
  {
    dni: "27361499",
    fullNames: "Segundo Teodomiro Quiroz Barboza",
    shortName: "Segundo Quiroz",
    abbreviatedName: "Segundo Quiroz",
    photos: "dni_27361499.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Magisterial de Concertación Nacional",
    currentBenchCode: 15,
    partyLogo: "bloquemagisterial.png",
    record:
      "Es el congresista que más licencias por motivos particulares solicitó al Congreso entre 2021 y 2023, según una investigación de OjoPúblico.",
    heritageForYear: [
      {
        year: 2021,
        amount: 187816.08,
      },
      {
        year: 2022,
        amount: 572482.39,
      },
      {
        year: 2023,
        amount: 576794.51,
      },
      {
        year: 2024,
        amount: 672555.15,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -4,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#f1b6b7",
  },
  {
    dni: "27080597",
    fullNames: "Hamlet Echeverria Rodriguez",
    shortName: "Hamlet Echeverría",
    abbreviatedName: "Hamlet Echeverría",
    photos: "dni_27080597.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Juntos por el Perú - Voces Del Pueblo",
    currentBenchCode: 13,
    partyLogo: "juntosperu.png",
    record:
      "A inicios del 2025, la Fiscalía de la Nación lo incluyó en una denuncia constitucional por una presunto favorecimiento y permitir beneficios económicos a pensionistas de las Fuerzas Armadas y de la Policía Nacional. Sin embargo, en marzo último, la Subcomisión de Acusaciones Constitucionales declaró improcedente la denuncia.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 25810.51,
      },
      {
        year: 2023,
        amount: 57800,
      },
      {
        year: 2024,
        amount: 68558,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 5,
    djiStatus: [
      {
        year: 2021,
        status: "No presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#538056",
  },
  {
    dni: "25700579",
    fullNames: "Pasion Neomias Davila Atanacio",
    shortName: "Pasion Davila",
    abbreviatedName: "Pasion Davila",
    photos: "dni_25700579.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bancada Socialista",
    currentBenchCode: 6,
    partyLogo: "bancada_socialista.png",
    record:
      "La Procuraduría General del Estado ha pedido que se lo investigue por presuntamente haber usado recursos asignados para la semana de representación parlamentaria para realizar actividades partidarias. Fue suspendido por 120 días del Congreso, a propuesta de la Mesa Directiva, por agredir a un congresista.",
    heritageForYear: [
      {
        year: 2021,
        amount: 500,
      },
      {
        year: 2022,
        amount: 21004,
      },
      {
        year: 2023,
        amount: 46800,
      },
      {
        year: 2024,
        amount: 50121.2,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 1,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#058d37",
  },
  {
    dni: "25567150",
    fullNames: "Hector Valer Pinto",
    shortName: "Hector Valer",
    abbreviatedName: "Hector Valer",
    photos: "dni_25567150.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Somos Perú",
    currentBenchCode: 8,
    partyLogo: "somosperu.png",
    record:
      "Es el congresista que registra más investigaciones en la Comisión de Ética. Fue sancionado en dos ocasiones por este grupo: la primera con amonestación escrita y 15 días multa haberse expresado mal de un congresista, y la segunda vez con recomendación pública por declaraciones de irrespeto contra varios legisladores.",
    heritageForYear: [
      {
        year: 2021,
        amount: 1565662,
      },
      {
        year: 2022,
        amount: 1615082,
      },
      {
        year: 2023,
        amount: 1711200,
      },
      {
        year: 2024,
        amount: 2988432,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 0,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#c651b0",
  },
  {
    dni: "25542661",
    fullNames: "Jose Alberto Arriola Tueros",
    shortName: "José Arriola",
    abbreviatedName: "José Arriola",
    photos: "dni_25542661.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Podemos Perú",
    currentBenchCode: 7,
    partyLogo: "podemosperu.png",
    record:
      "Es investigado por la Comisión de Ética por recorte de sueldo a sus trabajadores.",
    heritageForYear: [
      {
        year: 2021,
        amount: 24140.62,
      },
      {
        year: 2022,
        amount: 125,
      },
      {
        year: 2023,
        amount: 566044.42,
      },
      {
        year: 2024,
        amount: 582969.65,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -8,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 2",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#fda4b3",
  },
  {
    dni: "24711696",
    fullNames: "Jhakeline Katy Ugarte Mamani",
    shortName: "Jhakeline Ugarte",
    abbreviatedName: "Jhakeline Ugarte",
    photos: "dni_24711696.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Magisterial de Concertación Nacional",
    currentBenchCode: 15,
    partyLogo: "bloquemagisterial.png",
    record:
      "Es investigada por la Fiscalía en el caso La Fiscal y su Cúpula de Poder por sus presuntos vínculos y negociaciones con la organización criminal que habría liderado la exfiscal de la Nación, Patricia Benavides, al interior del Ministerio Público. Fue sancionada por la Comisión de Ética con suspensión de 60 días por haber recortado el sueldo a sus trabajadores.",
    heritageForYear: [
      {
        year: 2021,
        amount: 230564.75,
      },
      {
        year: 2022,
        amount: 422133.279999999,
      },
      {
        year: 2023,
        amount: 759309.91,
      },
      {
        year: 2024,
        amount: 734489.34,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 8,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 2",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#f5df32",
  },
  {
    dni: "23977149",
    fullNames: "Luis Angel Aragon Carreño",
    shortName: "Luis Aragón",
    abbreviatedName: "Luis Aragón",
    photos: "dni_23977149.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Acción Popular",
    currentBenchCode: 10,
    partyLogo: "accionpopular.png",
    record:
      "Es investigado por la Fiscalía en el caso La Fiscal y su Cúpula de Poder por sus presuntos vínculos y negociaciones con la organización criminal que habría liderado la exfiscal de la Nación, Patricia Benavides, al interior del Ministerio Público.",
    heritageForYear: [
      {
        year: 2021,
        amount: 889200,
      },
      {
        year: 2022,
        amount: 1105580.66,
      },
      {
        year: 2023,
        amount: 1188341.87,
      },
      {
        year: 2024,
        amount: 1636078.78,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -6,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 4,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 3",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#99c9d9",
  },
  {
    dni: "23901989",
    fullNames: "Alejandro Soto Reyes",
    shortName: "Alejandro Soto",
    abbreviatedName: "Alejandro Soto",
    photos: "dni_23901989.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record:
      "Es investigado por la Fiscalía en el caso La Fiscal y su Cúpula de Poder por sus presuntos vínculos y negociaciones con la organización criminal que habría liderado la exfiscal de la Nación, Patricia Benavides, al interior del Ministerio Público. También por el delito de concusión por presuntamente haber usado a sus trabajadores como una 'fábrica de trolls'. Fue investigado por la Comisión de Ética por haberse beneficiado con una ley para evitar un juicio, pero finalmente la denuncia se archivó.",
    heritageForYear: [
      {
        year: 2021,
        amount: 3604196.38,
      },
      {
        year: 2022,
        amount: 3605500.07,
      },
      {
        year: 2023,
        amount: 3457623.84,
      },
      {
        year: 2024,
        amount: 3304250.94,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 3,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 4,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 2",
      " Casos de corrupción en Procuraduría: 2",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#7dc038",
  },
  {
    dni: "23266777",
    fullNames: "Leoncio Huayllani Taype",
    shortName: "Leoncio Huayllani",
    abbreviatedName: "Leoncio Huayllani",
    photos: "dni_23266777.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Movimiento Regional Ayni",
    currentBenchCode: 22,
    partyLogo: "ayni.svg",
    record:
      "En enero último, la fiscalía especializada en delitos de corrupción de funcionarios allanó su domicilio y oficina como parte de las indagaciones contra la presunta organización criminal 'Los turbios del saneamiento'. La hipótesis fiscal indica que el gobernador encabezaría este grupo.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 855973.19,
      },
      {
        year: 2024,
        amount: 1021058.24,
      },
      {
        year: 2025,
        amount: 1151775.82,
      },
    ],
    separationRange: 7,
    djiStatus: [
      {
        year: 2021,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#24feb4",
  },
  {
    dni: "23017616",
    fullNames: "Luis Raul Picon Quedo",
    shortName: "Luis Picón",
    abbreviatedName: "Luis Picón",
    photos: "dni_23017616.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Podemos Perú",
    currentBenchCode: 7,
    partyLogo: "podemosperu.png",
    record:
      "Un informe de La República reveló que es el congresista que más carpetas fiscales acumula en la Fiscalía, por un total de 136 delitos.",
    heritageForYear: [
      {
        year: 2021,
        amount: 2104155.65,
      },
      {
        year: 2022,
        amount: 2281170.05,
      },
      {
        year: 2023,
        amount: 2146987.05,
      },
      {
        year: 2024,
        amount: 0,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 0,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "No presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 1",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#ed50fa",
  },
  {
    dni: "22510256",
    fullNames: "Elizabeth Sara Medina Hermosilla",
    shortName: "Elizabeth Medina",
    abbreviatedName: "Elizabeth Medina",
    photos: "dni_22510256.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Magisterial de Concertación Nacional",
    currentBenchCode: 15,
    partyLogo: "bloquemagisterial.png",
    record:
      "En septiembre del 2024 el Ministerio Público allanó su vivienda por el presunto cobro de coimas en obras municipales de la región Huánuco.",
    heritageForYear: [
      {
        year: 2021,
        amount: 4000,
      },
      {
        year: 2022,
        amount: 174676,
      },
      {
        year: 2023,
        amount: 260798.27,
      },
      {
        year: 2024,
        amount: 268447.85,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -8,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#a470cb",
  },
  {
    dni: "22423252",
    fullNames: "Antonio Leónidas Pulgar Lucas",
    shortName: "Antonio Pulgar",
    abbreviatedName: "Antonio Pulgar",
    photos: "dni_22423252.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Movimiento Independiente Regional Mi Buen Vecino",
    currentBenchCode: 23,
    partyLogo: "mi_buen_vecino.svg",
    record:
      "Tiene al menos cuatro investigaciones en su curso por hechos cometidos cuando era alcalde de Amarilis, en Huánuco.",
    heritageForYear: [
      {
        year: 2021,
        amount: 702793.93,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 4160384.39,
      },
      {
        year: 2024,
        amount: 4160384.39,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 1,
    djiStatus: [
      {
        year: 2021,
        status:
          "Ejercía cargo de alcalde distrital de Amarilis, Huánuco, Huánuco",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No presentó DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#d308cd",
  },
  {
    dni: "22290935",
    fullNames: "Raul Felipe Doroteo Carbajo",
    shortName: "Raúl Doroteo",
    abbreviatedName: "Raúl Doroteo",
    photos: "dni_22290935.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Acción Popular",
    currentBenchCode: 10,
    partyLogo: "accionpopular.png",
    record:
      'Es investigado por la Fiscalía por el caso Los Niños, que implica a un grupo de congresistas de Acción Popular que habrían negociado beneficios con el expresidente Pedro Castillo cuando estaba en el cargo. Fue denunciado por la Procuraduría General del Estado por presunto reembolso de combustible "en actividades que no cumplían representación oficial". También es investigado por el Ministerio Público y por la Comisión de Ética del Congreso por recorte de sueldo a sus trabajadores.',
    heritageForYear: [
      {
        year: 2021,
        amount: 277416.01,
      },
      {
        year: 2022,
        amount: 520534.4,
      },
      {
        year: 2023,
        amount: 492218.75,
      },
      {
        year: 2024,
        amount: 562212,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 7,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 4,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 2",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 2",
    ],
    detailCompanyLinks: "",
    color: "#695f10",
  },
  {
    dni: "21569935",
    fullNames: "Jose Luis Elias Avalos",
    shortName: "José Elías",
    abbreviatedName: "José Elías",
    photos: "dni_21569935.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record:
      "Es el segundo congresista que más licencias personales solicitó entre 2021 y 2023 para ausentarse de sus funciones parlamentarias.",
    heritageForYear: [
      {
        year: 2021,
        amount: 16544947.6,
      },
      {
        year: 2022,
        amount: 10662456.95,
      },
      {
        year: 2023,
        amount: 13695500.04,
      },
      {
        year: 2024,
        amount: 13455352.35,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -1,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#c6c745",
  },
  {
    dni: "21564196",
    fullNames: "Raul Huaman Coronado",
    shortName: "Raúl Huamán",
    abbreviatedName: "Raúl Huamán",
    photos: "dni_21564196.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "La primera fiscalía provincial penal corporativa de Huamanga (Ayacucho) abrió en 2023 una investigación por sospechas de negligencia y abandono hacia sus progenitores.",
    heritageForYear: [
      {
        year: 2021,
        amount: 459861.3,
      },
      {
        year: 2022,
        amount: 561545.19,
      },
      {
        year: 2023,
        amount: 662034.31,
      },
      {
        year: 2024,
        amount: 0,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -1,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "No presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#be86da",
  },
  {
    dni: "21456255",
    fullNames: "Jorge Alfonso Marticorena Mendoza",
    shortName: "Jorge Marticorena",
    abbreviatedName: "Jorge Marticorena",
    photos: "dni_21456255.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record:
      "Es coautor de un proyecto de ley que propone otorgar licencias “permanentes e indefinidas” a universidades del país. En febrero de este año, Correo informó que tiene como trabajadores de su despacho a dos investigados por presunta organización criminal.",
    heritageForYear: [
      {
        year: 2021,
        amount: 75594.7399999999,
      },
      {
        year: 2022,
        amount: 275546.7,
      },
      {
        year: 2023,
        amount: 304501.07,
      },
      {
        year: 2024,
        amount: 428512.9,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -8,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 1",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#e8664a",
  },
  {
    dni: "21422808",
    fullNames: "Jorge Carlos Hurtado Herrera",
    shortName: "Jorge Hurtado",
    abbreviatedName: "Jorge Hurtado",
    photos: "dni_21422808.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Uno por Ica",
    currentBenchCode: 24,
    partyLogo: "uno_por_ica.svg",
    record:
      "En agosto de 2023, la Fiscalía inició investigación en su contra por presuntamente liderar la organización criminal Los temibles del Sur, integrada también por consejeros regionales, funcionarios, entre otros, para asegurar su permanencia en el poder.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 2081387.35,
      },
      {
        year: 2024,
        amount: 2137718.9,
      },
      {
        year: 2025,
        amount: 172049.61,
      },
    ],
    separationRange: 2,
    djiStatus: [
      {
        year: 2021,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#f43c52",
  },
  {
    dni: "20055251",
    fullNames: "Zósimo Cárdenas Muje",
    shortName: "Zósimo Cárdenas",
    abbreviatedName: "Zósimo Cárdenas",
    photos: "dni_20055251.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Movimiento Sierra y Selva Contigo Junín",
    currentBenchCode: 25,
    partyLogo: "sierra_y_selva.svg",
    record:
      "Es investigado por la Fiscalía por haber contratado con una empresa que no cumplía los requisitos para el proceso. A raíz de ello, las autoridades allanaron la sede del Gobierno Regional e inmuebles vinculados al gobernador. Es el segundo gobernador con más visitas no registradas a Palacio de Gobierno, según una investigación de OjoPúblico.",
    heritageForYear: [
      {
        year: 2021,
        amount: 132000,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 0,
      },
      {
        year: 2024,
        amount: 15000,
      },
      {
        year: 2025,
        amount: 690000,
      },
    ],
    separationRange: -4,
    djiStatus: [
      {
        year: 2021,
        status:
          "Ejercía cargo de gerente general del Gobierno Regional de Pasco",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "No presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#371a2a",
  },
  {
    dni: "20051359",
    fullNames: "Alfredo Pariona Sinche",
    shortName: "Alfredo Pariona",
    abbreviatedName: "Alfredo Pariona",
    photos: "dni_20051359.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bancada Socialista",
    currentBenchCode: 6,
    partyLogo: "bancada_socialista.png",
    record:
      "No registra antecedentes de investigaciones oficiales. Si tiene alguna información nos puede escribir a denuncias@ojo-publico.com",
    heritageForYear: [
      {
        year: 2021,
        amount: 186000,
      },
      {
        year: 2022,
        amount: 426608,
      },
      {
        year: 2023,
        amount: 690008.27,
      },
      {
        year: 2024,
        amount: 1142678.09,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -5,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#382751",
  },
  {
    dni: "20036514",
    fullNames: "Waldemar Jose Cerron Rojas",
    shortName: "Waldemar Cerrón",
    abbreviatedName: "Waldemar Cerrón",
    photos: "dni_20036514.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Perú Libre",
    currentBenchCode: 12,
    partyLogo: "perulibre.png",
    record:
      "Es investigado por la Fiscalía por presunto lavado de activos al interior de Perú Libre, investigación que surgió a raíz del caso Los Dinámicos del Centro.",
    heritageForYear: [
      {
        year: 2021,
        amount: 512994.03,
      },
      {
        year: 2022,
        amount: 360971.829999999,
      },
      {
        year: 2023,
        amount: 549155.82,
      },
      {
        year: 2024,
        amount: 599316.96,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -7,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#bdad7b",
  },
  {
    dni: "19994639",
    fullNames: "David Julio Jimenez Heredia",
    shortName: "David Jiménez",
    abbreviatedName: "David Jiménez",
    photos: "dni_19994639.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "Fue sancionado por la Comisión de Ética con amonestación escrita pública y multa de 60 días por haber ordenado a personal de su despacho a trabajar en su instituto.",
    heritageForYear: [
      {
        year: 2021,
        amount: 2548270.65,
      },
      {
        year: 2022,
        amount: 2993672.25,
      },
      {
        year: 2023,
        amount: 2993672.25,
      },
      {
        year: 2024,
        amount: 2993672.25,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 1,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#5f990a",
  },
  {
    dni: "19877916",
    fullNames: "Edgard Cornelio Reymundo Mercado",
    shortName: "Edgard Reymundo",
    abbreviatedName: "Edgard Reymundo",
    photos: "dni_19877916.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Democrático Popular",
    currentBenchCode: 3,
    partyLogo: "Bloque_Democrático_Popular.png",
    record:
      "En una sesión del 2024, en la que participó de manera remota, dejó su micrófono encendido y admitió desconocer el tema sobre el que se debatía luego de emitir su voto.",
    heritageForYear: [
      {
        year: 2021,
        amount: 1273076.65,
      },
      {
        year: 2022,
        amount: 1444648.29999999,
      },
      {
        year: 2023,
        amount: 1446427.10999999,
      },
      {
        year: 2024,
        amount: 1591766.23,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 10,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#7556fa",
  },
  {
    dni: "18099931",
    fullNames: "Carlos Enrique Alva Rojas",
    shortName: "Carlos Alva",
    abbreviatedName: "Carlos Alva",
    photos: "dni_18099931.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Acción Popular",
    currentBenchCode: 10,
    partyLogo: "accionpopular.png",
    record:
      "Fue investigado por la Comisión de Ética por haber agredido verbalmente a inspectores municipales, pero finalmente la denuncia fue archivada.",
    heritageForYear: [
      {
        year: 2021,
        amount: 266000,
      },
      {
        year: 2022,
        amount: 213600,
      },
      {
        year: 2023,
        amount: 255800,
      },
      {
        year: 2024,
        amount: 262220.72,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 7,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#3d21c9",
  },
  {
    dni: "18099367",
    fullNames: "Segundo Hector Acuña Peralta",
    shortName: "Segundo Acuña",
    abbreviatedName: "Segundo Acuña",
    photos: "dni_18099367.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Honor y Democracia",
    currentBenchCode: 9,
    partyLogo: "honor_y_democracia.png",
    record:
      "Hermano del gobernador regional de La Libertad, César Acuña, investigado por tráfico de influencias.",
    heritageForYear: [
      {
        year: 2021,
        amount: 4749054.19,
      },
      {
        year: 2022,
        amount: 4349054.19,
      },
      {
        year: 2023,
        amount: 4043496.86,
      },
      {
        year: 2024,
        amount: 2566299.52,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 6,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#665aae",
  },
  {
    dni: "18080185",
    fullNames: "Juan Bartolome Burgos Oliveros",
    shortName: "Juan Burgos",
    abbreviatedName: "Juan Burgos",
    photos: "dni_18080185.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Podemos Perú",
    currentBenchCode: 7,
    partyLogo: "podemosperu.png",
    record:
      "Protagonizó una gresca con otro congresista en una sesión del Pleno del Congreso.",
    heritageForYear: [
      {
        year: 2021,
        amount: 100,
      },
      {
        year: 2022,
        amount: 10000,
      },
      {
        year: 2023,
        amount: 112574.09,
      },
      {
        year: 2024,
        amount: 485932,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 0,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#0457bd",
  },
  {
    dni: "18032382",
    fullNames: "Magaly Rosmery Ruiz Rodriguez",
    shortName: "Magaly Ruiz",
    abbreviatedName: "Magaly Ruiz",
    photos: "dni_18032382.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record:
      "Es investigada por la Fiscalía por recorte de sueldo a sus trabajadores, colaboradores eficaces declararon en su contra. Fue sancionada por la Comisión de Ética con amonestación escrita pública y 30 días multa por haber solicitado aportes mensuales a sus trabajadores.",
    heritageForYear: [
      {
        year: 2021,
        amount: 1191783.27,
      },
      {
        year: 2022,
        amount: 103836.93,
      },
      {
        year: 2023,
        amount: 168212.4,
      },
      {
        year: 2024,
        amount: 199354.34,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -4,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 4,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 2",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 2",
    ],
    detailCompanyLinks: "",
    color: "#ba31b2",
  },
  {
    dni: "17903382",
    fullNames: "César Acuña Peralta",
    shortName: "César Acuña",
    abbreviatedName: "César Acuña",
    photos: "dni_17903382.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record:
      "Es líder de Alianza por el Progreso y ha postulado dos veces a la presidencia de la República sin éxito. Tiene cuatro denuncias por cohecho, organización criminal y omisión, rehusamiento o demora de funciones, en los que la Procuraduría participa como actor civil. También registra una sentencia por violencia familiar. Además, ha sido implicado en el caso Los Cuellos Blancos. Es el tercer gobernador con más visitas no registradas a Palacio de Gobierno, según una investigación de OjoPúblico.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 75914642.31,
      },
      {
        year: 2024,
        amount: 88164515.64,
      },
      {
        year: 2025,
        amount: 133465277.42,
      },
    ],
    separationRange: 0,
    djiStatus: [
      {
        year: 2021,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#FEAA00",
  },
  {
    dni: "17896798",
    fullNames: "Victor Seferino Flores Ruiz",
    shortName: "Víctor Flores",
    abbreviatedName: "Víctor Flores",
    photos: "dni_17896798.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "En 2023, Hildebrandt en sus Trece informó que había presentado un proyecto para declarar de interés nacional la creación de un parque minero carbonero en la región La Libertad, donde el legislador tiene concesiones de este mineral.",
    heritageForYear: [
      {
        year: 2021,
        amount: 3697888.19,
      },
      {
        year: 2022,
        amount: 4470366.42,
      },
      {
        year: 2023,
        amount: 6542877.37,
      },
      {
        year: 2024,
        amount: 4562951.11,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 2,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#1b3fe5",
  },
  {
    dni: "17549232",
    fullNames: "Hilda Marleny Portero Lopez",
    shortName: "Hilda Portero",
    abbreviatedName: "Hilda Portero",
    photos: "dni_17549232.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Acción Popular",
    currentBenchCode: 10,
    partyLogo: "accionpopular.png",
    record:
      "Fue investigada por la Comisión de Ética haber recortado el sueldo de sus trabajadores para donar sillas de ruedas, pero finalmente la denuncia fue archivada.",
    heritageForYear: [
      {
        year: 2021,
        amount: 118640.59,
      },
      {
        year: 2022,
        amount: 236116.15,
      },
      {
        year: 2023,
        amount: 338147.839999999,
      },
      {
        year: 2024,
        amount: 555735.38,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 6,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#edf92a",
  },
  {
    dni: "16751831",
    fullNames: "Maria Grimaneza Acuña Peralta",
    shortName: "María Acuña",
    abbreviatedName: "María Acuña",
    photos: "dni_16751831.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record:
      "Fue investigada por la Comisión de Ética por presunto recorte de sueldos; sin embargo, finalmente la investigación fue archivada. Es hermana del gobernador regional de La Libertad, César Acuña, investigado por tráfico de influencias.",
    heritageForYear: [
      {
        year: 2021,
        amount: 1911368.23,
      },
      {
        year: 2022,
        amount: 1975825.12,
      },
      {
        year: 2023,
        amount: 1887760.69,
      },
      {
        year: 2024,
        amount: 1948475.05,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -1,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#09e893",
  },
  {
    dni: "16719182",
    fullNames: "Maria Jessica Cordova Lobaton",
    shortName: "Maria Cordova",
    abbreviatedName: "Maria Cordova",
    photos: "dni_16719182.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Renovación Popular",
    currentBenchCode: 5,
    partyLogo: "renovacionpop.png",
    record:
      "La Fiscalía la investigó por falsa declaración ante el JNE y, en enero de 2023, pidió un año de cárcel en su contra.",
    heritageForYear: [
      {
        year: 2021,
        amount: 287890.64,
      },
      {
        year: 2022,
        amount: 409436.24,
      },
      {
        year: 2023,
        amount: 438919.1,
      },
      {
        year: 2024,
        amount: 535023.72,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 3,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#a9f1b7",
  },
  {
    dni: "16667146",
    fullNames: "Silvia Maria Monteza Facho",
    shortName: "Silvia Monteza",
    abbreviatedName: "Silvia Monteza",
    photos: "dni_16667146.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Acción Popular",
    currentBenchCode: 10,
    partyLogo: "accionpopular.png",
    record:
      "En febrero de este año, el Ministerio Público presentó una denuncia constitucional en su contra por el presunto delito de negociación incompatible en agravio del Estado al aceptar la contratación de un familiar de la congresista Kelly Portalatino.",
    heritageForYear: [
      {
        year: 2021,
        amount: 462280.01,
      },
      {
        year: 2022,
        amount: 485554,
      },
      {
        year: 2023,
        amount: 753838.45,
      },
      {
        year: 2024,
        amount: 780147.26,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -9,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#103b77",
  },
  {
    dni: "16655831",
    fullNames: "Segundo Toribio Montalvo Cubas",
    shortName: "Segundo Montalvo",
    abbreviatedName: "Segundo Montalvo",
    photos: "dni_16655831.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Perú Libre",
    currentBenchCode: 12,
    partyLogo: "perulibre.png",
    record:
      "En 2006, el Juzgado Penal de Utcubamba lo sentenció por el ejercicio arbitrario del derecho y en 2012, el Juzgado Civil de Utcubamba lo condenó por violencia familiar. Desde el Congreso, impulsó iniciativas para formalizar a los taxis colectivos.",
    heritageForYear: [
      {
        year: 2021,
        amount: 126636.11,
      },
      {
        year: 2022,
        amount: 338695.13,
      },
      {
        year: 2023,
        amount: 446369.49,
      },
      {
        year: 2024,
        amount: 578562.57,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 10,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 2",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#508015",
  },
  {
    dni: "16642438",
    fullNames: "Jose Maria Balcazar Zelada",
    shortName: "José Balcázar",
    abbreviatedName: "José Balcázar",
    photos: "dni_16642438.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Perú Libre",
    currentBenchCode: 12,
    partyLogo: "perulibre.png",
    record:
      "La Fiscalía de la Nación lo investiga por corrupción, debido a sus presuntos vínculos y negociaciones con la organización criminal que habría liderado la ex fiscal de la Nación, Patricia Benavides.",
    heritageForYear: [
      {
        year: 2021,
        amount: 875372.67,
      },
      {
        year: 2022,
        amount: 1064327.5,
      },
      {
        year: 2023,
        amount: 1097486.98,
      },
      {
        year: 2024,
        amount: 1293302.63,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 1,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 2",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#fa731f",
  },
  {
    dni: "16448130",
    fullNames: "Mery Eliana Infantes Castañeda",
    shortName: "Mery Infantes",
    abbreviatedName: "Mery Infantes",
    photos: "dni_16448130.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "La empresa de su cuñado Glicerio Herrera fue sancionada por contratar con el Estado, a pesar de estar impedido por ser familiar de la congresista.",
    heritageForYear: [
      {
        year: 2021,
        amount: 1580002.44,
      },
      {
        year: 2022,
        amount: 1632582.44,
      },
      {
        year: 2023,
        amount: 1566120.91,
      },
      {
        year: 2024,
        amount: 1647898.82999999,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -5,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#462e1b",
  },
  {
    dni: "16429203",
    fullNames: "Gladys Margot Echaiz De Nuñez Izaga",
    shortName: "Gladys Echaíz",
    abbreviatedName: "Gladys Echaíz",
    photos: "dni_16429203.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Honor y Democracia",
    currentBenchCode: 9,
    partyLogo: "honor_y_democracia.png",
    record:
      "Fue fiscal de la Nación entre el 2008 y 2011. En el Congreso, hizo suya la denuncia contra la fiscal Zoraida Ávalos en la Subcomisión de Acusaciones Constitucionales, que concluyó con su inhabilitación. Además, ha presentado un proyecto de ley para desaparecer a la Junta Nacional de Justicia.",
    heritageForYear: [
      {
        year: 2021,
        amount: 1770012.29999999,
      },
      {
        year: 2022,
        amount: 1822516,
      },
      {
        year: 2023,
        amount: 1917818.4,
      },
      {
        year: 2024,
        amount: 1782818.72,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -4,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#691908",
  },
  {
    dni: "16002918",
    fullNames: "Roberto Helbert Sanchez Palomino",
    shortName: "Roberto Sánchez",
    abbreviatedName: "Roberto Sánchez",
    photos: "dni_16002918.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Juntos por el Perú - Voces Del Pueblo",
    currentBenchCode: 13,
    partyLogo: "juntosperu.png",
    record:
      "La Fiscalía de la Nación lo denunció constitucionalmente por el presunto delito de negociación incompatible, porque, como ex  ministro de Comercio Exterior y Turismo del presidente Pedro Castillo, contrató a un asesor recomendado por el premier Guido Bellido, quien obtuvo a cambio un departamento y pasajes aéreos.",
    heritageForYear: [
      {
        year: 2021,
        amount: 4358.74,
      },
      {
        year: 2022,
        amount: 262392.02,
      },
      {
        year: 2023,
        amount: 58204.34,
      },
      {
        year: 2024,
        amount: 377412.9,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 4,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#a22546",
  },
  {
    dni: "15300817",
    fullNames: "Luis Gustavo Cordero Jon Tay",
    shortName: "Luis Cordero",
    abbreviatedName: "Luis Cordero",
    photos: "dni_15300817.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Somos Perú",
    currentBenchCode: 8,
    partyLogo: "somosperu.png",
    record:
      "Es investigado por la Fiscalía por sus presuntos vínculos y negociaciones con la organización criminal que habría liderado la exfiscal de la Nación, Patricia Benavides. Fue sancionado con suspensión de 120 días por la Comisión de Ética por agresión a su expareja.",
    heritageForYear: [
      {
        year: 2021,
        amount: 451608,
      },
      {
        year: 2022,
        amount: 632969.13,
      },
      {
        year: 2023,
        amount: 536510.39,
      },
      {
        year: 2024,
        amount: 535274.62,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 4,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#163ca5",
  },
  {
    dni: "10806296",
    fullNames: "Norma Martina Yarrow Lumbreras",
    shortName: "Norma Yarrow",
    abbreviatedName: "Norma Yarrow",
    photos: "dni_10806296.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Renovación Popular",
    currentBenchCode: 5,
    partyLogo: "renovacionpop.png",
    record:
      "Un informe de la Contraloría General de la República señaló que la congresista sería penalmente responsable por cambios de zonificación irregulares aprobados entre los años 2019 y 2021, cuando era regidora de la Municipalidad de Lima. Uno de estos cambios benefició al excongresista fujimorista Miki Torres.",
    heritageForYear: [
      {
        year: 2021,
        amount: 685411.61,
      },
      {
        year: 2022,
        amount: 822321.79,
      },
      {
        year: 2023,
        amount: 818233.58,
      },
      {
        year: 2024,
        amount: 878400.389999999,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -1,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#a6d45c",
  },
  {
    dni: "10804834",
    fullNames: "Luis Roberto Kamiche Morante",
    shortName: "Luis Kamiche",
    abbreviatedName: "Luis Kamiche",
    photos: "dni_10804834.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record:
      "La Fiscalía de la Nación lo denunció por cohecho impropio, patrocinio ilegal de intereses y tráfico de influencias, por promover proyectos de ley a favor de Asociación Peruana de Energías Renovables, socia de la empresa Huawei.",
    heritageForYear: [
      {
        year: 2021,
        amount: 111159.13,
      },
      {
        year: 2022,
        amount: 273175.53,
      },
      {
        year: 2023,
        amount: 419534.72,
      },
      {
        year: 2024,
        amount: 933018.57,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 3,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#278b71",
  },
  {
    dni: "10691398",
    fullNames: "Javier Rommel Padilla Romero",
    shortName: "Javier Padilla",
    abbreviatedName: "Javier Padilla",
    photos: "dni_10691398.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Honor y Democracia",
    currentBenchCode: 9,
    partyLogo: "honor_y_democracia.png",
    record:
      'Fue denunciado por la Procuraduría General del Estado por presunto reembolso de combustible "en actividades que no cumplían representación oficial".',
    heritageForYear: [
      {
        year: 2021,
        amount: 150865.83,
      },
      {
        year: 2022,
        amount: 224943.72,
      },
      {
        year: 2023,
        amount: 283342.79,
      },
      {
        year: 2024,
        amount: 396611.209999999,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 5,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#be7193",
  },
  {
    dni: "10491661",
    fullNames: "Nelcy Lidia Heidinger Ballesteros",
    shortName: "Nelcy Heidinger",
    abbreviatedName: "Nelcy Heidinger",
    photos: "dni_10491661.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record:
      "Fue investigada por la Comisión de Ética por irregularidades en la contratación de personal en su despacho, pero informe final recomendó archivar la denuncia.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 1882885.5,
      },
      {
        year: 2024,
        amount: 2108057.06,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 1,
    djiStatus: [
      {
        year: 2021,
        status: "No presentó DJI",
      },
      {
        year: 2022,
        status: "No presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#edf95e",
  },
  {
    dni: "10485497",
    fullNames: "Yorel Kira Alcarraz Aguero",
    shortName: "Yorel Alcarraz",
    abbreviatedName: "Yorel Alcarraz",
    photos: "dni_10485497.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Podemos Perú",
    currentBenchCode: 7,
    partyLogo: "podemosperu.png",
    record:
      "Es investigada por la Fiscalía de la Nación por cohecho pasivo propio, debido a un presunto intercambio de favores con el congresista Darwin Espinoza para la contratación de personal.",
    heritageForYear: [
      {
        year: 2021,
        amount: 33561.47,
      },
      {
        year: 2022,
        amount: 254040.14,
      },
      {
        year: 2023,
        amount: 316648.3,
      },
      {
        year: 2024,
        amount: 726829.39,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 6,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#b6a4ac",
  },
  {
    dni: "10280036",
    fullNames: "Patricia Rosa Chirinos Venegas",
    shortName: "Patricia Chirinos",
    abbreviatedName: "Patricia Chirinos",
    photos: "dni_10280036.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Avanza País",
    currentBenchCode: 11,
    partyLogo: "avanzapais.jpeg",
    record:
      "Fiscalía de la Nación la denunció constitucionalmente por el delito de peculado pues cargó a cuenta del congreso la compra de pasajes aéreos para celebrar el cumpleaños de congresista Diego Bazán. Es investigada como coautora del delito de organización criminal en el caso La Fiscal y su Cúpula de Poder, que involucraba a Patricia Benavides, por haber negociado votos desde el Congreso.",
    heritageForYear: [
      {
        year: 2021,
        amount: 801623.27,
      },
      {
        year: 2022,
        amount: 895237.49,
      },
      {
        year: 2023,
        amount: 960700.99,
      },
      {
        year: 2024,
        amount: 413559.37,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -10,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#2ea296",
  },
  {
    dni: "10213424",
    fullNames: "Flor Aidee Pablo Medina",
    shortName: "Flor Pablo",
    abbreviatedName: "Flor Pablo",
    photos: "dni_10213424.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "No Agrupado",
    currentBenchCode: 14,
    partyLogo: "no_agrupado.png",
    record:
      "La Procuraduría General del Estado ha pedido que se la investigue por presuntamente haber usado recursos asignados para la semana de representación parlamentaria para realizar actividades partidarias.",
    heritageForYear: [
      {
        year: 2021,
        amount: 561210.11,
      },
      {
        year: 2022,
        amount: 635283.03,
      },
      {
        year: 2023,
        amount: 681128.27,
      },
      {
        year: 2024,
        amount: 916809.76,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 2,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#9f3984",
  },
  {
    dni: "10129700",
    fullNames: "Isabel Cortez Aguirre",
    shortName: "Isabel Cortez",
    abbreviatedName: "Isabel Cortez",
    photos: "dni_10129700.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Democrático Popular",
    currentBenchCode: 3,
    partyLogo: "Bloque_Democrático_Popular.png",
    record:
      "La Comisión de Ética del Congreso aprobó denunciarla por haber usado recursos del Congreso para impulsar su agrupación política.",
    heritageForYear: [
      {
        year: 2021,
        amount: 32757.35,
      },
      {
        year: 2022,
        amount: 134258.66,
      },
      {
        year: 2023,
        amount: 224264.74,
      },
      {
        year: 2024,
        amount: 436557.83,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -6,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#fad91f",
  },
  {
    dni: "9980339",
    fullNames: "Jeny Luz Lopez Morales",
    shortName: "Jeny López",
    abbreviatedName: "Jeny López",
    photos: "dni_09980339.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "En 2024 ha presentado un proyecto para declarar de interés una carretera que se ubica próxima a la Reserva Indígena Murunahua, territorio que protege a distintos pueblos indígenas, según informó el portal Servindi.",
    heritageForYear: [
      {
        year: 2021,
        amount: 55763,
      },
      {
        year: 2022,
        amount: 207430.15,
      },
      {
        year: 2023,
        amount: 248554.95,
      },
      {
        year: 2024,
        amount: 269935.03,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -7,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#6c9c4a",
  },
  {
    dni: "9575873",
    fullNames: "Nivardo Edgar Tello Montes",
    shortName: "Nivardo Tello",
    abbreviatedName: "Nivardo Tello",
    photos: "dni_09575873.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Podemos Perú",
    currentBenchCode: 7,
    partyLogo: "podemosperu.png",
    record:
      "Es investigado por la Fiscalía en el caso La Fiscal y su Cúpula de Poder por sus presuntos vínculos y negociaciones con la organización criminal que habría liderado la exfiscal de la Nación, Patricia Benavides. La Fiscalía de la Nación lo denunció constitucionalmente por tráfico de influencias en la Municipalidad de San Juan de Lurigancho y por concusión, debido al recorte de sueldo a una trabajadora del Congreso.",
    heritageForYear: [
      {
        year: 2021,
        amount: 2200,
      },
      {
        year: 2022,
        amount: 150000,
      },
      {
        year: 2023,
        amount: 439236.86,
      },
      {
        year: 2024,
        amount: 867733.19,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -2,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 5,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 3",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 2",
    ],
    detailCompanyLinks: "",
    color: "#352218",
  },
  {
    dni: "9303945",
    fullNames: "Juan Carlos Martin Lizarzaburu Lizarzaburu",
    shortName: "Juan Lizarzaburu",
    abbreviatedName: "Juan Lizarzaburu",
    photos: "dni_09303945.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record:
      "La Fiscalía de la Nación lo denunció constitucionalmente por Negociación incompatible y aprovechamiento indebido del cargo en el caso del cobro doble de congresistas y militares retirados. Fue sancionado en dos ocasiones por la Comisión de Ética, por sus expresiones despectivas sobre la bandera del Tahuantinsuyo y por sus expresiones en agravio de la congresista Patricia Juárez.",
    heritageForYear: [
      {
        year: 2021,
        amount: 596769.5,
      },
      {
        year: 2022,
        amount: 676973.5,
      },
      {
        year: 2023,
        amount: 769394.7,
      },
      {
        year: 2024,
        amount: 769394.7,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 9,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#34bcda",
  },
  {
    dni: "9303898",
    fullNames: "George Edward Malaga Trillo",
    shortName: "George Málaga",
    abbreviatedName: "George Málaga",
    photos: "dni_09303898.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Avanza País",
    currentBenchCode: 11,
    partyLogo: "avanzapais.jpeg",
    record:
      "La Fiscalía lo investigó por el presunto delito de falsa declaración en procedimientos administrativos y falsedad ideológica, a raíz de una denuncia por difamación presentada por un ciudadano tras acciones de fiscalización en EsSalud.",
    heritageForYear: [
      {
        year: 2021,
        amount: 337193.69,
      },
      {
        year: 2022,
        amount: 684473.6,
      },
      {
        year: 2023,
        amount: 905267.31,
      },
      {
        year: 2024,
        amount: 1137851.38,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -6,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#1ba169",
  },
  {
    dni: "8911520",
    fullNames: "Martha Lupe Moyano Delgado",
    shortName: "Martha Moyano",
    abbreviatedName: "Martha Moyano",
    photos: "dni_08911520.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "Es investigada como coautora del delito de organización criminal en el caso La Fiscal y su Cúpula de Poder, que involucraba a Patricia Benavides, por haber negociado votos desde el Congreso, como integrante de la Comisión de Justicia.",
    heritageForYear: [
      {
        year: 2021,
        amount: 74800,
      },
      {
        year: 2022,
        amount: 146028.28,
      },
      {
        year: 2023,
        amount: 168173.69,
      },
      {
        year: 2024,
        amount: 295711.42,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -4,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#122029",
  },
  {
    dni: "8271323",
    fullNames: "Maria Del Carmen Alva Prieto",
    shortName: "Maria Alva",
    abbreviatedName: "Maria Alva",
    photos: "dni_08271323.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "No Agrupado",
    currentBenchCode: 14,
    partyLogo: "no_agrupado.png",
    record:
      "La Fiscalía de la Nación la denunció constitucionalmente por el delito de peculado, al haber cargado a la cuenta del Congreso la compra de pasajes aéreos para celebrar el cumpleaños del congresista Diego Bazán.",
    heritageForYear: [
      {
        year: 2021,
        amount: 1574217.87,
      },
      {
        year: 2022,
        amount: 2211544.65,
      },
      {
        year: 2023,
        amount: 1203789.72,
      },
      {
        year: 2024,
        amount: 2760768.51,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -2,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#7216ed",
  },
  {
    dni: "8236035",
    fullNames: "Alejandro Aurelio Aguinaga Recuenco",
    shortName: "Alejandro Aguinaga",
    abbreviatedName: "Alejandro Aguinaga",
    photos: "dni_08236035.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "Es investigado por las esterilizaciones forzadas de miles de mujeres durante su gestión como ministro de Salud del gobierno de Alberto Fujimori. En 2023, la Corte Suprema anuló el proceso judicial por un recurso presentado por Aguinaga y la Fiscalía debía presentar una nueva denuncia penal.",
    heritageForYear: [
      {
        year: 2021,
        amount: 3374844.5,
      },
      {
        year: 2022,
        amount: 3441339.35,
      },
      {
        year: 2023,
        amount: 3564462.35,
      },
      {
        year: 2024,
        amount: 3619904.51,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -1,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#c30107",
  },
  {
    dni: "8232920",
    fullNames: "Carlos Ernesto Bustamante Donayre",
    shortName: "Carlos Bustamante",
    abbreviatedName: "Carlos Bustamante",
    photos: "dni_08232920.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "Su hijo Jorge Bustamante Chikhani fue condenado a 5 años de prisión por haber estafado a empresarios, una suboficial de la Policía y un exembajador que invirtieron en una mina de oro inexistente.",
    heritageForYear: [
      {
        year: 2021,
        amount: 2255571.25,
      },
      {
        year: 2022,
        amount: 2377229,
      },
      {
        year: 2023,
        amount: 2254321.5,
      },
      {
        year: 2024,
        amount: 2392420,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 5,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#8898ac",
  },
  {
    dni: "8185259",
    fullNames: "Susel Ana Maria Paredes Pique",
    shortName: "Susel Paredes",
    abbreviatedName: "Susel Paredes",
    photos: "dni_08185259.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Democrático Popular",
    currentBenchCode: 3,
    partyLogo: "Bloque_Democrático_Popular.png",
    record:
      "Fue sancionada por la Comisión de Ética por adejtivos vertidos en un medio de comunicación sobre los miembros de la Comisión Permanente.",
    heritageForYear: [
      {
        year: 2021,
        amount: 242377.67,
      },
      {
        year: 2022,
        amount: 290714.45,
      },
      {
        year: 2023,
        amount: 322142.69,
      },
      {
        year: 2024,
        amount: 690448.42,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -1,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#baad81",
  },
  {
    dni: "8119443",
    fullNames: "Rosa Gloria Vásquez Cuadrado",
    shortName: "Rosa Vásquez",
    abbreviatedName: "Rosa Vásquez",
    photos: "dni_08119443.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Movimiento Regional Unidad Cívica Lima",
    currentBenchCode: 26,
    partyLogo: "Movimiento_Regional_Unidad_Cívica_Lima.svg",
    record:
      "Desde que asumió el cargo, tiene al menos dos investigaciones en curso: una por negociación incompatible y otra por omisión, rehusamiento o demora de actos funcionales y colusión agravada.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 0,
      },
      {
        year: 2024,
        amount: 0,
      },
      {
        year: 2025,
        amount: 2000,
      },
    ],
    separationRange: -3,
    djiStatus: [
      {
        year: 2021,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "No presentó DJI",
      },
      {
        year: 2024,
        status: "No presentó DJI",
      },
      {
        year: 2025,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 1",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#0b8dc6",
  },
  {
    dni: "7874562",
    fullNames: "Jorge Alberto Morante Figari",
    shortName: "Jorge Morante",
    abbreviatedName: "Jorge Morante",
    photos: "dni_07874562.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Somos Perú",
    currentBenchCode: 8,
    partyLogo: "somosperu.png",
    record:
      "La Fiscalía lo investiga por cohecho pasivo impropio, en una carpeta fiscal abierta en el 2024.",
    heritageForYear: [
      {
        year: 2021,
        amount: 834000,
      },
      {
        year: 2022,
        amount: 885600,
      },
      {
        year: 2023,
        amount: 925608,
      },
      {
        year: 2024,
        amount: 1334625.75,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 2,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#0f1648",
  },
  {
    dni: "7852432",
    fullNames: "Maria De Los Milagros Jackeline Jauregui Martinez",
    shortName: "Maria Jáuregui",
    abbreviatedName: "Maria Jáuregui",
    photos: "dni_07852432.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Renovación Popular",
    currentBenchCode: 5,
    partyLogo: "renovacionpop.png",
    record:
      'En 2025, la congresista Susel Paredes presentó una denuncia constitucional contra Milagros Jáuregui por llamar "animales" a homosexuales. Ha sido vocera del colectivo Con mis hijos no te metas.',
    heritageForYear: [
      {
        year: 2021,
        amount: 1071235.77,
      },
      {
        year: 2022,
        amount: 1070485.77,
      },
      {
        year: 2023,
        amount: 1235341.42,
      },
      {
        year: 2024,
        amount: 1561950,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 9,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#6ee604",
  },
  {
    dni: "7831436",
    fullNames: "Carmen Patricia Juarez Gallegos",
    shortName: "Carmen Juárez",
    abbreviatedName: "Carmen Juárez",
    photos: "dni_07831436.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "La Fiscalía de la Nación la denunció constitucionalmente por negociación incompatible y aprovechamiento indebido del cargo en el caso del cobro doble de congresistas y militares retirados.",
    heritageForYear: [
      {
        year: 2021,
        amount: 1159462.54,
      },
      {
        year: 2022,
        amount: 1235201.79,
      },
      {
        year: 2023,
        amount: 1367696.19,
      },
      {
        year: 2024,
        amount: 1267092.98,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -1,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#48a58d",
  },
  {
    dni: "7737110",
    fullNames: "Auristela Ana Obando Morgan",
    shortName: "Auristela Obando",
    abbreviatedName: "Auristela Obando",
    photos: "dni_07737110.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "No registra antecedentes de investigaciones oficiales. Si tiene alguna información nos puede escribir a denuncias@ojo-publico.com",
    heritageForYear: [
      {
        year: 2021,
        amount: 1052381.5,
      },
      {
        year: 2022,
        amount: 1145147.5,
      },
      {
        year: 2023,
        amount: 1201513.5,
      },
      {
        year: 2024,
        amount: 1430876.59,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 6,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#2ffcb2",
  },
  {
    dni: "7711761",
    fullNames: "Gilmer Horna Corrales",
    shortName: "Gilmer Horna",
    abbreviatedName: "Gilmer Horna",
    photos: "dni_07711761.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Sentimiento Amazonense Regional",
    currentBenchCode: 16,
    partyLogo: "sentimiento_amazonense.svg",
    record:
      "Tiene al menos tres denuncias en curso por presunta negociación incompatible o aprovechamiento indebido del cargo desde que asumió funciones.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 24076331.08,
      },
      {
        year: 2024,
        amount: 35049647.05,
      },
      {
        year: 2025,
        amount: 29639005.7299999,
      },
    ],
    separationRange: 1,
    djiStatus: [
      {
        year: 2021,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#CF1B90",
  },
  {
    dni: "7704730",
    fullNames: "Fernando Miguel Rospigliosi Capurro",
    shortName: "Fernando Rospigliosi",
    abbreviatedName: "Fernando Rospigliosi",
    photos: "dni_07704730.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "Fue ministro del Interior durante el gobierno del expresidente Alejandro Toledo.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 2111894.4,
      },
      {
        year: 2024,
        amount: 2263252.31,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 4,
    djiStatus: [
      {
        year: 2021,
        status: "No presentó DJI",
      },
      {
        year: 2022,
        status: "No presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#5ad127",
  },
  {
    dni: "7638265",
    fullNames: "Guillermo Bermejo Rojas",
    shortName: "Guillermo Bermejo",
    abbreviatedName: "Guillermo Bermejo",
    photos: "dni_07638265.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Juntos por el Perú - Voces Del Pueblo",
    currentBenchCode: 13,
    partyLogo: "juntosperu.png",
    record:
      "Actualmente enfrenta un juicio por terrorismo. También es investigado por presuntamente haber obstruido a la justicia. Además, por su supuesta participación en una red de corrupción dentro de la Autoridad para la Reconstrucción con Cambios (ARCC) durante el gobierno de Pedro Castillo. En el Congreso, fue investigado en dos ocasiones por la Comisión de Ética, pero en ambos casos las denuncias fueron archivadas.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 53000,
      },
      {
        year: 2023,
        amount: 233216.6,
      },
      {
        year: 2024,
        amount: 449136.5,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -5,
    djiStatus: [
      {
        year: 2021,
        status: "No presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#d5298c",
  },
  {
    dni: "7246887",
    fullNames: "Jose Leon Luna Galvez",
    shortName: "José Luna",
    abbreviatedName: "José Luna",
    photos: "dni_07246887.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Podemos Perú",
    currentBenchCode: 7,
    partyLogo: "podemosperu.png",
    record:
      "Es investigado por la Fiscalía por presuntos aportes ilícitos a su partido Podemos Perú. También afronta pesquisas por aportes ilegales que habría recibido de Odebrecht y OAS para las campañas de Solidaridad Nacional.",
    heritageForYear: [
      {
        year: 2021,
        amount: 37710894.84,
      },
      {
        year: 2022,
        amount: 37528253.93,
      },
      {
        year: 2023,
        amount: 36468253.2,
      },
      {
        year: 2024,
        amount: 0,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -2,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "No presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#d24fc2",
  },
  {
    dni: "7026029",
    fullNames: "Jorge Arturo Zeballos Aponte",
    shortName: "Jorge Zeballos",
    abbreviatedName: "Jorge Zeballos",
    photos: "dni_07026029.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Renovación Popular",
    currentBenchCode: 5,
    partyLogo: "renovacionpop.png",
    record:
      "Es ingeniero y representante de los Peruanos en el Exterior. En el 2023, Zeballos permaneció más de 4 meses en Estados Unidos sin rendir cuentas sobre sus actividades, según Infobae.",
    heritageForYear: [
      {
        year: 2021,
        amount: 1745731.78,
      },
      {
        year: 2022,
        amount: 1697462.23,
      },
      {
        year: 2023,
        amount: 1779006.57,
      },
      {
        year: 2024,
        amount: 573067.63,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 8,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#534a8b",
  },
  {
    dni: "6825885",
    fullNames: "Wilfredo Oscorima Núñez",
    shortName: "Wilfredo Oscorima",
    abbreviatedName: "Wilfredo Oscorima",
    photos: "dni_06825885.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Movimiento Regional Wari Llaqta",
    currentBenchCode: 20,
    partyLogo: "wari_llaqta.svg",
    record:
      "Es investigado por la Fiscalía en el caso Rolex, luego de que la presidenta Dina Boluarte declaró que recibió de su parte, como préstamo, los relojes de esa marca que usó en diferentes eventos. También es investigado por una adjudicación millonaria en su gestión a un consorcio representado por la presidenta de su organización política. Es el gobernador con más visitas no registradas a Palacio de Gobierno, según una investigación de OjoPúblico.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 3296562.74,
      },
      {
        year: 2024,
        amount: 3706562.74,
      },
      {
        year: 2025,
        amount: 2900512.98,
      },
    ],
    separationRange: 0,
    djiStatus: [
      {
        year: 2021,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#37c43a",
  },
  {
    dni: "6783615",
    fullNames: "Jose Ernesto Cueto Aservi",
    shortName: "José Cueto",
    abbreviatedName: "José Cueto",
    photos: "dni_06783615.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Honor y Democracia",
    currentBenchCode: 9,
    partyLogo: "honor_y_democracia.png",
    record:
      "Es almirante en retiro y fue jefe del Comando Conjunto de las Fuerzas Armadas de 2012 a 2013. La Fiscalía lo investiga por el presunto uso irregular de fondos de la caja chica que habría realizado en ese periodo, según informó El Foco.",
    heritageForYear: [
      {
        year: 2021,
        amount: 456265.67,
      },
      {
        year: 2022,
        amount: 564406.47,
      },
      {
        year: 2023,
        amount: 663297.28,
      },
      {
        year: 2024,
        amount: 913058.7,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 1,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#bb93ba",
  },
  {
    dni: "6522159",
    fullNames: "Carlos Antonio Anderson Ramirez",
    shortName: "Carlos Anderson",
    abbreviatedName: "Carlos Anderson",
    photos: "dni_06522159.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "No Agrupado",
    currentBenchCode: 14,
    partyLogo: "no_agrupado.png",
    record:
      "No registra antecedentes de investigaciones oficiales. Si tiene alguna información nos puede escribir a denuncias@ojo-publico.com",
    heritageForYear: [
      {
        year: 2021,
        amount: 2290671.27,
      },
      {
        year: 2022,
        amount: 2380755.27,
      },
      {
        year: 2023,
        amount: 2230608,
      },
      {
        year: 2024,
        amount: 2764010.73,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -1,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#8c4ed8",
  },
  {
    dni: "6354697",
    fullNames: "Maria Antonieta Agüero Gutierrez",
    shortName: "María Agüero",
    abbreviatedName: "María Agüero",
    photos: "dni_06354697.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Perú Libre",
    currentBenchCode: 12,
    partyLogo: "perulibre.png",
    record:
      "En noviembre de 2024, el Ministerio Público allanó inmuebles vinculados a la congresista debido una investigación por los delitos de concusión y enriquecimiento ilícito. Dicha investigación se debe a que la parlamentaria habría exigido grandes sumas de dinero a los trabajadores de su despacho. Meses antes, ante los medios, brindó polémicas declaraciones al señalar su disconformidad con el sueldo que recibía como congresista.",
    heritageForYear: [
      {
        year: 2021,
        amount: 6407071.99,
      },
      {
        year: 2022,
        amount: 5998149.60999999,
      },
      {
        year: 2023,
        amount: 6142712.88,
      },
      {
        year: 2024,
        amount: 6791312.64,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 0,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#d42aeb",
  },
  {
    dni: "6256217",
    fullNames: "Dina Ercilia Boluarte Zegarra",
    shortName: "Dina Boluarte",
    abbreviatedName: "Dina Boluarte",
    photos: "dni_06256217.jpg",
    position: "Presidente de la República",
    status: "Ejerciendo",
    currentBench: "Perú Libre",
    currentBenchCode: 12,
    partyLogo: "perulibre.png",
    record:
      "Enfrenta una investigación por los asesinatos de 49 personas registrados durante la violenta represión policial y militar a las protestas contra su gobierno en diciembre de 2022 y comienzos de 2023. Registra otros ocho procesos por los presuntos delitos de enriquecimiento ilícito, cohecho (habrían negociado acuerdos con la destituida fiscal de la nación, Patricia Benavides), abandono del cargo (porque se habría sometido a cirugías estéticas que implicaban descanso y que no habían sido comunicados) y el presunto encubrimiento en la fuga de Vladimir Cerrón (caso Cofre).",
    heritageForYear: [
      {
        year: 2021,
        amount: 623383.4,
      },
      {
        year: 2022,
        amount: 931948.42,
      },
      {
        year: 2023,
        amount: 1056315.65,
      },
      {
        year: 2024,
        amount: 1171198.63,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -4,
    djiStatus: [
      {
        year: 2021,
        status: "Ejercía cargo de Ministra de Desarrollo e Inclusión Social",
      },
      {
        year: 2022,
        status: "No ejercía cargo de congresista",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#546c1f",
  },
  {
    dni: "6049853",
    fullNames: "Miguel Angel Ciccia Vasquez",
    shortName: "Miguel Ciccia",
    abbreviatedName: "Miguel Ciccia",
    photos: "dni_06049853.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Renovación Popular",
    currentBenchCode: 5,
    partyLogo: "renovacionpop.png",
    record:
      "Una investigación de OjoPúblico reveló que la empresa Turismo Civa -que tiene como gerente general al hermano del congresista, Luis Ciccia- fue sancionada con cinco meses de inhabilitación temporal por contratar con el Estado pese al impedimento y por presentar información inexacta.",
    heritageForYear: [
      {
        year: 2021,
        amount: 612200.49,
      },
      {
        year: 2022,
        amount: 575277.04,
      },
      {
        year: 2023,
        amount: 732148.26,
      },
      {
        year: 2024,
        amount: 780521.73,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -8,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#c66fb1",
  },
  {
    dni: "5618705",
    fullNames: "Rosio Torres Salinas",
    shortName: "Rosio Torres",
    abbreviatedName: "Rosio Torres",
    photos: "dni_05618705.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record:
      "Es investigada por la Fiscalía por recorte de sueldo a sus trabajadores. Fue sancionada por la Comisión de Ética con amonestación escrita pública y multa de 30 días por haber recortado el sueldo a sus trabajadores.",
    heritageForYear: [
      {
        year: 2021,
        amount: 216274.17,
      },
      {
        year: 2022,
        amount: 346655.77,
      },
      {
        year: 2023,
        amount: 390485.11,
      },
      {
        year: 2024,
        amount: 400099.41,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 7,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 1",
    ],
    detailCompanyLinks: "",
    color: "#7037ae",
  },
  {
    dni: "5374449",
    fullNames: "Juan Carlos Mori Celis",
    shortName: "Juan Mori",
    abbreviatedName: "Juan Mori",
    photos: "dni_05374449.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Acción Popular",
    currentBenchCode: 10,
    partyLogo: "accionpopular.png",
    record:
      "Es investigado por la Fiscalía por el caso Los Niños, que implica a un grupo de congresistas de Acción Popular que habrían negociado beneficios con el expresidente Pedro Castillo cuando estaba en el cargo.",
    heritageForYear: [
      {
        year: 2021,
        amount: 405153.48,
      },
      {
        year: 2022,
        amount: 776908.24,
      },
      {
        year: 2023,
        amount: 747389.7,
      },
      {
        year: 2024,
        amount: 941263.11,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 5,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#0f444a",
  },
  {
    dni: "5070188",
    fullNames: "Eduardo Salhuana Cavides",
    shortName: "Eduardo Salhuana",
    abbreviatedName: "Eduardo Salhuana",
    photos: "dni_05070188.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record:
      "Es investigado por la Fiscalía por hechos que habría cometido cuando era gerente general del Gobierno Regional de Madre de Dios. En mayo de 2024, la procuraduría solicitó al Ministerio Público iniciar diligencias preliminares contra el congresista debido a una denuncia periodística. El reportaje dominical reveló sus vínculos con una empresa minera al tratar de favorecerla en la inscripción del REINFO.",
    heritageForYear: [
      {
        year: 2021,
        amount: 662774.11,
      },
      {
        year: 2022,
        amount: 584401.72,
      },
      {
        year: 2023,
        amount: 593697.63,
      },
      {
        year: 2024,
        amount: 683987.24,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -2,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 1",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#ccfc9a",
  },
  {
    dni: "4647085",
    fullNames: "Victor Raul Cutipa Ccama",
    shortName: "Victor Cutipa",
    abbreviatedName: "Victor Cutipa",
    photos: "dni_04647085.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Juntos por el Perú - Voces Del Pueblo",
    currentBenchCode: 13,
    partyLogo: "juntosperu.png",
    record:
      'El Equipo Especial de Fiscales contra la Corrupción en el Poder estableció que el congresista es parte del grupo "Niños 3", quienes  son investigados por la presunta comisión del delito de cohecho pasivo propio, presuntamente por haber recibido pagos ilícitos a cambio de votar en contra de la moción de interpelación al entonces ministro de Transporte y Comunicaciones, Juan Silva.',
    heritageForYear: [
      {
        year: 2021,
        amount: 140949.54,
      },
      {
        year: 2022,
        amount: 484043.26,
      },
      {
        year: 2023,
        amount: 542249.96,
      },
      {
        year: 2024,
        amount: 705642.76,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 2,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#9b6ff7",
  },
  {
    dni: "4413969",
    fullNames: "Jorge Samuel Coayla Juarez",
    shortName: "Jorge Coayla",
    abbreviatedName: "Jorge Coayla",
    photos: "dni_04413969.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Juntos por el Perú - Voces Del Pueblo",
    currentBenchCode: 13,
    partyLogo: "juntosperu.png",
    record:
      "Una investigación de OjoPúblico reveló que el congresista contrató personal para su despacho que había sido aportante al partido político con el que postuló (Perú Libre). Se trata de Eddy Quispe Taco, ingeniero civil que aportó con S/2.675.",
    heritageForYear: [
      {
        year: 2021,
        amount: 7177.79,
      },
      {
        year: 2022,
        amount: 125000,
      },
      {
        year: 2023,
        amount: 316608,
      },
      {
        year: 2024,
        amount: 543181.44,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 5,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#a08f7c",
  },
  {
    dni: "3243625",
    fullNames: "Idelso Manuel Garcia Correa",
    shortName: "Idelso García",
    abbreviatedName: "Idelso García",
    photos: "dni_03243625.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record:
      "No registra antecedentes de investigaciones oficiales. Si tiene alguna información nos puede escribir a denuncias@ojo-publico.com",
    heritageForYear: [
      {
        year: 2021,
        amount: 268978.66,
      },
      {
        year: 2022,
        amount: 530810.99,
      },
      {
        year: 2023,
        amount: 1357509.87,
      },
      {
        year: 2024,
        amount: 1452185.94,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 7,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#f3b2c8",
  },
  {
    dni: "2743658",
    fullNames: "Jose Bernardo Pazo Nunura",
    shortName: "José Pazo",
    abbreviatedName: "José Pazo",
    photos: "dni_02743658.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Somos Perú",
    currentBenchCode: 8,
    partyLogo: "somosperu.png",
    record:
      "Desde 2011, registra un total de nueve carpetas fiscales, en su mayoría vinculadas a su gestión como alcalde de Sechura en Piura, según informó La República.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 1926735,
      },
      {
        year: 2024,
        amount: 2100616.33,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 0,
    djiStatus: [
      {
        year: 2021,
        status: "No presentó DJI",
      },
      {
        year: 2022,
        status: "No presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 1",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#788c94",
  },
  {
    dni: "2726999",
    fullNames: "Cruz Maria Zeta Chunga",
    shortName: "Cruz Zeta",
    abbreviatedName: "Cruz Zeta",
    photos: "dni_02726999.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "Una investigación de OjoPúblico reveló que proyecto de la Nueva Ley Agraria, propuesta por la congresista junto a su bancada (Fuerza Popular), beneficiaría a las siete principales agroexportadoras debido a recortes tributarios.",
    heritageForYear: [
      {
        year: 2021,
        amount: 1042700,
      },
      {
        year: 2022,
        amount: 1053708,
      },
      {
        year: 2023,
        amount: 1102360.75,
      },
      {
        year: 2024,
        amount: 2259518.93,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 3,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#8d13be",
  },
  {
    dni: "2417724",
    fullNames: "Carlos Javier Zeballos Madariaga",
    shortName: "Carlos Zeballos",
    abbreviatedName: "Carlos Zeballos",
    photos: "dni_02417724.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Podemos Perú",
    currentBenchCode: 7,
    partyLogo: "podemosperu.png",
    record:
      "Un colaborador eficaz declaró ante la Fiscalía que al congresista le habrían dado “competencias ilegítimas e ilícitas” para el manejo de Migraciones. Esto fue incluido en las investigaciones contra Pedro Castillo y el caso ‘Los Niños’.",
    heritageForYear: [
      {
        year: 2021,
        amount: 168457.76,
      },
      {
        year: 2022,
        amount: 1203261.74,
      },
      {
        year: 2023,
        amount: 1445706.97,
      },
      {
        year: 2024,
        amount: 1277807.74,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 0,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 1",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#8b3d6d",
  },
  {
    dni: "1888173",
    fullNames: "Jorge Luis Flores Ancachi",
    shortName: "Jorge Flores",
    abbreviatedName: "Jorge Flores",
    photos: "dni_01888173.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Podemos Perú",
    currentBenchCode: 7,
    partyLogo: "podemosperu.png",
    record:
      "Es investigado por la Fiscalía por el caso Los Niños, que implica a un grupo de congresistas de Acción Popular que habrían negociado beneficios con el expresidente Pedro Castillo cuando estaba en el cargo. Fue sancionado en dos ocasiones por la Comisión de Ética. La primera por el caso Los Niños, y la segunda por haber recortado el sueldo a sus trabajadores.",
    heritageForYear: [
      {
        year: 2021,
        amount: 383604,
      },
      {
        year: 2022,
        amount: 691923.62,
      },
      {
        year: 2023,
        amount: 789815.53,
      },
      {
        year: 2024,
        amount: 1105010.13,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -8,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 7,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 4",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 3",
    ],
    detailCompanyLinks: "",
    color: "#08d3c3",
  },
  {
    dni: "1327194",
    fullNames: "Oscar Zea Choquechambi",
    shortName: "Oscar Zea",
    abbreviatedName: "Oscar Zea",
    photos: "dni_01327194.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Magisterial de Concertación Nacional",
    currentBenchCode: 15,
    partyLogo: "bloquemagisterial.png",
    record:
      "Fue investigado por la Comisión de Ética por contratar con el Estado a través de la empresa Inka Genetics, que fundó, y presuntamente contratar a su socio en su despacho congresal, pero la investigación fue archivada.",
    heritageForYear: [
      {
        year: 2021,
        amount: 1415268.54999999,
      },
      {
        year: 2022,
        amount: 1875266.51,
      },
      {
        year: 2023,
        amount: 1491304.66,
      },
      {
        year: 2024,
        amount: 1883320.04,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -2,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#5b716a",
  },
  {
    dni: "1311614",
    fullNames: "Flavio Cruz Mamani",
    shortName: "Flavio Cruz",
    abbreviatedName: "Flavio Cruz",
    photos: "dni_01311614.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Perú Libre",
    currentBenchCode: 12,
    partyLogo: "perulibre.png",
    record:
      'En julio de 2024, ante una entrevista, sostuvo que "Todos protegemos políticamente a Vladimir Cerrón y respetamos su estrategia" en una entrevista con el medio Exitosa.',
    heritageForYear: [
      {
        year: 2021,
        amount: 128663.99,
      },
      {
        year: 2022,
        amount: 178948.14,
      },
      {
        year: 2023,
        amount: 512563.149999999,
      },
      {
        year: 2024,
        amount: 647838.919999999,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -5,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 1",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#2ae7b8",
  },
  {
    dni: "1234692",
    fullNames: "Ciro Ronald Castillo Rojo Salas",
    shortName: "Ciro Castillo Rojo",
    abbreviatedName: "Ciro Castillo Rojo",
    photos: "dni_01234692.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Más Callao",
    currentBenchCode: 21,
    partyLogo: "mas_callao.svg",
    record:
      "Es investigado por la Fiscalía por presuntamente haber favorecido a su asistente administrativa duplicándole el sueldo. También tiene otra investigación por supuesto financiamiento a un medio digital con fondos del Gobierno Regional.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 112200,
      },
      {
        year: 2024,
        amount: 144571.89,
      },
      {
        year: 2025,
        amount: 108846.36,
      },
    ],
    separationRange: -5,
    djiStatus: [
      {
        year: 2021,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#6c88ab",
  },
  {
    dni: "1157063",
    fullNames: "Karol Ivett Paredes Fonseca",
    shortName: "Karol Paredes",
    abbreviatedName: "Karol Paredes",
    photos: "dni_01157063.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Avanza País - Partido de Integración Social",
    currentBenchCode: 4,
    partyLogo: "avanzapais.png",
    record:
      "Es investigada por la Fiscalía por haber tratado de influir sobre el exministro Geiner Alvarado para un proyecto en su región, San Martín.",
    heritageForYear: [
      {
        year: 2021,
        amount: 10501.58,
      },
      {
        year: 2022,
        amount: 88050.75,
      },
      {
        year: 2023,
        amount: 115962.66,
      },
      {
        year: 2024,
        amount: 716896.15,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 5,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#3e6d66",
  },
  {
    dni: "1088231",
    fullNames: "Lucinda Vasquez Vela",
    shortName: "Lucinda Vasquez",
    abbreviatedName: "Lucinda Vasquez",
    photos: "dni_01088231.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Magisterial de Concertación Nacional",
    currentBenchCode: 15,
    partyLogo: "bloquemagisterial.png",
    record:
      "La Fiscalía le inició una investigación tras la filtración de la Prueba Única Nacional de maestros para el ascenso en la Carrera Pública Magisterial a fines de 2021, durante el gobierno del expresidente Pedro Castillo. Se anunció una investigación en su contra y contra Ynés Gallardo, hija del entonces ministro de Educación Carlos Gallardo, por presunto tráfico de influencias.",
    heritageForYear: [
      {
        year: 2021,
        amount: 272094.7,
      },
      {
        year: 2022,
        amount: 397441.42,
      },
      {
        year: 2023,
        amount: 475482.46,
      },
      {
        year: 2024,
        amount: 692487.72,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 0,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "Presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 4,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 2",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 2",
    ],
    detailCompanyLinks: "",
    color: "#fbe35d",
  },
  {
    dni: "1077388",
    fullNames: "Walter Grundel Jiménez",
    shortName: "Walter Grundel",
    abbreviatedName: "Walter Grundel",
    photos: "dni_01077388.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Somos Perú",
    currentBenchCode: 8,
    partyLogo: "somosperu.png",
    record:
      "Tiene al menos dos investigaciones en su contra por delitos cometidos en funciones como gobernador: presunta negociación incompatible, omisión de denuncia y cohecho.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 30160.34,
      },
      {
        year: 2024,
        amount: 33943.66,
      },
      {
        year: 2025,
        amount: 43767.27,
      },
    ],
    separationRange: -3,
    djiStatus: [
      {
        year: 2021,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#09b638",
  },
  {
    dni: "434972",
    fullNames: "Isaac Mita Alanoca",
    shortName: "Isaac Mita",
    abbreviatedName: "Isaac Mita",
    photos: "dni_00434972.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Perú Libre",
    currentBenchCode: 12,
    partyLogo: "perulibre.png",
    record:
      'Durante una actividad en Tacna, en octubre de 2024, el congresista señaló que respalda al prófugo Vladimir Cerrón: "Él no está fugado, él cuida su vida"',
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 42380,
      },
      {
        year: 2024,
        amount: 237567.52,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: 2,
    djiStatus: [
      {
        year: 2021,
        status: "No presentó DJI",
      },
      {
        year: 2022,
        status: "No presentó DJI",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No está obligado a presentar DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#e34b75",
  },
  {
    dni: "428265",
    fullNames: "Luis Ramón Torres Robledo",
    shortName: "Luis Torres",
    abbreviatedName: "Luis Torres",
    photos: "dni_00428265.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Movimiento Independiente Regional Fuerza Tacna",
    currentBenchCode: 29,
    partyLogo: "fuerza_tacna.svg",
    record:
      "Realizó su campaña electoral bajo arresto domiciliario, impuesto por el Poder Judicial, por estar implicado en la presunta organización criminal Los limpios de Tacna, dedicados al tráfico de terrenos. Tiene al menos una investigación en curso como gobernador por colusión, peculado de uso, entre otros delitos.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 96428,
      },
      {
        year: 2024,
        amount: 122988.01,
      },
      {
        year: 2025,
        amount: 163965.87,
      },
    ],
    separationRange: -7,
    djiStatus: [
      {
        year: 2021,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#b9bb49",
  },
  {
    dni: "361856",
    fullNames: "Segismundo Cruces Ordinola",
    shortName: "Segismundo Cruces",
    abbreviatedName: "Segismundo Cruces",
    photos: "dni_00361856.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record:
      "Tiene al menos seis investigaciones por delitos de corrupción en perjuicio del Gobierno Regional de Tumbes.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 0,
      },
      {
        year: 2024,
        amount: 787000,
      },
      {
        year: 2025,
        amount: 0,
      },
    ],
    separationRange: -6,
    djiStatus: [
      {
        year: 2021,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "No presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "No presentó DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#09293a",
  },
  {
    dni: "188009",
    fullNames: "Manuel Gambini Rupay",
    shortName: "Manuel Gambini",
    abbreviatedName: "Manuel Gambini",
    photos: "dni_00188009.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Movimiento Independiente Regional Cambio Ucayalino",
    currentBenchCode: 30,
    partyLogo: "Movimiento_Independiente_Regional_Cambio_Ucayalino.svg",
    record:
      "Como gobernador regional, ha sido denunciado en dos ocasiones por cohecho pasivo propio y negociación incompatible.",
    heritageForYear: [
      {
        year: 2021,
        amount: 0,
      },
      {
        year: 2022,
        amount: 0,
      },
      {
        year: 2023,
        amount: 1342687.55,
      },
      {
        year: 2024,
        amount: 1041174.22,
      },
      {
        year: 2025,
        amount: 1917014.94,
      },
    ],
    separationRange: 8,
    djiStatus: [
      {
        year: 2021,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "Presentó DJI",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
      {
        year: 2025,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Sentencias penales o civiles declaradas: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Número de denuncias constitucionales al Congreso iniciadas por la fiscalía: 0",
    ],
    detailCompanyLinks: "",
    color: "#f60e71",
  },
];
