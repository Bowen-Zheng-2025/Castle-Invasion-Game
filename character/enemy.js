var c = document.getElementById("myCanvas"); //loads the instructions/code from below into the canvas on the screen
var ctx = c.getContext("2d"); //gains access to drawing the shapes and stuff from below

var npc = {xPos: 20, yPos:355, width:30, height:30, xMove:2}; //specification for drawing the npc and movement

function animateNpc(){
  ctx.drawImage(
    spriteSheet,
    frameIndex * frameWidth,
    0, //first pixel on the y-axis
    frameWidth,
    frameHeight,
    npc.xPos-10,
    npc.yPos-15,
    frameWidth * scale,
    frameHeight * scale,
  );
  if (frameIndex > 2) {
    frameIndex = 0;
  }
  if (npc.xMove == 2) {
    spriteSheet.src = "character/rightknight.png";
  }
  if (npc.xMove == -2) {
    spriteSheet.src = "character/leftknight.png";
  }
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

const frameWidth = 40;
const frameHeight = 50;
const barFrameWid = 45;
const barFrameHeight = 50;
const heroFrameWid = 51.5;
const heroFrameHeight = 60;
const scale = 1.3; //changes the size of the image
const fps = 60;
const secondsToUpdate = 1 * fps;
let count = 0;
let frameIndex = 0;
let frameIndexHero = 0;
var height = c.height;

// function animate(){
//   ctx.drawImage(
//     spriteSheet,
//     frameIndex * frameWidth,
//     0, //first pixel on the y-axis
//     frameWidth,
//     frameHeight,
//     npc.xPos,
//     npc.yPos,
//     frameWidth * scale,
//     frameHeight * scale,
//   );
//   count ++;
//   if (count > 5) { //speed of the animation ... lower is faster
//     frameIndex ++;
//     count = 0;
//   }
//   if (frameIndex > 2) {
//     frameIndex = 0;
//   }
// }
// function frame(){
//   ctx.clearRect(0,0,c.width,c.height);
//   animate();
//   requestAnimationFrame(frame);
// }
// frame();
