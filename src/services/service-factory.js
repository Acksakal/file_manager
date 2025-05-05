// @ts-check
import { copyFile } from './cp.js';
import { moveFile } from './mv.js';
import { deleteFile } from './delete.js';
import { renameFile } from './rename.js';
import { compressFile } from './compress.js';
import { listDirectory } from './ls.js';
import { decompressFile } from './decompress.js';
import { createDirectory } from './mkdir.js';
import { moveUpDirectory } from './up.js';
import { changeDirectory } from './cd.js';
import { handleOsService } from './os.js';
import { createEmptyFile } from './add.js';
import { printFileContent } from './cat.js';
import { handleHashService } from './hash.js';

/**
 * A factory object that maps file system command names to their corresponding handler functions.
 */
export const serviceFactory = {
  mv: moveFile,
  cp: copyFile,
  rn: renameFile,
  rm: deleteFile,
  ls: listDirectory,
  up: moveUpDirectory,
  cd: changeDirectory,
  os: handleOsService,
  add: createEmptyFile,
  cat: printFileContent,
  hash: handleHashService,
  mkdir: createDirectory,
  compress: compressFile,
  decompress: decompressFile,
};
