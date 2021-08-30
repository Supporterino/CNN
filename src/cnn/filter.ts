import { Layer } from './layers';
import { Node } from './node';

export class Filter {
  private _weights: Array<number>;
  private _numWeights: number;
  private _prevVal: number;

  constructor(n: number) {
    this._numWeights = n;
    this._weights = new Array<number>();
    this._prevVal = 0;
  }

  init(): void {
    for (let index = 0; index < this._numWeights; index++) {
      this._weights.push(Math.random() * 2 - 1);
    }
  }

  apply(input: Array<number>): number {
    if (this._numWeights !== input.length) throw new Error(`Input length doesn't match the filter length`);

    let output = 0;

    input.forEach((item, index) => {
      if (item > 0) output += item * this._weights[index];
    });

    this._prevVal = output;

    return output;
  }

  updateWeights(val: number, prevLayer: Layer): void {
    for (let index = 0; index < this._numWeights; index++) {
      this.updateWeight(index, val, prevLayer.nodes[index]);
    }
  }

  updateWeight(pos: number, val: number, node: Node): void {
    this._weights[pos] = this._weights[pos] + val * node.lastValue;
  }
}
