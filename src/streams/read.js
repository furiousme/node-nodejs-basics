import { createReadStream } from "node:fs";
import {stdout} from "node:process"
import path from "path";
import { getDirname } from "../helpers/index.js";

const __dirname = getDirname(import.meta.url);

const read = async () => {
	const filePath = path.join(__dirname, "files", "fileToRead.txt");
	const contentStream = createReadStream(filePath);
	contentStream.on("end", () => stdout.write("\n"))
	contentStream.pipe(stdout);
};

await read();