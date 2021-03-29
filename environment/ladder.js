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

//this ladder is between the the top of the screen annnd the first platform
var lad3 = {xPos: 100, yPos: 0, width: 50, height: plat.yPos};
//this ladder is between the first and second platforms
var lad1 = {xPos: 700, yPos: plat.yPos, width: 50, height: 160}; //the x variable is the one set random
//this ladder is between the first and second platforms
var lad2 = {xPos: 700, yPos: plat.yPos+155, width: 50, height: 150}; //the x variable is the one set random
//this ladder is between the first and second platforms
var lad = {xPos: 700, yPos: plat.yPos+305, width: 50, height: 170}; //the x variable is the one set random

function drawLad(){
  ctx.save(); //saves the present condition/state of the image/game
  ctx.beginPath(); //starts drawing the screen
  ctx.drawImage(imgLad, lad.xPos, lad.yPos, lad.width, lad.height); //gives specifications for drawing it
  ctx.fill(); //fills the image/drawing
  ctx.stroke(); //finishes the drawing
  ctx.restore(); //reuses the saved image
}
