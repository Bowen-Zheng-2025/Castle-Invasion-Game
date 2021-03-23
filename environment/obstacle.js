//still on the fence using the below function for creating multiple barrels in the game
class Barrel {
  constructor(xPos, yPos, rad, xMove, yMove) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.rad = rad
    this.xMove = xMove;
    this.yMove = yMove;
  }
}

/*collideBar()
Checks for the collisions between the barrels and the wall/ground of the game
*/
function collideBar(){
  if ((barrel.xPos + barrel.xMove + barrel.rad > c.width) || (barrel.xPos - barrel.rad < 0)) { //If the circle's x position exceeds the width of the canvas...
    barrel.xMove = -barrel.xMove; //The ball's x direction will be flipped, meaning it will go the opposite direction
  }
  if((barrel.yPos + barrel.yMove > c.height - barrel.rad) || (barrel.yPos + barrel.yMove < barrel.rad)) { //If the circle's y position exceeds the height of the canvas...
    barrel.yMove = -barrel.yMove; //Its y direction will be flipped, meaning it will go the opposite direction
  }
  if ((barrel.xPos - barrel.rad < 0) && (barrel.yPos + barrel.yMove + barrel.rad < c.height - plat.height+10) && (barrel.yPos + barrel.yMove + barrel.rad > plat.yPos + 305 + plat.height)) {
    //this if is very specific and checks to see if the barrel is rolling towards the bottom, left side of the screen
    barrel.xPos = 20; //resets the barrel's x pos to start from the top left
    barrel.yPos = 20; //resets the barrel's y pos to start from the top left
  }
  barrel.yMove += gravity; //adds gravity to the barrel, making it go downward
  barrel.xPos += barrel.xMove; //makes the barrel move from left to right
  if (((barrel.yPos + barrel.yMove) + barrel.rad) <= c.height) { //making sure the barrel doesn't sink into the ground
    barrel.yPos += barrel.yMove;
  }
}
