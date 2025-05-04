import { colorizeMsg } from "./utils.js";
import { getTruePath } from './getTruePath.js';
import {
  MESSAGE_CURRENT_DIR,
  MESSAGE_GOODBYE,
  MESSAGE_WELCOME,
  ERROR_INVALID_INPUT,
  ERROR_OPERATION_FAILED,
  MESSAGE_EMPTY_FOLDER,
} from "./constants.js";

export const logWelcomeMsg = (username) => {
  console.log(MESSAGE_WELCOME, colorizeMsg({ msg: username }));
};

export const logGoodbyeMsg = (username) => {
  console.log('\r' + MESSAGE_GOODBYE, colorizeMsg({ msg: username }) + ', goodbye!');
};

export const logCurrentDir = async (dir) => {
  const fixedPath = await getTruePath(dir);
  console.log(MESSAGE_CURRENT_DIR, colorizeMsg({ msg: fixedPath, type: 'success' }));
};

export const logInvalidInputErr = () => {
  console.error(colorizeMsg({ msg: ERROR_INVALID_INPUT, type: 'error' }));
};

export const logOperationFailedErr = () => {
  console.error(colorizeMsg({ msg: ERROR_OPERATION_FAILED, type: 'error' }));
};

export const logFolderIsEmpty = () => {
  console.log(colorizeMsg({ msg: MESSAGE_EMPTY_FOLDER, type: 'warn' }))
}
