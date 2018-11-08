const  displayCountdown  = require("./views");

const timer = seconds => {
  let time = seconds
  let waktu = setInterval(function(){ 
    let menit = Math.floor(time/60)
    let detik = time%60
    if(menit < 10 && detik > 10){
      displayCountdown(`0${menit} : ${detik}`)
    }else if(menit < 10 &&detik < 10){
      displayCountdown(`0${menit} : 0${detik}`)
    
    }else{
      displayCountdown(`${menit} : ${detik}`)
    }
    time -= 1
    if(time < 0){
      clearInterval(waktu)
    }
  }, 1000);
  // Your code here...
};

module.exports = {
  timer
};
