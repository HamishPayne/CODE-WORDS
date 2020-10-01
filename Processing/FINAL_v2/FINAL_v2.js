let bg;
let y = 0;
let pos = 0;
let mic;

function preload(){
    //utopia = loadStrings('data/utopia_text.txt');
    utopiaCAPS = loadStrings('data/utopia_text_CAPS.txt');
    Monument = loadFont('data/MonumentGroteskTrial-Mono.otf');
    Serifbabe = loadFont('data/Serifbabe.otf');
    MGregular = loadFont('data/MGRegular.otf');
    Clouds = loadImage('data/blurred_clouds2.jpg');
    
    cloud = loadImage('data/cloud.png');
    rock = loadImage('data/rock.png');
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  
  getAudioContext().suspend();
  mic = new p5.AudioIn();
  mic.start();
  
  
}

let value=255;

function draw(){
  background(255);
  image(Clouds,0,0,5120,2880);
  
  let vol = mic.getLevel();
  //fill(127);
  //stroke(0);

  let h = map(vol*70, 0, 1, height, 0);
  //ellipse(width / 2, h - 25, 50, 50);
  
  textAlign(CENTER);
  imageMode(CENTER);
  
  strokeWeight(1);
  stroke(0);

  //Utopia Text
  textFont (Serifbabe);
  textSize(windowWidth/20);
  fill(0);
  text (utopiaCAPS,0,pos,windowWidth-5, windowHeight*10);
  
  //Images
  translate(windowWidth/2,windowHeight/2);
  image(cloud,0,pos/2-50,3480/3,1336/3);
  image(rock,0,pos*4,1557/3,1139/3);
  
  background(255,255,255,h);
  
  strokeWeight(0);
  textSize(windowWidth/90);
  fill (0,0,0,value);
  text ('Click, Shout, Scroll',0,0);
 
}

function mousePressed() {
  userStartAudio();
  
   if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
function mouseWheel(event) {
  print(event.delta);
  pos += event.delta;

}
