export const toCents = (value: string | number) => {
  value = typeof value === 'string' ? Number(value) : value;

  return value * 100;
};

export const toNormalCurrency = (value: number) => value / 100;
