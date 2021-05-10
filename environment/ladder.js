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
var noGrav = false; //boolean tracker that turns on and off gravity
var noCollision = false; //boolean tracker that turn on and off collisions between the hero and the platforms

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

/*offLad()
checks to see if rect is off the ladder. If it is, enable gravity and collision checks
Also, this function turns off the climbing animation and the still image of the hero climbing
*/
function offLad(){
  for (var i = 0; i < ladArr.length; i++) { //goes through the ladder array
    //checks if the hero is not in the ladder's vicinity
    if ((rect.xPos<ladArr[i].xPos-20)||(rect.xPos+rect.width>ladArr[i].xPos+ladArr[i].width+20)) {
      //checks this between the third and fourth platform
      if ((ladArr[i].yPos==plat.yPos+305)&&(rect.yPos>plat.yPos+305)) {
        noGrav = false; //turns on gravity
        noCollision = false; //turns on collision checker
        stopClimb = false; //turns off the still picture of hero climbing (for animation effects)
        //if the hero is touching the ground
        if (rect.yPos + rect.height >= plat.yPos+420+plat.height) {
          rect.yMove = 50; //allows the hero to jump again instead of being stuck to the ground
        }
      }
      //if the hero and ladder are between the second and third platform. Also checks if hero is off the ladder
      if ((ladArr[i].yPos==plat.yPos+155)&&(plat.yPos+155<rect.yPos)&&(rect.yPos<plat.yPos+305)) {
        noGrav = false; //turns on gravity
        noCollision = false; //turns on collision
        stopClimb = false; //turns off the still picture of hero climbing (for animation effects)
        //if the hero is touching the ground
        if (rect.yPos + rect.height >= plat.yPos+250+plat.height) {
          rect.yMove = 50; //allows the hero to jump again instead of being stuck to the ground
        }
      }
      //if the hero and ladder are between the first and second platform. Also checks if hero is off the ladder
      if ((ladArr[i].yPos==plat.yPos)&&(plat.yPos<rect.yPos)&&(rect.yPos<plat.yPos+155)) {
        noGrav = false; //turns on gravity
        noCollision = false; //turns on collision
        stopClimb = false; //turns off the still picture of hero climbing (for animation effects)
        //if the hero is touching the ground
        if (rect.yPos + rect.height >= plat.yPos-5+plat.height) {
          rect.yMove = 50; //allows the hero to jump again instead of being stuck to the ground
        }
      }
    } //this is the end of the big if
  } //this is the end of the for loop
}

function gameChanger(){
  if (rect.yPos < plat.yPos) {
    if ((ladArr[0].yPos==0)&&(rect.xPos>ladArr[0].xPos-20)&&(rect.xPos+rect.width<ladArr[0].xPos+ladArr[0].width+20)) {
      gameState = 2;
    }
  }
}
