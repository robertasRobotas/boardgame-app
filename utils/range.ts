export const generateRange = ([start, end]: [number, number]): number[] =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);
