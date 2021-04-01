var c = document.getElementById("myCanvas"); //loads the instructions/code from below into the canvas on the screen
var ctx = c.getContext("2d"); //gains access to drawing the shapes and stuff from below

var rect = {xPos: 20, yPos: c.height - 150, width: 50, height: 50, xMove: 10, yMove: 50}; //gives specifications for drawing the rectangle
var grav = 0.5;

function drawRect() {
  ctx.beginPath();
  ctx.rect(rect.xPos, rect.yPos, rect.width, rect.height);
  ctx.fill(); //Fills in the circle with the color provided in fillStyle.
  ctx.fillStyle = "#0095DD"; //Sets the color of the circle to light blue.
  ctx.stroke();
}

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

function collideHeroBar(){
  for (var i = 0; i < barArr.length; i++) {
    if ((rect.yPos<plat.yPos)&&(barArr[i].yPos<plat.yPos)&&(rect.xPos+rect.width>barArr[i].xPos-barArr[i].rad)&&(rect.yPos+rect.height>barArr[i].yPos)&&(barArr[i].rad+barArr[i].xPos>rect.xPos)) {
      //this checks for collision between the barrel and rect only above first platform and only on the left side of the rect and right side of the barrel
      console.log("Collision detected above the first");
    }
    if ((rect.yPos>plat.height+plat.yPos)&&(barArr[i].yPos>plat.height+plat.yPos)&&(rect.yPos<plat.height+plat.yPos+155)&&(barArr[i].yPos<plat.height+plat.yPos+155)&&(rect.xPos+rect.width>barArr[i].xPos-barArr[i].rad)&&(rect.yPos+rect.height>barArr[i].yPos)&&(barArr[i].rad+barArr[i].xPos>rect.xPos)) {
      //this checks for collision between the barrel and rect only between the first and second platform and only on the side of the right rect and left side of the barrel
      console.log("Collision detected between first and second");
    }
    if ((rect.yPos<plat.yPos+305)&&(barArr[i].yPos<plat.yPos+305)&&(rect.yPos>plat.height+plat.yPos+155)&&(barArr[i].yPos>plat.height+plat.yPos+155)&&(rect.xPos+rect.width>barArr[i].xPos-barArr[i].rad)&&(rect.yPos+rect.height>barArr[i].yPos)&&(barArr[i].rad+barArr[i].xPos>rect.xPos)) {
      //this checks for collision between the barrel and rect only between the second and third platform and only on the left side of the rect and right side of the barrel
      console.log("Collision detected between second and third");
    }
    if ((rect.yPos>plat.height+plat.yPos+305)&&(barArr[i].yPos>plat.height+plat.yPos+305)&&(rect.xPos+rect.width>barArr[i].xPos-barArr[i].rad)&&(rect.yPos+rect.height>barArr[i].yPos-barArr[i].rad)&&(barArr[i].rad+barArr[i].xPos>rect.xPos)) {
      //this checks for collision between the barrel and rect only between the third and bottom/fourth platform and only on the right side of the rect and left side of the barrel
      console.log("Collision detected between third and fourth");
    }
  }
}

document.addEventListener("keydown", makeMove); //addEventListenerws users to hit a key on keyboard to interact with the objects
function makeMove(e) {
  if ((e.key == "d") && (rect.xPos + rect.width <= c.width)) {
    rect.xPos += rect.xMove;
  }
  if ((e.key == "a") && (rect.xPos >= 0)) {
    rect.xPos -= rect.xMove;
  }
  if (e.key == "w") {
    rect.yPos -= rect.yMove;
  }
}
