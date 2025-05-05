// node
import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// global state
import { store } from './store.js';

// helpers
import { handleCommand } from './handleCommand.js';
import { getUsernameFromArgs } from './helpers/getUserNameFromArgs.js';
import { logWelcomeMsg, logCurrentDir, logGoodbyeMsg } from './helpers/messages.js'

const username = getUsernameFromArgs();

async function main() {
  const rl = createInterface({ input, output });

  logWelcomeMsg(username);
  await logCurrentDir(store.currentDir);
  rl.prompt();

  rl.on('SIGINT', () => {
    rl.close();
    logGoodbyeMsg(username);
  });

  rl.on('line', async (line) => {
    const userInput = line.trim().split(/\s+/);

    if (userInput[0] === '.exit') {
      rl.close();
      logGoodbyeMsg(username);
      return;
    }

    if (userInput[0] == '') {
      await logCurrentDir(store.currentDir);
      rl.prompt();
      return;
    } else {
      await handleCommand(userInput);
    }

    await logCurrentDir(store.currentDir);
    rl.prompt();
  });
}

main();
