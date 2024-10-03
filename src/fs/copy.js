import fs from "node:fs";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const sourcePath = __dirname + "/files";
    const destinationPath = __dirname + "/files_copy";

    fs.cp(sourcePath, destinationPath, { recursive: true, errorOnExist: true, force: false }, (err) => {
        if (err) throw new Error("FS operation failed.");
        console.log('Files were copied successfully.');
    });
};

await copy();
