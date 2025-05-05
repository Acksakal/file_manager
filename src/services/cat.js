// node
import path from 'node:path';
import { open } from 'node:fs/promises';

// global state
import { store } from '../store.js';

// helpers
import { getColorizedMsg } from '../helpers/utils.js';
import { logFileIsEmpty } from '../helpers/messages.js';

/**
 * Prints the contents of a file to the console, like the `cat` command.
 *
 * @param {string[]} args - File path as an array of string parts (e.g., ['desktop/test.txt']).
 */
export const printFileContent = async (args) => {
  const relativePath = args.join(' ');
  const fullPath = path.resolve(store.currentDir, relativePath);

  const file = await open(fullPath);
  let hasContent = false;
  
  for await (const line of file.readLines({ encoding: 'utf-8' })) {
    hasContent = true;
    console.log(getColorizedMsg({ msg: line }));
  }

  if (!hasContent) {
    logFileIsEmpty();
  }

  file.close();
}
