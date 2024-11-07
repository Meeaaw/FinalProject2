let bobaSpots = [];
let boba;

const fixedPositions = [
  { x: 100, y: 100 },  { x: 300, y: 100 },  { x: 500, y: 100 },  { x: 700, y: 100 },  
  { x: 100, y: 300 },  { x: 300, y: 300 },  { x: 500, y: 300 },  { x: 700, y: 300 },  
  { x: 100, y: 500 },  { x: 300, y: 500 },  { x: 500, y: 500 },  { x: 700, y: 500 },  
  { x: 100, y: 700 },  { x: 300, y: 700 },  { x: 500, y: 700 },  { x: 700, y: 700 },  
  { x: 200, y: 200 },  { x: 600, y: 200 },  { x: 200, y: 600 },  { x: 600, y: 600 }
];

function preload() {
  bobaSpots = loadJSON("boba.json"); 
  boba = loadImage("bobabg.jpg");    
}

function setup() {
  createCanvas(800, 800);
  background(boba);

  if (typeof bobaSpots === 'object') {
    bobaSpots = Object.values(bobaSpots);
  }
  bobaSpots.sort((a, b) => b.rating - a.rating);

  displayBobaSpots();
}

function displayBobaSpots() {
  for (let i = 0; i < min(bobaSpots.length, fixedPositions.length); i++) {
    let spot = bobaSpots[i];
    
    let position = fixedPositions[i];
    
    spot.x = position.x;
    spot.y = position.y;
    spot.size = 100;  

    fill(139,69,19); 
    noStroke();
    ellipse(spot.x, spot.y, spot.size);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(13);
    text(spot.name, spot.x, spot.y);
  }
}

function draw() {
  // background(boba); 
}

function mousePressed() {
  for (let spot of bobaSpots) {
    let d = dist(mouseX, mouseY, spot.x, spot.y);
    if (d < spot.size / 2) {
      showInfo(spot);
      break;
    }
  }
}

function showInfo(spot) {
  alert(`Name: ${spot.name}\nRating: ${spot.rating}\nReviews: ${spot.reviews}`);
}
