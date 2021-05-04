var c = document.getElementById("myCanvas"); //loads the instructions/code from below into the canvas on the screen
var ctx = c.getContext("2d"); //gains access to drawing the shapes and stuff from below
var right = false; //boolean tracker to check if hero "moving right" animation should be implemented
var left = false; //boolean tracker to check if hero "moving left" animation should be implemented
var jump = false; //boolean tracker to check if hero "jumping up" animation should be implemented
var climb = false; //boolean tracker to check if hero "climbing up" animation should be implemented
var goClimb = false; //a second boolean tracker in addition to 'climb' to check if hero "climbing up" animation should be implemented
var stopClimb = false; //boolean tracker to check if hero "climbing up" still picture should be implemented (for animation effects)

/*collideHeroPlat()
checks for collisions between the hero and the platforms
*/
function collideHeroPlat(){
  for (var i = 0; i < ladArr.length; i++) {
    //checks for collision between hero and first/top platform
    if ((rect.xPos<plat.xPos+plat.width)&&(rect.yPos+rect.width>plat.yPos)&&(rect.yPos+rect.width<plat.yPos+plat.height)) {
      rect.yPos = plat.yPos - rect.height;
    }
    if ((rect.yPos<plat.yPos+plat.height)&&(rect.yPos>plat.yPos)&&(rect.xPos<plat.xPos+plat.width)) { //makes sure that no one can cheat by pressing up all the time
      rect.yPos = plat.yPos + 155 - rect.height;
    }
    //checks for collision between hero and second platform
    if ((rect.xPos+rect.width>200)&&(rect.yPos+rect.width>plat.yPos+155)&&(rect.yPos+rect.width<plat.yPos+155+plat.height)) {
      rect.yPos = plat.yPos + 155 - rect.height;
    }
    if ((rect.yPos<plat.yPos+155+plat.height)&&(rect.yPos>plat.yPos+155)&&(rect.xPos>200)) { //makes sure that no one can cheat by pressing up all the time
      rect.yPos = plat.yPos + 305 - rect.height;
    }
    //checks for collision between hero and third platform
    if ((rect.xPos<plat.xPos+plat.width)&&(rect.yPos+rect.width>plat.yPos+305)&&(rect.yPos+rect.width<plat.yPos+305+plat.height)) {
      rect.yPos = plat.yPos + 305 - rect.height;
    }
    if ((rect.yPos<plat.yPos+305+plat.height)&&(rect.yPos>plat.yPos+305)&&(rect.xPos<plat.xPos+plat.width)) { //makes sure that no one can cheat by pressing up all the time
      if ((ladArr[i].yPos >= plat.yPos+305)&&(rect.xPos>ladArr[i].xPos-20)&&(rect.xPos<ladArr[i].xPos+ladArr[i].width+20)) {
        rect.yPos = plat.yPos + 305 - rect.height;
      }else {
        rect.yPos = plat.yPos + 470 - rect.height;
      }
    }
    //checks for collision between hero and last/bottom platform
    if ((rect.yPos+rect.height>plat.yPos+470)) {
      rect.yPos = c.height - plat.height - rect.height;
    }
  }
}

/*collideHeroBar()
checks collisions between the hero and the barrels
*/
function collideHeroBar(){
  for (var i = 0; i < barArr.length; i++) {
    if ((rect.yPos<plat.yPos)&&(barArr[i].yPos<plat.yPos)&&(barArr[i].xPos+barArr[i].rad>rect.xPos)&&(rect.yPos+rect.height>barArr[i].yPos-barArr[i].rad)&&(barArr[i].xPos-barArr[i].rad<rect.xPos+rect.width)) {
      //this checks for collision between the barrel and rect only above first platform and only on the left side of the rect and right side of the barrel
      console.log("Collision detected above the first");
    }
    if ((rect.yPos>plat.height+plat.yPos)&&(barArr[i].yPos>plat.height+plat.yPos)&&(rect.yPos<plat.height+plat.yPos+155)&&(barArr[i].yPos<plat.height+plat.yPos+155)&&(barArr[i].xPos+barArr[i].rad>rect.xPos)&&(rect.yPos+rect.height>barArr[i].yPos-10)&&(barArr[i].xPos-barArr[i].rad<rect.xPos+rect.width)) {
      //this checks for collision between the barrel and rect only between the first and second platform and only on the side of the right rect and left side of the barrel
      console.log("Collision detected between first and second");
    }
    if ((rect.yPos<plat.yPos+305)&&(barArr[i].yPos<plat.yPos+305)&&(rect.yPos>plat.height+plat.yPos+155)&&(barArr[i].yPos>plat.height+plat.yPos+155)&&(barArr[i].xPos+barArr[i].rad>rect.xPos)&&(rect.yPos+rect.height>barArr[i].yPos-10)&&(rect.yPos+rect.height<barArr[i].yPos+barArr[i].rad)&&(barArr[i].xPos-barArr[i].rad<rect.xPos+rect.width)) {
      //this checks for collision between the barrel and rect only between the second and third platform and only on the left side of the rect and right side of the barrel
      console.log("Collision detected between second and third");
    }
    if ((rect.yPos>plat.height+plat.yPos+305)&&(barArr[i].yPos>plat.height+plat.yPos+305)&&(barArr[i].xPos+barArr[i].rad>rect.xPos)&&(rect.yPos+rect.height>barArr[i].yPos-10)&&(rect.yPos+rect.height<barArr[i].yPos+barArr[i].rad)&&(barArr[i].xPos-barArr[i].rad<rect.xPos+rect.width)) {
      //this checks for collision between the barrel and rect only between the third and bottom/fourth platform and only on the right side of the rect and left side of the barrel
      console.log("Collision detected between third and fourth");
    }
  }
}

