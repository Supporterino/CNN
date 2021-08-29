export class Filter {
  private _weights: Array<number>;
  private _numWeights: number;
  private _prevVal: number;

  constructor(n: number) {
    this._numWeights = n;
    this._weights = new Array<number>();
  }

  init(): void {
    for (let index = 0; index < this._numWeights; index++) {
      this._weights.push(Math.random() * 2 - 1);
    }
  }
}
