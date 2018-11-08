const { displayCountdown } = require("./views");

const timer = seconds => {
  seconds += 1
  let displayTimer = setInterval(function(){ 
    seconds -= 1
    let menit = '0'+Math.floor(seconds / 60)
    let detik = seconds%60
    detik = (detik < 10) ? '0'+detik : detik

    

    displayCountdown(`${menit}:${detik}`)
    if (seconds == 0) {
      clearInterval(displayTimer)
    }
  }, 1000);

  
};

module.exports = {
  timer
};
