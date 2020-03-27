const timer = () => {

  //global variable to see is the timer is paused
  let checkPause = false;

  //values of adjustsession and adjustbreak
  const sessionValue = document.querySelector(".adjustSessionValue");
  const sessionValueTitle = document.querySelector(".sessionTitle");
  const breakValue = document.querySelector(".adjustBreakValue");
  const breakValueTitle = document.querySelector(".breakTitle");
  //the buttons to adjust increase and decrease sessionValue and BreakValue
  const downTimerSession = document.querySelector(".downTimerSession");
  const upTimerSession = document.querySelector(".upTimerSession");
  const downTimerBreak = document.querySelector(".downTimerBreak");
  const upTimerBreak = document.querySelector(".upTimerBreak");
  //display the session or break as title and its countdown timer
  const titleSessionOrBreak = document.querySelector(".titleSessionOrBreak");
  const countdownValue = document.querySelector(".countdownValue");
  //interaction buttons to interact with the timer
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

  //https://www.youtube.com/watch?v=LAaf7-WuJJQ
  //Countdown timer

  const startTimeCountdown = () => {
    
    play.addEventListener("click", function() {
      play.disabled = true;
      pause.disabled = false;
      if (titleSessionOrBreak.textContent == "Session") {
        startSessionCountdown();
      } else if (titleSessionOrBreak.textContent == "Break") {
        startBreakCountdown();
      }
      
      
    });
    

  };

  
  /* 
  let minutes be countdownValue minutes and seconds be countdownvalue seconds
  then if checkPause is true clear interval in startSessionCountdown and
  startBreakCountdown
  when play is pressed again check if titleSessionOrBreak is session or break
  and based on that continue startSessionCountdown with countdownValue.textcontent
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

    //make sure the timer doesnt start over again when played again after a pause
    checkPause = false;

    let activeSessionCountdown = setInterval(function() {
      if (!checkPause) {
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

      //execute if not paused
      } else {
        clearInterval(activeSessionCountdown);
      }
  
    }, 100);

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

    //make sure the timer doesnt start over again when played again after a pause
    checkPause = false;

    let activeBreakCountdown = setInterval(function() {
      if (!checkPause) {
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
      //execute if not paused
      } else {
        clearInterval(activeBreakCountdown);
      }
  
    }, 100);    
    
  };

  const minTwoDigits = (n) => {
    return (n < 10 ? '0' : '') + n;
  };

  const pauseTimer = () => {
    pause.addEventListener("click", function () {
      checkPause = true;
      play.disabled = false;
      pause.disabled = true;
    });
  };
 
  //call functions
  adjustSessionValue();
  startTimeCountdown();
  pauseTimer();
}
//call timer
timer();