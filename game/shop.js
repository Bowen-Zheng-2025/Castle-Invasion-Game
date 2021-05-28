var speedTime = 0; //counter for when the speed should wear off
var starter = false; //for when the power timer should be on
var powerTime = 0; //counter for when the protection bubble should wear off
var noColl = false; //boolean tracker to see if hero should feel the effects of the collisions
var imgShop = new Image(); //basically creates the image
imgShop.onload = function(){ //uploads the image onto the screen
  drawShop(); //uses a function from below
}
imgShop.src="game/itemShop.png"; //source for where the image is coming from

//drawShop() - draws the item shop screen of the game to give users upgrades
function drawShop() {
 ctx.save(); //saves the present condition/state of the image/game
 ctx.beginPath(); //starts the drawing
 ctx.drawImage(imgShop, 0, -290, 1210, 1350); //parameters for drawing the screen
 ctx.fill(); //fills the image/drawing
 ctx.stroke(); //finishes the drawing
 ctx.restore(); //reuses the saved image
}

/*runTime()
This function checks how long the hero should have the power to run faster for
*/
function runTime(){
  if ((gameState == 1) || (gameState == 2)) { //you can only use powerups in level 1
    if (speedTime == 1500) { //sets how long the hero has the power for; tested --> 15 seconds (I'm feeling generous)
      rect.xMove = 10;
      starter = false;
      console.log("yet?");
    }
    if (speedTime <= 1600) { //to stop the timer from continuing to go
      speedTime ++;
    }
    if (speedTime >= 1600) { //resets it for the next possible powerup
      speedTime = 0;
    }
  }
}

/*noCollTime()
This function checks how long the hero should have the power to be protected for
*/
function noCollTime(){
  if ((gameState == 1) || (gameState == 2)) { //you can only use powerups in level 1
    if (powerTime == 1500) { //sets how long the hero has the power for; tested --> 15 seconds (I'm feeling generous)
      noColl = false;
      starter = false;
    }
    if (powerTime <= 1600) { //to stop the timer from continuing to go
      powerTime ++;
    }
    if (powerTime >= 1600) { //resets it for the next possible powerup
      powerTime = 0;
    }
  }
}

var imgBub = new Image(); //basically creates the image
imgBub.onload = function(){ //uploads the image onto the screen
  drawBubble(); //uses a function from below
}
imgBub.src="game/bubble.png"; //source for where the image is coming from

/*drawBubble()
a function that just draws the bubble so players know if their protection is on or off
*/
function drawBubble(){
  ctx.save(); //saves the present condition/state of the image/game
  ctx.beginPath(); //starts drawing the screen
  ctx.drawImage(imgBub, rect.xPos-13, rect.yPos-15, 75, 75); //gives specifications for drawing it
  ctx.fill(); //fills the image/drawing
  ctx.stroke(); //finishes the drawing
  ctx.restore(); //reuses the saved image
}

document.addEventListener("keyup", shopper); //addEventListenerws users to hit a key on keyboard to interact with the objects
function shopper(e) {
  if (e.key == "k") { //lets hero buy super speed spell
    if (keyInd >= 1) {
      starter = true; //starts the 15 seconds timer for power to wear off
      rect.xMove = 30;
      keyInd -= 1; //takes away your collected keys as payment
      console.log(keyInd); //log the keyInd so it is visible and we can keep track of it
      document.getElementById('score').innerHTML = "Keys: " + keyInd; //shows the number of keys you collected on the screen
    }
  }
  if (e.key == "b") { //lets hero buy bubble spell
    if (keyInd >= 1) {
      starter = true; //starts the 15 seconds timer for power to wear off
      noColl = true;
      noCollTime();
      keyInd -= 1; //takes away your collected keys as payment
      console.log(keyInd); //log the keyInd so it is visible and we can keep track of it
      document.getElementById('score').innerHTML = "Keys: " + keyInd; //shows the number of keys you collected on the screen
    }
  }
}
