import { fork } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    const child = fork(__dirname + "/files/script.js", args);

    child.on('error', (e) => {
        console.log(e);
        process.exit(1);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["first arg", "second arg"]);
