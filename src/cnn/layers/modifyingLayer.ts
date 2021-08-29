import { ActivasionTypes, Layer } from '..';
import { Image } from '../../img';

export abstract class ModifiyingLayer extends Layer {
  constructor(n: number, a: ActivasionTypes, i: number) {
    super(n, a, i);
  }

  public abstract modify(data: Image): Image;
}
