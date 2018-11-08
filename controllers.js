const {
  displayCountdown
} = require("./views")

const timer = seconds => {
  // Your code here...
  for (let i = seconds; i >= 0; i--) {
    let menit = Math.floor(i / 60),
      detik = i % 60
    if (menit < 10) {
      menit = '0' + menit
    }
    if (detik < 10) {
      detik = '0' + detik
    }
    displayCountdown(`${menit}:${detik}`)
    // console.log(i)
  }

};

module.exports = {
  timer
}