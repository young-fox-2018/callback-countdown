const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");
const sleep = require('./sleep')


const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  // console.log(seconds)
  console.log(chalk.cyan(figlet.textSync(seconds)))
  sleep(1000)

};

module.exports = {
  displayCountdown
};