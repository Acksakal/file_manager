// @ts-check
import { goUp } from './up.js';
import { changeDirectory } from './cd.js'
import { listDirectory } from './ls.js';

export const serviceFactory = {
  up: goUp,
  cd: changeDirectory,
  ls: listDirectory
};
