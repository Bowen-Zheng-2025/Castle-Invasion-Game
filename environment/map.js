var c = document.getElementById("myCanvas"); //loads the instructions/code from below into the canvas on the screen
var ctx = c.getContext("2d"); //gains access to drawing the shapes and stuff from below

var imgBar = new Image(); //basically creates the image
imgBar.onload = function(){ //uploads the image onto the screen
  drawBar(); //uses a function from below
}
imgBar.src="environment/bar.png"; //source for where the image is coming from

var barrel = {xPos: 20, yPos: 20, rad: 20, xMove: 5, yMove: 5};
var gravity = 0.5; //Sets the gravity pulling the ball to the ground.
var damping = 0.1; //will be used later to dampen the speed of the ball

function drawBar (){
/*
  ctx.save(); //saves the present condition/state of the image/game
  ctx.beginPath(); //starts drawing the screen
  ctx.drawImage(imgBar, barrel.xPos, barrel.yPos, barrel.rad*2, barrel.rad*2); //parameters for drawing the bird
  ctx.fill(); //fills the image/drawing
  ctx.stroke(); //finishes the drawing
  ctx.restore(); //reuses the saved image
*/
  ctx.beginPath();
  ctx.arc(barrel.xPos, barrel.yPos, barrel.rad, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fill();
}

function collideBallPlat(){
   //checks for collision between barrel and top platform
  if ((barrel.xPos+barrel.xMove+barrel.rad<plat.xPos+plat.width)&&(barrel.yPos+barrel.rad>plat.yPos)) {
    barrel.yMove = -barrel.yMove;
  }
  if ((barrel.xPos+barrel.xMove-barrel.rad<plat.xPos+plat.width)&&(barrel.yPos+barrel.rad>plat.yPos+plat.height)&&(barrel.yPos+barrel.rad<plat.yPo)) {
    barrel.xMove = -barrel.xMove;

  }
   //checks for collision between barrel and second platform
  if ((barrel.xPos+barrel.xMove+barrel.rad<200+plat.width)&&(barrel.yPos+barrel.yMove+barrel.rad>plat.yPos+155)) {
    barrel.yMove = -barrel.yMove;
  }
}

function draw() {
  ctx.clearRect(0, 0, myCanvas.width, c.height); //clears the screen
  drawPlat();
  drawBar();
  collideBallPlat();
  if ((barrel.xPos + barrel.xMove > c.width - barrel.rad) || (barrel.xPos + barrel.xMove < barrel.rad)) { //If the circle's x position exceeds the width of the canvas...
    barrel.xMove = -barrel.xMove; //The ball's x direction will be flipped, and it will bounce a specific distance (damping).
  }

  if((barrel.yPos + barrel.yMove > c.height - barrel.rad) || (barrel.yPos + barrel.yMove < barrel.rad)) { //If the circle's y position exceeds the height of the canvas...
    barrel.yMove = -barrel.yMove * damping; //Its y direction will be flipped, and it's speed will decrease.
  }
  barrel.yMove += gravity; //Adds the gravity value to the ball's dy value, giving it a artificial force of gravity.
  barrel.xPos += barrel.xMove;

  if (((barrel.yPos + barrel.yMove) + barrel.rad) <= c.height) {
    barrel.yPos += barrel.yMove;
  }
}

setInterval(draw, 10); //like a loop that repeats the draw function to keep drawing the shapes after 10 milliseconds
