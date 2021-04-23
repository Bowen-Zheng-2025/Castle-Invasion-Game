//contains specification for the drawing my Barrel and will be used later in other function
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

var barArr = [{xPos: 60, yPos: 50, rad: 20, xMove: 3, yMove: 10}];
//an array that will contain all the info regarding barrels
//@barArr also contains a preset object --> barArr[0];
var barrel = {xPos: 60, yPos: 50, rad: 20, xMove: 3, yMove: 10};
//contains the specifications for the drawing the barrels later
var gravity = 1; //Sets the gravity pulling the barrel towards the ground.

var barSprite = new Image();
barSprite.src = "environment/barRight.png";

function animateBar(){
  for (var i = 0; i < barArr.length; i++) {
    ctx.drawImage(
      barSprite,
      frameIndex * barFrameWid,
      0, //first pixel on the y-axis
      barFrameWid,
      barFrameHeight,
      barArr[i].xPos-20,
      barArr[i].yPos-20,
      barFrameWid,
      barFrameHeight,
    );
  }
  if (frameIndex > 3) {
    frameIndex = 0;
  }
}

/*moreBar (xPos, yPos, rad, xMove, yMove)
@param - xPos {integer} - the x position of my barrel
@param - yPos {integer} - the y position of my barrel
@param - width {integer} - the size of my barrel in the x direction
@param - height {integer} - the size of my barrel in the y direction
@return - barArr {array} - is an array of objects, where objects is the specifications for drawing my barrel
The purpose of this function is to create more barrels
*/
function moreBar (xPos, yPos, rad, xMove, yMove){
  var newBar = new Barrel(xPos, yPos, rad, xMove, yMove); //calls on the class for drawing barrels
  barArr.push(newBar); //pushes new barrel into array to go through in other for loops
  return barArr;
}

/*collideBar()
Checks for the collisions between the barrels and the wall/ground of the game
*/
function collideBar(){
  for (var i = 0; i < barArr.length; i++) { //goes through my barArr array to look for barrels to check collisions with  with
    if ((barArr[i].xPos + barArr[i].xMove + barArr[i].rad > c.width) || (barArr[i].xPos - barArr[i].rad < 0)) { //If the circle's x position exceeds the width of the canvas...
      barArr[i].xMove = -barArr[i].xMove; //The ball's x direction will be flipped, meaning it will go the opposite direction
    }
    if((barArr[i].yPos + barArr[i].yMove > c.height - barArr[i].rad) || (barArr[i].yPos + barArr[i].yMove < barArr[i].rad)) { //If the circle's y position exceeds the height of the canvas...
      barArr[i].yMove = -barArr[i].yMove; //Its y direction will be flipped, meaning it will go the opposite direction
    }
    if ((barArr[i].xPos - barArr[i].rad < 10) && (barArr[i].yPos + barArr[i].rad < c.height) && (barArr[i].yPos + barArr[i].rad > plat.yPos + 305 + plat.height)) {
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

/*randNum(min, max)
@param - min {integer} - is a minimum
@param - max {integer} - is a maximum
@return - {integer} - gives a random number between the maximum and the minimum
*/
function randNum(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

var go = true;
var go1 = false;
var go2 = false;
var go3 = false;
var go4 = false;
/*barLad1(bar, lad)
@param - bar {arr} - contains an array of the barrels
@param - lad {arr} - contains an array of the ladders
*/
function barLad1(bar, lad){
  for (var i = 0; i < bar.length; i++) {
    for (var j = 0; j < lad.length; j++) {
      if ((lad[j].yPos==plat.yPos)&&(bar[i].yPos<plat.yPos+plat.height)) {
        if ((bar[i].xPos>lad[j].xPos)&&(bar[i].xPos<lad[j].xPos+lad[j].width)) {
          go1 = true;
          go = false;
        }
      }
      if ((bar[i].yPos-bar[i].rad>plat.yPos+plat.height)&&(bar[i].yPos+bar[i].rad<plat.yPos+155)) {
        go1 = false;
        go = true;
      }
    }
  }
}
function barLad2(bar, lad){
  for (var i = 0; i < bar.length; i++) {
    for (var j = 0; j < lad.length; j++) {
      if ((lad[j].yPos==plat.yPos+155)&&(bar[i].yPos>plat.yPos+plat.height)&&(bar[i].yPos<plat.yPos+155)) {
        if ((bar[i].xPos>lad[j].xPos)&&(bar[i].xPos<lad[j].xPos+lad[j].width)) {
          go2 = true;
          go = false;
        }
      }
      if ((bar[i].yPos-bar[i].rad>plat.yPos+plat.height+155)&&(bar[i].yPos+bar[i].rad<plat.yPos+305)) {
        go2 = false;
        go = true;
      }
    }
  }
}
function barLad3(bar, lad){
  for (var i = 0; i < bar.length; i++) {
    for (var j = 0; j < lad.length; j++) {
      if ((lad[j].yPos==plat.yPos+305)&&(bar[i].yPos>plat.yPos+plat.height+155)&&(bar[i].yPos<plat.yPos+305)) {
        if ((bar[i].xPos>lad[j].xPos)&&(bar[i].xPos<lad[j].xPos+lad[j].width)) {
          go3 = true;
          go = false;
        }
      }
      if ((bar[i].yPos-bar[i].rad>plat.yPos+plat.height+305)&&(bar[i].yPos+bar[i].rad<plat.yPos+470)) {
        bar[i].yPos = c.height - plat.height - bar[i].rad
        go3 = false;
        go = true;
      }
    }
  }
}
