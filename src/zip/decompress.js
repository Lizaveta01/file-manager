import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { ConsoleOutput } from "../helpers/constants.js";

const { noFile } = ConsoleOutput;

export const decompress = ([toRead, toWrite], currentDirectory) => {

    try{
         if(path.basename(toRead).split('.').pop() !== 'br'){
            console.log('fjerjgoer');
            throw new Error("File have not exist require extension for decompress");
         }
        if (toRead && fs.lstatSync(toRead).isFile() && !fs.existsSync(toWrite)) {
            fs.mkdirSync(toWrite, () => { })
        }
    
        if (!(toRead && fs.lstatSync(toRead).isFile() && fs.existsSync(toWrite))) {
            throw new Error(noFile);
        }

        const input = fs.createReadStream(toRead);
        const output = fs.createWriteStream(path.resolve(toWrite, `${path.basename(toRead, path.extname(toRead))}`));
        const brotli = zlib.createBrotliDecompress();
    
        input.pipe(brotli).pipe(output);
        console.log(`Successfully decompressed into ${path.resolve(toWrite, path.basename(toRead, path.extname(toRead)))}`);
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log(`You are currently in ${currentDirectory}`);
    }
   
};