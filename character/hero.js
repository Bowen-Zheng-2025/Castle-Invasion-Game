var rect = {xPos: 20, yPos: c.height - 150, width: 50, height: 50, xMove: 10, yMove: 50}; //gives specifications for drawing the rectangle
var grav = 0.5;

/*drawRect()
sets the specification for drawing the hero
*/
function drawRect() {
  ctx.beginPath(); //starts drawing it
  ctx.rect(rect.xPos, rect.yPos, rect.width, rect.height); //specifications for drawing it
  ctx.fill(); //Fills in the square with the color provided in fillStyle.
  ctx.fillStyle = "#0095DD"; //Sets the color of the square to light blue.
  ctx.stroke(); //finishes drawing it
}

/*collideHeroBad()
is a collision checker between the hero/rect and the npc
*/
function collideHeroBad(){
  //this if checks for collision between the left, right, and bottom side of the hero compared to the npc
  if ((npc.xPos+npc.width>rect.xPos)&&(npc.xPos+npc.width<rect.xPos+rect.width)&&(rect.yPos+rect.height>npc.yPos)&&(rect.yPos<plat.yPos+305)) {
    console.log("Collision between hero and enemy detected"); //logs this out so that we know a collision happened
  }
}
