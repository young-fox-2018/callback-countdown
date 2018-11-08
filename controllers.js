const { displayCountdown } = require("./views");

const timer = seconds => {
    setInterval(function(){ 
      let menit = Math.floor(seconds/60)
      let detik = seconds % 60
      if(menit  < 10 || detik < 10) {
        menit = `0${menit}`
        detik = `0${detik}`
      }
  
      displayCountdown(menit,detik); 
      seconds -= 1
      if(detik <= 0)  {
        clearInterval(this);
      }
      }, 1000);
  
};

module.exports = {
  timer
};
