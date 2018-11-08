const { displayCountdown } = require("./views");


const timer = seconds => {
  let countdown = setInterval(function() {
    displayCountdown(seconds)
    if (seconds > 0) {
      seconds--
    } else {
      clearInterval(countdown)
    }
  }, 1000);
};

module.exports = {
  timer
};
