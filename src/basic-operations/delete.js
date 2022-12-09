import fs from 'fs';
import { ConsoleOutput } from "../helpers/constants.js";

const { noFile } = ConsoleOutput;

export const remove = async(currentPath) => {
    fs.rm(currentPath, (error) => {
        if (error) console.log(noFile);
    })
}