// node
import path from 'node:path';
import { mkdir } from 'node:fs/promises';

// global state
import { store } from '../store';

// helpers
import { logInvalidInputErr } from '../helpers/messages';
import { ServiceArgs, ServiceCommand } from '../types/Service.type.js';

export const createDirectory: ServiceCommand = async (args) => {
  if (!args.length) {
    logInvalidInputErr();
    return;
  }

  const fullPath = path.resolve(store.currentDir, args[0]);
  await mkdir(fullPath, { recursive: false });
}
