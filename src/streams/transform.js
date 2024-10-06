import { Transform } from "node:stream";
import { stdin, stdout } from "node:process";
import  { EOL } from 'node:os'

const transform = async () => {
   const transformStream = new Transform({
        transform (chunk, _, cb) {
            const transformedChunk = chunk.toString().split("").reverse().join("") + EOL;
            cb(null, transformedChunk);
        }
   });

   stdin.pipe(transformStream).pipe(stdout);
};

await transform();