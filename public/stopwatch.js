let seconds = 0;
let minutes = 0;
let hours = 0;


let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define var to hold setInterval() function
let interval = null;

//Define var to hold stopwatch status
let status = "stopped";

//Stopwatch function (logic to determine when to increment next value, etc.)
function stopWatch(){
   //seconds will always increment when stopwatch is run.
    seconds++;

    //Logic to determine when to increment next value for minutes
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;
        //Logic to determine when to increment next value for hours
        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }

    }

    //If seconds/minutes/hours are a single digit then this if statement adds a 0 in front. This is to avoid 3 digits showing up in the timer.
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }

    //Displays the time to the user.
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}



function startStop(){

    if(status === "stopped"){

        //Starts the stopwatch by the calling the setInterval( ) function and starting the stopWatch() function
        //Also changes the html of the start button to stop.
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";

    }
    else{

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";

    }

}

//Function to reset the stopwatch
function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";

}