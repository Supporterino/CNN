import { existsSync, PathLike, lstatSync, readdirSync } from 'fs';
import { basename } from 'path';
import { cwd } from 'process';

export const checkFolderExists = (path: PathLike): boolean => {
  return existsSync(path);
};

export const getCurrentBasePath = (): string => {
  return basename(cwd());
};

export const getFileExtension = (path: PathLike): string => {
  return path.toString().split('.').pop()!;
};

export const isDirectory = (path: PathLike): boolean => {
  return lstatSync(path).isDirectory();
};

export const listFiles = (path: PathLike): Array<string> => {
  return readdirSync(path);
};
