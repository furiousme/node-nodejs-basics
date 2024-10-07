import { writeFile } from "node:fs";
import path from "path";
import { getDirname } from "../helpers/index.js";

const __dirname = getDirname(import.meta.url);

const create = async () => {
	const content = "I am fresh and young";
	const filePath = path.join(__dirname, "files", "fresh.txt");

	writeFile(filePath, content, {flag: "wx"}, err => {
		if (err) throw new Error("FS operation failed.");
		console.log("File was written successfully.")
	});
};


await create();