import { Worker } from 'worker_threads';
import os, { cpus } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
   const results = [];
   const cpusNum = os.cpus().length;
   let counter = 0;

   for (let i = 0; i < cpusNum; i++) {
        const worker = new Worker(__dirname + "/worker.js");

        worker.once('message', (message) => {
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