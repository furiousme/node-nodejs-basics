import { createReadStream } from 'node:fs';
import path from "node:path";
import { createHash } from 'node:crypto';
import { getDirname } from "../helpers/index.js";

const __dirname = getDirname(import.meta.url);

const calculateHash = async () => {
	const hash = createHash('sha256');
	const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");
	const contentStream = createReadStream(filePath);

	contentStream.on('data', (chunk) => {
		hash.update(chunk);
	});

	contentStream.on('end', () => {
		const contentHash = hash.digest('hex');
		console.log(contentHash);
	})
	
	contentStream.on('error', (e) => {
		console.error(e.message);
	});    
};

await calculateHash();