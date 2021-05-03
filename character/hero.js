var rect = {xPos: 20, yPos: c.height - 150, width: 50, height: 50, xMove: 10, yMove: 50}; //gives specifications for drawing the rectangle
var grav = 0.5;

function animateHero(){
  if ((right == false) && (left == false) && (jump == false) && (climb == false)) {
    heroSprite.src = "character/hero.png";
    ctx.drawImage(
      heroSprite,
      frameIndex * heroFrameWid,
      0, //first pixel on the y-axis
      heroFrameWid,
      heroFrameHeight,
      rect.xPos-10,
      rect.yPos-20,
      heroFrameWid * 1.2,
      heroFrameHeight * 1.2,
    );
  }
  if (frameIndex > 2) {
    frameIndex = 0;
  }
}
function animateHeroClimb(){
  if ((climb == true) && (jump == false)) {
    right = false;
    left = false;
    heroSprite.src = "character/heroClimb.png";
    ctx.drawImage(
      heroSprite,
      frameIndex * 60,
      0, //first pixel on the y-axis
      60,
      80,
      rect.xPos-10,
      rect.yPos-20,
      60,
      80,
    );
    if (frameIndex > 3) {
      frameIndex = 0;
    }
  }
}
function animateHeroJump(){
  if (jump == true) {
    heroSprite.src = "character/heroJump.png";
    ctx.drawImage(
      heroSprite,
      frameIndex,
      0, //first pixel on the y-axis
      36,
      50,
      rect.xPos,
      rect.yPos-20,
      36 * 1.5,
      50 * 1.5,
    );
  }
}
function animateHeroLeft(){
  if ((left == true) && (jump == false)) {
    heroSprite.src = "character/heroLeft.png";
    ctx.drawImage(
      heroSprite,
      frameIndex * 84, //the 84 is the hero's width
      0, //first pixel on the y-axis
      84,
      65, //the 64 is the hero's height
      rect.xPos-30,
      rect.yPos-10,
      84 * 1,
      65 * 1,
    );
    if (frameIndex > 7) {
      frameIndex = 0;
    }
  }
}
function animateHeroRight(){
  if ((right == true) && (jump == false)) {
    heroSprite.src = "character/heroRight.png";
    ctx.drawImage(
      heroSprite,
      frameIndex * 84,
      0, //first pixel on the y-axis
      84,
      65,
      rect.xPos-30,
      rect.yPos-10,
      84 * 1,
      65 * 1,
    );
    if (frameIndex > 7) {
      frameIndex = 0;
    }
  }
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
