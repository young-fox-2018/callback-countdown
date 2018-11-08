const { timer } = require("./controllers");

const main = () => {
  const seconds = parseInt(process.argv[2]) || 20;
  timer(seconds);
};

main();