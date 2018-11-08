const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  if (seconds == 0) {
    clearInterval()
  }
  let i = seconds
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  let m = Math.floor(i / 60)
  let s = i % 60
  if (i > 0) {
    console.log(chalk.cyan(figlet.textSync(`${m}:${s}`)));
    i--
  } else if (i <= 0) {
    console.log(chalk.cyan(figlet.textSync(`${m}:${s}`)));
  }
};

module.exports = { displayCountdown };
