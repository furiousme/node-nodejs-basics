import { Worker } from "worker_threads";
import os from "os";
import path from "path";
import { getDirname } from "../helpers/index.js";

const __dirname = getDirname(import.meta.url);

const performCalculations = async () => {
	const results = [];
	const cpusNum = os.cpus().length;
	const workerPath = path.join(__dirname, "worker.js")
	let counter = 0;

	for (let i = 0; i < cpusNum; i++) {
		const worker = new Worker(workerPath);

		worker.once("message", (message) => {
			results[i] = message;

			if (cpusNum - counter === 1) {
				console.log(results);
				process.exit()
			} else {
				counter++;
			}
		});

		worker.postMessage(10 + i);
	}
};

await performCalculations();