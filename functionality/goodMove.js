var c = document.getElementById("myCanvas"); //loads the instructions/code from below into the canvas on the screen
var ctx = c.getContext("2d"); //gains access to drawing the shapes and stuff from below
var right = false;
var left = false;
var jump = false;
var climb = false;

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

function jumpCheck(){
  //this if is if the hero is in between the third and fourth platform
  if ((rect.yPos>plat.yPos+plat.height+305)&&(rect.yPos+rect.height<plat.yPos+465)) {
    jump = true;
  }
  //this if is if the hero is in between the second and third platform
  else if ((rect.yPos>plat.yPos+plat.height+155)&&(rect.yPos<plat.yPos+305)&&(rect.yPos+rect.height<plat.yPos+300)) {
    jump = true;
  }
  //this if is if the hero is in between the first and second platform
  else if ((rect.yPos>plat.yPos+plat.height)&&(rect.yPos<plat.yPos+155)&&(rect.yPos+rect.height<plat.yPos+150)) {
    jump = true;
  }
  //this if is if the hero is above the first platform
  else if ((rect.yPos<plat.yPos)&&(rect.yPos+rect.height<plat.yPos-5)) {
    jump = true;
  }
  else {
    jump = false;
  }
}

function heroClimb(){
  for (var i = 0; i < ladArr.length; i++) {
    if (rect.yPos>plat.yPos+plat.height+305) { //if the hero is below the third platform
      if ((ladArr[i].yPos==plat.yPos+305)&&(rect.xPos>ladArr[i].xPos-20)&&(rect.xPos+rect.width<ladArr[i].xPos+ladArr[i].width+20)) {
        climb = true;
        jump = false;
      }
    }
    else if ((rect.yPos<plat.yPos+305)&&(rect.yPos>plat.yPos+plat.height+155)) {
      if ((ladArr[i].yPos==plat.yPos+155)&&(rect.xPos>ladArr[i].xPos-20)&&(rect.xPos+rect.width<ladArr[i].xPos+ladArr[i].width+20)) {
        climb = true;
        jump = false;
      }
    }
    else if ((rect.yPos<plat.yPos+155)&&(rect.yPos>plat.yPos+plat.height)) {
      if ((ladArr[i].yPos==plat.yPos)&&(rect.xPos>ladArr[i].xPos-20)&&(rect.xPos+rect.width<ladArr[i].xPos+ladArr[i].width+20)) {
        climb = true;
        jump = false;
      }
    }
    else {
      climb = false;
    }
  }
}

