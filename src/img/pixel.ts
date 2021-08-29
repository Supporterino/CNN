export class Pixel {
  private __greyScale: number;

  constructor(greyScale: number) {
    this.__greyScale = greyScale;
  }

  public get _greyScale(): number {
    return this.__greyScale;
  }
  public set _greyScale(value: number) {
    this.__greyScale = value;
  }

  static fromRGB(red: number, green: number, blue: number) {
    return new Pixel(0.299 * red + 0.587 * green + 0.114 * blue);
  }
}
