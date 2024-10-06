import { createReadStream, createWriteStream } from "node:fs";
import zlib from 'node:zlib';
import path from 'path';
import { fileURLToPath } from 'url';
import { unlink } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const unzipStream = zlib.createUnzip();
    const contentStream = createReadStream(__dirname + "/files/archive.gz");
    const writableStream = createWriteStream(__dirname + "/files/fileToCompress.txt");

    contentStream.pipe(unzipStream).pipe(writableStream).on("close", () => {
        unlink(__dirname + "/files/archive.gz");
    }).on("error", (err) => console.log(err));
};

await decompress();