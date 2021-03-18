class Ladder {
  constructor(xPos, yPos, width, height) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
  }
}

/*
class Pipes{
    constructor(pipeSetNum,pipeX,pipeYpoints,pipeGapY, gapWidth,pipeWidth,pipeHeight){
        this.pipeSetNum = pipeSetNum;//pipe number like a serial code
        this.pipeGapY = pipeGapY;//middle of the gap and the y value of it
        this.gapWidth = gapWidth;//middle of the pipe height gap width kind of value of it
        this.pipeHeight = pipeHeight;//Height of pipe
        this.pipeWidth = pipeWidth;//Width of pipe
        this.pipeX = pipeX;//x value of the pipe
        this.pipeYpoints = this.calculateGap(pipeGapY);//bottom pipe y value
    }
    calculateGap(gapY){
        if ((this.gapWidth % 2) == 0) {//if the gap is a even number
            var topHalf = (this.gapWidth/2)-1;//then make the gap have a shorter top part taller bottom
            var bottomHalf = this.gapWidth/2;
        }else{//else it is odd
            var topHalf = Math.floor(this.gapWidth/2)+1;//add one to top
            var bottomHalf = Math.floor(this.gapWidth/2);//gap width div by 2 is the bottom height
        }
            var topY = Math.abs(topHalf-this.pipeGapY);//make variable for implimentation perposes
            var bottomY = (topY+bottomHalf+this.gapWidth);//again
            var pipeObj = {topPipeY:topY,bottomPipeY:bottomY};//make a object
            return pipeObj;//return the object
    }
}
//@function makeNewPipes();
//@param px [integer] {restricted : value > 0,< canvas.width} : tells the function where to start the bottom pipe
//@param py [integer] {restricted : value > 0, < canvas.height} : tells the function what to use for the y value
//@param gy [integer] {recomended : value !== 0, !== canvas.height} : tells the function the center of the gap in the middle
//@param gw [integer] {restricted : value !== 0, !== canvas.height} : tells the function how big the gap is "Note:I relized i put width and just went with it"
//@param pw [integer] {restricted : value !== canvas.width} : tells the function what to use for the width of the pipe
//@param ph [integer] {restricted : value !== canvas.height, recommended : value !== 0} : Tells the function the height of the pipes as a base
function makeNewPipe(px,py,gy,gw,pw,ph) {
    numberOfTimes++;//indexing the pipes so they all have their own unique number value
    var newPipe = new Pipes(numberOfTimes,px,py,gy,gw,pw,ph);//Calls the class to make a new pipe
    pipeArray.push(newPipe);//pushing it to an array
    return newPipe;//returning it [wasn't needed still exists just in case if actually does matter];
}
*/
