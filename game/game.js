var timer = 0; //keeps track of when to release another barrel into the game
var random = randNum(0,4); //gives a random number between 0 and 4
var spriteSheet = new Image(); //sets an image
var heroSprite = new Image(); //sets an image for the hero

/*draw()
contains all the functions creted in all the other files
it combines everything and is the 'brain' of the operation
this is basically the control center
*/
function draw(){
  ctx.clearRect(0,0,c.width,c.height); //resets the canvas and redraws everything
  if (noGrav == false) { //checks if gravity should be used or not
    if (((rect.yPos + 1) + rect.width) <= c.height) { //makes sure that the rect doesn't 'sink' into the ground when it's rolling back and forth along the ground
      rect.yPos += grav; //calls gravity
    }
  }
  drawPlat(); //calls the function that draws the platform
  drawLad(); //calls the function that draws the ladder
  drawCan(); //calls the function that draws the cannon that will 'fire' barrels
  collideBar(); //calls the function that checks the collision between the barrels and the walls of the canvas
  collideHeroBar(); //calls the function that checks for collisions between the hero and the barrel
  offLad(); //calls the function that checks if the hero is on the ladder or not. If not, enable gravity and colisions
  for (var i = 0; i < barArr.length; i++) { //goes through the barrel array
    if (barArr[i].yPos>470) { //after a specific time
      random = randNum(0,4); //gives a new random number
    }
  }
  if (go == true) {
    collideBarPlat(true, true, true, true); //calls the function that checks the collision between barrels and all the platforms
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
  jumpCheck(); //calls the function that checks whether the hero jumping animation should be used
  heroClimb(); //calls the function that checks wheteher the hero climbing animation is necessary (and turns off jumping if so)
  if (timer == 500) { //draws new barrels every second or two
    moreBar(barrel.xPos, barrel.yPos, barrel.rad, barrel.xMove, barrel.yMove); //calls the moreBar function
    timer = 0; //resets the timer
  }
  if (random == 0) { //if the random number is 0 ...
    barLad1(barArr, ladArr); //call the function that lets the barrel go down the ladder between the first and second platform
  }
  if (random == 1) { //if the random number is 1 ...
    barLad2(barArr, ladArr); //call the function that lets the barrel go down the ladder between the second and third platform
  }
  if (random == 2) { //if the random number is 2 ...
    barLad3(barArr, ladArr); //call the function that lets the barrel go down the ladder between the third and fourth platform
  }
  timer ++; //increments the timer
  animateBar(); //calls the function that animates the barrel
  animateNpc(); //calls the function that animates the NPC
  animateHero(); //calls the function that animates the default hero setting (just standing there blinking)
  animateHeroLeft(); //calls the function that animates the hero moving to the left
  animateHeroRight(); //calls the function that animates the hero moving to the right
  animateHeroJump(); //calls the function that animates the hero jumping
  animateHeroClimb(); //calls the function that animates the hero climbing
  if ((stopClimb == true) && (goClimb == false) && (left == false) && (right == false) && (jump == false)) {
    heroStill();
  }
  count ++; //increments the counter
  if (count > 5) { //speed of the animation ... lower is faster
    frameIndex ++; //increases it over time
    count = 0; //resets the counter
  }
  requestAnimationFrame(draw); //basically replaces the job of setInterval
}

moreLad(1); //calls the function that draw the number of ladders per row
draw(); //calls the draw function. It loops through now without the need for setInterval
