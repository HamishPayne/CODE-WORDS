function preload() {
  
  pilow = loadFont('data/pilowlava.otf');
}

function setup() {
  
  createCanvas (600,600);
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
  text ('NOW YOU', 300, 290);
  text ('SEE ME', 300, 370);
  
  if (mouseIsPressed) {
  fill (250,50,50);
  rect (100,300,400,100);
  fill (0);
  text ('DONT', 300, 370);
  }

}
