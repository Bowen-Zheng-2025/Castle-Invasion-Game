var c = document.getElementById("myCanvas"); //loads the instructions/code from below into the canvas on the screen
var ctx = c.getContext("2d"); //gains access to drawing the shapes and stuff from below

var npc = {xPos: 20, yPos:355, width:30, height:30, xMove:2}; //specification for drawing the npc and movement

/*drawBad()
draws the npc using its specifications
*/
function drawBad(){
  ctx.beginPath(); //starts the drawing
  ctx.rect(npc.xPos, npc.yPos, npc.width, npc.height);
  ctx.fill(); //Fills in the object with the color provided in fillStyle.
  ctx.fillStyle = "#0095DD"; //Sets the color to light blue.
  ctx.stroke(); //finished the drawing
}

/*enemyMove()
makes the npc move back and forth on the third platform automatically
*/
function enemyMove(){
  if ((npc.xPos + npc.width > 1000) || (npc.xPos <= 0)) { //makes sure it doesn't move outside the canvas and the edge of the platform
    npc.xMove = -npc.xMove; //changes direction
  }
  npc.xPos += npc.xMove; //makes it move
}
