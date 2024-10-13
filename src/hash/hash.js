import fs from "fs";
import path from "path";
import crypto from "crypto";

import { ConsoleOutput } from "../helpers/constants.js";

const { error } = ConsoleOutput;

export const hash = async (currentDirectory, fileName) => {
  try {
    const data = fs.readFileSync(path.resolve(currentDirectory, fileName));
    console.log(crypto.createHash("sha256").update(`${data}\n`).digest("hex"));
  } catch {
    console.log(error);
  }
};
