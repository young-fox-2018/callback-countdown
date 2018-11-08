const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let jam = Math.floor(seconds / 3600);
  seconds = seconds % 3600;
  let menit = Math.floor(seconds / 60);
  seconds = seconds % 60;

  jam = '0' + jam;
  if (menit < 10) {
    menit = '0' + menit;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  console.log(chalk.yellow(figlet.textSync(`${jam}:${menit}:${seconds}`)));
};

module.exports = { displayCountdown };
