var boss = {xPos: 1000, yPos:379, width:54, height:54, xMove:2}; //specification for drawing the boss and movement
var trackB = boss.xPos; //keeps track of the boss's movement so the orb shoots out at the boss's x position

/*animateBoss
does the animation for the boss running
*/
function animateBossRun(){
  ctx.drawImage( //uses the bossSheet of the knight and other condiions to animate the boss
    bossSheet,
    frameIndex * 100,
    0, //first pixel on the y-axis
    100,
    70,
    boss.xPos-5,
    boss.yPos-5,
    100 * 0.8,
    70 * 0.8,
  );
  if (frameIndex > 3) { //only let the frameIndex go through 3 times because there are only 3 frames
    frameIndex = 0; //resets it
  }
  if (boss.xMove == 2) { //if the boss is moving to the right, use the boss moving right animation
    bossSheet.src = "character/bossRight.png";
  }
  if (boss.xMove == -2) { //if the boss is moving to the left, use the boss moving left animation
    bossSheet.src = "character/bossLeft.png";
  }
}

/*bossMove()
makes the boss move back and forth on the third platform automatically
*/
function bossMove(){
  if ((boss.xPos + boss.width > plat.xPos + 100 + plat.width) || (boss.xPos <= plat.xPos + 100)) { //makes sure it doesn't move outside the canvas and the edge of the platform
    boss.xMove = -boss.xMove; //changes direction
  }
  boss.xPos += boss.xMove; //makes it move
  trackB = boss.xPos;
}
