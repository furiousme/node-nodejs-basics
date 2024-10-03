// list.js - implement function that prints all array of filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)
import { readdir } from 'node:fs/promises';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    try {
        const files = await readdir(__dirname + "/files");
        files.forEach((el) => console.log(el));
    } catch (err) {
        throw new Error("FS operation failed.")
    } 
};

await list();