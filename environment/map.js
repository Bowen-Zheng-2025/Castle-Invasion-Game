var c = document.getElementById("myCanvas"); //loads the instructions/code from below into the canvas on the screen
var ctx = c.getContext("2d"); //gains access to drawing the shapes and stuff from below
var upKey = {xPos: 750, yPos: 55, width: 25, height: 25}; //gives the specifications for drawing the top key
var downKey = {xPos: 750, yPos: 522, width: 25, height: 25}; //gives the specifications for drawing the bottom key
var topper = true; //boolean tracker to use the key on the top platform
var downer = false; // boolean tracker to use the key on the bottom platform
var keyInd = 0; //index to keep track of when to stop using keys because the very top ladder is unlocked
var pass = false; //boolean tracker that decides whether or not the hero can pass through the top ladder to get to the boss level
var imgKey = new Image(); //basically creates the image
imgKey.onload = function(){ //uploads the image onto the screen
  drawKey(); //uses a function from below
}
imgKey.src="environment/key.png"; //source for where the image is coming from

/*drawKey(key1, key2)
@param - key {object} - contains all the specifications for drawing the key
this draws a blue rectangle that's suppose to represent a key (for now) that the hero has to collect
*/
function drawKey(key){
  ctx.beginPath();
  ctx.drawImage(imgKey, key.xPos, key.yPos, key.width, key.height);
  ctx.fillStyle = "blue";
  ctx.fill();
}

/*keyCheck(key1, key2)
@param - key1 {object} - contains all the specifications for drawing the first key (on the top platform)
@param - key2 {object} - contains all the specifications for drawing the second key (on the bottom platform)
this checks if the hero has touched the key or not, if so, switch the keys from top to bottom or vice versa
*/
function keyCheck(key1, key2){
  //this switches the key to the bottom when the top one is retrieved
  if ((topper == true)&&(rect.xPos+rect.width>key1.xPos)&&(rect.xPos<key1.xPos)&&(rect.yPos+rect.height>key1.yPos)&&(rect.yPos<key1.yPos)) {
    topper = false;
    downer = true;
    keyInd ++;
  }
  //this switches the key to the top when the bottom one is retrieved
  if ((downer == true)&&(rect.xPos+rect.width>key2.xPos)&&(rect.xPos<key2.xPos)&&(rect.yPos+rect.height>key2.yPos)&&(rect.yPos<key2.yPos)) {
    topper = true;
    downer = false;
    keyInd ++;
  }
}

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
