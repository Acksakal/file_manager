// command-line functions
import { serviceFactory } from './services/service-factory.js';

// helpers
import { logInvalidInputErr, logOperationFailedErr } from './helpers/messages.js';

/**
 * Handles a sanitized command input.
 * @param {string} inputString - The trimmed input string provided by the user.
 */
export async function handleCommand(inputString) {  
  const inputTokens = inputString.split(/\s+/);
  const [command, ...args] = inputTokens;
  const fn = serviceFactory[command.toLowerCase()];

  if (typeof fn !== 'function') {
    logInvalidInputErr();
    return;
  }

  try {
    await fn(args);
  } catch (cause) {
    logOperationFailedErr(cause.message);
  }
}
