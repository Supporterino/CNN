import { getFileExtension, hexToRgb, isDirectory, listFiles } from '../utils';
import { Image } from './image';
import { join } from 'path';
import { readFileSync } from 'fs';
import { read } from 'jimp/*';
export class ImageHandler {
  private _size: number;

  constructor(s: number) {
    this._size = s;
  }

  handleFolder(path: string): Array<Image> | undefined {
    if (isDirectory(path)) return undefined;

    const fileNames = listFiles(path);

    const output = new Array<Image>();

    fileNames.forEach(async (file) => {
      if (getFileExtension(file) === 'png') {
        output.push(await handle(join(path.toString(), file)));
      }
    });

    return output;
  }

  async handle(path: string): Image {
    read(path)
      .then((img) => {
        img = img.resize(this._size, this._size);
        const output = new Image(img.getWidth(), img.getHeight());

        for (let i = 0; i < img.getHeight(); i++) {
          for (let j = 0; j < img.getWidth(); j++) {
            const pixel = hexToRgb(img.getPixelColor(j, i).toString());

            output.setPixel(j, i, pixel);
          }
        }

        return output;
      })
      .catch((err) => {
        throw new Error(`Image loading failed. ${err}`);
      });
  }

  public get size(): number {
    return this._size;
  }

  public get sizeSquared(): number {
    return this._size * this._size;
  }
}
