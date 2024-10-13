import fs from 'fs';
import path from 'path';

import { ConsoleOutput } from "../helpers/constants.js";

const { noFile } = ConsoleOutput;

export const read = async(currentDirectory, toRead) => {
    const stream = fs.ReadStream(path.resolve(currentDirectory, toRead), 'utf8');

    stream.on('error', () => console.log(noFile));
    stream.on('data', data => process.stdout.write(data));
    stream.on('close', () => { 
        console.log('');
        console.log(`You are currently in ${currentDirectory}`);
    });
}