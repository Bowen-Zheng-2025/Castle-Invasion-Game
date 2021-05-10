var rect = {xPos: 20, yPos: c.height - 150, width: 50, height: 50, xMove: 10, yMove: 50}; //gives specifications for drawing the rectangle
var grav = 0.5; //the gravity that pulls the hero down to the ground
const heroFrameWid = 51.5; //the width of a single frame for the hero spritesheet
const heroFrameHeight = 60; //the height of a single frame for the hero spritesheet
let frameIndexHero = 0; //counter for the frames for animation
var imgStill = new Image(); //basically creates the image
imgStill.onload = function(){ //uploads the image onto the screen
  heroStill(); //uses a function from below
}
imgStill.src="character/climbStop.png"; //source for where the image is coming from

/*heroStill()
draws a cannon for visual effects and for fun
*/
function heroStill(){
  ctx.save(); //saves the present condition/state of the image/game
  ctx.beginPath(); //starts drawing the screen
  ctx.drawImage(imgStill, rect.xPos+3, rect.yPos-17, rect.width*.8, rect.height*1.5); //gives specifications for drawing it
  ctx.fill(); //fills the image/drawing
  ctx.stroke(); //finishes the drawing
  ctx.restore(); //reuses the saved image
}

/*animateHero()
this function animates the hero standing there blinking in the game.
This is the default mode.
*/
function animateHero(){
  if ((right == false) && (left == false) && (jump == false) && (stopClimb == false) && (goClimb == false)) {
    //if everything else is not in use, sets hero blinking as default
    if (heroR == true) {
      heroSprite.src = "character/hero.png"; //calls the animation for the hero standing there and blinking
    }
    if (heroL == true) {
      heroSprite.src = "character/hero1.png"; //calls the animation for the hero standing there and blinking
    }
    ctx.drawImage(
      heroSprite,
      frameIndex * heroFrameWid,
      0, //first pixel on the y-axis
      heroFrameWid,
      heroFrameHeight,
      rect.xPos-10,
      rect.yPos-20,
      heroFrameWid * 1.2,
      heroFrameHeight * 1.2,
    );
  }
  if (frameIndex > 2) { //there are only 3 frames of hero blinking
    frameIndex = 0; //resets the frame for animation
  }
}

/*animateHeroClimb()
this function animates the hero climbing in the game
*/
function animateHeroClimb(){
  if ((climb == true) && (jump == false) && (goClimb == true)) { //makes sure that the hero jumping animation is not in use
    right = false; //turns off the animation for hero moving right
    left = false; //turns off the animation for the hero moving left
    heroSprite.src = "character/heroClimb.png"; //calls the animation that draws that hero climbing
    ctx.drawImage(
      heroSprite,
      frameIndex * 60,
      0, //first pixel on the y-axis
      60,
      80,
      rect.xPos-10,
      rect.yPos-20,
      60,
      80,
    );
    if (frameIndex > 3) { //there are only 4 frames of hero climbing
      frameIndex = 0; //resets the frame for the animation
    }
  }
}

/*animateHeroJump()
this function animates the hero jumping in the game
*/
function animateHeroJump(){
  if (jump == true) { //if the hero jumping boolean is used
    if (heroR == true) { //make hero face to the right
      heroSprite.src = "character/heroJump.png"; //calls the spritesheet that does the hero jumping animation
    }
    if (heroL == true) { //make hero face to the left
      heroSprite.src = "character/heroJump1.png"; //calls the spritesheet that does the hero jumping animation
    }
    ctx.drawImage(
      heroSprite,
      frameIndex,
      0, //first pixel on the y-axis
      36,
      50,
      rect.xPos,
      rect.yPos-20,
      36 * 1.5,
      50 * 1.5,
    );
  }
}

/*animateHeroLeft()
this function animates the hero moving to the left in the game
*/
function animateHeroLeft(){
  if ((left == true) && (jump == false)) { //makes sure that the jump animation is not in use
    heroSprite.src = "character/heroLeft.png"; //calls the hero moving left animation
    ctx.drawImage(
      heroSprite,
      frameIndex * 84, //the 84 is the hero's width
      0, //first pixel on the y-axis
      84,
      65, //the 64 is the hero's height
      rect.xPos-30,
      rect.yPos-10,
      84 * 1,
      65 * 1,
    );
    if (frameIndex > 7) { // there are only 8 frames for the animation
      frameIndex = 0; //resets the frames for the animation
    }
  }
}

/*animateHeroRight()
this function animates the hero moving right in the game
*/
function animateHeroRight(){
  if ((right == true) && (jump == false)) { //makes sure the hero jumping up animation is not in use
    heroSprite.src = "character/heroRight.png"; //uses the hero moving to the right animation
    ctx.drawImage(
      heroSprite,
      frameIndex * 84,
      0, //first pixel on the y-axis
      84,
      65,
      rect.xPos-30,
      rect.yPos-10,
      84 * 1,
      65 * 1,
    );
    if (frameIndex > 7) { // this spritesheet only has 8 frames
      frameIndex = 0; //resets the frames for animation
    }
  }
}

/*collideHeroBad()
is a collision checker between the hero/rect and the npc
*/
function collideHeroBad(){
  //this if checks for collision between the left, right, and bottom side of the hero compared to the npc
  if ((npc.xPos+npc.width>rect.xPos)&&(npc.xPos+npc.width<rect.xPos+rect.width)&&(rect.yPos+rect.height>npc.yPos)&&(rect.yPos<plat.yPos+305)) {
    console.log("Collision between hero and enemy detected"); //logs this out so that we know a collision happened
  }
}
