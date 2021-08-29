import { ActivasionTypes, ModifiyingLayer } from '..';
import { Image, Pixel } from '../../img';

export class NormalizingLayer extends ModifiyingLayer {
  constructor(n: number, a: ActivasionTypes, i: number) {
    super(n, a, i);

    this.genNodes();
  }

  activationFunction(val: number): number {
    return val;
  }

  modify(data: Image): Image {
    const width = data.width;
    const height = data.height;
    let selNode = 0;

    const output = new Image(width, height);

    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        const val = data.getPixel(i, j).greyScale / 255;

        output.setPixel(i, j, new Pixel(val));

        this._nodes[selNode];
        selNode++;
      }
    }

    return output;
  }
}
