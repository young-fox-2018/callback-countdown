const displayCountdown = require("./views");

const timer = seconds => {
  let stop = setInterval(function () {
    if (seconds >= 0) {
      let menit = Math.floor(seconds / 60)
      let detik = seconds % 60
      let display = ''
      if (String(menit).length === 1 && String(detik).length === 1) {
        display = `0${menit} : 0${detik}`
      } else if (String(detik).length === 1) {
        display = `${menit} : 0${detik}`
      } else if (String(menit).length === 1) {
        display = `0${menit} : ${detik}`
      } else {
        display = `${menit} : ${detik}`
      }
      displayCountdown(display); seconds--;
    }
    else { clearInterval(stop) }
  }, 1000)
}

module.exports = {
  timer
};