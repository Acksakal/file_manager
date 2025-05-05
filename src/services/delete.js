// node
import { rm } from 'node:fs/promises';
import path from 'node:path';

// global state
import { store } from '../store.js';

// helpers
import { logInvalidInputErr, logOperationFailedErr } from '../helpers/messages.js';

/**
 * Deletes a file at the specified path.
 * Does not handle spaces.
 * 
 * @param {string[]} args - [filePath] where:
 *   - filePath is the absolute or relative path to the file to delete
 */
export const deleteFile = async (args) => {
  if (args.length < 1) {
    logInvalidInputErr();
    return;
  }

  const [filePath] = args;
  const fullFilePath = path.resolve(store.currentDir, filePath);
  await rm(fullFilePath);
};
