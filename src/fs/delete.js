import { unlink } from "node:fs/promises";
import path from "path";
import { getDirname } from "../helpers/index.js";

const __dirname = getDirname(import.meta.url);

const remove = async () => {
  const filePath = path.join(__dirname, "files", "fileToRemove.txt");

	try {
		await unlink(filePath);
		console.log("File was successfully deleted.");
	} catch (err) {
		throw new Error("FS operation failed")
	}
};

await remove();