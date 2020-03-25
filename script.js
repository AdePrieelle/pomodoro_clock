const timer = () => {

  

  //values of adjustsession and adjustbreak
  const sessionValue = document.querySelector(".adjustSessionValue");
  const breakValue = document.querySelector(".adjustBreakValue");
  //the buttons to adjust increase and decrease sessionValue and BreakValue
  const downTimerSession = document.querySelector(".downTimerSession");
  const upTimerSession = document.querySelector(".upTimerSession");
  const downTimerBreak = document.querySelector(".downTimerBreak");
  const upTimerBreak = document.querySelector(".upTimerBreak");
  //display the session or break as title and its countdown timer
  const titleSessionOrBreak = document.querySelector(".titleSessionOrBreak");
  const countdownValue = document.querySelector(".countdownValue");
  //interaction buttons will be added later

  //adjusting the session and break times
  const adjustSessionValue = () => {
    
    downTimerSession.addEventListener("click", function() {
      if(+sessionValue.textContent > 1) {
        sessionValue.textContent = +sessionValue.textContent - 1;
        countdownValueDisplay();
      };
      console.log(sessionValue.textContent);
    });

    upTimerSession.addEventListener("click", function() {
      sessionValue.textContent = +sessionValue.textContent + 1;
      countdownValueDisplay();
      console.log(sessionValue.textContent);
    });

    downTimerBreak.addEventListener("click", function() {
      if(+breakValue.textContent > 1) {
        breakValue.textContent = +breakValue.textContent - 1;
      };
      console.log(breakValue.textContent);
    });

    upTimerBreak.addEventListener("click", function() {
      breakValue.textContent = +breakValue.textContent + 1;
      console.log(breakValue.textContent);
    });
      
  };

  //Update the display for countdowntimer when the session time is adjusted
  const countdownValueDisplay = () => {
    countdownValue.textContent = sessionValue.textContent + ":00";
  }

  //https://www.youtube.com/watch?v=LAaf7-WuJJQ
  //Countdown timer



  //call functions
  adjustSessionValue();
}
//call timer
timer();