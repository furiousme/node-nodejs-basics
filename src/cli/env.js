const parseEnv = () => {
  const envs =  Object.keys(process.env);
  let result = "";

  envs.forEach((el) => {
    if (el.startsWith("RSS_")) {
      const value = process.env[el];

      result = `${result}${result ? "; " : ""}${el}=${value}`;
    }
  })
  
  console.log(result);
};

parseEnv();