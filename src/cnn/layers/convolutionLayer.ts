import { ActivasionTypes, ModifiyingLayer } from '..';
import { Image, Pixel } from '../../img';

export class ConvolutionLayer extends ModifiyingLayer {
  constructor(n: number, a: ActivasionTypes, i: number) {
    super(n, a, i);
  }

  modify(data: Image): Image {
    const newData = new Image(this._numNodes, 1);
    const inputs = data.getValues();

    for (let i = 0; i < this._numNodes; i++) {
      newData.setPixel(i, 0, new Pixel(this._nodes[i].calculateValue(inputs)));
    }

    return newData;
  }
}
