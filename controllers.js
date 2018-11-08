const { displayCountdown } = require("./views");

const timer = seconds => {
  let time = seconds
  let detik = setInterval(function(){
    if (time > 0) {
      displayCountdown(time);
      time = time - 1
    }
    else if (time <= 0) {
      displayCountdown(time)
      time = time - 1
      clearInterval(detik)
    }
  }, 1000);
};

module.exports = {
  timer
};
