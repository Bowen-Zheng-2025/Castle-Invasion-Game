//contains specification for the drawing my attack and will be used later in other function
class Power {
  constructor(yPos, width, height, xMove, use) {
    this.yPos = yPos;
    this.width = width
    this.height = height;
    this.xMove = xMove;
    this.use = use;
  }
}

var powArr = [];
//an array that will contain all the info regarding power
var power = {yPos: 390, width: 25, height: 25, xMove: 5, use: true};
//contains the specifications for the drawing the power later

/*morePower (yPos, width, height, xMove)
@param - yPos {integer} - the y position of my power
@param - width {integer} - the size of my power in the x direction
@param - height {integer} - the size of my power in the y direction
@return - powArr {array} - is an array of objects, where objects is the specifications for drawing my power
The purpose of this function is to create more power attacks
*/
function morePower (yPos, width, height, xMove, use){
  var newPow = new Power(yPos, width, height, xMove, use); //calls on the class for drawing the power
  powArr.push(newPow); //pushes new power into array to go through in other for loops
  return powArr;
}

var imgPow = new Image(); //basically creates the image
imgPow.onload = function(){ //uploads the image onto the screen
  drawPower(); //uses a function from below
}

/*drawPower()
draws a power orb for visual effects and for fun
*/
function drawPower(){
  if (rHero == true) {
    imgPow.src="functionality/powR.png"; //source for where the image is coming from
  }
  if (lHero == true) {
    imgPow.src="functionality/powL.png"; //source for where the image is coming from
  }
  for (var i = 0; i < powArr.length; i++) { //goes through the powArr array
    ctx.save(); //saves the present condition/state of the image/game
    ctx.beginPath(); //starts drawing the screen
    ctx.drawImage(imgPow, trackX, powArr[i].yPos, powArr[i].width, powArr[i].height); //gives specifications for drawing it
    ctx.fill(); //fills the image/drawing
    ctx.stroke(); //finishes the drawing
    ctx.restore(); //reuses the saved image
  }
}

/*attack()
determines the direction and movement of the power orb when the space bar is pressed
*/
function attack(){
  for (var i = 0; i < powArr.length; i++) { //goes through the powArr array
    if (rHero == true) { //makes the power orb go to the right because the hero is facing right
      trackX += powArr[i].xMove; //makes the power orb square move from left to right
      if (trackX > c.width) { //puts the power objects into the garbage when it's off screen
        garbage.push(powArr.shift());
      }
    }
    if (lHero == true) { //makes the power orb go to the left because the hero is facing left
      trackX -= powArr[i].xMove; //makes the power orb square move from left to right
      if (trackX < 0) { //puts the power objects into the garbage when it's off screen
        garbage.push(powArr.shift());
      }
    }
    if ((trackX < boss.xPos + boss.width) && (trackX > boss.xPos)) {
      garbage.push(powArr.shift());
      scoreBad++;
    }
  }
}
