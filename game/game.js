var timer = 0; //keeps track of when to release another barrel into the game
var random = randNum(0,4);
var spriteSheet = new Image();
var heroSprite = new Image();

function frame(){
  ctx.clearRect(0,0,c.width,c.height);
  if (noGrav == false) { //checks if gravity should be used or not
    if (((rect.yPos + 1) + rect.width) <= c.height) { //makes sure that the rect doesn't 'sink' into the ground when it's rolling back and forth along the ground
      rect.yPos += grav;
    }
  }
  drawPlat(); //calls the function that draws the platform
  drawLad(); //calls the function that draws the ladder
  drawCan(); //calls the function that draws the cannon that will 'fire' barrels
  collideBar(); //calls the function that checks the collision between the barrels and the walls of the canvas
  collideHeroBar(); //calls the function that checks for collisions between the hero and the barrel
  offLad(); //calls the function that checks if the hero is on the ladder or not. If not, enable gravity and colisions
  for (var i = 0; i < barArr.length; i++) {
    if (barArr[i].yPos>470) {
      random = randNum(0,4);
    }
  }
  if (go == true) {
    collideBarPlat(true, true, true, true); //calls the function that checks the collision between barrels and all the platforms except the first
  }
  if (go1 == true) {
    collideBarPlat(false, true, true, true); //calls the function that checks the collision between barrels and all the platforms except the first
  }
  if (go2 == true) {
    collideBarPlat(true, false, true, true); //calls the function that checks the collision between barrels and all the platforms except the second
  }
  if (go3 == true) {
    collideBarPlat(true, true, false, true); //calls the function that checks the collision between barrels and all the platforms except the third
  }
  if (noCollision == false) {
    collideHeroPlat(); //calls the function that checks the collision between the hero and the platform
  }
  collideHeroBad(); //calls the function that checks the collision between the npc and the hero
  enemyMove(); //calls the function that makes the npc move back and forth automatically
  jumpCheck();
  heroClimb();
  if (timer == 500) { //draws new barrels every second or two
    moreBar(barrel.xPos, barrel.yPos, barrel.rad, barrel.xMove, barrel.yMove); //calls the moreBar function
    timer = 0; //resets the timer
  }
  if (random == 0) {
    barLad1(barArr, ladArr);
  }
  if (random == 1) {
    barLad2(barArr, ladArr);
  }
  if (random == 2) {
    barLad3(barArr, ladArr);
  }
  timer ++; //increments the timer
  animateBar();
  animateNpc();
  animateHero();
  animateHeroLeft();
  animateHeroRight();
  animateHeroJump();
  animateHeroClimb();
  count ++;
  if (count > 5) { //speed of the animation ... lower is faster
    frameIndex ++;
    count = 0;
  }
  requestAnimationFrame(frame);
}

frame();
moreLad(1); //calls the function that draw the number of ladders per row
