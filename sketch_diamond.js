function setup() {
  createCanvas(500,500);
}

function draw() {
  for (i = 0; i < 250; i += 10){
    line((width/2)-i, i, (width/2)+i, i);
  }
  for (i = 0; i <= 250; i += 10){
    line((width/2)-i, height-i, (width/2)+i, height - i);
  }
  
}
