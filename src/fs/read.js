import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    try {
        const filePath = __dirname + '/files/fileToRead.txt';
        const fileContent = await readFile(filePath, { encoding: 'utf8' });
        console.log(fileContent);
    } catch (err) {
        throw new Error("FS operation failed.");
    }
};

await read();