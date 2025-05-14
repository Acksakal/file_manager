// node
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';

// global state
import { store } from '../store.js';

// helpers
import { logInvalidInputErr } from '../helpers/messages.js';
import { assertIsDirectory, assertIsFile } from '../helpers/validation.js';

/**
 * Copies a file from one location to a target directory using streams.
 * Does not handle spaces.
 * 
 * @param {string[]} args - [sourcePath, targetDirectory] where:
 *   - sourcePath is the absolute or relative path to the file to be copied
 *   - targetDirectory is the directory where the file should be copied
 */
export const copyFile = async (args) => {
  if (args.length < 2) {
    logInvalidInputErr();
    return;
  }

  const [sourcePath, targetDirectory] = args;
  const sourceFileFullPath = path.resolve(store.currentDir, sourcePath);
  const targetDirFullPath = path.resolve(store.currentDir, targetDirectory);

  await assertIsFile(sourceFileFullPath);
  await assertIsDirectory(targetDirFullPath);

  const fileName = path.basename(sourceFileFullPath);
  const targetFullPath = path.join(targetDirFullPath, fileName);

  await pipeline(
    createReadStream(sourceFileFullPath),
    createWriteStream(targetFullPath)
  );
  return sourceFileFullPath;
};
