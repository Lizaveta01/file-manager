import fs from "fs";
import path from "path";
import { ConsoleOutput } from "../helpers/constants.js";

const { fileExist } = ConsoleOutput;

export const add = async (currentPath, toRead) => {
  const newPath = path.resolve(currentPath, toRead);

  fs.writeFile(newPath, "", { flag: "wx" }, (err) => {
    if (err) console.log(fileExist);
  });
};
