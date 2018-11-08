const displayCountdown = require("./views");

const timer = seconds => {
  // Your code here...
  let counter = seconds
  let interval = setInterval(function(){
    let menit = Math.floor(counter/60)
    let detik = counter % 60

    if(menit < 10 && detik < 10) {
      var time = `0${menit}:0${detik}`
    } else if(menit < 10){
      var time = `0${menit}:${detik}`
    } else if(detik < 10) {
      var time = `${menit}:0${detik}`
    } else {
      var time = `${menit}:${detik}`
    }

    counter = counter - 1
    displayCountdown(time)
    if(counter < 0) {
      clearInterval(interval)
    }
  }, 1000) 


};

module.exports = {
  timer
};
