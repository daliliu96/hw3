function setup() {
  createCanvas(500, 500);
  noFill()
}

function draw() {
  for (i = 20; i < width; i += 10){
    ellipse(width/2, height/2, i);
  }
}
