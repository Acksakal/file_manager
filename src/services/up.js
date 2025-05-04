// @ts-check
import * as path from 'node:path';
import { store } from '../store.js';

export function goUp() {
  const currentDir = store.currentDir;
  const parentDir = path.dirname(currentDir);
  const rootDir = path.parse(currentDir).root;

  const newDir = currentDir === rootDir ? currentDir : parentDir;
  store.currentDir = newDir; 

  return newDir;
}
