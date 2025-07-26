export interface MacCalculatorOptions {
  currentPrice: number;
  currentQuantity: number;
  newPrice: number;
  additionalQuantity: number;
}

export const calculate = (options: MacCalculatorOptions): number => {
  const { currentPrice, currentQuantity, newPrice, additionalQuantity } =
    options;

  if (additionalQuantity <= 0) {
    throw new Error(
      'Cannot calculate new MAC with zero or negative stock increase',
    );
  }

  const fixedCurrentPrice =
    !currentPrice || currentPrice == 0 ? newPrice : currentPrice;

  const fixedCurrentQuantity = currentQuantity < 0 ? 0 : currentQuantity;

  const newQuantity = fixedCurrentQuantity + additionalQuantity;
  const newValue =
    fixedCurrentQuantity * fixedCurrentPrice + additionalQuantity * newPrice;

  return Math.round(newValue / newQuantity);
};
