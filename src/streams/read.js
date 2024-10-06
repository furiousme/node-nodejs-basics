import { createReadStream } from 'node:fs';
import {stdout} from "node:process"
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const contentStream = createReadStream(__dirname + "/files/fileToRead.txt");
    contentStream.on('end', () => stdout.write('\n'))
    contentStream.pipe(stdout);
};

await read();