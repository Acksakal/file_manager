// node
import { stat } from 'node:fs/promises';

// helpers
import { ERROR_CAUSE_NOT_A_DIR, ERROR_CAUSE_NOT_A_FILE } from '../helpers/constants.js';
import { getColorizedMsg } from './utils.js';

export async function assertIsFile(path) {
  const stats = await stat(path);
  if (!stats.isFile()) {
    throw new Error(getColorizedMsg({ msg: path + ' ' + ERROR_CAUSE_NOT_A_FILE, type: 'error' }));
  }
}

export async function assertIsDirectory(path) {
  const stats = await stat(path);
  if (!stats.isDirectory()) {
    throw new Error(getColorizedMsg({ msg: path + ' ' + ERROR_CAUSE_NOT_A_DIR, type: 'error' }));
  }
}
