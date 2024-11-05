let diameter = 100;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, width, 100, 100, 100);
  
  let blendModes = [
    BLEND,
    ADD,
    DARKEST,
    LIGHTEST,
    EXCLUSION,
    MULTIPLY,
    SCREEN,
    REPLACE,
    REMOVE,
    DIFFERENCE,  //2D only
    OVERLAY,     //2D only
    HARD_LIGHT,  //2D only
    SOFT_LIGHT,  //2D only
    DODGE,       //2D only
    BURN,        //2D only
    SUBTRACT     //2D only
  ];
  
  blendMode(blendModes[3]);
  
  noStroke();
  background(0);
  
  let numColumns = floor(width / diameter);
  let circleHDist = width / numColumns;
  let numRows = floor(height / diameter);
  let circleVDist = height / numRows;
  
  for (let x = 0; x < numColumns; x++) {
    let cellX = x * circleHDist;
    for (let y = 0; y < numRows; y++) {
      let cellY = y * circleVDist;
      let circlePosX = cellX + circleHDist * 0.5;
      let circlePosY = cellY + circleVDist * 0.5;

      fill(cellX, 50, 60, 30);
      rect(cellX, cellY, diameter, diameter);
      
      fill(circlePosX, 80, 80, 30);
      circle(circlePosX, circlePosY, diameter);
      
      push();
      translate(circlePosX, circlePosY);
      rotate(PI / 4);
      fill(circlePosX, 100, 80, 60);
      square(-diameter / 2 * sqrt(2) / 2, -diameter / 2 * sqrt(2) / 2, diameter / sqrt(2));
      pop();
    }
  }
}
