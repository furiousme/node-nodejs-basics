import { readdir } from "node:fs/promises";
import path from "path";
import { getDirname } from "../helpers/index.js";

const __dirname = getDirname(import.meta.url);

const list = async () => {
	const dirPath = path.join(__dirname, "files");

	try {
		const files = await readdir(dirPath);
		files.forEach((el) => console.log(el));
	} catch (err) {
		throw new Error("FS operation failed.")
	} 
};

await list();