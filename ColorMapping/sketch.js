
var r = 0;
var g = 50;
var b = 255;
//var col;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
}


function draw(){
//setting background 
  background(r, g, b);

  r = map(mouseX, 0, 1200, 0, 255);
  b = map(mouseY, 0, 400, 0, 255);
  g = map(mouseX, 0, 1200, 0, 255);

  fill(100);
  ellipse(mouseX, mouseY, 40);
}