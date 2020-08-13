function setup() {

font = loadFont('data/PxGrotesk-Regular.otf');
}

function setup() { 
  createCanvas (600,600);
  background(255);
  fill (0);
  textSize(32);
  textFont (font);
}

function draw() {
  text ('HELLO WORLD', 300,300);
}
