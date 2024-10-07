import { createReadStream, createWriteStream } from "node:fs";
import zlib from 'node:zlib';
import path from 'path';
import { unlink } from 'node:fs/promises';
import { getDirname } from "../helpers/index.js";

const __dirname = getDirname(import.meta.url);

const decompress = async () => {
	const unzipStream = zlib.createUnzip();
	const contentStream = createReadStream(path.join(__dirname, "files", "archive.gz"));
	const writableStream = createWriteStream(path.join(__dirname, "files", "fileToCompress.txt"));

	contentStream.pipe(unzipStream).pipe(writableStream).on("close", () => {
		unlink(__dirname + "/files/archive.gz");
	}).on("error", (err) => console.log(err));
};

await decompress();