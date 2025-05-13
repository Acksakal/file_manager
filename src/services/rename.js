// node
import path from 'node:path';
import { rename } from 'node:fs/promises';

// global state
import { store } from '../store.js';

// helpers
import { logInvalidInputErr } from '../helpers/messages.js';
import { assertIsFile } from '../helpers/validation.js';

/**
 * Renames a file in the current working directory.
 * Does not handle spaces.
 * 
 * @param {string[]} args - [oldPath, newName] where:
 *   - oldPath is the absolute or relative path to the file
 *   - newName is the new file name
 */
export const renameFile = async (args) => {
  if (args.length < 2) {
    logInvalidInputErr();
    return;
  }

  const [oldPath, newName] = args;
  const oldFullPath = path.resolve(store.currentDir, oldPath);
  await assertIsFile(oldFullPath);

  const newFullPath = path.resolve(path.dirname(oldFullPath), newName);
  await rename(oldFullPath, newFullPath);
}