import { getTruePath } from './getTruePath.js';
import { getColorizedMsg } from "./utils.js";
import {
  MESSAGE_CURRENT_DIR,
  MESSAGE_GOODBYE,
  MESSAGE_WELCOME,
  ERROR_INVALID_INPUT,
  ERROR_OPERATION_FAILED,
  MESSAGE_EMPTY_FOLDER,
  MESSAGE_EMPTY_FILE
} from "./constants.js";

export const logWelcomeMsg = (username) => {
  console.log(MESSAGE_WELCOME, getColorizedMsg({ msg: username }));
};

export const logGoodbyeMsg = (username) => {
  console.log('\r' + MESSAGE_GOODBYE, getColorizedMsg({ msg: username }) + ', goodbye!');
};

export const logCurrentDir = async (dir) => {
  const fixedPath = await getTruePath(dir);
  console.log(MESSAGE_CURRENT_DIR, getColorizedMsg({ msg: fixedPath, type: 'success' }));
};

export const logInvalidInputErr = () => {
  console.error(getColorizedMsg({ msg: ERROR_INVALID_INPUT, type: 'error' }));
};

export const logOperationFailedErr = () => {
  console.error(getColorizedMsg({ msg: ERROR_OPERATION_FAILED, type: 'error' }));
};

export const logFolderIsEmpty = () => {
  console.log(getColorizedMsg({ msg: MESSAGE_EMPTY_FOLDER, type: 'warn' }))
}

export const logFileIsEmpty = () => {
  console.log(getColorizedMsg({ msg: MESSAGE_EMPTY_FILE, type: 'warn' }))
}