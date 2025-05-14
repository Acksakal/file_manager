// command-line functions
import { services } from './services';

// helpers
import { logInvalidInputErr, logOperationFailedErr } from './helpers/messages';

/**
 * Handles a sanitized command input.
 */
export async function handleCommand(inputString: string) {  
  const inputTokens = inputString.split(/\s+/);
  const [command, ...args] = inputTokens;

  const fn = services[command.toLowerCase()];

  if (typeof fn !== 'function') {
    logInvalidInputErr();
    return;
  }

  try {
    await fn(args);
  } catch (error) {
    // @ts-ignore
    logOperationFailedErr(cause.message);
  }
}
