const { displayCountdown } = require("./views");

const timer = seconds => {
  let interval = setInterval(function () {
    if (seconds >= 0) {
      let min = Math.floor(seconds / 60);
      let sec = seconds - (min) * 60;
      if (min < 10) {
        if (sec >= 10) {
          let minutes = `0${min}:${sec}`;
          displayCountdown(minutes);
        } else {
          let minutes = `0${min}:0${sec}`;
          displayCountdown(minutes);
        }
      } else {
        if (sec >= 10) {
          let minutes = `${min}:${sec}`;
          displayCountdown(minutes);
        } else {
          let minutes = `${min}:0${sec}`;
          displayCountdown(minutes);
        }
      }
      seconds--;
    } else {
      clearInterval(interval)
    }
  }, 200)
};
module.exports = {
  timer
};
