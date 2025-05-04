import { readdir } from 'node:fs/promises';
import { basename, dirname, sep, resolve, parse } from 'node:path';

/**
 * Recursively resolves the actual casing of a given path by comparing
 * the names in the parent directory.
 * @param {string} inputPath - The input path to fix.
 * @returns {Promise<string>} - The path with proper casing from the filesystem.
 */
export const getTruePath = async (inputPath) => {
  const { root } = parse(inputPath);
  let current = resolve(inputPath);
  let parts = [];

  while (current !== root) {
    const dir = dirname(current);
    const name = basename(current);
    try {
      const entries = await readdir(dir);
      const match = entries.find(entry => entry.toLowerCase() === name.toLowerCase());
      parts.unshift(match || name);
    } catch {
      parts.unshift(name);
    }
    current = dir;
  }

  return root + parts.join(sep);
};
