import {ConsoleOutput} from "./constants.js";

export const throwInvalidInput = () => {
  try {
    throw new Error(ConsoleOutput.input);
  } catch (error) {
    console.log( error.message);
  }
};
