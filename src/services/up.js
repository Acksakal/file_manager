// node
import path from 'node:path';

// global state
import { store } from '../store.js';

// helpers
import { logInvalidInputErr } from '../helpers/messages.js';

/**
 * Navigates up one directory level from the current working directory.
 * If already at the root directory, it remains unchanged.
 * 
 * @param {Array} args - An array of arguments passed with the command.
 * @returns {string} The new current directory after moving up.
 */
export const moveUpDirectory = (args) => {
  if (args.length >= 1) {
    logInvalidInputErr();
    return;
  }

  const currentDir = store.currentDir;
  const parentDir = path.dirname(currentDir);
  const rootDir = path.parse(currentDir).root;

  const newDir = currentDir === rootDir ? currentDir : parentDir;
  store.currentDir = newDir;
}
