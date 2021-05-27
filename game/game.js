var timer = 0; //keeps track of when to release another barrel into the game
var random = randNum(0,4); //gives a random number between 0 and 4
var garbage = []; //an array for pushing trash power from powArr into
var trackX = rect.xPos;
var powOff = false; //makes it so that you can only use the power one at a time.
var spriteSheet = new Image(); //sets an image
var bossSheet = new Image(); //sets an image
var heroSprite = new Image(); //sets an image for the hero
var noS = false; //turns off the 'S' key, use this for the final boss level
var imgStart = new Image(); //basically creates the image
var gamer = 0; //helps the gameState tracker, but also meant for the x key to help player resume their game
var musicCount = 0; //counter for playing the background music once when going
imgStart.onload = function(){ //uploads the image onto the screen
  drawStart(); //uses a function from below
}
imgStart.src="game/start.png"; //source for where the image is coming from

var imgWin = new Image(); //basically creates the image
imgWin.onload = function(){ //uploads the image onto the screen
  drawWin(); //uses a function from below
}
imgWin.src="game/winer.png"; //source for where the image is coming from

var imgEnd = new Image(); //basically creates the image
imgEnd.onload = function(){ //uploads the image onto the screen
  drawEnd(); //uses a function from below
}
imgEnd.src="game/gameOver.png"; //source for where the image is coming from

var imgHelp = new Image(); //basically creates the image
imgHelp.onload = function(){ //uploads the image onto the screen
  drawHelp(); //uses a function from below
}
imgHelp.src="game/instruction.png"; //source for where the image is coming from

// drawHelp() - draws the help screen of the game to give instructions and show controls of the game
function drawHelp() {
 ctx.save(); //saves the present condition/state of the image/game
 ctx.beginPath(); //starts the drawing
 ctx.drawImage(imgHelp, -15, -240, 1225, 1320); //parameters for drawing the bird
 ctx.fill(); //fills the image/drawing
 ctx.stroke(); //finishes the drawing
 ctx.restore(); //reuses the saved image
}

// drawStart() - draws the start screen of the game
function drawStart() {
 ctx.save(); //saves the present condition/state of the image/game
 ctx.beginPath(); //starts the drawing
 ctx.drawImage(imgStart, -10, -300, 1300, 1400); //parameters for drawing the bird
 ctx.fill(); //fills the image/drawing
 ctx.stroke(); //finishes the drawing
 ctx.restore(); //reuses the saved image
}

// drawWin() - draws the winner screen of the game
function drawWin() {
 ctx.save(); //saves the present condition/state of the image/game
 ctx.beginPath(); //starts the drawing
 ctx.drawImage(imgWin, -10, -300, 1300, 1400); //parameters for drawing the bird
 ctx.fill(); //fills the image/drawing
 ctx.stroke(); //finishes the drawing
 ctx.restore(); //reuses the saved image
}

// drawEnd() - draws the start screen of the game
function drawEnd() {
 ctx.save(); //saves the present condition/state of the image/game
 ctx.beginPath(); //starts the drawing
 ctx.drawImage(imgEnd, 0, 0, c.width, c.height); //parameters for drawing the bird
 ctx.fill(); //fills the image/drawing
 ctx.stroke(); //finishes the drawing
 ctx.restore(); //reuses the saved image
}

