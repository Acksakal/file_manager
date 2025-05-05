// node
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { pipeline } from 'node:stream/promises';
import { Writable } from 'node:stream';
import path from 'node:path';

// global state
import { store } from '../store.js';

// helpers
import { logInvalidInputErr } from '../helpers/messages.js';

/**
 * Calculates and prints the SHA-256 hash of the specified file.
 * 
 * @param {string[]} args - [pathToFile], the relative or absolute path to the file.
 */
export const handleHashService = async (args) => {
  if (args.length !== 1) {
    logInvalidInputErr();
    return;
  }

  const filePath = path.resolve(store.currentDir, args[0]);
  const hash = createHash('sha256');

  const writable = new Writable({
    write(chunk, _, callback) {
      hash.update(chunk);
      callback();
    }
  });

    await pipeline(
      createReadStream(filePath),
      writable
    );
    console.log(hash.digest('hex'));
};
