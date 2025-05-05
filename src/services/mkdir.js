// node
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

// global state
import { store } from '../store.js';

/**
 * Creates a new directory in the current working directory.
 *
 * @param {string[]} args - The name of the directory to create.
 */
export const createDirectory = async (args) => {
  const dirName = args.join(' ');
  const fullPath = path.resolve(store.currentDir, dirName);
  await mkdir(fullPath, { recursive: false });
}
