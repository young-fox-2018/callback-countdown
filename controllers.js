const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let interval = setInterval(function(){
    let menit = String(Math.floor(seconds/60))
    let detik = String(seconds%60)
    
    if(menit.length ==1){
      menit = "0" + menit
    }
    if(detik.length ==1){
      detik = "0" + detik
    }
    displayCountdown(menit, detik)
    
    
    seconds--
    if(seconds < 0) clearInterval(interval)
  }, 10);
  
};

module.exports = {
  timer
};
