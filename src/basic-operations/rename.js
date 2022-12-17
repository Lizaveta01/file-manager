import fsPromises from "fs/promises";
import { ConsoleOutput } from "../helpers/constants.js";

const { noFile } = ConsoleOutput;

export const rename = async ([currentPath, toRead], currentDirectory) => {
  try {
    await fsPromises.rename(currentPath, toRead);
  } catch {
    console.log(noFile);
  }
  console.log(`You are currently in ${currentDirectory}`);
};
