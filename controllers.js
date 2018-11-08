
const { displayCountdown } = require("./views");

const timer = seconds => {
  let time = setInterval(function(){
    if(seconds === 1) {
      clearInterval(time)
    }
    seconds--
    displayCountdown(seconds)
  }, 1000)
};

module.exports = {
  timer
};
