import { Node } from '..';
import { ActivasionTypes } from '..';
import { sigmoid } from '../../utils';

export abstract class Layer {
  protected _numNodes: number;
  protected _activasionFunction: ActivasionTypes;
  protected _id: number;
  protected _nodes: Array<Node>;

  constructor(n: number, a: ActivasionTypes, i: number) {
    this._numNodes = n;
    this._activasionFunction = a;
    this._id = i;
    this._nodes = new Array<Node>();
  }

  activationFunction(val: number): number {
    if (this._activasionFunction === ActivasionTypes.RELU) {
      if (val < 0) return 0;
      else return val;
    } else if (this._activasionFunction === ActivasionTypes.SIGMOID) {
      return sigmoid(val);
    } else {
      throw new Error('No activasion function defined');
    }
  }

  derivative(val: number): number {
    // MAYBE BUGGED
    return sigmoid(val) * (1 - sigmoid(val));
  }

  prevValSum(): number {
    let output = 0;

    this._nodes.forEach((node) => {
      output += node.lastValue;
    });

    return output;
  }

  protected genNodes(): void {
    for (let index = 0; index < this._numNodes; index++) {
      this._nodes.push(new Node(index, this));
    }
  }

  public get nodes(): Array<Node> {
    return this._nodes;
  }

  public get numNodes(): number {
    return this._numNodes;
  }
  public set numNodes(value: number) {
    this._numNodes = value;
  }
}
