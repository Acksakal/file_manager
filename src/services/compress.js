// node
import path from 'node:path';
import { pipeline } from 'node:stream/promises';
import { createBrotliCompress } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';

// global state
import { store } from '../store.js';

// helpers
import { logInvalidInputErr } from '../helpers/messages.js';
import { assertIsDirectory, assertIsFile } from '../helpers/validation.js';

/**
 * Compresses a file using Brotli algorithm and saves it to the destination path.
 *
 * @param {string[]} args - [sourcePath, destinationPath]
 */
export const compressFile = async (args) => {
  if (args.length !== 2) {
    logInvalidInputErr();
    return;
  }

  const [sourcePath, destinationPath] = args;
  const sourceFileFullPath = path.resolve(store.currentDir, sourcePath);
  let targetDirFullPath = path.resolve(store.currentDir, destinationPath);

  await assertIsFile(sourceFileFullPath);
  await assertIsDirectory(targetDirFullPath);

  const fileName = path.basename(sourceFileFullPath);
  targetDirFullPath = path.join(targetDirFullPath, fileName + '.br');

  await pipeline(
    createReadStream(sourceFileFullPath),
    createBrotliCompress(),
    createWriteStream(targetDirFullPath)
  );
};
