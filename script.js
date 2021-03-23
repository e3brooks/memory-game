// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0; //how far in the pattern
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0; //current spot played in the pattern
var strike = 3; //mistake counter

var strikeDialog = document.getElementById("strikeDialog");
var dialog = document.getElementById("Dialog");
var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var dialogText = document.getElementById("dialogText");
var score = document.getElementById("score");

var clueHoldTime = 1000; //how long to hold each clue's light/sound

function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    strike = 3;
    pattern = [];
    clueHoldTime = 1000;
    // generate random pattern
    randomPattern();
    console.log(pattern);
    // swap the Start and Stop buttons
    startBtn.classList.add("hidden");
    stopBtn.classList.remove("hidden");
    score.innerHTML = "Score: 0"
    score.classList.remove("hidden");
    playClueSequence()
}

function stopGame(){
    gamePlaying = false;
    // swap the Start and Stop buttons
    startBtn.classList.remove("hidden");
    stopBtn.classList.add("hidden");
    score.classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 329.628,
  2: 391.995,
  3: 466.164,
  4: 523.251,
  5: 587.330
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  dialog.showModal();
  dialogText.innerHTML = "Game Over. You lost.";
}

function winGame(){
  stopGame();
  dialog.showModal();
  dialogText.innerHTML = "Game Over. You won!";
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // add game logic here
  if (btn == pattern[guessCounter]) {
    //guess correct
    if (guessCounter == progress) {
      //turn over
      if (progress == pattern.length - 1) {
        //the last turn is over -> WIN GAME
        score.innerHTML = "Score: " + progress;
        winGame();
      }
      else {
        //not last turn -> increment progress and play next clue sequence
        progress++;
        score.innerHTML = "Score: " + progress;
        //speed it up
        clueHoldTime -= 100;
        playClueSequence();   
      }
    }
    else {
      //turn not over -> increment guess counter
      guessCounter++;
    }
  }
  else {
    strike--; 
    if (strike > 0) {
      document.getElementById("strikeText").innerHTML = "Incorrect pattern, you have " + strike + " more attempt(s) to repeat back the correct pattern. Would you like to hear the clue sequence again?";
      strikeDialog.showModal();
    }
    else {
      //guess incorrect after 3 tries -> LOSE GAME
      loseGame(); 
    }
  } 
}

function noRepeat() {
  strikeDialog.close();
  guessCounter = 0;
}

// function to replay sequence
function yesRepeat() {
  strikeDialog.close();
  playClueSequence();
}

function dialogClose() {
  dialog.close();
}

// function to generate random sequence of 8 clues from 1-5 
function randomPattern() {
  for (let i = 0; i<8; i++) {
    pattern.push(Math.floor(Math.random() * 5)+1);
  }  
}
