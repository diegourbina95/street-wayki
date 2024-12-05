import { darkenColor, lightenColor } from "../utils/colors";

export const labels = [
  "G. Suarez",
  "E. Vargas",
  "H. Perez",
  "S. Paredes",
  "L. Torres",
];

export const data = [2.53, 1.83, 1.45, 1.25, 0.98];

export const backgroundColor = [
  lightenColor("#CF1C90", 0.1),
  lightenColor("#FDBC18", 0.1),
  lightenColor("#FEE500", 0.1),
  lightenColor("#CF1C90", 0.1),
  lightenColor("#61F908", 0.1),
];

export const borderColor = [
  darkenColor("#CF1C90"),
  darkenColor("#FDBC18"),
  darkenColor("#FEE500"),
  darkenColor("#CF1C90"),
  darkenColor("#61F908"),
];

export const labelsLine = [2019, 2020, 2021, 2022, 2023];
export const datasetsLine = [
  {
    data: [65, 59, 80, 81, 56],
    tension: 0.1,
    borderColor: "#61F908",
    label: "Sofía Sánchez",
  },
  {
    data: [50, 49, 71, 79, 86],
    tension: 0.1,
    borderColor: "#CF1C90",
    label: "Carlos Villanueva",
  },
];
