class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = null;
  }
  
  start(printTimeCallback) {
    setInterval( () => {
      this.currentTime++;
      if (printTimeCallback){
        printTimeCallback ();
      }
    }, 1000);
  }

  getMinutes() {
    let minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return Math.floor(seconds);
  }

  computeTwoDigitNumber(value) {
    if (value >= 10){
      return `${value}`;
    } else {
      return `0${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
    }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}
