const { displayCountdown } = require("./views");

const timer = seconds => {
  setInterval(function(){

    let data = ""
    let menit = Math.floor(seconds / 60)
    let detik = seconds % 60
    let strmenit = ""
    let strdetik = ""

    if(menit < 10){
      strmenit = "0"+menit
    } else {
      strmenit = ""+menit
    }
    if(detik < 10){
      strdetik = "0"+detik
    } else {
      strdetik = ""+detik
    }
    
    data = `                    ${strmenit} : ${strdetik}`
    displayCountdown(data)

    seconds -= 1

    if(seconds < 0){
      clearInterval(this)
    }

  },1000)
};


module.exports = {
  timer
};
