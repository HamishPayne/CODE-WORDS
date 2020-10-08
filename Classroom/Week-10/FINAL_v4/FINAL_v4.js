let bg;
let y = 0;
let pos = 0;
let mic;

function preload(){
    //utopia = loadStrings('data/utopia_text.txt');
    utopiaCAPS = loadStrings('data/utopia_text_CAPS.txt');
    //Monument = loadFont('data/MonumentGroteskTrial-Mono.otf');
    //Serifbabe = loadFont('data/Serifbabe.otf');
    MGregular = loadFont('data/MGRegular.otf');
    
    Clouds = loadImage('data/blurred_clouds2.jpg');
    cloud = loadImage('data/cloud.png');
    rock = loadImage('data/rock.png');
    rock2 = loadImage('data/rock2.png');
    rock3 = loadImage('data/rock3.png');
    earth = loadImage('data/Earth_green.png');
    
    //EUGENIC = loadImage('data/EUGENIC_con1.png');
    //CONSCIOUSNESS = loadImage('data/CONSCIOUSNESS_mar1.png');
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
  //image(Clouds,0,0,5120,2880);
  textAlign(LEFT);
  imageMode(CENTER);
  
  let vol = mic.getLevel()*40;
  let h = map(vol, 0, 1, 0, 75);
  
  translate(windowWidth/2,windowHeight/2);
  tint(255, h);
  image(fulltext,0,pos+300,1300,1550);
  
  noTint();
  image(rock,windowWidth/6,pos*3+windowWidth/6,1557/4,1139/4);
  //image(rock2,windowWidth/3,pos*3,1557/4-windowWidth/2,1139/4);
  //image(rock3,-500,pos*3+windowWidth,1557/4,1139/4);
  image(cloud,windowWidth/4,pos/2-250,3480/3,1336/3);
  image(cloud,-windowWidth/4,pos/3+300,3480/3,1336/3);
  
  //translate (0,-windowHeight/2+30);
  //fill(0);
  //textSize(30);
  //textFont (MGregular);
  //text ('PHYSICAL',-windowWidth/2+10,-windowHeight/2+30);
  //text ('DIGITAL',windowWidth/2-120,-windowHeight/2+30);
 
  
    
  //strokeWeight(0);
  //textSize(windowWidth/90);
  //fill (0,0,0,value);
  //text ('Click, Shout, Scroll',0,0);
 
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
