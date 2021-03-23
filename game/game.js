var c = document.getElementById("myCanvas"); //loads the instructions/code from below into the canvas on the screen
var ctx = c.getContext("2d"); //gains access to drawing the shapes and stuff from below

function draw() {
  ctx.clearRect(0, 0, c.width, c.height); //clears the screen
  drawRect();
  if (((rect.yPos + 1) + rect.width) <= c.height) { //makes sure that the rect doesn't 'sink' into the ground when it's rolling back and forth along the ground
    rect.yPos += grav;
  }
  drawPlat();
  drawBar();
  collideBallPlat();
  collideHeroPlat();
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
