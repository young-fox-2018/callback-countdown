const displayCountdown  = require("./views");

const timer = seconds => {
  var counter = seconds
  var set = setInterval(setIn , 1000)

  function setIn(){
    let menit = Math.floor(counter/60)
    let menit2 = ''
    let detik = ''


    
    if(menit < 9) {
      menit2 = `0${Math.floor(counter/60)}`
    } else {
      menit2 = menit
    }
    
    if(detik > 9 ){
      detik = ` 0${counter - (menit * 60)}`
    }else {
      detik = counter - (menit * 60)
    }

    if(counter >=0){
      displayCountdown(`${menit2}:${detik}`)
      counter--

    } else {
      clearInterval(set)
    }
    
  }
};

module.exports = {
  timer
};
