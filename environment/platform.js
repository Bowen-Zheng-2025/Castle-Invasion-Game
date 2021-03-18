var c = document.getElementById("myCanvas"); //loads the instructions/code from below into the canvas on the screen
var ctx = c.getContext("2d"); //gains access to drawing the shapes and stuff from below

var imgPlat = new Image(); //basically creates the image
imgPlat.onload = function(){ //uploads the image onto the screen
  drawPlat(); //uses a function from below
}
imgPlat.src="environment/plat.png"; //source for where the image is coming from

function drawPlat(){
  //top platform
  ctx.transform(1, 0.05, -0.05, 1, 50, -60);
  ctx.save(); //saves the present condition/state of the image/game
  ctx.beginPath(); //starts drawing the screen
  ctx.drawImage(imgPlat, -60, 50, 1150, 90); //gives specifications for drawing it
  ctx.fill(); //fills the image/drawing
  ctx.stroke(); //finishes the drawing
  ctx.restore(); //reuses the saved image
  //platform below the top
  ctx.transform(1, 0.05, -0.05, 1, 230, 120);
  ctx.save(); //saves the present condition/state of the image/game
  ctx.beginPath(); //starts drawing the screen
  ctx.drawImage(imgPlat, 120, 230, 1150, 90); //gives specifications for drawing it
  ctx.fill(); //fills the image/drawing
  ctx.stroke(); //finishes the drawing
  ctx.restore(); //reuses the saved image
  //plaform above the bottom platform
  ctx.transform(1, 0.05, -0.05, 1, -60, 340);
  ctx.save(); //saves the present condition/state of the image/game
  ctx.beginPath(); //starts drawing the screen
  ctx.drawImage(imgPlat, -60, 340, 1150, 90); //gives specifications for drawing it
  ctx.fill(); //fills the image/drawing
  ctx.stroke(); //finishes the drawing
  ctx.restore(); //reuses the saved image
  //platform on the bottom of the screen
  ctx.transform(1, 0.05, -0.05, 1, 520, 10);
  ctx.save(); //saves the present condition/state of the image/game
  ctx.beginPath(); //starts drawing the screen
  ctx.drawImage(imgPlat, 10, 520, 1300, 90); //gives specifications for drawing it
  ctx.fill(); //fills the image/drawing
  ctx.stroke(); //finishes the drawing
  ctx.restore(); //reuses the saved image
}

drawPlat();
