const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

const displayCountdown = seconds => {
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.cyan(figlet.textSync(seconds)));
  sleep(1000)
  clear();
};

module.exports = { displayCountdown };
