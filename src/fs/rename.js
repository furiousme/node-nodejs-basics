import { rename as fsRename} from "node:fs";
import fsPromises from "node:fs/promises";
import path from "path";
import { getDirname } from "../helpers/index.js";

const __dirname = getDirname(import.meta.url);

const checkIfExists = async (path) => {
	try {
		await fsPromises.access(path);   
		return true;
	} catch (e) {
		return false
	}
}

const rename = async () => {
	const oldFilePath = path.join(__dirname, "files", "wrongFilename.txt");
	const newFilePath = path.join(__dirname, "files", "properFilename.md");
	const errorMessage = "FS operation failed";
	const newFileExists = await checkIfExists(newFilePath);

	if (newFileExists) {
		throw new Error(errorMessage);
	}

	fsRename(oldFilePath, newFilePath, (err) => {
		if (err) throw new Error(errorMessage);
		console.log("File was renamed successfully.");
	}); 
};

await rename(); 