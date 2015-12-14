var workMinE = document.getElementById('workMin');
var breakMinE = document.getElementById('breakMin');
var timer = document.getElementById('timer');
var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var timerCtr = document.getElementById('timer-container');
var interval;

var time = "Work";

function startCount(){
  var workMin = workMinE.value;
  var breakMin = breakMinE.value;
  var seconds = 0;
  startButton.style.display = "none"
  stopButton.style.display = "inline";
  timer.innerHTML = workMinE.value + ":00";
  timerCtr.className = "work"; 
  var minutes = workMin;
  interval = setInterval(function(){ 
    if (seconds == 0){
      if (minutes == 0){
        if (time == "Work"){
          minutes = breakMin
          time = "Break"
          timerCtr.className = "break"; 
        } else {
          minutes = workMin
          time = "Work"
          timerCtr.className = "work"
        }
      }
      seconds = 60;
      minutes--
    }
    seconds--
    if (seconds < 10 && minutes < 10) {
      timer.innerHTML = "0" + minutes + ":0" +seconds;
      document.title =  time + ": 0" + minutes + ":0" +seconds;
    } else if(seconds < 10){
      timer.innerHTML = minutes + ":0" +seconds;
      document.title = time + ": " + minutes + ":0" +seconds;
    } else if(minutes < 10){
      timer.innerHTML = "0" + minutes + ":" +seconds;
      document.title = time + ": 0" + minutes + ":" +seconds;
    } else {
    timer.innerHTML = minutes + ":" +seconds;
    document.title = time + ": " + minutes + ":" +seconds;
    }
  }, 1000);
}

function stopCount(){
  clearInterval(interval)
  startButton.style.display = "inline"
  stopButton.style.display = "none";
}