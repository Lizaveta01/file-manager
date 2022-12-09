import fs from "fs";
import path from "path";
import crypto from "crypto";

const { noFile } = ConsoleOutput;

export const hash = async (currentDirectory, fileName) => {
  const stream = fs.ReadStream(path.resolve(currentPath, toRead));

  stream.on("error", () => console.log(noFile));
  stream.on("data", (data) =>
    console.log(crypto.createHash("sha256").update(data).digest("hex"))
  );
  stream.on("close", () => console.log(""));
};
