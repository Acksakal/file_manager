// cd.js
import { stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import { store } from '../store.js';
import { logInvalidInputErr, logOperationFailedErr } from '../helpers/messages.js';

/**
 * Changes the current directory to the given target path.
 * @param {string[]} args - Command arguments.
 */
export const changeDirectory = async (...args) => {
  const targetPath = args.join(' ');  
  const resolvedPath = resolve(store.currentDir, targetPath);   

  try {
    const stats = await stat(resolvedPath);
    if (!stats.isDirectory()) {
      logInvalidInputErr();
      return;
    }
    store.currentDir = resolvedPath;
  } catch {
    logOperationFailedErr();
  }
};
