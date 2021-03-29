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

var imgCan = new Image(); //basically creates the image
imgCan.onload = function(){ //uploads the image onto the screen
  drawCan(); //uses a function from below
}
imgCan.src="environment/cannon.png"; //source for where the image is coming from

var cannon = {xPos: 15, yPos: 30, width: 60, height: 60}; //specifications for drawing a cannon, which will "shoot" out barrels

/*drawCan()
draws a cannon for visual effects and for fun
*/
function drawCan(){
  ctx.save(); //saves the present condition/state of the image/game
  ctx.beginPath(); //starts drawing the screen
  ctx.drawImage(imgCan, cannon.xPos, cannon.yPos, cannon.width, cannon.height); //gives specifications for drawing it
  ctx.fill(); //fills the image/drawing
  ctx.stroke(); //finishes the drawing
  ctx.restore(); //reuses the saved image
}

var imgBar = new Image(); //basically creates the image
imgBar.onload = function(){ //uploads the image onto the screen
  drawBar(); //uses a function from below
}
imgBar.src="environment/bar.png"; //source for where the image is coming from

var barArr = []; //an array that will contain all the info regarding barrels
var barrel = {xPos: 60, yPos: 20, rad: 20, xMove: 5, yMove: 5};
var barOne = {xPos: 60, yPos: 20, rad: 20, xMove: 5, yMove: 5};
barArr.push(barOne);
var gravity = 1; //Sets the gravity pulling the barrel towards the ground.

function moreBar (xPos, yPos, rad, xMove, yMove){
  var newBar = new Barrel(xPos, yPos, rad, xMove, yMove)
  barArr.push(newBar);
  return barArr;
}

/*drawBar()
draws the image of the barrel onto the 'circle'
*/
function drawBar (){
  for (var i = 0; i < barArr.length; i++) {
    ctx.save(); //saves the present condition/state of the image/game
    ctx.beginPath(); //starts drawing the screen
    ctx.drawImage(imgBar, barArr[i].xPos, barArr[i].yPos-15, barArr[i].rad*2, barArr[i].rad*2); //parameters for drawing the barrel
    ctx.fill(); //fills the image/drawing
    ctx.stroke(); //finishes the drawing
    ctx.restore(); //reuses the saved image
  }
}

/*collideBar()
Checks for the collisions between the barrels and the wall/ground of the game
*/
function collideBar(){
  for (var i = 0; i < barArr.length; i++) {
    if ((barArr[i].xPos + barArr[i].xMove + barArr[i].rad > c.width) || (barArr[i].xPos - barArr[i].rad < 0)) { //If the circle's x position exceeds the width of the canvas...
      barArr[i].xMove = -barArr[i].xMove; //The ball's x direction will be flipped, meaning it will go the opposite direction
    }
    if((barArr[i].yPos + barArr[i].yMove > c.height - barArr[i].rad) || (barArr[i].yPos + barArr[i].yMove < barArr[i].rad)) { //If the circle's y position exceeds the height of the canvas...
      barArr[i].yMove = -barArr[i].yMove; //Its y direction will be flipped, meaning it will go the opposite direction
    }
    if ((barArr[i].xPos - barArr[i].rad < 0) && (barArr[i].yPos + barArr[i].yMove + barArr[i].rad < c.height - plat.height+10) && (barArr[i].yPos + barArr[i].yMove + barArr[i].rad > plat.yPos + 305 + plat.height)) {
      //this if is very specific and checks to see if the barrel is rolling towards the bottom, left side of the screen
      barArr[i].xPos = -1000; //makes the barrel disappear off the screen
      barArr[i].yPos = 1000; //makes the barrel disappear off the screen and makes sure it never comes back
    }
    barArr[i].yMove += gravity; //adds gravity to the barrel, making it go downward
    barArr[i].xPos += barArr[i].xMove; //makes the barrel move from left to right
    if (((barArr[i].yPos + barArr[i].yMove) + barArr[i].rad) <= c.height) { //making sure the barrel doesn't sink into the ground
      barArr[i].yPos += barArr[i].yMove;
    }
  }

}
