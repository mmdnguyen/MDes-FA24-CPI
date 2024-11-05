let shapeSize = 100;

function setup() {
  createCanvas(800, 800);
  noStroke();
  colorMode(HSB, width, 100, 100, 100);
  
  for (let x = 0; x < width; x += shapeSize) {
    for (let y = 0; y < height; y += shapeSize) {
      fill(random(100), random(100), 100);
      rect(x, y, shapeSize, shapeSize);
      
      fill(random(100), random(100), 100);
      circle(x + shapeSize / 2, y + shapeSize / 2, shapeSize);
      
      fill(random(100), random(100), 100);
      rect(x, y, shapeSize / 2, shapeSize / 2);
      
      fill(random(100), random(100), 100);
      rect(x, y + 50, shapeSize / 2, shapeSize / 2);
      
      fill(random(100), random(100), 100);
      arc(x, y, shapeSize, shapeSize, 0, HALF_PI);
      
      fill(random(100), random(100), 100);
      arc(x, y + shapeSize, shapeSize, shapeSize, PI + HALF_PI, TWO_PI);
      
      fill(random(100), random(100), 100);
      circle(x + shapeSize / 2, y + shapeSize / 2, shapeSize / 2.375);
    }
  }
}