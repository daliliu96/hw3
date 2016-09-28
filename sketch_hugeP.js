var pSize = 500;

function setup() {
  createCanvas(500,500);
  stroke(255);
  background(0);

}

function draw() {
 

  for (var i = 20; i <= 480; i += 10){
    var startX = 20;
    var startY = i;
    var endX = i;
    var endY = 20;
    line(startX, startY, endX, endY);
  }
  
  for (var i = 20; i <= 480; i += 10){
    var startX = 480;
    var startY = i;
    var endX = i;
    var endY = 480;
    line(startX, startY, endX, endY);
  }
  
  textSize(pSize);
  noStroke();
  fill(0);
  text("P", 85, 430);
  
}var pSize = 500;

function setup() {
  createCanvas(500,500);
  stroke(255);
  background(0);

}

function draw() {
 

  pSize -= 1;
  for (var i = 20; i <= 480; i += 10){
    var startX = 20;
    var startY = i;
    var endX = i;
    var endY = 20;
    line(startX, startY, endX, endY);
  }
  
  for (var i = 20; i <= 480; i += 10){
    var startX = 480;
    var startY = i;
    var endX = i;
    var endY = 480;
    line(startX, startY, endX, endY);
  }
  
  textSize(pSize);
  noStroke();
  fill(0);
  text("P", 85, 430);
  
}
