// node
import { writeFile } from 'node:fs/promises';
import path from 'node:path';

// global state
import { store } from '../store.js';

/**
 * Creates a new empty file in the current working directory.
 *
 * @param {string[]} args - The name of the file to create.
 */
export const createEmptyFile = async (args) => {  
  const fileName = args.join(' ');
  const fullPath = path.resolve(store.currentDir, fileName);
  await writeFile(fullPath, '', { flag: 'wx' }); 
}