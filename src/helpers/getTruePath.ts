import { readdir } from 'node:fs/promises';
import { basename, dirname, sep, resolve, parse } from 'node:path';

interface PathParts {
  root: string;
}

export const getTruePath = async (inputPath: string): Promise<string> => {
  const { root }: PathParts = parse(inputPath);
  let current: string = resolve(inputPath);
  let parts: string[] = [];

  while (current !== root) {
    const dir: string = dirname(current);
    const name: string = basename(current);
    try {
      const entries: string[] = await readdir(dir);
      const match: string | undefined = entries.find(entry => entry.toLowerCase() === name.toLowerCase());
      parts.unshift(match || name);
    } catch {
      parts.unshift(name);
    }
    current = dir;
  }

  return root + parts.join(sep);
};
