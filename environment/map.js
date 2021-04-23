var c = document.getElementById("myCanvas"); //loads the instructions/code from below into the canvas on the screen
var ctx = c.getContext("2d"); //gains access to drawing the shapes and stuff from below

/*collideBarPlat(go1, go2, go3, go4)
@param - go1 {boolean} - decides whether the collision checker between barrel and first platform should work or not
@param - go2 {boolean} - decides whether the collision checker between barrel and second platform should work or not
@param - go3 {boolean} - decides whether the collision checker between barrel and third platform should work or not
@param - go4 {boolean} - decides whether the collision checker between barrel and fourth platform should work or not
Checks for collisions between the barrel and the platform
*/
function collideBarPlat(go1, go2, go3, go4){
  for (var i = 0; i < barArr.length; i++) {
    if (go1 == true) {
      //checks for collision between barrel and top platform
      if ((barArr[i].xPos+barArr[i].rad<plat.xPos+plat.width)&&(barArr[i].yPos<plat.yPos)) {
        barArr[i].yMove = -1; //makes sure the barrel doesn't sink into the ground or rise up from it
      }
    }
    if (go2 == true) {
      //checks for collision between barrel and second platform
      if ((barArr[i].yPos+barArr[i].rad>plat.yPos+155)&&(barArr[i].xPos+barArr[i].rad>200)&&(barArr[i].yPos+barArr[i].rad<plat.yPos+155+plat.height)) {
        barArr[i].yMove = -1; //makes sure the barrel doesn't sink into the ground or rise up from it
      }
    }
    if (go3 == true) {
      //checks for collision between barrel and third platform
      if ((barArr[i].xPos+barArr[i].rad<plat.xPos+plat.width)&&(barArr[i].yPos+barArr[i].rad>plat.yPos+305)) {
        barArr[i].yMove = -1; //makes sure the barrel doesn't sink into the ground or rise up from it
      }
    }
    if (go4 == true) {
      //checks for collision between barrel and last/bottom platform
      if ((barArr[i].xPos+barArr[i].rad<plat.width+200)&&(barArr[i].yPos+barArr[i].rad>plat.yPos+470)) {
        barArr[i].yMove = -1; //makes sure the barrel doesn't sink into the ground or rise up from it
      }
    }
  }
}
