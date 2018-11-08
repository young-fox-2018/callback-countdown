const { displayCountdown } = require("./views");

const timer = seconds => {
  let i = seconds
  displayCountdown(i)
  setInterval(function () {
    i--
    if (i <= 0) { 
      clearInterval(this)
    } else {
      displayCountdown(i)
    }
  }, 200)
};


module.exports = {
  timer
};
