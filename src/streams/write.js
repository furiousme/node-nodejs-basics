import {createWriteStream} from "node:fs";
import { stdin } from "node:process";

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const writeStream = createWriteStream(__dirname + "/files/fileToWrite.txt");
    stdin.pipe(writeStream);
};

await write();
