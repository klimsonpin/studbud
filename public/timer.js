var start = document.getElementById('start_stop');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var workMinutes = document.getElementById('work_minutes');
var workSeconds = document.getElementById('work_seconds');
var breakMinutes = document.getElementById('break_minutes');
var breakSeconds = document.getElementById('break_seconds');
var startTimer;

//When the start button is pressed the function checks if startTimer = undefined and if it is then the timer will start. If the timer is running however then an alert will pop up notifying the user.
start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
       document.getElementById("start_stop").innerHTML = "Stop";
    } else {
        stopInterval()
    startTimer = undefined;
      document.getElementById("start_stop").innerHTML = "Start";
    }
  
})
//When the reset button is pressed the innerText of workMinutes, workSeconds, breakMinutes, and breakSeconds change back to 25:00 and 5:00
reset.addEventListener('click', function(){
    workMinutes.innerText = 25;
    workSeconds.innerText = "00";

    breakMinutes.innerText = 5;
    breakSeconds.innerText = "00";
    document.getElementById("start_stop").innerHTML = "Start";
//Counter goes back to 0
    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})

//The stop button sets the timer back to undefined which allows the start button to check if it is undefined so that it can start the timer back up again.
stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})


//Start Timer Function
function timer(){
    // Work timer - This if statement states that if the workSeconds don't equal 0 then deduct workSeconds by 1. 
    if(workSeconds.innerText != 0){
        workSeconds.innerText--;
        //Since the timer starts at 25:00  the else if statement is run where the workSeconds value changes to 59 and the workMinutes gets deducted by 1.
        //Now that the value of workSeconds doesn't equal 0, the first if statement is run and workSeconds start to deduct by 1.
    } else if(workMinutes.innerText != 0 && workSeconds.innerText == 0){
        workSeconds.innerText = 59;
        workMinutes.innerText--;
    }

    //Break Timer Countdown
    if(workMinutes.innerText == 0 && workSeconds.innerText == 0){
        if(breakSeconds.innerText != 0){
            breakSeconds.innerText--;
        } else if(breakMinutes.innerText != 0 && breakSeconds.innerText == 0){
            breakSeconds.innerText = 59;
            breakMinutes.innerText--;
        }
    }

    //If the workSeconds and breakMinutes equal 0 then the timer is reset back to the default time of 25:00 and 5:00. Then the counter is incremented by 1.
    if(workMinutes.innerText == 0 && workSeconds.innerText == 0 && breakMinutes.innerText == 0 && breakSeconds.innerText == 0){
        workMinutes.innerText = 25;
        workSeconds.innerText = "00";

        breakMinutes.innerText = 5;
        breakSeconds.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}
