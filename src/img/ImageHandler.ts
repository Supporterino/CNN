import { PathLike } from 'fs';
import { getFileExtension, isDirectory, listFiles } from '../utils';
import { Image } from './image';

export class ImageHandler {
  private _size: number;

  constructor(s: number) {
    this._size = s;
  }

  handleFolder(path: PathLike): Array<Image> | undefined {
    if (isDirectory(path)) return undefined;

    const fileNames = listFiles(path);

    const output = new Array<Image>();

    fileNames.forEach((file) => {
      if (getFileExtension(file) === 'png') {
      }
    });

    return output;
  }

  public get size(): number {
    return this._size;
  }

  public get sizeSquared(): number {
    return this._size * this._size;
  }
}
