import { Pixel } from '../img';
import { RGB } from './types';

export const sigmoid = (val: number): number => {
  return 1 / (1 + Math.exp(-val));
};

export const hexToRgb = (hex: string): Pixel => {
  var ex = new RegExp(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  var result = ex.exec(hex)!;
  return Pixel.fromRGB(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16));
};
