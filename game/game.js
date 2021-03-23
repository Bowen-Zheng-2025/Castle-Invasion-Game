var c = document.getElementById("myCanvas"); //loads the instructions/code from below into the canvas on the screen
var ctx = c.getContext("2d"); //gains access to drawing the shapes and stuff from below

/*draw()
One 'big' function that pulls functions from every part of the other functions from other js files to make game work
*/
function draw() {
  ctx.clearRect(0, 0, c.width, c.height); //clears the screen
  drawRect(); //calls the function that draws the players
  if (((rect.yPos + 1) + rect.width) <= c.height) { //makes sure that the rect doesn't 'sink' into the ground when it's rolling back and forth along the ground
    rect.yPos += grav;
  }
  drawPlat(); //calls the function that draws the platform
  drawBar(); //calls the function that draws the barrel
  drawCan(); //calls the function that draws the cannon that will 'fire' barrels 
  collideBarPlat(); //calls the function that checks for collision between the barrel and platform
  collideHeroPlat(); //calls the function that checks for collisions between the hero and the platform
  collideBar(); //calls the function that checks for the collisions between the barrel and the 'walls/grounds' of the game/canvas/screen
}

setInterval(draw, 10); //like a loop that repeats the draw function to keep drawing the shapes/images after 10 milliseconds
