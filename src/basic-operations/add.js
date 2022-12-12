import fs from "fs";
import path from "path";
import { ConsoleOutput } from "../helpers/constants.js";

const { fileExist } = ConsoleOutput;

export const add = async (currentDirectory, toRead) => {
  const newPath = path.resolve(currentDirectory, toRead);

  fs.writeFile(newPath, "", { flag: "wx" }, (err) => {
    if (err) console.log(fileExist);
  });
  console.log(`You are currently in ${currentDirectory}`);
};
