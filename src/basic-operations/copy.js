import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";

import { ConsoleOutput } from "../helpers/constants.js";

const { error } = ConsoleOutput;

export const copy = async ([currentPath, newPath]) => {
  if (!currentPath) {
    console.log(noFile);
  } else if (!fs.existsSync(dest)) {
    await fs.promises.mkdir(dest);
  }

  const readStream = fs.ReadStream(currentPath, "utf8");
  const writeStream = fs.WriteStream(
    path.resolve(newPath, path.basename(currentPath))
  );

  readStream.on("error", () => console.log(error));
  writeStream.on("error", () => console.log(error));

  readStream.pipe(writetream);
};
