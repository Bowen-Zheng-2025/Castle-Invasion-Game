/*
var c = document.getElementById("myCanvas"); //loads the instructions/code from below into the canvas on the screen
var ctx = c.getContext("2d"); //gains access to drawing the shapes and stuff from below

var imgBar = new Image(); //basically creates the image
imgBar.onload = function(){ //uploads the image onto the screen
  drawBar(); //uses a function from below
}
imgBar.src="environment/bar.png"; //source for where the image is coming from

var barrel = {xPos: 20, yPos: 20, rad: 25, xMove: 5, yMove: 5};
var gravity = 0.2; //Sets the gravity pulling the ball to the ground.

function drawBar (){
  ctx.save(); //saves the present condition/state of the image/game
  ctx.beginPath(); //starts drawing the screen
  ctx.drawImage(imgBar, barrel.xPos, barrel.yPos, 50, 50); //parameters for drawing the bird
  ctx.fill(); //fills the image/drawing
  ctx.stroke(); //finishes the drawing
  ctx.restore(); //reuses the saved image
}

function draw() {
  ctx.clearRect(0, 0, myCanvas.width, c.height); //clears the screen
  drawBar();
  drawPlat();
  if (barrel.xPos + barrel.xMove > c.width - barrel.rad || barrel.xPos + barrel.xMove < barrel.rad) { //If the circle's x position exceeds the width of the canvas...
    barrel.xMove = -barrel.xMove; //The ball's x direction will be flipped, and it will bounce a specific distance (damping).
  }

  if(barrel.yPos + barrel.yMove > c.height - barrel.rad || barrel.yPos + barrel.yMove < barrel.rad) { //If the circle's y position exceeds the height of the canvas...
    barrel.yMove = -barrel.yMove * damping; //Its y direction will be flipped, and it's speed will decrease.
  }

  barrel.yMove += gravity; //Adds the gravity value to the ball's dy value, giving it a artificial force of gravity.

  barrel.xPos += barrel.xMove;

  if (((barrel.yPos + barrel.yMove) + barrel.rad) <= c.height) {
    barrel.yPos += barrel.yMove;
  }
}

setInterval(draw, 10); //like a loop that repeats the draw function to keep drawing the shapes after 10 milliseconds
*/
