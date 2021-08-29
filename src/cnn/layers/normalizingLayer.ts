import { ActivasionTypes, ModifiyingLayer } from '..';
import { Image } from '../../img';

export class NormalizingLayer extends ModifiyingLayer {
  constructor(n: number, a: ActivasionTypes, i: number) {
    super(n, a, i);

    this.genNodes();
  }

  activationFunction(val: number): number {
    return val;
  }

  modify(data: Image): Image {}
}
