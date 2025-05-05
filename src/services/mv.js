// node
import { rm } from 'node:fs/promises';

// command-line function
import { copyFile } from './cp.js';

/**
 * Moves a file to a new directory using streams.
 * It copies the file to the target directory and deletes the original.
 * Does not handle spaces.
 * 
 * @param {string[]} args - [sourcePath, targetDirectory] where:
 *   - sourcePath is the absolute or relative path to the file to move
 *   - targetDirectory is the directory where the file should be moved
 */
export const moveFile = async (args) => {
  const sourceFullPath = await copyFile(args);
  await rm(sourceFullPath);
};
