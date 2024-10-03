import { writeFile } from "node:fs";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const content = 'I am fresh and young';
    const filePath = __dirname + '/files/fresh.txt';

    writeFile(filePath, content, {flag: "wx"}, err => {
        if (err) throw new Error("FS operation failed.");
        console.log("File was written successfully.")
    });
};


await create();