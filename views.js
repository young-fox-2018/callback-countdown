const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");
const sleep = require("./sleep");

const displayCountdown = seconds => {
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.cyan(figlet.textSync(seconds)));
  sleep(1000)
  clear();
};

module.exports = { displayCountdown };
