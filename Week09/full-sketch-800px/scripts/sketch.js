let startTime;

let gridSize = 25;
let brightness = [100, 75, 50];
let hues = [30, 240, 210];

let shootingStarAngle = 0;
let shootingStarDistance;

let moonAngle = 0;

function setup() {
  // createCanvas(2000, 2000);
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
  
  shootingStarDistance = height / (4 / 3);
  
  startTime = millis();
  // console.log(startTime);
  
  // drawGrid();
}

function draw() {
  let elapsedTime = millis() - startTime;
  
  if (elapsedTime <= 5000) {
    drawDayTime();
  } else if (elapsedTime > 5000 && elapsedTime <= 10000) {
    drawEvening();
  } else if (elapsedTime > 10000 && elapsedTime <= 15000) {
    drawNightTime();
  } else {
    startTime = millis();
  }
}

// GRID
function drawGrid() {
  stroke(0);
  strokeWeight(1);
  
  for (let x = 0; x <= width / gridSize; x++) {
    line(x * gridSize, 0, x * gridSize, height);
  }
  
  for (let y = 0; y <= height/ gridSize; y++) {
    line(0, y * gridSize, width, y * gridSize);
  }
}


// TIME OF DAY
function drawDayTime() {
  drawSky(color(180, 50, 100), color(210, 50, 100), 25);
  sun();
  buildCity(hues[0]);
}

function drawEvening() {
  drawSky(color(60, 25, 100), color(30, 100, 100), 25);
  push();
  translate(width / 4, height / 2);
  lateSun(height / 5);
  pop();
  buildCity(hues[2]);
}

function drawNightTime() {
  drawSky(color(240, 50, 15), color(250, 50, 5), 25);

  for (let i = 0; i <= 3; i++) {
    sparklingStars();
  }
  
  moon();
  
  push();
  translate(width / 2, height + (height / 4));
  shootingStar();
  pop();
  
  buildCity(hues[1]);
}

// SKY
function drawSky(_color1, _color2, _alpha) {
  for (let y = 0; y < height; y++) {
    n = map(y, 0, height, 0, 1);
    let newColor = lerpColor(_color1, _color2, n);
    
    newColor.setAlpha(_alpha);
    
    stroke(newColor);
    line(0, y, width, y);
  }
}

// DAYTIME FUNCTIONS
function sun() {
  noStroke();
  
  // LARGE RAYS
  push();
  fill(15, 75, 360);
  translate(width / 4, height / 2);
  rotate(sin(frameCount / -100.0));
  rays(0, 0, width / 5, width / 13, 8);
  pop();
  
  push();
  fill(21, 75, 360);
  translate(width / 4, height / 2);
  rotate(cos(frameCount / -100.0));
  rays(0, 0, width / 5, width / 13, 8);
  pop();
  
  push();
  fill(27, 75, 360);
  translate(width / 4, height / 2);
  rotate(frameCount / -100.0);
  rays(0, 0, width / 5, width / 13, 8);
  pop();
  
  // SMALL RAYS
  push();
  fill(33, 75, 360);
  scale(-1, 1);
  translate(-width / 4, height / 2);
  rotate(frameCount / -100.0);
  rays(0, 0, width / 6, width / 13, 8);
  pop();
  
  push();
  fill(39, 75, 360);
  scale(-1, 1);
  translate(-width / 4, height / 2);
  rotate(sin(frameCount / -100.0));
  rays(0, 0, width / 6, width / 13, 8);
  pop();
  
  push();
  fill(45, 75, 360);
  scale(-1, 1);
  translate(-width / 4, height / 2);
  rotate(cos(frameCount / -100.0));
  rays(0, 0, width / 6, width / 13, 8);
  pop();
  
  fill(51, 75, 360);
  circle(width / 4, height / 2, height / 5);
}

function rays(x, y, radius1, radius2, numPoints) {
  let angle = TWO_PI / numPoints;
  let halfAngle = angle / 2.0;
  
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let shapeX = x + cos(a) * radius2;
    let shapeY = y + sin(a) * radius2;
    vertex(shapeX, shapeY);
    shapeX = x + cos(a + halfAngle) * radius1;
    shapeY = y + sin(a + halfAngle) * radius1;
    vertex(shapeX, shapeY);
  }
  endShape(CLOSE);
}

// EVENING FUNCTIONS
function lateSun(size) {
  push();
  rotate(millis() / 1000);
  let numEllipses = 5;
  for (let i = numEllipses; i > 0; i--) {
    let hueValue = map(i, numEllipses, 0, 51, 0);
    fill(hueValue, 100, 100);
    noStroke();
    ellipse(0, 0, size, size - (i - numEllipses) * 5);
    rotate((i * millis()) / 5000);
    scale(0.75);
  }
  pop();
}

