import { ActivasionTypes, Layer, NormalizingLayer } from '../cnn';

export class Builder {
  private _pixels: number;
  private _learning_rate: number;
  private _layer_count: number;
  private _activasion_function: ActivasionTypes;

  constructor(options: any) {
    this._pixels = options.pixels;
    this._learning_rate = options.learning_rate;
    this._layer_count = options.layer_count;
    this._activasion_function = options.activasion_function;
  }

  constructLayers(): Array<Layer> {
    const output = new Array<Layer>();

    output.push(new NormalizingLayer());

    return output;
  }
}
