import { prompt, QuestionCollection } from 'inquirer';
import { ActivasionTypes, ConvolutionLayer, Layer, NormalizingLayer, OperationMode, OutputLayer } from '../cnn';
import { ImageHandler } from '../img';

export class Builder {
  private _pixels: number;
  private _learningRate: number;
  private _layerCount: number;
  private _activasionFunction: ActivasionTypes;
  private _imageHandler: ImageHandler;
  private _operationMode: OperationMode;

  constructor(options: any) {
    this._pixels = options.pixels;
    this._learningRate = options.learning_rate;
    this._layerCount = options.layer_count;
    this._activasionFunction = options.activasion_function;
    this._operationMode = options.operation_mode;
    this._imageHandler = new ImageHandler(this._pixels);
  }

  async run(): Promise<void> {
    const paths = await this.getPaths();
  }

  constructLayers(): Array<Layer> {
    const output = new Array<Layer>();

    output.push(new NormalizingLayer(this._imageHandler.sizeSquared, this._activasionFunction, 0));

    let prevLayer = null;
    for (let index = 0; index < this._layerCount; index++) {
      if (index == 0) {
        const newLayer: ConvolutionLayer = new ConvolutionLayer(this._imageHandler.sizeSquared, this._activasionFunction, index + 1);
        output.push(newLayer);
        prevLayer = newLayer;
      } else {
        const newLayer: ConvolutionLayer = new ConvolutionLayer(prevLayer?.numNodes!, this._activasionFunction, index + 1);
        output.push(newLayer);
        prevLayer = newLayer;
      }
    }

    output.push(new OutputLayer(prevLayer?.numNodes!, this._activasionFunction, this._layerCount + 2));

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
