function preload() {
  font = loadFont('data/Nostrav1.0-SettTrial.otf');
  font2 = loadFont('data/GlyphWorld-AnimalSoul.otf');
  font3 = loadFont('data/Nostrav1.0-StreamTrial.otf');
}
   
function setup() { 
  createCanvas (500,500);
  background (100,200,230);
  fill (255,230,10);
  textSize (90);
  textFont (font);
  textAlign (CENTER);
}

function draw() {
  textFont (font);
  textSize(15);
  text ('SMALL', 250,80);
  
  textFont (font2);
  textSize(50);
  text ('MEDIUM', 250,200);
  
  textFont (font3);
  textSize(130);
  text ('BIG', 250,400);
  
}
