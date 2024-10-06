import { createReadStream, createWriteStream } from "node:fs";
import { unlink } from 'node:fs/promises';
import zlib from 'node:zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const compress = async () => {
    const contentStream = createReadStream(__dirname + "/files/fileToCompress.txt");
    const gzipStream = zlib.createGzip();
    const writableStream = createWriteStream(__dirname + "/files/archive.gz");

    contentStream.pipe(gzipStream).pipe(writableStream).on("close", () => {
        unlink(__dirname + "/files/fileToCompress.txt");
    }).on("error", (err) => console.log(err));
};

await compress();