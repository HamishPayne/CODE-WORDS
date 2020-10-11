let pos = 0;
let mic;

let x;
let y;
let k;

let r = 25;

function preload(){
    utopiaCAPS = loadStrings('data/utopia_text_CAPS.txt');
    
    Monument = loadFont('data/MGRegular.otf');
    
    rock = loadImage('data/rock.png');
    rock2 = loadImage('data/rock2.png');
    rock3 = loadImage('data/rock3.png');
    
    bush3 = loadImage('data/bush3.png');
    bush4 = loadImage('data/bush4.png');
    bottom_bush = loadImage('data/bottom_bush.png');
        
    fulltext = loadImage('data/Full_Text.png');
}

  //x = x + 3;

function setup(){
  createCanvas(windowWidth,windowHeight);
 
  getAudioContext().suspend();
  mic = new p5.AudioIn();
  mic.start();
   
 x = random(width);
 y = random(height);
 
 b = random(0,width);
 c = random(0,width);
 d = random(0,width);
 e = random(0,height);
 f = random(0,height);
 g = random(0,height);

 k = 0;
}

let value=245;
let tran=0;

function draw(){
  background(250);
  //image (clouds, 0, 0, windowWidth, windowHeight);
    
  let vol = mic.getLevel()*40;
  let h = map(vol*5, 0, 1, 0, 75);
  
  p = (fulltext.height*width/fulltext.width);
  
  image(fulltext, 0, k+windowHeight/20, width, p);
  k = k - h/2000;
  
  strokeWeight(0);
  fill (250,250,250, tran);
  rect(0,0, windowWidth, windowHeight);
  
  
  image(rock,b+h, e+h, width/5, rock.height*width/rock.width/5);
  image(rock2,c-h, f+h/4, width/6, rock2.height*width/rock2.width/6);
  image(rock3,d-h, g-h, width/6, rock3.height*width/rock3.width/6);
  
  m = bush3.height*width/bush3.width/2
  n = bush4.height*width/bush4.width/2
  o = bottom_bush.height*width/bottom_bush.width
  
  image(bottom_bush,0,windowHeight-o+h, width, o);
  image(bush3,windowWidth-m,0-h/4, width/2, m);
  image(bush4,0,0-h, width/2, n);
  
  translate();
  fill (250,value);
  rect (0,0,windowWidth,windowHeight);
  
  textAlign(CENTER);
  textFont (Monument);
  strokeWeight(0);
  textSize(windowWidth/90);
  fill (10,10,10,value);
  text ('CLICK TO BEGIN YOUR TRANSITION INTO A DIGITAL UTOPIA.\nPHYSICAL INTERACTION IS NOT ADVISED.',windowWidth/2,windowHeight/2);
  
}

function mousePressed() {
  userStartAudio();
   if (value === 255) {
    value = 0;
  } else {
    value = 0;
  }
  
}
function mouseWheel(event) {
  print(event.delta);
  pos += event.delta;

}
function keyPressed() {
  if (tran === 0) {
    tran = 255;
  } else {
    tran = 255;
  }
}
