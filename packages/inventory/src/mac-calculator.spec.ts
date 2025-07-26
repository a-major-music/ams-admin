import { calculate } from './mac-calculator';

describe('Should calculate MAC correctly', () => {
  it('should throw an error if there is no stock increase', () => {
    expect(() =>
      calculate({
        currentPrice: 100,
        newPrice: 200,
        currentQuantity: 1,
        additionalQuantity: 0,
      }),
    ).toThrowError();
  });

  it('should increase if the price increases', () => {
    expect(
      calculate({
        currentPrice: 100,
        newPrice: 200,
        currentQuantity: 1,
        additionalQuantity: 1,
      }),
    ).toEqual(150);
  });

  it('should stay the same if the price stays the same', () => {
    expect(
      calculate({
        currentPrice: 100,
        newPrice: 100,
        currentQuantity: 1,
        additionalQuantity: 1,
      }),
    ).toEqual(100);
  });

  it('should reduce if the price reduces', () => {
    expect(
      calculate({
        currentPrice: 100,
        newPrice: 50,
        currentQuantity: 1,
        additionalQuantity: 1,
      }),
    ).toEqual(75);
  });

  // Taken from https://www.accountingtools.com/articles/moving-average-inventory-method
  it('should handle external test case #1', () => {
    const r = calculate({
      currentPrice: 500,
      newPrice: 600,
      currentQuantity: 1000,
      additionalQuantity: 250,
    });

    expect(
      calculate({
        currentPrice: r,
        newPrice: 700,
        currentQuantity: 1250,
        additionalQuantity: 750,
      }),
    ).toEqual(588);
  });

  it('should handle external test case #2', () => {
    expect(
      calculate({
        currentPrice: 500,
        newPrice: 600,
        currentQuantity: 750,
        additionalQuantity: 250,
      }),
    ).toEqual(525);

    expect(
      calculate({
        currentPrice: 525,
        newPrice: 700,
        currentQuantity: 800,
        additionalQuantity: 750,
      }),
    ).toEqual(610);
  });

  it('should cope with zero inputs', () => {
    expect(
      calculate({
        currentPrice: 0,
        newPrice: 600,
        currentQuantity: 1,
        additionalQuantity: 1,
      }),
    ).toEqual(600);
  });

  it('should cope with undefined inputs', () => {
    expect(
      calculate({
        currentPrice: undefined,
        newPrice: 600,
        currentQuantity: 1,
        additionalQuantity: 1,
      }),
    ).toEqual(600);
  });

  it('should cope with negative stock, and fail nicely', () => {
    expect(
      calculate({
        currentPrice: 300,
        newPrice: 600,
        currentQuantity: -1,
        additionalQuantity: 1,
      }),
    ).toEqual(600);
  });
});
