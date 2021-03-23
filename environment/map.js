var c = document.getElementById("myCanvas"); //loads the instructions/code from below into the canvas on the screen
var ctx = c.getContext("2d"); //gains access to drawing the shapes and stuff from below

var imgBar = new Image(); //basically creates the image
imgBar.onload = function(){ //uploads the image onto the screen
  drawBar(); //uses a function from below
}
imgBar.src="environment/bar.png"; //source for where the image is coming from

var barrel = {xPos: 20, yPos: 20, rad: 20, xMove: 5, yMove: 5};
var gravity = 1; //Sets the gravity pulling the barrel towards the ground.

/*drawBar()
draws the image of the barrel onto the 'circle'
*/
function drawBar (){
  ctx.save(); //saves the present condition/state of the image/game
  ctx.beginPath(); //starts drawing the screen
  ctx.drawImage(imgBar, barrel.xPos, barrel.yPos-15, barrel.rad*2, barrel.rad*2); //parameters for drawing the barrel
  ctx.fill(); //fills the image/drawing
  ctx.stroke(); //finishes the drawing
  ctx.restore(); //reuses the saved image
}

/*collideBarPlat()
Checks for collisions between the barrel and the platform
*/
function collideBarPlat(){
   //checks for collision between barrel and top platform
  if ((barrel.xPos+barrel.xMove+barrel.rad<plat.xPos+plat.width)&&(barrel.yPos+barrel.rad>plat.yPos)) {
    barrel.yMove = -1; //makes sure the barrel doesn't sink into the ground or rise up from it
  }
  if ((barrel.xPos+barrel.xMove+barrel.rad<plat.xPos+plat.width)&&(barrel.yPos-barrel.rad>plat.yPos)) {
    barrel.yMove = -barrel.yMove;
  }
  //checks for collision between barrel and second platform
  if ((barrel.yPos+barrel.yMove+barrel.rad>plat.yPos+155)&&(barrel.xPos+barrel.xMove+barrel.rad>200)&&(barrel.yPos+barrel.yMove+barrel.rad<plat.yPos+155+plat.height)) {
    barrel.yMove = -1; //makes sure the barrel doesn't sink into the ground or rise up from it
  }
  //checks for collision between barrel and third platform
  if ((barrel.xPos+barrel.xMove+barrel.rad<plat.xPos+plat.width)&&(barrel.yPos+barrel.rad>plat.yPos+305)) {
    barrel.yMove = -1; //makes sure the barrel doesn't sink into the ground or rise up from it
  }
  //checks for collision between barrel and last/bottom platform
  if ((barrel.xPos+barrel.xMove+barrel.rad<plat.width+200)&&(barrel.yPos+barrel.rad>plat.yPos+470)) {
    barrel.yMove = -1; //makes sure the barrel doesn't sink into the ground or rise up from it
  }
}
