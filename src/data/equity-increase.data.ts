import { HeritageForYear, publicOfficialsData } from "./public-officials.data";

export const getTopAssetIncreases = (topNumber: number) =>
  publicOfficialsData
    .map((official) => ({
      dni: official.dni,
      abbreviatedName: official.abbreviatedName,
      totalIncrease: calculateIncrease(official.heritageForYear),
      color: official.color,
    }))
    .sort((a, b) => b.totalIncrease - a.totalIncrease)
    .slice(0, topNumber);

const calculateIncrease = (heritage: HeritageForYear[]) => {
  return (heritage.at(-1)?.amount || 0) - heritage[0].amount;
};

export const generateData = () => {
  return publicOfficialsData.map((official) => ({
    data: official.heritageForYear.map((value) =>
      Number((value.amount / 1000000).toFixed(2))
    ),
    tension: 0.1,
    borderColor: official.color,
    personName: official.shortName,
    personCode: official.dni,
    label: official.shortName,
  }));
};
