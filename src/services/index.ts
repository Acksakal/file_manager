import { copyFile } from './cp';
import { moveFile } from './mv.ts';
import { deleteFile } from './delete';
import { renameFile } from './rename';
import { compressFile } from './compress';
import { listDirectory } from './ls';
import { decompressFile } from './decompress';
import { createDirectory } from './mkdir';
import { moveUpDirectory } from './up';
import { changeDirectory } from './cd';
import { handleOsService } from './os';
import { createEmptyFile } from './add';
import { printFileContent } from './cat';
import { handleHashService } from './hash';
import { ServicesList } from '../types/Service.type';

/**
 * A factory object that maps file system command names to their corresponding handler functions.
 */
export const services: ServicesList = {
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
