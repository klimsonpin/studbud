var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

//This function listens out for the onclick of the playPauseBTN and sit count is already set to 0,
//the function changes the value of count to 1, plays the audio, and changes the play inner html to pause.
function playPause(){
	if(count == 0){
		count = 1;
		audio.play();
		playPauseBTN.innerHTML = "Pause ⏸";
		//Since the value of count is 1 when the user presses pause the else function runs and the audio is paused
		//and the innerHTML of the pause button goes back to play.
	}else{
		count = 0;
		audio.pause();
		playPauseBTN.innerHTML = "Play ►";
	}

}

function stop(){
	playPause()
	audio.pause();
	audio.currentTime = 0;
	playPauseBTN.innerHTML = "Play ►";
}

