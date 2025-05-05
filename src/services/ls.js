// node
import { readdir } from "node:fs/promises";

// global state
import { store } from '../store.js';

// helpers
import { logInvalidInputErr, logFolderIsEmpty } from '../helpers/messages.js';

/**
 * Lists the contents of the user's home directory.
 * @param {string[]} args - Command arguments (should be empty).
 */
export const listDirectory = async (args) => {
  if (args.length >= 1) {
    logInvalidInputErr();
    return;
  }

  const entries = await readdir(store.currentDir, { withFileTypes: true });

  const folders = entries
    .filter(e => e.isDirectory())
    .map(e => ({ name: e.name, type: 'directory' }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const files = entries
    .filter(e => e.isFile())
    .map(e => ({ name: e.name, type: 'file' }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const output = [...folders, ...files];

  if (output.length === 0) {
    logFolderIsEmpty();
  } else {
    console.table(output);
  }
};
