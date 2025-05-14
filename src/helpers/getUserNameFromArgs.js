import process from 'node:process';

/**
 * Capitalizes each segment of a dash-separated name.
 * Example: "kassym-jomart" → "Kassym-Jomart". Does not handle spaces.
 *
 * @param {string} str - The input string to capitalize.
 * @returns {string} The capitalized string.
 */
const capitalizeFullName = (str) => {
  if (!str.includes('-')) return str.charAt(0).toUpperCase() + str.slice(1);

  return str
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('-');
};

/**
 * Extracts the username from process arguments and conditionally capitalizes it.
 * Only capitalizes parts separated by dashes. Leaves other input untouched.
 *
 * @returns {string} The formatted username or "Guest" if not provided.
 */
export const getUsernameFromArgs = () => {
  const usernameArg = process.argv.slice(2).find(arg => arg.startsWith('--username='));
  const value = usernameArg?.split('=')[1]?.trim();
  return value ? capitalizeFullName(value) : 'Guest';
};



/*
[SELF-REVIEW] This native option is better, but requires some refactoring
try {
    const { values } = parseArgs({
      options: {
        username: { type: 'string' }
      },
      args: process.argv.slice(2),
    });
  
    const usernameInput = values.username?.trim();
    return usernameInput ? capitalizeFullName(usernameInput) : 'Guest';
  } catch (error) {
    logInvalidInputErr(error.message);
  }
*/