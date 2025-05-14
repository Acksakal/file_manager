// @ts-check
import process from "node:process";

const supportsColor = process.stdout.isTTY && process.env.TERM !== 'dumb';

const colors = {
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  reset: '\x1b[0m',
  yellow: '\x1b[33m',
};

export type ColorsType = 'info' | 'success' | 'error' | 'warn';

export type ColorMap = {
  [key in ColorsType]: string;
};

const colorMap: ColorMap = {
  info: colors.cyan,
  success: colors.green,
  error: colors.red,
  warn: colors.yellow
};

type GetColoredMessageProps = {
  msg?: string;
  type: ColorsType;
}

/**
 * Prints a message to stdout with color formatting.
*/
export function getColorizedMsg({ msg = '', type = 'info' }: GetColoredMessageProps) {
  if (!supportsColor) {
    return msg;
  }

  return `${colorMap[type]}${msg}${colors.reset}`;
}

/**
 * Prints a message to stderr with color formatting.
 * @param {Object} props
 * @param {string} props.msg - The message to log
*/
export function printErr({ msg }: {msg: string}) {
  const message = getColorizedMsg({msg, type: 'error'});

  console.error(message);
}

/**
 * Capitalizes the first letter of a string and converts the rest of the string to lowercase.
 * 
 * @example 
 * capitalizeFirstLetter("hello"); // Returns "Hello"
 * capitalizeFirstLetter("WORLD"); // Returns "World"
 * capitalizeFirstLetter("123abc"); // Returns "123abc"
 * capitalizeFirstLetter(""); // Returns ""
 */
export function capitalizeFirstLetter(str: string) {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
