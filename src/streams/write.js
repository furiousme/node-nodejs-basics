import {createWriteStream} from "node:fs";
import { stdin } from "node:process";
import path from "path";
import { getDirname } from "../helpers/index.js";

const __dirname = getDirname(import.meta.url);

const write = async () => {
	const filePath = path.join(__dirname, "files", "fileToWrite.txt");
	const writeStream = createWriteStream(filePath);
	stdin.pipe(writeStream);
};

await write();
