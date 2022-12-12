import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";

import { ConsoleOutput } from "../helpers/constants.js";

const { noFile } = ConsoleOutput;

export const copy = async ([currentPath, newPath], currentDirectory) => {
  try {

  if (!currentPath) {
    throw new Error
  }
  if (!fs.existsSync(newPath)) {
    await fs.promises.mkdir(newPath);
  }

  const readStream = fs.ReadStream(currentPath, "utf8");
  const writeStream = fs.WriteStream(
    path.resolve(newPath, path.basename(currentPath))
  );

  readStream.on("error", () => {return});
  writeStream.on("error", () => {return});

  readStream.pipe(writeStream);
  if (currentDirectory)  console.log(`You are currently in ${currentDirectory}`)
  return true;
   } catch {
    console.log(noFile);
  }
};
