const parseArgs = () => {
    const args = process.argv;
    let n = 2;
    let result = "";

    while (n < args.length) {
        if (args[n].startsWith("--")) {
            const argName = args[n];
            const value = args[n + 1];

            result = `${result}${result ? "," : ""} ${args[n]} is ${value}`;
            n += 2;

            continue;
        }
    }

    console.log(result);
};

parseArgs();