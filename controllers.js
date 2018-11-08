const { displayCountdown } = require("./views");

const timer = seconds => {
  let display = setInterval(function(){ 
    if(seconds >= 0){
      let menit = Math.floor(seconds/60)
      let detik = seconds - menit*60
      let counter = ""
      if(menit < 10 && detik < 10){
        counter = `0${menit}:0${detik}`
      }else if(menit < 10 && detik >= 10){
        counter = `0${menit}:${detik}`
      }else if(menit > 10 && detik < 10){
        counter = `${menit}:0${detik}`
      }else{
        counter = `${menit}:${detik}`
      }
      displayCountdown(counter);
      seconds--
    }else{
    clearInterval(display)
    }
  }, 500);
};

module.exports = {
  timer
};