/*jumpCheck()
this function checks to see if the hero should be jumping or not
*/
function jumpCheck(){
  //this if is if the hero is in between the third and fourth platform
  if ((rect.yPos>plat.yPos+plat.height+305)&&(rect.yPos+rect.height<plat.yPos+465)) {
    jump = true; //let the hero jump
  }
  //this if is if the hero is in between the second and third platform
  else if ((rect.yPos>plat.yPos+plat.height+155)&&(rect.yPos<plat.yPos+305)&&(rect.yPos+rect.height<plat.yPos+300)) {
    jump = true; //let the hero jump
  }
  //this if is if the hero is in between the first and second platform
  else if ((rect.yPos>plat.yPos+plat.height)&&(rect.yPos<plat.yPos+155)&&(rect.yPos+rect.height<plat.yPos+150)) {
    jump = true; //let the hero jump
  }
  //this if is if the hero is above the first platform
  else if ((rect.yPos<plat.yPos)&&(rect.yPos+rect.height<plat.yPos-5)) {
    jump = true; //let the hero jump
  }
  //this else if fixes a bug so that the hero can look like it's jumping when it's goes off the edge of the first platform
  else if ((rect.xPos>plat.width-10)&&(rect.yPos>0)&&(rect.yPos+rect.height<plat.yPos+150)) {
    jump = true; //let the hero jump
  }
  //this else if fixes a bug so that the hero can look like it's jumping when it's goes off the edge of the second platform
  else if ((rect.xPos<200)&&(rect.yPos>plat.yPos+plat.height)&&(rect.yPos+rect.height<plat.yPos+300)) {
    jump = true; //let the hero jump
  }
  //this else if fixes a bug so that the hero can look like it's jumping when it's goes off the edge of the third platform
  else if ((rect.xPos>plat.width-10)&&(rect.yPos>plat.yPos+plat.height+155)&&(rect.yPos+rect.height<plat.yPos+465)) {
    jump = true; //let the hero jump
  }
  //anything thing else that I didn't mention above that doesn't qualify the hero to jump, don't let it jump
  else {
    jump = false; //let the hero not jump
  }
}

/*heroClimb()
this functions checks to see if the hero should climb. If it does, stop the jumping animation
*/
function heroClimb(){
  for (var i = 0; i < ladArr.length; i++) { //goes through the ladder array
    if (rect.yPos>plat.yPos+plat.height+305) { //if the hero is below the third platform
      //if the hero is within the ladder's vicinity
      if ((ladArr[i].yPos==plat.yPos+305)&&(rect.xPos>ladArr[i].xPos-20)&&(rect.xPos+rect.width<ladArr[i].xPos+ladArr[i].width+20)) {
        climb = true; //use the hero climbing animation
        jump = false; //stop the hero jumping animation
      }
      //This manually turns off climbing animation if the hero is not in the ladder's vicinity
      if (rect.xPos < ladArr[i].xPos - 20) {
        climb = false; //stop the hero climbing animation
      }
      //This manually turns off climbing animation if the hero is not in the ladder's vicinity
      if (rect.xPos + rect.width > ladArr[i].xPos + ladArr[i].width + 20) {
        climb = false; //stop the hero climbing animation
      }
    }
    else if ((rect.yPos<plat.yPos+305)&&(rect.yPos>plat.yPos+plat.height+155)) { //if the hero is between the second and third platform
      //if the hero is within the ladder's vicinity
      if ((ladArr[i].yPos==plat.yPos+155)&&(rect.xPos>ladArr[i].xPos-20)&&(rect.xPos+rect.width<ladArr[i].xPos+ladArr[i].width+20)) {
        climb = true; //use the hero climbing animation
        jump = false; //stop the hero jumping animation
      }
      //This manually turns off climbing animation if the hero is not in the ladder's vicinity
      if ((rect.xPos < ladArr[i].xPos - 20) && (ladArr[i].yPos==plat.yPos+155)) {
        climb = false; //stop the hero climbing animation
      }
      //This manually turns off climbing animation if the hero is not in the ladder's vicinity
      if ((rect.xPos+rect.width>ladArr[i].xPos+ladArr[i].width+20) && (ladArr[i].yPos==plat.yPos+155)) {
        climb = false; //stop the hero climbing animation
      }
    }
    else if ((rect.yPos<plat.yPos+155)&&(rect.yPos>plat.yPos+plat.height)) { //if the hero is between the first and second platform
      //if the hero is within the ladder's vicinity
      if ((ladArr[i].yPos==plat.yPos)&&(rect.xPos>ladArr[i].xPos-20)&&(rect.xPos+rect.width<ladArr[i].xPos+ladArr[i].width+20)) {
        climb = true; //use the hero climbing animation
        jump = false; //stop the hero jumping animation
      }
      //This manually turns off climbing animation if the hero is not in the ladder's vicinity
      if ((rect.xPos < ladArr[i].xPos - 20) && (ladArr[i].yPos==plat.yPos)) {
        climb = false; //stop the hero climbing animation
      }
      //This manually turns off climbing animation if the hero is not in the ladder's vicinity
      if ((rect.xPos+rect.width>ladArr[i].xPos+ladArr[i].width+20) && (ladArr[i].yPos==plat.yPos)) {
        climb = false; //stop the hero climbing animation
      }
    }
    //anything other condition I didn't specify, turn off the climbing animation
    else {
      climb = false; //stop the hero climbing animation
    }
  }
}