// NIGHTTIME FUNCTIONS
function sparklingStars() {
  fill(360, 0, 100, random(255));
  textSize(random(25));
  text("✦", random(-width, width), random(-height, height));
  circle(random(-width, width), random(-height, height), random(10));
}

function shootingStar() {
  shootingStarAngle += 0.5;
  
  let shootingStarX = -cos(radians(shootingStarAngle)) * shootingStarDistance;
  let shootingStarY = -sin(radians(shootingStarAngle)) * shootingStarDistance;
  
  // if(shootingStarX > 90 && shootingStarY > 0) {
  //   shootingStarAngle = 0;
  // }
  
  fill(220);
  circle(shootingStarX, shootingStarY, 25);
}

function moon() {
  let bgColor = color(250, 50, 5);
  let moonColor = color(250, 5, 100);

  moonAngle -= 0.01;
  moonAngle %= -Math.PI * 2;
  noStroke();
  let phaseX = width / 4;
  let phaseY = height / 2;
  let moonDiameter = height / 5;
  
  let moonColors = [color(0), color(0), color(0), color(0)];

  if (-Math.PI / 2 < moonAngle && moonAngle < 0) {
    moonColors[3] = moonColor;
    moonColors[4] = moonColor;
    moonColors[1] = moonColor;
    moonColors[2] = bgColor;
  } else if (-Math.PI < moonAngle && moonAngle < -Math.PI / 2) {
    moonColors[1] = moonColor;
    moonColors[3] = bgColor;
    moonColors[4] = bgColor;
    moonColors[2] = bgColor;
  } else if (-3 * Math.PI / 2 < moonAngle && moonAngle < -Math.PI) {
    moonColors[4] = bgColor;
    moonColors[2] = moonColor;
    moonColors[1] = bgColor;
    moonColors[3] = bgColor;
  } else if (-2 * Math.PI < moonAngle && moonAngle < -3 * Math.PI / 2) {
    moonColors[4] = color(120, 100, 100, 0);
    moonColors[3] = moonColor;
    moonColors[1] = bgColor;
    moonColors[2] = moonColor;
  }
  
  ellipseMode(CENTER);
  fill(moonColors[1]);
  arc(phaseX, phaseY, moonDiameter, moonDiameter, (PI / 2) + PI, (3 * PI / 2) + PI);
  fill(moonColors[2]);
  arc(phaseX, phaseY, moonDiameter, moonDiameter, (3 * PI / 2) + PI, (PI / 2) + PI);

  let phaseHeight = moonDiameter;
  let widthPhase = map(Math.cos(moonAngle), 0, 1, 0, moonDiameter);

  fill(moonColors[3]);
  arc(phaseX, phaseY, widthPhase - 2, phaseHeight + 1, (PI / 2) + PI, (3 * PI / 2) + PI);
  fill(moonColors[4]);
  arc(phaseX, phaseY, widthPhase - 2, phaseHeight + 1, (3 * PI / 2) + PI, (PI / 2) + PI);
}


// CITYSCAPE
function buildCity(_hue) {
  noStroke();
  
  // BACKGROUND
  push();
  translate(1450, 0);
  buildCapital(color(_hue, 50, brightness[2]), color(_hue, 50, brightness[2] - 12.5), color(_hue, 50, brightness[2] - 25), color(_hue, 50, brightness[2] + 25));
  pop();
  
  push();
  translate(250, 0);
  buildClockTower(color(_hue, 50, brightness[2]), color(_hue, 50, brightness[2] - 12.5), color(_hue, 50, brightness[2] - 25), color(_hue, 50, brightness[2] + 12.5));
  pop();
  
  // MIDGROUND
  push();
  translate(-150, 0);
  buildApartment(200, color(_hue, 50, brightness[1]), color(_hue, 50, brightness[1] - 25), color(_hue, 50, brightness[1] + 25));
  pop();
  
  push();
  translate(475, 0);
  buildFullBridge(color(_hue, 50, brightness[1]), color(_hue, 50, brightness[1] - 12.5), color(_hue, 50, brightness[1] - 25), color(_hue, 50, brightness[2] - 25), color(_hue, 50, brightness[1] + 12.5));
  pop();
  
  // FOREGROUND
  push();
  translate(1500, 0);
  buildApartment(100, color(_hue, 50, brightness[0]), color(_hue, 50, brightness[0] - 25), color(_hue, 40, brightness[0] + 12.5));
  pop();
  
  push();
  translate(100, 0);
  buildChurch(color(_hue, 50, brightness[0]), color(_hue, 50, brightness[0] - 12.5), color(_hue, 50, brightness[0] - 25), color(_hue, 40, brightness[0] + 25));
  pop();
}

