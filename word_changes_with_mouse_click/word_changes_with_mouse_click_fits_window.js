function preload() {
  
  pilow = loadFont('data/pilowlava.otf');
}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  //background (255);
  //fill (245)
  stroke (0);
  textAlign (CENTER)
}

function draw() {

  if (mouseIsPressed) {
  background (250,50,50);
  }else {
  background (50,50,240);
  }
  
  if (mouseIsPressed) {
  fill (20);
  }else {
  fill (245);
  }
 
  noStroke (0);
  textFont(pilow);
  textSize (80);
  text ('NOW YOU', windowWidth/2, windowHeight/2);
  text ('SEE ME', windowWidth/2, windowHeight/2+80);
  
  if (mouseIsPressed) {
  rectMode(CENTER);
  fill (250,50,50);
  rect (windowWidth/2, windowHeight/2+60,400,100);
  fill (0);
  text ('DONT', windowWidth/2, windowHeight/2+80);
  }

}
