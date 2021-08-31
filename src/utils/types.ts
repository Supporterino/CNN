export class RGB {
  private _r: number;
  public get r(): number {
    return this._r;
  }
  public set r(value: number) {
    this._r = value;
  }
  private _g: number;
  public get g(): number {
    return this._g;
  }
  public set g(value: number) {
    this._g = value;
  }
  private _b: number;
  public get b(): number {
    return this._b;
  }
  public set b(value: number) {
    this._b = value;
  }

  constructor(r_i: number, g_i: number, b_i: number) {
    this._r = r_i;
    this._g = g_i;
    this._b = b_i;
  }
}
