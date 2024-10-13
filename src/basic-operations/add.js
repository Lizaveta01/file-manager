import fs from "fs";
import path from "path";

import { ConsoleOutput } from "../helpers/constants.js";

const { fileExist, noDirectory } = ConsoleOutput;

export const add = async (currentDirectory, toRead) => {
  const newPath = path.resolve(currentDirectory, toRead);

  if (fs.existsSync(newPath)) {
    fs.writeFile(newPath, "", { flag: "wx" }, (err) => {
      if (err) console.log(fileExist);
    });
  } else {
    console.log(noDirectory);
  }

  console.log(`You are currently in ${currentDirectory}`);
};
