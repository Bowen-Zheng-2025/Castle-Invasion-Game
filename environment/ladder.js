//this contains all the specification for drawing my ladder
class Ladder {
  constructor(xPos, yPos, width, height) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
  }
}

var imgLad = new Image(); //basically creates the image
imgLad.onload = function(){ //uploads the image onto the screen
  drawLad(); //uses a function from below
}
imgLad.src="environment/ladder.png"; //source for where the image is coming from

var ladArr = [{xPos: 100, yPos: 0, width: 50, height: plat.yPos}]; //an array for pushing new ladder objects into
//@ ladArr[0] - this ladder is between the the top of the screen and the first platform, it will always be there

/*createLad (xPos, yPos, width, height)
@param - xPos {integer} - the x position of my ladder
@param - yPos {integer} - the y position of my ladder
@param - width {integer} - the size of my ladder in the x direction
@param - height {integer} - the size of my ladder in the y direction
@return - ladArr {array} - is an array of objects, where objects is the specifications for drawing my ladder
The purpose of this function is to create more ladders
*/
function createLad (xPos, yPos, width, height){
  var newLad = new Ladder(xPos, yPos, width, height); //stores the information for drawing a new ladder
  ladArr.push(newLad); //pushes it into my ladArr
  return ladArr;
}

/*moreLad(numEach)
@param - numEach {integer} - Gives you the number of ladder for each row
@return - this doesn't really return anything but piggybacks off of createLad
and its return, which is an array of objects: ladArr
*/
function moreLad (numEach){
  var index = 0; //keeps track of how many time the while loop should loop
  while (index < numEach) { //has to be less than numEach
    //this ladder is between the first and second platforms
    var lad1 = {xPos: Math.floor(Math.random() * (800 - 200) + 200), yPos: plat.yPos, width: 50, height: 160}; //the x variable is the one set random
    //this ladder is between the second and third platforms
    var lad2 = {xPos: Math.floor(Math.random() * (800 - 200) + 200), yPos: plat.yPos+155, width: 50, height: 150}; //the x variable is the one set random
    //this ladder is between the third and fourth platforms
    var lad3 = {xPos: Math.floor(Math.random() * (800 - 10) + 10), yPos: plat.yPos+305, width: 50, height: 170}; //the x variable is the one set random
    createLad(lad1.xPos, lad1.yPos, lad1.width, lad1.height); //creates the ladder between the first and second platform
    createLad(lad2.xPos, lad2.yPos, lad2.width, lad2.height); //creates the ladder between the second and third platform
    createLad(lad3.xPos, lad3.yPos, lad3.width, lad3.height); //creates the ladder between the third and fourth platform
    index ++; //increments
  }
}

/*drawLad()
all it does is loops through the ladArr and actually draws the ladders onto the screen
*/
function drawLad(){
  for (var i = 0; i < ladArr.length; i++) {
    ctx.save(); //saves the present condition/state of the image/game
    ctx.beginPath(); //starts drawing the screen
    ctx.drawImage(imgLad, ladArr[i].xPos, ladArr[i].yPos, ladArr[i].width, ladArr[i].height); //gives specifications for drawing it
    ctx.fill(); //fills the image/drawing
    ctx.stroke(); //finishes the drawing
    ctx.restore(); //reuses the saved image
  }
}
