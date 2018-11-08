const { displayCountdown } = require("./views");

const timer = seconds  => {
  let myVar = setInterval(function() {
      let minutes = parseInt(seconds / 60)
      let second = seconds % 60 
      
      if (second < 10 && minutes < 10) {
       displayCountdown(`0${minutes}:0${second}`)
      } else if (second < 10) {
        displayCountdown(`${minutes}:0${second}`)
      } else if (minutes < 10) {
        displayCountdown(`0${minutes}:${second}`)
      }

      if (seconds == 0) {
        clearInterval(myVar)
      }
    
      seconds -= 1
    }, 1000)
  };

  module.exports = {
    timer, 
  };