function buildApartment(_buildingHeight, _buildingColor, _roofColor, _windowColor) {
  fill(_buildingColor);
  
  rect(0, height - _buildingHeight, _buildingHeight * 2, _buildingHeight);
  
  fill(_roofColor);
  quad(0, height - _buildingHeight,
       _buildingHeight / 2, height - (_buildingHeight * 1.5),
       (_buildingHeight * 1.5), height - (_buildingHeight * 1.5),
       _buildingHeight * 2, height - _buildingHeight);
  
  drawWindow(0, _buildingHeight * 2, height - _buildingHeight, _buildingHeight / 7.5, _buildingHeight / 7.5, _buildingHeight / 3, _buildingHeight / 3, 1, _windowColor);
  drawWindow(0, _buildingHeight * 2, height - (_buildingHeight / 2) - 6.25, _buildingHeight / 7.5, _buildingHeight / 7.5, _buildingHeight / 3, _buildingHeight / 3, 1, _windowColor);
}

function buildChurch(_buildingColor, _detailColor, _roofColor, _windowColor) {
  // LEFT TOWER
  fill(_buildingColor);
  rect(0, height - 300, 50, 300);
  fill(_roofColor);
  triangle(0, height - 300, 25, height - 375, 50, height - 300);
  
  push();
  stroke(_roofColor);
  strokeWeight(3);
  strokeCap(SQUARE);
  line(0, height - 300, 0, height - 350);
  line(50, height - 300, 50, height - 350);
  pop();
  
  // LEFT WINDOWS
  push();
  fill(_windowColor);
  rect(12.5, height - 73.75, 25, 56.25);
  rect(12.5, height - 142.5, 25, 56.25);
  rect(12.5, height - 211.25, 25, 56.25);
  rect(12.5, height - 280, 25, 56.25);
  pop();
  
  // MAIN BUILDING
  fill(_detailColor);
  rect(50, height - 200, 300, 200);
  triangle(50, height - 200, 200, height - 275, 350, height - 200);
  
  push();
  fill(_windowColor);
  circle(200, height - 175, 100);
  drawArch(50, 300, height - 150, 25, 75, 45, 75, 1, _windowColor);
  pop();
  
  // RIGHT TOWER
  fill(_buildingColor);
  rect(350, height - 300, 50, 300);
  fill(_roofColor);
  triangle(350, height - 300, 375, height - 375, 400, height - 300);
  
  push();
  stroke(_roofColor);
  strokeWeight(3);
  strokeCap(SQUARE);
  line(350, height - 300, 350, height - 350);
  line(400, height - 300, 400, height - 350);
  pop();
  
  // RIGHT WINDOWS
  push();
  fill(_windowColor);
  translate(350, 0);
  rect(12.5, height - 73.75, 25, 56.25);
  rect(12.5, height - 142.5, 25, 56.25);
  rect(12.5, height - 211.25, 25, 56.25);
  rect(12.5, height - 280, 25, 56.25);
  pop();
}

function buildClockTower(_buildingColor, _detailColor, _roofColor, _windowColor) {
  fill(_buildingColor);
  
  rect(25, height - 400, 125, 400);
  fill(_detailColor);
  rect(12.5, height - 412.5, 150, 12.5);
  drawWindow(25, 125, height - 400, 25, 25, 25, 50, 1, _windowColor);
  drawWindow(25, 125, height - 325, 25, 25, 25, 50, 1, _windowColor);
  drawWindow(25, 125, height - 250, 25, 25, 25, 50, 1, _windowColor);
  drawWindow(25, 125, height - 175, 25, 25, 25, 50, 1, _windowColor);
  drawWindow(25, 125, height - 100, 25, 25, 25, 50, 1, _windowColor);
  
  fill(_buildingColor);
  rect(25, height - 512.5, 125, 100);
  fill(_detailColor);
  rect(12.5, height - 525, 150, 12.5);
  drawArch(25, 125, height - 500, 25, 25, 25, 62.5, 1, _windowColor);
  
  fill(_buildingColor);
  rect(25, height - 625, 125, 100);
  
  push();
  fill(_windowColor);
  circle(87.5, height - 575, 75);
  pop();
  
  fill(_buildingColor);
  fill(_detailColor);
  quad(25, height - 625,
      62.5, height - 725,
      112.5, height - 725,
      150, height - 625);
  
  fill(_roofColor);
  rect(50, height - 750, 75, 25);
  
  push();
  stroke(_roofColor);
  strokeWeight(3);
  line(62.5, height - 750, 62.5, height - 775);
  line(87.5, height - 750, 87.5, height - 775);
  line(112.5, height - 750, 112.5, height - 775);
  pop();
  
  fill(_roofColor);
  arc(87.5, height - 775, 75, 75, PI, 0); 
  
  stroke(_roofColor);
  strokeWeight(3);
  line(87.5, height - 812.5, 87.5, height - 875);
}

