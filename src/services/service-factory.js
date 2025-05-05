// @ts-check
import { goUp } from './up.js';
import { changeDirectory } from './cd.js'
import { listDirectory } from './ls.js';

/**
 * A factory object that maps file system command names to their corresponding handler functions.
 */
export const serviceFactory = {
  up: goUp,
  cd: changeDirectory,
  ls: listDirectory
};
