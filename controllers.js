const { displayCountdown } = require("./views");

const timer = seconds => {
    let countdown = setInterval(function(){
      if (seconds > 60) {
          if (seconds / 60 > 10) {
            //console.log(`${Math.floor(seconds/60)}: ${seconds % 60}`)
            if (seconds % 60 <= 10) {
                displayCountdown(`${Math.floor(seconds/60)}: 0${seconds % 60}`)
            } else {
                displayCountdown(`${Math.floor(seconds/60)}: ${seconds % 60}`)
            }
          } else {
            //console.log(`0${Math.floor(seconds/60)}: ${seconds % 60}`)
            if (seconds % 60 <= 10) {
                displayCountdown(`0${Math.floor(seconds/60)}: 0${seconds % 60}`)
            } else {
              displayCountdown(`0${Math.floor(seconds/60)}: ${seconds % 60}`)
            }
          }
      } else {
          if (seconds >= 10) {
             //console.log(`00:${seconds}`)
             displayCountdown(`00:${seconds}`)
          } else {
            //console.log(`00:0${seconds}`)
            displayCountdown(`00:0${seconds}`)
          }
      }
      if (seconds == 0) {
        clearInterval(countdown)
      }
      seconds -= 1
    }, 100);
};




module.exports = {
  timer
};