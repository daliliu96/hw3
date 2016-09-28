var y = 0;
var ellipseSize = 25;
var isIncreasing = false;

function setup() {
  createCanvas(1000,1000);
  frameRate(30);
  noStroke()

}

function draw() {
  if (isIncreasing){
    ellipseSize += 1;
    if (ellipseSize == 25){
      isIncreasing = false;
    }
  }
  else{
    ellipseSize -= 1;
    if (ellipseSize == 0){
      isIncreasing = true;
    }
  }

  for(x = 25; x <= width; x += 25){
    if (x < width/2){
      for(y = 25; y < x; y += 25){
        ellipse(x, y, ellipseSize, ellipseSize);
      }
    }else{
      for (y = 25; y < width - x; y += 25){
        ellipse(x, y, ellipseSize, ellipseSize);
      }
    }
    }
    background(0, 7);
  }
