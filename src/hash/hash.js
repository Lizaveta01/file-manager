import fs from "fs";
import path from "path";
import crypto from "crypto";
import { ConsoleOutput } from "../helpers/constants.js";

const { noFile } = ConsoleOutput;

export const hash = async (currentDirectory, fileName) => {
  const stream = fs.ReadStream(path.resolve(currentDirectory, fileName));

  stream.on("error", () => console.log(noFile));
  stream.on("data", data =>
    console.log(crypto.createHash("sha256").update(data).digest("hex"))
  );
  stream.on("close", () => { console.log(`You are currently in ${currentDirectory}`)
});

};
