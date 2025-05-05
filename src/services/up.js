// node
import * as path from 'node:path';

// global state
import { store } from '../store.js';

/**
 * Navigates up one directory level from the current working directory.
 * If already at the root directory, it remains unchanged.
 *
 * @returns {string} The new current directory after moving up.
 */
export function goUp() {
  const currentDir = store.currentDir;
  const parentDir = path.dirname(currentDir);
  const rootDir = path.parse(currentDir).root;

  const newDir = currentDir === rootDir ? currentDir : parentDir;
  store.currentDir = newDir; 

  return newDir;
}