/*draw()
contains all the functions creted in all the other files
it combines everything and is the 'brain' of the operation
this is basically the control center
*/
function draw(){
  if (gameState == 0) { //checks what the game state should be
    drawStart(); //calls the start screen function to draw it to start
    gamer = 0; //keeps track of the gameState; use later for x and smooth return to where you left off
  }
  if (gameState == 1) {
    ctx.clearRect(0,0,c.width,c.height); //resets the canvas and redraws everything
    gamer = 1; //keeps track of the gameState; use later for x and smooth return to where you left off
    if (musicCount == 1) { //starts the audio for level 1. Does it only once
      play(); //calls the function that plays the normal music for level 1
      play2(); //calls the funciton that doesn't play the boss music yet
    }
    if (musicCount < 10) { //stops the counting in preparation for the second audio for the boss level
      musicCount ++; //increments to get music to play
    }
    if (noGrav == false) { //checks if gravity should be used or not
      if (((rect.yPos + 1) + rect.width) <= c.height) { //makes sure that the rect doesn't 'sink' into the ground when it's rolling back and forth along the ground
        rect.yPos += grav; //calls gravity
      }
    }
    if (end == true) { //if the hero dies from the score tracker, use game over screen
      drawEnd(); //calls the function that shows the game over screen
      gameState = 2;
    }
    if (keyInd < 4) { //makes you hunt for 4 keys before you can move onto the boss level by climbing the top ladder
      keyCheck(upKey, downKey);
      if (topper == true) {
        drawKey(upKey); //calls the function that draws the key on top platform
      }
      if (downer == true) {
        drawKey(downKey); //calls the function that draws the key on the bottom platform
      }
    }
    if (keyInd >= 4) { // gives you access to the boss level (use top ladder to get to)
      pass = true;
    }
    drawScore(); //calls the function that draws the hero's heart and life
    scoreKeeperGood(); //calls the function that keeps track of health, life, and damage of the hero
    drawPlat(); //calls the function that draws the platform
    drawLad(); //calls the function that draws the ladder
    drawCan(); //calls the function that draws the cannon that will 'fire' barrels
    collideBar(); //calls the function that checks the collision between the barrels and the walls of the canvas
    collideHeroBar(); //calls the function that checks for collisions between the hero and the barrel
    offLad(); //calls the function that checks if the hero is on the ladder or not. If not, enable gravity and colisions
    for (var i = 0; i < barArr.length; i++) { //goes through the barrel array
      if (barArr[i].yPos>470) { //after a specific time
        random = randNum(0,4); //gives a new random number
      }
    }
    if (go == true) {
      collideBarPlat(true, true, true, true); //calls the function that checks the collision between barrels and all the platforms
    }
    if (go1 == true) {
      collideBarPlat(false, true, true, true); //calls the function that checks the collision between barrels and all the platforms except the first
    }
    if (go2 == true) {
      collideBarPlat(true, false, true, true); //calls the function that checks the collision between barrels and all the platforms except the second
    }
    if (go3 == true) {
      collideBarPlat(true, true, false, true); //calls the function that checks the collision between barrels and all the platforms except the third
    }
    if (noCollision == false) {
      collideHeroPlat(); //calls the function that checks the collision between the hero and the platform
    }
    collideHeroBad(); //calls the function that checks the collision between the npc and the hero
    enemyMove(); //calls the function that makes the npc move back and forth automatically
    jumpCheck(); //calls the function that checks whether the hero jumping animation should be used
    heroClimb(); //calls the function that checks wheteher the hero climbing animation is necessary (and turns off jumping if so)
    if (timer == 500) { //draws new barrels every second or two
      moreBar(barrel.xPos, barrel.yPos, barrel.rad, barrel.xMove, barrel.yMove); //calls the moreBar function
      timer = 0; //resets the timer
    }
    if (random == 0) { //if the random number is 0 ...
      barLad1(barArr, ladArr); //call the function that lets the barrel go down the ladder between the first and second platform
    }
    if (random == 1) { //if the random number is 1 ...
      barLad2(barArr, ladArr); //call the function that lets the barrel go down the ladder between the second and third platform
    }
    if (random == 2) { //if the random number is 2 ...
      barLad3(barArr, ladArr); //call the function that lets the barrel go down the ladder between the third and fourth platform
    }
    timer ++; //increments the timer
    animateBar(); //calls the function that animates the barrel
    animateNpc(); //calls the function that animates the NPC
    animateHero(); //calls the function that animates the default hero setting (just standing there blinking)
    animateHeroLeft(); //calls the function that animates the hero moving to the left
    animateHeroRight(); //calls the function that animates the hero moving to the right
    animateHeroJump(); //calls the function that animates the hero jumping
    animateHeroClimb(); //calls the function that animates the hero climbing
    if ((stopClimb == true) && (goClimb == false) && (left == false) && (right == false) && (jump == false)) {
      heroStill();
    }
    count ++; //increments the counter
    if (count > 5) { //speed of the animation ... lower is faster
      frameIndex ++; //increases it over time
      count = 0; //resets the counter
    }
  }
  if (gameState == 2) { // Changes the level to final boss level
    ctx.clearRect(0,0,c.width,c.height); //resets the canvas and redraws everything
    gamer = 2; //keeps track of the gameState; use later for x and smooth return to where you left off
    if ((musicCount == 11)) { //starts the audio for boss level. Does it only once
      play(); //calls the function that doesn't play the music (upbeat) for level 1 anymore cause it's BOSS LEVEL
      play2(); //calls the function that plays the boss level (scary) music anymore cause it's BOSS LEVEL
    }
    if (musicCount < 20) { //stops the counting just so the browser doesn't get overloaded from counting so much and slows downt he game
      musicCount ++; //increments to get music to play
    }
    if ((rect.xPos < 200) && (rightGo == true)) { //puts the hero on top of the platform (move to the right)
      rect.xPos = 120;
    }
    if ((rect.yPos > plat.yPos) && (rightGo == true)) { //puts the hero on top of the platform (move it up)
      rect.yPos = plat.yPos + 300;
    }
    if (((rect.yPos + 1) + rect.width) <= c.height) { //makes sure that the rect doesn't 'sink' into the ground when it's rolling back and forth along the ground
      rect.yPos += grav; //calls gravity
    }
    noS = true; //turns off the s key so users can go "down"
    if (index == 0) { //only lets hero use one power orb at a time when attacking
      while (index < 1) {
        morePower(power.yPos, power.width, power.height, power.xMove, power.use); //calls the function that makes another powerball
        index ++;
      }
    }
    for (var i = 0; i < powArr.length; i++) { //goes through the power array
      if (powArr[i].use == true) { //limits the display of the power orbs
        drawPower(); //calls the function that draws the hero's power
        attack(); //calls the function that checks the hero's power and its usage
      }
      if (powArr.length > 0) { //turns off your power if you use power more than once
        powOff = true;
      }
      if (powArr.length == 0) { //resets the powOff switch so you can use your power again now
        powOff = false;
        noTrack = false;
      }
    }
    for (var i = 0; i < orbArr.length; i++) {
      if (orbArr[i].use == true) {
        orbPow(); //calls the function that draws and handle movement for the boss's power orb
      }
    }
    if (orbGo1 == true) { //calls the function to make an object that has the orb going to the right
      moreOrb(orb1.xPos, orb1.yPos, orb1.width, orb1.height, orb1.xMove, orb1.use);
    }
    if (orbGo2 == true) { //calls the function to make an object that has the orb going to the left
      moreOrb(orb2.xPos, orb2.yPos, orb2.width, orb2.height, orb2.xMove, orb2.use);
    }
    heroOrbCheck(); //calls the function that checks the collisions between the hero and the bad guy's orb
    bossMove(); //calls the function that makes the boss move left and right
    platCheck(rect); //calls the function that keeps the hero on the platform
    platBoss(); //calls the function that draws the platform for the boss level
    jumpCheck(); //calls the function that checks whether the jumping animation should be in use or not
    collideHeroBoss(); //calls the function that checks the collision between the hero and the boss
    animateHero(); //calls the function that animates the default hero setting (just standing there blinking)
    animateHeroLeft(); //calls the function that animates the hero moving to the left
    animateHeroRight(); //calls the function that animates the hero moving to the right
    animateHeroJump(); //calls the function that animates the hero jumping
    animateBossRun(); //calls the function that draws the boss running
    drawScore(); //calls the function that draws the hero's heart and life
    drawBadScore(); //calls the function that draws the boss's heart and life
    scoreKeeperGood(); //keeps track of the score and life and damage done to hero
    scoreKeeperBad(); //keeps track of the score and life and damage done to the boss
    //the next 3 ifs limit the number of jumps the hero can take to 2
    if (ind <= 1) { //lets hero jump
      jumper = true;
    }
    if (ind > 1) { //stops hero from jumping
      jumper = false;
    }
    if (rect.yPos == plat.yPos + 300) { //if the hero is touching/back on the platform/ground, let it jump again
      jumper = true;
      ind = 0;
    }
    count ++; //increments the counter
    if (count > 5) { //speed of the animation ... lower is faster
      frameIndex ++; //increases it over time
      count = 0; //resets the counter
    }
    if (end == true) { //if the hero dies from the score tracker, use game over screen
      drawEnd(); //calls the function that shows the game over screen
    }
    if (winner == true) { //if hero kills boss from boss score tracker, use winner screen
      drawWin(); //calls the function that shows the hero win screen
    }
    if (rect.yPos > plat.yPos + 360 + plat.height) { //if hero falls off the platform and is about to touch the bottom, game over screen is initiated
      end = true; // calls the function that shows the screen when the hero wins/defeats boss
    }
  }
  if (gameState == 3) {
    drawHelp(); //calls the function that draws the manual for the playing the game and the background
  }
  requestAnimationFrame(draw); //basically replaces the job of setInterval
}

