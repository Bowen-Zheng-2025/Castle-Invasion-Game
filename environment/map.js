//MAKE SURE TO REVERT BACK THE GAME.HTML TO INCLUDE GOODMOVE.JS
var c = document.getElementById("myCanvas"); //loads the instructions/code from below into the canvas on the screen
var ctx = c.getContext("2d"); //gains access to drawing the shapes and stuff from below

var imgPlat = new Image(); //basically creates the image
imgPlat.onload = function(){ //uploads the image onto the screen
  drawPlat(); //uses a function from below
}
imgPlat.src="environment/plat.png"; //source for where the image is coming from

function drawPlat(){
  //ctx.rotate(0.08);
  ctx.save(); //saves the present condition/state of the image/game
  ctx.beginPath(); //starts drawing the screen
  ctx.drawImage(imgPlat, 0, 110, 1100, 90); //gives specifications for drawing it
  ctx.lineWidth = 5;
  ctx.strokeStyle = "black";
  ctx.fill(); //fills the image/drawing
  ctx.stroke(); //finishes the drawing
  ctx.restore(); //reuses the saved image
}

  drawPlat();
