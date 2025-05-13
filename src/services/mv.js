// node
import { rm } from 'node:fs/promises';

// command-line function
import { copyFile } from './cp.js';

// helpers
import { logInvalidInputErr } from '../helpers/messages.js';

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
  if (args.length < 2) {
    logInvalidInputErr();
    return;
  }
  
  console.log('here');
  const sourceFileFullPath = await copyFile(args);
  await rm(sourceFileFullPath);
};
