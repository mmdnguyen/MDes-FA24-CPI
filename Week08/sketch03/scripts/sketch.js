let radius = 0;
let turn = 0;
let brightness = 255;
let saturation = 150;
let shapeSize = 100;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 255, 100);
  background(255);
  
  for (let x = 0; x < width; x += shapeSize) {
    for (let y = 0; y < height; y += shapeSize) {
      noStroke();
      fill(random(200, 280), random(150, 200), 100);
      rect(x, y, shapeSize, shapeSize);
    }
  }
}

function draw() {
  strokeWeight(10);
  noFill();

  let cellSize = 200;
  let shapeHue = 200;

  for (let x = 0; x < width; x += cellSize) {
    shapeHue += 20;
    if (shapeHue > 280) shapeHue = 200;
    for (let y = 0; y < height; y += cellSize) {
      push();
      translate(x + cellSize / 2, y + cellSize / 2);
      
      stroke(shapeHue, saturation, brightness);
      ellipse(0, 0, radius, radius);
      rotate(radians(turn));
      rect(0, 0, 190 / 2, 5);
      
      fill(shapeHue, saturation, brightness);
      ellipse(0, 0, cellSize / 4, cellSize / 4);

      pop();
    }
  }

  radius += 5;
  if (radius > 190) {
    radius = 0;
  }
  
  saturation += 5;
  if(saturation > 200) {
    saturation = 100;
  }

  turn += 5;
}