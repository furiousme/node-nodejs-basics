import { createReadStream, createWriteStream } from "node:fs";
import { unlink } from "node:fs/promises";
import zlib from "node:zlib";
import path from "path";
import { getDirname } from "../helpers/index.js";

const __dirname = getDirname(import.meta.url);

const compress = async () => {
	const contentStream = createReadStream(path.join(__dirname, "files", "fileToCompress.txt"));
	const writableStream = createWriteStream(path.join(__dirname, "files", "archive.gz"));
	const gzipStream = zlib.createGzip();

	contentStream.pipe(gzipStream).pipe(writableStream).on("close", () => {
		unlink(__dirname + "/files/fileToCompress.txt");
	}).on("error", (err) => console.log(err));
};

await compress();