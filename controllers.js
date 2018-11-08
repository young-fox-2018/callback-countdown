const { displayCountdown } = require("./views");

const timer = seconds => {
  for (let i = seconds; i >= 0; i--) {
    let menit = Math.floor(i / 60)
    let detik = i % 60
    if (menit < 9 && detik < 10) displayCountdown(`0${menit} : 0${detik}`)
    else if (menit < 9 && detik > 10) displayCountdown(`0${menit} : ${detik}`)
  }
};

module.exports = {
  timer
};
