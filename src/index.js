import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import path from "path";

import { divideCommandLine } from "./helpers/divideCommandLine.js";
import { throwInvalidInput } from "./helpers/throwError.js";
import { getUserName } from "./helpers/getUserName.js";
import * as operationOS from "./os/os.js";
import * as navigation from "./navigation/navigation.js";

const rl = readline.createInterface({ input, output });

const user = getUserName();
let currentDirectory = operationOS.getHomeDir();

console.log(`Welcome to the File Manager, ${user}!`);
console.log(`You are currently in ${currentDirectory}`);

rl.on("line", (input) => {
  const [command, operation] = divideCommandLine(input);
//   console.log(command, operation);
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
        rl.prompt();
      });
      break;
    case "cat":
      break;
    case "add":
      break;
    case "rn":
      break;
    case "cp":
      break;
    case "mv":
      break;
    case "rm":
      break;
    case "hash":
      break;
    case "compress":
      break;
    case "decompress":
      break;
    case "os":
      switch (operation) {
        case "EOL":
          console.log(operationOS.getEOL());
          break;
        case "cpus":
          console.log(operationOS.getCPUs());
          break;
        case "homedir":
          console.log(operationOS.getHomeDir());
          break;
        case "username":
          console.log(operationOS.getUserName());
          break;
        case "architecture":
          console.log(operationOS.getArchitecture());
          break;
        default:
          throwInvalidInput();
          rl.prompt();
          break;
      }
      rl.prompt();
      break;
    case ".exit":
      process.exit();
    default:
      throwInvalidInput();
      rl.prompt();
      break;
  }
});

process.on("exit", (code) => {
  console.log(`Thank you for using File Manager, ${user}, goodbye!`);
});
