var c = document.getElementById("myCanvas"); //loads the instructions/code from below into the canvas on the screen
var ctx = c.getContext("2d"); //gains access to drawing the shapes and stuff from below

var imgBar = new Image(); //basically creates the image
imgBar.onload = function(){ //uploads the image onto the screen
  drawBar(); //uses a function from below
}
imgBar.src="environment/bar.png"; //source for where the image is coming from

var barrel = {xPos: 20, yPos: 20, rad: 20, xMove: 5, yMove: 5};
var gravity = 1; //Sets the gravity pulling the ball to the ground.
var damping = 0.1; //will be used later to dampen the speed of the ball

function drawBar (){
  ctx.save(); //saves the present condition/state of the image/game
  ctx.beginPath(); //starts drawing the screen
  ctx.drawImage(imgBar, barrel.xPos, barrel.yPos-15, barrel.rad*2, barrel.rad*2); //parameters for drawing the bird
  ctx.fill(); //fills the image/drawing
  ctx.stroke(); //finishes the drawing
  ctx.restore(); //reuses the saved image
}

function collideBallPlat(){
   //checks for collision between barrel and top platform
  if ((barrel.xPos+barrel.xMove+barrel.rad<plat.xPos+plat.width)&&(barrel.yPos+barrel.rad>plat.yPos)) {
    barrel.yMove = -1;
  }
  if ((barrel.xPos+barrel.xMove+barrel.rad<plat.xPos+plat.width)&&(barrel.yPos-barrel.rad>plat.yPos)) {
    barrel.yMove = -barrel.yMove;
  }
/* for later when hero is involved
  if ((barrel.xPos+barrel.rad<plat.xPos+plat.width)&&(barrel.yPos+barrel.rad<plat.yPos+plat.height)&&(barrel.yPos+barrel.rad>plat.yPos+10)) {
    barrel.xMove = -barrel.xMove;
  }
*/
  //checks for collision between barrel and second platform
  if ((barrel.yPos+barrel.yMove+barrel.rad>plat.yPos+155)&&(barrel.xPos+barrel.xMove+barrel.rad>200)&&(barrel.yPos+barrel.yMove+barrel.rad<plat.yPos+155+plat.height)) {
    barrel.yMove = -1;
  }
  //checks for collision between barrel and third platform
  if ((barrel.xPos+barrel.xMove+barrel.rad<plat.xPos+plat.width)&&(barrel.yPos+barrel.rad>plat.yPos+305)) {
    barrel.yMove = -1;
  }
  //checks for collision between barrel and last/bottom platform
  if ((barrel.xPos+barrel.xMove+barrel.rad<plat.width+200)&&(barrel.yPos+barrel.rad>plat.yPos+470)) {
    barrel.yMove = -1;
  }
}

function draw() {
  ctx.clearRect(0, 0, myCanvas.width, c.height); //clears the screen
  drawPlat();
  drawBar();
  collideBallPlat();
  if ((barrel.xPos + barrel.xMove + barrel.rad > c.width) || (barrel.xPos - barrel.rad < 0)) { //If the circle's x position exceeds the width of the canvas...
    barrel.xMove = -barrel.xMove; //The ball's x direction will be flipped, and it will bounce a specific distance (damping).
  }

  if((barrel.yPos + barrel.yMove > c.height - barrel.rad) || (barrel.yPos + barrel.yMove < barrel.rad)) { //If the circle's y position exceeds the height of the canvas...
    barrel.yMove = -barrel.yMove; //Its y direction will be flipped, and it's speed will decrease.
  }
  if ((barrel.xPos - barrel.rad < 0) && (barrel.yPos + barrel.yMove + barrel.rad < c.height - plat.height+10) && (barrel.yPos + barrel.yMove + barrel.rad > plat.yPos + 305 + plat.height)) {
    barrel.xPos = -1000;

  }
  barrel.yMove += gravity; //Adds the gravity value to the ball's dy value, giving it a artificial force of gravity.
  barrel.xPos += barrel.xMove;

  if (((barrel.yPos + barrel.yMove) + barrel.rad) <= c.height) {
    barrel.yPos += barrel.yMove;
  }
}

setInterval(draw, 10); //like a loop that repeats the draw function to keep drawing the shapes after 10 milliseconds
