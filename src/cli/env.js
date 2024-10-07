const parseEnv = () => {
  const args = process.argv;
  let n = 2;
  let result = "";

  while (n < args.length) {
    if (args[n].startsWith("RSS_")) {
      const argName = args[n];
      const value = args[n + 1];
      
      if (value == undefined) {
          throw new Error(`Value for the argument ${argName} was not provided.`)
      }

      result = `${result}${result ? ";" : ""} ${argName}=${value}`;
      n += 2;

      continue;
    }
  }

  console.log(result);
};

parseEnv();