var c = document.getElementById("myCanvas"); //loads the instructions/code from below into the canvas on the screen
var ctx = c.getContext("2d"); //gains access to drawing the shapes and stuff from below

var npc = {xPos: 20, yPos:355, width:30, height:30, xMove:2}; //specification for drawing the npc and movement

/*animateNpc()
this function animates the NPC in the game
*/
function animateNpc(){
  ctx.drawImage( //uses the spritesheet of the knight and other condiions to animate the NPC
    spriteSheet,
    frameIndex * frameWidth,
    0, //first pixel on the y-axis
    frameWidth,
    frameHeight,
    npc.xPos-10,
    npc.yPos-15,
    frameWidth * scale,
    frameHeight * scale,
  );
  if (frameIndex > 2) { //only let the frameIndex go through 3 times because there are only 3 frames
    frameIndex = 0; //resets it
  }
  if (npc.xMove == 2) { //if the NPC is moving to the right, use the npc moving right animation
    spriteSheet.src = "character/rightknight.png";
  }
  if (npc.xMove == -2) { //if the NPC is moving to the left, use the npc moving left animation
    spriteSheet.src = "character/leftknight.png";
  }
}

/*enemyMove()
makes the npc move back and forth on the third platform automatically
*/
function enemyMove(){
  if ((npc.xPos + npc.width > 1000) || (npc.xPos <= 0)) { //makes sure it doesn't move outside the canvas and the edge of the platform
    npc.xMove = -npc.xMove; //changes direction
  }
  npc.xPos += npc.xMove; //makes it move
}

const frameWidth = 40; //the width of a single frame in the image
const frameHeight = 50; //the height of a single frame in the image
const scale = 1.3; //changes the size of the image
const fps = 60; //frames per second
const secondsToUpdate = 1 * fps; //how long it takes to update
let count = 0; //a counter for when to reset certain variables
let frameIndex = 0; //keeps track of number of frames
var height = c.height; //basically the canvas's height
