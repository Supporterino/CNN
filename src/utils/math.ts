import { Pixel } from '../img';

export const sigmoid = (val: number): number => {
  return 1 / (1 + Math.exp(-val));
};

export const hexToRgb = (hex: string): Pixel => {
  const ex = new RegExp(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  const result = ex.exec(hex)!;
  return Pixel.fromRGB(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16));
};
