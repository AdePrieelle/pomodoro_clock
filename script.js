const timer = () => {

  

  //values of adjustsession, adjustbreak, countdowntimer
  const sessionValue = document.querySelector(".adjustSessionValue");
  const breakValue = document.querySelector(".adjustBreakValue");
  const countdownValue = document.querySelector(".countdownValue");
  //the buttons to adjust increase and decrease sessionValue and BreakValue
  const downTimerSession = document.querySelector(".downTimerSession");
  const upTimerSession = document.querySelector(".upTimerSession");
  const downTimerBreak = document.querySelector(".downTimerBreak");
  const upTimerBreak = document.querySelector(".upTimerBreak");
  //interaction lower block will be added soon

  //adjusting the session and break times
  const adjustSessionValue = () => {
    
    downTimerSession.addEventListener("click", function() {
      if(+sessionValue.textContent > 0) {
        sessionValue.textContent = +sessionValue.textContent - 1;
      };
      console.log(sessionValue.textContent);
    });

    upTimerSession.addEventListener("click", function() {
      sessionValue.textContent = +sessionValue.textContent + 1;
      console.log(sessionValue.textContent);
    });

    downTimerBreak.addEventListener("click", function() {
      if(+breakValue.textContent > 0) {
        breakValue.textContent = +breakValue.textContent - 1;
      };
      console.log(breakValue.textContent);
    });

    upTimerBreak.addEventListener("click", function() {
      breakValue.textContent = +breakValue.textContent + 1;
      console.log(breakValue.textContent);
    });
      
  };


  //call functions
  adjustSessionValue();
}
//call timer
timer();