moreLad(1); //calls the function that draw the number of ladders per row
draw(); //calls the draw function. It loops through now without the need for setInterval

document.addEventListener("keydown", work); //addEventListenerws users to hit a key on keyboard to interact with the objects
function work(e) { //this function makes the ball bounce (or change direction in the x direction) when a key is pressed
  if (e.key == "r") { //if you press the 'x' key, you will reload the page, thus restarting the game
    window.location.reload(); //this reloads the page
  }
  if (gamer == 0) { //if you clicked help while at start screen, you will return to it if you press x
    if (e.key == "h") {
      gameState = 3;
    }
    if (e.key == "x") {
      gameState = 0;
    }
  }
  if (gamer == 1) { //if you clicked help while playing game (level 1), you will return to it if you press x
    if (e.key == "h") {
      gameState = 3;
    }
    if (e.key == "x") {
      gameState = 1;
    }
  }
  if (gamer == 2) { //if you clicked help while at boss level, you will return to it if you press x
    if (e.key == "h") {
      gameState = 3;
    }
    if (e.key == "x") {
      gameState = 2;
    }
  }
}
c.addEventListener('click', function(event) { //this makes it possible for users to play the game
  if (gameState == 0) { //checks the game state
    gameState = 1; //this sets the screen of the canvas to the one that lets users play the game
  }
})
