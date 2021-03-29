var c = document.getElementById("myCanvas"); //loads the instructions/code from below into the canvas on the screen
var ctx = c.getContext("2d"); //gains access to drawing the shapes and stuff from below

/*collideBarPlat()
Checks for collisions between the barrel and the platform
*/
function collideBarPlat(){
  for (var i = 0; i < barArr.length; i++) {
     //checks for collision between barrel and top platform
    if ((barArr[i].xPos+barArr[i].xMove+barArr[i].rad<plat.xPos+plat.width)&&(barArr[i].yPos+barArr[i].rad>plat.yPos)) {
      barArr[i].yMove = -1; //makes sure the barrel doesn't sink into the ground or rise up from it
    }
    if ((barArr[i].xPos+barArr[i].xMove+barArr[i].rad<plat.xPos+plat.width)&&(barArr[i].yPos-barArr[i].rad>plat.yPos)) {
      barArr[i].yMove = -barArr[i].yMove;
    }
    //checks for collision between barrel and second platform
    if ((barArr[i].yPos+barArr[i].yMove+barArr[i].rad>plat.yPos+155)&&(barArr[i].xPos+barArr[i].xMove+barArr[i].rad>200)&&(barArr[i].yPos+barArr[i].yMove+barArr[i].rad<plat.yPos+155+plat.height)) {
      barArr[i].yMove = -1; //makes sure the barrel doesn't sink into the ground or rise up from it
    }
    //checks for collision between barrel and third platform
    if ((barArr[i].xPos+barArr[i].xMove+barArr[i].rad<plat.xPos+plat.width)&&(barArr[i].yPos+barArr[i].rad>plat.yPos+305)) {
      barArr[i].yMove = -1; //makes sure the barrel doesn't sink into the ground or rise up from it
    }
    //checks for collision between barrel and last/bottom platform
    if ((barArr[i].xPos+barArr[i].xMove+barArr[i].rad<plat.width+200)&&(barArr[i].yPos+barArr[i].rad>plat.yPos+470)) {
      barArr[i].yMove = -1; //makes sure the barrel doesn't sink into the ground or rise up from it
    }
  }
}
