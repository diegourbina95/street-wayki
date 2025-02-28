import { convertHexaToRgb } from "@/utils/colors";
import { publicOfficialsData } from "./public-officials.data";

export const generateData = () => {
  return publicOfficialsData.map((official) => {
    return {
      data: [
        {
          x: official.heritageForYear[official.heritageForYear.length - 1]
            .amount,
          y: official.heritageForYear[official.heritageForYear.length - 1]
            .amount,
          person: {
            code: official.dni,
            name: official.shortName,
            avatar: `./img/officials/${official.photos}`,
            politicalLogos: [
              `./img/political-parties/${official.partyLogo}`,
              /* "./img/img2.png",
              "./img/img3.png", */
            ],
          },
          disabled: false,
        },
      ],
      backgroundColor: `rgba(${convertHexaToRgb(official.color)}, 0.7)`,
      borderColor: `rgba(${convertHexaToRgb(official.color)}, 1)`,
    };
  });
};

export const politicalPartiesData = () => {
  const uniquePublicOfficials = [
    ...new Map(
      publicOfficialsData.map((item) => [item.currentBenchCode, item])
    ).values(),
  ];

  return uniquePublicOfficials.map((item) => ({
    politicalPartyCode: item.currentBenchCode,
    politicalPartyName: item.currentBench,
    officials: publicOfficialsData
      .filter((official) => official.currentBenchCode === item.currentBenchCode)
      .map((official) => ({ code: official.dni, name: official.shortName })),
  }));
};
