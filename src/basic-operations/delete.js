import fs from "fs";
import { ConsoleOutput } from "../helpers/constants.js";

const { noFile } = ConsoleOutput;

export const remove = async (currentPath, currentDirectory) => {
  fs.rm(currentPath, (error) => {
    if (error) console.log(noFile);
  });
  if (currentDirectory) {
    console.log(`Successfully removed ${currentPath}`);
    console.log(`You are currently in ${currentDirectory}`);
  }
};
