const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  // let jam = Math.floor(seconds / 3600);
  // let menit = Math.floor(seconds / 60);

  let tiktok = setInterval(function() {
    
    displayCountdown(seconds);

    seconds -= 1;

    if (seconds < 0) {      
      clearInterval(tiktok);
    }

  }, 1000);  
};

module.exports = {
  timer
};
