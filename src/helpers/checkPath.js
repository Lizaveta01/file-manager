import path from "path";

export const checkPath = (currentDirectory, paths) => {
  paths = paths.split(" ");

  const oldPath = path.resolve(currentDirectory, paths[0]);
  const newPath = path.resolve(currentDirectory, paths[1]);

  return [oldPath, newPath];
};
