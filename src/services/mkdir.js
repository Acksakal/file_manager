// node
import path from 'node:path';
import { mkdir } from 'node:fs/promises';

// global state
import { store } from '../store.js';

// helpers
import { logInvalidInputErr } from '../helpers/messages.js';

/**
 * Creates a new directory in the current working directory.
 *
 * @param {string[]} args - The name of the directory to create.
 */
export const createDirectory = async (args) => {
  if (args.length < 1) {
    logInvalidInputErr();
    return;
  }

  const dirName = args.join(' ');
  const fullPath = path.resolve(store.currentDir, dirName);
  await mkdir(fullPath, { recursive: false });
}
