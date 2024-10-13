import fs from "fs";
import path from "path";

import { ConsoleOutput } from "../helpers/constants.js";

const { noFile } = ConsoleOutput;

export const copy = async ([currentPath, newPath], currentDirectory) => {
  try {
    if (!currentPath) {
      throw new Error(noFile);
    }

    if (!fs.existsSync(newPath)) {
      await fs.promises.mkdir(newPath);
    }

    const stats = fs.lstatSync(newPath);
    if (!stats.isDirectory()) {
      throw new Error(
        "Please, create a directory with a different name, because another file already have same name. Or change directory"
      );
    }

    const fileName = path.resolve(newPath, path.basename(currentPath));

    if (fs.existsSync(path.resolve(newPath, fileName))) {
      throw new Error(
        `File with same name already exist in ${newPath}. Change filename before move`
      );
    }

    const readStream = fs.ReadStream(currentPath, "utf8");
    const writeStream = fs.WriteStream(
      path.resolve(newPath, path.basename(currentPath))
    );

    readStream.on("error", () => {
      return;
    });
    writeStream.on("error", () => {
      return;
    });

    readStream.pipe(writeStream);
    return true;
  } catch (error) {
    console.log(error.message);
  } finally {
    if (currentDirectory) {
      console.log(`You are currently in ${currentDirectory}`);
    }
  }
};