function buildFullBridge(_bridgeColor, _detailColor, _roofColor, _alleyColor, _windowColor) {
  push();
  translate(175, 0);
  buildBridge(_roofColor, _alleyColor);
  pop();
  
  buildBridgeTower(_bridgeColor, _detailColor, _roofColor, _windowColor);
  
  push();
  translate(950, 0);
  buildBridgeTower(_bridgeColor, _detailColor, _roofColor, _windowColor);
  pop();
}

function buildBridge(_bridgeColor, _alleyColor) {
  fill(_bridgeColor);
  
  rect(0, height - 200, 800, 200);
  drawBridgeArch(800, 200, _alleyColor);
}

function drawBridgeArch(_width, _height, _alleyColor) {
  fill(_alleyColor);
  for(let i = 50; i < _width - 50; i += 50) {
    rect(i, height - 50, 200, 50);
    arc(i + 100, height - 50, 200, 200, PI, 0);
    i += 200;
  }
}

function buildBridgeTower(_buildingColor, _detailColor, _roofColor, _windowColor) {
  fill(_buildingColor);
  
  rect(25, height - 187.5, 150, 187.5);
  fill(_detailColor);
  rect(12.5, height - 212.5, 175, 25);
  drawWindow(25, 150, height - 200, 12.5, 25, 55.5, 162.5, 2.5, _windowColor);
  
  fill(_buildingColor);
  rect(25, height - 400, 150, 187.5);
  fill(_detailColor);
  rect(12.5, height - 425, 175, 25);
  
  fill(_roofColor);
  rect(37.5, height - 312.5, 125, 100);
  arc(100, height - 312.5, 125, 125, PI, 0);
  
  push();
  fill(_windowColor);
  arc(100, height - 312.5, 100, 100, PI, 0);
  pop();
  
  drawWindow(37.5, 125, height - 312.5, 12.5, 12.5, 24.875, 87.5, 1, _windowColor);
  
  fill(_roofColor);
  quad(25, height - 425,
      50, height - 500,
      150, height - 500,
      175, height - 425);
}

function buildCapital(_buildingColor, _detailColor, _roofColor, _windowColor) {
  fill(_buildingColor);
  
  // FIRST FLOOR
  rect(25, height - 200, 1000, 200);
  fill(_detailColor);
  rect(12.5, height - 225, 1025, 25);
  drawWindow(25, 1000, height - 225, 25, 25, 63.5, 200, 2.5, _windowColor);
  
  // SECOND FLOOR
  fill(_buildingColor);
  rect(325, height - 250, 400, 250);
  fill(_detailColor);
  rect(312.5, height - 275, 425, 25);
  
  // TOWER
  fill(_buildingColor);
  rect(350, height - 375, 350, 100);
  fill(_detailColor);
  rect(337.5, height - 400, 375, 25);
  
  fill(_buildingColor);
  rect(375, height - 450, 300, 50);
  fill(_detailColor);
  rect(362.5, height - 475, 325, 25);
  drawWindow(375, 300, height - 462.5, 13, 25, 12.5, 25, 1, _windowColor);
  
  fill(_roofColor);
  arc(525, height - 475, 250, 250, PI, 0); 
  
  // FRONT
  // BOTTOM HALF
  fill(_buildingColor);
  rect(375, height - 137.5, 300, 137.5);
  fill(_detailColor);
  rect(362.5, height - 162.5, 325, 25);
  drawArch(375, 300, height - 137.5, 25, 62.5, 75, 75, 2.5, _windowColor);
  
  // TOP HALF
  fill(_buildingColor);
  rect(375, height - 300, 300, 137.5);
  fill(_detailColor);
  rect(362.5, height - 325, 325, 25);
  fill(_roofColor);
  triangle(375, height - 325,
          525, height - 400,
          675, height - 325);
  drawWindow(375, 300, height - 300, 25, 25, 66, 112.5, 2.5, _windowColor);
}

function drawArch(_startPos, _mainWidth, _mainHeight, _lrGap, _topGap, _width, _height, _increment, _windowColor) {
  fill(_windowColor);
  for(let i = _lrGap; i < _mainWidth - _lrGap; i += _lrGap * _increment) {
    rect(i + _startPos, _mainHeight + _topGap, _width, _height);
    arc(i + _startPos + _width / 2, _mainHeight + _topGap, _width, _width, PI, 0);
    i += _lrGap;
  }
}

function drawWindow(_startPos, _mainWidth, _mainHeight, _lrGap, _topGap, _width, _height, _increment, _windowColor) {
  fill(_windowColor);
  for(let i = _lrGap; i <= _mainWidth - _width - _lrGap; i += _width) {
    rect(i + _startPos, _mainHeight + _topGap, _width, _height);
    i += _lrGap;
  }
}