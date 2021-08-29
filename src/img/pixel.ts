export class Pixel {
  private _greyScale: number;

  constructor(greyScale: number) {
    this._greyScale = greyScale;
  }

  public get greyScale(): number {
    return this._greyScale;
  }
  public set greyScale(value: number) {
    this._greyScale = value;
  }

  static fromRGB(red: number, green: number, blue: number) {
    return new Pixel(0.299 * red + 0.587 * green + 0.114 * blue);
  }
}
