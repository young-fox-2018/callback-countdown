const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let timer = setInterval(function(){
      let minutes = Math.floor(seconds/60)
      let sec = seconds%60
      let display = ''
      
      if(minutes < 10) {
        minutes = `0${minutes}`
      }
      if(sec < 10) {
        sec = `0${sec}`
      }
      display = `${minutes} : ${sec}`
      if(seconds === 0){
        clearInterval(timer)
      }
      // console.log(`${minutes} : ${seconds}`)
      displayCountdown(display)
      seconds-- 
  }, 1000);
};

module.exports = {
  timer
};
