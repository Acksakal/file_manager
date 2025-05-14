import { getTruePath } from './getTruePath';
import { getColorizedMsg } from "./utils";
import {
  MESSAGE_CURRENT_DIR,
  MESSAGE_GOODBYE,
  MESSAGE_WELCOME,
  ERROR_INVALID_INPUT,
  ERROR_OPERATION_FAILED,
  MESSAGE_EMPTY_FOLDER,
  MESSAGE_EMPTY_FILE
} from "./constants";

export const logWelcomeMsg = (username: string) => {
  console.log(MESSAGE_WELCOME, getColorizedMsg({ msg: username }));
};

export const logGoodbyeMsg = (username: string) => {
  console.log('\r' + MESSAGE_GOODBYE, getColorizedMsg({ msg: username }) + ', goodbye!');
};

export const logCurrentDir = async (dir: string) => {
  const fixedPath = await getTruePath(dir);
  console.log(MESSAGE_CURRENT_DIR, getColorizedMsg({ msg: fixedPath, type: 'success' }));
};

export const logInvalidInputErr = (cause?: string) => {
  console.error(getColorizedMsg({
    msg: ERROR_INVALID_INPUT,
    type: 'error'
  }) + (
      cause
        ? `\n${getColorizedMsg({ msg: cause, type: 'error' })}`
        : ''
    )
  );
};

export const logOperationFailedErr = (cause?: string) => {
  console.error(getColorizedMsg({
    msg: ERROR_OPERATION_FAILED,
    type: 'error'
  }) + (
      cause
        ? `\n${getColorizedMsg({ msg: cause, type: 'error' })}`
        : ''
    )
  );
};

export const logFolderIsEmpty = () => {
  console.log(getColorizedMsg({ msg: MESSAGE_EMPTY_FOLDER, type: 'warn' }))
}

export const logFileIsEmpty = () => {
  console.log(getColorizedMsg({ msg: MESSAGE_EMPTY_FILE, type: 'warn' }))
}