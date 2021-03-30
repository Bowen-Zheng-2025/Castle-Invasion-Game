var c = document.getElementById("myCanvas"); //loads the instructions/code from below into the canvas on the screen
var ctx = c.getContext("2d"); //gains access to drawing the shapes and stuff from below

var rect = {xPos: 20, yPos: c.height - 150, width: 50, height: 50, xMove: 10, yMove: 50}; //gives specifications for drawing the rectangle
var grav = 1.5;

function drawRect() {
  ctx.beginPath();
  ctx.rect(rect.xPos, rect.yPos, rect.width, rect.height);
  ctx.fill(); //Fills in the circle with the color provided in fillStyle.
  ctx.fillStyle = "#0095DD"; //Sets the color of the circle to light blue.
  ctx.stroke();
}

function collideHeroPlat(){
  //checks for collision between hero and first/top platform
  if ((rect.xPos<plat.xPos+plat.width)&&(rect.yPos+rect.width>plat.yPos)&&(rect.yPos+rect.width<plat.yPos+plat.height)) {
    rect.yPos = plat.yPos - rect.height;
  }
  if ((rect.yPos<plat.yPos+plat.height)&&(rect.yPos>plat.yPos)&&(rect.xPos<plat.xPos+plat.width)) { //makes sure that no one can cheat by pressing up all the time by going through the platforms
    rect.yPos = plat.yPos + 305 - rect.height;
    rect.yPos = plat.yPos + 155 - rect.height;
  }
  //checks for collision between hero and second platform
  if ((rect.xPos+rect.width>200)&&(rect.yPos+rect.width>plat.yPos+155)&&(rect.yPos+rect.width<plat.yPos+155+plat.height)) {
    rect.yPos = plat.yPos + 155 - rect.height;
  }
  if ((rect.yPos<plat.yPos+155+plat.height)&&(rect.yPos>plat.yPos+155)&&(rect.xPos>200)) { //makes sure that no one can cheat by pressing up all the time by going through the platforms
    rect.yPos = plat.yPos + 305 - rect.height;
  }
  //checks for collision between hero and third platform
  if ((rect.xPos<plat.xPos+plat.width)&&(rect.yPos+rect.width>plat.yPos+305)&&(rect.yPos+rect.width<plat.yPos+305+plat.height)) {
    rect.yPos = plat.yPos + 305 - rect.height;
  }
  if ((rect.yPos<plat.yPos+305+plat.height)&&(rect.yPos>plat.yPos+305)&&(rect.xPos<plat.xPos+plat.width)) { //makes sure that no one can cheat by pressing up all the time by going through the platforms
    setTimeout(function () {
      }, by going through the platforms
    rect.yPos = plat.yPos + 305 - rect.height);
    rect.yPos = plat.yPos + 470 - rect.height;
  }
  //checks for collision between hero and last/bottom platform
  if ((rect.yPos+rect.width>plat.yPos+470)) {
    rect.yPos = c.height - plat.height - rect.height;
  }
}

function collisionBar(){
  if ((rect.xPos<Bar.xPos+Bar.width)&&(rect.yPos+rect.width>Bar.yPos)&&(rect.yPos+rect.width<.yPos+Bar.height)) {
    rect.yPos = Bar.yPos - rect.height;
  }
  if ((rect.yPos<Bar.yPos+Bar.height)&&(rect.yPos>Bar.yPos)&&(rect.xPos<Bar.xPos+Bar.width)) { //makes sure that no one can cheat by pressing up all the time by going through the platforms
    rect.yPos = Bar.yPos + 305 - rect.height;
    rect.yPos = Bar.yPos + 155 - rect.height;
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
public void paintComponent(Graphics g)// this is supposed to make the jump smoother and make it so we can continue movig forward while jumping but it doesnt work yet

{
    super.paintComponent(g);
    g.setColor("#0095DD".);
    g.fillRect(x, y, 30, 30);
    update();
}
private boolean[] KB = new boolean[4];
public void update(){
    if(KB[0] = true)
    {
        y -= 10;
    }
    if(KB[1] = true)
    {
        x -= 10;
    }
    if(KB[2] = true)
    {
        y += 10;
    }
    if(KB[3] = true)
    {
        x +=10;
    }
    repaint();
}

public void keyPressed(KeyEvent e) {
  if(e.getKeyCode() == KeyEvent.VK_W)
  {
      KB[0] = true;
  }
  if(e.getKeyCode() == KeyEvent.VK_A)
  {
      x -= 10;
  }
  if(e.getKeyCode() == KeyEvent.VK_S)
  {
      y += 10;
  }
  if(e.getKeyCode() == KeyEvent.VK_D)
  {
      x += 10;
  }
}
public void keyReleased(KeyEvent e) {

}

public void keyTyped(KeyEvent e) {
}
