import os from 'node:os';
import {
  OS_ARG_EOL,
  OS_ARG_CPUS,
  OS_ARG_HOMEDIR,
  OS_ARG_USERNAME,
  OS_ARG_ARCHITECTURE,
} from '../helpers/constants.js';

import { logInvalidInputErr } from '../helpers/messages.js';

/**
 * Handles OS-related command-line operations.
 * Supports the following options:
 *   --EOL          : Prints the system-specific End-Of-Line marker.
 *   --cpus         : Displays total number of CPUs and details (model, speed) for each.
 *   --username     : Prints the current system username.
 *   --architecture : Prints the CPU architecture of the system.
 *   --homedir      : Prints the current user's home directory.
 * 
 * If more than one argument is passed or the argument is unrecognized, logs an invalid input error.
 *
 * @param {string[]} args - An array containing a single OS command-line option.
 */
export const handleOsService = async (args) => {
  if (args.length > 1) {
    logInvalidInputErr();
    return;
  }

  switch (args[0]) {
    case OS_ARG_EOL:
      console.log(JSON.stringify(os.EOL));
      break;

    case OS_ARG_CPUS:
      const cpus = os.cpus();
      console.log(`Total CPUs: ${cpus.length}`);
      cpus.forEach((cpu, index) => {
        console.log(
          `CPU ${index + 1}: ${cpu.model.trim()}, ${Math.round(cpu.speed / 100) / 10} GHz`
        );
      });
      break;

    case OS_ARG_USERNAME:
      console.log(os.userInfo().username);
      break;

    case OS_ARG_ARCHITECTURE:
      console.log(os.arch());
      break;

    case OS_ARG_HOMEDIR:
      console.log(os.homedir());
      break;

    default:
      logInvalidInputErr();
  }
};
