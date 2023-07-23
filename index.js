// Constants
let isTimerStop = true;
let second = 0;
let minute = 0;
let hour = 0;

// Helper routine to handle onclick on start button
function start(){
  if (isTimerStop) {
    isTimerStop = false;
    timer();
  }
}

// Helper routine to handle onclick on stop button
function stop(){
  if (isTimerStop === false) isTimerStop = true;
}

// Helper routine to handle onclick on reset button
function reset(){
  isTimerStop = true;
  second = 0;
  minute = 0;
  hour = 0;
  watchTimer.innerHTML = '00 : 00 : 00';
}

// Helper routine to handle timer functionallity
function timer(){
  if (isTimerStop === false){
    second = parseInt(second);
    minute = parseInt(minute);
    hour = parseInt(hour);

    second += 1;

    // Adding zero default for single digit value
    if(second<10) {second = '0' + second};
    if(minute<10) {minute = '0' + minute};
    if(hour<10) {hour = '0' + hour};

    // Increase minute value as 1 if second value rich to 60 and reset second to zero
    if (second === 60){
      second = 0;
      minute += 1;
    }
  
    // Increase hour value as 1 if minute value rich to 60 and reset minute and second to zero
    if (minute === 60){
      minute = 0;
      second = 0;
      hour += 1;
    }

    // Add setTimeOut method with 1s to help the increase second value in every 1s
    setTimeout('timer()', 1000);

    // Using id to show the timer
    watchTimer.innerHTML = `${hour} : ${minute} : ${second}`;
  }
}