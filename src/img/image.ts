import { Pixel } from '.';

export class Image {
  private _pixels: Array<Array<Pixel>>;
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
    this._pixels = new Array<Array<Pixel>>();
  }

  getOneDimensional(): Array<Pixel> {
    const output = new Array<Pixel>();

    this._pixels.forEach((column: Array<Pixel>) => {
      column.forEach((item: Pixel) => {
        output.push(item);
      });
    });

    return output;
  }

  getValues(): Array<number> {
    const output = new Array<number>();

    this._pixels.forEach((column: Array<Pixel>) => {
      column.forEach((item: Pixel) => {
        output.push(item.greyScale);
      });
    });

    return output;
  }

  normalize(): void {
    let min = 999;
    let max = -999;

    this._pixels.forEach((column: Array<Pixel>) => {
      column.forEach((item: Pixel) => {
        const current = item.greyScale;
        if (current < min) min = current;
        if (current > max) max = current;
      });
    });

    this._pixels.forEach((column: Array<Pixel>) => {
      column.forEach((item: Pixel) => {
        if (min != 0) item.greyScale = item.greyScale - min;
        if (max != 0) item.greyScale = item.greyScale / max;
      });
    });
  }

  setPixel(width: number, height: number, pixel: Pixel): void {
    this._pixels[width][height] = pixel;
  }

  public get pixels(): Array<Array<Pixel>> {
    return this._pixels;
  }

  public get width(): number {
    return this._width;
  }

  public set width(value: number) {
    this._width = value;
  }

  public get height(): number {
    return this._height;
  }

  public set height(value: number) {
    this._height = value;
  }
}
