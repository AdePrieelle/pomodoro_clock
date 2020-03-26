const timer = () => {

  

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
      startSessionCountdown();
    });
    

  };

  const startSessionCountdown = () => {

    let minutes = +sessionValue.textContent;
    let seconds = 0;

    let activeSessionCountdown = setInterval(function() {

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
  
    }, 1000);

  };

  const startBreakCountdown = () => {
    
    let minutes = +breakValue.textContent;
    let seconds = 0;

    let activeBreakCountdown = setInterval(function() {

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
  
    }, 1000);    
    
  };

  function minTwoDigits(n) {
    return (n < 10 ? '0' : '') + n;
  };
 
  //call functions
  adjustSessionValue();
  startTimeCountdown();
}
//call timer
timer();