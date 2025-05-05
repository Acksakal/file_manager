// command-line functions
import { serviceFactory } from './services/service-factory.js';

// helpers
import { logInvalidInputErr, logOperationFailedErr } from './helpers/messages.js';

/**
 * Handles a sanitized command input.
 * @param {string[]} inputTokens - An array where the first item is the command and the rest are arguments.
 */
export async function handleCommand(inputTokens) {
  const [command, ...args] = inputTokens;
  const fn = serviceFactory[command];

  if (typeof fn !== 'function') {
    logInvalidInputErr();
    return;
  }

  try {
    await fn(args);
  } catch {
    logOperationFailedErr();
  }
}
