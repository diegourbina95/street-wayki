export const formatAmount = (num: number) => {
  return new Intl.NumberFormat("en-US").format(num);
};
