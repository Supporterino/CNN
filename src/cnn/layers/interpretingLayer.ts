import { Layer } from '.';
import { ActivasionTypes } from '..';
import { Image } from '../../img';

export abstract class InterpretingLayer extends Layer {
  constructor(n: number, a: ActivasionTypes, i: number) {
    super(n, a, i);
  }

  abstract interpret(data: Image): Map<number, number>;
}
