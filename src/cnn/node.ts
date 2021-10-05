import { ConvolutionLayer, Filter, Layer, OutputLayer } from '.';

export class Node {
  private _filter: Filter;
  private _layer: Layer;
  private _bias: number;

  private _lastValue!: number;
  private _error: number;

  constructor(numInputs: number, layer: Layer) {
    this._filter = new Filter(numInputs);
    this._bias = Math.random();
    this._layer = layer;
    this._error = 0;
  }

  calculateValue(input: Array<number>): number {
    const output = this._filter.apply(input) + this._bias;

    this._lastValue = this._layer.activationFunction(output);

    return this._lastValue;
  }

  calculateError(val: number): void {
    if (this._layer instanceof OutputLayer) {
      this._error = val - this._lastValue;
      this._error *= this._layer.derivative(this._lastValue);
    } else if (this._layer instanceof ConvolutionLayer) {
      this._error += val * this._layer.derivative(this._lastValue);
    }
  }

  resetError(): void {
    this._error = 0;
  }

  public get error(): number {
    return this._error;
  }

  public get lastValue(): number {
    return this._lastValue;
  }
  public set lastValue(value: number) {
    this._lastValue = value;
  }
}
