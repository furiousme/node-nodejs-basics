import { readFile } from "node:fs/promises";
import path from "node:path";
import { getDirname } from "../helpers/index.js";

const __dirname = getDirname(import.meta.url);

const read = async () => {
	try {
		const filePath = path.join(__dirname, "files", "fileToRead.txt");
		const fileContent = await readFile(filePath, { encoding: "utf8" });
		console.log(fileContent);
	} catch (err) {
		throw new Error("FS operation failed.");
	}
};

await read();