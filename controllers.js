const { displayCountdown } = require("./views");

const timer = seconds => {
  let i = seconds
  displayCountdown(i)
  setInterval(function () {
    i--
    if (i <= 0) {
      displayCountdown(0)
      clearInterval()
    } else {
      displayCountdown(i)
    }

  }, 1000)
};


module.exports = {
  timer
};
