import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { ConsoleOutput } from "../helpers/constants.js";

const { noFile } = ConsoleOutput;

export const decompress = ([toRead, toWrite], currentDirectory) => {

    if (toRead && fs.lstatSync(toRead).isFile() && !fs.existsSync(toWrite)) {
        fs.mkdirSync(toWrite, () => { })
    }

    if (!(toRead && fs.lstatSync(toRead).isFile() && fs.existsSync(toWrite))) {
        console.log(noFile);
        console.log(`You are currently in ${currentDirectory}`);
        return;
    }
    const input = fs.createReadStream(toRead);
    const output = fs.createWriteStream(path.resolve(toWrite, `${path.basename(toRead, path.extname(toRead))}`));
    const brotli = zlib.createBrotliDecompress();

    input.pipe(brotli).pipe(output);
    console.log(`Successfully decompressed into ${path.resolve(toWrite, path.basename(toRead, path.extname(toRead)))}`);
    console.log(`You are currently in ${currentDirectory}`)
};