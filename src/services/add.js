// node
import path from 'node:path';
import { writeFile } from 'node:fs/promises';

// global state
import { store } from '../store.js';

// helpers
import { logInvalidInputErr } from '../helpers/messages.js';

/**
 * Creates a new empty file in the current working directory.
 *
 * @param {string[]} args - The name of the file to create.
 */
export const createEmptyFile = async (args) => {
  if (args.length < 1) {
    logInvalidInputErr();
    return;
  }

  const fileName = args.join(' ');
  const fullPath = path.resolve(store.currentDir, fileName);
  await writeFile(fullPath, '', { flag: 'wx' });
}