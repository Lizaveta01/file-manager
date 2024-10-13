import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import path from "path";

import { divideCommandLine } from "./helpers/divideCommandLine.js";
import { throwInvalidInput } from "./helpers/throwError.js";
import { getUserName } from "./helpers/getUserName.js";
import { checkPath } from "./helpers/checkPath.js";

import { read } from "./basic-operations/read.js";
import { add } from "./basic-operations/add.js";
import { copy } from "./basic-operations/copy.js";
import { remove } from "./basic-operations/delete.js";
import { move } from "./basic-operations/move.js";
import { rename } from "./basic-operations/rename.js";

const rl = readline.createInterface({ input, output });

const user = getUserName();
let currentDirectory = operationOS.getHomeDir();

console.log(`Welcome to the File Manager, ${user}!`);
console.log(`You are currently in ${currentDirectory}`);

rl.on("line", async (input) => {
  const [command, operation] = divideCommandLine(input);
  switch (command) {
    case "up":
      currentDirectory = navigation.up(currentDirectory);
      console.log(`You are currently in ${currentDirectory}`);
      rl.prompt();
      break;
    case "cd":
      currentDirectory = navigation.cd(currentDirectory, operation);
      console.log(`You are currently in ${currentDirectory}`);
      rl.prompt();
      break;
    case "ls":
      navigation.ls(currentDirectory).then((list) => {
        console.table(list);
        console.log(`You are currently in ${currentDirectory}`);
        rl.prompt();
      });
      break;
    case "cat":
      await read(currentDirectory, operation);
      break;
    case "add":
      await add(currentDirectory, operation);
      break;
    case "rn":
      await rename(checkPath(currentDirectory, operation), currentDirectory);
      break;
    case "cp":
      await copy(checkPath(currentDirectory, operation), currentDirectory);
      break;
    case "mv":
      await move(checkPath(currentDirectory, operation), currentDirectory);
      break;
    case "rm":
      await remove(path.resolve(currentDirectory, operation), currentDirectory);
      break;
    case ".exit":
      process.exit();
    default:
      throwInvalidInput();
      console.log(`You are currently in ${currentDirectory}`);
      rl.prompt();
      break;
  }
});

process.on("exit", (code) => {
  console.log(`Thank you for using File Manager, ${user}, goodbye!`);
});
