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
    dni: "17903382",
    fullNames: "César Acuña Peralta",
    shortName: "César Acuña Peralta",
    abbreviatedName: "César Acuña Peralta",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "7711761",
    fullNames: "Gilmer Horna Corrales",
    shortName: "Gilmer Horna Corrales",
    abbreviatedName: "Gilmer Horna Corrales",
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
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 2",
    ],
    quantityContractsRucNaturalPerson: 5,
    detailContractsRucNaturalPerson:
      "Tiene 1 contrato por un total de S/ 9059 con la entidad Municipalidad de Lima; Tiene 2 contratos por un total de S/ 14306 con la entidad Gobierno Regional de Lima; Tiene 2 contratos por un total de S/ 5477 con la entidad Ministerio de Educación; Tiene 0 contrato por un total de S/ 1 con la entidad Ministerio de Salud",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "21569935",
    fullNames: "Jose Luis Elias Avalos",
    shortName: "Jose Luis Elias Avalos",
    abbreviatedName: "Jose Luis Elias Avalos",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 4,
    detailContractsRucNaturalPerson:
      "Tiene 3 contratos por un total de S/ 17528 con la entidad Municipalidad de Lima; Tiene 1 contrato por un total de S/ 1609 con la entidad Poder Judicial; Tiene 1 contrato por un total de S/ 9834 con la entidad Gobierno Regional de Lima; Tiene -1 contrato por un total de S/ -999 con la entidad Ministerio de Salud",
    quantityCompanyLinks: 5,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "6354697",
    fullNames: "Maria Antonieta Agüero Gutierrez",
    shortName: "Maria Antonieta Agüero Gutierrez",
    abbreviatedName: "Maria Antonieta Agüero Gutierrez",
    photos: "dni_06354697.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Perú Libre",
    currentBenchCode: 12,
    partyLogo: "perulibre.png",
    record:
      "Ante los medios, brindó polémicas declaraciones al señalar su disconformidad con el sueldo que recibía como congresista.",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 4,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "17896798",
    fullNames: "Victor Seferino Flores Ruiz",
    shortName: "Victor Seferino Flores Ruiz",
    abbreviatedName: "Victor Seferino Flores Ruiz",
    photos: "dni_17896798.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 2",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 4,
    detailContractsRucNaturalPerson:
      "Tiene 2 contratos por un total de S/ 17708 con la entidad Poder Judicial; Tiene 2 contratos por un total de S/ 5244 con la entidad Municipalidad de Lima",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "22423252",
    fullNames: "Antonio Leónidas Pulgar Lucas",
    shortName: "Antonio Leónidas Pulgar Lucas",
    abbreviatedName: "Antonio Leónidas Pulgar Lucas",
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
    ],
    separationRange: 1,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
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
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "6825885",
    fullNames: "Wilfredo Oscorima Núñez",
    shortName: "Wilfredo Oscorima Núñez",
    abbreviatedName: "Wilfredo Oscorima Núñez",
    photos: "dni_06825885.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Movimiento Regional Wari Llaqta",
    currentBenchCode: 20,
    partyLogo: "wari_llaqta.svg",
    record:
      "Es investigado por la Fiscalía en el caso Rolex, luego de que la presidenta Dina Boluarte declaró que recibió de su parte, como préstamo, los lujosos relojes que usó en diferentes eventos. También es investigado por una adjudicación millonaria en su gestión a un consorcio representado por la presidenta de su organización política. Es el gobernador con más visitas no registradas a Palacio de Gobierno, según una investigación de OjoPúblico.",
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
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 3",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 4,
    detailContractsRucNaturalPerson:
      "Tiene 4 contratos por un total de S/ 25948 con la entidad Poder Judicial",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "8236035",
    fullNames: "Alejandro Aurelio Aguinaga Recuenco",
    shortName: "Alejandro Aurelio Aguinaga Recuenco",
    abbreviatedName: "Alejandro Aurelio Aguinaga Recuenco",
    photos: "dni_08236035.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "Fue uno de los que se vacunó de manera irregular y secreta contra la COVID-19.",
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
    ],
    criminalRecordNumber: 4,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 2",
      " Casos de corrupción en Procuraduría: 2",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "28300174",
    fullNames: "Digna Calle Lobaton",
    shortName: "Digna Calle Lobaton",
    abbreviatedName: "Digna Calle Lobaton",
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
    ],
    criminalRecordNumber: 4,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 3",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 2,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "23901989",
    fullNames: "Alejandro Soto Reyes",
    shortName: "Alejandro Soto Reyes",
    abbreviatedName: "Alejandro Soto Reyes",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "40160380",
    fullNames: "Werner Máximo Salcedo Álvarez",
    shortName: "Werner Máximo Salcedo Álvarez",
    abbreviatedName: "Werner Máximo Salcedo Álvarez",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "19994639",
    fullNames: "David Julio Jimenez Heredia",
    shortName: "David Julio Jimenez Heredia",
    abbreviatedName: "David Julio Jimenez Heredia",
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
    ],
    criminalRecordNumber: 4,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 1",
      " Sentencias penales o civiles declaradas: 2",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "25567150",
    fullNames: "Hector Valer Pinto",
    shortName: "Hector Valer Pinto",
    abbreviatedName: "Hector Valer Pinto",
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
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 5,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "6522159",
    fullNames: "Carlos Antonio Anderson Ramirez",
    shortName: "Carlos Antonio Anderson Ramirez",
    abbreviatedName: "Carlos Antonio Anderson Ramirez",
    photos: "dni_06522159.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "No Agrupado",
    currentBenchCode: 14,
    partyLogo: "no_agrupado.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 7,
    detailContractsRucNaturalPerson:
      "Tiene 6 contratos por un total de S/ 53045 con la entidad RENIEC; Tiene 1 contrato por un total de S/ 1581 con la entidad Hospital Nacional Arzobispo Loayza; Tiene 0 contrato por un total de S/ 0 con la entidad Municipalidad Provincial de Cañete",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "8271323",
    fullNames: "Maria Del Carmen Alva Prieto",
    shortName: "Maria Del Carmen Alva Prieto",
    abbreviatedName: "Maria Del Carmen Alva Prieto",
    photos: "dni_08271323.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "No Agrupado",
    currentBenchCode: 14,
    partyLogo: "no_agrupado.png",
    record:
      "Fue sancionada con una recomendación pública por la Comisión de Ética por jalarle el brazo a la congresista Isabel Cortez durante una sesión del pleno.",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 4,
    detailContractsRucNaturalPerson:
      "Tiene 4 contratos por un total de S/ 6090 con la entidad RENIEC",
    quantityCompanyLinks: 5,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "70094373",
    fullNames: "Tania Estefany Ramirez Garcia",
    shortName: "Tania Estefany Ramirez Garcia",
    abbreviatedName: "Tania Estefany Ramirez Garcia",
    photos: "dni_70094373.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "Fue cuestionada por haber grabado un TikTok bailando en la sala José Carlos Mariátegui del Palacio Legislativo. Además, un reportaje de Cuarto Poder denunció que la congresista habría plagiado su tesis de licenciatura y maestría.",
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
    ],
    criminalRecordNumber: 5,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 2",
      " Sentencias penales o civiles declaradas: 2",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 3,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "18099367",
    fullNames: "Segundo Hector Acuña Peralta",
    shortName: "Segundo Hector Acuña Peralta",
    abbreviatedName: "Segundo Hector Acuña Peralta",
    photos: "dni_18099367.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Honor y Democracia",
    currentBenchCode: 9,
    partyLogo: "honor_y_democracia.jpg",
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
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 3",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 5,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "8232920",
    fullNames: "Carlos Ernesto Bustamante Donayre",
    shortName: "Carlos Ernesto Bustamante Donayre",
    abbreviatedName: "Carlos Ernesto Bustamante Donayre",
    photos: "dni_08232920.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "Una investigación de OjoPúblico, a agosto de 2023, reveló que es uno de los congresistas que más dinero del Estado gastó en viajes: S/106.453.",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "7704730",
    fullNames: "Fernando Miguel Rospigliosi Capurro",
    shortName: "Fernando Miguel Rospigliosi Capurro",
    abbreviatedName: "Fernando Miguel Rospigliosi Capurro",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 5,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "2726999",
    fullNames: "Cruz Maria Zeta Chunga",
    shortName: "Cruz Maria Zeta Chunga",
    abbreviatedName: "Cruz Maria Zeta Chunga",
    photos: "dni_02726999.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 6,
    detailContractsRucNaturalPerson:
      "Tiene 4 contratos por un total de S/ 36727 con la entidad Hospital Nacional Arzobispo Loayza; Tiene 1 contrato por un total de S/ 9983 con la entidad Poder Judicial; Tiene 1 contrato por un total de S/ 9542 con la entidad Gobierno Regional de Lima; Tiene 0 contrato por un total de S/ 0 con la entidad Ministerio de Salud",
    quantityCompanyLinks: 3,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "21422808",
    fullNames: "Jorge Carlos Hurtado Herrera",
    shortName: "Jorge Carlos Hurtado Herrera",
    abbreviatedName: "Jorge Carlos Hurtado Herrera",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 2,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "10491661",
    fullNames: "Nelcy Lidia Heidinger Ballesteros",
    shortName: "Nelcy Lidia Heidinger Ballesteros",
    abbreviatedName: "Nelcy Lidia Heidinger Ballesteros",
    photos: "dni_10491661.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record:
      "Es investigada por la Comisión de Ética por irregularidades en la contratación de personal en su despacho.",
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
    ],
    criminalRecordNumber: 4,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Sentencias penales o civiles declaradas: 3",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "2743658",
    fullNames: "Jose Bernardo Pazo Nunura",
    shortName: "Jose Bernardo Pazo Nunura",
    abbreviatedName: "Jose Bernardo Pazo Nunura",
    photos: "dni_02743658.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Somos Perú",
    currentBenchCode: 8,
    partyLogo: "somosperu.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 2",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 4,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "16751831",
    fullNames: "Maria Grimaneza Acuña Peralta",
    shortName: "Maria Grimaneza Acuña Peralta",
    abbreviatedName: "Maria Grimaneza Acuña Peralta",
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
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 2",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "1327194",
    fullNames: "Oscar Zea Choquechambi",
    shortName: "Oscar Zea Choquechambi",
    abbreviatedName: "Oscar Zea Choquechambi",
    photos: "dni_01327194.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Magisterial de Concertación Nacional",
    currentBenchCode: 15,
    partyLogo: "bloquemagisterial.jpg",
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
    ],
    criminalRecordNumber: 5,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 3",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 6,
    detailContractsRucNaturalPerson:
      "Tiene 6 contratos por un total de S/ 56122 con la entidad Ministerio de Educación",
    quantityCompanyLinks: 3,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "43287528",
    fullNames: "Jose Daniel Williams Zapata",
    shortName: "Jose Daniel Williams Zapata",
    abbreviatedName: "Jose Daniel Williams Zapata",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 1,
    detailContractsRucNaturalPerson:
      "Tiene 1 contrato por un total de S/ 9857 con la entidad Municipalidad Provincial de Cañete",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "16429203",
    fullNames: "Gladys Margot Echaiz De Nuñez Izaga",
    shortName: "Gladys Margot Echaiz De Nuñez Izaga",
    abbreviatedName: "Gladys Margot Echaiz De Nuñez Izaga",
    photos: "dni_16429203.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Honor y Democracia",
    currentBenchCode: 9,
    partyLogo: "honor_y_democracia.jpg",
    record:
      "Fue fiscal de la Nación en el periodo 2008-2011. En el Congreso, hizo suya la denuncia contra la fiscal Zoraida Ávalos en la Subcomisión de Acusaciones Constitucionales, que concluyó con su inhabilitación. Además, ha presentado un proyecto de ley para desaparecer a la Junta Nacional de Justicia.",
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
    ],
    criminalRecordNumber: 4,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Sentencias penales o civiles declaradas: 3",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "16448130",
    fullNames: "Mery Eliana Infantes Castañeda",
    shortName: "Mery Eliana Infantes Castañeda",
    abbreviatedName: "Mery Eliana Infantes Castañeda",
    photos: "dni_16448130.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 2",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "23977149",
    fullNames: "Luis Angel Aragon Carreño",
    shortName: "Luis Angel Aragon Carreño",
    abbreviatedName: "Luis Angel Aragon Carreño",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "19877916",
    fullNames: "Edgard Cornelio Reymundo Mercado",
    shortName: "Edgard Cornelio Reymundo Mercado",
    abbreviatedName: "Edgard Cornelio Reymundo Mercado",
    photos: "dni_19877916.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Democrático Popular",
    currentBenchCode: 3,
    partyLogo: "Bloque_Democrático_Popular.jpg",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 1,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "7852432",
    fullNames: "Maria De Los Milagros Jackeline Jauregui Martinez",
    shortName: "Maria De Los Milagros Jackeline Jauregui Martinez",
    abbreviatedName: "Maria De Los Milagros Jackeline Jauregui Martinez",
    photos: "dni_07852432.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Renovación Popular",
    currentBenchCode: 5,
    partyLogo: "renovacionpop.png",
    record:
      'En el Congreso, impulsó la iniciativa para "reconocer derechos al concebido", al igual que otras en contra del enfoque de género y las mujeres. Ha sido vocera del colectivo Con mis hijos no te metas.',
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
    ],
    criminalRecordNumber: 4,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 2",
      " Casos de corrupción en Procuraduría: 1",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 5,
    detailContractsRucNaturalPerson:
      "Tiene 4 contratos por un total de S/ 39102 con la entidad Municipalidad Distrital de San Juan de Lurigancho; Tiene 1 contrato por un total de S/ 4564 con la entidad Municipalidad Provincial de Cañete; Tiene 1 contrato por un total de S/ 5232 con la entidad RENIEC; Tiene -1 contrato por un total de S/ -999 con la entidad Poder Judicial",
    quantityCompanyLinks: 3,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "46847115",
    fullNames: "Diego Alonso Fernando Bazan Calderon",
    shortName: "Diego Alonso Fernando Bazan Calderon",
    abbreviatedName: "Diego Alonso Fernando Bazan Calderon",
    photos: "dni_46847115.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Renovación Popular",
    currentBenchCode: 5,
    partyLogo: "renovacionpop.png",
    record:
      "Es presidente de la Comisión de Ética del Congreso desde agosto de 2023.",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 4,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "3243625",
    fullNames: "Idelso Manuel Garcia Correa",
    shortName: "Idelso Manuel Garcia Correa",
    abbreviatedName: "Idelso Manuel Garcia Correa",
    photos: "dni_03243625.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 5,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "7737110",
    fullNames: "Auristela Ana Obando Morgan",
    shortName: "Auristela Ana Obando Morgan",
    abbreviatedName: "Auristela Ana Obando Morgan",
    photos: "dni_07737110.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "48507818",
    fullNames: "Luis Otsuka Salazar",
    shortName: "Luis Otsuka Salazar",
    abbreviatedName: "Luis Otsuka Salazar",
    photos: "dni_48507818.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Avanza País",
    currentBenchCode: 11,
    partyLogo: "avanzapais.jpeg",
    record:
      "Ha sido vinculado a la minería informal y fue investigado por delitos ambientales. En enero de 2023, tras reunirse con el exprimer ministro Alberto Otárola, hizo uso de su arma para disipar a los manifestantes que llegaron a protestar a los exteriroes de su vivienda.",
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
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 1",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 5,
    detailContractsRucNaturalPerson:
      "Tiene 2 contratos por un total de S/ 18892 con la entidad Gobierno Regional de Lima; Tiene 3 contratos por un total de S/ 20644 con la entidad Poder Judicial",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "44144875",
    fullNames: "Leslie Vivian Olivos Martinez",
    shortName: "Leslie Vivian Olivos Martinez",
    abbreviatedName: "Leslie Vivian Olivos Martinez",
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
    ],
    criminalRecordNumber: 4,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 3",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "42335591",
    fullNames: "Heidy Lisbeth Juarez Calle",
    shortName: "Heidy Lisbeth Juarez Calle",
    abbreviatedName: "Heidy Lisbeth Juarez Calle",
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
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 2",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "7874562",
    fullNames: "Jorge Alberto Morante Figari",
    shortName: "Jorge Alberto Morante Figari",
    abbreviatedName: "Jorge Alberto Morante Figari",
    photos: "dni_07874562.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Somos Perú",
    currentBenchCode: 8,
    partyLogo: "somosperu.png",
    record:
      "Desde el Congreso, buscó modificar la ley que protege a los pueblos indígenas u originarios en situación de aislamiento. La iniciativa fue archivada.",
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
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "16642438",
    fullNames: "Jose Maria Balcazar Zelada",
    shortName: "Jose Maria Balcazar Zelada",
    abbreviatedName: "Jose Maria Balcazar Zelada",
    photos: "dni_16642438.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Perú Libre",
    currentBenchCode: 12,
    partyLogo: "perulibre.png",
    record:
      "Es investigado por la Fiscalía en el caso La Fiscal y su Cúpula de Poder por sus presuntos vínculos y negociaciones con la organización criminal que habría liderado la exfiscal de la Nación, Patricia Benavides, al interior del Ministerio Público.",
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
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 3,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "2417724",
    fullNames: "Carlos Javier Zeballos Madariaga",
    shortName: "Carlos Javier Zeballos Madariaga",
    abbreviatedName: "Carlos Javier Zeballos Madariaga",
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
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 2",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 2,
    detailContractsRucNaturalPerson:
      "Tiene 2 contratos por un total de S/ 12373 con la entidad Hospital Nacional Arzobispo Loayza",
    quantityCompanyLinks: 2,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "7831436",
    fullNames: "Carmen Patricia Juarez Gallegos",
    shortName: "Carmen Patricia Juarez Gallegos",
    abbreviatedName: "Carmen Patricia Juarez Gallegos",
    photos: "dni_07831436.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "Fue teniente alcaldesa del exalcalde de Lima, Luis Castañeda Lossio, quien fue investigado por el caso Lava Jato.",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "44103082",
    fullNames: "Jose Enrique Jeri Ore",
    shortName: "Jose Enrique Jeri Ore",
    abbreviatedName: "Jose Enrique Jeri Ore",
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
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 2",
      " Casos de corrupción en Procuraduría: 1",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 1,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "40728264",
    fullNames: "Roberto Enrique Chiabra Leon",
    shortName: "Roberto Enrique Chiabra Leon",
    abbreviatedName: "Roberto Enrique Chiabra Leon",
    photos: "dni_40728264.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record: "NA",
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
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 1",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 1,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "6256217",
    fullNames: "Dina Ercilia Boluarte Zegarra",
    shortName: "Dina Ercilia Boluarte Zegarra",
    abbreviatedName: "Dina Ercilia Boluarte Zegarra",
    photos: "dni_06256217.jpg",
    position: "Presidente de la República",
    status: "Ejerciendo",
    currentBench: "Perú Libre",
    currentBenchCode: 12,
    partyLogo: "perulibre.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 4,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 3",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 4,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "20051359",
    fullNames: "Alfredo Pariona Sinche",
    shortName: "Alfredo Pariona Sinche",
    abbreviatedName: "Alfredo Pariona Sinche",
    photos: "dni_20051359.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bancada Socialista",
    currentBenchCode: 6,
    partyLogo: "bancada_socialista.jpg",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 5,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "9303898",
    fullNames: "George Edward Malaga Trillo",
    shortName: "George Edward Malaga Trillo",
    abbreviatedName: "George Edward Malaga Trillo",
    photos: "dni_09303898.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Avanza País",
    currentBenchCode: 11,
    partyLogo: "avanzapais.jpeg",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "32971154",
    fullNames: "Nilza Merly Chacon Trujillo",
    shortName: "Nilza Merly Chacon Trujillo",
    abbreviatedName: "Nilza Merly Chacon Trujillo",
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
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 1",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "1888173",
    fullNames: "Jorge Luis Flores Ancachi",
    shortName: "Jorge Luis Flores Ancachi",
    abbreviatedName: "Jorge Luis Flores Ancachi",
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
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 4,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "45591954",
    fullNames: "Adriana Josefina Tudela Gutierrez",
    shortName: "Adriana Josefina Tudela Gutierrez",
    abbreviatedName: "Adriana Josefina Tudela Gutierrez",
    photos: "dni_45591954.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Avanza País - Partido de Integración Social",
    currentBenchCode: 4,
    partyLogo: "avanzapais.jpeg",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 5,
    detailContractsRucNaturalPerson:
      "Tiene 5 contratos por un total de S/ 24838 con la entidad Ministerio de Educación; Tiene 0 contrato por un total de S/ 1 con la entidad Poder Judicial; Tiene 0 contrato por un total de S/ 0 con la entidad Municipalidad Provincial de Cañete; Tiene 0 contrato por un total de S/ 1 con la entidad Gobierno Regional de Lima",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "44756974",
    fullNames: "Yessica Rosselli Amuruz Dulanto",
    shortName: "Yessica Rosselli Amuruz Dulanto",
    abbreviatedName: "Yessica Rosselli Amuruz Dulanto",
    photos: "dni_44756974.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Avanza País - Partido de Integración Social",
    currentBenchCode: 4,
    partyLogo: "avanzapais.jpeg",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 1,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "188009",
    fullNames: "Manuel Gambini Rupay",
    shortName: "Manuel Gambini Rupay",
    abbreviatedName: "Manuel Gambini Rupay",
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
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 2",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 2,
    detailContractsRucNaturalPerson:
      "Tiene 2 contratos por un total de S/ 5818 con la entidad Ministerio de Educación",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "23266777",
    fullNames: "Leoncio Huayllani Taype",
    shortName: "Leoncio Huayllani Taype",
    abbreviatedName: "Leoncio Huayllani Taype",
    photos: "dni_23266777.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Movimiento Regional Ayni",
    currentBenchCode: 22,
    partyLogo: "ayni.svg",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 1,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "44886100",
    fullNames: "Cheryl Trigozo Reátegui",
    shortName: "Cheryl Trigozo Reátegui",
    abbreviatedName: "Cheryl Trigozo Reátegui",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 1,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "5374449",
    fullNames: "Juan Carlos Mori Celis",
    shortName: "Juan Carlos Mori Celis",
    abbreviatedName: "Juan Carlos Mori Celis",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 3,
    detailContractsRucNaturalPerson:
      "Tiene 3 contratos por un total de S/ 26774 con la entidad Gobierno Regional de Lima; Tiene 0 contrato por un total de S/ 1 con la entidad RENIEC",
    quantityCompanyLinks: 3,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "29423212",
    fullNames: "Esdras Ricardo Medina Minaya",
    shortName: "Esdras Ricardo Medina Minaya",
    abbreviatedName: "Esdras Ricardo Medina Minaya",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "10804834",
    fullNames: "Luis Roberto Kamiche Morante",
    shortName: "Luis Roberto Kamiche Morante",
    abbreviatedName: "Luis Roberto Kamiche Morante",
    photos: "dni_10804834.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record:
      "Fue investigado por la Comisión de Ética por haber presuntamente contratado en su despacho a su pareja sentimental, pero la sanción de suspensión por 30 días no prosperó y la denuncia fue archivada.",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "10213424",
    fullNames: "Flor Aidee Pablo Medina",
    shortName: "Flor Aidee Pablo Medina",
    abbreviatedName: "Flor Aidee Pablo Medina",
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
    ],
    criminalRecordNumber: 4,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 2",
      " Casos de corrupción en Procuraduría: 2",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 4,
    detailContractsRucNaturalPerson:
      "Tiene 1 contrato por un total de S/ 4135 con la entidad Municipalidad Distrital de San Juan de Lurigancho; Tiene 3 contratos por un total de S/ 24730 con la entidad Municipalidad Provincial de Cañete",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "6783615",
    fullNames: "Jose Ernesto Cueto Aservi",
    shortName: "Jose Ernesto Cueto Aservi",
    abbreviatedName: "Jose Ernesto Cueto Aservi",
    photos: "dni_06783615.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Honor y Democracia",
    currentBenchCode: 9,
    partyLogo: "honor_y_democracia.jpg",
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
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 2",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 4,
    detailContractsRucNaturalPerson:
      "Tiene 2 contratos por un total de S/ 19184 con la entidad Municipalidad de Lima; Tiene 2 contratos por un total de S/ 12437 con la entidad Poder Judicial",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "29384343",
    fullNames: "Pedro Edwin Martinez Talavera",
    shortName: "Pedro Edwin Martinez Talavera",
    abbreviatedName: "Pedro Edwin Martinez Talavera",
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
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Sentencias penales o civiles declaradas: 2",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 4,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "10806296",
    fullNames: "Norma Martina Yarrow Lumbreras",
    shortName: "Norma Martina Yarrow Lumbreras",
    abbreviatedName: "Norma Martina Yarrow Lumbreras",
    photos: "dni_10806296.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Renovación Popular",
    currentBenchCode: 5,
    partyLogo: "renovacionpop.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "9575873",
    fullNames: "Nivardo Edgar Tello Montes",
    shortName: "Nivardo Edgar Tello Montes",
    abbreviatedName: "Nivardo Edgar Tello Montes",
    photos: "dni_09575873.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Podemos Perú",
    currentBenchCode: 7,
    partyLogo: "podemosperu.png",
    record:
      "Es investigado por la Fiscalía en el caso La Fiscal y su Cúpula de Poder por sus presuntos vínculos y negociaciones con la organización criminal que habría liderado la exfiscal de la Nación, Patricia Benavides, al interior del Ministerio Público. Fue sancionado por la Comisión de Ética con amonestación escrita pública y multa de 60 días por haber solicitado a la Oficina Cultural y Económica de Taipei – Taiwan la suma de $ 8,000 para la compra de ollas y cucharones.",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "42611628",
    fullNames: "Wilson Rusbel Quispe Mamani",
    shortName: "Wilson Rusbel Quispe Mamani",
    abbreviatedName: "Wilson Rusbel Quispe Mamani",
    photos: "dni_42611628.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Juntos por el Perú - Voces Del Pueblo",
    currentBenchCode: 13,
    partyLogo: "juntosperu.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 4,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 2",
      " Casos de corrupción en Procuraduría: 1",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "44338336",
    fullNames: "Percy Godoy Medina",
    shortName: "Percy Godoy Medina",
    abbreviatedName: "Percy Godoy Medina",
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
    ],
    criminalRecordNumber: 5,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 2",
      " Casos de corrupción en Procuraduría: 2",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 4,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "40332943",
    fullNames: "Juan Luis Chombo Heredia",
    shortName: "Juan Luis Chombo Heredia",
    abbreviatedName: "Juan Luis Chombo Heredia",
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
    ],
    separationRange: -5,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
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
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 2",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "361856",
    fullNames: "Segismundo Cruces Ordinola",
    shortName: "Segismundo Cruces Ordinola",
    abbreviatedName: "Segismundo Cruces Ordinola",
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
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 5,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 2",
      " Casos de corrupción en Procuraduría: 1",
      " Sentencias penales o civiles declaradas: 2",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 3,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "43313696",
    fullNames: "Wilson Soto Palacios",
    shortName: "Wilson Soto Palacios",
    abbreviatedName: "Wilson Soto Palacios",
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
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 2",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "6049853",
    fullNames: "Miguel Angel Ciccia Vasquez",
    shortName: "Miguel Angel Ciccia Vasquez",
    abbreviatedName: "Miguel Angel Ciccia Vasquez",
    photos: "dni_06049853.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Renovación Popular",
    currentBenchCode: 5,
    partyLogo: "renovacionpop.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 3,
    detailContractsRucNaturalPerson:
      "Tiene 3 contratos por un total de S/ 20616 con la entidad Municipalidad de Lima; Tiene 0 contrato por un total de S/ 1 con la entidad Ministerio de Salud; Tiene 0 contrato por un total de S/ 1 con la entidad Hospital Nacional Arzobispo Loayza",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "16667146",
    fullNames: "Silvia Maria Monteza Facho",
    shortName: "Silvia Maria Monteza Facho",
    abbreviatedName: "Silvia Maria Monteza Facho",
    photos: "dni_16667146.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Acción Popular",
    currentBenchCode: 10,
    partyLogo: "accionpopular.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 2,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "9303945",
    fullNames: "Juan Carlos Martin Lizarzaburu Lizarzaburu",
    shortName: "Juan Carlos Martin Lizarzaburu Lizarzaburu",
    abbreviatedName: "Juan Carlos Martin Lizarzaburu Lizarzaburu",
    photos: "dni_09303945.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record:
      "Fue sancionado en dos ocasiones por la Comisión de Ética. La primera por sus expresiones despectivas sobre la bandera del Tahuantinsuyo, y la segunda por haber sus expresiones en agravio de la congresista Patricia Juárez. Una investigación de OjoPúblico, a agosto de 2023, reveló que es uno de los congresistas que más dinero del Estado gastó en viajes: S/303.000",
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
    ],
    criminalRecordNumber: 4,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 4",
    ],
    quantityContractsRucNaturalPerson: 8,
    detailContractsRucNaturalPerson:
      "Tiene 5 contratos por un total de S/ 11766 con la entidad RENIEC; Tiene 3 contratos por un total de S/ 24167 con la entidad Municipalidad de Lima",
    quantityCompanyLinks: 3,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "24711696",
    fullNames: "Jhakeline Katy Ugarte Mamani",
    shortName: "Jhakeline Katy Ugarte Mamani",
    abbreviatedName: "Jhakeline Katy Ugarte Mamani",
    photos: "dni_24711696.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Magisterial de Concertación Nacional",
    currentBenchCode: 15,
    partyLogo: "bloquemagisterial.jpg",
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
    ],
    criminalRecordNumber: 5,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 2",
      " Sentencias penales o civiles declaradas: 2",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "32923902",
    fullNames: "Elias Marcial Varas Melendez",
    shortName: "Elias Marcial Varas Melendez",
    abbreviatedName: "Elias Marcial Varas Melendez",
    photos: "dni_32923902.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Juntos por el Perú - Voces Del Pueblo",
    currentBenchCode: 13,
    partyLogo: "juntosperu.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 4,
    detailContractsRucNaturalPerson:
      "Tiene 4 contratos por un total de S/ 17901 con la entidad Ministerio de Salud",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "10485497",
    fullNames: "Yorel Kira Alcarraz Aguero",
    shortName: "Yorel Kira Alcarraz Aguero",
    abbreviatedName: "Yorel Kira Alcarraz Aguero",
    photos: "dni_10485497.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Podemos Perú",
    currentBenchCode: 7,
    partyLogo: "podemosperu.png",
    record:
      "Es investigada por la Comisión de Ética por haber emitido expresiones agraviantes contra un congresista.",
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
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 1,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "1157063",
    fullNames: "Karol Ivett Paredes Fonseca",
    shortName: "Karol Ivett Paredes Fonseca",
    abbreviatedName: "Karol Ivett Paredes Fonseca",
    photos: "dni_01157063.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Avanza País - Partido de Integración Social",
    currentBenchCode: 4,
    partyLogo: "avanzapais.jpeg",
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
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 1,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "47785498",
    fullNames: "Alejandro Enrique Cavero Alva",
    shortName: "Alejandro Enrique Cavero Alva",
    abbreviatedName: "Alejandro Enrique Cavero Alva",
    photos: "dni_47785498.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Avanza País - Partido de Integración Social",
    currentBenchCode: 4,
    partyLogo: "avanzapais.jpeg",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 3,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "31031443",
    fullNames: "German Adolfo Tacuri Valdivia",
    shortName: "German Adolfo Tacuri Valdivia",
    abbreviatedName: "German Adolfo Tacuri Valdivia",
    photos: "dni_31031443.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Magisterial de Concertación Nacional",
    currentBenchCode: 15,
    partyLogo: "bloquemagisterial.jpg",
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
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 2",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "4647085",
    fullNames: "Victor Raul Cutipa Ccama",
    shortName: "Victor Raul Cutipa Ccama",
    abbreviatedName: "Victor Raul Cutipa Ccama",
    photos: "dni_04647085.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Juntos por el Perú - Voces Del Pueblo",
    currentBenchCode: 13,
    partyLogo: "juntosperu.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "42750152",
    fullNames: "Silvana Emperatriz Robles Araujo",
    shortName: "Silvana Emperatriz Robles Araujo",
    abbreviatedName: "Silvana Emperatriz Robles Araujo",
    photos: "dni_42750152.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bancada Socialista",
    currentBenchCode: 6,
    partyLogo: "bancada_socialista.jpg",
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
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 7,
    detailContractsRucNaturalPerson:
      "Tiene 2 contratos por un total de S/ 10561 con la entidad Municipalidad Distrital de San Juan de Lurigancho; Tiene 5 contratos por un total de S/ 40357 con la entidad Municipalidad de Lima",
    quantityCompanyLinks: 3,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "1088231",
    fullNames: "Lucinda Vasquez Vela",
    shortName: "Lucinda Vasquez Vela",
    abbreviatedName: "Lucinda Vasquez Vela",
    photos: "dni_01088231.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Magisterial de Concertación Nacional",
    currentBenchCode: 15,
    partyLogo: "bloquemagisterial.jpg",
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
    ],
    criminalRecordNumber: 4,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 3",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 2,
    detailContractsRucNaturalPerson:
      "Tiene 2 contratos por un total de S/ 14357 con la entidad Municipalidad de Lima",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "8185259",
    fullNames: "Susel Ana Maria Paredes Pique",
    shortName: "Susel Ana Maria Paredes Pique",
    abbreviatedName: "Susel Ana Maria Paredes Pique",
    photos: "dni_08185259.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Democrático Popular",
    currentBenchCode: 3,
    partyLogo: "Bloque_Democrático_Popular.jpg",
    record:
      "Es investigada por la Comisión de Ética por adejtivos vertidos en un medio de comunicación sobre los miembros de la Comisión Permanente.",
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
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "5070188",
    fullNames: "Eduardo Salhuana Cavides",
    shortName: "Eduardo Salhuana Cavides",
    abbreviatedName: "Eduardo Salhuana Cavides",
    photos: "dni_05070188.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record:
      "Es investigado por la Fiscalía por hechos que habría cometido cuando era gerente general del Gobierno Regional de Madre de Dios.",
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
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 1",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 1,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "40204874",
    fullNames: "Ruth Luque Ibarra",
    shortName: "Ruth Luque Ibarra",
    abbreviatedName: "Ruth Luque Ibarra",
    photos: "dni_40204874.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Democrático Popular",
    currentBenchCode: 3,
    partyLogo: "Bloque_Democrático_Popular.jpg",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "27361499",
    fullNames: "Segundo Teodomiro Quiroz Barboza",
    shortName: "Segundo Teodomiro Quiroz Barboza",
    abbreviatedName: "Segundo Teodomiro Quiroz Barboza",
    photos: "dni_27361499.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Magisterial de Concertación Nacional",
    currentBenchCode: 15,
    partyLogo: "bloquemagisterial.jpg",
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
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 2",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "1311614",
    fullNames: "Flavio Cruz Mamani",
    shortName: "Flavio Cruz Mamani",
    abbreviatedName: "Flavio Cruz Mamani",
    photos: "dni_01311614.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Perú Libre",
    currentBenchCode: 12,
    partyLogo: "perulibre.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 5,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Sentencias penales o civiles declaradas: 4",
    ],
    quantityContractsRucNaturalPerson: 5,
    detailContractsRucNaturalPerson:
      "Tiene 3 contratos por un total de S/ 24972 con la entidad Hospital Nacional Arzobispo Loayza; Tiene 2 contratos por un total de S/ 18753 con la entidad Municipalidad de Lima",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "29632775",
    fullNames: "Bernardo Jaime Quito Sarmiento",
    shortName: "Bernardo Jaime Quito Sarmiento",
    abbreviatedName: "Bernardo Jaime Quito Sarmiento",
    photos: "dni_29632775.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bancada Socialista",
    currentBenchCode: 6,
    partyLogo: "bancada_socialista.jpg",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 1,
    detailContractsRucNaturalPerson:
      "Tiene 1 contrato por un total de S/ 5141 con la entidad Gobierno Regional de Lima",
    quantityCompanyLinks: 4,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "20036514",
    fullNames: "Waldemar Jose Cerron Rojas",
    shortName: "Waldemar Jose Cerron Rojas",
    abbreviatedName: "Waldemar Jose Cerron Rojas",
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
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 2",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 5,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "25542661",
    fullNames: "Jose Alberto Arriola Tueros",
    shortName: "Jose Alberto Arriola Tueros",
    abbreviatedName: "Jose Alberto Arriola Tueros",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 7,
    detailContractsRucNaturalPerson:
      "Tiene 7 contratos por un total de S/ 60324 con la entidad Poder Judicial; Tiene 1 contrato por un total de S/ 9001 con la entidad Gobierno Regional de Lima; Tiene -1 contrato por un total de S/ -1000 con la entidad Municipalidad de Lima",
    quantityCompanyLinks: 3,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "16655831",
    fullNames: "Segundo Toribio Montalvo Cubas",
    shortName: "Segundo Toribio Montalvo Cubas",
    abbreviatedName: "Segundo Toribio Montalvo Cubas",
    photos: "dni_16655831.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Perú Libre",
    currentBenchCode: 12,
    partyLogo: "perulibre.png",
    record:
      "Desde el Congreso, ha impulsado iniciativas para formalizar a los taxis colectivos. Actualmente preside la Comisión de Fiscalización.",
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
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 2",
      " Casos de corrupción en Procuraduría: 1",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 5,
    detailContractsRucNaturalPerson:
      "Tiene 5 contratos por un total de S/ 11423 con la entidad Hospital Nacional Arzobispo Loayza",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "31027035",
    fullNames: "Paul Silvio Gutierrez Ticona",
    shortName: "Paul Silvio Gutierrez Ticona",
    abbreviatedName: "Paul Silvio Gutierrez Ticona",
    photos: "dni_31027035.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Magisterial de Concertación Nacional",
    currentBenchCode: 15,
    partyLogo: "bloquemagisterial.jpg",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 2,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "7026029",
    fullNames: "Jorge Arturo Zeballos Aponte",
    shortName: "Jorge Arturo Zeballos Aponte",
    abbreviatedName: "Jorge Arturo Zeballos Aponte",
    photos: "dni_07026029.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Renovación Popular",
    currentBenchCode: 5,
    partyLogo: "renovacionpop.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 2",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "22290935",
    fullNames: "Raul Felipe Doroteo Carbajo",
    shortName: "Raul Felipe Doroteo Carbajo",
    abbreviatedName: "Raul Felipe Doroteo Carbajo",
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
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 2",
      " Casos de corrupción en Procuraduría: 1",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 6,
    detailContractsRucNaturalPerson:
      "Tiene 6 contratos por un total de S/ 38225 con la entidad Municipalidad de Lima; Tiene 0 contrato por un total de S/ 0 con la entidad Poder Judicial; Tiene 0 contrato por un total de S/ 0 con la entidad Hospital Nacional Arzobispo Loayza",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "17549232",
    fullNames: "Hilda Marleny Portero Lopez",
    shortName: "Hilda Marleny Portero Lopez",
    abbreviatedName: "Hilda Marleny Portero Lopez",
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
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "4413969",
    fullNames: "Jorge Samuel Coayla Juarez",
    shortName: "Jorge Samuel Coayla Juarez",
    abbreviatedName: "Jorge Samuel Coayla Juarez",
    photos: "dni_04413969.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Juntos por el Perú - Voces Del Pueblo",
    currentBenchCode: 13,
    partyLogo: "juntosperu.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 5,
    detailContractsRucNaturalPerson:
      "Tiene 5 contratos por un total de S/ 38116 con la entidad Municipalidad Distrital de San Juan de Lurigancho",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "15300817",
    fullNames: "Luis Gustavo Cordero Jon Tay",
    shortName: "Luis Gustavo Cordero Jon Tay",
    abbreviatedName: "Luis Gustavo Cordero Jon Tay",
    photos: "dni_15300817.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Somos Perú",
    currentBenchCode: 8,
    partyLogo: "somosperu.png",
    record:
      "Es investigado por la Fiscalía en el caso La Fiscal y su Cúpula de Poder por sus presuntos vínculos y negociaciones con la organización criminal que habría liderado la exfiscal de la Nación, Patricia Benavides, al interior del Ministerio Público. Fue sancionado con suspensión de 120 días por la Comisión de Ética por agresión a su expareja.",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 6,
    detailContractsRucNaturalPerson:
      "Tiene 5 contratos por un total de S/ 15408 con la entidad RENIEC; Tiene 1 contrato por un total de S/ 7442 con la entidad Ministerio de Educación; Tiene 0 contrato por un total de S/ 0 con la entidad Hospital Nacional Arzobispo Loayza; Tiene 0 contrato por un total de S/ 1 con la entidad Municipalidad de Lima",
    quantityCompanyLinks: 4,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "16719182",
    fullNames: "Maria Jessica Cordova Lobaton",
    shortName: "Maria Jessica Cordova Lobaton",
    abbreviatedName: "Maria Jessica Cordova Lobaton",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 1,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "42589181",
    fullNames: "Janet Milagros Rivas Chacara",
    shortName: "Janet Milagros Rivas Chacara",
    abbreviatedName: "Janet Milagros Rivas Chacara",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 5,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "40858548",
    fullNames: "Francis Jhasmina Paredes Castro",
    shortName: "Francis Jhasmina Paredes Castro",
    abbreviatedName: "Francis Jhasmina Paredes Castro",
    photos: "dni_40858548.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Podemos Perú",
    currentBenchCode: 7,
    partyLogo: "podemosperu.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 5,
    detailContractsRucNaturalPerson:
      "Tiene 5 contratos por un total de S/ 35897 con la entidad Municipalidad Provincial de Cañete; Tiene 0 contrato por un total de S/ 1 con la entidad Hospital Nacional Arzobispo Loayza; Tiene 1 contrato por un total de S/ 8063 con la entidad Municipalidad de Lima; Tiene -1 contrato por un total de S/ -999 con la entidad RENIEC",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "18080185",
    fullNames: "Juan Bartolome Burgos Oliveros",
    shortName: "Juan Bartolome Burgos Oliveros",
    abbreviatedName: "Juan Bartolome Burgos Oliveros",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 8,
    detailContractsRucNaturalPerson:
      "Tiene 4 contratos por un total de S/ 6100 con la entidad Ministerio de Salud; Tiene 1 contrato por un total de S/ 4434 con la entidad Hospital Nacional Arzobispo Loayza; Tiene 3 contratos por un total de S/ 29935 con la entidad Gobierno Regional de Lima",
    quantityCompanyLinks: 3,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "40242430",
    fullNames: "Hector Jose Ventura Angel",
    shortName: "Hector Jose Ventura Angel",
    abbreviatedName: "Hector Jose Ventura Angel",
    photos: "dni_40242430.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "Fue investigado por la Comisión de Ética por agresión física, pero finalmente la denuncia fue archivada.",
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
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 1",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "42572649",
    fullNames: "Jhaec Darwin Espinoza Vargas",
    shortName: "Jhaec Darwin Espinoza Vargas",
    abbreviatedName: "Jhaec Darwin Espinoza Vargas",
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
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 2",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 3,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "45382589",
    fullNames: "Luis Arturo Alegria Garcia",
    shortName: "Luis Arturo Alegria Garcia",
    abbreviatedName: "Luis Arturo Alegria Garcia",
    photos: "dni_45382589.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 5,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "41187802",
    fullNames: "Américo Gonza Castillo",
    shortName: "Américo Gonza Castillo",
    abbreviatedName: "Américo Gonza Castillo",
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
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 2",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 7,
    detailContractsRucNaturalPerson:
      "Tiene 6 contratos por un total de S/ 46595 con la entidad Gobierno Regional de Lima; Tiene 1 contrato por un total de S/ 7201 con la entidad Ministerio de Educación",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "7638265",
    fullNames: "Guillermo Bermejo Rojas",
    shortName: "Guillermo Bermejo Rojas",
    abbreviatedName: "Guillermo Bermejo Rojas",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 4,
    detailContractsRucNaturalPerson:
      "Tiene 1 contrato por un total de S/ 4173 con la entidad Municipalidad Distrital de San Juan de Lurigancho; Tiene 1 contrato por un total de S/ 4807 con la entidad Hospital Nacional Arzobispo Loayza; Tiene 2 contratos por un total de S/ 13771 con la entidad Gobierno Regional de Lima; Tiene 0 contrato por un total de S/ 1 con la entidad Ministerio de Educación",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "10129700",
    fullNames: "Isabel Cortez Aguirre",
    shortName: "Isabel Cortez Aguirre",
    abbreviatedName: "Isabel Cortez Aguirre",
    photos: "dni_10129700.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Democrático Popular",
    currentBenchCode: 3,
    partyLogo: "Bloque_Democrático_Popular.jpg",
    record: "NA",
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
    ],
    criminalRecordNumber: 4,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 2",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "72200895",
    fullNames: "Sigrid Tesoro Bazan Narro",
    shortName: "Sigrid Tesoro Bazan Narro",
    abbreviatedName: "Sigrid Tesoro Bazan Narro",
    photos: "dni_72200895.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Democrático Popular",
    currentBenchCode: 3,
    partyLogo: "Bloque_Democrático_Popular.jpg",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 5,
    detailContractsRucNaturalPerson:
      "Tiene 3 contratos por un total de S/ 11411 con la entidad RENIEC; Tiene 2 contratos por un total de S/ 4193 con la entidad Ministerio de Salud; Tiene 0 contrato por un total de S/ 1 con la entidad Municipalidad de Lima",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "21456255",
    fullNames: "Jorge Alfonso Marticorena Mendoza",
    shortName: "Jorge Alfonso Marticorena Mendoza",
    abbreviatedName: "Jorge Alfonso Marticorena Mendoza",
    photos: "dni_21456255.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record: "NA",
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
    ],
    criminalRecordNumber: 5,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 1",
      " Sentencias penales o civiles declaradas: 3",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 3,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "29410132",
    fullNames: "Rohel Sánchez Sánchez",
    shortName: "Rohel Sánchez Sánchez",
    abbreviatedName: "Rohel Sánchez Sánchez",
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
    ],
    separationRange: -9,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
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
    ],
    criminalRecordNumber: 4,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 3",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 4,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "10280036",
    fullNames: "Patricia Rosa Chirinos Venegas",
    shortName: "Patricia Rosa Chirinos Venegas",
    abbreviatedName: "Patricia Rosa Chirinos Venegas",
    photos: "dni_10280036.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Avanza País",
    currentBenchCode: 11,
    partyLogo: "avanzapais.jpeg",
    record:
      "Es investigada como coautora del delito de organización criminal en el caso La Fiscal y su Cúpula de Poder, que involucraba a Patricia Benavides, por haber negociado votos desde el Congreso. Fue sancionada con recomendación pública por la Comisión de Ética por haber expresado frase irrespetuosa al presidente de la República.",
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
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "41005490",
    fullNames: "Maria Elizabeth Taipe Coronado",
    shortName: "Maria Elizabeth Taipe Coronado",
    abbreviatedName: "Maria Elizabeth Taipe Coronado",
    photos: "dni_41005490.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Perú Libre",
    currentBenchCode: 12,
    partyLogo: "perulibre.png",
    record: "Es investigada por la Fiscalía por lavado de activos.",
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
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 1,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "5618705",
    fullNames: "Rosio Torres Salinas",
    shortName: "Rosio Torres Salinas",
    abbreviatedName: "Rosio Torres Salinas",
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
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 1,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "41623184",
    fullNames: "Luis Neyra León",
    shortName: "Luis Neyra León",
    abbreviatedName: "Luis Neyra León",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 4,
    detailContractsRucNaturalPerson:
      "Tiene 4 contratos por un total de S/ 37019 con la entidad RENIEC",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "10691398",
    fullNames: "Javier Rommel Padilla Romero",
    shortName: "Javier Rommel Padilla Romero",
    abbreviatedName: "Javier Rommel Padilla Romero",
    photos: "dni_10691398.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Honor y Democracia",
    currentBenchCode: 9,
    partyLogo: "honor_y_democracia.jpg",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 4,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "16002918",
    fullNames: "Roberto Helbert Sanchez Palomino",
    shortName: "Roberto Helbert Sanchez Palomino",
    abbreviatedName: "Roberto Helbert Sanchez Palomino",
    photos: "dni_16002918.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Juntos por el Perú - Voces Del Pueblo",
    currentBenchCode: 13,
    partyLogo: "juntosperu.png",
    record:
      "Es investigado por la Fisaclía por obstrucción a la justicia, en su calidad de exministro de Comercio Exterior, en el proceso seguido contra el expresidente Pedro Castillo.",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "44993239",
    fullNames: "Roger Guevara Rodríguez",
    shortName: "Roger Guevara Rodríguez",
    abbreviatedName: "Roger Guevara Rodríguez",
    photos: "dni_44993239.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Somos Perú",
    currentBenchCode: 8,
    partyLogo: "somosperu.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 3,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "46517805",
    fullNames: "Alex Randu Flores Ramirez",
    shortName: "Alex Randu Flores Ramirez",
    abbreviatedName: "Alex Randu Flores Ramirez",
    photos: "dni_46517805.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bancada Socialista",
    currentBenchCode: 6,
    partyLogo: "bancada_socialista.jpg",
    record: "NA",
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
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 2",
    ],
    quantityContractsRucNaturalPerson: 3,
    detailContractsRucNaturalPerson:
      "Tiene 2 contratos por un total de S/ 12403 con la entidad RENIEC; Tiene 1 contrato por un total de S/ 1520 con la entidad Ministerio de Educación",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "40577351",
    fullNames: "Richard Hancco Soncco",
    shortName: "Richard Hancco Soncco",
    abbreviatedName: "Richard Hancco Soncco",
    photos: "dni_40577351.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "Reforma y Honradez por Más Obras",
    currentBenchCode: 28,
    partyLogo: "reforma_y_honradez.svg",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "44649199",
    fullNames: "Guido Bellido Ugarte",
    shortName: "Guido Bellido Ugarte",
    abbreviatedName: "Guido Bellido Ugarte",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 1,
    detailContractsRucNaturalPerson:
      "Tiene 1 contrato por un total de S/ 2134 con la entidad Municipalidad de Lima",
    quantityCompanyLinks: 4,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "29299579",
    fullNames: "Alex Antonio Paredes Gonzales",
    shortName: "Alex Antonio Paredes Gonzales",
    abbreviatedName: "Alex Antonio Paredes Gonzales",
    photos: "dni_29299579.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Magisterial de Concertación Nacional",
    currentBenchCode: 15,
    partyLogo: "bloquemagisterial.jpg",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 5,
    detailContractsRucNaturalPerson:
      "Tiene 5 contratos por un total de S/ 24468 con la entidad RENIEC; Tiene 0 contrato por un total de S/ 0 con la entidad Municipalidad de Lima; Tiene 0 contrato por un total de S/ 1 con la entidad Ministerio de Educación",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "42628319",
    fullNames: "Ana Zadith Zegarra Saboya",
    shortName: "Ana Zadith Zegarra Saboya",
    abbreviatedName: "Ana Zadith Zegarra Saboya",
    photos: "dni_42628319.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Somos Perú",
    currentBenchCode: 8,
    partyLogo: "somosperu.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 1,
    detailContractsRucNaturalPerson:
      "Tiene 1 contrato por un total de S/ 4206 con la entidad Ministerio de Salud",
    quantityCompanyLinks: 1,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "80143959",
    fullNames: "Lady Mercedes Camones Soriano",
    shortName: "Lady Mercedes Camones Soriano",
    abbreviatedName: "Lady Mercedes Camones Soriano",
    photos: "dni_80143959.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record:
      "Fue investigada por la Fiscalía por los audios que se difundieron de su conversación con César Acuña, en el que la presiona para aprobar una ley que lo beneficie con miras a las Elecciones Regionales 2022. No obstante, según IDL-Reporteros, Patricia Benavides archivó el caso.",
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
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 1",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "8911520",
    fullNames: "Martha Lupe Moyano Delgado",
    shortName: "Martha Lupe Moyano Delgado",
    abbreviatedName: "Martha Lupe Moyano Delgado",
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
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 8,
    detailContractsRucNaturalPerson:
      "Tiene 8 contratos por un total de S/ 37328 con la entidad Municipalidad Provincial de Cañete",
    quantityCompanyLinks: 3,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "44306903",
    fullNames: "Alfredo Azurin Loayza",
    shortName: "Alfredo Azurin Loayza",
    abbreviatedName: "Alfredo Azurin Loayza",
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
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 2",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "42699423",
    fullNames: "Kelly Roxana Portalatino Avalos",
    shortName: "Kelly Roxana Portalatino Avalos",
    abbreviatedName: "Kelly Roxana Portalatino Avalos",
    photos: "dni_42699423.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Perú Libre",
    currentBenchCode: 12,
    partyLogo: "perulibre.png",
    record: "Fue ministra de Salud durante el gobierno de Pedro Castillo.",
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
    ],
    criminalRecordNumber: 4,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 2",
      " Casos de corrupción en Procuraduría: 1",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 7,
    detailContractsRucNaturalPerson:
      "Tiene 5 contratos por un total de S/ 40836 con la entidad Gobierno Regional de Lima; Tiene 2 contratos por un total de S/ 19744 con la entidad Hospital Nacional Arzobispo Loayza; Tiene 0 contrato por un total de S/ 1 con la entidad Ministerio de Salud; Tiene 0 contrato por un total de S/ 1 con la entidad Municipalidad Distrital de San Juan de Lurigancho",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "9980339",
    fullNames: "Jeny Luz Lopez Morales",
    shortName: "Jeny Luz Lopez Morales",
    abbreviatedName: "Jeny Luz Lopez Morales",
    photos: "dni_09980339.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "22510256",
    fullNames: "Elizabeth Sara Medina Hermosilla",
    shortName: "Elizabeth Sara Medina Hermosilla",
    abbreviatedName: "Elizabeth Sara Medina Hermosilla",
    photos: "dni_22510256.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bloque Magisterial de Concertación Nacional",
    currentBenchCode: 15,
    partyLogo: "bloquemagisterial.jpg",
    record: "NA",
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
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 1,
    detailContractsRucNaturalPerson:
      "Tiene 1 contrato por un total de S/ 3243 con la entidad Hospital Nacional Arzobispo Loayza",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "18099931",
    fullNames: "Carlos Enrique Alva Rojas",
    shortName: "Carlos Enrique Alva Rojas",
    abbreviatedName: "Carlos Enrique Alva Rojas",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "42134579",
    fullNames: "Margot Palacios Huaman",
    shortName: "Margot Palacios Huaman",
    abbreviatedName: "Margot Palacios Huaman",
    photos: "dni_42134579.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "No Agrupado",
    currentBenchCode: 14,
    partyLogo: "no_agrupado.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 2,
    detailContractsRucNaturalPerson:
      "Tiene 2 contratos por un total de S/ 2519 con la entidad Municipalidad Provincial de Cañete",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "43328757",
    fullNames: "Jorge Carlos Montoya Manrique",
    shortName: "Jorge Carlos Montoya Manrique",
    abbreviatedName: "Jorge Carlos Montoya Manrique",
    photos: "dni_43328757.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Honor y Democracia",
    currentBenchCode: 9,
    partyLogo: "honor_y_democracia.jpg",
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
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 1",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "42834886",
    fullNames: "Ilich Fredy Lopez Ureña",
    shortName: "Ilich Fredy Lopez Ureña",
    abbreviatedName: "Ilich Fredy Lopez Ureña",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 3,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "44275599",
    fullNames: "Cesar Manuel Revilla Villanueva",
    shortName: "Cesar Manuel Revilla Villanueva",
    abbreviatedName: "Cesar Manuel Revilla Villanueva",
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
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 2",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 4,
    detailContractsRucNaturalPerson:
      "Tiene 2 contratos por un total de S/ 6862 con la entidad Municipalidad Distrital de San Juan de Lurigancho; Tiene 2 contratos por un total de S/ 2304 con la entidad Ministerio de Salud; Tiene 0 contrato por un total de S/ 0 con la entidad Municipalidad Provincial de Cañete",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "434972",
    fullNames: "Isaac Mita Alanoca",
    shortName: "Isaac Mita Alanoca",
    abbreviatedName: "Isaac Mita Alanoca",
    photos: "dni_00434972.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Perú Libre",
    currentBenchCode: 12,
    partyLogo: "perulibre.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 2",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 8,
    detailContractsRucNaturalPerson:
      "Tiene 7 contratos por un total de S/ 8184 con la entidad Municipalidad Distrital de San Juan de Lurigancho; Tiene 1 contrato por un total de S/ 8892 con la entidad Ministerio de Salud; Tiene 0 contrato por un total de S/ 0 con la entidad Poder Judicial; Tiene 0 contrato por un total de S/ 1 con la entidad Municipalidad Provincial de Cañete",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "70546213",
    fullNames: "Diana Carolina Gonzales Delgado",
    shortName: "Diana Carolina Gonzales Delgado",
    abbreviatedName: "Diana Carolina Gonzales Delgado",
    photos: "dni_70546213.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Avanza País - Partido de Integración Social",
    currentBenchCode: 4,
    partyLogo: "avanzapais.jpeg",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 3,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "42843414",
    fullNames: "Elvis Hernan Vergara Mendoza",
    shortName: "Elvis Hernan Vergara Mendoza",
    abbreviatedName: "Elvis Hernan Vergara Mendoza",
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
    ],
    criminalRecordNumber: 5,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 2",
      " Casos de corrupción en Procuraduría: 2",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "46130369",
    fullNames: "Elva Edhit Julon Irigoin",
    shortName: "Elva Edhit Julon Irigoin",
    abbreviatedName: "Elva Edhit Julon Irigoin",
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
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 1",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 7,
    detailContractsRucNaturalPerson:
      "Tiene 2 contratos por un total de S/ 4077 con la entidad Hospital Nacional Arzobispo Loayza; Tiene 5 contratos por un total de S/ 24595 con la entidad Ministerio de Salud; Tiene 0 contrato por un total de S/ 0 con la entidad Municipalidad Provincial de Cañete; Tiene 0 contrato por un total de S/ 1 con la entidad Ministerio de Educación",
    quantityCompanyLinks: 5,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "76030152",
    fullNames: "Rosangella Andrea Barbaran Reyes",
    shortName: "Rosangella Andrea Barbaran Reyes",
    abbreviatedName: "Rosangella Andrea Barbaran Reyes",
    photos: "dni_76030152.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record:
      "Ha sido vinculada con el grupo extremista La Resistencia, un colectivo de apoyo a Fuerza Popular caracterizado por actos violintistas. La congresista apareció en fotografías con algunos de sus integrantes.",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 4,
    detailContractsRucNaturalPerson:
      "Tiene 3 contratos por un total de S/ 29815 con la entidad Gobierno Regional de Lima; Tiene 1 contrato por un total de S/ 6189 con la entidad Municipalidad Distrital de San Juan de Lurigancho; Tiene 0 contrato por un total de S/ 1 con la entidad RENIEC",
    quantityCompanyLinks: 2,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "45209282",
    fullNames: "Alejandro Muñante Barrios",
    shortName: "Alejandro Muñante Barrios",
    abbreviatedName: "Alejandro Muñante Barrios",
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
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 2",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "18032382",
    fullNames: "Magaly Rosmery Ruiz Rodriguez",
    shortName: "Magaly Rosmery Ruiz Rodriguez",
    abbreviatedName: "Magaly Rosmery Ruiz Rodriguez",
    photos: "dni_18032382.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Alianza para el Progreso",
    currentBenchCode: 1,
    partyLogo: "alianzaporelprogreso.svg",
    record:
      "Es investigada por la Fiscalía por recorte de sueldo a sus trabajadores, colaboradores eficacez declararon en su contra. Fue sancionada por la Comisión de Ética con amonestación escrita pública y 30 días multa por haber solicitado aportes mensuales a sus trabajadores.",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 7,
    detailContractsRucNaturalPerson:
      "Tiene 7 contratos por un total de S/ 62918 con la entidad Municipalidad Distrital de San Juan de Lurigancho; Tiene 0 contrato por un total de S/ 0 con la entidad Hospital Nacional Arzobispo Loayza",
    quantityCompanyLinks: 1,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "1234692",
    fullNames: "Ciro Ronald Castillo Rojo Salas",
    shortName: "Ciro Ronald Castillo Rojo Salas",
    abbreviatedName: "Ciro Ronald Castillo Rojo Salas",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 8,
    detailContractsRucNaturalPerson:
      "Tiene 7 contratos por un total de S/ 30580 con la entidad Ministerio de Salud; Tiene 1 contrato por un total de S/ 9237 con la entidad Poder Judicial",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "41103058",
    fullNames: "Jorge René Chávez Silvano",
    shortName: "Jorge René Chávez Silvano",
    abbreviatedName: "Jorge René Chávez Silvano",
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
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "428265",
    fullNames: "Luis Ramón Torres Robledo",
    shortName: "Luis Ramón Torres Robledo",
    abbreviatedName: "Luis Ramón Torres Robledo",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 5,
    detailContractsRucNaturalPerson:
      "Tiene 5 contratos por un total de S/ 49593 con la entidad Hospital Nacional Arzobispo Loayza; Tiene 1 contrato por un total de S/ 9103 con la entidad Municipalidad de Lima; Tiene -1 contrato por un total de S/ -1000 con la entidad Ministerio de Salud",
    quantityCompanyLinks: 1,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "27080597",
    fullNames: "Hamlet Echeverria Rodriguez",
    shortName: "Hamlet Echeverria Rodriguez",
    abbreviatedName: "Hamlet Echeverria Rodriguez",
    photos: "dni_27080597.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Juntos por el Perú - Voces Del Pueblo",
    currentBenchCode: 13,
    partyLogo: "juntosperu.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 4,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 3",
      " Casos de corrupción en Procuraduría: 1",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 1,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "48164963",
    fullNames: "Ariana Maybe Orué Medina",
    shortName: "Ariana Maybe Orué Medina",
    abbreviatedName: "Ariana Maybe Orué Medina",
    photos: "dni_48164963.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Podemos Perú",
    currentBenchCode: 7,
    partyLogo: "podemosperu.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "42878423",
    fullNames: "Fabián Noriega Brito",
    shortName: "Fabián Noriega Brito",
    abbreviatedName: "Fabián Noriega Brito",
    photos: "dni_42878423.jpg",
    position: "Gobernador Regional",
    status: "Ejerciendo",
    currentBench: "NA",
    currentBenchCode: 17,
    partyLogo: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "44807108",
    fullNames: "Eduardo Enrique Castillo Rivas",
    shortName: "Eduardo Enrique Castillo Rivas",
    abbreviatedName: "Eduardo Enrique Castillo Rivas",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 1,
    detailContractsRucNaturalPerson:
      "Tiene 1 contrato por un total de S/ 3286 con la entidad Gobierno Regional de Lima",
    quantityCompanyLinks: 1,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "25700579",
    fullNames: "Pasion Neomias Davila Atanacio",
    shortName: "Pasion Neomias Davila Atanacio",
    abbreviatedName: "Pasion Neomias Davila Atanacio",
    photos: "dni_25700579.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Bancada Socialista",
    currentBenchCode: 6,
    partyLogo: "bancada_socialista.jpg",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "46646988",
    fullNames: "Gilia Ninfa Gutierrez Ayala",
    shortName: "Gilia Ninfa Gutierrez Ayala",
    abbreviatedName: "Gilia Ninfa Gutierrez Ayala",
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
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 3",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "40383269",
    fullNames: "Jorge Luis Pérez Flores",
    shortName: "Jorge Luis Pérez Flores",
    abbreviatedName: "Jorge Luis Pérez Flores",
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
    ],
    separationRange: -1,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 2,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "41799959",
    fullNames: "Magally Santisteban Suclupe",
    shortName: "Magally Santisteban Suclupe",
    abbreviatedName: "Magally Santisteban Suclupe",
    photos: "dni_41799959.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "1077388",
    fullNames: "Walter Grundel Jiménez",
    shortName: "Walter Grundel Jiménez",
    abbreviatedName: "Walter Grundel Jiménez",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 8,
    detailContractsRucNaturalPerson:
      "Tiene 8 contratos por un total de S/ 49066 con la entidad Ministerio de Salud; Tiene 0 contrato por un total de S/ 1 con la entidad RENIEC",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "20055251",
    fullNames: "Zósimo Cárdenas Muje",
    shortName: "Zósimo Cárdenas Muje",
    abbreviatedName: "Zósimo Cárdenas Muje",
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
    ],
    separationRange: -4,
    djiStatus: [
      {
        year: 2021,
        status: "Presentó DJI",
      },
      {
        year: 2022,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2023,
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2024,
        status: "Presentó DJI",
      },
    ],
    criminalRecordNumber: 2,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 1",
      " Casos de corrupción en Procuraduría: 1",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 2,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "42846124",
    fullNames: "Noelia Rossvith Herrera Medina",
    shortName: "Noelia Rossvith Herrera Medina",
    abbreviatedName: "Noelia Rossvith Herrera Medina",
    photos: "dni_42846124.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Renovación Popular",
    currentBenchCode: 5,
    partyLogo: "renovacionpop.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 4,
    detailContractsRucNaturalPerson:
      "Tiene 1 contrato por un total de S/ 3154 con la entidad Gobierno Regional de Lima; Tiene 1 contrato por un total de S/ 8617 con la entidad Municipalidad Provincial de Cañete; Tiene 2 contratos por un total de S/ 15026 con la entidad Municipalidad de Lima",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "42377791",
    fullNames: "Abel Augusto Reyes Cam",
    shortName: "Abel Augusto Reyes Cam",
    abbreviatedName: "Abel Augusto Reyes Cam",
    photos: "dni_42377791.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Perú Libre",
    currentBenchCode: 12,
    partyLogo: "perulibre.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 1,
    detailContractsRucNaturalPerson:
      "Tiene 1 contrato por un total de S/ 5279 con la entidad Municipalidad de Lima",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "41258762",
    fullNames: "Nieves Esmeralda Limachi Quispe",
    shortName: "Nieves Esmeralda Limachi Quispe",
    abbreviatedName: "Nieves Esmeralda Limachi Quispe",
    photos: "dni_41258762.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Juntos por el Perú - Voces Del Pueblo",
    currentBenchCode: 13,
    partyLogo: "juntosperu.png",
    record:
      "El Poder Judicial le ordenó pagar S/47.268 a la Beneficiencia de Tacna por irregularidades en el alquiler de un inmueble de dicha entidad en 2015.",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 5,
    detailContractsRucNaturalPerson:
      "Tiene 2 contratos por un total de S/ 19338 con la entidad Hospital Nacional Arzobispo Loayza; Tiene 3 contratos por un total de S/ 9876 con la entidad Municipalidad Provincial de Cañete; Tiene 0 contrato por un total de S/ 1 con la entidad Municipalidad de Lima; Tiene 0 contrato por un total de S/ 1 con la entidad Ministerio de Educación",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "23017616",
    fullNames: "Luis Raul Picon Quedo",
    shortName: "Luis Raul Picon Quedo",
    abbreviatedName: "Luis Raul Picon Quedo",
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
    ],
    criminalRecordNumber: 3,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 2",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 5,
    detailContractsRucNaturalPerson:
      "Tiene 5 contratos por un total de S/ 9794 con la entidad Ministerio de Salud; Tiene 1 contrato por un total de S/ 1156 con la entidad Municipalidad Distrital de San Juan de Lurigancho; Tiene -1 contrato por un total de S/ -999 con la entidad Ministerio de Educación",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "21564196",
    fullNames: "Raul Huaman Coronado",
    shortName: "Raul Huaman Coronado",
    abbreviatedName: "Raul Huaman Coronado",
    photos: "dni_21564196.jpg",
    position: "Congresista",
    status: "Ejerciendo",
    currentBench: "Fuerza Popular",
    currentBenchCode: 2,
    partyLogo: "fuerzapopular.png",
    record: "NA",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "7246887",
    fullNames: "Jose Leon Luna Galvez",
    shortName: "Jose Leon Luna Galvez",
    abbreviatedName: "Jose Leon Luna Galvez",
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
    ],
    criminalRecordNumber: 0,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 0",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 0,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
  {
    dni: "8119443",
    fullNames: "Rosa Gloria Vásquez Cuadrado",
    shortName: "Rosa Gloria Vásquez Cuadrado",
    abbreviatedName: "Rosa Gloria Vásquez Cuadrado",
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
        status: "No ejercía cargo de gobernador",
      },
      {
        year: 2024,
        status: "No ejercía cargo de gobernador",
      },
    ],
    criminalRecordNumber: 1,
    criminalRecordDetails: [
      "Denuncias Constitucionales por Fiscalía: 0",
      " Casos de corrupción en Procuraduría: 0",
      " Sentencias penales o civiles declaradas: 1",
    ],
    quantityContractsRucNaturalPerson: 0,
    detailContractsRucNaturalPerson: "No tiene contratos registrados",
    quantityCompanyLinks: 1,
    detailCompanyLinks: "",
    color: "#817bfa",
  },
];
