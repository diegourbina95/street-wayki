import { darkenColor, lightenColor } from "../utils/colors";

export const labels = [
  "G. Suarez",
  "E. Vargas",
  "H. Perez",
  /*   "S. Paredes",
  "L. Torres", */
];

export const data = [2.53, 1.83, 1.45 /* , 1.25, 0.98 */];

export const backgroundColor = [
  lightenColor("#CF1C90", 0.1),
  lightenColor("#FDBC18", 0.1),
  lightenColor("#FEE500", 0.1),
  /*   lightenColor("#CF1C90", 0.1),
  lightenColor("#61F908", 0.1), */
];

export const borderColor = [
  darkenColor("#CF1C90"),
  darkenColor("#FDBC18"),
  darkenColor("#FEE500"),
  /*   darkenColor("#CF1C90"),
  darkenColor("#61F908"), */
];

export const labelsLine = [2021, 2022, 2023, 2024];
export const datasetsLine = [
  {
    data: [65, 59, 80, 81, 96],
    tension: 0.1,
    borderColor: "#61F908",
    personName: "Sofía Sánchez",
    personCode: 1,
    label: "Sofía Sánchez",
  },
  {
    data: [50, 49, 71, 79, 186],
    tension: 0.1,
    borderColor: "#CF1C90",
    personName: "Carlos Villanueva",
    personCode: 2,
    label: "Carlos Villanueva",
  },
  /* {
    data: [40, 59, 81, 150, 206],
    tension: 0.1,
    borderColor: "#00E4C9",
    personName: "Daniela Flores",
    personCode: 3,
    label: "Daniela Flores",
  },
  {
    data: [50, 49, 80, 99, 120],
    tension: 0.1,
    borderColor: "#FF8947",
    personName: "Pedro Álvarez",
    personCode: 4,
    label: "Pedro Álvarez",
  }, */
];