document.addEventListener("keydown", makeMove); //addEventListenerws users to hit a key on keyboard to interact with the objects
function makeMove(e) {
  if ((e.key == "d") && (rect.xPos + rect.width < c.width)) { //lets hero move to the right
    right = true; //enables hero moving right animation
    rect.xPos += rect.xMove;
  }
  if ((e.key == "a") && (rect.xPos > 0)) { //lets hero move to the left
    left = true; //enables hero moving left animation
    rect.xPos -= rect.xMove;
  }
  //the problem is that I can only use one of these ifs at a time
  if (e.key == "w") { //lets the hero move up (basically jump)
    for (var i = 0; i < ladArr.length; i++){ //goes through the ladder array
      //this if checks if the hero is within the vicinity of ladder (which is between the third and fourth platform)
      if (rect.yPos>plat.yPos+305) {
        if ((ladArr[i].yPos==plat.yPos+305)&&(rect.xPos>ladArr[i].xPos-20)&&(rect.xPos+rect.width<ladArr[i].xPos+ladArr[i].width+20)) {
          rect.yMove = 5; //makes it climb slower so it looks cooler and for cool effects
          noGrav = true; //turns off gravity
          goClimb = true; //turns on the climbing animation
          stopClimb = true; //turns on the still image of hero
          if ((rect.yPos <= plat.yPos+305+plat.height)) { //checks to make sure that the hero moves past and lands on the third platform
            noGrav = false; //turns gravity back on
            goClimb = false; //turns on the climbing animation
            stopClimb = false; //turns on the still image of hero
            rect.yMove = 50; //reset the hero's distance it can move in the y direction
            rect.yPos = plat.yPos + 305 - rect.height; //lands on the next level (which is the third platform)
          }
        }
      }
      //this if checks if the hero is within the vicinity of ladder (which is between the second and third platform)
      if ((rect.yPos<plat.yPos+305)&&(rect.yPos>plat.yPos+155)) {
        if ((ladArr[i].yPos==plat.yPos+155)&&(rect.xPos>ladArr[i].xPos-20)&&(rect.xPos+rect.width<ladArr[i].xPos+ladArr[i].width+20)) {
          rect.yMove = 5; //makes it climb slower so it looks cooler and for cool effects
          noGrav = true; //turns off gravity
          goClimb = true; //turns on the climbing animation
          stopClimb = true; //turns on the still image of hero
          if ((rect.yPos <= plat.yPos+155+plat.height)) { //checks to make sure that the hero moves past and lands on the third platform
            noGrav = false; //turns gravity back on
            goClimb = false; //turns on the climbing animation
            stopClimb = false; //turns on the still image of hero
            rect.yMove = 50; //reset the hero's distance it can move in the y direction
            rect.yPos = plat.yPos + 155 - rect.height; //jumps to the next level (which is the second platform)
          }
        }
      }
      //this if checks if the hero is within the vicinity of ladder (which is between the first and second platform)
      if ((rect.yPos>plat.yPos)&&(rect.yPos<plat.yPos+155)) {
        if ((ladArr[i].yPos==plat.yPos)&&(rect.xPos>ladArr[i].xPos-20)&&(rect.xPos+rect.width<ladArr[i].xPos+ladArr[i].width+20)) {
          rect.yMove = 5; //makes it climb slower so it looks cooler and for cool effects
          noGrav = true; //turns off gravity
          goClimb = true; //turns on the climbing animation
          stopClimb = true; //turns on the still image of hero
          if ((rect.yPos <= plat.yPos+plat.height)) { //checks to make sure that the hero moves past and lands on the third platform
            noGrav = false; //turns gravity back on
            goClimb = false; //turns on the climbing animation
            stopClimb = false; //turns on the still image of hero
            rect.yMove = 50; //reset the hero's distance it can move in the y direction
            rect.yPos = plat.yPos - rect.height; //jumps to the next level (which is the first platform)
          }
        }
      }
    }
    rect.yPos -= rect.yMove; //allows the hero to jump up
  }
  if (e.key == "s") { //lets the hero climb down ladders
    for (var i = 0; i < ladArr.length; i++) { //goes through the ladder array
      //this if checks if the hero is within the vicinity of ladder (which is between the third and fourth platform)
      if (rect.yPos+rect.height>plat.yPos+300) { //if the rect is below the third platform, follow these steps
        if ((rect.yPos+rect.height+5>plat.yPos+305)&&(rect.yPos<plat.yPos+plat.height+305)&&(ladArr[i].yPos==plat.yPos+305)&&(rect.xPos>ladArr[i].xPos-20)&&(rect.xPos+rect.width<ladArr[i].xPos+ladArr[i].width+20)) {
          rect.yPos = plat.yPos+plat.height+305; //gives illusion that rect is moving down to the next ladder rung
        }
        rect.yMove = 5; //changes speed of hero climbing for cool effect
        noGrav = true; //turns off gravity
        goClimb = true; //turns on the climbing animation
        stopClimb = true; //turns on the still image of hero
      }
      //this if checks if the hero is within the vicinity of ladder (which is between the second and third platform)
      if (rect.yPos+rect.height>plat.yPos+150) { //if the rect is below the second platform, follow these steps
        if ((rect.yPos+rect.height+5>plat.yPos+155)&&(rect.yPos<plat.yPos+plat.height+155)&&(ladArr[i].yPos==plat.yPos+155)&&(rect.xPos>ladArr[i].xPos-20)&&(rect.xPos+rect.width<ladArr[i].xPos+ladArr[i].width+20)) {
          rect.yPos = plat.yPos+plat.height+155; //gives illusion that rect is moving down to the next ladder rung
        }
        rect.yMove = 5; //changes speed of hero climbing for cool effect
        noGrav = true; //turns off gravity
        goClimb = true; //turns on the climbing animation
        stopClimb = true; //turns on the still image of hero
      }
      //this if checks if the hero is within the vicinity of ladder (which is between the first and second platform)
      if (rect.yPos+rect.height>plat.yPos-5) { //if the rect is below the first platform, follow these steps
        if ((rect.yPos+rect.height+5>plat.yPos)&&(rect.yPos<plat.yPos+plat.height)&&(ladArr[i].yPos==plat.yPos)&&(rect.xPos>ladArr[i].xPos-20)&&(rect.xPos+rect.width<ladArr[i].xPos+ladArr[i].width+20)) {
          rect.yPos = plat.yPos+plat.height; //gives illusion that rect is moving down to the next ladder rung
        }
        rect.yMove = 5; //changes speed of hero climbing for cool effect
        noGrav = true; //turns off gravity
        goClimb = true; //turns on the climbing animation
        stopClimb = true; //turns on the still image of hero
      }
    } //end of the for loop for the 's' key

    rect.yPos += rect.yMove; //makes the hero move down ladder
  } //end of the e.key == 's' if statement
}

document.addEventListener("keyup", pauser); //addEventListenerws users to hit a key on keyboard to interact with the objects
function pauser(e){
  if (e.key == "d") { //if the player stop pressing the 'd' key, turn off the hero moving right animation
    right = false; //turns off the hero moving right animation
  }
  if (e.key == "a") { //if the player stop pressing the 'a' key, turn off the hero moving left animation
    left = false; //turns off the hero moving left animation
  }
  if (e.key == "w") { //if the player stop pressing the 'a' key, turn off the hero moving left animation
    goClimb = false; //turns off the hero moving left animation
  }
  if (e.key == "s") { //if the player stop pressing the 'a' key, turn off the hero moving left animation
    goClimb = false; //turns off the hero moving left animation
    if (rect.yPos<plat.yPos) { //fixes a bug so that when s is pressed, hero won't use climbing animation where there is no ladder
      stopClimb = false; //stops the heroclimb animation
      goClimb = false //stops heroclimb animation so that default setting is used
    }
  }
}