document.addEventListener("keydown", makeMove); //addEventListenerws users to hit a key on keyboard to interact with the objects
function makeMove(e) {
  if ((e.key == "d") && (rect.xPos + rect.width < c.width)) { //lets hero move to the right
    right = true;
    rect.xPos += rect.xMove;
  }
  if ((e.key == "a") && (rect.xPos > 0)) { //lets hero move to the left
    left = true;
    rect.xPos -= rect.xMove;
  }
  //the problem is that I can only use one of these ifs at a time
  if (e.key == "w") { //lets the hero move up (basically jump)
    for (var i = 0; i < ladArr.length; i++){
      //this if checks if the hero is within the vicinity of ladder (which is between the third and fourth platform)
      if (rect.yPos>plat.yPos+305) {
        if ((ladArr[i].yPos==plat.yPos+305)&&(rect.xPos>ladArr[i].xPos-20)&&(rect.xPos+rect.width<ladArr[i].xPos+ladArr[i].width+20)) {
          rect.yMove = 5; //makes it climb slower so it looks cooler and for cool effects
          noGrav = true; //turns off gravity
          if ((rect.yPos <= plat.yPos+305+plat.height)) { //checks to make sure that the hero moves past and lands on the third platform
            noGrav = false; //turns gravity back on
            rect.yMove = 50;
            rect.yPos = plat.yPos + 305 - rect.height; //lands on the next level (which is the third platform)
          }
        }
      }
      //this if checks if the hero is within the vicinity of ladder (which is between the second and third platform)
      if ((rect.yPos<plat.yPos+305)&&(rect.yPos>plat.yPos+155)) {
        if ((ladArr[i].yPos==plat.yPos+155)&&(rect.xPos>ladArr[i].xPos-20)&&(rect.xPos+rect.width<ladArr[i].xPos+ladArr[i].width+20)) {
          rect.yMove = 5; //makes it climb slower so it looks cooler and for cool effects
          noGrav = true; //turns off gravity
          if ((rect.yPos <= plat.yPos+155+plat.height)) { //checks to make sure that the hero moves past and lands on the third platform
            noGrav = false; //turns gravity back on
            rect.yMove = 50;
            rect.yPos = plat.yPos + 155 - rect.height; //jumps to the next level (which is the second platform)
          }
        }
      }
      //this if checks if the hero is within the vicinity of ladder (which is between the first and second platform)
      if ((rect.yPos>plat.yPos)&&(rect.yPos<plat.yPos+155)) {
        if ((ladArr[i].yPos==plat.yPos)&&(rect.xPos>ladArr[i].xPos-20)&&(rect.xPos+rect.width<ladArr[i].xPos+ladArr[i].width+20)) {
          rect.yMove = 5; //makes it climb slower so it looks cooler and for cool effects
          noGrav = true; //turns off gravity
          if ((rect.yPos <= plat.yPos+plat.height)) { //checks to make sure that the hero moves past and lands on the third platform
            noGrav = false; //turns gravity back on
            rect.yMove = 50;
            rect.yPos = plat.yPos - rect.height; //jumps to the next level (which is the first platform)
          }
        }
      }
    }
    rect.yPos -= rect.yMove; //allows the hero to jump up
  }

  // for (var i = 0; i < ladArr.length; i++){
  //   //this if checks if the hero is within the vicinity of ladder (which is between the third and fourth platform)
  //   if (rect.yPos>plat.yPos+305) {
  //     if ((ladArr[i].yPos==plat.yPos+305)&&(rect.xPos>ladArr[i].xPos-20)&&(rect.xPos+rect.width<ladArr[i].xPos+ladArr[i].width+20)) {
  //       rect.yMove = 5; //makes it climb slower so it looks cooler and for cool effects
  //       noGrav = true; //turns off gravity
  //       if ((rect.yPos <= plat.yPos+305+plat.height)) { //checks to make sure that the hero moves past and lands on the third platform
  //         noGrav = false; //turns gravity back on
  //         rect.yMove = 50;
  //         rect.yPos = plat.yPos + 305 - rect.height; //lands on the next level (which is the third platform)
  //       }
  //     }
  //   }

  if (e.key == "s") { //lets the hero climb down ladders
    for (var i = 0; i < ladArr.length; i++) { //goes through the ladder array
      //this if checks if the hero is within the vicinity of ladder (which is between the third and fourth platform)
      if (rect.yPos+rect.height>plat.yPos+300) { //if the rect is below the third platform, follow these steps
        if ((rect.yPos+rect.height+5>plat.yPos+305)&&(rect.yPos<plat.yPos+plat.height+305)) {
          rect.yPos = plat.yPos+plat.height+305; //gives illusion that rect is moving down to the next ladder rung
        }
        rect.yMove = 5; //changes speed of hero climbing for cool effect
        noGrav = true; //turns off gravity
      }
      //this if checks if the hero is within the vicinity of ladder (which is between the second and third platform)
      if (rect.yPos+rect.height>plat.yPos+150) { //if the rect is below the second platform, follow these steps
        if ((rect.yPos+rect.height+5>plat.yPos+155)&&(rect.yPos<plat.yPos+plat.height+155)) {
          rect.yPos = plat.yPos+plat.height+155; //gives illusion that rect is moving down to the next ladder rung
        }
        rect.yMove = 5; //changes speed of hero climbing for cool effect
        noGrav = true; //turns off gravity
      }
      //this if checks if the hero is within the vicinity of ladder (which is between the first and second platform)
      if (rect.yPos+rect.height>plat.yPos-5) { //if the rect is below the second platform, follow these steps
        if ((rect.yPos+rect.height+5>plat.yPos)&&(rect.yPos<plat.yPos+plat.height)) {
          rect.yPos = plat.yPos+plat.height; //gives illusion that rect is moving down to the next ladder rung
        }
        rect.yMove = 5; //changes speed of hero climbing for cool effect
        noGrav = true; //turns off gravity
      }
    } //end of the for loop for the 's' key
    rect.yPos += rect.yMove; //makes the hero move down ladder
  } //end of the e.key == 's' if statement
}

document.addEventListener("keyup", pauser); //addEventListenerws users to hit a key on keyboard to interact with the objects
function pauser(e){
  if (e.key == "d") {
    right = false;
  }
  if (e.key == "a") {
    left = false;
  }
}
