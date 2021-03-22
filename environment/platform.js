//I need a collision check function between barrel and platform so that the barrel would bounce on the stones
var c = document.getElementById("myCanvas"); //loads the instructions/code from below into the canvas on the screen
var ctx = c.getContext("2d"); //gains access to drawing the shapes and stuff from below

var imgPlat = new Image(); //basically creates the image
imgPlat.onload = function(){ //uploads the image onto the screen
  drawPlat(); //uses a function from below
}
imgPlat.src="environment/plat.png"; //source for where the image is coming from

var plat = {xPos: 0, yPos:80, width: 1000, height: 50};

function drawPlat(){
  //top platform
  ctx.save(); //saves the present condition/state of the image/game
  ctx.beginPath(); //starts drawing the screen
  ctx.drawImage(imgPlat, plat.xPos, plat.yPos, plat.width, plat.height); //gives specifications for drawing it
  ctx.fill(); //fills the image/drawing
  ctx.stroke(); //finishes the drawing
  ctx.restore(); //reuses the saved image
  //platform below the top
  ctx.save(); //saves the present condition/state of the image/game
  ctx.beginPath(); //starts drawing the screen
  ctx.drawImage(imgPlat, 200, plat.yPos+155, plat.width, plat.height); //gives specifications for drawing it
  ctx.fill(); //fills the image/drawing
  ctx.stroke(); //finishes the drawing
  ctx.restore(); //reuses the saved image
  //plaform above the bottom platform
  ctx.save(); //saves the present condition/state of the image/game
  ctx.beginPath(); //starts drawing the screen
  ctx.drawImage(imgPlat, plat.xPos, plat.yPos+305, plat.width, plat.height); //gives specifications for drawing it
  ctx.fill(); //fills the image/drawing
  ctx.stroke(); //finishes the drawing
  ctx.restore(); //reuses the saved image
  //platform on the bottom of the screen
  ctx.save(); //saves the present condition/state of the image/game
  ctx.beginPath(); //starts drawing the screen
  ctx.drawImage(imgPlat, plat.xPos, plat.yPos+470, plat.width+200, plat.height); //gives specifications for drawing it
  ctx.fill(); //fills the image/drawing
  ctx.stroke(); //finishes the drawing
  ctx.restore(); //reuses the saved image
}

drawPlat();
