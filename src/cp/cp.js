import { fork } from "child_process";
import path from "path";
import { getDirname } from "../helpers/index.js";

const __dirname = getDirname(import.meta.url);

const spawnChildProcess = async (args) => {
  const filePath = path.join(__dirname, 'files', 'script.js');
  const child = fork(filePath, args);

  child.on("error", (e) => {
    console.log(e);
    process.exit(1);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["first arg", "second arg"]);
