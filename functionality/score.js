var scoring = 0; //keeps track of the damages done to the hero
var scoreBad = 0; //keeps track of the damages done to the bad guy
var end = false; //boolean tracker to see if hero died yet. If so, the game ends
var imgScore = new Image(); //basically creates the image
imgScore.onload = function(){ //uploads the image onto the screen
  drawScore(); //uses a function from below
}
function scoreKeeperGood(){
  if ((scoring <= 5) && (end == false)) {
    imgScore.src="functionality/heroLife.png"; //source for where the image is coming fro
  }
  if ((scoring <= 10) && (scoring > 5) && (end == false)) {
    imgScore.src="functionality/heroLife1.png"; //source for where the image is coming fro
  }
  if ((scoring <= 15) && (scoring > 10) && (end == false)) {
    imgScore.src="functionality/heroLife2.png"; //source for where the image is coming fro
  }
  if ((scoring <= 20) && (scoring > 15) && (end == false)) {
    imgScore.src="functionality/heroLife3.png"; //source for where the image is coming fro
  }
  if ((scoring <= 25) && (scoring > 20) && (end == false)) {
    imgScore.src="functionality/heroLife4.png"; //source for where the image is coming fro
  }
  if (scoring > 25) {
    end = true;
  }
}

function scoreKeeperBad(){
  if ((scoreBad <= 5) && (end == false)) {
    imgBadScore.src="functionality/bossLife.png"; //source for where the image is coming from
  }
  if ((scoreBad <= 10) && (scoreBad > 5) && (end == false)) {
    imgBadScore.src="functionality/bossLife1.png"; //source for where the image is coming from
  }
  if ((scoreBad <= 30) && (scoreBad > 10) && (end == false)) {
    imgBadScore.src="functionality/bossLife2.png"; //source for where the image is coming from
  }
  if ((scoreBad <= 40) && (scoreBad > 15) && (end == false)) {
    imgBadScore.src="functionality/bossLife3.png"; //source for where the image is coming from
  }
  if ((scoreBad <= 50) && (scoreBad > 20) && (end == false)) {
    imgBadScore.src="functionality/bossLife4.png"; //source for where the image is coming from
  }
}

var score = {xPos: 850, yPos: -40, width: 200, height: 150}; //specifications for drawing a score chart, which will "shoot" out barrels

/*drawScore()
draws a score chart for visual effects and for fun
*/
function drawScore(){
  ctx.save(); //saves the present condition/state of the image/game
  ctx.beginPath(); //starts drawing the screen
  ctx.drawImage(imgScore, score.xPos, score.yPos, score.width*1.5, score.height*1.5); //gives specifications for drawing it
  ctx.fill(); //fills the image/drawing
  ctx.stroke(); //finishes the drawing
  ctx.restore(); //reuses the saved image
}

var imgBadScore = new Image(); //basically creates the image
imgBadScore.onload = function(){ //uploads the image onto the screen
  drawBadScore(); //uses a function from below
}
var badScore = {xPos: 850, yPos: 20, width: 200, height: 150}; //specifications for drawing a score chart, which will "shoot" out barrels

/*drawScore()
draws a score chart for visual effects and for fun
*/
function drawBadScore(){
  ctx.save(); //saves the present condition/state of the image/game
  ctx.beginPath(); //starts drawing the screen
  ctx.drawImage(imgBadScore, badScore.xPos, badScore.yPos, badScore.width*1.5, badScore.height*1.5); //gives specifications for drawing it
  ctx.fill(); //fills the image/drawing
  ctx.stroke(); //finishes the drawing
  ctx.restore(); //reuses the saved image
}
