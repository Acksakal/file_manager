// @ts-check
const supportsColor = process.stdout.isTTY && process.env.TERM !== 'dumb';

const colors = {
  cyan: supportsColor ? '\x1b[36m' : '',
  green: supportsColor ? '\x1b[32m' : '',
  red: supportsColor ? '\x1b[31m' : '',
  reset: supportsColor ? '\x1b[0m' : '',
  yellow: supportsColor ? '\x1b[33m' : '',
};

const colorMap = {
  info: colors.cyan,
  success: colors.green,
  error: colors.red,
  warn: colors.yellow
};

/**
 * Prints a message to stdout with color formatting.
 * @param {Object} props
 * @param {string} props.msg - The message to log
 * @param {'info' | 'success' | 'error' | "warn"} [props.type='info'] - Message type
*/
export function colorizeMsg({ msg, type = 'info' }) {
  return `${colorMap[type]}${msg}${colors.reset}`;
}

/**
 * Prints a message to stderr with color formatting.
 * @param {Object} props
 * @param {string} props.msg - The message to log
*/
export function printErr({ msg }) {
  const message = `${colorMap['error']}${msg}${colors.reset}`;
  console.error(message);
}

/**
 * Throws a colored error while preserving the original cause.
 * @param {Object} props
 * @param {string} props.msg - The error message
 * @param {unknown} [props.cause] - The original error to preserve
*/
export function throwErr({ msg, cause }) {
  const message = `${colorMap.error}${msg}${colors.reset}`;
  throw new Error(message, { cause });
}

/**
 * Capitalizes the first letter of a string and converts the rest of the string to lowercase.
 * 
 * @param {string} str - The input string to capitalize.
 * @returns {string} The string with the first letter capitalized and the rest in lowercase.
 * @example
 * 
 * capitalizeFirstLetter("hello"); // Returns "Hello"
 * capitalizeFirstLetter("WORLD"); // Returns "World"
 * capitalizeFirstLetter("123abc"); // Returns "123abc"
 * capitalizeFirstLetter(""); // Returns ""
 */
export function capitalizeFirstLetter(str) {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
