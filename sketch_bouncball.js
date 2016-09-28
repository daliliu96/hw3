var ballA_X = 230;
var ballA_Y = 330;
var speedA_X = 2;
var speedA_Y = 2;
var ballB_X = 330;
var ballB_Y = 230;
var speedB_X = -2;
var speedB_Y = 2;

function setup() {
  createCanvas(550,550);
  stroke(255);
  
}

function draw() {
  background(0, 7);
  ballA_X += speedA_X;
  ballA_Y += speedA_Y;
  ballB_X += speedB_X;
  ballB_Y += speedB_Y;
  if (ballA_X == 500 || ballA_X == 50){
    speedA_X = 0 - speedA_X;
  }
  if (ballA_Y == 500 || ballA_Y == 50){
    speedA_Y = 0 - speedA_Y;
  }
  if (ballB_X == 500 || ballB_X == 50){
    speedB_X = 0 - speedB_X;
  }
  if (ballB_Y == 500 || ballB_Y == 50){
    speedB_Y = 0 - speedB_Y;
  }
  ellipse(ballA_X, ballA_Y, 100);
  ellipse(ballB_X, ballB_Y, 100);
  
}
