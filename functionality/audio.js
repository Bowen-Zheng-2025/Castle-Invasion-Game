var audio1 = new Audio('functionality/audioPlay.mp3'); //for the relaxed playful background music for level 1
var audio2 = new Audio('functionality/audioBoss.mp3'); //for the scary boss level background music
var soundColl = new Audio("functionality/collision.mp3"); //for any collisions, use this sound
var soundJump = new Audio("functionality/jump.mp3"); //for any jumps the hero makes, use this sound
var soundRun = new Audio("functionality/run.mp3"); //for any running the hero does, use this sound
var soundShoot = new Audio("functionality/shoot.mp3"); //for any shooting the hero does, use this sound

/*play()
a function that decides when to play the music or not for level 1
*/
function play(){
  if (gameState == 1) { //plays if in level 1
    if (typeof audio1.loop == 'boolean') { //this loops the music so it doesn't stop after 3 minutes of playing (in case player is bad at game)
      audio1.loop = true;
    }
    audio1.play();
  }
  if (gameState == 2) { //stops playing if in boss level
    audio1.pause();
  }
}

/*play2()
a function that decides when to play the music or not for the boss level
*/
function play2(){
  if (gameState == 1) { //stops playing if in level 1
    if (typeof audio2.loop == 'boolean') { //this loops the music so it doesn't stop after 3 minutes of playing (in case player is bad at game)
      audio2.loop = true;
    }
    audio2.pause();
  }
  if ((gameState == 2) && (end == false)) { //plays if in boss level
    audio2.play();
  }
}
