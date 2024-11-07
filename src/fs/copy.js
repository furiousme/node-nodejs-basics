import fs from "node:fs";
import path from "path";
import { getDirname } from "../helpers/index.js";

const __dirname = getDirname(import.meta.url);

const copy = async () => {
	const sourcePath = path.join(__dirname, "files");
	const destinationPath = path.join(__dirname, "files_copy"); 

	fs.cp(sourcePath, destinationPath, { recursive: true, errorOnExist: true, force: false }, (err) => {
		if (err) throw new Error("FS operation failed.");
		console.log("Files were copied successfully.");
	});
};

await copy();
