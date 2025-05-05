// node
import { rename } from 'node:fs/promises';
import path from 'node:path';

// global state
import { store } from '../store.js';

/**
 * Renames a file in the current working directory.
 * Does not handle spaces.
 * 
 * @param {string[]} args - [oldPath, newName] where:
 *   - oldPath is the absolute or relative path to the file
 *   - newName is the new file name
 */
export const renameFile = async (args) => {  
  const [oldPath, newName] = args;
  const oldFullPath = path.resolve(store.currentDir, oldPath);    
  const newFullPath = path.resolve(path.dirname(oldFullPath), newName);
  await rename(oldFullPath, newFullPath);
}