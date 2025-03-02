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
  let totalIncrease = 0;
  for (let i = 1; i < heritage.length; i++) {
    totalIncrease += heritage[i].amount - heritage[i - 1].amount;
  }
  return totalIncrease;
};
