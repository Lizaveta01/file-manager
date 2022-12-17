import { readdir } from "node:fs/promises";
import fs from "fs";
import { resolve } from "node:path";
import { ConsoleOutput } from "../helpers/constants.js";

const { noFileOrDirectory, noDirectory } = ConsoleOutput;
export const up = (currentPath) => {
  return resolve(currentPath, "..");
};

export const cd = (currentPath, additionPath) => {
  const newPath = resolve(currentPath, additionPath);

  if (!fs.existsSync(newPath)) console.log(noFileOrDirectory);
  else if (!fs.lstatSync(newPath).isDirectory()) console.log(noDirectory);
  return fs.existsSync(newPath) && fs.lstatSync(newPath).isDirectory()
    ? newPath
    : currentPath;
};

export const ls = async (folder) => {
  const files = await readdir(folder, { withFileTypes: true });
  const TransformFiles = files.map((file) => {
    const itemInfo = {
      name: file.name,
      type: file.isFile()
        ? "file"
        : file.isDirectory()
        ? "directory"
        : "unknown",
    };
    return itemInfo;
  });

  const filteredFiles = TransformFiles.filter(
    (item) => item.type === "file" || item.type === "directory"
  );

  const sortedFiles = filteredFiles.sort((a, b) => {
    if (a.type > b.type) return 1;
    if (a.type < b.type) return -1;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  return sortedFiles;
};
