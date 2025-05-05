// @ts-check
import { goUp } from './up.js';
import { changeDirectory } from './cd.js'
import { listDirectory } from './ls.js';
import { printFileContent } from './cat.js';
import { createEmptyFile } from './add.js';
import { createDirectory } from './mkdir.js';
import { renameFile } from './rename.js';
import { copyFile } from './cp.js';
import { moveFile } from './mv.js';
import { deleteFile } from './delete.js';
import { handleOsService } from './os.js';
import { handleHashService } from './hash.js';
import { compressFile } from './compress.js';
import { decompressFile } from './decompress.js';

/**
 * A factory object that maps file system command names to their corresponding handler functions.
 */
export const serviceFactory = {
  up: goUp,
  cd: changeDirectory,
  ls: listDirectory,
  cat: printFileContent,
  add: createEmptyFile,
  mkdir: createDirectory,
  rn: renameFile,
  cp: copyFile,
  mv: moveFile,
  rm: deleteFile,
  os: handleOsService,
  hash: handleHashService,
  compress: compressFile,
  decompress: decompressFile,
};
