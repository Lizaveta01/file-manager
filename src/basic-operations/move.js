import { copy } from "./copy.js";
import { remove } from "./delete.js";

export const move = ([currentPath, newPath], currentDirectory) => {
  copy([currentPath, newPath], false).then((data) => {
    if (data) remove(currentPath, false);
  });

  console.log(`You are currently in ${currentDirectory}`);
};
