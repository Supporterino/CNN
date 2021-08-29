import { existsSync, PathLike } from 'fs';
import { basename } from 'path';
import { cwd } from 'process';

export const checkFolderExists = (path: PathLike): boolean => {
  return existsSync(path);
};

export const getCurrentBasePath = (): string => {
  return basename(cwd());
};
