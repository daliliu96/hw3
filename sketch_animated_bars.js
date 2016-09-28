var barHeight;
function setup() {
  createCanvas(800,500);
  stroke(255);
}

function draw() {
  background(0, 5);
  for (i = 0; i < 800; i += 10){
    barHeight = random(0, 400);
    line(i, 500, i, barHeight);
  }
  
}
