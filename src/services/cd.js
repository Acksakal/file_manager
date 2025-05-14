// node
import { stat } from 'node:fs/promises';
import { resolve } from 'node:path';

// global state
import { store } from '../store.js';

// helpers
import { logInvalidInputErr } from '../helpers/messages.js';

/**
 * Changes the current directory to the given target path.
 * @param {string[]} args - Command arguments.
 */
export const changeDirectory = async (args) => {
  const targetPath = args.join(' ');
  const resolvedPath = resolve(store.currentDir, targetPath);

  const stats = await stat(resolvedPath);
  if (!stats.isDirectory()) {
    logInvalidInputErr();
    return;
  }
  
  store.currentDir = resolvedPath;
};
