var c = document.getElementById("myCanvas"); //loads the instructions/code from below into the canvas on the screen
var ctx = c.getContext("2d"); //gains access to drawing the shapes and stuff from below

var rect = {xPos: 20, yPos: c.height - 50, width: 50, height: 50, xMove: 5, yMove: 20}; //gives specifications for drawing the rectangle
var gravity = 0.2;

function drawRect() {
  ctx.beginPath();
  ctx.rect(rect.xPos, rect.yPos, rect.width, rect.height);
  ctx.fill(); //Fills in the circle with the color provided in fillStyle.
  ctx.fillStyle = "#0095DD"; //Sets the color of the circle to light blue.
  ctx.stroke();
}

function draw() {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height); //clears the screen
  drawRect();
  if (rect.yPos + rect.height <= 0) { //this if is intended to use gravity, but it doesn't work
    rect.yPos += gravity; //find a different way to implement gravity
  }
}

setInterval(draw, 10); //like a loop that repeats the draw function to keep drawing the shapes after 10 milliseconds

document.addEventListener("keydown", makeMove); //addEventListenerws users to hit a key on keyboard to interact with the objects
function makeMove(e) {
  if ((e.key == "d") && (rect.xPos + rect.width <= c.width)) {
    rect.xPos += rect.xMove;
  }
  if ((e.key == "a") && (rect.xPos >= 0)) {
    rect.xPos -= rect.xMove;
  }
  if ((e.key == "w") && (rect.yPos + rect.height <= c.height)) {
    rect.yPos -= rect.yMove;
  }
}
