// @ts-check
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { capitalizeFirstLetter } from './helpers/utils.js';
import { handleCommand } from './handleCommand.js';
import { store } from './store.js';
import * as messages from './helpers/messages.js'

function getUsernameFromArgs() {
  const usernameArg = process.argv.slice(2).find(arg => arg.startsWith('--username='));
  const value = usernameArg?.split('=')[1]?.trim();
  return value ? capitalizeFirstLetter(value) : 'Guest';
}

const username = getUsernameFromArgs();

async function main() {
  const rl = readline.createInterface({ input, output });

  messages.logWelcomeMsg(username);
  await messages.logCurrentDir(store.currentDir);
  rl.prompt();

  rl.on('SIGINT', () => {
    rl.close();
    messages.logGoodbyeMsg(username);
  });

  for await (const line of rl) {
    const userInput = line.trim().split(/\s+/);

    if (userInput[0] === '.exit') {
      rl.close();
      messages.logGoodbyeMsg(username);
      break;
    }

    if (userInput[0] == '') {
      messages.logInvalidInputErr();
    } else {
      await handleCommand(userInput);
    }

    await messages.logCurrentDir(store.currentDir);
    rl.prompt();
  }
}

main();
