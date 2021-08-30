import { ActivasionTypes, InterpretingLayer } from '..';
import { Image } from '../../img';

export class OutputLayer extends InterpretingLayer {
  constructor(n: number, a: ActivasionTypes, i: number) {
    super(n, a, i);
  }

  interpret(data: Image): Map<number, number> {
    return new Map<number, number>();
  }
}
