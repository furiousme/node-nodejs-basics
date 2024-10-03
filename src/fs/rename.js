import { rename as fsRename} from 'node:fs';
import fsPromises from "node:fs/promises";

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const checkIfExists = async (path) => {
    try {
        await fsPromises.access(path);   
        return true;
    } catch (e) {
        return false
    }
}
const rename = async () => {
    const oldFilePath = __dirname + "/files/wrongFilename.txt";
    const newFilePath = __dirname + "/files/properFilename.md";
    const errorMessage = "FS operation failed";
    const newFileExists = await checkIfExists(newFilePath);

    if (newFileExists) {
        throw new Error(errorMessage);
    }

    fsRename(oldFilePath, newFilePath, (err) => {
        if (err) throw new Error(errorMessage);
        console.log('File was renamed successfully.');
    }); 
};

await rename(); 