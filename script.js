const timer = () => {

  //global variable to see is the timer is paused
  let checkPause = false;
  //global variable to see if the timer is stopped
  let checkStop = false;
  //global variable to see if the timer is being reset;
  let checkReset = false;
  
  //values of adjustsession and adjustbreak
  const sessionValue = document.querySelector(".adjustSessionValue");
  const sessionValueTitle = document.querySelector(".sessionTitle");
  const breakValue = document.querySelector(".adjustBreakValue");
  const breakValueTitle = document.querySelector(".breakTitle");
  //buttons to increase and decrease sessionValue and BreakValue
  const downTimerSession = document.querySelector(".downTimerSession");
  const upTimerSession = document.querySelector(".upTimerSession");
  const downTimerBreak = document.querySelector(".downTimerBreak");
  const upTimerBreak = document.querySelector(".upTimerBreak");
  //display the session or break as title and its countdown timer
  const titleSessionOrBreak = document.querySelector(".titleSessionOrBreak");
  const countdownValue = document.querySelector(".countdownValue");
  //buttons to interact with the timer
  const play = document.querySelector(".play");
  const pause = document.querySelector(".pause");
  const stop = document.querySelector(".stop");
  const reset = document.querySelector(".reset");

  //adjusting the session and break times
  const adjustSessionValue = () => {
    
    downTimerSession.addEventListener("click", function() {
      if(+sessionValue.textContent > 1) {
        sessionValue.textContent = +sessionValue.textContent - 1;
        countdownValueDisplay();
      };
    });

    upTimerSession.addEventListener("click", function() {
      sessionValue.textContent = +sessionValue.textContent + 1;
      countdownValueDisplay();
    });

    downTimerBreak.addEventListener("click", function() {
      if(+breakValue.textContent > 1) {
        breakValue.textContent = +breakValue.textContent - 1;
      };
    });

    upTimerBreak.addEventListener("click", function() {
      breakValue.textContent = +breakValue.textContent + 1;
    });
      
  };

  //Update the display for countdowntimer when the session time is adjusted
  const countdownValueDisplay = () => {
    countdownValue.textContent = minTwoDigits(+sessionValue.textContent) + ":00";
  }

  const playTimer = () => {
    
    play.addEventListener("click", function() {
      play.disabled = true;
      pause.disabled = false;
      stop.disabled = false;
      downTimerSession.disabled = true;
      upTimerSession.disabled = true;
      downTimerBreak.disabled = true;
      upTimerBreak.disabled = true;
      if (titleSessionOrBreak.textContent == "Session") {
        startSessionCountdown();
      } else if (titleSessionOrBreak.textContent == "Break") {
        startBreakCountdown();
      }
    });
  };

  /*
  When checkPause is true the current interval will be cleared
  The titleSessionOrBreak will check if the countdown that was going on before the pause
  Was a session or break.
  When play is pressed it will countdown from the current countdownvalue that is being displayed
  and will display the session or break as a title above.
  */

  const startSessionCountdown = () => {

    let minutes;
    let seconds;
    if (!checkPause) {
      minutes = +sessionValue.textContent;
      seconds = 0;
    } else {
        minutes = +(countdownValue.textContent).slice(0, 2);
        seconds = +(countdownValue.textContent).slice(-2);
    }

    //make sure the timer doesnt start over again when played again after a pause and a stop
    checkPause = false;
    checkStop = false;
    checkReset = false;

    let activeSessionCountdown = setInterval(function() {
      if (!checkPause && !checkStop && !checkReset) {
        titleSessionOrBreak.textContent = sessionValueTitle.textContent;
        countdownValue.textContent = minTwoDigits(minutes) + ":" + minTwoDigits(seconds);
        if (minutes == 0 && seconds == 0) {
          clearInterval(activeSessionCountdown);
          startBreakCountdown();
        } else if (seconds == 0) {
            minutes -= 1;
            seconds = 59;
        } else {
          seconds -= 1;
        }

      //execute if paused, stopped or if being reset to clear the ongoing timer
      } else {
          clearInterval(activeSessionCountdown);
      }
  
    }, 1000);
  };

  const startBreakCountdown = () => {

    let minutes;
    let seconds;
    if (!checkPause) {
      minutes = +breakValue.textContent;
      seconds = 0;
    } else {
        minutes = +(countdownValue.textContent).slice(0, 2);
        seconds = +(countdownValue.textContent).slice(-2);
    }

    //make sure the timer doesnt start over again when played again after a pause, stop or reset
    checkPause = false;
    checkStop = false;
    checkReset = false;

    let activeBreakCountdown = setInterval(function() {
      if (!checkPause && !checkStop && !checkReset) {
        titleSessionOrBreak.textContent = breakValueTitle.textContent;
        countdownValue.textContent = minTwoDigits(minutes) + ":" + minTwoDigits(seconds);
        if (minutes == 0 && seconds == 0) {
          clearInterval(activeBreakCountdown);
          startSessionCountdown();
        } else if (seconds == 0) {
            minutes -= 1;
            seconds = 59;
        } else {
            seconds -= 1;
        }
      //execute if paused, stopped or if being reset to clear the ongoing timer
      } else {
          clearInterval(activeBreakCountdown);
      }
  
    }, 1000);
  };

  const minTwoDigits = (n) => {
    return (n < 10 ? '0' : '') + n;
  };

  const pauseTimer = () => {
    pause.addEventListener("click", function () {
      checkPause = true;
      play.disabled = false;
      pause.disabled = true;
      downTimerSession.disabled = true;
      upTimerSession.disabled = true;
      downTimerBreak.disabled = true;
      upTimerBreak.disabled = true;
    });
  };

  const stopTimer = () => {
    stop.addEventListener("click", function () {
      checkStop = true;
      play.disabled = false;
      pause.disabled = true;
      downTimerSession.disabled = false;
      upTimerSession.disabled = false;
      downTimerBreak.disabled = false;
      upTimerBreak.disabled = false;
      titleSessionOrBreak.textContent = sessionValueTitle.textContent;
      countdownValue.textContent = minTwoDigits(+sessionValue.textContent) + ":" + minTwoDigits(0);
    });
  };

  const resetTimer = () => {
    reset.addEventListener("click", function() {
      checkReset = true;
      play.disabled = false;
      pause.disabled = true;
      stop.disabled = true;
      downTimerSession.disabled = false;
      upTimerSession.disabled = false;
      downTimerBreak.disabled = false;
      upTimerBreak.disabled = false;
      sessionValue.textContent = 25;
      breakValue.textContent = 5;
      titleSessionOrBreak.textContent = sessionValueTitle.textContent;
      countdownValue.textContent = minTwoDigits(25) + ":" + minTwoDigits(0);
    });
  };
 
  //call functions
  adjustSessionValue();
  playTimer();
  pauseTimer();
  stopTimer();
  resetTimer();
}
//call timer
timer();