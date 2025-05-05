// node
import path from 'node:path';
import { pipeline } from 'node:stream/promises';
import { createBrotliCompress } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';

// global state
import { store } from '../store.js';

// helpers
import { logInvalidInputErr } from '../helpers/messages.js';

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

  const sourceFullPath = path.resolve(store.currentDir, sourcePath);
  const destinationFullPath = path.resolve(store.currentDir, destinationPath);

  await pipeline(
    createReadStream(sourceFullPath),
    createBrotliCompress(),
    createWriteStream(destinationFullPath)
  );
};
