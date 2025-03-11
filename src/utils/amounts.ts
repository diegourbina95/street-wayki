export const formatAmount = (num: number) => {
  return new Intl.NumberFormat("en-US").format(num);
};

export const formatNumber = (input: string | number, decimal?: number) => {
  if (input === null || input === undefined || isNaN(Number(input))) {
    return "NA"; // Manejo de errores
  }

  // Convertir a número y formatear
  return Number(input).toLocaleString("de-DE", {
    minimumFractionDigits: decimal !== undefined ? decimal : 2,
    maximumFractionDigits: decimal !== undefined ? decimal : 2,
  });
};
