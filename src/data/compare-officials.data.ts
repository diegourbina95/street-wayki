import {
  publicOfficialsData,
  PublicOfficialsInterface,
} from "./public-officials.data";

export const findOfficial = (
  dni: string
): PublicOfficialsInterface | undefined =>
  publicOfficialsData.find((official) => official.dni === dni);
