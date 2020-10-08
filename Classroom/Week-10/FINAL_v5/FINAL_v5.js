let bg;
let y = 0;
let pos = 0;
let mic;

function preload(){
    utopiaCAPS = loadStrings('data/utopia_text_CAPS.txt');
    MGregular = loadFont('data/MGRegular.otf');
    
    Clouds = loadImage('data/blurred_clouds2.jpg');
    cloud = loadImage('data/cloud.png');
    rock = loadImage('data/rock.png');
    rock2 = loadImage('data/rock2.png');
    rock3 = loadImage('data/rock3.png');
    earth = loadImage('data/Earth_green.png');

    fulltext = loadImage('data/Phase_5.png');
}

function setup(){
  createCanvas(windowWidth,windowHeight);
 
  getAudioContext().suspend();
  mic = new p5.AudioIn();
  mic.start();
 
}

let value=255;

function draw(){
  background(238,240,255);
  textAlign(LEFT);
  imageMode(CENTER);
  
  let vol = mic.getLevel()*40;
  let h = map(vol, 0, 1, 0, 75);
  
  translate(windowWidth/2,windowHeight/2);
  tint(255, h);
  image(fulltext,0,pos+300,width, fulltext.height*width/fulltext.width);
  
  noTint();
  image(rock,windowWidth/6,pos*3+windowWidth/6,1557/4,1139/4);
  image(cloud,windowWidth/4,pos/2-250,3480/3,1336/3);
  image(cloud,-windowWidth/4,pos/3+300,3480/3,1336/3);
  
  fill(0);
  textSize(30);
  textFont (MGregular);
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
