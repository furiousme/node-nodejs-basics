import path from "node:path";
import { release, version } from "node:os";
import { createServer as createServerHttp } from "http";
import { getDirname } from "../helpers/index.js";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";

import "./files/c.js";

const __filename = fileURLToPath(import.meta.url); 
const __dirname = getDirname(import.meta.url);
const random = Math.random();

let unknownObject;

const readJson = async (pathToFile) => {
	return JSON.parse(await readFile(__dirname + pathToFile));
}

if (random > 0.5) {
	unknownObject = await readJson("/files/a.json");
} else {
	unknownObject = await readJson("/files/b.json")
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
	res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
	console.log("To terminate it, use Ctrl+C combination");
});

export default {
	unknownObject,
	myServer,
};

