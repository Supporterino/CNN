import { Layer, OperationMode } from '.';
import { ImageHandler } from '../img';

export class CNN {
  private _name: string;
  private _mode: OperationMode;
  private _layers: Array<Layer>;
  private _imageHandler: ImageHandler;

  constructor(name: string, mode: OperationMode, layers: Array<Layer>, handler: ImageHandler) {
    this._name = name;
    this._mode = mode;
    this._layers = layers;
    this._imageHandler = handler;
  }
}
