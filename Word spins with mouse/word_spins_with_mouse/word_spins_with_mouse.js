function preload() {
  
  font = loadFont('data/Nostrav1.0-SettTrial.otf');
  font2 = loadFont('data/GlyphWorld-AnimalSoul.otf');
  font3 = loadFont('data/Nostrav1.0-StreamTrial.otf');
}

  var spin=0;
  var letterSize;
   
function setup() { 
 
  createCanvas (600,600);
  background (100,200,230);
  fill (255,230,10);
  angleMode(DEGREES);
  //textSize (90);
  //textFont (font);
  textAlign (CENTER);
  
}

function draw() {
  
  fill (255,230,10);
  translate(300,300); //Set the new '0'. 0,0 now = 300,00
  rotate(spin);
  textSize(letterSize);
  textFont (font2);
  text ('MEDIUM', 0,25);
  spin = spin + map(mouseX,0,600,-20,20);
  letterSize=map(mouseY,0,600,8,80);
  
  stroke(0);
  fill (100,200,230,30); //shade of the colour & alpha value
  //rect (100,100,500,500);
  
  noStroke();
  fill (100,200,230); //writing over the layers
  pop();
  background (100,200,230,50);
  
  
}
