import { ActivasionTypes, InterpretingLayer } from '..';
import { Image } from '../../img';

export class OutputLayer extends InterpretingLayer {
  constructor(n: number, a: ActivasionTypes, i: number) {
    super(n, a, i);
  }

  interpret(data: Image): Map<number, number> {
    const output = new Map<number, number>();

    for (let index = 0; index < this._numNodes; index++) {
      output.set(index, this._nodes[index].calculateValue(data.getValues()));
    }

    return output;
  }
}
