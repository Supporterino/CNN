import { prompt, QuestionCollection } from 'inquirer';
import { ActivasionTypes, ConvolutionLayer, Layer, NormalizingLayer, OutputLayer } from '../cnn';
import { ImageHandler } from '../img';

export class Builder {
  private _pixels: number;
  private _learning_rate: number;
  private _layer_count: number;
  private _activasion_function: ActivasionTypes;
  private _imageHandler: ImageHandler;

  constructor(options: any) {
    this._pixels = options.pixels;
    this._learning_rate = options.learning_rate;
    this._layer_count = options.layer_count;
    this._activasion_function = options.activasion_function;
    this._imageHandler = new ImageHandler(this._pixels);
  }

  async run(): Promise<void> {
    const paths = await this.getPaths();
  }

  constructLayers(): Array<Layer> {
    const output = new Array<Layer>();

    output.push(new NormalizingLayer(this._imageHandler.sizeSquared, this._activasion_function, 0));

    let prevLayer = null;
    for (let index = 0; index < this._layer_count; index++) {
      if (index == 0) {
        const newLayer: ConvolutionLayer = new ConvolutionLayer(this._imageHandler.sizeSquared, this._activasion_function, index + 1);
        output.push(newLayer);
        prevLayer = newLayer;
      } else {
        const newLayer: ConvolutionLayer = new ConvolutionLayer(prevLayer?.numNodes!, this._activasion_function, index + 1);
        output.push(newLayer);
        prevLayer = newLayer;
      }
    }

    output.push(new OutputLayer(prevLayer?.numNodes!, this._activasion_function, this._layer_count + 2));

    return output;
  }

  getPaths(): Promise<any> {
    const question: QuestionCollection = [
      {
        name: 'data_dir',
        type: 'input',
        message: 'what is your path to learning data:'
      },
      {
        name: 'test_dir',
        type: 'input',
        message: 'what is your path to testing data:'
      }
    ];
    return prompt(question);
  }
}
